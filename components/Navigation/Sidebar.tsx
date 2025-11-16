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

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 md:left-0 md:pt-16 bg-black border-r border-[#1F1F1F]">
      <nav className="flex-1 px-4 py-6 space-y-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#111111] text-[#7C3AED]'
                  : 'text-[#9CA3AF] hover:text-white hover:bg-[#111111]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{tab.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

