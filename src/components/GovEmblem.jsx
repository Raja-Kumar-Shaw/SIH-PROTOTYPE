import React from 'react';

export default function GovEmblem({ size = 44, className = "" }) {
  return (
    <div 
      className={`gov-emblem-wrapper ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
      title="Government of India - National Innovation Procurement Emblem"
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.2))' }}
      >
        <defs>
          {/* Outer Gold Rim Gradient */}
          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="30%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>

          {/* Saffron Gradient */}
          <linearGradient id="saffronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9933" />
            <stop offset="100%" stopColor="#e65100" />
          </linearGradient>

          {/* India Green Gradient */}
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e7d32" />
            <stop offset="100%" stopColor="#138808" />
          </linearGradient>

          {/* Metallic Gold Lions Gradient */}
          <linearGradient id="lionGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff3b0" />
            <stop offset="35%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>

          {/* Navy Chakra Gradient */}
          <linearGradient id="chakraBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000080" />
            <stop offset="100%" stopColor="#0a2540" />
          </linearGradient>

          {/* Subtle Inner Glow */}
          <radialGradient id="innerWhiteGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="85%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </radialGradient>
        </defs>

        {/* Outer Circular Medallion */}
        <circle cx="50" cy="50" r="48" fill="url(#goldRim)" />
        <circle cx="50" cy="50" r="45" fill="#0f2942" />

        {/* Tricolor Ring Background */}
        {/* Top Saffron Arc */}
        <path 
          d="M 12 50 A 38 38 0 0 1 88 50 Z" 
          fill="url(#saffronGrad)" 
        />
        {/* Bottom Green Arc */}
        <path 
          d="M 12 50 A 38 38 0 0 0 88 50 Z" 
          fill="url(#greenGrad)" 
        />
        
        {/* Center White Band / Shield */}
        <circle cx="50" cy="50" r="32" fill="url(#innerWhiteGlow)" stroke="#cbd5e1" strokeWidth="1" />

        {/* 24-Spoke Ashoka Chakra Motif in background of white disk */}
        <circle cx="50" cy="50" r="18" stroke="url(#chakraBlue)" strokeWidth="1.6" fill="none" opacity="0.35" />
        <circle cx="50" cy="50" r="4" fill="url(#chakraBlue)" opacity="0.4" />
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + 17 * Math.cos((i * 15 * Math.PI) / 180)}
            y2={50 + 17 * Math.sin((i * 15 * Math.PI) / 180)}
            stroke="#000080"
            strokeWidth="0.7"
            opacity="0.35"
          />
        ))}

        {/* Golden Ashoka Stambha / Lion Capital Silhouette & Heraldic Crest */}
        {/* Base Pedestal / Abacus */}
        <rect x="34" y="66" width="32" height="4" rx="1.5" fill="url(#lionGold)" />
        <rect x="37" y="62" width="26" height="3" rx="1" fill="#ffd700" />
        <circle cx="50" cy="63.5" r="1.8" fill="#000080" />

        {/* Center Lion Figure */}
        <path 
          d="M 46 38 C 45 32 47 25 50 25 C 53 25 55 32 54 38 C 56 42 56 50 54 58 L 46 58 C 44 50 44 42 46 38 Z" 
          fill="url(#lionGold)" 
        />
        {/* Center Lion Head & Mane */}
        <circle cx="50" cy="30" r="6" fill="url(#lionGold)" />
        <path d="M 44 32 C 43 28 47 22 50 22 C 53 22 57 28 56 32 C 57 37 54 41 50 41 C 46 41 43 37 44 32 Z" fill="#ffd700" />
        <circle cx="48" cy="29" r="0.8" fill="#581c87" />
        <circle cx="52" cy="29" r="0.8" fill="#581c87" />
        <polygon points="49,31 51,31 50,33" fill="#92400e" />

        {/* Left Lion Figure */}
        <path 
          d="M 40 40 C 37 35 37 30 40 28 C 43 26 45 29 45 32 C 45 38 43 45 42 58 L 38 58 C 36 50 37 44 40 40 Z" 
          fill="url(#lionGold)" 
        />
        <circle cx="41" cy="31" r="4.5" fill="#f59e0b" />
        <path d="M 38 31 C 37 28 41 26 43 28 C 44 32 42 35 39 34 Z" fill="#ffd700" />

        {/* Right Lion Figure */}
        <path 
          d="M 60 40 C 63 35 63 30 60 28 C 57 26 55 29 55 32 C 55 38 57 45 58 58 L 62 58 C 64 50 63 44 60 40 Z" 
          fill="url(#lionGold)" 
        />
        <circle cx="59" cy="31" r="4.5" fill="#f59e0b" />
        <path d="M 62 31 C 63 28 59 26 57 28 C 56 32 58 35 61 34 Z" fill="#ffd700" />

        {/* Supporting Pillars & Embellishments */}
        <path d="M 42 58 L 58 58 L 56 62 L 44 62 Z" fill="url(#lionGold)" />

        {/* Tricolor Ribbon Banner at the base: सत्यमेव जयते representation */}
        <path 
          d="M 24 74 Q 50 78 76 74 L 78 81 Q 50 85 22 81 Z" 
          fill="url(#saffronGrad)" 
        />
        <path 
          d="M 23 80 Q 50 84 77 80 L 76 83 Q 50 87 24 83 Z" 
          fill="#ffffff" 
        />
        <path 
          d="M 25 83 Q 50 87 75 83 L 73 87 Q 50 91 27 87 Z" 
          fill="url(#greenGrad)" 
        />

        {/* Laurel / Wheat Wreath Ring on border */}
        <circle cx="50" cy="50" r="46.5" stroke="url(#goldRim)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      </svg>
    </div>
  );
}
