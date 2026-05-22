import React, { useState, useEffect } from 'react';
import { ListCollapse, Plus, Clock, Users, ArrowUpRight, CheckCircle2, AlertTriangle, ShieldCheck, Scale } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface WasteListingsProps {
  setCurrentPage: (page: string) => void;
}

export const WasteListings: React.FC<WasteListingsProps> = ({ setCurrentPage }) => {
  const [bids, setBids] = useState([
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

    setFormSuccess(true);
    
    // Add mock bid item
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

    // Clear form after 2 seconds
    setTimeout(() => {
      setTitle('');
      setQuantity('');
      setPurity('');
      setLocation('');
      setReservePrice('');
      setFormSuccess(false);
    }, 2500);
  };

  return (
    <div className="relative z-10 pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Radial overlay */}
      <div className="absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[90px] pointer-events-none" />

      {/* Page Title */}
      <div className="text-left mb-10">
        <div className="flex items-center gap-2 mb-2">
          <ListCollapse className="h-5 w-5 text-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Trading Ledger</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Active Lot Auction Bidding
        </h1>
        <p className="text-sm text-slate-400 mt-2">
          Submit new industrial lots or participate in dynamic localized RFPs with real-time price matching.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: ACTIVE BIDDING STREAM */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-left">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-slate-300">Live Active Lots Bidding</h3>
              <span className="text-[10px] text-emerald-400 font-mono font-semibold flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                Updating Live
              </span>
            </div>

            <div className="space-y-4">
              {bids.map((bid) => (
                <div 
                  key={bid.id}
                  className="p-5 rounded-xl border border-slate-800 bg-dark-900/60 hover:border-emerald-500/10 transition-all flex flex-col sm:flex-row justify-between gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-emerald-400 font-mono bg-emerald-950/40 border border-emerald-500/15 px-1.5 py-0.5 rounded">
                        {bid.id}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                        <Clock className="h-3 w-3 text-emerald-500" />
                        {bid.timeLeft}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug mt-1">{bid.item}</h4>
                    
                    <div className="flex gap-4 text-[11px] text-slate-500 mt-2 font-medium">
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {bid.bidsCount} Bidders Active
                      </span>
                      <span className="text-slate-400">High: <strong className="text-slate-350">{bid.highBidder}</strong></span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col justify-between sm:justify-start items-end gap-2 shrink-0 sm:text-right">
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-widest text-slate-500">Current High RFP Bid</p>
                      <p className="text-lg font-black text-white mt-0.5">₹{bid.currentBid.toLocaleString('en-IN')}</p>
                      <p className="text-[10px] text-emerald-400 font-mono font-semibold">+₹5,000 Next Increment</p>
                    </div>

                    <button 
                      onClick={() => alert(`Bid of ₹${(bid.currentBid + 5000).toLocaleString('en-IN')} submitted successfully for ${bid.item}!`)}
                      className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-dark-900 font-bold rounded-lg text-xs transition-all"
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
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-15 blur-lg" />
          <GlowCard className="relative text-left p-6" glowColor="cyan">
            <h3 className="text-base font-bold text-white mb-1">Create Material RFP Listing</h3>
            <p className="text-xs text-slate-400 mb-5">List surplus or byproduct volumes to receive qualified bids from certified processors.</p>

            <form onSubmit={handleCreateListing} className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Lot Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. 15 Tons Recycled PP Shreds"
                  className="w-full bg-dark-900 border border-slate-800 rounded-lg p-2.5 text-white placeholder-slate-650 focus:outline-none focus:border-emerald-500/50"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Industrial Stream</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-dark-900 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500/50"
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
                    className="w-full bg-dark-900 border border-slate-800 rounded-lg p-2.5 text-white placeholder-slate-650 focus:outline-none focus:border-emerald-500/50"
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
                    className="w-full bg-dark-900 border border-slate-800 rounded-lg p-2.5 text-white placeholder-slate-650 focus:outline-none focus:border-emerald-500/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Reserve Base Price (₹/Ton)</label>
                  <input 
                    type="number" 
                    value={reservePrice}
                    onChange={(e) => setReservePrice(e.target.value)}
                    placeholder="e.g. 75000"
                    className="w-full bg-dark-900 border border-slate-800 rounded-lg p-2.5 text-white placeholder-slate-650 focus:outline-none focus:border-emerald-500/50"
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
                  className="w-full bg-dark-900 border border-slate-800 rounded-lg p-2.5 text-white placeholder-slate-650 focus:outline-none focus:border-emerald-500/50"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-dark-900 font-bold rounded-lg text-xs transition-all hover:opacity-90 shadow-md flex items-center justify-center gap-1.5"
              >
                Create Digital B2B RFP
                <Plus className="h-4 w-4" />
              </button>

              {formSuccess && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg text-[11px] font-semibold text-center flex items-center justify-center gap-1.5 animate-pulse mt-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  RFP Listed Successfully! Added to Live Bidding Feed.
                </div>
              )}
            </form>
          </GlowCard>
        </div>
      </div>
    </div>
  );
};
