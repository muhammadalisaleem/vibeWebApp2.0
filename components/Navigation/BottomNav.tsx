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
    <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-[#1F1F1F]/50 shadow-2xl shadow-black/50 md:hidden z-50">
      <div className="flex items-center justify-around px-2 py-2.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex flex-col items-center gap-1 p-2.5 rounded-xl transition-all duration-200 relative ${
                isActive
                  ? 'text-[#7C3AED] bg-gradient-to-b from-[#7C3AED]/10 to-transparent'
                  : 'text-[#9CA3AF] hover:text-white hover:bg-[#1A1A1A]'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-[#7C3AED] to-[#FF6B35] rounded-b-full"></div>
              )}
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
              <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

