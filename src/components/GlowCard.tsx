import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'green' | 'cyan' | 'lime';
}

export const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'green' 
}) => {
  const glowShadowMap = {
    green: 'hover:shadow-[0_8px_30px_rgba(20,184,166,0.15)] hover:border-teal-500/40',
    cyan: 'hover:shadow-[0_8px_30px_rgba(45,212,191,0.15)] hover:border-teal-400/40',
    lime: 'hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/40'
  };

  return (
    <div className={`relative rounded-xl border border-teal-500/10 bg-white p-6 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white ${glowShadowMap[glowColor]} ${className}`}>
      {/* Dynamic top gradient highlight bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-teal-500/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
      {children}
    </div>
  );
};
