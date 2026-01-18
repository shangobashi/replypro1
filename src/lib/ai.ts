import Groq from 'groq-sdk'

// Lazy initialization to avoid build-time errors
let groqInstance: Groq | null = null

function getGroq(): Groq {
  if (!groqInstance) {
    groqInstance = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    })
  }
  return groqInstance
}

export type ReviewTone = 'professional' | 'friendly' | 'apologetic' | 'enthusiastic' | 'empathetic'

interface GenerateResponseParams {
  review: string
  businessName?: string
  tone: ReviewTone
  isPositive: boolean
}

const toneInstructions: Record<ReviewTone, string> = {
  professional: 'Use a professional, business-appropriate tone. Be courteous and formal.',
  friendly: 'Use a warm, friendly tone. Be personable and approachable.',
  apologetic: 'Use a sincere, apologetic tone. Acknowledge issues and express genuine concern.',
  enthusiastic: 'Use an enthusiastic, appreciative tone. Show genuine excitement and gratitude.',
  empathetic: 'Use an empathetic, understanding tone. Show that you truly understand the customer\'s perspective.',
}

export async function generateReviewResponse({
  review,
  businessName,
  tone,
  isPositive,
}: GenerateResponseParams): Promise<string> {
  const businessContext = businessName ? `You are responding on behalf of ${businessName}.` : ''

  const prompt = `You are an expert at crafting professional responses to customer reviews. ${businessContext}

Review type: ${isPositive ? 'Positive' : 'Negative'}
Tone instruction: ${toneInstructions[tone]}

Customer Review:
"${review}"

Write a response that:
1. Directly addresses the specific points mentioned in the review
2. ${isPositive ? 'Thanks the customer genuinely for their positive feedback' : 'Acknowledges any issues and offers to make things right'}
3. ${isPositive ? 'Encourages them to return' : 'Provides a way to follow up (without giving specific contact info)'}
4. Is concise (2-4 sentences)
5. Feels personal and authentic, not templated
6. Uses the specified tone throughout

Write ONLY the response text, nothing else.`

  const groq = getGroq()
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'llama-3.3-70b-versatile',
    temperature: 0.7,
    max_tokens: 300,
  })

  return completion.choices[0]?.message?.content || 'Unable to generate response. Please try again.'
}

export async function detectReviewSentiment(review: string): Promise<boolean> {
  const groq = getGroq()
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `Analyze this customer review and respond with ONLY "positive" or "negative":

"${review}"`,
      },
    ],
    model: 'llama-3.3-70b-versatile',
    temperature: 0,
    max_tokens: 10,
  })

  const result = completion.choices[0]?.message?.content?.toLowerCase() || ''
  return result.includes('positive')
}
