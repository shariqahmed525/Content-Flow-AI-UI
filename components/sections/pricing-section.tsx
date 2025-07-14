"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$29",
    period: "/month",
    description: "Perfect for individuals and small creators",
    features: [
      "100 AI-generated posts/month",
      "Basic image generation",
      "3 social media platforms",
      "Basic analytics",
      "Email support"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    icon: Crown,
    price: "$79",
    period: "/month",
    description: "Ideal for businesses and agencies",
    features: [
      "500 AI-generated posts/month",
      "Advanced image generation",
      "All social media platforms",
      "Advanced analytics & insights",
      "Priority support",
      "Custom templates",
      "Team collaboration"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: "$199",
    period: "/month",
    description: "For large organizations and agencies",
    features: [
      "Unlimited AI-generated posts",
      "Premium image generation",
      "All platforms + API access",
      "Advanced analytics suite",
      "24/7 dedicated support",
      "Custom AI training",
      "White-label solution",
      "Advanced team features"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-slate-900/50 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, 
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Choose the perfect plan for your content creation needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'transform scale-105 z-10' : 'z-0'}`}
              style={{ marginTop: plan.popular ? '2rem' : '0' }}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 h-full relative z-10 ${
                plan.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/20' : 'border-slate-700'
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                      : 'bg-slate-700'
                  }`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                
                <p className="text-slate-400 mb-8">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-slate-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 99.9% uptime SLA</span>
            <span>✓ 24/7 support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}