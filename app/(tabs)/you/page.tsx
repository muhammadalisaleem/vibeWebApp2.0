'use client';

import { useUser } from '@/hooks/useUser';
import { Card } from '@/components/ui/Card';
import { Coins, Clock, Calendar, Award } from 'lucide-react';
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
    <div className="space-y-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-6"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#FF6B35] flex items-center justify-center text-4xl mb-4 mx-auto">
          {user.name.charAt(0)}
        </div>
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]">
          <Award className="w-4 h-4 text-[#7C3AED]" />
          <span className="text-sm font-semibold text-[#7C3AED]">
            {user.civicChampion ? 'Civic Champion' : 'Member'}
          </span>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <div className="text-center">
              <Coins className="w-6 h-6 text-[#FF6B35] mx-auto mb-2" />
              <p className="text-2xl font-bold">{user.coins.toLocaleString()}</p>
              <p className="text-xs text-[#9CA3AF]">Coins</p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <div className="text-center">
              <Clock className="w-6 h-6 text-[#7C3AED] mx-auto mb-2" />
              <p className="text-2xl font-bold">{user.hours}</p>
              <p className="text-xs text-[#9CA3AF]">Hours</p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <div className="text-center">
              <Calendar className="w-6 h-6 text-[#FF6B35] mx-auto mb-2" />
              <p className="text-2xl font-bold">{user.eventsJoined}</p>
              <p className="text-xs text-[#9CA3AF]">Events</p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <div className="text-center">
              <Award className="w-6 h-6 text-[#7C3AED] mx-auto mb-2" />
              <p className="text-2xl font-bold">{user.badges.length}</p>
              <p className="text-xs text-[#9CA3AF]">Badges</p>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex-shrink-0"
            >
              <Card className="w-32 text-center">
                <div className="text-4xl mb-2">{achievement.emoji}</div>
                <p className="text-xs font-semibold">{achievement.name}</p>
                {achievement.unlocked && (
                  <p className="text-[10px] text-[#7C3AED] mt-1">✓ Unlocked</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

