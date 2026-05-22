import React, { useState } from 'react';
import { Menu, X, Recycle, Compass, BarChart3, ListCollapse, Users, HelpCircle, DollarSign, MessageSquare, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Recycle },
    { id: 'marketplace', label: 'Marketplace', icon: Compass },
    { id: 'recyclers', label: 'Recycler Directory', icon: Users },
    { id: 'dashboard', label: 'ESG Dashboard', icon: BarChart3 },
    { id: 'listings', label: 'Live Listings', icon: ListCollapse },
    { id: 'about', label: 'About', icon: HelpCircle },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-emerald-500/10 bg-dark-900/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-emerald-600 to-cyan-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Recycle className="h-6 w-6 text-white animate-spin-slow" style={{ animationDuration: '12s' }} />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-emerald-400 bg-clip-text text-transparent">
              EcoLoop
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 shadow-[inset_0_0_12px_rgba(16,185,129,0.08)] border border-emerald-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setCurrentPage('auth')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="relative group overflow-hidden rounded-lg p-[1px] transition-all duration-300 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative px-4 py-2 rounded-[7px] bg-dark-900 text-sm font-semibold text-emerald-400 transition-colors group-hover:bg-transparent group-hover:text-dark-900">
                Book B2B Demo
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-emerald-500/10 hover:text-slate-200 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-emerald-500/10 bg-dark-950/95 backdrop-blur-2xl">
          <div className="space-y-1 px-2 pb-4 pt-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-400 border-l-4 border-emerald-500'
                      : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </button>
              );
            })}
            <div className="mt-4 pt-4 border-t border-emerald-500/10 px-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setCurrentPage('auth');
                  setIsOpen(false);
                }}
                className="w-full text-center py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 text-sm font-medium text-slate-200 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  setIsOpen(false);
                }}
                className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-sm font-semibold text-white transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
              >
                Book B2B Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
