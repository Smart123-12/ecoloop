import React, { useState } from 'react';
import { DollarSign, Check, X, ShieldAlert, ArrowRight, HelpCircle } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface PricingProps {
  setCurrentPage: (page: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ setCurrentPage }) => {
  const plans = [
    {
      name: 'Starter Pilot License',
      price: 'Custom Pilot',
      period: 'Per Facility',
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
      cta: 'Initiate B2B Pilot',
      glow: 'cyan',
    },
    {
      name: 'Professional Network Tier',
      price: 'Volume Pricing',
      period: 'Custom Scale',
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
      cta: 'Request Scale Quote',
      glow: 'emerald',
      popular: true,
    },
    {
      name: 'Enterprise Scale Suite',
      price: 'Enterprise Model',
      period: 'Audited Value',
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
      <div className="absolute top-10 right-1/3 h-[400px] w-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />

      {/* Page Title */}
      <div className="text-left mb-16">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="h-5 w-5 text-teal-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">B2B Financial Structure</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Flexible Enterprise Valuation Plans
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Transparent, volume-focused frameworks to scale your B2B recycling operations, ESG auditing, and circular integration.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-left">
        {plans.map((plan, idx) => (
          <GlowCard 
            key={idx} 
            glowColor={plan.glow as any} 
            className={`flex flex-col justify-between h-full relative ${
              plan.popular ? 'border-teal-500/20 bg-white shadow-[0_10px_30px_rgba(20,184,166,0.06)]' : 'bg-white shadow-[0_4px_20px_rgba(148,163,184,0.04)]'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-teal-600 to-teal-400 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-lg shadow-md">
                RECOMMENDED PILOT TIER
              </span>
            )}

            <div>
              {/* Title & Price */}
              <div className="border-b border-teal-500/10 pb-6 mb-6">
                <h3 className="text-lg font-black text-slate-900">{plan.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">{plan.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-teal-600">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/ {plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex gap-2.5 items-start">
                    <Check className="h-4.5 w-4.5 text-teal-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-650 font-medium leading-tight">{feature}</span>
                  </div>
                ))}
                {plan.missing.map((missingItem, mIdx) => (
                  <div key={mIdx} className="flex gap-2.5 items-start opacity-45">
                    <X className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-400 font-medium leading-tight line-through">{missingItem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="mt-8 border-t border-teal-500/10 pt-6">
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`w-full py-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-700 hover:to-teal-500 text-white shadow-[0_4px_15px_rgba(20,184,166,0.15)]' 
                    : 'bg-slate-50 border border-slate-200 hover:border-teal-500/35 text-slate-700 hover:text-teal-600'
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
