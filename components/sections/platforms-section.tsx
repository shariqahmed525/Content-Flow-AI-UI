"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const platforms = [
  { name: 'Instagram', logo: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-pink-500 to-purple-600' },
  { name: 'Twitter', logo: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-blue-400 to-blue-600' },
  { name: 'Facebook', logo: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-blue-600 to-blue-800' },
  { name: 'LinkedIn', logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-blue-700 to-blue-900' },
  { name: 'Reddit', logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-orange-500 to-red-600' },
  { name: 'Telegram', logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-blue-500 to-cyan-500' }
];

export function PlatformsSection() {
  return (
    <section id="platforms" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Post to All Your 
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Favorite Platforms
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Connect all your social media accounts and post simultaneously with platform-specific optimizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative bg-gradient-to-r ${platform.color} p-6 rounded-2xl text-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold">{platform.name[0]}</span>
                </div>
                <h3 className="text-white font-semibold">{platform.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Smart Cross-Platform Optimization</h3>
            <p className="text-slate-400 mb-6">
              Our AI automatically adapts your content for each platform's unique requirements, character limits, and best practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-slate-400">Engagement Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5x</div>
                <div className="text-slate-400">Faster Content Creation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-slate-400">Automated Posting</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}