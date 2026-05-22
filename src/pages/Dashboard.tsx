import React, { useState } from 'react';
import { BarChart3, Leaf, Award, Recycle, Flame, TrendingUp, AlertTriangle, Lightbulb, Compass, ArrowUpRight } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface DashboardProps {
  setCurrentPage: (page: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Simulated stats for carbon credits
  const [carbonCredits, setCarbonCredits] = useState(1280);

  const kpiStats = [
    { label: 'Circular Match Rate', value: '94.2%', change: '+2.4% vs L30D', trend: 'up', icon: Recycle, color: 'emerald' },
    { label: 'Carbon Offset Credits', value: `${carbonCredits} MT`, change: 'Accumulated offset', trend: 'neutral', icon: Leaf, color: 'cyan' },
    { label: 'Landfill Diversion Rate', value: '96.8%', change: '+1.2% this quarter', trend: 'up', icon: Award, color: 'lime' },
    { label: 'Regulatory Risk Level', value: 'Very Low', change: 'Zero BRSR infractions', trend: 'neutral', icon: AlertTriangle, color: 'green' }
  ];

  const recommendations = [
    {
      id: 'REC-A',
      title: 'Zone B Cotton Residue Optimization',
      category: 'logistics',
      impact: 'Save 4.2 Tons CO₂',
      description: 'Coimbatore mills indicate a 12-Ton surplus. Committing within 24 hours minimizes combined logistics shipping carbon footprints.',
      actionLabel: 'View Match Listings'
    },
    {
      id: 'REC-B',
      title: 'Fly Ash Slag Divert Opportunity',
      category: 'byproducts',
      impact: 'Earn ₹2,40,000 Extra',
      description: 'Durgapur Thermal is matching Grade I Fly Ash at a premium spot rate. Shift allocation from Zone A to Zone C immediately.',
      actionLabel: 'Initiate Slag RFP'
    },
    {
      id: 'REC-C',
      title: 'Upgrade Polymer Lot Purity Grade',
      category: 'processing',
      impact: 'Boost Purity 3.4%',
      description: 'Pre-sorting PET pellets in Surat using secondary wash systems can increase lot purity, increasing sales value by ₹18k per Ton.',
      actionLabel: 'Consult Sorting Expert'
    }
  ];

  return (
    <div className="relative z-10 pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background radial overlays */}
      <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 text-left">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="h-5 w-5 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Enterprise Suite</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ESG & Circular Analytics
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Monitor real-time industrial material flows, Scope 3 emission audits, and circular carbon credits accruals.
          </p>
        </div>

        {/* Action Toggle Tabs */}
        <div className="flex rounded-lg bg-slate-900/60 p-1 border border-slate-800 self-stretch md:self-auto justify-between sm:justify-start">
          {['overview', 'materials', 'carbon'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-xs font-semibold capitalize transition-all ${
                activeTab === tab 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* KPI STATS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {kpiStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="p-5 rounded-xl border border-slate-800 bg-dark-900/40 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-emerald-500/5 to-transparent pointer-events-none" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">{stat.label}</span>
                <div className={`h-8 w-8 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center ${
                  stat.color === 'emerald' ? 'text-emerald-400' : stat.color === 'cyan' ? 'text-cyan-400' : 'text-lime-400'
                }`}>
                  <Icon className="h-4.5 w-4.5" />
                </div>
              </div>
              <p className="text-2xl font-extrabold text-white mt-4">{stat.value}</p>
              <p className="text-[10px] text-emerald-500 font-mono mt-1 font-semibold flex items-center gap-1">
                <TrendingUp className="h-3 w-3 shrink-0" />
                {stat.change}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* LEFT COLUMN: INTERACTIVE VISUAL CHARTS */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 rounded-xl border border-emerald-500/10 bg-dark-900/50 text-left">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Industrial Material Flow Loop</h3>
                <p className="text-xs text-slate-400 mt-1">Simulated raw waste extraction to recycler value conversion</p>
              </div>
              <span className="text-xs text-slate-500 font-mono bg-dark-900 border border-slate-800 px-2 py-0.5 rounded">
                Live SVG Stream
              </span>
            </div>

            {/* Custom Designed High-Fidelity SVG Diagram */}
            <div className="relative rounded-lg bg-slate-950/80 border border-slate-900 p-4 flex justify-center items-center select-none overflow-x-auto min-h-[300px]">
              <svg width="600" height="280" viewBox="0 0 600 280" className="w-full h-auto text-xs">
                {/* Node Definitions & Filters */}
                <defs>
                  <linearGradient id="gradient-green-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="gradient-cyan-lime" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#84cc16" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* FLOW LINES */}
                <path d="M 120 70 L 300 140" fill="none" stroke="url(#gradient-green-cyan)" strokeWidth="3" className="animate-flow" />
                <path d="M 120 210 L 300 140" fill="none" stroke="url(#gradient-green-cyan)" strokeWidth="3" className="animate-flow" />
                <path d="M 300 140 L 480 70" fill="none" stroke="url(#gradient-cyan-lime)" strokeWidth="3" className="animate-flow" />
                <path d="M 300 140 L 480 210" fill="none" stroke="url(#gradient-cyan-lime)" strokeWidth="3" className="animate-flow" />

                {/* NODE 1: INDUSTRIAL MILLS */}
                <g transform="translate(40, 30)">
                  <rect width="100" height="60" rx="8" fill="#0b1329" stroke="#10b981" strokeWidth="1" />
                  <text x="50" y="25" fill="#ffffff" textAnchor="middle" fontWeight="bold">Textile Mills</text>
                  <text x="50" y="45" fill="#10b981" textAnchor="middle" fontSize="10" fontFamily="monospace">142 Tons In</text>
                </g>

                {/* NODE 2: FACTORIES */}
                <g transform="translate(40, 170)">
                  <rect width="100" height="60" rx="8" fill="#0b1329" stroke="#10b981" strokeWidth="1" />
                  <text x="50" y="25" fill="#ffffff" textAnchor="middle" fontWeight="bold">Steel & Chem</text>
                  <text x="50" y="45" fill="#10b981" textAnchor="middle" fontSize="10" fontFamily="monospace">315 Tons In</text>
                </g>

                {/* NODE 3: ECOLOOP AI CENTER */}
                <g transform="translate(250, 110)">
                  <rect width="110" height="70" rx="10" fill="#070c1b" stroke="#06b6d4" strokeWidth="1.5" className="border-glow" />
                  <text x="55" y="25" fill="#06b6d4" textAnchor="middle" fontWeight="bold" fontSize="11">EcoLoop Engine</text>
                  <text x="55" y="42" fill="#ffffff" textAnchor="middle" fontSize="10">Matchmaker AI</text>
                  <text x="55" y="58" fill="#06b6d4" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="semibold">94.2% Eff.</text>
                  <circle cx="55" cy="5" r="3" fill="#06b6d4" className="animate-ping" />
                </g>

                {/* NODE 4: VERIFIED RECYCLERS */}
                <g transform="translate(450, 30)">
                  <rect width="110" height="60" rx="8" fill="#0b1329" stroke="#84cc16" strokeWidth="1" />
                  <text x="55" y="25" fill="#ffffff" textAnchor="middle" fontWeight="bold">Recyclers</text>
                  <text x="55" y="45" fill="#84cc16" textAnchor="middle" fontSize="10" fontFamily="monospace">384 Tons Value</text>
                </g>

                {/* NODE 5: INDUSTRIAL BUYERS */}
                <g transform="translate(450, 170)">
                  <rect width="110" height="60" rx="8" fill="#0b1329" stroke="#84cc16" strokeWidth="1" />
                  <text x="55" y="25" fill="#ffffff" textAnchor="middle" fontWeight="bold">Secondary Buyers</text>
                  <text x="55" y="45" fill="#84cc16" textAnchor="middle" fontSize="10" fontFamily="monospace">73 Tons Value</text>
                </g>
              </svg>
            </div>

            <div className="flex gap-4 items-center justify-between text-xs text-slate-500 mt-4 border-t border-slate-800/60 pt-4">
              <span>* Material flows are modeled using simulated Sankey loops</span>
              <button 
                onClick={() => setCurrentPage('marketplace')}
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
              >
                Inspect Marketplace Batches
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INSIGHTS & AI RECOMMENDATIONS */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl border border-emerald-500/10 bg-dark-900/50 text-left h-full">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-4 uppercase tracking-wider">
              <Lightbulb className="h-4.5 w-4.5 text-emerald-400" />
              AI ESG Prescriptions
            </h3>
            
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div 
                  key={rec.id}
                  className="p-4 rounded-lg bg-slate-950/80 border border-slate-900 hover:border-emerald-500/10 transition-all flex flex-col gap-2 relative overflow-hidden"
                >
                  {/* Top shimmer indicator */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
                  
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-[9px] font-bold text-emerald-400 tracking-wider bg-emerald-950/40 border border-emerald-500/15 px-1.5 py-0.5 rounded">
                      {rec.id}
                    </span>
                    <span className="text-cyan-400 font-semibold font-mono">{rec.impact}</span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-200">{rec.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-normal">{rec.description}</p>
                  
                  <button 
                    onClick={() => {
                      if (rec.id === 'REC-A') setCurrentPage('marketplace');
                      else if (rec.id === 'REC-B') setCurrentPage('listings');
                      else setCurrentPage('contact');
                    }}
                    className="text-[10px] font-semibold text-emerald-400 hover:underline text-left mt-1 max-w-max"
                  >
                    {rec.actionLabel} &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
