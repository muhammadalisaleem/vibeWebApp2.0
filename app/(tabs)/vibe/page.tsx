'use client';

import { useUser } from '@/hooks/useUser';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Coins, Sparkles, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const mockRewards = [
  {
    id: '1',
    name: 'Local Cafe 20% Off',
    description: 'Enjoy 20% discount on all items at participating cafes',
    cost: 500,
    category: 'food' as const,
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Movie Ticket Discount',
    description: 'Get 300 PKR off on movie tickets',
    cost: 300,
    category: 'entertainment' as const,
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Public Transport Pass',
    description: 'Free weekly transport pass to reach community projects',
    cost: 1500,
    category: 'transport' as const,
    image: 'https://images.unsplash.com/photo-1515175064524-298e09c61645?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Community Garden Tools',
    description: 'Access to premium gardening tools for your local projects',
    cost: 1200,
    category: 'community' as const,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
  },
];

const recentEarnings = [
  { id: 'earn1', title: 'Completed Climate Quiz', time: '2 hours ago', coins: '+50' },
  { id: 'earn2', title: 'Volunteered at Food Bank', time: '1 day ago', coins: '+200' },
  { id: 'earn3', title: 'Shared Advocacy Post', time: '2 days ago', coins: '+25' },
  { id: 'earn4', title: 'Attended Workshop', time: '3 days ago', coins: '+150' },
];

export default function VIBEPage() {
  const { data: user } = useUser();

  return (
    <div className="space-y-8">
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="grid gap-4 lg:grid-cols-2"
      >
        <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-[#1f1635] via-[#111b2b] to-[#040712]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.3),transparent_60%)]" />
          <div className="relative flex items-center gap-6">
            <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#FF6B35]">
              <Coins className="h-12 w-12 text-white" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#9CA3AF]">Available Coins</p>
              <h1 className="heading-xl font-bold">{user?.coins.toLocaleString() ?? '0'}</h1>
              <p className="text-sm text-[#9CA3AF]">Keep earning to unlock premium rewards.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="glass-chip">Streak bonus active</span>
                <span className="glass-chip">47h logged this month</span>
              </div>
            </div>
          </div>
        </Card>
        <Card className="border-white/10 bg-black/40">
          <p className="text-xs uppercase tracking-[0.4em] text-[#9CA3AF]">How to earn</p>
          <ul className="mt-3 space-y-2 text-sm text-[#D1D5DB]">
            <li>• Attend events: +50–200 coins per event</li>
            <li>• Daily civic challenge: +25 coins</li>
            <li>• Share stories: +10 coins per post</li>
            <li>• Help in emergencies: +100–500 coins</li>
            <li>• Streak milestones: +150 bonus coins</li>
          </ul>
        </Card>
      </motion.section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-heading text-[#34d399]">Rewards</p>
            <h2 className="heading-lg font-semibold">Redeem with VIBE Coins</h2>
          </div>
          <Button variant="outline" size="sm" className="border-white/20 text-white">
            View catalog
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {mockRewards.map((reward, index) => (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <Card className="flex h-full flex-col overflow-hidden border-white/10 p-0">
                <div
                  className="h-40 w-full"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${reward.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#9CA3AF]">
                    {reward.category}
                  </span>
                  <h3 className="text-lg font-semibold">{reward.name}</h3>
                  <p className="text-sm text-[#9CA3AF] flex-1">{reward.description}</p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-3">
                    <div className="flex items-center gap-2">
                      <Coins className="h-5 w-5 text-[#FF6B35]" />
                      <span className="font-bold">{reward.cost}</span>
                    </div>
                    <Button
                      variant="cta"
                      size="sm"
                      disabled={!user || user.coins < reward.cost}
                      onClick={() => console.log(`Redeem ${reward.name}`)}
                    >
                      Redeem
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-4 border-white/10 bg-black/40">
          <div className="flex items-center gap-3 text-[#FACC15]">
            <Sparkles className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.4em]">Recent Earnings</p>
          </div>
          <div className="space-y-3">
            {recentEarnings.map((entry) => (
              <div key={entry.id} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3">
                <div>
                  <p className="font-semibold">{entry.title}</p>
                  <p className="text-xs text-[#9CA3AF]">{entry.time}</p>
                </div>
                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                  {entry.coins}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4 border-white/10 bg-gradient-to-br from-[#1c0f1e] to-[#0f131d]">
          <div className="flex items-center gap-3 text-[#FF6B35]">
            <Trophy className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.4em]">Bonus Milestones</p>
          </div>
          <p className="text-sm text-[#D1D5DB]">Redeem two rewards this month to unlock the “Community Builder” badge and earn +250 bonus coins.</p>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9CA3AF]">Progress</p>
            <p className="text-3xl font-bold">1 / 2 rewards</p>
            <Button variant="secondary" className="mt-3 border-white/10 text-white">
              Browse rewards
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}

