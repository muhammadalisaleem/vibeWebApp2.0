'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Heart, PenTool, BarChart3, Calendar, Sparkles, MessageCircle, Bot } from 'lucide-react';
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

const aiFeatures = [
  {
    title: 'Policy Analysis',
    description: 'Summaries of local policies and how they affect your community.',
    badge: 'New',
    highlight: 'Understand impact in seconds.',
  },
  {
    title: 'Advocacy Assistant',
    description: 'Generate personalized letters and outreach plans to representatives.',
    badge: 'Popular',
    highlight: 'Make your voice heard.',
  },
  {
    title: 'Event Planning',
    description: 'Step-by-step guidance to organize and promote civic events.',
    badge: 'Toolkit',
    highlight: 'From idea to execution.',
  },
  {
    title: 'Impact Tracking',
    description: 'Track outcomes and share visual reports with your community.',
    badge: 'Beta',
    highlight: 'Showcase real change.',
  },
];

export default function AIPage() {
  return (
    <div className="space-y-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-4 lg:grid-cols-3"
      >
        <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-[#1f1635] via-[#0f172a] to-[#030712] lg:col-span-2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.25),transparent_55%)]" />
          <div className="relative space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-[#c084fc]" />
              <p className="section-heading text-[#cbd5f5]">AI Civic Companion</p>
            </div>
            <h1 className="heading-xl font-bold">Plan, advocate, and learn with AI</h1>
            <p className="text-sm text-[#9CA3AF]">
              Draft letters, plan community events, discover local issues, and get tailored recommendations in seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="glass-chip">Realtime policy summaries</span>
              <span className="glass-chip">Multilingual support</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Open Assistant</Button>
              <Button variant="secondary" className="border-white/10 text-white">
                Watch demo
              </Button>
            </div>
          </div>
        </Card>
        <Card className="border-white/10 bg-black/40">
          <div className="space-y-3">
            <p className="section-heading text-[#38bdf8]">AI Availability</p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-[#9CA3AF]">Assistant response time</p>
              <p className="text-3xl font-semibold">~3s</p>
              <p className="text-xs text-emerald-400">All systems operational</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-black/30 p-4 text-sm text-[#9CA3AF]">
              <p>New: Urdu + English mixed prompts supported.</p>
            </div>
          </div>
        </Card>
      </motion.section>

      <section className="space-y-4">
        <h2 className="heading-lg">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full cursor-pointer border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{action.emoji}</div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <Icon className="h-5 w-5 text-[#7C3AED]" />
                        <h3 className="font-semibold">{action.title}</h3>
                      </div>
                      <p className="text-sm text-[#9CA3AF]">{action.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="heading-lg">AI Features</h2>
          <Button variant="outline" size="sm" className="border-white/20 text-white">
            See roadmap
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {aiFeatures.map((feature) => (
            <Card key={feature.title} className="border-white/10 bg-black/40">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#9CA3AF]">
                    {feature.badge}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-[#9CA3AF]">{feature.description}</p>
                </div>
                <MessageCircle className="h-5 w-5 text-[#7C3AED]" />
              </div>
              <p className="mt-3 text-xs text-[#34d399]">{feature.highlight}</p>
            </Card>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-4 lg:grid-cols-2"
      >
        <Card className="border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <Bot className="h-6 w-6 text-[#c084fc]" />
            <div>
              <p className="text-sm text-[#9CA3AF]">Live Preview</p>
              <h3 className="text-lg font-semibold">Chat with VIBE AI</h3>
            </div>
          </div>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl bg-white/5 p-3 text-sm">
              <p className="text-[#9CA3AF]">Alex · 1 min ago</p>
              <p className="text-white">Draft an advocacy letter asking for more funding for community health clinics.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-sm">
              <p className="text-[#34d399]">VIBE AI</p>
              <p className="text-white">Here’s a 3-paragraph letter you can personalize. I also added two data points from recent reports. Want a shorter version?</p>
            </div>
          </div>
        </Card>
        <Card className="border-white/10 bg-gradient-to-br from-[#7C3AED]/20 to-[#FF6B35]/20">
          <div className="space-y-3">
            <p className="text-sm text-[#E5E7EB]">Need deeper support?</p>
            <h3 className="text-2xl font-semibold">Schedule a session with AI Coach</h3>
            <p className="text-sm text-[#E5E7EB]">
              Guided walkthroughs for campaign planning, event checklists, and volunteer onboarding.
            </p>
            <Button variant="primary" className="w-full">
              Book 15-min session
            </Button>
          </div>
        </Card>
      </motion.section>
    </div>
  );
}

