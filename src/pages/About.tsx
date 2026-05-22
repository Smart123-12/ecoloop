import React from 'react';
import { Leaf, Award, Recycle, ShieldCheck, Compass, HelpCircle, Cpu, CheckCircle2, Coins, Truck, Landmark, BarChart3 } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  return (
    <div className="relative z-10 pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background glowing gradients */}
      <div className="absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />

      {/* Page Title */}
      <div className="text-left mb-12">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="h-5 w-5 text-teal-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Our Identity</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About EcoLoop Technology
        </h1>
        <p className="text-sm text-slate-600 mt-2">
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
              className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold rounded-lg text-xs shadow-[0_4px_15px_rgba(20,184,166,0.15)] transition-all hover:scale-102"
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
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-teal-500 to-teal-500 opacity-15 blur-lg" />
          <div className="relative rounded-xl border border-teal-500/10 bg-white p-6 flex flex-col gap-4 shadow-xl border border-slate-100">
            {[
              { title: 'BRSR Compliance Ready', desc: 'Outputs standard environmental formats required for Indian corporate ESG reporting.', icon: ShieldCheck },
              { title: 'AI Match-matching Efficiency', desc: 'Predictive neural matching processes geographic indices to optimize trade margins.', icon: Cpu },
              { title: 'Secure Auditable Ledgers', desc: 'Each transaction generates verified, immutable recycling logs to prevent greenwashing audits.', icon: CheckCircle2 }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="h-9 w-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0 border border-teal-200">
                  <item.icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* B2B VALUE ARCHITECTURE SECTION */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600">Strategic Framework</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900">B2B Industrial Circular Architecture</p>
          <p className="text-xs text-slate-500 mt-2 max-w-2xl mx-auto">
            Disrupting scattered WhatsApp brokers and opaque scrap dealers to bring compliance, transparency, and commercial efficiency to small factories and enterprise recyclers.
          </p>
        </div>

        {/* DOUBLE COLUMN: MANUFACTURERS vs RECYCLERS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* MANUFACTURERS PANEL */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(148,163,184,0.03)] text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500" />
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
              <span className="text-xl">🏭</span> Manufacturers (Waste Generators)
            </h3>
            <p className="text-xs text-slate-500 mb-6">Overcoming waste monetization friction and compliance headaches for factories.</p>

            <div className="space-y-4">
              {[
                { problem: "Waste dispose કરવાનું headache", sol: "Automated direct recycler dispatch loops.", desc: "Eliminates operational stress by matching certified haulers and processors instantly." },
                { problem: "WhatsApp/Group brokers dependence", sol: "Transparent, real-time B2B matching engine.", desc: "Brings pure market rates and direct qualified buyer discovery without middleman commissions." },
                { problem: "Low recovery rates from local scrap dealers", sol: "Value-indexed secondary bids.", desc: "Secures fair pricing aligned with global secondary raw material price indexes." },
                { problem: "Compliance & Scope 3 audit trails", sol: "Immutable BRSR compliance logs.", desc: "Provides verified digital records for ESG audits, pollution control certificates, and end-to-end tracking." },
                { problem: "Fragmented pickup coordination", sol: "GreenTruck automated logistics routing.", desc: "Routes optimized trucks to your warehouse location for scheduled, verified pickups." }
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-orange-50/30 border border-orange-100 flex gap-3 text-xs">
                  <div className="text-orange-500 font-bold shrink-0 mt-0.5 font-mono">0{idx + 1}</div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-slate-500 line-through text-[11px]">{item.problem}</span>
                      <span className="text-teal-700 font-bold">➔ {item.sol}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RECYCLERS PANEL */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(148,163,184,0.03)] text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500" />
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
              <span className="text-xl">♻️</span> Certified Recyclers & Buyers
            </h3>
            <p className="text-xs text-slate-500 mb-6">Securing consistent, verified secondary raw materials at scale.</p>

            <div className="space-y-4">
              {[
                { problem: "Inconsistent and fluctuating waste supply", sol: "Continuous localized byproduct lot feed.", desc: "Aggregates regional manufacturer scrap listings into a steady, predictable supply stream." },
                { problem: "Uncertain material quality & purity grades", sol: "Pre-verified lab sorting & certification.", desc: "Audits moisture content, alloy grades, and plastic purity ratings before transactions close." },
                { problem: "Scattered small suppliers & unorganized brokers", sol: "Unified regional supply aggregator.", desc: "Bypasses high search costs by pooling small factory waste listings into geographic search hubs." },
                { problem: "Costly & inefficient sourcing channels", sol: "Direct digital RFPs & bids bidding.", desc: "Allows recyclers to place precise bid specifications directly to nearby industrial waste generators." },
                { problem: "Logistical friction in bulk coordination", sol: "Integrated secondary transit logs.", desc: "Matches loads with secondary logistics networks, cutting transport cost by up to 35%." }
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-teal-50/30 border border-teal-100/50 flex gap-3 text-xs">
                  <div className="text-teal-600 font-bold shrink-0 mt-0.5 font-mono">0{idx + 1}</div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-slate-500 line-through text-[11px]">{item.problem}</span>
                      <span className="text-teal-700 font-bold">➔ {item.sol}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION: COMMERCIAL BUSINESS MODEL & REVENUE STREAMS */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_25_rgba(148,163,184,0.03)] text-left mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Coins className="h-5 w-5 text-teal-600" />
            <h3 className="text-base font-bold text-slate-900">Commercial Architecture & Revenue Model</h3>
          </div>
          <p className="text-xs text-slate-500 mb-6">A sustainable B2B monetization stack designed to scale circular economics across industrial clusters.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
            {[
              {
                title: "1. Transaction Commission",
                desc: "3%–8% Commission Fee",
                detail: "Levied per verified waste exchange transaction between manufacturers and certified recyclers.",
                icon: Coins,
                bg: "bg-teal-50 text-teal-600 border-teal-200"
              },
              {
                title: "2. Recycler Subscriptions",
                desc: "Enterprise Priority Licenses",
                detail: "Premium subscription model giving recyclers real-time local leads, localized alerts, and priority bidding access.",
                icon: Landmark,
                bg: "bg-teal-50 text-teal-600 border-teal-200"
              },
              {
                title: "3. Logistics Pickup Margin",
                desc: "GreenTruck Freight Margins",
                detail: "Arranging and optimizing automated pickup logistics schedules to capture consistent freight margins.",
                icon: Truck,
                bg: "bg-teal-50 text-teal-600 border-teal-200"
              },
              {
                title: "4. Quality Auditing Services",
                desc: "Sorting & Grade Certification",
                detail: "Charges for independent moisture testing, lab purity assays, and high-fidelity sorting certifications.",
                icon: ShieldCheck,
                bg: "bg-teal-50 text-teal-600 border-teal-200"
              }
            ].map((stream, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-teal-500/20 transition-all flex flex-col gap-3">
                <div className={`h-9 w-9 rounded-full ${stream.bg} flex items-center justify-center border shrink-0`}>
                  <stream.icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800">{stream.title}</h4>
                  <p className="text-[10px] text-teal-700 font-bold uppercase tracking-wider font-mono mt-0.5">{stream.desc}</p>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed font-normal">{stream.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: PLATFORM SCOPE & TARGET METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* WASTE CATEGORIES */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>📋</span> High-Volume B2B Waste Streams
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { name: "Plastic Scrap", type: "PET, PP, HDPE, Nylon Flakes" },
                { name: "Textile Waste", type: "Yarn Comber, Spandex, Cotton Scrap" },
                { name: "Metal Scrap", type: "Alloy turnings, Copper scraps" },
                { name: "Rubber Waste", type: "Vulcanized, Shredded tire crumbs" },
                { name: "E-Waste", type: "PCB Lots, Cable scraps, Lead" },
                { name: "Paper Waste", type: "Corrugated layers, Kraft pulps" },
                { name: "Chemical Drums", type: "IBC Totes, Steel drums, plastic containers" },
                { name: "CNC Metal Shavings", type: "Brass cuttings, aluminum filings" },
                { name: "Fabric Cuttings", type: "Knit mill surplus, synthetic scraps" },
                { name: "Packaging Waste", type: "LDPE stretch films, pallets" },
                { name: "Food Processing Waste", type: "Dehydrated pulps, yeast cake" }
              ].map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg border border-slate-150 bg-slate-50 text-[11px]">
                  <p className="font-extrabold text-slate-800">{cat.name}</p>
                  <p className="text-[9px] text-slate-400 font-mono mt-0.5">{cat.type}</p>
                </div>
              ))}
            </div>
          </div>

          {/* KEY PERFORMANCE INDICATORS */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="text-teal-600"><BarChart3 className="h-4 w-4" /></span> Ecosystem Target KPIs
            </h4>
            <div className="space-y-4">
              {[
                { name: "Active Small Factories / Manufacturers", value: "2,400+ Units", desc: "Factories actively listing byproducts and trading monthly." },
                { name: "Verified Recycling Partners", value: "350+ Buyers", desc: "Recycling businesses bidding and securing supply." },
                { name: "Gross Transaction Value (GTV)", value: "₹45.2 Crore", desc: "Annualized value traded on EcoLoop network." },
                { name: "Logistics Completion Index", value: "99.4%", desc: "GreenTruck loads routed and delivered with zero delays." },
                { name: "Repeat B2B Trades / Retain Index", value: "88%", desc: "Trading frequency of manufacturers within 90 days." }
              ].map((kpi, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-800">{kpi.name}</span>
                    <span className="text-teal-600 font-black font-mono shrink-0 ml-2">{kpi.value}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">{kpi.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TECH ARCHITECTURE SECTION */}
      <div className="text-center mb-10">
        <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600">Engineering</h2>
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
            <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest font-mono bg-teal-50 px-2 py-0.5 rounded self-start border border-teal-200">
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
