"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Mail, ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate password reset email
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">ContentFlow AI</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {isEmailSent ? 'Check your email' : 'Forgot password?'}
          </h1>
          <p className="text-slate-400">
            {isEmailSent 
              ? 'We\'ve sent a password reset link to your email address'
              : 'No worries, we\'ll send you reset instructions'
            }
          </p>
        </div>

        <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 shadow-2xl">
          <CardContent className="pt-6">
            {isEmailSent ? (
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Email sent!</h3>
                  <p className="text-slate-400 text-sm">
                    We've sent a password reset link to <strong className="text-white">{email}</strong>
                  </p>
                </div>
                <div className="space-y-3">
                  <Button
                    onClick={() => window.open('mailto:', '_blank')}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    Open email app
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setIsEmailSent(false)}
                    className="w-full text-slate-400 hover:text-white"
                  >
                    Try another email
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-slate-700 border-slate-600 text-slate-300 placeholder:text-slate-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2.5"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send reset link
                    </div>
                  )}
                </Button>
              </form>
            )}

            <div className="text-center mt-6">
              <Link 
                href="/auth/signin" 
                className="inline-flex items-center text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}