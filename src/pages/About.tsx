import React from 'react';
import { Leaf, Award, Recycle, ShieldCheck, Compass, HelpCircle, Cpu, CheckCircle2 } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  return (
    <div className="relative z-10 pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background glowing gradients */}
      <div className="absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      {/* Page Title */}
      <div className="text-left mb-12">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="h-5 w-5 text-blue-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Our Identity</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About EcoLoop Technology
        </h1>
        <p className="text-sm text-slate-650 mt-2">
          Pioneering the industrial climate-tech transition through digital raw material exchange and AI auditing loops.
        </p>
      </div>

      {/* MISSION SPLIT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 text-left">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Our Mission: Zero B2B Industrial Waste to Landfill
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mt-4">
            Industrial manufacturing units contribute to over 70% of solid landfills across industrial zones. EcoLoop was founded with a singular, clear mandate: to make industrial waste an asset stream.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-3">
            By digitizing raw byproduct volumes, assessing chemical grades automatically via neural nets, and resolving nearby buyer matches, we minimize transport fuel emissions while scaling the recovery index of critical metals, wood, textiles, and plastics.
          </p>
          <div className="flex gap-4 mt-6">
            <button 
              onClick={() => setCurrentPage('marketplace')}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-lg text-xs shadow-[0_4px_15px_rgba(59,130,246,0.15)] transition-all hover:scale-102"
            >
              Explore Trading Ledger
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-5 py-2.5 border border-slate-200 bg-slate-50 text-slate-750 hover:text-slate-900 rounded-lg text-xs transition-all"
            >
              Request Whitepaper
            </button>
          </div>
        </div>

        {/* Circular graphic */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 opacity-15 blur-lg" />
          <div className="relative rounded-xl border border-blue-500/10 bg-white p-6 flex flex-col gap-4 shadow-xl border border-slate-100">
            {[
              { title: 'BRSR Compliance Ready', desc: 'Outputs standard environmental formats required for Indian corporate ESG reporting.', icon: ShieldCheck },
              { title: 'AI Match-matching Efficiency', desc: 'Predictive neural matching processes geographic indices to optimize trade margins.', icon: Cpu },
              { title: 'Secure Auditable Ledgers', desc: 'Each transaction generates verified, immutable recycling logs to prevent greenwashing audits.', icon: CheckCircle2 }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="h-9 w-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-200">
                  <item.icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                  <p className="text-[11px] text-slate-550 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TECH ARCHITECTURE SECTION */}
      <div className="text-center mb-10">
        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Engineering</h2>
        <p className="mt-2 text-2xl font-extrabold text-slate-900">EcoLoop Neural Platform Stack</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Neural Purity Auditing',
            desc: 'Multi-layer models categorize lot purity, estimating metal/alloy moisture ratios from image feeds and lab reports.',
            role: 'Grade Indexer'
          },
          {
            title: 'Logistics Carbon Routing',
            desc: 'Dynamic geo-coordinate optimization matches regional producers with nearest processors, keeping shipping carbon negative.',
            role: 'Route Optimizers'
          },
          {
            title: 'ESG Ledger Validation',
            desc: 'Maintains transaction ledger tracking offsets, scope 3 savings, and generates auditable certificates.',
            role: 'Verification Chain'
          }
        ].map((tech, idx) => (
          <GlowCard key={idx} className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest font-mono bg-blue-50 px-2 py-0.5 rounded self-start border border-blue-200">
              {tech.role}
            </span>
            <h3 className="text-base font-bold text-slate-900 mt-1">{tech.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">{tech.desc}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};
