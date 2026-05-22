import React, { useState, useEffect } from 'react';
import { ArrowRight, Recycle, ShieldCheck, Cpu, BarChart3, Users, Leaf, ArrowUpRight, Flame, Scale, Globe, Search, Truck, MapPin, AlertTriangle, CheckCircle2 } from 'lucide-react';
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

  // Surplus waste matcher states
  const [surplusMaterial, setSurplusMaterial] = useState('plastic');
  const [surplusVolume, setSurplusVolume] = useState('');
  const [surplusCity, setSurplusCity] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanCompleted, setScanCompleted] = useState(false);
  const [matchedRecyclers, setMatchedRecyclers] = useState<any[]>([]);
  const [dispatchStatus, setDispatchStatus] = useState<string | null>(null);
  const [dispatchingId, setDispatchingId] = useState<string | null>(null);

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

  const handleScanRecyclers = (e: React.FormEvent) => {
    e.preventDefault();
    if (!surplusVolume || !surplusCity) return;
    
    setIsScanning(true);
    setScanCompleted(false);
    setDispatchStatus(null);
    
    setTimeout(() => {
      setIsScanning(false);
      setScanCompleted(true);
      
      const db: Record<string, Array<{ id: string; name: string; distance: string; rate: string; demand: string; location: string }>> = {
        metal: [
          { id: 'REC-M1', name: 'Gujarat Metallurgical Corp', distance: '12 km', rate: '₹34,000/Ton', demand: 'High Demand', location: surplusCity },
          { id: 'REC-M2', name: 'Daman Alloys & Refining', distance: '28 km', rate: '₹32,500/Ton', demand: 'Steady Demand', location: 'Daman' }
        ],
        plastic: [
          { id: 'REC-P1', name: 'Vapi PET Reclamation Hub', distance: '8 km', rate: '₹19,200/Ton', demand: 'Urgently Buying', location: surplusCity },
          { id: 'REC-P2', name: 'Surat Polymer Synthetics', distance: '45 km', rate: '₹18,500/Ton', demand: 'Bulk Demand', location: 'Surat' }
        ],
        textile: [
          { id: 'REC-T1', name: 'Surat Synthetic Fiber Mills', distance: '14 km', rate: '₹12,800/Ton', demand: 'Steady Demand', location: surplusCity },
          { id: 'REC-T2', name: 'Coimbatore Secondary Yarn Co', distance: '950 km', rate: '₹14,000/Ton', demand: 'High Volume', location: 'Coimbatore' }
        ],
        wood: [
          { id: 'REC-W1', name: 'Vapi Biomass Fuels', distance: '6 km', rate: '₹8,500/Ton', demand: 'Steady Demand', location: surplusCity },
          { id: 'REC-W2', name: 'GIDC Wood Pellets Ltd', distance: '19 km', rate: '₹7,800/Ton', demand: 'Low Moisture only', location: 'Valsad' }
        ],
        food: [
          { id: 'REC-O1', name: 'Surat Bio-Compost Refinery', distance: '22 km', rate: '₹5,400/Ton', demand: 'Urgently Buying', location: surplusCity },
          { id: 'REC-O2', name: 'GreenEnergy Organic Digesters', distance: '34 km', rate: '₹4,900/Ton', demand: 'Steady Demand', location: 'Navsari' }
        ],
        byproducts: [
          { id: 'REC-B1', name: 'Eastern Cement Grinding Unit', distance: '15 km', rate: 'Custom Quote', demand: 'High slag/fly ash need', location: surplusCity },
          { id: 'REC-B2', name: 'Surat Acid Neutralization', distance: '40 km', rate: 'Custom RFP', demand: 'Chemical byproduct spec', location: 'Surat' }
        ]
      };
      
      setMatchedRecyclers(db[surplusMaterial] || []);
    }, 1500);
  };

  const handleDirectDispatch = (recyclerId: string, recyclerName: string) => {
    setDispatchingId(recyclerId);
    setTimeout(() => {
      setDispatchStatus(`✅ Dispatch locked! GreenTruck #48 dispatched from Surat center to your facility in ${surplusCity}. Matched with ${recyclerName} for bulk recycling. Verified Recycling Business has been notified and logistics routing is active.`);
      setDispatchingId(null);
    }, 1200);
  };

  return (
    <div className="relative z-10 pt-16">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 h-[400px] w-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* SECTION 1 - HERO */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-teal-500/20 bg-teal-50 px-3 py-1 text-xs sm:text-sm font-semibold text-teal-600 backdrop-blur shadow-[0_2px_10px_rgba(20,184,166,0.04)]">
              <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-ping" />
              <span>National Circular Infrastructure Platform</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              India's Smart <br />
              <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-500 bg-clip-text text-transparent text-glow-cyan">
                Industrial Waste Exchange
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Connect factories, verified recyclers, and raw material manufacturers through an AI-powered circular network. Trade byproducts, audit ESG compliance, and recover value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button 
                onClick={() => setCurrentPage('marketplace')}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold rounded-xl shadow-[0_4px_15px_rgba(20,184,166,0.15)] transition-all hover:scale-102"
              >
                Explore Marketplace
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="px-6 py-3.5 border border-slate-200 hover:border-teal-500/30 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl transition-all"
              >
                Book B2B Demo
              </button>
            </div>
          </div>

          {/* Hero Animated Widget Visual */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-teal-500 to-teal-400 opacity-15 blur-lg" />
            <div className="relative glass-panel rounded-2xl border border-emerald-500/20 p-6 shadow-2xl">
              
              {/* Card Header Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-teal-500/20 to-teal-400/20 overflow-hidden">
                <div className="w-full h-full shimmer" />
              </div>

              <div className="flex items-center justify-between border-b border-teal-500/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">AI Waste Matchmaker</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">ID: 894E-LOOP</span>
              </div>

              {/* Glowing Interactive Visual */}
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3.5 border border-teal-500/5">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 font-bold text-xs">
                      FAC
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-500 font-medium">Producer Unit</p>
                      <p className="text-sm font-semibold text-slate-900">Tata Steel Mill B</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-teal-600 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-500/20">
                    Grade A Slag
                  </span>
                </div>

                <div className="flex justify-center my-2 relative">
                  <div className="h-8 w-0.5 bg-gradient-to-b from-teal-500/20 to-teal-400/20 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-teal-400 animate-ping" />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-slate-100/50 text-[10px] font-bold text-teal-600 tracking-wider">
                    AI OPTIMIZED
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3.5 border border-teal-500/5">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 font-bold text-xs">
                      REC
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-500 font-medium">Green Processor</p>
                      <p className="text-sm font-semibold text-slate-900">EcoMetal Recyclers</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-teal-600 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-500/20">
                    Sintering Unit
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-emerald-500/10 flex justify-between items-center text-xs">
                  <span className="text-slate-500">Match score: <strong className="text-slate-900">98.2%</strong></span>
                  <span className="text-teal-600 font-mono font-semibold flex items-center gap-1">
                    <Leaf className="h-3 w-3" /> -12.4 Tons CO₂
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - STATS */}
      <section className="py-12 bg-slate-50 border-y border-teal-500/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '842,500+', label: 'Total Waste Processed (Tons)', icon: Recycle },
              { value: '1,240+', label: 'Active Certified Recyclers', icon: Users },
              { value: '86%', label: 'Average Recycling Efficiency', icon: BarChart3 },
              { value: '429,800+', label: 'Carbon Emissions Saved (Tons)', icon: Leaf },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1 relative">
                <div className="h-8 w-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 mb-2 border border-teal-500/10">
                  <stat.icon className="h-4.5 w-4.5" />
                </div>
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</span>
                <span className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - HOW IT WORKS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600">EcoLoop Pipeline</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Seamless B2B Circular Workflows
          </p>
          <p className="mt-4 text-base text-slate-600">
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
              <span className="text-5xl font-black text-teal-100/60 font-mono tracking-tighter select-none">{item.step}</span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* SECTION 3B - INDUSTRIAL CIRCULAR OPPORTUNITY & CHALLENGES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-slate-200">
        <div className="absolute top-10 right-10 h-[300px] w-[300px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-600 backdrop-blur mb-4">
            <Globe className="h-3.5 w-3.5 animate-pulse" />
            <span>Industrial Reality & B2B Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            The Real B2B Waste Exchange Opportunity
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Disrupting scattered WhatsApp brokers and unorganized scrap dealers to bring structured pricing, end-to-end compliance, and direct regional recycling routing.
          </p>
        </div>

        {/* TOP HIGHLIGHT: THE REAL OPPORTUNITY (SMALL FACTORIES) */}
        <div className="relative mb-16 text-left">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-teal-500 to-teal-500 opacity-10 blur-lg" />
          <div className="relative p-6 sm:p-8 rounded-2xl bg-white border border-teal-500/10 shadow-[0_4px_25px_rgba(148,163,184,0.03)] text-left flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/3 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">💡</span>
                <h3 className="text-lg font-black text-slate-900">
                  Real Opportunity ક્યાં છે? <span className="text-teal-600">Small Factories & Small Scale Units</span>
                </h3>
              </div>
              <p className="text-sm text-slate-650 leading-relaxed">
                Most small-to-medium factories and engineering units <strong>do not systematically monetize</strong> their industrial waste. Instead, they depend entirely on local WhatsApp groups, unverified brokers, and unorganized scrap dealers. 
              </p>
              <p className="text-sm text-slate-550 leading-relaxed">
                This reliance creates a highly opaque market with low recovery rates, poor tracking, and compliance stress. By introducing a direct digital B2B marketplace, EcoLoop brings <strong>transparency, verified grade matching, and automated logistics</strong> directly to their factory gates.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {['Direct Monetization', 'WhatsApp Broker Disruption', 'Opaque-to-Transparent', 'KYC Verified Buyers'].map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-bold tracking-wider uppercase font-mono px-2.5 py-1 rounded bg-teal-50 border border-teal-200 text-teal-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 w-full p-6 rounded-xl bg-slate-50 border border-slate-200 text-center shrink-0">
              <div className="text-3xl font-black text-slate-900">3%–8%</div>
              <div className="text-xs font-bold text-teal-600 uppercase tracking-widest font-mono mt-1">Transaction Commission</div>
              <div className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                Capturing steady margins on every verified circular transaction while managing structured, high-margin hauler routes.
              </div>
            </div>
          </div>
        </div>

        {/* SIDE-BY-SIDE CHALLENGES CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">
          {/* MANUFACTURERS PANEL */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-450 font-mono block">SUPPLY SIDE INEFFICIENCIES</span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                    <span>🏭</span> Manufacturers' Disposal Headaches
                  </h3>
                </div>
                <span className="text-[10px] bg-amber-50 text-amber-600 border border-amber-200 px-2 py-0.5 rounded font-bold font-mono">
                  Disposal Stress
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Valuable byproducts and scrap materials are sold cheaply or disposed of as liabilities due to fragmented marketing.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Waste Dispose કરવાનું Headache', desc: 'Disposing of large material lots occupies precious warehouse yards and creates high operational and administrative stress.' },
                  { title: 'Proper Buyer નથી મળતા (No Verified Discoveries)', desc: 'Difficult to locate compliant, high-volume secondary processors nearby, leading to cheap sales to scrap dealers.' },
                  { title: 'Low Rates મળે (Opaque Undervalued Pricing)', desc: 'Forced to accept cheap, flat rates from localized brokers who leverage information asymmetry to capture all the profits.' },
                  { title: 'Compliance & Regulatory Issues', desc: 'Failing to track waste end-to-end results in strict environmental audits, regulatory risks, and zero Scope 3 ESG data points.' },
                  { title: 'Pickup Coordination Problems', desc: 'Manual truck scheduling, loading errors, and high transport hauler rates make transport logistics an operational nightmare.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-xs bg-slate-50 border border-slate-205 p-3.5 rounded-xl">
                    <div className="h-5 w-5 rounded-full bg-amber-50 border border-amber-200 text-amber-650 flex items-center justify-center font-bold text-[10px] shrink-0 font-mono">
                      !
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-800">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setCurrentPage('listings')}
              className="w-full mt-6 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 hover:border-amber-300 text-xs font-bold rounded-xl transition-all text-center flex items-center justify-center gap-1 shadow-sm"
            >
              List Factory Waste Lots Now
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* RECYCLERS PANEL */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-600" />
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-455 font-mono block">DEMAND SIDE FRAGMENTATION</span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                    <span>♻️</span> Recyclers' Sourcing Inefficiencies
                  </h3>
                </div>
                <span className="text-[10px] bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded font-bold font-mono">
                  Sourcing Barriers
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Recycling processors struggle to secure a stable supply of raw waste inputs, causing high operational downtime.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Consistent Material મળતું નથી (Supply Shortage)', desc: 'Operations suffer from continuous production interruptions because secondary raw material inputs arrive in highly irregular volumes.' },
                  { title: 'Quality Unknown (Grade Uncertainty)', desc: 'No chemical assay sheets or pre-inspected grade certifications, resulting in contaminated or unusable batches.' },
                  { title: 'Small Suppliers Scattered (Procurement Costly)', desc: 'Sourcing requires coordinating with hundreds of tiny, unverified GIDC/workshop plants, inflating search and processing overheads.' },
                  { title: 'Procurement Costly પડે (High Middlemen Fees)', desc: 'Multiple brokerage layers and long-distance transport routes inflate secondary feedstock procurement costs excessively.' },
                  { title: 'Logistics Coordination Gaps', desc: 'No centralized bulk freight arrangement, raising logistics costs and increasing transit carbon footprints by up to 40%.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-xs bg-slate-50 border border-slate-205 p-3.5 rounded-xl">
                    <div className="h-5 w-5 rounded-full bg-teal-50 border border-teal-200 text-teal-650 flex items-center justify-center font-bold text-[10px] shrink-0 font-mono">
                      ?
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-800">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setCurrentPage('marketplace')}
              className="w-full mt-6 py-2.5 bg-teal-50 hover:bg-teal-100 text-teal-750 border border-teal-200 hover:border-teal-300 text-xs font-bold rounded-xl transition-all text-center flex items-center justify-center gap-1 shadow-sm"
            >
              Browse Available Scrap Lots
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 - WASTE CATEGORIES */}
      <section className="py-20 bg-slate-50 border-t border-teal-500/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="text-left">
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600">Industrial Streams</h2>
              <p className="mt-3 text-3xl font-extrabold text-slate-900">Supported Waste Streams</p>
            </div>
            <button 
              onClick={() => setCurrentPage('marketplace')}
              className="flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors group"
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
                className="cursor-pointer group flex flex-col p-5 bg-white hover:bg-slate-50/50 rounded-xl border border-teal-500/10 hover:border-teal-500/25 transition-all text-left shadow-[0_2px_8px_rgba(148,163,184,0.02)] hover:shadow-[0_4px_15px_rgba(20,184,166,0.04)]"
              >
                <span className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">{cat.icon}</span>
                <h4 className="text-sm font-bold text-slate-800 group-hover:text-teal-600 transition-colors">{cat.name}</h4>
                <p className="text-[11px] text-teal-600 font-mono mt-1">{cat.count}</p>
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
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-teal-500 to-teal-500 opacity-15 blur-xl" />
            <div className="relative glass-panel rounded-2xl border-teal-500/10 p-8 shadow-xl text-left bg-white">
              <div className="border-b border-teal-500/10 pb-4 mb-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-teal-600" />
                  EcoLoop AI Value Calculator
                </h3>
                <p className="text-xs text-slate-500 mt-1">Estimate pricing and carbon footprint offsets instantly.</p>
              </div>

              <div className="space-y-6">
                {/* Waste Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Select Material Stream</label>
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
                            ? 'bg-teal-500/15 border-teal-500/40 text-teal-600' 
                            : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
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
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Lot Volume</label>
                    <span className="text-sm font-mono font-bold text-teal-600">{quantity} Tons</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>1 Ton</span>
                    <span>50 Tons</span>
                    <span>100 Tons</span>
                  </div>
                </div>

                {/* Simulated Output Calculations */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-teal-500/5">
                    <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Estimated Value</p>
                    <p className="text-xl font-black text-slate-900 mt-1">₹{estimatedPrice.toLocaleString('en-IN')}</p>
                    <p className="text-[10px] text-teal-600 font-mono mt-0.5">B2B Est. Rate</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-teal-500/5">
                    <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">CO₂ Savings</p>
                    <p className="text-xl font-black text-teal-600 mt-1 flex items-center gap-1">
                      <Leaf className="h-4.5 w-4.5 shrink-0" />
                      {carbonSaved.toFixed(1)} T
                    </p>
                    <p className="text-[10px] text-teal-500 font-mono mt-0.5">Carbon Credits Eq.</p>
                  </div>
                </div>

                <button 
                  onClick={() => setCurrentPage('marketplace')}
                  className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold rounded-lg text-sm transition-all hover:opacity-90 active:scale-98 flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(20,184,166,0.15)]"
                >
                  List This Material Stream Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* AI Features Descriptions */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600">Enterprise Tech</h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              AI-Powered Circular Tech Stack
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We leverage advanced deep learning networks to classify industrial byproducts, forecast regional price indexations, and resolve circular matches.
            </p>

            <div className="space-y-4 mt-2">
              {[
                { title: 'Predictive Price Estimations', desc: 'Predict spot prices based on historical B2B commodity indices and localized refinery capacities.', icon: Cpu },
                { title: 'Automated Chemical Classification', desc: 'EcoLoop AI analyzes moisture, heavy metal residue, and purity percentages to assign industrial grades.', icon: ShieldCheck },
                { title: 'Dynamic Logistics Routing', desc: 'Matches localized factories with regional processors to minimize transport emissions & carbon credit losses.', icon: BarChart3 }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-teal-500/5 bg-slate-50">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 border border-teal-500/10">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5B - DIRECT SURPLUS WASTE MATCH CONNECTOR */}
      <section className="py-20 bg-white border-t border-teal-500/10 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-600 backdrop-blur mb-4">
              <Truck className="h-3.5 w-3.5" />
              <span>Surplus Dispatcher (ઝડપી કનેક્ટ / Instant Match)</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Instant Waste-to-Recycler Dispatcher
            </h2>
            <p className="text-sm text-slate-550 mt-2.5">
              Got surplus industrial waste lying around? Specify your lot category, volume, and city to instantly scan and connect with certified local recycling businesses that are actively purchasing it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Form Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-teal-500 to-teal-400 opacity-15 blur-lg" />
              <div className="relative glass-panel rounded-2xl border border-teal-500/10 p-6 shadow-xl bg-white">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Surplus Declaration Form</h3>
                
                <form onSubmit={handleScanRecyclers} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Lot Category</label>
                    <select 
                      value={surplusMaterial}
                      onChange={(e) => setSurplusMaterial(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-700 focus:outline-none focus:border-teal-500/40"
                    >
                      <option value="metal">🔩 Metal Scrap</option>
                      <option value="plastic">♻️ Plastic Waste</option>
                      <option value="textile">🧵 Textile Waste</option>
                      <option value="wood">🪵 Wood Waste</option>
                      <option value="food">🍎 Organic/Biomass</option>
                      <option value="byproducts">🧪 Chemical Byproducts</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Volume (Tons)</label>
                      <input 
                        type="number" 
                        value={surplusVolume}
                        onChange={(e) => setSurplusVolume(e.target.value)}
                        placeholder="e.g. 15"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500/40"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Current Facility City</label>
                      <input 
                        type="text" 
                        value={surplusCity}
                        onChange={(e) => setSurplusCity(e.target.value)}
                        placeholder="e.g. Vapi, Surat"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500/40"
                        required
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold rounded-lg text-xs transition-all hover:opacity-90 flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(20,184,166,0.15)]"
                    disabled={isScanning}
                  >
                    {isScanning ? 'Scanning Active Buyers...' : 'Find Matching Recycling Businesses'}
                    <Search className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-7">
              {isScanning && (
                <div className="glass-panel rounded-2xl border border-teal-500/10 p-12 text-center shadow-xl flex flex-col items-center justify-center gap-4 min-h-[300px]">
                  <div className="h-12 w-12 rounded-full border-4 border-slate-100 border-t-teal-500 animate-spin" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 animate-pulse">Running Neural Purity Matchmaker...</h4>
                    <p className="text-xs text-slate-500 mt-1">Checking regional recycler capacities and logistical paths in {surplusCity}...</p>
                  </div>
                </div>
              )}

              {!isScanning && !scanCompleted && (
                <div className="glass-panel rounded-2xl border border-slate-200 border-dashed p-12 text-center text-slate-500 shadow-sm flex flex-col items-center justify-center gap-2 min-h-[300px]">
                  <Truck className="h-8 w-8 text-slate-400 stroke-1" />
                  <h4 className="text-sm font-bold text-slate-800">Recycler Match Output</h4>
                  <p className="text-xs max-w-md mx-auto">Fill in the Surplus Declaration Form and hit search to find certified buyers within your district who are ready to accept your waste lots immediately.</p>
                </div>
              )}

              {!isScanning && scanCompleted && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center px-2">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Matched Recycling Businesses</span>
                    <span className="text-[10px] text-teal-600 font-mono font-bold">{matchedRecyclers.length} Certified Facilities Found</span>
                  </div>

                  <div className="space-y-3">
                    {matchedRecyclers.map((rec: any) => (
                      <div 
                        key={rec.id} 
                        className="p-5 rounded-xl border border-slate-200 bg-white hover:border-teal-500/20 shadow-[0_2px_10px_rgba(148,163,184,0.02)] transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs animate-fadeIn"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-extrabold text-slate-900 leading-snug">{rec.name}</h4>
                            <span className="text-[8px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">{rec.demand}</span>
                          </div>
                          <div className="flex gap-4 text-slate-500 text-[10px] font-medium">
                            <span className="flex items-center gap-0.5">
                              <MapPin className="h-3 w-3 text-teal-600" />
                              {rec.distance} away ({rec.location})
                            </span>
                            <span>Offer Rate: <strong className="text-slate-800 font-bold">{rec.rate}</strong></span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDirectDispatch(rec.id, rec.name)}
                          className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold rounded-lg text-[10px] hover:opacity-95 transition-all shadow-[0_2px_6px_rgba(20,184,166,0.1)] flex items-center gap-1 shrink-0"
                          disabled={dispatchingId === rec.id}
                        >
                          {dispatchingId === rec.id ? (
                            <>
                              <div className="h-2.5 w-2.5 rounded-full border-2 border-white border-t-transparent animate-spin mr-1" />
                              Routing...
                            </>
                          ) : (
                            <>
                              Direct Dispatch & Route
                              <ArrowRight className="h-3 w-3" />
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>

                  {dispatchStatus && (
                    <div className="p-4 rounded-xl border border-teal-200 bg-teal-50/70 text-teal-700 font-semibold text-xs flex items-start gap-2.5 animate-pulse mt-4">
                      <Truck className="h-4.5 w-4.5 shrink-0 mt-0.5 animate-bounce" />
                      <p className="leading-relaxed">{dispatchStatus}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - SUSTAINABILITY OVERVIEW */}
      <section className="py-20 bg-slate-50 border-t border-teal-500/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left flex flex-col gap-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600">ESG & Auditing</h2>
              <p className="text-3xl font-extrabold text-slate-900">Verifiable Carbon Neutrality Pathways</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Industrial sustainability is no longer a marketing statement—it is a metric of regulatory compliance. EcoLoop's ESG Suite integrates directly with global standard boards.
              </p>
              <ul className="space-y-3.5 text-xs text-slate-500 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  BRSR Core aligned reports for Indian regulatory boards
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  Automatic generation of Carbon Offset certificates via Verified Standards
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  Real-time blockchain ledger matching to prevent double-claiming of recycling points
                </li>
              </ul>
              <button 
                onClick={() => setCurrentPage('dashboard')}
                className="group flex items-center gap-1.5 text-sm font-bold text-teal-600 hover:text-emerald-300"
              >
                Access Live ESG Demo Dashboard
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            {/* UI Dashboard Showcase Mockup */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-teal-500 to-teal-500 opacity-15 blur-lg" />
              <div className="relative rounded-xl border border-teal-500/10 bg-white p-6 shadow-lg border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500">Corporate Analytics</span>
                    <h4 className="text-sm font-extrabold text-slate-800">ESG Impact Scorecard</h4>
                  </div>
                  <span className="text-xs bg-teal-500/10 text-teal-600 border border-teal-500/20 px-2 py-0.5 rounded font-mono">
                    Grade AA+
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Gauge */}
                  <div className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border border-teal-500/5">
                    <span className="text-xs text-slate-500">Total Recycled Flow</span>
                    <span className="text-xs font-mono font-bold text-slate-900">418.5 Tons</span>
                  </div>
                  {/* Scope 3 reductions slider mockup */}
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-teal-500/5">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Scope 3 Emission Reductions</span>
                      <span className="text-teal-700 font-bold font-mono">-38.2%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-600 to-teal-400 rounded-full" style={{ width: '74%' }} />
                    </div>
                  </div>
                  {/* Interactive details */}
                  <div className="grid grid-cols-2 gap-3 text-xs text-left">
                    <div className="p-3 rounded-lg bg-slate-100/50">
                      <p className="text-slate-500">Landfill Diverted</p>
                      <p className="text-sm font-bold text-slate-800 mt-1">94.8%</p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-100/50">
                      <p className="text-slate-500">Logistics Carbon Eq.</p>
                      <p className="text-sm font-bold text-slate-800 mt-1">3.4 Tons</p>
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
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600">Enterprise Trust</h2>
          <p className="mt-3 text-3xl font-extrabold text-slate-900">What Circular Leaders Say</p>
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
              <p className="text-sm text-slate-600 italic leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-3 mt-6 border-t border-teal-500/10 pt-4">
                <div className="h-9 w-9 rounded-full bg-teal-500/10 flex items-center justify-center text-lg">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{item.author}</h4>
                  <p className="text-[11px] text-slate-400">{item.role}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* SECTION 8 - PRICING PREVIEW */}
      <section className="py-20 bg-slate-50 border-t border-teal-500/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600">B2B Plans</h2>
            <p className="mt-3 text-3xl font-extrabold text-slate-900">Flexible Corporate Licensing</p>
          </div>
          <button 
            onClick={() => setCurrentPage('pricing')}
            className="px-6 py-3.5 bg-slate-900 border border-slate-700 hover:border-teal-500/40 text-sm font-bold text-white rounded-xl transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)]"
          >
            Review Premium Pricing Schemes & Features
          </button>
        </div>
      </section>
    </div>
  );
};
