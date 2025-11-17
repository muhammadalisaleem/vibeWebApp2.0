'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MessageSquare, Coins, Sparkles, Calendar, User } from 'lucide-react';

const tabs = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Feed', href: '/feed', icon: MessageSquare },
  { name: 'VIBE', href: '/vibe', icon: Coins },
  { name: 'AI', href: '/ai', icon: Sparkles },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'You', href: '/you', icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/85 backdrop-blur-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.65)] md:hidden">
      <div className="mx-auto flex max-w-xl items-center justify-between gap-1 px-4 py-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`relative flex flex-1 flex-col items-center gap-1 rounded-2xl px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition-all duration-200 ${
                isActive
                  ? 'text-white shadow-[0_8px_20px_rgba(124,58,237,0.35)]'
                  : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#FF6B35] opacity-20 blur-md" />
              )}
              <Icon className={`relative z-10 h-5 w-5 ${isActive ? 'scale-110 text-[#FFB199]' : ''} transition-transform`} />
              <span className="relative z-10">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

