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
    green: 'hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:border-blue-500/40',
    cyan: 'hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)] hover:border-sky-500/40',
    lime: 'hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] hover:border-indigo-500/40'
  };

  return (
    <div className={`relative rounded-xl border border-blue-500/10 bg-white p-6 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white ${glowShadowMap[glowColor]} ${className}`}>
      {/* Dynamic top gradient highlight bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
      {children}
    </div>
  );
};
