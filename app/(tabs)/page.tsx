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
    <div className="space-y-6 pb-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white to-[#9CA3AF] bg-clip-text text-transparent">
          Welcome back, {user.name.split(' ')[0]}! 👋
        </h1>
        <p className="text-[#9CA3AF] text-base md:text-lg">Ready to make a difference today?</p>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card variant="highlight" className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF6B35]/20 to-transparent rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/10">
                  <Coins className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <p className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium">VIBE Coins</p>
              </div>
              <p className="text-3xl font-bold flex items-center gap-2">
                {user.coins.toLocaleString()}
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card variant="highlight" className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF6B35]/20 to-transparent rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/10">
                  <Flame className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <p className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium">Streak</p>
              </div>
              <p className="text-3xl font-bold flex items-center gap-2">
                {user.streak} <span className="text-lg text-[#9CA3AF] font-normal">days</span>
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card variant="highlight" className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#7C3AED]/20 to-transparent rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#7C3AED]/20 to-[#7C3AED]/10">
                  <TrendingUp className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <p className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium">Monthly Rank</p>
              </div>
              <p className="text-3xl font-bold flex items-center gap-2">
                {monthlyRank !== null ? `#${monthlyRank}` : '...'}
              </p>
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
        <Card variant="gradient" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/5 via-transparent to-[#FF6B35]/5"></div>
          <div className="relative">
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-base font-semibold text-white mb-1">Monthly Goal Progress</p>
                <p className="text-sm text-[#9CA3AF]">
                  {currentProgress} / {monthlyGoal} hours
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#FF6B35] bg-clip-text text-transparent">
                  {progressPercent.toFixed(0)}%
                </p>
              </div>
            </div>
            <div className="w-full bg-[#1A1A1A] rounded-full h-3 overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#FF6B35] rounded-full relative shadow-lg shadow-[#7C3AED]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Urgent Emergency Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="border-2 border-[#FF6B35]/50 bg-gradient-to-br from-[#FF6B35]/10 via-[#0F0F0F] to-[#0F0F0F] relative overflow-hidden shadow-xl shadow-[#FF6B35]/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6B35]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex items-start gap-4 mb-5">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/10 border border-[#FF6B35]/30">
                <AlertCircle className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{emergency.title}</h3>
                  <span className="px-2 py-0.5 text-xs font-semibold bg-[#FF6B35]/20 text-[#FF6B35] rounded-full border border-[#FF6B35]/30">
                    URGENT
                  </span>
                </div>
                <p className="text-sm text-[#D1D5DB] mb-5 leading-relaxed">{emergency.desc}</p>
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs text-[#9CA3AF] font-medium">Community Progress</p>
                    <p className="text-sm font-semibold text-[#FF6B35]">{emergency.progress}%</p>
                  </div>
                  <div className="w-full bg-[#1A1A1A] rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${emergency.progress}%` }}
                      transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-full shadow-lg shadow-[#FF6B35]/30"
                    />
                  </div>
                </div>
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full"
                  onClick={() => console.log('Help Now clicked')}
                >
                  Help Now +{emergency.coinsReward} Coins
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

