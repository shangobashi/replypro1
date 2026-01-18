import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { generateReviewResponse, detectReviewSentiment, type ReviewTone } from '@/lib/ai'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get request body
    const { review, tone, businessName } = await request.json() as {
      review: string
      tone: ReviewTone
      businessName?: string
    }

    if (!review || !tone) {
      return NextResponse.json({ error: 'Review and tone are required' }, { status: 400 })
    }

    // Check if user is pro
    const { data: profile } = await supabase
      .from('profiles')
      .select('is_pro')
      .eq('id', user.id)
      .single()

    const isPro = profile?.is_pro || false

    // Check usage limits for free users
    if (!isPro) {
      const startOfMonth = new Date()
      startOfMonth.setDate(1)
      startOfMonth.setHours(0, 0, 0, 0)

      const { count } = await supabase
        .from('responses')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .gte('created_at', startOfMonth.toISOString())

      if ((count || 0) >= 5) {
        return NextResponse.json(
          { error: 'Monthly limit reached. Upgrade to Pro for unlimited responses.' },
          { status: 429 }
        )
      }
    }

    // Detect sentiment
    const isPositive = await detectReviewSentiment(review)

    // Generate response
    const response = await generateReviewResponse({
      review,
      tone,
      businessName,
      isPositive,
    })

    // Save to database
    await supabase.from('responses').insert({
      user_id: user.id,
      original_review: review,
      generated_response: response,
      tone,
      is_positive: isPositive,
    })

    return NextResponse.json({ response, isPositive })
  } catch (error) {
    console.error('Generate error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response. Please try again.' },
      { status: 500 }
    )
  }
}
