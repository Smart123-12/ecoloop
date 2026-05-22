import React, { useState, useEffect } from 'react';
import { ArrowRight, Recycle, ShieldCheck, Cpu, BarChart3, Users, Leaf, ArrowUpRight, Flame, Scale, Globe } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  // Draggable Price Estimator states
  const [wasteType, setWasteType] = useState('metal');
  const [quantity, setQuantity] = useState(15); // Tons
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [carbonSaved, setCarbonSaved] = useState(0);

  // Price & Carbon calculator
  useEffect(() => {
    const baseRates: Record<string, { price: number; carbon: number }> = {
      metal: { price: 32000, carbon: 1.8 },
      plastic: { price: 18000, carbon: 2.1 },
      textile: { price: 12000, carbon: 1.6 },
      wood: { price: 8000, carbon: 0.9 },
      food: { price: 5000, carbon: 0.5 },
      byproducts: { price: 24000, carbon: 1.4 },
    };

    const rate = baseRates[wasteType] || { price: 10000, carbon: 1.0 };
    setEstimatedPrice(quantity * rate.price);
    setCarbonSaved(quantity * rate.carbon);
  }, [wasteType, quantity]);

  return (
    <div className="relative z-10 pt-16">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* SECTION 1 - HERO */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-950/40 px-3 py-1 text-xs sm:text-sm font-semibold text-emerald-400 backdrop-blur shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>National Circular Infrastructure Platform</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              India's Smart <br />
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent text-glow-green">
                Industrial Waste Exchange
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Connect factories, verified recyclers, and raw material manufacturers through an AI-powered circular network. Trade byproducts, audit ESG compliance, and recover value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button 
                onClick={() => setCurrentPage('marketplace')}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-dark-900 font-bold rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all hover:scale-102"
              >
                Explore Marketplace
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="px-6 py-3.5 border border-slate-700 hover:border-emerald-500/40 bg-dark-800/40 hover:bg-dark-800/80 text-white font-semibold rounded-xl transition-all"
              >
                Book B2B Demo
              </button>
            </div>
          </div>

          {/* Hero Animated Widget Visual */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-400 opacity-20 blur-lg" />
            <div className="relative glass-panel rounded-2xl border border-emerald-500/20 p-6 shadow-2xl">
              
              {/* Card Header Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 overflow-hidden">
                <div className="w-full h-full shimmer" />
              </div>

              <div className="flex items-center justify-between border-b border-emerald-500/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">AI Waste Matchmaker</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">ID: 894E-LOOP</span>
              </div>

              {/* Glowing Interactive Visual */}
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-slate-900/60 p-3.5 border border-emerald-500/5">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-xs">
                      FAC
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-400 font-medium">Producer Unit</p>
                      <p className="text-sm font-semibold text-white">Tata Steel Mill B</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                    Grade A Slag
                  </span>
                </div>

                <div className="flex justify-center my-2 relative">
                  <div className="h-8 w-0.5 bg-gradient-to-b from-emerald-500/30 to-cyan-500/30 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-dark-900 text-[10px] font-bold text-cyan-400 tracking-wider">
                    AI OPTIMIZED
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-900/60 p-3.5 border border-cyan-500/5">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-xs">
                      REC
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-400 font-medium">Green Processor</p>
                      <p className="text-sm font-semibold text-white">EcoMetal Recyclers</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                    Sintering Unit
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-emerald-500/10 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Match score: <strong className="text-white">98.2%</strong></span>
                  <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                    <Leaf className="h-3 w-3" /> -12.4 Tons CO₂
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - STATS */}
      <section className="py-12 bg-dark-950 border-y border-emerald-500/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '842,500+', label: 'Total Waste Processed (Tons)', icon: Recycle },
              { value: '1,240+', label: 'Active Certified Recyclers', icon: Users },
              { value: '86%', label: 'Average Recycling Efficiency', icon: BarChart3 },
              { value: '429,800+', label: 'Carbon Emissions Saved (Tons)', icon: Leaf },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1 relative">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2 border border-emerald-500/10">
                  <stat.icon className="h-4.5 w-4.5" />
                </div>
                <span className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</span>
                <span className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - HOW IT WORKS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">EcoLoop Pipeline</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Seamless B2B Circular Workflows
          </p>
          <p className="mt-4 text-base text-slate-400">
            A three-step optimized loop that transforms liabilities into profit margins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {[
            {
              step: '01',
              title: 'Industries List Waste',
              desc: 'Upload material parameters, moisture levels, grades, and location with photos. The EcoLoop AI system tags specifications automatically.',
              color: 'green'
            },
            {
              step: '02',
              title: 'AI Matchmaking Engine',
              desc: 'EcoLoop algorithm matches listings with certified recyclers and industrial buyers based on distance, material flow capacity, and pricing metrics.',
              color: 'cyan'
            },
            {
              step: '03',
              title: 'Circular Value Unleashed',
              desc: 'Secure B2B transaction execution, automatic carbon-offset certificates distribution, logistics dispatching, and digital ESG dashboard reports.',
              color: 'lime'
            }
          ].map((item, i) => (
            <GlowCard key={i} glowColor={item.color as any} className="flex flex-col gap-4 text-left relative">
              <span className="text-5xl font-black text-slate-800 font-mono tracking-tighter select-none">{item.step}</span>
              <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* SECTION 4 - WASTE CATEGORIES */}
      <section className="py-20 bg-dark-950/70 border-t border-emerald-500/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="text-left">
              <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Industrial Streams</h2>
              <p className="mt-3 text-3xl font-extrabold text-white">Supported Waste Streams</p>
            </div>
            <button 
              onClick={() => setCurrentPage('marketplace')}
              className="flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
            >
              Browse all categories
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-5">
            {[
              { name: 'Metal Scrap', count: '142 listings', desc: 'Copper, Steel slag, Aluminum', icon: '🔩' },
              { name: 'Plastic Waste', count: '312 listings', desc: 'HDPE, PET pellets, PP raw', icon: '♻️' },
              { name: 'Textile Waste', count: '98 listings', desc: 'Cotton mill waste, Synthetic', icon: '🧵' },
              { name: 'Wood Waste', count: '64 listings', desc: 'Slabs, sawdust, scrap packaging', icon: '🪵' },
              { name: 'Food Waste', count: '124 listings', desc: 'Organic byproducts, pulps', icon: '🍎' },
              { name: 'Industrial Byproducts', count: '189 listings', desc: 'Fly ash, gypsum, chemical sludge', icon: '🧪' },
            ].map((cat, i) => (
              <div 
                key={i} 
                onClick={() => setCurrentPage('marketplace')}
                className="cursor-pointer group flex flex-col p-5 bg-dark-800/40 hover:bg-dark-800/80 rounded-xl border border-emerald-500/5 hover:border-emerald-500/25 transition-all text-left"
              >
                <span className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">{cat.icon}</span>
                <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{cat.name}</h4>
                <p className="text-[11px] text-emerald-500 font-mono mt-1">{cat.count}</p>
                <p className="text-[11px] text-slate-500 leading-tight mt-2">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - AI FEATURES / WIDGET ESTIMATOR */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Calculator Tool Column */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-20 blur-xl" />
            <div className="relative glass-panel rounded-2xl border border-emerald-500/20 p-8 shadow-2xl text-left">
              <div className="border-b border-emerald-500/10 pb-4 mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-emerald-400" />
                  EcoLoop AI Value Calculator
                </h3>
                <p className="text-xs text-slate-400 mt-1">Estimate pricing and carbon footprint offsets instantly.</p>
              </div>

              <div className="space-y-6">
                {/* Waste Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Select Material Stream</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'metal', label: '🔩 Metal' },
                      { id: 'plastic', label: '♻️ Plastic' },
                      { id: 'textile', label: '🧵 Textile' },
                      { id: 'wood', label: '🪵 Wood' },
                      { id: 'food', label: '🍎 Organic' },
                      { id: 'byproducts', label: '🧪 Byproducts' }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setWasteType(btn.id)}
                        className={`py-2 rounded-lg text-xs font-medium border transition-all ${
                          wasteType === btn.id 
                            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400' 
                            : 'border-slate-800 bg-slate-900/40 hover:bg-slate-900 text-slate-300'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Lot Volume</label>
                    <span className="text-sm font-mono font-bold text-emerald-400">{quantity} Tons</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>1 Ton</span>
                    <span>50 Tons</span>
                    <span>100 Tons</span>
                  </div>
                </div>

                {/* Simulated Output Calculations */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-emerald-500/5">
                    <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Estimated Value</p>
                    <p className="text-xl font-black text-white mt-1">₹{estimatedPrice.toLocaleString('en-IN')}</p>
                    <p className="text-[10px] text-emerald-500 font-mono mt-0.5">B2B Est. Rate</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/5">
                    <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">CO₂ Savings</p>
                    <p className="text-xl font-black text-cyan-400 mt-1 flex items-center gap-1">
                      <Leaf className="h-4.5 w-4.5 shrink-0" />
                      {carbonSaved.toFixed(1)} T
                    </p>
                    <p className="text-[10px] text-cyan-500 font-mono mt-0.5">Carbon Credits Eq.</p>
                  </div>
                </div>

                <button 
                  onClick={() => setCurrentPage('marketplace')}
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-dark-900 font-bold rounded-lg text-sm transition-all hover:opacity-90 active:scale-98 flex items-center justify-center gap-1.5"
                >
                  List This Material Stream Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* AI Features Descriptions */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Enterprise Tech</h2>
            <p className="text-3xl font-extrabold text-white tracking-tight leading-tight">
              AI-Powered Circular Tech Stack
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              We leverage advanced deep learning networks to classify industrial byproducts, forecast regional price indexations, and resolve circular matches.
            </p>

            <div className="space-y-4 mt-2">
              {[
                { title: 'Predictive Price Estimations', desc: 'Predict spot prices based on historical B2B commodity indices and localized refinery capacities.', icon: Cpu },
                { title: 'Automated Chemical Classification', desc: 'EcoLoop AI analyzes moisture, heavy metal residue, and purity percentages to assign industrial grades.', icon: ShieldCheck },
                { title: 'Dynamic Logistics Routing', desc: 'Matches localized factories with regional processors to minimize transport emissions & carbon credit losses.', icon: BarChart3 }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-emerald-500/5 bg-dark-800/30">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/10">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - SUSTAINABILITY OVERVIEW */}
      <section className="py-20 bg-dark-950/70 border-t border-emerald-500/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left flex flex-col gap-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">ESG & Auditing</h2>
              <p className="text-3xl font-extrabold text-white">Verifiable Carbon Neutrality Pathways</p>
              <p className="text-sm text-slate-350 leading-relaxed">
                Industrial sustainability is no longer a marketing statement—it is a metric of regulatory compliance. EcoLoop's ESG Suite integrates directly with global standard boards.
              </p>
              <ul className="space-y-3.5 text-xs text-slate-400 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  BRSR Core aligned reports for Indian regulatory boards
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Automatic generation of Carbon Offset certificates via Verified Standards
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Real-time blockchain ledger matching to prevent double-claiming of recycling points
                </li>
              </ul>
              <button 
                onClick={() => setCurrentPage('dashboard')}
                className="group flex items-center gap-1.5 text-sm font-bold text-emerald-400 hover:text-emerald-300"
              >
                Access Live ESG Demo Dashboard
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            {/* UI Dashboard Showcase Mockup */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-15 blur-lg" />
              <div className="relative rounded-xl border border-emerald-500/10 bg-slate-950 p-6 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500">Corporate Analytics</span>
                    <h4 className="text-sm font-extrabold text-slate-200">ESG Impact Scorecard</h4>
                  </div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">
                    Grade AA+
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Gauge */}
                  <div className="flex justify-between items-center p-3 rounded-lg bg-dark-900 border border-emerald-500/5">
                    <span className="text-xs text-slate-400">Total Recycled Flow</span>
                    <span className="text-xs font-mono font-bold text-white">418.5 Tons</span>
                  </div>
                  {/* Scope 3 reductions slider mockup */}
                  <div className="p-3.5 rounded-lg bg-dark-900 border border-cyan-500/5">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Scope 3 Emission Reductions</span>
                      <span className="text-cyan-400 font-bold font-mono">-38.2%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full" style={{ width: '74%' }} />
                    </div>
                  </div>
                  {/* Interactive details */}
                  <div className="grid grid-cols-2 gap-3 text-xs text-left">
                    <div className="p-3 rounded-lg bg-dark-900">
                      <p className="text-slate-500">Landfill Diverted</p>
                      <p className="text-sm font-bold text-white mt-1">94.8%</p>
                    </div>
                    <div className="p-3 rounded-lg bg-dark-900">
                      <p className="text-slate-500">Logistics Carbon Eq.</p>
                      <p className="text-sm font-bold text-white mt-1">3.4 Tons</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - TESTIMONIALS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Enterprise Trust</h2>
          <p className="mt-3 text-3xl font-extrabold text-white">What Circular Leaders Say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "EcoLoop has revolutionized how we handle smelting byproducts. Rather than paying to transport slag, we now generate an annual return while automating our BRSR environmental reports.",
              author: "Rajesh Singhal",
              role: "Head of Sustainability, Singhal Metallics",
              avatar: "👤"
            },
            {
              quote: "The AI matching engine identified three plastic processing units within a 50km radius that we didn't know existed. Our logistics emissions dropped by 42% in the first quarter.",
              author: "Nisha Padmavyan",
              role: "Operations Director, Padma Textile Mills",
              avatar: "👤"
            },
            {
              quote: "As an industrial waste recycler, obtaining highly purified PP lots was a challenge. EcoLoop provides digital grading and blockchain verification, eliminating purity issues entirely.",
              author: "Dr. Amit Varma",
              role: "Founder, GreenCycle Industries",
              avatar: "👤"
            }
          ].map((item, idx) => (
            <GlowCard key={idx} className="flex flex-col justify-between text-left h-full">
              <p className="text-sm text-slate-300 italic leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-3 mt-6 border-t border-emerald-500/10 pt-4">
                <div className="h-9 w-9 rounded-full bg-emerald-500/10 flex items-center justify-center text-lg">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.author}</h4>
                  <p className="text-[11px] text-slate-400">{item.role}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* SECTION 8 - PRICING PREVIEW */}
      <section className="py-20 bg-dark-950 border-t border-emerald-500/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">B2B Plans</h2>
            <p className="mt-3 text-3xl font-extrabold text-white">Flexible Corporate Licensing</p>
          </div>
          <button 
            onClick={() => setCurrentPage('pricing')}
            className="px-6 py-3.5 bg-slate-900 border border-slate-700 hover:border-emerald-500/40 text-sm font-bold text-white rounded-xl transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)]"
          >
            Review Premium Pricing Schemes & Features
          </button>
        </div>
      </section>
    </div>
  );
};
