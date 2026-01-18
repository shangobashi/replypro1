import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardClient from './DashboardClient'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/login')
  }

  // Get user's profile and usage
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // Get this month's usage
  const startOfMonth = new Date()
  startOfMonth.setDate(1)
  startOfMonth.setHours(0, 0, 0, 0)

  const { count: usageCount } = await supabase
    .from('responses')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id)
    .gte('created_at', startOfMonth.toISOString())

  const isPro = profile?.is_pro || false
  const monthlyLimit = isPro ? Infinity : 5
  const usedThisMonth = usageCount || 0
  const remainingResponses = isPro ? null : Math.max(0, monthlyLimit - usedThisMonth)

  return (
    <DashboardClient
      user={user}
      businessName={profile?.business_name || user.user_metadata?.business_name}
      isPro={isPro}
      remainingResponses={remainingResponses}
    />
  )
}
