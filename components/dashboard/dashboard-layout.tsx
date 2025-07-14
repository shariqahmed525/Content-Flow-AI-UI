"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { UpgradeModal } from '@/components/modals/upgrade-modal';
import { 
  LayoutDashboard, 
  PenTool, 
  Calendar, 
  BarChart3, 
  Settings, 
  User,
  Menu,
  X,
  Sparkles,
  Globe,
  Image,
  LogOut,
  Crown,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Content Creator', href: '/dashboard/create', icon: PenTool },
  { name: 'Schedule', href: '/dashboard/schedule', icon: Calendar },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Platforms', href: '/dashboard/platforms', icon: Globe },
  { name: 'Images', href: '/dashboard/images', icon: Image },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const pathname = usePathname();

  const handleSignOut = () => {
    // Handle sign out logic
    window.location.href = '/auth/signin';
  };

  const handleUpgradeClick = () => {
    setUpgradeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Mobile sidebar */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden",
        sidebarOpen ? "block" : "hidden"
      )}>
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        <div className="fixed left-0 top-0 h-full w-64 bg-slate-800 border-r border-slate-700">
          <div className="flex items-center justify-between p-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ContentFlow AI</span>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <nav className="mt-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors",
                  pathname === item.href && "bg-slate-700 text-white border-r-2 border-blue-500"
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-64 lg:bg-slate-800 lg:border-r lg:border-slate-700">
        <div className="flex items-center p-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">ContentFlow AI</span>
          </Link>
        </div>
        <nav className="mt-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors",
                pathname === item.href && "bg-slate-700 text-white border-r-2 border-blue-500"
              )}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-4">
          {/* Upgrade Banner */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <Crown className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">Upgrade to Pro</span>
            </div>
            <p className="text-xs text-slate-300 mb-3">Unlock unlimited content generation and advanced features</p>
            <Button 
              size="sm" 
              onClick={handleUpgradeClick}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Upgrade Now
            </Button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">John Doe</p>
              <p className="text-xs text-slate-400 truncate">john@example.com</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="text-slate-400 hover:text-white p-1"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-slate-700 bg-slate-800/80 backdrop-blur-sm px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-slate-400 hover:text-white"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1" />
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button
                variant="outline"
                onClick={handleUpgradeClick}
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hidden sm:flex"
              >
                <Crown className="w-4 h-4 mr-2" />
                Upgrade Plan
              </Button>
            </div>
          </div>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal 
        isOpen={upgradeModalOpen} 
        onClose={() => setUpgradeModalOpen(false)} 
      />
    </div>
  );
}