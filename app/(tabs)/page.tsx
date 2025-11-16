'use client';

import { useUser } from '@/hooks/useUser';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Coins, Flame, TrendingUp, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const { data: user, isLoading } = useUser();
  const [monthlyRank, setMonthlyRank] = useState<number | null>(null);

  // Only set random rank on client side to avoid hydration mismatch
  useEffect(() => {
    setMonthlyRank(Math.floor(Math.random() * 100) + 1);
  }, []);

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

  const monthlyGoal = 100;
  const currentProgress = 78;
  const progressPercent = (currentProgress / monthlyGoal) * 100;

  const emergency = {
    id: '1',
    title: 'Urgent Blood Drive',
    desc: 'Local hospital needs blood donors urgently. Every donation counts!',
    progress: 47,
    coinsReward: 500,
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user.name.split(' ')[0]}! 👋
        </h1>
        <p className="text-[#9CA3AF]">Ready to make a difference today?</p>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#9CA3AF] mb-1">VIBE Coins</p>
                <p className="text-2xl font-bold flex items-center gap-2">
                  <Coins className="w-6 h-6 text-[#FF6B35]" />
                  {user.coins.toLocaleString()}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#9CA3AF] mb-1">Streak</p>
                <p className="text-2xl font-bold flex items-center gap-2">
                  <Flame className="w-6 h-6 text-[#FF6B35]" />
                  {user.streak} days
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#9CA3AF] mb-1">Monthly Rank</p>
                <p className="text-2xl font-bold flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-[#7C3AED]" />
                  {monthlyRank !== null ? `#${monthlyRank}` : '...'}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium">Monthly Goal Progress</p>
              <p className="text-sm text-[#9CA3AF]">
                {currentProgress} / {monthlyGoal} hrs
              </p>
            </div>
            <div className="w-full bg-[#1F1F1F] rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-[#7C3AED] to-[#FF6B35] rounded-full"
              />
            </div>
            <p className="text-xs text-[#9CA3AF] mt-2">
              {progressPercent.toFixed(0)}% complete
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Urgent Emergency Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="border-2 border-[#FF6B35]">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">{emergency.title}</h3>
              <p className="text-sm text-[#9CA3AF] mb-4">{emergency.desc}</p>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs text-[#9CA3AF]">Progress</p>
                  <p className="text-xs font-medium">{emergency.progress}%</p>
                </div>
                <div className="w-full bg-[#1F1F1F] rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${emergency.progress}%` }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-[#FF6B35] rounded-full"
                  />
                </div>
              </div>
              <Button
                variant="cta"
                className="w-full"
                onClick={() => console.log('Help Now clicked')}
              >
                Help Now +{emergency.coinsReward} Coins
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

