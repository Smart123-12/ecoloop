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
    green: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:border-emerald-500/40',
    cyan: 'hover:shadow-[0_0_25px_rgba(6,180,210,0.25)] hover:border-cyan-500/40',
    lime: 'hover:shadow-[0_0_25px_rgba(132,204,22,0.25)] hover:border-lime-500/40'
  };

  return (
    <div className={`relative rounded-xl border border-emerald-500/10 bg-dark-800/45 p-6 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-dark-800/70 ${glowShadowMap[glowColor]} ${className}`}>
      {/* Dynamic top gradient highlight bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
      {children}
    </div>
  );
};
