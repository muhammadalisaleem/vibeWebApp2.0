'use client';

import { useUser } from '@/hooks/useUser';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Coins, Clock, Calendar, Award, Shield, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function YouPage() {
  const { data: user, isLoading } = useUser();

  if (isLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7C3AED] mx-auto mb-4"></div>
          <p className="text-[#9CA3AF]">Loading...</p>
        </div>
      </div>
    );
  }

  const achievements = [
    { id: '1', emoji: '🎯', name: 'Target Achiever', unlocked: true },
    { id: '2', emoji: '💖', name: 'Heart of Gold', unlocked: true },
    { id: '3', emoji: '🏅', name: 'Community Champion', unlocked: true },
    { id: '4', emoji: '🌟', name: 'Rising Star', unlocked: true },
    { id: '5', emoji: '🔥', name: 'Fire Starter', unlocked: true },
  ];

  return (
    <div className="space-y-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1635] via-[#0f172a] to-[#030712] p-6 text-center"
      >
        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#FF6B35] text-4xl font-semibold">
          {user.name.charAt(0)}
        </div>
        <h1 className="heading-xl font-bold">{user.name}</h1>
        <p className="text-sm text-[#9CA3AF]">Member since March 2024</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1">
          <Award className="h-4 w-4 text-[#FACC15]" />
          <span className="text-sm font-semibold text-[#FACC15]">
            {user.civicChampion ? 'Civic Champion' : 'Community Member'}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs">
          <span className="glass-chip">2450 coins</span>
          <span className="glass-chip">47 hours</span>
          <span className="glass-chip">12 events</span>
        </div>
        <Button variant="secondary" className="mt-5 border-white/10 text-white">
          Edit profile
        </Button>
      </motion.section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Coins', value: user.coins.toLocaleString(), icon: Coins, accent: 'text-[#FF6B35]' },
          { label: 'Hours', value: user.hours, icon: Clock, accent: 'text-[#7C3AED]' },
          { label: 'Events', value: user.eventsJoined, icon: Calendar, accent: 'text-[#38bdf8]' },
          { label: 'Badges', value: user.badges.length, icon: Shield, accent: 'text-[#34d399]' },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * (idx + 1) }}
            >
              <Card className="border-white/10 bg-black/30 text-center">
                <Icon className={`mx-auto mb-2 h-6 w-6 ${stat.accent}`} />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-[#9CA3AF] uppercase tracking-[0.4em]">{stat.label}</p>
              </Card>
            </motion.div>
          );
        })}
      </section>

      <section className="space-y-4">
        <h2 className="heading-lg">Achievements</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <Card className="flex flex-col items-center border-white/10 bg-white/5 text-center">
                <div className="text-4xl">{achievement.emoji}</div>
                <p className="mt-2 text-sm font-semibold">{achievement.name}</p>
                {achievement.unlocked && (
                  <span className="mt-1 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-300">
                    Unlocked
                  </span>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-4 border-white/10 bg-black/40">
          <div className="flex items-center gap-3 text-[#34d399]">
            <Clock className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.4em]">Recent Activity</p>
          </div>
          <div className="space-y-3">
            {[
              { title: 'Completed Climate Quiz', time: '2 hours ago', coins: '+50' },
              { title: 'Volunteered at Food Bank', time: '1 day ago', coins: '+200' },
              { title: 'Shared Policy Update', time: '2 days ago', coins: '+25' },
              { title: 'Attended Workshop', time: '3 days ago', coins: '+150' },
            ].map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-[#9CA3AF]">{item.time}</p>
                </div>
                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  {item.coins}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4 border-white/10 bg-black/40">
          <div className="flex items-center gap-3 text-[#38bdf8]">
            <Settings className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.4em]">Settings</p>
          </div>
          <div className="space-y-3">
            {['Notifications', 'Privacy', 'Language', 'Help & Support', 'About VIBE'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3">
                <p>{item}</p>
                <span className="text-[#9CA3AF]">→</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}

