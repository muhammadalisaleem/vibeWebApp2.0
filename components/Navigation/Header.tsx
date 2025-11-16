'use client';

import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-[#1F1F1F]">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-[#7C3AED]">VIBE.</h1>
          <p className="text-sm text-[#9CA3AF] hidden sm:inline">
            Make a difference in your community
          </p>
        </div>
        <button className="p-2 hover:bg-[#1F1F1F] rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

