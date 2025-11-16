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
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-[#1F1F1F] md:hidden z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                isActive
                  ? 'text-[#7C3AED] bg-[#111111]'
                  : 'text-[#9CA3AF] hover:text-white hover:bg-[#111111]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

