"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 mb-8">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm text-slate-300">Powered by GPT-4 & Advanced AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Create Viral 
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Social Content
            </span>
            <br />
            with AI Magic
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Generate engaging posts, stunning images, and viral content for Instagram, Twitter, Facebook, and more. 
            All powered by cutting-edge AI and automated posting.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/auth/signup">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6 h-auto"
              >
                Start Creating Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-6 h-auto"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10M+</div>
                <div className="text-slate-400">Posts Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
                <div className="text-slate-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-slate-400">Uptime</div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full opacity-40 animate-pulse delay-300"></div>
        </motion.div>
      </div>
    </section>
  );
}