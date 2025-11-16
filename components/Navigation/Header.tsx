'use client';

import { Menu, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="static top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#1F1F1F]/50 shadow-lg shadow-black/20">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#FF6B35] bg-clip-text text-transparent">
              VIBE.
            </h1>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#FF6B35] opacity-50"></div>
          </div>
          <p className="text-xs md:text-sm text-[#9CA3AF] hidden lg:inline">
            Make a difference in your community
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-[#1A1A1A] rounded-xl transition-all duration-200 hover:scale-110 relative">
            <Bell className="w-5 h-5 text-[#9CA3AF] hover:text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF6B35] rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-[#1A1A1A] rounded-xl transition-all duration-200 hover:scale-110 md:hidden">
            <Menu className="w-5 h-5 text-[#9CA3AF] hover:text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}

