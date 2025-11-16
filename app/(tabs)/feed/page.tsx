'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function formatTimeAgo(date: Date, now: Date): string {
  const hours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  if (hours < 1) return 'Just now';
  if (hours === 1) return '1 hour ago';
  return `${hours} hours ago`;
}

// Fixed base timestamp to avoid hydration mismatches (2024-01-01 00:00:00 UTC)
const FIXED_BASE_TIMESTAMP = 1704067200000;
const mockStories = [
  {
    id: '1',
    userId: 'maya',
    userName: 'Maya Chen',
    text: 'Just finished an amazing beach cleanup! 🌊✨ Picked up 50+ kg of plastic. Every small action counts! 💪 #CleanPakistan',
    images: [],
    likes: 23,
    timestamp: new Date(FIXED_BASE_TIMESTAMP - 2 * 60 * 60 * 1000),
    avatar: '👩',
  },
  {
    id: '2',
    userId: 'ahmed',
    userName: 'Ahmed Khan',
    text: 'Teaching coding to kids in underprivileged schools. Their enthusiasm is contagious! 📚💻 #EducationForAll',
    images: [],
    likes: 45,
    timestamp: new Date(FIXED_BASE_TIMESTAMP - 5 * 60 * 60 * 1000),
    avatar: '👨',
  },
  {
    id: '3',
    userId: 'sara',
    userName: 'Sara Ali',
    text: 'Organized a donation drive for flood victims. Together we raised 500k PKR! 🤝❤️ Community power!',
    images: [],
    likes: 67,
    timestamp: new Date(FIXED_BASE_TIMESTAMP - 8 * 60 * 60 * 1000),
    avatar: '👩',
  },
];

export default function FeedPage() {
  const [currentTime, setCurrentTime] = useState<Date>(() => new Date(FIXED_BASE_TIMESTAMP));
  
  // Update current time on client side for accurate "time ago" display
  useEffect(() => {
    setCurrentTime(new Date());
  }, []);
  return (
    <div className="space-y-6 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white to-[#9CA3AF] bg-clip-text text-transparent">
          Community Feed
        </h1>
        <Button variant="primary" size="lg" className="w-full sm:w-auto">
          <Plus className="w-5 h-5 mr-2 inline" />
          Share Your Story
        </Button>
      </motion.div>

      <div className="space-y-5">
        {mockStories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:border-[#2A2A2A]">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-[#7C3AED]/20">
                  {story.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white mb-1">{story.userName}</p>
                  <p className="text-xs text-[#9CA3AF]">
                    {formatTimeAgo(story.timestamp, currentTime)}
                  </p>
                </div>
              </div>
              <p className="text-base text-[#D1D5DB] mb-4 leading-relaxed whitespace-pre-wrap">{story.text}</p>
              {story.images.length > 0 && (
                <div className="mb-4 rounded-xl overflow-hidden border border-[#1F1F1F]">
                  <img
                    src={story.images[0]}
                    alt="Story"
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              <div className="flex items-center gap-6 pt-4 border-t border-[#1F1F1F]">
                <button className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#FF6B35] transition-all duration-200 group">
                  <Heart className="w-5 h-5 group-hover:fill-[#FF6B35] group-hover:scale-110 transition-all" />
                  <span className="text-sm font-medium">{story.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#7C3AED] transition-all duration-200 group">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-all" />
                  <span className="text-sm font-medium">Comment</span>
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center py-8">
        <div className="inline-flex items-center gap-2 text-[#9CA3AF] text-sm">
          <div className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse"></div>
          <span>Loading more stories...</span>
        </div>
      </div>
    </div>
  );
}

