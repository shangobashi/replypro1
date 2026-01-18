import Link from 'next/link'
import { CheckCircle, Star, Clock, Zap, MessageSquare, TrendingUp } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">ReplyPro</span>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/login"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Respond to Reviews{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              10x Faster
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            AI-powered responses for Google, Yelp, and Amazon reviews.
            Professional, personalized, and ready in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/25"
            >
              Start Free Trial
            </Link>
            <a
              href="#demo"
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              See How It Works
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            No credit card required. 5 free responses per month.
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            See ReplyPro in Action
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {[3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Customer Review</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                &quot;The food was cold when it arrived and the delivery took over an hour.
                Very disappointed with the service. Won&apos;t be ordering again.&quot;
              </p>
            </div>
            {/* After */}
            <div className="bg-blue-600 rounded-xl p-6 shadow-lg text-white">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5" />
                <span className="text-sm opacity-90">AI-Generated Response</span>
              </div>
              <p className="opacity-95">
                &quot;We sincerely apologize for your disappointing experience. Cold food
                and long wait times are not the standards we strive for. We&apos;d love
                the opportunity to make this right - please reach out to us directly
                so we can address this and ensure your next order exceeds expectations.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Why Business Owners Love ReplyPro
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Save hours every week while maintaining a stellar online reputation
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-blue-600" />}
              title="Save 10+ Hours/Week"
              description="What used to take 5-10 minutes per review now takes seconds. Focus on running your business."
            />
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8 text-blue-600" />}
              title="Multiple Tones"
              description="Professional, friendly, apologetic, or enthusiastic - match your brand voice perfectly."
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-blue-600" />}
              title="Better Ratings"
              description="Thoughtful responses encourage updated reviews and build customer loyalty."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Start free, upgrade when you are ready
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Free</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">$0</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Perfect for trying out ReplyPro</p>
              <ul className="mt-6 space-y-3">
                <PricingFeature>5 responses per month</PricingFeature>
                <PricingFeature>All 5 tone options</PricingFeature>
                <PricingFeature>Instant generation</PricingFeature>
                <PricingFeature>Copy to clipboard</PricingFeature>
              </ul>
              <Link
                href="/signup"
                className="mt-8 block w-full text-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                Get Started Free
              </Link>
            </div>
            {/* Pro Plan */}
            <div className="bg-blue-600 rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-semibold text-white">Pro</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold text-white">$19</span>
                <span className="text-blue-100 ml-2">/month</span>
              </div>
              <p className="mt-4 text-blue-100">Everything you need to manage reviews</p>
              <ul className="mt-6 space-y-3">
                <PricingFeature light>Unlimited responses</PricingFeature>
                <PricingFeature light>All 5 tone options</PricingFeature>
                <PricingFeature light>Response history</PricingFeature>
                <PricingFeature light>Save favorite templates</PricingFeature>
                <PricingFeature light>Priority support</PricingFeature>
              </ul>
              <Link
                href="/signup?plan=pro"
                className="mt-8 block w-full text-center bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Trusted by Business Owners
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
      <section className="py-20 bg-blue-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Start Responding Smarter Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of business owners saving time with AI-powered review responses.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <MessageSquare className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold text-white">ReplyPro</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="mailto:support@replypro.io" className="hover:text-white transition">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm">
            <p className="text-gray-500">ReplyPro by <span className="font-semibold text-blue-400">BLUELABS</span>.</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

function PricingFeature({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <li className={`flex items-center gap-2 ${light ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>
      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${light ? 'text-blue-200' : 'text-blue-600'}`} />
      {children}
    </li>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4 italic">&quot;{quote}&quot;</p>
      <div>
        <div className="font-semibold text-gray-900 dark:text-white">{author}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
      </div>
    </div>
  )
}
