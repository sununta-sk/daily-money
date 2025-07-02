import React from 'react';

const WhaleLogo = ({ className = "w-8 h-8" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="14" rx="8" ry="4" fill="#93C5FD"/>
      <path d="M4 14 Q2 12 4 10 Q6 12 4 14" fill="#93C5FD"/>
      <ellipse cx="12" cy="14" rx="5" ry="2" fill="#DBEAFE"/>
      <circle cx="10" cy="12" r="1" fill="#1E40AF"/>
      <path d="M10 15 Q12 16 14 15" stroke="#1E40AF" strokeWidth="0.5" fill="none"/>
      <path d="M12 8 Q12 6 12 4" stroke="#93C5FD" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="12" cy="4" r="0.5" fill="#93C5FD"/>
    </svg>
  );
};

export default WhaleLogo; 