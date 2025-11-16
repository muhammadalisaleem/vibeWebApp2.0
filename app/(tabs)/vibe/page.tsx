'use client';

import { useUser } from '@/hooks/useUser';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Coins, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const mockRewards = [
  {
    id: '1',
    name: 'Local Cafe 20% Off',
    description: 'Enjoy 20% discount on all items at participating cafes',
    cost: 500,
    category: 'food' as const,
    image: '☕',
  },
  {
    id: '2',
    name: 'Movie Ticket Discount',
    description: 'Get 300 PKR off on movie tickets',
    cost: 300,
    category: 'entertainment' as const,
    image: '🎬',
  },
];

export default function VIBEPage() {
  const { data: user } = useUser();

  return (
    <div className="space-y-6">
      {/* Coin Balance Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#FF6B35] mb-4">
          <Coins className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-2">
          {user?.coins.toLocaleString() || '0'} Coins
        </h1>
        <p className="text-[#9CA3AF]">Your VIBE balance</p>
      </motion.div>

      {/* Earn Explainer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <h2 className="text-xl font-bold mb-2">How to Earn Coins</h2>
          <ul className="space-y-2 text-sm text-[#9CA3AF]">
            <li>• Attend events: +50-200 coins per event</li>
            <li>• Complete daily challenges: +25 coins</li>
            <li>• Share stories: +10 coins per post</li>
            <li>• Help in emergencies: +100-500 coins</li>
            <li>• Maintain streaks: Bonus coins</li>
          </ul>
        </Card>
      </motion.div>

      {/* Redeem Cards Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Redeem Rewards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockRewards.map((reward, index) => (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="text-5xl mb-4 text-center">{reward.image}</div>
                <h3 className="text-lg font-bold mb-2">{reward.name}</h3>
                <p className="text-sm text-[#9CA3AF] mb-4 flex-1">
                  {reward.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#1F1F1F]">
                  <div className="flex items-center gap-2">
                    <Coins className="w-5 h-5 text-[#FF6B35]" />
                    <span className="font-bold">{reward.cost}</span>
                  </div>
                  <Button
                    variant="cta"
                    disabled={!user || user.coins < reward.cost}
                    onClick={() => console.log(`Redeem ${reward.name}`)}
                  >
                    Redeem
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

