import Link from 'next/link';
import { Sparkles, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ContentFlow AI</span>
            </div>
            <p className="text-slate-400 max-w-xs">
              Create viral social media content with AI-powered tools. Transform your social media presence today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">API Documentation</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Community</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 ContentFlow AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}