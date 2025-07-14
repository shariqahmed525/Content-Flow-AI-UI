"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Zap, Rocket, X } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const plans = [
  {
    name: "Professional",
    icon: Crown,
    price: "$79",
    period: "/month",
    description: "Perfect for growing businesses",
    features: [
      "500 AI-generated posts/month",
      "Advanced image generation",
      "All social media platforms",
      "Advanced analytics & insights",
      "Priority support",
      "Custom templates",
      "Team collaboration"
    ],
    popular: true,
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: "$199",
    period: "/month",
    description: "For large organizations",
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
    popular: false,
    color: "from-purple-500 to-pink-600"
  }
];

export function UpgradeModal({ isOpen, onClose }: UpgradeModalProps) {
  const [selectedPlan, setSelectedPlan] = useState("Professional");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpgrade = async (planName: string) => {
    setIsLoading(true);
    // Simulate upgrade process
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      // Show success message or redirect
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-slate-800 border-slate-700 text-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold flex items-center">
              <Crown className="w-6 h-6 mr-2 text-yellow-400" />
              Upgrade Your Plan
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border rounded-2xl p-6 cursor-pointer transition-all ${
                selectedPlan === plan.name
                  ? 'border-blue-500 bg-slate-700/50'
                  : 'border-slate-600 hover:border-slate-500'
              }`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-r ${plan.color}`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-slate-400 text-sm">{plan.description}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>
              
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={() => handleUpgrade(plan.name)}
                disabled={isLoading}
                className={`w-full ${
                  selectedPlan === plan.name
                    ? `bg-gradient-to-r ${plan.color} hover:opacity-90`
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                {isLoading && selectedPlan === plan.name ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Upgrading...
                  </>
                ) : (
                  `Upgrade to ${plan.name}`
                )}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6 p-4 bg-slate-700/30 rounded-lg">
          <p className="text-slate-400 text-sm mb-2">
            ✓ 14-day money-back guarantee • ✓ Cancel anytime • ✓ Instant activation
          </p>
          <p className="text-xs text-slate-500">
            Your subscription will be activated immediately after payment confirmation.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}