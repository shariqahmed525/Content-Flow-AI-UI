"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "OpenRep AI has revolutionized our social media strategy. We've seen a 300% increase in engagement and saved 20 hours per week on content creation.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Social Media Manager",
    company: "Fashion Forward",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "The AI-generated images are incredible! Our Instagram aesthetic has never looked better, and the automated posting saves us so much time.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Content Creator",
    company: "Lifestyle Blog",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "As a solo creator, OpenRep AI is like having an entire marketing team. The content quality is amazing and my follower growth has exploded.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by 
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Creators Worldwide
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Join thousands of content creators who have transformed their social media presence with OpenRep AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-600" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    <div className="text-slate-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}