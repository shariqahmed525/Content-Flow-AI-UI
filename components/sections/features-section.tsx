"use client";

import { motion } from 'framer-motion';
import { 
  Brain, 
  Image, 
  Calendar, 
  BarChart3, 
  Zap, 
  Globe,
  MessageSquare,
  Palette
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Generate engaging posts using GPT-4 and Langchain. Create viral content that resonates with your audience.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Image,
    title: "AI Image Creation",
    description: "Generate stunning visuals with Stable Diffusion. Create custom graphics that match your brand perfectly.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Schedule posts across all platforms with optimal timing based on audience analytics and engagement patterns.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track performance with detailed insights. Optimize your content strategy with data-driven recommendations.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Globe,
    title: "Multi-Platform Posting",
    description: "Post to Instagram, Twitter, Facebook, Reddit, and Telegram simultaneously with platform-specific optimization.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Vector Database",
    description: "Leverage Pinecone vector database for content optimization and personalized recommendations.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: MessageSquare,
    title: "Content Templates",
    description: "Access hundreds of proven templates for different content types and industries.",
    color: "from-teal-500 to-blue-500"
  },
  {
    icon: Palette,
    title: "Brand Consistency",
    description: "Maintain brand voice and visual consistency across all platforms with AI-powered brand guidelines.",
    color: "from-pink-500 to-rose-500"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for 
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Content Creators
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to create, schedule, and optimize your social media presence with AI-powered tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full hover:border-slate-600 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}