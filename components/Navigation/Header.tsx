'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Flame, Trophy, Coins } from 'lucide-react';
import { useUser } from '@/hooks/useUser';

const tabs = [
  { name: 'Home', href: '/' },
  { name: 'Feed', href: '/feed' },
  { name: 'VIBE', href: '/vibe' },
  { name: 'AI', href: '/ai' },
  { name: 'Events', href: '/events' },
  { name: 'You', href: '/you' },
];

export function Header() {
  const pathname = usePathname();
  const { data: user } = useUser();

  const headerStats = [
    {
      label: 'Coins',
      value: user?.coins.toLocaleString() ?? '—',
      icon: Coins,
      accent: 'text-[#FACC15]',
    },
    {
      label: 'Streak',
      value: user?.streak ? `${user.streak} days` : '—',
      icon: Flame,
      accent: 'text-[#FB923C]',
    },
    {
      label: 'Hours',
      value: user?.hours ? `${user.hours}h` : '—',
      icon: Trophy,
      accent: 'text-[#38BDF8]',
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-2xl shadow-lg shadow-black/30">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-4 py-4 md:px-6 xl:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <h1 className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#FF6B35] bg-clip-text text-3xl font-black tracking-wide text-transparent md:text-4xl">
                VIBE.
              </h1>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#FF6B35] opacity-70" />
            </div>
            <p className="hidden rounded-full border border-white/10 px-3 py-1 text-xs text-[#cbd5f5] md:flex md:items-center md:gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Civic engagement companion
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 md:justify-end">
            <div className="hidden gap-2 md:flex">
              {headerStats.map(({ label, value, icon: Icon, accent }) => (
                <div key={label} className="glass-chip">
                  <Icon className={`h-3.5 w-3.5 ${accent}`} />
                  <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[#9CA3AF]">{label}</span>
                  <strong className="text-xs text-white">{value}</strong>
                </div>
              ))}
            </div>
            <button className="relative rounded-2xl border border-white/10 p-2.5 transition hover:-translate-y-0.5 hover:bg-white/10">
              <Bell className="h-5 w-5 text-white" />
              <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-[#FF6B35]" />
            </button>
          </div>
        </div>
        <nav className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-3 overflow-x-auto rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] shadow-[0_15px_30px_rgba(0,0,0,0.35)]">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`inline-flex min-w-[100px] items-center justify-center whitespace-nowrap rounded-full px-6 py-2 text-center text-[0.8rem] tracking-wide transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#FF6B35] text-white shadow-[0_10px_30px_rgba(124,58,237,0.45)]'
                    : 'text-[#cbd5f5] hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

