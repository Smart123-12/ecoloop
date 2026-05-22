import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, MapPin, CheckCircle2, Send, Clock, ShieldAlert } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('manager');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) return;

    setSuccess(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="relative z-10 pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background overlay */}
      <div className="absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-teal-500/5 blur-[90px] pointer-events-none" />

      {/* Page Title */}
      <div className="text-left mb-10">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="h-5 w-5 text-teal-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Collaboration</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Book B2B Consultation Demo
        </h1>
        <p className="text-sm text-slate-650 mt-2">
          Align your plant's waste streams with verified circular routes. Request an RFP integration from our expert technical engineers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        {/* LEFT COLUMN: DEMO REQUEST FORM */}
        <div className="lg:col-span-7 relative">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-teal-500 to-teal-500 opacity-15 blur-lg" />
          <GlowCard className="relative p-8" glowColor="green">
            <h3 className="text-base font-bold text-slate-900 mb-2">Technical RFP Integration Request</h3>
            <p className="text-xs text-slate-655 mb-6">Complete the briefing parameter list below to schedule your circular stream audit.</p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Corporate Officer Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Smit Patel"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-850 placeholder-slate-400 focus:outline-none focus:border-teal-500/40"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Work Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. smit@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-850 placeholder-slate-400 focus:outline-none focus:border-teal-500/40"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Company Registered Name</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Patel Steel Units"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-850 placeholder-slate-400 focus:outline-none focus:border-teal-500/40"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Your Operational Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-700 focus:outline-none focus:border-teal-500/40"
                  >
                    <option value="manager">Sustainability Manager</option>
                    <option value="director">Operations Director</option>
                    <option value="purchasing">Raw Material Procurement</option>
                    <option value="recycler">Processing Plant Owner</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Material Stream Details & Volume</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Describe byproducts moisture levels, monthly surplus tons, and target circular expectations..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500/40 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold rounded-lg text-xs transition-all hover:opacity-90 shadow-[0_4px_15px_rgba(20,184,166,0.15)] flex items-center justify-center gap-1.5"
              >
                Send Request Details
                <Send className="h-3.5 w-3.5" />
              </button>

              {success && (
                <div className="p-3 bg-teal-50 border border-teal-200 text-teal-600 rounded-lg text-[11px] font-semibold text-center flex items-center justify-center gap-1.5 animate-pulse mt-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Consulation brief queued! An operations engineer will contact you shortly.
                </div>
              )}
            </form>
          </GlowCard>
        </div>

        {/* RIGHT COLUMN: INFRASTRUCTURE INFO */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(148,163,184,0.04)]">
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Corporate Hubs</h3>
            
            <ul className="space-y-4">
              <li className="flex gap-3 items-start text-xs">
                <MapPin className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Main Headquarters</h4>
                  <p className="text-slate-600 mt-1">Level 8, Climate Innovation Center, BKC, Mumbai, MH - 400051</p>
                </div>
              </li>
              <li className="flex gap-3 items-start text-xs">
                <Phone className="h-4.5 w-4.5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Corporate Board Lines</h4>
                  <p className="text-slate-600 mt-0.5">+91 (022) 5892-3847</p>
                </div>
              </li>
              <li className="flex gap-3 items-start text-xs">
                <Mail className="h-4.5 w-4.5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Partnership Inquiries</h4>
                  <p className="text-slate-600 mt-0.5">partner@ecoloop.tech</p>
                </div>
              </li>
              <li className="flex gap-3 items-start text-xs">
                <Clock className="h-4.5 w-4.5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">SLA Response Window</h4>
                  <p className="text-slate-600 mt-0.5">Less than 4 business hours for verified plants.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
