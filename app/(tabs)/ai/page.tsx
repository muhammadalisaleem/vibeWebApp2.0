'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Heart, PenTool, BarChart3, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const quickActions = [
  {
    id: '1',
    title: 'Find Opportunities',
    description: 'Get personalized civic action recommendations',
    icon: Heart,
    emoji: '❤️',
  },
  {
    id: '2',
    title: 'Draft Letter',
    description: 'Write letters to officials or organizations',
    icon: PenTool,
    emoji: '✏️',
  },
  {
    id: '3',
    title: 'Learn Issues',
    description: 'Understand local civic issues and policies',
    icon: BarChart3,
    emoji: '📊',
  },
  {
    id: '4',
    title: 'Plan Event',
    description: 'Organize and promote your own civic event',
    icon: Calendar,
    emoji: '🏛️',
  },
];

export default function AIPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-8 h-8 text-[#7C3AED]" />
          <h1 className="text-3xl font-bold">AI Assistant</h1>
        </div>
        <p className="text-[#9CA3AF]">Get help with your civic actions</p>
      </motion.div>

      {/* Quick Actions Grid */}
      <div>
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="cursor-pointer hover:border-[#7C3AED] transition-colors h-full">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{action.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-5 h-5 text-[#7C3AED]" />
                        <h3 className="font-bold">{action.title}</h3>
                      </div>
                      <p className="text-sm text-[#9CA3AF]">{action.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Policy Analysis Teaser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-[#7C3AED]/20 to-[#FF6B35]/20 border-[#7C3AED]">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📊</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Policy Analysis</h3>
              <p className="text-sm text-[#9CA3AF] mb-4">
                Analyze local policies and understand their impact on your community.
                Get AI-powered insights on civic matters.
              </p>
              <Button
                variant="primary"
                onClick={() => console.log('Try Policy Analysis')}
              >
                Try Now
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

