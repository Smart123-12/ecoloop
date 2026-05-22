import React, { useState } from 'react';
import { DollarSign, Check, X, ShieldAlert, ArrowRight, HelpCircle } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface PricingProps {
  setCurrentPage: (page: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ setCurrentPage }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Starter License',
      price: billingCycle === 'annual' ? 8000 : 10000,
      period: 'Month',
      desc: 'Perfect for small factories and localized raw waste producers looking to list material streams.',
      features: [
        'Up to 10 Active Material Listings',
        'Basic AI Matching Engine',
        'Standard B2B RFP Templates',
        'Regional Directory Visibility',
        'Standard Email & Chat Support',
      ],
      missing: [
        'BRSR Compliance Audits',
        'Custom Purity Verification',
        'Multi-Site Logistical Routing',
        'Priority AI Match Allocations',
      ],
      cta: 'Begin Listing',
      glow: 'cyan',
    },
    {
      name: 'Professional Tier',
      price: billingCycle === 'annual' ? 24000 : 30000,
      period: 'Month',
      desc: 'Designed for scaled manufacturing plants and active waste recycling networks with continuous volume trading.',
      features: [
        'Unlimited Waste Material Listings',
        'Advanced Neural Purity Matchmaker',
        'Automated Spot-Price Estimations',
        'Multi-Site Logistics Coordinator',
        'Monthly Standardized ESG Scoresheet',
        'Priority Phone & Screen Support',
      ],
      missing: [
        'Dedicated ESG Auditor Node',
        'Custom Regulatory BRSR Outputs',
      ],
      cta: 'Start Pro Free',
      glow: 'green',
      popular: true,
    },
    {
      name: 'Enterprise Scale',
      price: 'Custom',
      period: 'Annual License',
      desc: 'Complete circular operations suite for multi-national groups, global ESG boards, and massive industrial buyers.',
      features: [
        'Dedicated Private Network Sandbox',
        '100% Autopilot Logistics Matching',
        'Custom BRSR & Regulatory Exports',
        'Unlimited ESG Scoreboard Nodes',
        'Real-time Purity Inspection Integrations',
        'Custom API Access & Webhook Suite',
        '24/7 Dedicated Account Director',
      ],
      missing: [],
      cta: 'Schedule B2B Consult',
      glow: 'lime',
    }
  ];

  return (
    <div className="relative z-10 pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Gradients */}
      <div className="absolute top-10 right-1/3 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      {/* Page Title */}
      <div className="text-left mb-10">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="h-5 w-5 text-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Financial Setup</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Enterprise SaaS Pricing Plans
        </h1>
        <p className="text-sm text-slate-400 mt-2">
          Transparent, value-focused subscriptions to scale your B2B recycling operations and carbon credit accruals.
        </p>
      </div>

      {/* Annual / Monthly Toggle Switch */}
      <div className="flex justify-center mb-12">
        <div className="relative flex rounded-xl bg-slate-900/60 p-1 border border-slate-800">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4.5 py-2 rounded-lg text-xs font-bold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'text-slate-450 hover:text-slate-200'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-4.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              billingCycle === 'annual'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'text-slate-450 hover:text-slate-200'
            }`}
          >
            Annual Billing
            <span className="text-[10px] bg-emerald-500 text-dark-900 font-bold px-1.5 py-0.5 rounded leading-none">
              -20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-left">
        {plans.map((plan, idx) => (
          <GlowCard 
            key={idx} 
            glowColor={plan.glow as any} 
            className={`flex flex-col justify-between h-full relative ${
              plan.popular ? 'border-emerald-500/30 bg-dark-800/60 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : ''
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-dark-900 font-extrabold text-[10px] uppercase tracking-wider rounded-lg shadow-md">
                RECOMMENDED STREAM LICENSE
              </span>
            )}

            <div>
              {/* Title & Price */}
              <div className="border-b border-emerald-500/10 pb-6 mb-6">
                <h3 className="text-lg font-black text-white">{plan.name}</h3>
                <p className="text-xs text-slate-405 leading-relaxed mt-2">{plan.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">
                    {typeof plan.price === 'number' ? `₹${plan.price.toLocaleString('en-IN')}` : plan.price}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ {plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex gap-2.5 items-start">
                    <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-medium leading-tight">{feature}</span>
                  </div>
                ))}
                {plan.missing.map((missingItem, mIdx) => (
                  <div key={mIdx} className="flex gap-2.5 items-start opacity-40">
                    <X className="h-4.5 w-4.5 text-slate-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-400 font-medium leading-tight line-through">{missingItem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="mt-8 border-t border-emerald-500/10 pt-6">
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`w-full py-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-dark-900 shadow-[0_0_20px_rgba(16,185,129,0.25)]' 
                    : 'bg-dark-900 border border-slate-700 hover:border-emerald-500/35 text-slate-200 hover:text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};
