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
    images: ['https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80'],
    likes: 23,
    timestamp: new Date(FIXED_BASE_TIMESTAMP - 2 * 60 * 60 * 1000),
    avatar: '👩',
  },
  {
    id: '2',
    userId: 'ahmed',
    userName: 'Ahmed Khan',
    text: 'Teaching coding to kids in underprivileged schools. Their enthusiasm is contagious! 📚💻 #EducationForAll',
    images: ['https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80'],
    likes: 45,
    timestamp: new Date(FIXED_BASE_TIMESTAMP - 5 * 60 * 60 * 1000),
    avatar: '👨',
  },
  {
    id: '3',
    userId: 'sara',
    userName: 'Sara Ali',
    text: 'Organized a donation drive for flood victims. Together we raised 500k PKR! 🤝❤️ Community power!',
    images: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'],
    likes: 67,
    timestamp: new Date(FIXED_BASE_TIMESTAMP - 8 * 60 * 60 * 1000),
    avatar: '👩',
  },
];

export default function FeedPage() {
  const [currentTime, setCurrentTime] = useState<Date>(() => new Date(FIXED_BASE_TIMESTAMP));
  
  // Update current time on client side for accurate "time ago" display
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentTime(new Date());
    }, 0);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="space-y-6 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-4 lg:grid-cols-2"
      >
        <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-[#0f172a] to-[#030712]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.2),transparent_60%)]" />
          <div className="relative space-y-3">
            <h1 className="heading-xl font-bold">Community Feed</h1>
            <p className="text-[#9CA3AF]">Share your civic journey and inspire others. Stories with photos earn +25 bonus coins.</p>
            <div className="flex flex-wrap gap-3">
              <span className="glass-chip">127 stories this week</span>
              <span className="glass-chip">+12% engagement</span>
            </div>
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              <Plus className="w-5 h-5 mr-2 inline" />
              Share Your Story
            </Button>
          </div>
        </Card>
        <Card className="border-white/10 bg-black/30">
          <div className="space-y-3">
            <p className="section-heading text-[#38bdf8]">This Week’s Impact</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-2xl font-semibold">127</p>
                <p className="text-xs text-[#9CA3AF]">Stories shared</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">2.3k</p>
                <p className="text-xs text-[#9CA3AF]">Volunteer hours</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">45</p>
                <p className="text-xs text-[#9CA3AF]">New members</p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <Card className="border-white/10 bg-black/40">
        <div className="flex flex-col gap-4">
          <textarea
            className="min-h-[90px] rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white placeholder:text-[#6b7280]"
            placeholder="Share your civic story..."
          />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
              <button className="glass-chip">📷 Add photo</button>
              <button className="glass-chip">🏷️ Tag event</button>
            </div>
            <Button variant="cta" size="sm">
              Post update
            </Button>
          </div>
        </div>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="heading-lg">Community Stories</h2>
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
                <div className="mb-4 overflow-hidden rounded-2xl border border-white/10">
                  <div
                    className="h-48 w-full"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.5)), url(${story.images[0]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
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

