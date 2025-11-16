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
    <aside className="hidden md:flex md:flex-col md:w-64 bg-black/80 backdrop-blur-xl border-r border-[#1F1F1F]/50">
      <nav className="flex-1 px-4 py-6 space-y-1 min-h-0">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 relative group ${
                isActive
                  ? 'bg-gradient-to-r from-[#7C3AED]/10 to-[#7C3AED]/5 text-[#7C3AED] border-l-2 border-[#7C3AED]'
                  : 'text-[#9CA3AF] hover:text-white hover:bg-[#1A1A1A]'
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-[#7C3AED] to-[#FF6B35] rounded-r-full"></div>
              )}
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : 'group-hover:scale-110'} transition-transform`} />
              <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>{tab.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

