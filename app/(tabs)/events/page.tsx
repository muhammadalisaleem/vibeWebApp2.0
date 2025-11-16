'use client';

import { Card } from '@/components/ui/Card';
import { useUser } from '@/hooks/useUser';
import { Clock, Calendar, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'environment', name: 'Environment', icon: '🌱', opps: 12 },
  { id: 'education', name: 'Education', icon: '📚', opps: 8 },
  { id: 'social', name: 'Social', icon: '🤝', opps: 15 },
  { id: 'health', name: 'Health', icon: '🩺', opps: 6 },
];

export default function EventsPage() {
  const { data: user } = useUser();

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-6">Events & Opportunities</h1>
      </motion.div>

      {/* Monthly Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <Clock className="w-6 h-6 text-[#7C3AED] mx-auto mb-2" />
              <p className="text-2xl font-bold">9</p>
              <p className="text-xs text-[#9CA3AF]">Hours</p>
            </div>
            <div>
              <Calendar className="w-6 h-6 text-[#FF6B35] mx-auto mb-2" />
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-[#9CA3AF]">Events</p>
            </div>
            <div>
              <Trophy className="w-6 h-6 text-[#FF6B35] mx-auto mb-2" />
              <p className="text-2xl font-bold">🏆</p>
              <p className="text-xs text-[#9CA3AF]">Badge</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Category Grid */}
      <div>
        <h2 className="text-xl font-bold mb-4">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="cursor-pointer hover:border-[#7C3AED] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                    <p className="text-sm text-[#9CA3AF]">
                      {category.opps} opportunities available
                    </p>
                  </div>
                  <div className="text-[#7C3AED]">→</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

