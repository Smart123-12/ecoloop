import React, { useState } from 'react';
import { Recycle, ArrowRight, ShieldCheck, Mail, Lock, Building, CheckCircle2 } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface AuthProps {
  setCurrentPage: (page: string) => void;
}

export const Auth: React.FC<AuthProps> = ({ setCurrentPage }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setCurrentPage('dashboard');
    }, 2000);
  };

  return (
    <div className="relative z-10 pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* LEFT COLUMN: BRAND HIGHLIGHTS */}
        <div className="hidden lg:col-span-6 lg:flex flex-col text-left gap-6">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-cyan-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Recycle className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">EcoLoop Platform</span>
          </div>

          <h2 className="text-3xl font-extrabold text-white mt-4">
            India's Leading Industrial <br />
            Circular Sustainability Ledger.
          </h2>

          <p className="text-sm text-slate-450 leading-relaxed">
            Register your plant assets, sync byproduct outputs, track real-time recycling logs, and generate compliant Scope 3 environmental certificates on autopilot.
          </p>

          <div className="space-y-4 mt-4">
            {[
              'Direct access to 1,200+ verified recycling plants',
              'Automated BRSR core reporting sheets',
              'Real-time price estimations and bidding widgets'
            ].map((bullet, idx) => (
              <div key={idx} className="flex gap-2 text-xs text-slate-300 font-semibold items-center">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                {bullet}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: LOGIN / REGISTER INPUT */}
        <div className="lg:col-span-6 relative w-full max-w-md mx-auto">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-15 blur-lg" />
          <GlowCard className="relative p-8 text-left" glowColor="green">
            <h3 className="text-base font-extrabold text-white mb-2">
              {isRegister ? 'Register Your Plant Assets' : 'Access Sustainability Console'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {isRegister ? 'Set up your corporate profile to list material lots.' : 'Sign in to access your active marketplace contracts and ESG metrics.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4.5 text-xs">
              {isRegister && (
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Company Registered Name</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Patel Industries Ltd"
                      className="w-full pl-9.5 pr-3 py-2.5 rounded-lg bg-dark-900 border border-slate-800 text-white placeholder-slate-650 focus:outline-none focus:border-emerald-500/50"
                      required
                    />
                    <Building className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Registered Work Email</label>
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. partner@company.com"
                    className="w-full pl-9.5 pr-3 py-2.5 rounded-lg bg-dark-900 border border-slate-800 text-white placeholder-slate-650 focus:outline-none focus:border-emerald-500/50"
                    required
                  />
                  <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Console Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9.5 pr-3 py-2.5 rounded-lg bg-dark-900 border border-slate-800 text-white placeholder-slate-650 focus:outline-none focus:border-emerald-500/50"
                    required
                  />
                  <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-dark-900 font-bold rounded-lg text-xs transition-all hover:opacity-90 shadow-md flex items-center justify-center gap-1.5"
              >
                {isRegister ? 'Create Account & Begin' : 'Access Dashboard'}
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => setIsRegister(!isRegister)}
                  className="text-[11px] text-slate-450 hover:text-emerald-400 font-semibold"
                >
                  {isRegister ? 'Already registered? Sign In instead' : 'New factory or recycler? Register Assets'}
                </button>
              </div>

              {success && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/35 text-emerald-400 rounded-lg text-[11px] font-semibold text-center flex items-center justify-center gap-1.5 animate-pulse mt-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Credentials Validated! Directing to Dashboard Console...
                </div>
              )}
            </form>
          </GlowCard>
        </div>
      </div>
    </div>
  );
};
