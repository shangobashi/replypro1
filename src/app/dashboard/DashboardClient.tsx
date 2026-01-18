'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  MessageSquare,
  Loader2,
  Copy,
  Check,
  LogOut,
  Crown,
  RefreshCw,
  Sparkles
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'
import type { ReviewTone } from '@/lib/ai'

interface DashboardClientProps {
  user: User
  businessName?: string
  isPro: boolean
  remainingResponses: number | null
}

const toneOptions: { value: ReviewTone; label: string; description: string }[] = [
  { value: 'professional', label: 'Professional', description: 'Formal and business-appropriate' },
  { value: 'friendly', label: 'Friendly', description: 'Warm and personable' },
  { value: 'apologetic', label: 'Apologetic', description: 'Sincere and understanding' },
  { value: 'enthusiastic', label: 'Enthusiastic', description: 'Excited and appreciative' },
  { value: 'empathetic', label: 'Empathetic', description: 'Compassionate and caring' },
]

export default function DashboardClient({
  user,
  businessName,
  isPro,
  remainingResponses
}: DashboardClientProps) {
  const [review, setReview] = useState('')
  const [tone, setTone] = useState<ReviewTone>('professional')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleGenerate = async () => {
    if (!review.trim()) {
      setError('Please enter a review to respond to')
      return
    }

    if (remainingResponses !== null && remainingResponses <= 0) {
      setError('You\'ve reached your monthly limit. Upgrade to Pro for unlimited responses.')
      return
    }

    setError('')
    setLoading(true)
    setResponse('')

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          review,
          tone,
          businessName,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to generate response')
      }

      setResponse(data.response)
      router.refresh() // Refresh to update usage count
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(response)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">ReplyPro</span>
            </div>
            <div className="flex items-center gap-4">
              {!isPro && (
                <Link
                  href="/api/checkout"
                  className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Crown className="w-4 h-4" />
                  Upgrade to Pro
                </Link>
              )}
              {isPro && (
                <span className="flex items-center gap-1 text-sm font-medium text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                  <Crown className="w-4 h-4" />
                  Pro
                </span>
              )}
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Usage Banner */}
        {remainingResponses !== null && (
          <div className={`mb-6 p-4 rounded-lg ${remainingResponses > 0 ? 'bg-primary-50 text-primary-700' : 'bg-red-50 text-red-700'}`}>
            <div className="flex items-center justify-between">
              <span>
                {remainingResponses > 0
                  ? `${remainingResponses} free responses remaining this month`
                  : 'You\'ve used all your free responses this month'
                }
              </span>
              <Link
                href="/api/checkout"
                className="text-sm font-medium underline hover:no-underline"
              >
                Upgrade for unlimited
              </Link>
            </div>
          </div>
        )}

        {/* Generator Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary-600" />
            <h1 className="text-2xl font-bold text-gray-900">Generate Response</h1>
          </div>

          {/* Review Input */}
          <div className="mb-6">
            <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
              Paste the customer review
            </label>
            <textarea
              id="review"
              rows={5}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 resize-none"
              placeholder="Paste the customer review here..."
            />
          </div>

          {/* Tone Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select response tone
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {toneOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setTone(option.value)}
                  className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition ${
                    tone === option.value
                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || (remainingResponses !== null && remainingResponses <= 0)}
            className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Response
              </>
            )}
          </button>
        </div>

        {/* Response Card */}
        {response && (
          <div className="mt-6 bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Your Response</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setResponse('')
                    handleGenerate()
                  }}
                  disabled={loading}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  <RefreshCw className="w-4 h-4" />
                  Regenerate
                </button>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-gray-700 leading-relaxed">
              {response}
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Tip: Review the generated response and personalize it with specific details before posting.</p>
        </div>
      </main>
    </div>
  )
}
