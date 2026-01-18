import Link from 'next/link'
import { CheckCircle, Star, Clock, Zap, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-surface dark:bg-surface-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-xl z-50 border-b border-border/50 dark:border-border-dark/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold text-content dark:text-content-inverse">ReplyPro</span>
            </div>
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <Link
                href="/login"
                className="text-content-secondary dark:text-content-inverse-secondary hover:text-content dark:hover:text-content-inverse text-sm font-medium transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="bg-content dark:bg-content-inverse text-white dark:text-content px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-subtle dark:bg-accent-subtle-dark text-accent text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            AI-Powered Review Management
          </div>
          <h1 className="text-5xl sm:text-6xl font-semibold text-content dark:text-content-inverse mb-6 tracking-tight leading-[1.1]">
            Respond to reviews
            <br />
            <span className="text-content-secondary dark:text-content-inverse-secondary">10x faster</span>
          </h1>
          <p className="text-lg text-content-secondary dark:text-content-inverse-secondary mb-10 max-w-xl mx-auto leading-relaxed">
            Generate professional, personalized responses for Google, Yelp, and Amazon reviews in seconds. Save hours every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-content dark:bg-content-inverse text-white dark:text-content px-6 py-3 rounded-full text-base font-medium hover:opacity-80 transition-opacity"
            >
              Start free trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 text-content dark:text-content-inverse px-6 py-3 rounded-full text-base font-medium border border-border dark:border-border-dark hover:bg-surface-secondary dark:hover:bg-surface-dark-secondary transition-colors"
            >
              See how it works
            </a>
          </div>
          <p className="text-sm text-content-tertiary dark:text-content-inverse-secondary mt-6">
            No credit card required · 5 free responses per month
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 px-6 bg-surface-secondary dark:bg-surface-dark-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-content dark:text-content-inverse mb-4 tracking-tight">
              See it in action
            </h2>
            <p className="text-content-secondary dark:text-content-inverse-secondary">
              Transform negative reviews into opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-surface dark:bg-surface-dark-tertiary rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  {[3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-border dark:text-border-dark" />
                  ))}
                </div>
                <span className="text-xs text-content-tertiary dark:text-content-inverse-secondary uppercase tracking-wide">Customer Review</span>
              </div>
              <p className="text-content-secondary dark:text-content-inverse-secondary leading-relaxed">
                "The food was cold when it arrived and the delivery took over an hour. Very disappointed with the service. Won't be ordering again."
              </p>
            </div>
            {/* After */}
            <div className="bg-surface dark:bg-surface-dark-tertiary rounded-2xl p-6 shadow-sm border-l-4 border-accent">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-xs text-content-tertiary dark:text-content-inverse-secondary uppercase tracking-wide">AI Response</span>
              </div>
              <p className="text-content dark:text-content-inverse leading-relaxed">
                "We sincerely apologize for your disappointing experience. Cold food and long wait times are not the standards we strive for. We'd love the opportunity to make this right — please reach out to us directly so we can address this and ensure your next order exceeds expectations."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-content dark:text-content-inverse mb-4 tracking-tight">
              Why business owners love ReplyPro
            </h2>
            <p className="text-content-secondary dark:text-content-inverse-secondary">
              Save hours every week while maintaining a stellar online reputation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Save 10+ hours weekly"
              description="What used to take 5-10 minutes per review now takes seconds. Focus on running your business."
            />
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Multiple tones"
              description="Professional, friendly, apologetic, or enthusiastic — match your brand voice perfectly."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Better ratings"
              description="Thoughtful responses encourage updated reviews and build customer loyalty."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-surface-secondary dark:bg-surface-dark-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-content dark:text-content-inverse mb-4 tracking-tight">
              Simple pricing
            </h2>
            <p className="text-content-secondary dark:text-content-inverse-secondary">
              Start free, upgrade when you're ready
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free Plan */}
            <div className="bg-surface dark:bg-surface-dark-tertiary rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-content dark:text-content-inverse">Free</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-semibold text-content dark:text-content-inverse">$0</span>
                <span className="text-content-secondary dark:text-content-inverse-secondary ml-2">/month</span>
              </div>
              <p className="mt-3 text-sm text-content-tertiary dark:text-content-inverse-secondary">Perfect for trying out ReplyPro</p>
              <ul className="mt-8 space-y-4">
                <PricingFeature>5 responses per month</PricingFeature>
                <PricingFeature>All tone options</PricingFeature>
                <PricingFeature>Instant generation</PricingFeature>
                <PricingFeature>Copy to clipboard</PricingFeature>
              </ul>
              <Link
                href="/signup"
                className="mt-8 block w-full text-center text-content dark:text-content-inverse py-3 rounded-full font-medium border border-border dark:border-border-dark hover:bg-surface-secondary dark:hover:bg-surface-dark-secondary transition-colors"
              >
                Get started
              </Link>
            </div>
            {/* Pro Plan */}
            <div className="bg-surface dark:bg-surface-dark-tertiary rounded-2xl p-8 ring-2 ring-accent relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                Most popular
              </div>
              <h3 className="text-lg font-semibold text-content dark:text-content-inverse">Pro</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-semibold text-content dark:text-content-inverse">$19</span>
                <span className="text-content-secondary dark:text-content-inverse-secondary ml-2">/month</span>
              </div>
              <p className="mt-3 text-sm text-content-tertiary dark:text-content-inverse-secondary">Everything you need to manage reviews</p>
              <ul className="mt-8 space-y-4">
                <PricingFeature>Unlimited responses</PricingFeature>
                <PricingFeature>All tone options</PricingFeature>
                <PricingFeature>Response history</PricingFeature>
                <PricingFeature>Save templates</PricingFeature>
                <PricingFeature>Priority support</PricingFeature>
              </ul>
              <Link
                href="/signup?plan=pro"
                className="mt-8 block w-full text-center bg-accent text-white py-3 rounded-full font-medium hover:bg-accent-hover transition-colors"
              >
                Start 7-day trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-content dark:text-content-inverse mb-4 tracking-tight">
              Trusted by business owners
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="ReplyPro saves me at least 5 hours a week. The responses are thoughtful and match my brand perfectly."
              author="Sarah M."
              role="Restaurant Owner"
            />
            <TestimonialCard
              quote="Finally, a tool that helps me respond to negative reviews professionally without spending my whole day on it."
              author="Mike T."
              role="Auto Shop Manager"
            />
            <TestimonialCard
              quote="My review response rate went from 20% to 95%. Customers notice and appreciate the personal touch."
              author="Lisa K."
              role="Salon Owner"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-border dark:border-border-dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-content dark:text-content-inverse mb-4 tracking-tight">
            Ready to save hours every week?
          </h2>
          <p className="text-content-secondary dark:text-content-inverse-secondary mb-8">
            Join thousands of business owners using AI-powered review responses.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 bg-content dark:bg-content-inverse text-white dark:text-content px-8 py-4 rounded-full text-base font-medium hover:opacity-80 transition-opacity"
          >
            Start your free trial
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border dark:border-border-dark">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-accent" />
              <span className="font-semibold text-content dark:text-content-inverse">ReplyPro</span>
            </div>
            <div className="flex gap-8 text-sm text-content-secondary dark:text-content-inverse-secondary">
              <a href="#" className="hover:text-content dark:hover:text-content-inverse transition-colors">Privacy</a>
              <a href="#" className="hover:text-content dark:hover:text-content-inverse transition-colors">Terms</a>
              <a href="mailto:support@replypro.io" className="hover:text-content dark:hover:text-content-inverse transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-content-tertiary dark:text-content-inverse-secondary">
            <p>ReplyPro by <span className="font-medium text-content-secondary dark:text-content-inverse-secondary">BLUELABS</span></p>
            <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-subtle dark:bg-accent-subtle-dark text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-content dark:text-content-inverse mb-2">{title}</h3>
      <p className="text-content-secondary dark:text-content-inverse-secondary text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm text-content-secondary dark:text-content-inverse-secondary">
      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
      {children}
    </li>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-surface-secondary dark:bg-surface-dark-secondary rounded-2xl p-6">
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-content-secondary dark:text-content-inverse-secondary text-sm leading-relaxed mb-4">"{quote}"</p>
      <div>
        <div className="font-medium text-content dark:text-content-inverse text-sm">{author}</div>
        <div className="text-xs text-content-tertiary dark:text-content-inverse-secondary">{role}</div>
      </div>
    </div>
  )
}
