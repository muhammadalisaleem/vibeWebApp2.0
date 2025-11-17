import { Header } from '@/components/Navigation/Header';
import { BottomNav } from '@/components/Navigation/BottomNav';

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-white">
      <Header />
      <main className="flex-1">
        <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-28 pt-8 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="absolute inset-x-4 top-0 hidden h-40 rounded-3xl bg-gradient-to-r from-[#7C3AED]/10 to-[#FF6B35]/10 blur-3xl md:block" />
          <div className="relative z-10 space-y-10">
            {children}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

