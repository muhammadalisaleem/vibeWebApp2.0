import { Header } from '@/components/Navigation/Header';
import { Sidebar } from '@/components/Navigation/Sidebar';
import { BottomNav } from '@/components/Navigation/BottomNav';

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 pb-20 md:pb-0">
          <div className="max-w-7xl mx-auto px-4 py-6">
            {children}
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}

