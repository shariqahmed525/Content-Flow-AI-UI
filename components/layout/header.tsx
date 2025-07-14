"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">ContentFlow AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-slate-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#platforms" className="text-slate-300 hover:text-white transition-colors">
            Platforms
          </Link>
          <Link href="#pricing" className="text-slate-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors">
            Dashboard
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/auth/signin">
            <Button variant="ghost" className="text-slate-300 hover:text-white">
              Sign In
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-slate-900 border-b border-slate-800 transition-all duration-300",
        isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <nav className="container mx-auto px-4 py-4 space-y-4">
          <Link href="#features" className="block text-slate-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#platforms" className="block text-slate-300 hover:text-white transition-colors">
            Platforms
          </Link>
          <Link href="#pricing" className="block text-slate-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/dashboard" className="block text-slate-300 hover:text-white transition-colors">
            Dashboard
          </Link>
          <div className="flex flex-col space-y-2 pt-4">
            <Link href="/auth/signin">
              <Button variant="ghost" className="w-full text-slate-300 hover:text-white justify-start">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}