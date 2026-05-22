import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, MapPin, Scale, HelpCircle, Compass, Cpu, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface MarketplaceProps {
  setCurrentPage: (page: string) => void;
}

export const Marketplace: React.FC<MarketplaceProps> = ({ setCurrentPage }) => {
  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [minQuantity, setMinQuantity] = useState(0);
  const [gradeFilter, setGradeFilter] = useState('all');

  // Simulated B2B listings data
  const listings = [
    {
      id: 'L-101',
      title: 'High-Purity Copper Wire Scrap',
      category: 'metal',
      quantity: 24, // Tons
      location: 'Gujarat (Vapi)',
      purity: '99.2%',
      price: '₹5,80,000 / Ton',
      matchScore: 98,
      verified: true,
      grade: 'Premium',
      co2Saved: '43.2 Tons',
      producer: 'Apex Electronics Ltd'
    },
    {
      id: 'L-102',
      title: 'Post-Industrial PET Pellet Lot',
      category: 'plastic',
      quantity: 45,
      location: 'Maharashtra (Pune)',
      purity: '95.6%',
      price: '₹84,000 / Ton',
      matchScore: 94,
      verified: true,
      grade: 'Industrial',
      co2Saved: '94.5 Tons',
      producer: 'Plastik Solutions India'
    },
    {
      id: 'L-103',
      title: 'Cotton Comber Waste (Spinning Mill)',
      category: 'textile',
      quantity: 12,
      location: 'Tamil Nadu (Coimbatore)',
      purity: '92.0%',
      price: '₹1,12,000 / Ton',
      matchScore: 89,
      verified: true,
      grade: 'Recyclable',
      co2Saved: '19.2 Tons',
      producer: 'Kongu Cotton Spinners'
    },
    {
      id: 'L-104',
      title: 'Premium Shredded Sawdust & Chips',
      category: 'wood',
      quantity: 8,
      location: 'Karnataka (Hubli)',
      purity: '88.5%',
      price: '₹14,000 / Ton',
      matchScore: 85,
      verified: false,
      grade: 'Secondary',
      co2Saved: '7.2 Tons',
      producer: 'Sahyadri Timber Units'
    },
    {
      id: 'L-105',
      title: 'Industrial Citrus Pulps & Waste',
      category: 'food',
      quantity: 35,
      location: 'Haryana (Sonipat)',
      purity: '75.0%',
      price: '₹6,000 / Ton',
      matchScore: 81,
      verified: false,
      grade: 'Secondary',
      co2Saved: '17.5 Tons',
      producer: 'Haryana Fruit Preserves'
    },
    {
      id: 'L-106',
      title: 'Fly Ash (Grade I Silo Discharge)',
      category: 'byproducts',
      quantity: 80,
      location: 'West Bengal (Durgapur)',
      purity: '94.0%',
      price: '₹22,000 / Ton',
      matchScore: 96,
      verified: true,
      grade: 'Industrial',
      co2Saved: '112.0 Tons',
      producer: 'Eastern Thermal Unit 4'
    },
    {
      id: 'L-107',
      title: 'Grade A Recycled PP Shreds',
      category: 'plastic',
      quantity: 18,
      location: 'Gujarat (Surat)',
      purity: '98.0%',
      price: '₹95,000 / Ton',
      matchScore: 97,
      verified: true,
      grade: 'Premium',
      co2Saved: '37.8 Tons',
      producer: 'Surat Polymer Refinery'
    },
    {
      id: 'L-108',
      title: 'Aluminum Alloy Castings Scrap',
      category: 'metal',
      quantity: 15,
      location: 'Tamil Nadu (Chennai)',
      purity: '97.5%',
      price: '₹2,40,000 / Ton',
      matchScore: 92,
      verified: true,
      grade: 'Premium',
      co2Saved: '27.0 Tons',
      producer: 'Chennai DieCasting Corp'
    }
  ];

  // AI Recommended match list based on active score > 95
  const aiRecommendations = useMemo(() => {
    return listings.filter(l => l.matchScore >= 95);
  }, []);

  // Filter listings
  const filteredListings = useMemo(() => {
    return listings.filter(listing => {
      const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            listing.producer.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            listing.id.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || listing.category === selectedCategory;
      const matchesLocation = selectedLocation === 'all' || listing.location.toLowerCase().includes(selectedLocation.toLowerCase());
      const matchesQuantity = listing.quantity >= minQuantity;
      const matchesGrade = gradeFilter === 'all' || listing.grade === gradeFilter;

      return matchesSearch && matchesCategory && matchesLocation && matchesQuantity && matchesGrade;
    });
  }, [searchQuery, selectedCategory, selectedLocation, minQuantity, gradeFilter]);

  return (
    <div className="relative z-10 pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      
      {/* Title */}
      <div className="text-left mb-10">
        <div className="flex items-center gap-2 mb-2">
          <Compass className="h-5 w-5 text-blue-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Trading Hub</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Industrial Waste Marketplace
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Discover high-grade recyclable scrap materials, audit purities, and initiate secure digital B2B contracts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: FILTERS & CONTROL PANEL */}
        <div className="lg:col-span-3 space-y-6">
          <div className="glass-panel border border-blue-500/10 rounded-xl p-5 text-left">
            <div className="flex items-center justify-between border-b border-blue-500/10 pb-4 mb-4">
              <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <SlidersHorizontal className="h-4 w-4 text-emerald-400" />
                Filter Controls
              </span>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedLocation('all');
                  setMinQuantity(0);
                  setGradeFilter('all');
                  setSearchQuery('');
                }}
                className="text-[10px] text-blue-600 hover:text-blue-750 font-semibold"
              >
                Reset All
              </button>
            </div>

            <div className="space-y-5">
              {/* Search input */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Material Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search copper, PET, mills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-850 placeholder-slate-400 focus:outline-none focus:border-blue-500/40"
                  />
                  <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>

              {/* Category Select */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Industrial Stream</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs text-slate-700 focus:outline-none focus:border-blue-500/40"
                >
                  <option value="all">All Materials</option>
                  <option value="metal">🔩 Metal Scrap</option>
                  <option value="plastic">♻️ Plastic Waste</option>
                  <option value="textile">🧵 Textile Waste</option>
                  <option value="wood">🪵 Wood Waste</option>
                  <option value="food">🍎 Organic Waste</option>
                  <option value="byproducts">🧪 Byproducts</option>
                </select>
              </div>

              {/* Location Select */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Region Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs text-slate-700 focus:outline-none focus:border-blue-500/40"
                >
                  <option value="all">All India</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="tamil nadu">Tamil Nadu</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="haryana">Haryana</option>
                  <option value="west bengal">West Bengal</option>
                </select>
              </div>

              {/* Minimum quantity slider */}
              <div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  <span>Min Quantity</span>
                  <span className="text-blue-600 font-mono">{minQuantity} Tons</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={minQuantity}
                  onChange={(e) => setMinQuantity(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Quality Grade */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Purity Grade</label>
                <div className="flex flex-col gap-1.5">
                  {['all', 'Premium', 'Industrial', 'Recyclable', 'Secondary'].map((grade) => (
                    <button
                      key={grade}
                      onClick={() => setGradeFilter(grade)}
                      className={`text-left text-xs px-2.5 py-1.5 rounded transition-all ${
                        gradeFilter === grade 
                          ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-500 font-semibold'
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                      }`}
                    >
                      {grade === 'all' ? 'All Grades' : grade}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* QUICK DRAFT LISTING */}
          <div className="p-5 rounded-xl border border-blue-500/10 bg-white text-left shadow-[0_2px_8px_rgba(148,163,184,0.02)] border border-slate-100">
            <h4 className="text-xs font-bold text-slate-800 mb-2">Want to sell industrial lots?</h4>
            <p className="text-[11px] text-slate-500 leading-normal mb-3">
              List raw slag, sorted plastics, organic pulps, or metal shavings.
            </p>
            <button 
              onClick={() => setCurrentPage('listings')}
              className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 text-xs font-semibold rounded-lg transition-all"
            >
              List Waste Lots
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: AI RECS & LISTINGS LIST */}
        <div className="lg:col-span-9 space-y-8">
          
          {/* AI MATCHMAKER RECOMMENDATIONS */}
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4 bg-emerald-950/20 border border-blue-500/10 px-3 py-1.5 rounded-lg max-w-max">
              <Cpu className="h-4 w-4 text-blue-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                EcoLoop AI High-Matching Allocations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiRecommendations.slice(0, 2).map((item) => (
                <div 
                  key={item.id} 
                  className="relative group overflow-hidden rounded-xl border border-blue-500/10 bg-white p-5 backdrop-blur shadow-[0_4px_15px_rgba(148,163,184,0.04)] hover:border-blue-500/25 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-white font-bold text-[9px] uppercase tracking-wider rounded-bl-lg font-mono">
                    Match score: {item.matchScore}%
                  </div>
                  <span className="text-2xl">
                    {item.category === 'metal' ? '🔩' : item.category === 'plastic' ? '♻️' : item.category === 'byproducts' ? '🧪' : '🧵'}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex justify-between items-center text-xs mt-4 pt-3 border-t border-blue-500/10 text-slate-500">
                    <span>{item.quantity} Tons</span>
                    <span className="text-blue-600 font-bold font-mono">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FILTERED B2B LISTINGS */}
          <div className="text-left">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-slate-800">
                Available Lots ({filteredListings.length})
              </h3>
              <span className="text-[10px] text-slate-500 font-mono">Real-time ledger updates</span>
            </div>

            <div className="space-y-4">
              {filteredListings.length > 0 ? (
                filteredListings.map((item) => (
                  <div 
                    key={item.id}
                    className="p-5 rounded-xl border border-slate-200 bg-white hover:border-blue-500/20 hover:bg-slate-50/50 shadow-[0_2px_8px_rgba(148,163,184,0.02)] transition-all duration-300 relative"
                  >
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                      {/* Left: Info */}
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                            {item.id}
                          </span>
                          <span className="text-xs bg-slate-900 text-slate-800 border border-slate-800 px-2 py-0.5 rounded">
                            {item.grade} Grade
                          </span>
                          {item.verified && (
                            <span className="inline-flex items-center gap-1 text-[10px] text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full font-semibold">
                              <CheckCircle2 className="h-3 w-3" /> Purity Audit Verified
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-base font-bold text-slate-900 mt-2.5">
                          {item.title}
                        </h3>

                        <p className="text-xs text-slate-400 mt-1">
                          Listed by: <strong className="text-slate-800">{item.producer}</strong>
                        </p>

                        <div className="flex gap-4 items-center text-xs text-slate-500 mt-4 flex-wrap">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-blue-600" />
                            {item.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Scale className="h-3.5 w-3.5 text-blue-600" />
                            Lot Size: <strong className="text-slate-800">{item.quantity} Tons</strong>
                          </span>
                          <span className="text-blue-650 font-bold font-mono">
                            Offset: -{item.co2Saved} CO₂
                          </span>
                        </div>
                      </div>

                      {/* Right: Bidding Details */}
                      <div className="flex sm:flex-col items-end justify-between sm:justify-start gap-2 shrink-0 sm:text-right">
                        <div>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Spot Rate Offer</p>
                          <p className="text-lg font-black text-slate-900 mt-0.5">{item.price}</p>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">Moisture: {item.purity}</p>
                        </div>

                        <button 
                          onClick={() => setCurrentPage('listings')}
                          className="sm:mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-700 hover:to-sky-500 text-white font-bold rounded-lg text-xs transition-all flex items-center gap-1 shadow-[0_2px_10px_rgba(59,130,246,0.1)]"
                        >
                          Bid / RFP
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-12 text-center rounded-xl border border-slate-800 bg-slate-50/50">
                  <AlertCircle className="h-8 w-8 text-slate-500 mx-auto mb-3" />
                  <p className="text-slate-400 text-sm font-semibold">No materials match your select parameters.</p>
                  <button 
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedLocation('all');
                      setMinQuantity(0);
                      setGradeFilter('all');
                      setSearchQuery('');
                    }}
                    className="text-xs text-blue-600 hover:underline mt-2 font-medium"
                  >
                    Clear Filter Mappings
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
