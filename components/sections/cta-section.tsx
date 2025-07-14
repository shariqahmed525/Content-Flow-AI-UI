"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-slate-700 rounded-3xl p-12">
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-slate-300">Ready to transform your social media?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Start Creating 
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}Today
              </span>
            </h2>
            
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who have already transformed their social media presence with OpenRep AI. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/signup">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6 h-auto"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-6 h-auto"
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex justify-center items-center space-x-6 mt-8 text-sm text-slate-500">
              <span>✓ 14-day free trial</span>
              <span>✓ No setup fees</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}