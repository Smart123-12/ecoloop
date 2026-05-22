import React, { useState, useEffect } from 'react';
import { ListCollapse, Plus, Clock, Users, ArrowUpRight, CheckCircle2, AlertTriangle, ShieldCheck, Scale, Search, Truck, MapPin } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface WasteListingsProps {
  setCurrentPage: (page: string) => void;
}

interface BidItem {
  id: string;
  item: string;
  currentBid: number;
  highBidder: string;
  bidsCount: number;
  timeLeft: string;
  category: string;
}

interface RecyclerItem {
  id: string;
  name: string;
  distance: string;
  rate: string;
  demand: string;
  note: string;
}

export const WasteListings: React.FC<WasteListingsProps> = ({ setCurrentPage }) => {
  const [bids, setBids] = useState<BidItem[]>([
    { id: 'BID-901', item: 'High-Purity Copper Wire Scrap', currentBid: 585000, highBidder: 'Gujarat Metallurgical Ltd', bidsCount: 6, timeLeft: '2h 15m', category: 'metal' },
    { id: 'BID-902', item: 'Post-Industrial PET Pellet Lot', currentBid: 86500, highBidder: 'Maharashtra Poly-Synthetics', bidsCount: 4, timeLeft: '4h 40m', category: 'plastic' },
    { id: 'BID-903', item: 'Fly Ash (Grade I Discharge Lot)', currentBid: 23200, highBidder: 'Eastern Cement Grinding', bidsCount: 9, timeLeft: '1h 05m', category: 'byproducts' }
  ]);

  // Form states
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('metal');
  const [quantity, setQuantity] = useState('');
  const [purity, setPurity] = useState('');
  const [location, setLocation] = useState('');
  const [reservePrice, setReservePrice] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Instant Recycler Match Modal states
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [isMatching, setIsMatching] = useState(false);
  const [matchesFound, setMatchesFound] = useState<RecyclerItem[]>([]);
  const [selectedRecycler, setSelectedRecycler] = useState<RecyclerItem | null>(null);
  const [dispatchStatus, setDispatchStatus] = useState<string | null>(null);

  // Live bidding simulator effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBids(prevBids => {
        return prevBids.map((bid, index) => {
          // 30% chance to increment a bid
          if (Math.random() > 0.7) {
            const increment = bid.category === 'metal' ? 5000 : 800;
            return {
              ...bid,
              currentBid: bid.currentBid + increment,
              bidsCount: bid.bidsCount + 1,
            };
          }
          return bid;
        });
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleCreateListing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !quantity || !location || !reservePrice) return;

    // Launch AI match screen
    setShowMatchModal(true);
    setIsMatching(true);
    setDispatchStatus(null);
    setSelectedRecycler(null);

    // Mock match database
    const db: Record<string, RecyclerItem[]> = {
      metal: [
        { id: 'REC-M1', name: 'Gujarat Metallurgical Corp', distance: '12 km', rate: `₹${parseInt(reservePrice).toLocaleString('en-IN')}/Ton`, demand: 'High Demand', note: 'Can accept immediate delivery' },
        { id: 'REC-M2', name: 'Daman Alloys & Refining', distance: '28 km', rate: `₹${(parseInt(reservePrice) - 1000).toLocaleString('en-IN')}/Ton`, demand: 'Steady demand', note: 'Requires Grade A certification' }
      ],
      plastic: [
        { id: 'REC-P1', name: 'Vapi PET Reclamation Hub', distance: '8 km', rate: `₹${parseInt(reservePrice).toLocaleString('en-IN')}/Ton`, demand: 'Urgently Buying', note: 'Perfect match for PP/PET streams' },
        { id: 'REC-P2', name: 'Surat Polymer Synthetics', distance: '45 km', rate: `₹${(parseInt(reservePrice) + 500).toLocaleString('en-IN')}/Ton`, demand: 'High volume', note: 'Accepting shredded lots only' }
      ],
      textile: [
        { id: 'REC-T1', name: 'Surat Synthetic Fiber Mills', distance: '14 km', rate: `₹${parseInt(reservePrice).toLocaleString('en-IN')}/Ton`, demand: 'Steady Demand', note: 'Ideal for polyester blends' },
        { id: 'REC-T2', name: 'Coimbatore Secondary Yarn Co', distance: '950 km', rate: `₹${(parseInt(reservePrice) + 1200).toLocaleString('en-IN')}/Ton`, demand: 'High Volume', note: 'Bulk cotton surplus only' }
      ],
      wood: [
        { id: 'REC-W1', name: 'Vapi Biomass Fuels', distance: '6 km', rate: `₹${parseInt(reservePrice).toLocaleString('en-IN')}/Ton`, demand: 'Steady Demand', note: 'Biomass processing active' }
      ],
      food: [
        { id: 'REC-O1', name: 'Surat Bio-Compost Refinery', distance: '22 km', rate: `₹${parseInt(reservePrice).toLocaleString('en-IN')}/Ton`, demand: 'Urgently Buying', note: 'Accepting wet organic lots' }
      ],
      byproducts: [
        { id: 'REC-B1', name: 'Eastern Cement Grinding Unit', distance: '15 km', rate: 'Custom Match Rate', demand: 'High slag/fly ash need', note: 'Aligned with ESG criteria' }
      ]
    };

    setMatchesFound(db[category] || []);

    setTimeout(() => {
      setIsMatching(false);
    }, 2000);
  };

  return (
    <div className="relative z-10 pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Radial overlay */}
      <div className="absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-teal-500/5 blur-[90px] pointer-events-none" />

      {/* Page Title */}
      <div className="text-left mb-10">
        <div className="flex items-center gap-2 mb-2">
          <ListCollapse className="h-5 w-5 text-teal-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Trading Ledger</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Active Lot Auction Bidding
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Submit new industrial lots or participate in dynamic localized RFPs with real-time price matching.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: ACTIVE BIDDING STREAM */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-left">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-slate-800">Live Active Lots Bidding</h3>
              <span className="text-[10px] text-teal-600 font-mono font-semibold flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-teal-500 animate-ping" />
                Updating Live
              </span>
            </div>

            <div className="space-y-4">
              {bids.map((bid) => (
                <div 
                  key={bid.id}
                  className="p-5 rounded-xl border border-slate-200 bg-white hover:border-teal-500/20 shadow-[0_2px_10px_rgba(148,163,184,0.03)] transition-all flex flex-col sm:flex-row justify-between gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-teal-700 font-mono bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded">
                        {bid.id}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                        <Clock className="h-3 w-3 text-teal-600" />
                        {bid.timeLeft}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 leading-snug mt-1">{bid.item}</h4>
                    
                    <div className="flex gap-4 text-[11px] text-slate-500 mt-2 font-medium">
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {bid.bidsCount} Bidders Active
                      </span>
                      <span className="text-slate-500">High: <strong className="text-slate-700">{bid.highBidder}</strong></span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col justify-between sm:justify-start items-end gap-2 shrink-0 sm:text-right">
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-widest text-slate-500">Current High RFP Bid</p>
                      <p className="text-lg font-black text-slate-900 mt-0.5">₹{bid.currentBid.toLocaleString('en-IN')}</p>
                      <p className="text-[10px] text-teal-700 font-mono font-semibold">+₹5,000 Next Increment</p>
                    </div>

                    <button 
                      onClick={() => alert(`Bid of ₹${(bid.currentBid + 5000).toLocaleString('en-IN')} submitted successfully for ${bid.item}!`)}
                      className="px-3.5 py-1.5 bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-700 hover:to-teal-500 text-white font-bold rounded-lg text-xs transition-all shadow-[0_2px_6px_rgba(20,184,166,0.1)]"
                    >
                      Increment Bid
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: LIST NEW MATERIAL FORM */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-teal-500 to-teal-500 opacity-15 blur-lg" />
          <GlowCard className="relative text-left p-6" glowColor="cyan">
            <h3 className="text-base font-bold text-slate-900 mb-1">Create Material RFP Listing</h3>
            <p className="text-xs text-slate-500 mb-5">List surplus or byproduct volumes to receive qualified bids from certified processors.</p>

            <form onSubmit={handleCreateListing} className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Lot Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. 15 Tons Recycled PP Shreds"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500/40"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Industrial Stream</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-700 focus:outline-none focus:border-teal-500/40"
                  >
                    <option value="metal">🔩 Metal Scrap</option>
                    <option value="plastic">♻️ Plastic Waste</option>
                    <option value="textile">🧵 Textile Waste</option>
                    <option value="wood">🪵 Wood Waste</option>
                    <option value="food">🍎 Organic Waste</option>
                    <option value="byproducts">🧪 Byproducts</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Total Quantity (Tons)</label>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 15"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500/40"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Purity/Moisture (%)</label>
                  <input 
                    type="text" 
                    value={purity}
                    onChange={(e) => setPurity(e.target.value)}
                    placeholder="e.g. 98.4%"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500/40"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Reserve Base Price (₹/Ton)</label>
                  <input 
                    type="number" 
                    value={reservePrice}
                    onChange={(e) => setReservePrice(e.target.value)}
                    placeholder="e.g. 75000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500/40"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Location Warehouse</label>
                <input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Vapi, Gujarat"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500/40"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold rounded-lg text-xs transition-all hover:opacity-90 shadow-[0_4px_15px_rgba(20,184,166,0.15)] flex items-center justify-center gap-1.5"
              >
                Create Digital B2B RFP
                <Plus className="h-4 w-4" />
              </button>

              {formSuccess && (
                <div className="p-3 bg-teal-50 border border-teal-200 text-teal-600 rounded-lg text-[11px] font-semibold text-center flex items-center justify-center gap-1.5 animate-pulse mt-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  RFP Listed Successfully! Added to Live Bidding Feed.
                </div>
              )}
            </form>
          </GlowCard>
        </div>
      </div>

      {/* ECOLOOP NEURAL MATCH MODAL */}
      {showMatchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-teal-500/10 shadow-2xl overflow-hidden text-left p-6 animate-scaleIn">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600">
                  <Truck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 leading-snug">EcoLoop AI Match Engine</h3>
                  <p className="text-[10px] text-slate-500 font-mono">B2B Material Stream Matchmaker</p>
                </div>
              </div>
              <button 
                onClick={() => setShowMatchModal(false)}
                className="text-slate-400 hover:text-slate-600 font-extrabold text-sm"
              >
                ✕
              </button>
            </div>

            {isMatching ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="h-10 w-10 rounded-full border-4 border-slate-100 border-t-teal-500 animate-spin" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 animate-pulse uppercase tracking-wider">Analyzing Material RFP Coordinates...</h4>
                  <p className="text-[10px] text-slate-400 mt-1">Inspecting regional logistics queues and matching certified recycling businesses in {location}...</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {!dispatchStatus ? (
                  <>
                    <div className="bg-teal-50/70 border border-teal-200 p-3.5 rounded-lg text-xs">
                      <p className="text-[10px] font-bold text-teal-700 uppercase tracking-widest font-mono">Lotted Surplus Waste</p>
                      <h4 className="text-sm font-extrabold text-slate-900 mt-1">{title} ({quantity} Tons)</h4>
                      <p className="text-[10px] text-slate-505 mt-0.5">Warehouse Location: {location} | Base Reserve: ₹{parseInt(reservePrice).toLocaleString('en-IN')}</p>
                    </div>

                    <div className="space-y-2.5">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block px-1">Matching Certified Recyclers Found:</span>
                      
                      {matchesFound.length === 0 ? (
                        <p className="text-xs text-slate-400 text-center py-4 bg-slate-50 border border-slate-200 rounded-lg">No immediate direct recyclers matched. You can list it on the public B2B auction feed below.</p>
                      ) : (
                        matchesFound.map((rec) => (
                          <div 
                            key={rec.id} 
                            className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex justify-between items-center gap-4 text-xs hover:border-teal-500/20 transition-all"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-1.5">
                                <h5 className="font-extrabold text-slate-800">{rec.name}</h5>
                                <span className="text-[8px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-1 py-0.5 rounded font-mono uppercase tracking-wider">{rec.demand}</span>
                              </div>
                              <p className="text-[10px] text-slate-500 font-medium">Distance: {rec.distance} away | Matching Rate: <strong className="text-slate-800">{rec.rate}</strong></p>
                              <p className="text-[9px] text-slate-400 italic">*{rec.note}</p>
                            </div>

                            <button 
                              onClick={() => {
                                setSelectedRecycler(rec);
                                setDispatchStatus(`✅ Dispatch Locked! GreenTruck #79 has been booked and dispatched to your facility in ${location}. Your surplus lot [${title}] will be routed directly to [${rec.name}] for secondary recycling processing. Verification certificate has been generated.`);
                                
                                // Auto list on bid feed too for demo simulation purposes!
                                const newBidId = `BID-${Math.floor(100 + Math.random() * 900)}`;
                                const newBidObj = {
                                  id: newBidId,
                                  item: title,
                                  currentBid: parseInt(reservePrice),
                                  highBidder: rec.name,
                                  bidsCount: 1,
                                  timeLeft: 'Direct Route Active',
                                  category: category
                                };
                                setBids(prev => [newBidObj, ...prev]);
                              }}
                              className="px-3.5 py-1.5 bg-teal-600 text-white font-bold rounded-lg text-[10px] hover:bg-teal-700 transition-all shrink-0"
                            >
                              Direct Dispatch
                            </button>
                          </div>
                        ))
                      )}
                    </div>

                    <div className="flex gap-3 mt-6 border-t border-slate-100 pt-4">
                      <button 
                        onClick={() => {
                          // Standard list on auction behavior
                          const newBidId = `BID-${Math.floor(100 + Math.random() * 900)}`;
                          const newBidObj = {
                            id: newBidId,
                            item: title,
                            currentBid: parseInt(reservePrice),
                            highBidder: 'Reserve Price Set',
                            bidsCount: 0,
                            timeLeft: '24h 00m',
                            category: category
                          };
                          setBids(prev => [newBidObj, ...prev]);
                          setFormSuccess(true);
                          setTimeout(() => {
                            setTitle('');
                            setQuantity('');
                            setPurity('');
                            setLocation('');
                            setReservePrice('');
                            setFormSuccess(false);
                            setShowMatchModal(false);
                          }, 1000);
                        }}
                        className="flex-1 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-xl text-[10px] hover:bg-slate-100 text-center transition-all"
                      >
                        List on Public Auction Feed
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="py-6 space-y-4 text-center">
                    <div className="h-10 w-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600 mx-auto animate-bounce">
                      <Truck className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-black text-slate-900">Direct Recycling Route Booked!</h4>
                    <p className="text-xs text-slate-600 leading-relaxed px-2 bg-slate-50 border border-slate-150 p-3 rounded-lg">{dispatchStatus}</p>
                    
                    <button 
                      onClick={() => {
                        setShowMatchModal(false);
                        setTitle('');
                        setQuantity('');
                        setPurity('');
                        setLocation('');
                        setReservePrice('');
                      }}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold rounded-lg text-[10px] shadow-md hover:opacity-95 transition-all"
                    >
                      Close Match Console
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
