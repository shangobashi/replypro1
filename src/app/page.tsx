'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle, Star, Clock, Zap, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/ThemeToggle'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const demoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      })

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      })

      gsap.from('.hero-buttons', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      })

      // Demo cards animation
      gsap.from('.demo-card', {
        scrollTrigger: {
          trigger: demoRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })

      // Feature cards animation
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })

      // Pricing cards animation
      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })

      // Testimonial cards animation
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl z-50 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">ReplyPro</span>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/login" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
                Sign in
              </Link>
              <Button asChild size="sm" className="rounded-full">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="hero-badge mb-6 px-4 py-1.5 text-sm font-medium">
            <Zap className="w-3.5 h-3.5 mr-1.5" />
            AI-Powered Review Management
          </Badge>

          <h1 className="hero-title text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
            <span className="gradient-text">Respond to reviews</span>
            <br />
            <span className="text-muted-foreground">10x faster</span>
          </h1>

          <p className="hero-subtitle text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Generate professional, personalized responses for Google, Yelp, and Amazon reviews in seconds. Save hours every week.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 glow">
              <Link href="/signup">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <a href="#demo">See how it works</a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required · 5 free responses per month
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" ref={demoRef} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              See it in action
            </h2>
            <p className="text-muted-foreground">
              Transform negative reviews into opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="demo-card overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2].map((i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                    {[3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-muted-foreground/30" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">Customer Review</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "The food was cold when it arrived and the delivery took over an hour. Very disappointed with the service. Won't be ordering again."
                </p>
              </CardContent>
            </Card>

            <Card className="demo-card gradient-border overflow-hidden glow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">AI Response</span>
                </div>
                <p className="leading-relaxed">
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
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Why business owners love ReplyPro
            </h2>
            <p className="text-muted-foreground">
              Save hours every week while maintaining a stellar online reputation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="feature-card text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Save 10+ hours weekly</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  What used to take 5-10 minutes per review now takes seconds. Focus on running your business.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Multiple tones</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Professional, friendly, apologetic, or enthusiastic — match your brand voice perfectly.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Better ratings</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Simple pricing
            </h2>
            <p className="text-muted-foreground">
              Start free, upgrade when you're ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="pricing-card p-8">
              <h3 className="text-lg font-semibold">Free</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-semibold">$0</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Perfect for trying out ReplyPro</p>
              <ul className="mt-8 space-y-4">
                <PricingFeature>5 responses per month</PricingFeature>
                <PricingFeature>All tone options</PricingFeature>
                <PricingFeature>Instant generation</PricingFeature>
                <PricingFeature>Copy to clipboard</PricingFeature>
              </ul>
              <Button asChild variant="outline" className="w-full mt-8 rounded-full">
                <Link href="/signup">Get started</Link>
              </Button>
            </Card>

            <Card className="pricing-card gradient-border p-8 relative glow">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                Most popular
              </Badge>
              <h3 className="text-lg font-semibold">Pro</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-semibold">$19</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Everything you need to manage reviews</p>
              <ul className="mt-8 space-y-4">
                <PricingFeature>Unlimited responses</PricingFeature>
                <PricingFeature>All tone options</PricingFeature>
                <PricingFeature>Response history</PricingFeature>
                <PricingFeature>Save templates</PricingFeature>
                <PricingFeature>Priority support</PricingFeature>
              </ul>
              <Button asChild className="w-full mt-8 rounded-full">
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
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Trusted by business owners
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="testimonial-card p-6">
              <CardContent className="pt-0">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "ReplyPro saves me at least 5 hours a week. The responses are thoughtful and match my brand perfectly."
                </p>
                <div>
                  <div className="font-medium text-sm">Sarah M.</div>
                  <div className="text-xs text-muted-foreground">Restaurant Owner</div>
                </div>
              </CardContent>
            </Card>

            <Card className="testimonial-card p-6">
              <CardContent className="pt-0">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "Finally, a tool that helps me respond to negative reviews professionally without spending my whole day on it."
                </p>
                <div>
                  <div className="font-medium text-sm">Mike T.</div>
                  <div className="text-xs text-muted-foreground">Auto Shop Manager</div>
                </div>
              </CardContent>
            </Card>

            <Card className="testimonial-card p-6">
              <CardContent className="pt-0">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "My review response rate went from 20% to 95%. Customers notice and appreciate the personal touch."
                </p>
                <div>
                  <div className="font-medium text-sm">Lisa K.</div>
                  <div className="text-xs text-muted-foreground">Salon Owner</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Ready to save hours every week?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of business owners using AI-powered review responses.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 glow">
            <Link href="/signup">
              Start your free trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="font-semibold">ReplyPro</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="mailto:support@replypro.io" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>ReplyPro by <span className="font-medium">BLUELABS</span></p>
            <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm text-muted-foreground">
      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
      {children}
    </li>
  )
}
