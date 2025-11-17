'use client';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useUser } from '@/hooks/useUser';
import { motion } from 'framer-motion';
import {
  Activity,
  AlarmClock,
  ArrowRight,
  Calendar,
  CalendarDays,
  Droplet,
  HandHeart,
  HeartPulse,
  MapPin,
  MessageCircle,
  Shield,
  Star,
  Users,
} from 'lucide-react';
import { useMemo } from 'react';

export default function HomePage() {
  const { data: user, isLoading } = useUser();
  const monthlyRank = useMemo(() => {
    if (!user) return null;
    const charCodeSum = user.id.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return (charCodeSum % 90) + 10;
  }, [user]);

  if (isLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-[#7C3AED]" />
          <p className="text-[#9CA3AF]">Loading...</p>
        </div>
      </div>
    );
  }

  const stats = [
    { label: 'VIBE Coins', value: user.coins.toLocaleString(), accent: 'from-[#ffa14d] to-[#ffca6b]' },
    { label: 'Day Streak', value: `${user.streak}`, accent: 'from-[#f97316] to-[#fb923c]' },
    { label: 'This Month', value: '47h', accent: 'from-[#22d3ee] to-[#38bdf8]' },
  ];

  const heroHighlights = [
    {
      id: 'garden',
      title: 'Community Garden Project',
      desc: 'Help local families grow fresh food and learn sustainable farming.',
      meta: 'Sat, Sep 20 · 9:00 AM',
      location: 'Local Harvest · 15 joined',
      reward: '+200 VIBE',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'climate',
      title: 'Climate Action Workshop',
      desc: 'Hands-on workshop to plan youth-led climate projects for your city.',
      meta: 'Thu, Sep 18 · 7:30 PM',
      location: 'Impact Lab · 42 joined',
      reward: '+150 VIBE',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    },
  ];

  const emergencyAppeals = [
    {
      id: 'appeal-1',
      title: 'Urgent: Blood Donation Drive',
      desc: 'Critical shortage of O- blood at City Hospital.',
      location: 'City Hospital Blood Bank',
      urgency: 'High',
      tags: ['+300 coins', '2 days left'],
      progress: 47,
      participants: '47 of 100 participants',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'appeal-2',
      title: 'Flood Relief Fund',
      desc: 'Emergency aid kits for displaced communities.',
      location: 'River Valley Region',
      urgency: 'Urgent',
      tags: ['+200 coins', 'Ongoing'],
      progress: 47,
      participants: '234 of 500 participants',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80',
    },
  ];

  const quickActions = [
    { id: 'community', label: 'Community', desc: 'Stories & Updates', icon: Users, color: 'from-[#f97316]/20 to-[#fb923c]/5', chip: 'New' },
    { id: 'coins', label: 'VIBE Coins', desc: 'Earn & Redeem', icon: Star, color: 'from-[#facc15]/25 to-[#fde047]/5', chip: 'Reward' },
    { id: 'ai', label: 'AI Assistant', desc: 'Policy & planning help', icon: MessageCircle, color: 'from-[#a855f7]/20 to-[#7c3aed]/5', chip: 'Beta' },
    { id: 'events', label: 'Events', desc: 'Curated for you', icon: Calendar, color: 'from-[#34d399]/25 to-[#064e3b]/5', chip: '3 new' },
  ];

  const featured = [
    {
      id: 'feat-1',
      title: 'Climate Action Workshop',
      desc: 'Interactive session on building local climate projects.',
      date: 'Thu, Sep 18 · 7:30 PM',
      reward: '+150',
      tag: 'Trending',
      image: 'https://images.unsplash.com/photo-1520350094754-3439425540c1?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'feat-2',
      title: 'Community Cleanup Drive',
      desc: 'Join 50+ volunteers to restore the riverside park.',
      date: 'Sat, Sep 21 · 8:00 AM',
      reward: '+180',
      tag: 'Environment',
      image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const comingUp = [
    { id: 'event-1', title: 'Weekly Civic Quiz', time: 'Today at 8:00 PM' },
    { id: 'event-2', title: 'Digital Literacy Workshop', time: 'Tomorrow at 2:00 PM' },
  ];

  const recentActivity = [
    { id: 'act-1', name: 'Maya Chen', action: 'completed beach cleanup', time: '2 hours ago', reward: '+150' },
    { id: 'act-2', name: 'Jordan Smith', action: 'shared voter registration story', time: '4 hours ago', reward: '+75' },
    { id: 'act-3', name: user.name.split(' ')[0], action: 'completed civic quiz', time: '1 day ago', reward: '+50' },
  ];

  const weeklyImpact = [
    { label: 'Stories Shared', value: '127', change: '+12%', accent: 'text-[#fb923c]' },
    { label: 'Volunteer Hours', value: '2.3k', change: '+4%', accent: 'text-[#34d399]' },
    { label: 'New Members', value: '45', change: '+8%', accent: 'text-[#38bdf8]' },
  ];

  const spotlightStories = [
    {
      id: 'spot-1',
      author: 'Riley Johnson',
      time: '3 days ago',
      text: 'Taught seniors how to video call their families during the digital literacy workshop. Technology really brings everyone closer!',
      impact: '+100 VIBE Coins earned',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'spot-2',
      author: 'Alex Rivera',
      time: '5 hours ago',
      text: 'Pro tip: Arrive at town halls with 2-3 thoughtful questions. Officials love prepared volunteers!',
      impact: '+75 VIBE Coins earned',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <div className="space-y-10 pb-6">
      <section className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-[#94a3b8]">Daily Brief</p>
            <h1 className="heading-xl font-bold">
              Welcome back, {user.name.split(' ')[0]} <span className="inline-block animate-pulse">👋</span>
            </h1>
            <p className="text-sm text-[#9CA3AF]">You are {monthlyRank ? `ranked #${monthlyRank}` : 'climbing the leaderboard'} citywide this month.</p>
          </div>
          <Button variant="primary" size="sm" className="w-full md:w-auto">
            View impact report
          </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-[#1f1635] via-[#111827] to-[#030712]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),transparent_65%)]" />
            <div className="relative space-y-4">
              <p className="section-heading">Monthly Progress</p>
              <p className="text-5xl font-semibold">78%</p>
              <p className="text-sm text-[#9CA3AF]">47 / 60 hours logged</p>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-[#f97316] via-[#facc15] to-[#22d3ee]"
                />
              </div>
              <div className="flex items-center gap-3 text-sm text-[#cbd5f5]">
                <Shield className="h-4 w-4 text-[#facc15]" />
                You’re 5 hours away from unlocking this month’s badge.
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {heroHighlights.map((highlight) => (
              <div
                key={highlight.id}
                className="gradient-border relative overflow-hidden rounded-3xl p-5"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.75), rgba(3,7,18,0.85)), url(${highlight.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase">
                    <span className="rounded-full bg-white/15 px-2 py-0.5 text-white">{highlight.reward}</span>
                    <span className="text-[#d1d5db]">{highlight.meta}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                    <p className="text-sm text-[#d1d5db]">{highlight.desc}</p>
                  </div>
                  <p className="flex items-center gap-1 text-xs text-[#cbd5f5]">
                    <MapPin className="h-4 w-4 text-[#fb923c]" />
                    {highlight.location}
                  </p>
                  <Button variant="cta" size="sm" className="w-full">
                    Join Event
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl border border-white/10 bg-gradient-to-br ${stat.accent} p-4 text-gray-900 shadow-lg shadow-black/20`}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-800/80">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="section-heading text-[#FFB199]">Emergency Appeals</p>
            <h2 className="heading-lg font-semibold text-white">Immediate impact needed</h2>
          </div>
          <Button variant="secondary" size="sm" className="border-white/10 text-white">
            View all
          </Button>
        </div>
        <div className="space-y-4">
          {emergencyAppeals.map((appeal) => (
            <Card
              key={appeal.id}
              className="relative overflow-hidden border-white/10 bg-black/50 p-0 md:flex md:items-stretch"
            >
              <div
                className="h-48 w-full md:h-auto md:w-1/3"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${appeal.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase">
                  <span className="rounded-full bg-[#7C1D3F]/40 px-2 py-0.5 font-semibold text-[#ff6b8b]">
                    {appeal.urgency}
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 font-semibold text-[#FACC15]">{appeal.tags[0]}</span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 font-semibold text-[#cbd5f5]">{appeal.tags[1]}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-white">{appeal.title}</h3>
                  <p className="text-sm text-[#D1D5DB]">{appeal.desc}</p>
                  <p className="text-xs text-[#9CA3AF]">{appeal.location}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                  <Droplet className="h-4 w-4 text-[#FF6B35]" />
                  <span>{appeal.participants}</span>
                </div>
                <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-[#0f172a]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${appeal.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FFB199]"
                  />
                </div>
                <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center">
                  <Button variant="cta" className="flex-1">
                    Help Now
                  </Button>
                  <Button variant="secondary" className="flex-1 border-white/10 text-white">
                    Share
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="heading-lg text-white">Quick Actions</h2>
          <Button variant="outline" size="sm" className="border-white/20 text-white">
            Customize
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card
                key={action.id}
                className={`border border-white/5 bg-gradient-to-br ${action.color} text-white shadow-lg shadow-black/20`}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs uppercase tracking-wide text-white/80">
                    {action.chip}
                  </span>
                  <div className="rounded-full bg-black/30 p-2">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-lg font-semibold">{action.label}</p>
                  <p className="text-sm text-white/70">{action.desc}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="heading-lg text-white">Featured This Week</h2>
          <Button variant="outline" className="border-white/20 text-white">
            See more
          </Button>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((item) => (
            <Card key={item.id} className="overflow-hidden border-white/10 p-0">
              <div
                className="h-48 w-full"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#FFB199]">
                  <span className="rounded-full bg-[#FF6B35]/20 px-2 py-0.5">{item.tag}</span>
                  <span>{item.reward}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-[#D1D5DB]">{item.desc}</p>
                </div>
                <p className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                  <CalendarDays className="h-4 w-4" />
                  {item.date}
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="secondary" className="border-white/10 text-white">
                    Save Spot
                  </Button>
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card className="space-y-4 border-white/10 bg-gradient-to-br from-[#101820] to-[#0c1117] lg:col-span-1">
          <div className="flex items-center gap-3 text-[#FACC15]">
            <Shield className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.4em]">Coming Up</p>
          </div>
          <div className="space-y-3">
            {comingUp.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-white"
              >
                <div>
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-sm text-[#9CA3AF]">{event.time}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-[#9CA3AF]" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4 border-white/10 bg-gradient-to-br from-[#0f1b17] to-[#0b1114] lg:col-span-1">
          <div className="flex items-center gap-3 text-[#34d399]">
            <Activity className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.4em]">Recent Activity</p>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white"
              >
                <div>
                  <p className="font-semibold">{activity.name}</p>
                  <p className="text-sm text-[#9CA3AF]">{activity.action}</p>
                  <p className="text-xs text-[#6b7280]">{activity.time}</p>
                </div>
                <div className="rounded-full bg-[#052e16] px-3 py-1 text-xs text-[#86efac]">
                  {activity.reward}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4 border-white/10 bg-gradient-to-br from-[#0f172a] to-[#020617] lg:col-span-1">
          <div className="flex items-center gap-3 text-[#60a5fa]">
            <HandHeart className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.4em]">This Week’s Impact</p>
          </div>
          <div className="space-y-3">
            {weeklyImpact.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9CA3AF]">{metric.label}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">{metric.value}</p>
                  <span className={`text-sm font-semibold ${metric.accent}`}>{metric.change}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-4 border-white/10 bg-gradient-to-br from-[#1c0f1e] to-[#0f131d]">
          <div className="flex items-center gap-3 text-[#fb7185]">
            <HeartPulse className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.4em]">Impact Streak</p>
          </div>
          <p className="text-sm text-[#9CA3AF]">
            Keep your streak alive by logging one action a day. Challenges refresh at midnight.
          </p>
          <div className="flex items-center gap-4 text-white">
            <div className="rounded-full bg-[#fb7185]/20 p-4 text-3xl font-bold text-[#fb7185]">{user.streak}</div>
            <div>
              <p className="text-lg font-semibold">days active</p>
              <p className="text-sm text-[#9CA3AF]">Next reward at 10 days</p>
            </div>
          </div>
        </Card>

        <Card className="space-y-4 border-white/10 bg-gradient-to-br from-[#141414] to-[#0f0f0f]">
          <div className="flex items-center gap-3 text-[#60a5fa]">
            <AlarmClock className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.4em]">Reminders</p>
          </div>
          <div className="space-y-3">
            {['Log today’s impact', 'Invite a friend', 'Redeem coins'].map((reminder) => (
              <div key={reminder} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-white">
                <p>{reminder}</p>
                <HandHeart className="h-4 w-4 text-[#60a5fa]" />
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="heading-lg">Community Spotlight</h2>
          <Button variant="secondary" size="sm" className="border-white/10 text-white">
            Share your story
          </Button>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {spotlightStories.map((story) => (
            <Card key={story.id} className="overflow-hidden border-white/10 p-0">
              <div
                className="h-48 w-full"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.85)), url(${story.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="space-y-3 p-6">
                <div className="flex items-center justify-between text-sm text-[#9CA3AF]">
                  <p className="font-semibold text-white">{story.author}</p>
                  <span>{story.time}</span>
                </div>
                <p className="text-sm text-[#D1D5DB]">{story.text}</p>
                <p className="text-xs font-semibold text-[#34d399]">{story.impact}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}


