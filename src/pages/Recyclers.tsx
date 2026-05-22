import React, { useState, useMemo } from 'react';
import { Users, Search, CheckCircle2, ShieldCheck, MapPin, Star, Award, MessageSquare } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface RecyclersProps {
  setCurrentPage: (page: string) => void;
}

export const Recyclers: React.FC<RecyclersProps> = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [materialFilter, setMaterialFilter] = useState('all');

  const recyclers = [
    {
      id: 'REC-01',
      name: 'Singhal Metals & Smelters Ltd',
      materials: ['Copper Scrap', 'Steel Slag', 'Lead Shavings', 'Aluminum Alloys'],
      location: 'Gujarat (Vapi & Hazira)',
      rating: 4.9,
      esgScore: 98,
      certified: true,
      experience: '18 Years B2B Operations',
      capacity: '12,000 Tons/Month'
    },
    {
      id: 'REC-02',
      name: 'GreenCycle Polymers Pvt Ltd',
      materials: ['HDPE Shreds', 'PET Flakes', 'LDPE Granules', 'PP Compounds'],
      location: 'Maharashtra (Pune & Nashik)',
      rating: 4.7,
      esgScore: 96,
      certified: true,
      experience: '12 Years B2B Operations',
      capacity: '8,500 Tons/Month'
    },
    {
      id: 'REC-03',
      name: 'Coimbatore Textile Upcyclers',
      materials: ['Cotton Spin Shoddy', 'Synthetic Yarn Scrap', 'Jute Fiber Residues'],
      location: 'Tamil Nadu (Coimbatore)',
      rating: 4.8,
      esgScore: 94,
      certified: true,
      experience: '9 Years B2B Operations',
      capacity: '4,000 Tons/Month'
    },
    {
      id: 'REC-04',
      name: 'Sahyadri Timber & Bio-Char Corp',
      materials: ['Wood Slabs', 'Sawdust Shavings', 'Eco Bio-char Pellets'],
      location: 'Karnataka (Hubli & Belagavi)',
      rating: 4.5,
      esgScore: 89,
      certified: false,
      experience: '6 Years B2B Operations',
      capacity: '2,500 Tons/Month'
    },
    {
      id: 'REC-05',
      name: 'Haryana Organic Pulps & Feeds',
      materials: ['Citrus Pulp Feedstock', 'Spent Grain Lot', 'Brewery Organic Slurry'],
      location: 'Haryana (Sonipat & Karnal)',
      rating: 4.4,
      esgScore: 91,
      certified: true,
      experience: '8 Years B2B Operations',
      capacity: '6,000 Tons/Month'
    },
    {
      id: 'REC-06',
      name: 'Eastern Gypsum & Fly Ash Aggregates',
      materials: ['Fly Ash Grade I', 'Gypsum Slurry', 'Phosphate Slag Lot'],
      location: 'West Bengal (Durgapur)',
      rating: 4.6,
      esgScore: 95,
      certified: true,
      experience: '14 Years B2B Operations',
      capacity: '20,000 Tons/Month'
    }
  ];

  const filteredRecyclers = useMemo(() => {
    return recyclers.filter(rec => {
      const matchesSearch = rec.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            rec.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesMaterial = materialFilter === 'all' || 
                              rec.materials.some(m => m.toLowerCase().includes(materialFilter.toLowerCase()));

      return matchesSearch && matchesMaterial;
    });
  }, [searchTerm, materialFilter]);

  return (
    <div className="relative z-10 pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Gradients */}
      <div className="absolute top-10 right-1/4 h-[300px] w-[500px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      
      {/* Page Title */}
      <div className="text-left mb-10">
        <div className="flex items-center gap-2 mb-2">
          <Users className="h-5 w-5 text-teal-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Ecosystem Network</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Verified Recyclers Directory
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Discover certified circular waste processors, review their environmental scores, and request quotes instantly.
        </p>
      </div>

      {/* Directory Searching & Filtering Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between items-center bg-white border border-teal-500/10 p-4 rounded-xl text-left shadow-[0_2px_8px_rgba(148,163,184,0.02)]">
        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            placeholder="Search recyclers name or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-teal-500/40"
          />
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
        </div>

        <div className="flex gap-2 w-full sm:w-auto shrink-0 justify-end">
          {['all', 'Metal', 'Plastic', 'Textile', 'Wood', 'Organic', 'Fly Ash'].map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterialFilter(mat === 'all' ? 'all' : mat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                (materialFilter === 'all' && mat === 'all') || (materialFilter.toLowerCase() === mat.toLowerCase())
                  ? 'bg-teal-50 border border-teal-200 text-teal-600'
                  : 'bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-700'
              }`}
            >
              {mat === 'all' ? 'All Focuses' : mat}
            </button>
          ))}
        </div>
      </div>

      {/* Recyclers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecyclers.length > 0 ? (
          filteredRecyclers.map((rec) => (
            <GlowCard key={rec.id} className="flex flex-col justify-between text-left h-full" glowColor={rec.esgScore >= 95 ? 'green' : 'cyan'}>
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-4 border-b border-teal-500/10 pb-4">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 font-mono block mb-1">ID: {rec.id}</span>
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:text-teal-600">{rec.name}</h3>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs bg-teal-50 text-teal-600 border border-teal-100 px-2 py-0.5 rounded font-mono font-bold">
                      ESG {rec.esgScore}
                    </span>
                    {rec.certified && (
                      <span className="inline-flex items-center gap-0.5 text-[8px] text-teal-700 font-bold uppercase tracking-wider mt-1">
                        <ShieldCheck className="h-3 w-3 shrink-0 text-teal-600" />
                        Audited
                      </span>
                    )}
                  </div>
                </div>

                {/* Body Details */}
                <div className="space-y-3.5 mb-6">
                  {/* Experience & Capacity */}
                  <div className="flex justify-between text-xs font-medium text-slate-600">
                    <span>{rec.experience}</span>
                    <span className="text-slate-500">{rec.capacity}</span>
                  </div>

                  {/* Location info */}
                  <p className="text-xs text-slate-600 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-teal-600" />
                    {rec.location}
                  </p>

                  {/* Accept materials tag list */}
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Accepted Material Focuses</p>
                    <div className="flex flex-wrap gap-1.5">
                      {rec.materials.map((mat) => (
                        <span key={mat} className="text-[10px] px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-600 font-medium">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom reviews and call buttons */}
              <div className="border-t border-teal-500/10 pt-4 flex justify-between items-center mt-auto">
                <div className="flex items-center gap-1">
                  <Star className="h-4.5 w-4.5 fill-teal-500 text-teal-500" />
                  <span className="text-xs font-bold text-slate-900 font-mono">{rec.rating}</span>
                  <span className="text-[10px] text-slate-500 font-mono">(140+ deals)</span>
                </div>

                <button
                  onClick={() => setCurrentPage('contact')}
                  className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 hover:border-teal-500/35 text-xs font-semibold text-slate-700 hover:text-teal-600 rounded-lg transition-all shadow-[0_2px_6px_rgba(148,163,184,0.02)]"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                  Initiate RFP
                </button>
              </div>
            </GlowCard>
          ))
        ) : (
          <div className="col-span-full p-12 text-center rounded-xl border border-slate-800 bg-slate-900/20 text-slate-600">
            <Users className="h-8 w-8 text-slate-500 mx-auto mb-3" />
            <p className="font-semibold">No processors match the selected materials filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};
