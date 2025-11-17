'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useUser } from '@/hooks/useUser';
import { CalendarDays, Clock, MapPin, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'environment', name: 'Environment', icon: '🌱', opps: 12, gradient: 'from-emerald-400/15 to-emerald-600/10' },
  { id: 'education', name: 'Education', icon: '📚', opps: 8, gradient: 'from-sky-400/15 to-sky-600/10' },
  { id: 'social', name: 'Community', icon: '🤝', opps: 15, gradient: 'from-orange-400/15 to-orange-600/10' },
  { id: 'health', name: 'Health', icon: '🩺', opps: 6, gradient: 'from-rose-400/15 to-rose-600/10' },
];

const filters = ['All', 'Nearby', 'Popular', 'Weekend', 'Online'];

const upcomingEvents = [
  {
    id: 'cleanup',
    title: 'Community Cleanup Drive',
    date: 'Sat, Sep 20 · 9:00 AM – 12:00 PM',
    location: 'Central Park',
    category: 'Environment',
    volunteers: '23/50 volunteers',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'foodbank',
    title: 'Food Bank Distribution',
    date: 'Sun, Sep 21 · 10:00 AM – 2:00 PM',
    location: 'Community Center',
    category: 'Social',
    volunteers: '15/30 volunteers',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'digital',
    title: 'Digital Literacy Workshop',
    date: 'Mon, Sep 22 · 6:00 PM – 8:00 PM',
    location: 'City Library',
    category: 'Education',
    volunteers: '8/15 volunteers',
    image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1200&q=80',
  },
];

const recentHistory = [
  { id: 'hist-1', title: 'Tree Planting', date: 'Sep 15', hours: '4h', status: 'Completed' },
  { id: 'hist-2', title: 'Food Drive', date: 'Sep 12', hours: '3h', status: 'Completed' },
  { id: 'hist-3', title: 'Reading Program', date: 'Sep 8', hours: '2h', status: 'Completed' },
];

export default function EventsPage() {
  const { data: user } = useUser();
  const greeter = user ? user.name.split(' ')[0] : 'friend';

  return (
    <div className="space-y-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#141432] via-[#090b19] to-[#0a0a0a] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-[#a5b4fc]">Events Hub</p>
            <h1 className="text-[clamp(2.4rem,2vw+1.8rem,3.4rem)] font-black leading-tight">
              hey {greeter.toLowerCase()}, this is <span className="text-[#f472b6]">VIBE Events</span>
            </h1>
            <p className="max-w-2xl text-sm text-[#c7d2fe]">
              The go-to space to discover what’s happening around you—cleanups, workshops, pop-up drives, and more. Stay curious, stay involved.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="lg" className="rounded-full px-6">
                Events near me
              </Button>
              <Button variant="secondary" size="lg" className="rounded-full border-white/20 px-6 text-white">
                Explore calendar
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-[#e0e7ff] lg:w-96">
            <div className="flex items-center justify-between">
              <span>Upcoming this week</span>
              <strong className="text-2xl text-white">18</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Spots left</span>
              <strong className="text-2xl text-white">142</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Hosted in your city</span>
              <strong className="text-2xl text-white">6</strong>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="heading-lg">Curated for you</h2>
            <p className="text-sm text-[#9CA3AF]">Browse by vibe, mood, or cause.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className="rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#cbd5f5] hover:bg-white/10"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Card className={`h-full bg-gradient-to-br ${category.gradient} border-white/10`}>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                    <p className="text-sm text-[#D1D5DB]">{category.opps} opportunities available</p>
                  </div>
                  <div className="text-[#7C3AED]">→</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-heading text-[#38bdf8]">Upcoming Events</p>
            <h2 className="heading-lg font-semibold">Join an event this week</h2>
          </div>
        </div>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden border-white/10 bg-gradient-to-br from-[#0f111b] to-[#050507] p-0 md:flex">
              <div
                className="h-44 w-full md:h-auto md:w-2/5"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(5,5,5,0) 40%, rgba(5,5,5,0.8)), url(${event.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between text-xs uppercase">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[#fbbf24] tracking-[0.3em]">{event.category}</span>
                  <span className="text-[#9CA3AF]">{event.volunteers}</span>
                </div>
                <h3 className="text-2xl font-semibold">{event.title}</h3>
                <p className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                  <CalendarDays className="h-4 w-4 text-[#38bdf8]" />
                  {event.date}
                </p>
                <p className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                  <MapPin className="h-4 w-4 text-[#fb7185]" />
                  {event.location}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="primary" size="sm" className="rounded-full px-5">
                    Join Event
                  </Button>
                  <Button variant="secondary" size="sm" className="rounded-full border-white/15 px-5 text-white">
                    Share
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-4 border-white/10 bg-gradient-to-br from-[#0f1b17] to-[#030712]">
          <div className="flex items-center gap-3 text-[#34d399]">
            <Clock className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.4em]">My Recent Activity</p>
          </div>
          <div className="space-y-3">
            {recentHistory.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-[#9CA3AF]">{item.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[#34d399]">{item.hours}</p>
                  <p className="text-xs text-[#6b7280]">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4 border-white/10 bg-gradient-to-br from-[#1c0f1e] to-[#0f131d]">
          <div className="flex items-center gap-3 text-[#FF6B35]">
            <Trophy className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.4em]">Volunteer Badge</p>
          </div>
          <p className="text-sm text-[#D1D5DB]">
            You are 6 hours away from unlocking the Community Hero badge. Attend any two events this week to secure it!
          </p>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9CA3AF]">Progress</p>
            <p className="text-3xl font-bold">78%</p>
            <p className="text-xs text-[#9CA3AF]">47 / 60 hours</p>
          </div>
        </Card>
      </section>
    </div>
  );
}

