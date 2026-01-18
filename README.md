# ReplyPro - AI Review Response Generator

**Turn customer reviews into professional responses in seconds.**

A complete SaaS application that helps business owners respond to customer reviews 10x faster using AI.

## Revenue Model

- **Free tier**: 5 responses/month (gets users hooked)
- **Pro tier**: $19/month for unlimited responses
- **Target**: 53 paying subscribers = $1,007/month

## Features

- AI-powered review response generation (using Groq's free tier)
- 5 different response tones (Professional, Friendly, Apologetic, Enthusiastic, Empathetic)
- Automatic sentiment detection (positive/negative)
- Stripe subscription billing
- Usage tracking and limits
- Beautiful, conversion-optimized landing page

---

# SETUP GUIDE (Follow These Steps Exactly)

## Step 1: Get Your API Keys (15 minutes)

You need to create accounts and get API keys from 3 services. All have free tiers.

### 1A. Groq (AI - Free)
1. Go to https://console.groq.com/
2. Sign up for free
3. Go to API Keys → Create API Key
4. Save your API key somewhere safe

### 1B. Supabase (Database - Free)
1. Go to https://supabase.com/
2. Sign up and create a new project
3. Choose a name (e.g., "replypro") and generate a database password
4. Wait for project to be created (~2 minutes)
5. Go to Settings → API
6. Copy these values:
   - `Project URL` → This is your SUPABASE_URL
   - `anon public` key → This is your SUPABASE_ANON_KEY
   - `service_role` key → This is your SUPABASE_SERVICE_ROLE_KEY

### 1C. Stripe (Payments - Free to set up)
1. Go to https://stripe.com/
2. Sign up for an account
3. Go to Developers → API Keys
4. Copy your `Publishable key` and `Secret key`
5. Create a Product:
   - Go to Products → Add Product
   - Name: "ReplyPro Pro"
   - Price: $19/month (recurring)
   - After creating, click on the price and copy the `Price ID` (starts with `price_`)

---

## Step 2: Set Up Supabase Database (5 minutes)

1. In your Supabase dashboard, go to SQL Editor
2. Click "New Query"
3. Copy and paste the ENTIRE contents of `supabase/schema.sql`
4. Click "Run"
5. You should see "Success. No rows returned" - this means it worked!

### Configure Authentication
1. Go to Authentication → Providers
2. Make sure "Email" is enabled (it should be by default)
3. Go to Authentication → URL Configuration
4. Set Site URL to: `http://localhost:3000` (we'll change this later)

---

## Step 3: Deploy to Vercel (5 minutes)

### Option A: One-Click Deploy (Easiest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/replypro)

### Option B: Manual Deploy

1. Push this code to a GitHub repository
2. Go to https://vercel.com/
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure Environment Variables (see below)
6. Click Deploy

### Environment Variables to Add in Vercel:

| Variable Name | Where to Get It |
|--------------|-----------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API → anon public |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API → service_role |
| `GROQ_API_KEY` | Groq Console → API Keys |
| `STRIPE_SECRET_KEY` | Stripe → Developers → API Keys → Secret key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe → Developers → API Keys → Publishable key |
| `STRIPE_PRICE_ID` | Stripe → Products → Your Product → Price ID |
| `STRIPE_WEBHOOK_SECRET` | (Set up in Step 4) |
| `NEXT_PUBLIC_APP_URL` | Your Vercel URL (e.g., https://replypro.vercel.app) |

---

## Step 4: Set Up Stripe Webhook (5 minutes)

This is required for subscriptions to work properly.

1. Go to Stripe → Developers → Webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://YOUR-VERCEL-URL.vercel.app/api/webhook`
4. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
5. Click "Add endpoint"
6. Click on your new endpoint → Reveal signing secret
7. Copy the signing secret and add it to Vercel as `STRIPE_WEBHOOK_SECRET`

---

## Step 5: Update Supabase Redirect URLs (2 minutes)

1. Go to Supabase → Authentication → URL Configuration
2. Update Site URL to your Vercel URL (e.g., `https://replypro.vercel.app`)
3. Add your Vercel URL to "Redirect URLs" as well

---

## Step 6: Connect Your Domain (Optional, 5 minutes)

To use your subdomain (e.g., replypro.shangobashi.com):

1. In Vercel, go to your project → Settings → Domains
2. Add your subdomain: `replypro.shangobashi.com`
3. Vercel will show you DNS records to add
4. Go to your domain provider and add those records
5. Wait for DNS propagation (usually 5-30 minutes)
6. Update `NEXT_PUBLIC_APP_URL` in Vercel to your new domain
7. Update Supabase Site URL and Redirect URLs

---

## Testing Your Setup

1. Visit your deployed site
2. Click "Start Free" to create an account
3. Try generating a review response
4. Test the upgrade flow (use Stripe test card: 4242 4242 4242 4242)

---

## Marketing Tips to Get to $1000/month

### Where to Find Customers

1. **Reddit**: Post helpful responses in r/smallbusiness, r/entrepreneur, r/restaurantowners
2. **Twitter/X**: Share before/after examples of review responses
3. **Facebook Groups**: Join local business owner groups
4. **Google My Business Forums**: Help people with review management questions
5. **LinkedIn**: Connect with local business owners

### Content Ideas

- "I analyzed 1000 review responses. Here's what works."
- "Why responding to negative reviews increases your rating by 0.5 stars"
- "The 5-minute weekly habit that saves your reputation"

### Pricing Strategy

- Start with free trial to get users in
- The 5 free responses/month creates urgency to upgrade
- $19/month is affordable for any business

---

## Troubleshooting

### "Unauthorized" error when generating
- Check that Supabase URL and keys are correct
- Make sure you ran the schema.sql

### Stripe checkout not working
- Verify all Stripe keys are correct
- Check that STRIPE_PRICE_ID matches your actual price

### Login not working
- Check Supabase URL configuration
- Verify redirect URLs are set correctly

---

## Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL + Auth)
- **AI**: Groq (Llama 3.3 70B - free tier)
- **Payments**: Stripe
- **Hosting**: Vercel

## Cost Breakdown

At $1000/month revenue with free tiers:
- Vercel: Free (hobby tier)
- Supabase: Free (up to 500MB, 50k requests)
- Groq: Free tier is very generous
- Stripe: 2.9% + $0.30 per transaction ≈ $35/month
- **Net profit: ~$965/month**

---

## License

MIT - Do whatever you want with this code.
