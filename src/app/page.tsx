'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { CheckCircle, Star, Clock, Zap, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const demoRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple hover animations for cards
    const cards = document.querySelectorAll('.animate-card')
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -4, duration: 0.3, ease: 'power2.out' })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' })
      })
    })

    // Button hover glow effect
    const glowButtons = document.querySelectorAll('.glow-button')
    glowButtons.forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.02, duration: 0.2, ease: 'power2.out' })
      })
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' })
      })
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#0c0c0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0c0c0f]/90 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-violet-500" />
              <span className="text-lg font-semibold">ReplyPro</span>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/login" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                Sign in
              </Link>
              <Button asChild size="sm" className="rounded-full bg-violet-600 hover:bg-violet-500 text-white">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-6 px-4 py-1.5 text-sm font-medium bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/20">
            <Zap className="w-3.5 h-3.5 mr-1.5" />
            AI-Powered Review Management
          </Badge>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              Respond to reviews
            </span>
            <br />
            <span className="text-zinc-400">10x faster</span>
          </h1>

          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Generate professional, personalized responses for Google, Yelp, and Amazon reviews in seconds. Save hours every week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="glow-button rounded-full px-8 bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/25">
              <Link href="/signup">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-zinc-700 text-white hover:bg-zinc-800 hover:text-white">
              <a href="#demo">See how it works</a>
            </Button>
          </div>

          <p className="text-sm text-zinc-500 mt-6">
            No credit card required · 5 free responses per month
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" ref={demoRef} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              See it in action
            </h2>
            <p className="text-zinc-400">
              Transform negative reviews into opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="animate-card bg-zinc-900/50 border-zinc-800 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2].map((i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                    {[3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-zinc-700" />
                    ))}
                  </div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wide">Customer Review</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  "The food was cold when it arrived and the delivery took over an hour. Very disappointed with the service. Won't be ordering again."
                </p>
              </CardContent>
            </Card>

            <Card className="animate-card bg-zinc-900/50 border-violet-500/30 overflow-hidden shadow-lg shadow-violet-500/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-violet-400" />
                  <span className="text-xs text-zinc-500 uppercase tracking-wide">AI Response</span>
                </div>
                <p className="text-zinc-200 leading-relaxed">
                  "We sincerely apologize for your disappointing experience. Cold food and long wait times are not the standards we strive for. We'd love the opportunity to make this right — please reach out to us directly so we can address this and ensure your next order exceeds expectations."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Why business owners love ReplyPro
            </h2>
            <p className="text-zinc-400">
              Save hours every week while maintaining a stellar online reputation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="animate-card bg-zinc-900/50 border-zinc-800 text-center p-6">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 text-violet-400 mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Save 10+ hours weekly</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  What used to take 5-10 minutes per review now takes seconds. Focus on running your business.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-card bg-zinc-900/50 border-zinc-800 text-center p-6">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 text-violet-400 mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Multiple tones</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Professional, friendly, apologetic, or enthusiastic — match your brand voice perfectly.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-card bg-zinc-900/50 border-zinc-800 text-center p-6">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 text-violet-400 mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Better ratings</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Thoughtful responses encourage updated reviews and build customer loyalty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" ref={pricingRef} className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Simple pricing
            </h2>
            <p className="text-zinc-400">
              Start free, upgrade when you're ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="animate-card bg-zinc-900/50 border-zinc-800 p-8">
              <h3 className="text-lg font-semibold text-white">Free</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-zinc-500 ml-2">/month</span>
              </div>
              <p className="mt-3 text-sm text-zinc-500">Perfect for trying out ReplyPro</p>
              <ul className="mt-8 space-y-4">
                <PricingFeature>5 responses per month</PricingFeature>
                <PricingFeature>All tone options</PricingFeature>
                <PricingFeature>Instant generation</PricingFeature>
                <PricingFeature>Copy to clipboard</PricingFeature>
              </ul>
              <Button asChild variant="outline" className="w-full mt-8 rounded-full border-zinc-700 text-white hover:bg-zinc-800">
                <Link href="/signup">Get started</Link>
              </Button>
            </Card>

            <Card className="animate-card bg-zinc-900/50 border-violet-500/30 p-8 relative shadow-lg shadow-violet-500/10">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white border-0">
                Most popular
              </Badge>
              <h3 className="text-lg font-semibold text-white">Pro</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-white">$19</span>
                <span className="text-zinc-500 ml-2">/month</span>
              </div>
              <p className="mt-3 text-sm text-zinc-500">Everything you need to manage reviews</p>
              <ul className="mt-8 space-y-4">
                <PricingFeature>Unlimited responses</PricingFeature>
                <PricingFeature>All tone options</PricingFeature>
                <PricingFeature>Response history</PricingFeature>
                <PricingFeature>Save templates</PricingFeature>
                <PricingFeature>Priority support</PricingFeature>
              </ul>
              <Button asChild className="glow-button w-full mt-8 rounded-full bg-violet-600 hover:bg-violet-500 text-white">
                <Link href="/signup?plan=pro">Start 7-day trial</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Trusted by business owners
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="animate-card bg-zinc-900/50 border-zinc-800 p-6">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  "ReplyPro saves me at least 5 hours a week. The responses are thoughtful and match my brand perfectly."
                </p>
                <div>
                  <div className="font-medium text-sm text-white">Sarah M.</div>
                  <div className="text-xs text-zinc-500">Restaurant Owner</div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-card bg-zinc-900/50 border-zinc-800 p-6">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  "Finally, a tool that helps me respond to negative reviews professionally without spending my whole day on it."
                </p>
                <div>
                  <div className="font-medium text-sm text-white">Mike T.</div>
                  <div className="text-xs text-zinc-500">Auto Shop Manager</div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-card bg-zinc-900/50 border-zinc-800 p-6">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  "My review response rate went from 20% to 95%. Customers notice and appreciate the personal touch."
                </p>
                <div>
                  <div className="font-medium text-sm text-white">Lisa K.</div>
                  <div className="text-xs text-zinc-500">Salon Owner</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to save hours every week?
          </h2>
          <p className="text-zinc-400 mb-8">
            Join thousands of business owners using AI-powered review responses.
          </p>
          <Button asChild size="lg" className="glow-button rounded-full px-8 bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/25">
            <Link href="/signup">
              Start your free trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-violet-500" />
              <span className="font-semibold">ReplyPro</span>
            </div>
            <div className="flex gap-8 text-sm text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="mailto:support@replypro.io" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-zinc-500">
            <p>ReplyPro by <span className="font-medium text-zinc-400">BLUELABS</span></p>
            <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm text-zinc-400">
      <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0" />
      {children}
    </li>
  )
}
