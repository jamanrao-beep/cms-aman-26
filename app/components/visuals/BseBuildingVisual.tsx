import React from "react";

export function BseBuildingVisual({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stock exchange iconic tower and digital ticker"
    >
      <defs>
        <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0B1311" />
          <stop offset="100%" stopColor="#152620" />
        </linearGradient>
        <linearGradient id="towerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2A3D36" />
          <stop offset="50%" stopColor="#3F5A50" />
          <stop offset="100%" stopColor="#1E2D27" />
        </linearGradient>
        <linearGradient id="tickerGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#nightSky)" rx="8" />

      {/* Background stars / ambient light points */}
      <circle cx="40" cy="30" r="1" fill="#FFFFFF" opacity="0.4" />
      <circle cx="120" cy="20" r="1.5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="280" cy="40" r="1" fill="#FFFFFF" opacity="0.4" />

      {/* Adjacent skyline silhouettes */}
      <rect x="20" y="90" width="45" height="130" fill="#15221D" />
      <rect x="75" y="70" width="55" height="150" fill="#1C2E27" />
      <rect x="230" y="80" width="70" height="140" fill="#182721" />

      {/* Main Phiroze Jeejeebhoy BSE-style Rotunda / Tower */}
      <path
        d="M 140 220 L 140 60 C 140 45, 175 35, 200 35 C 225 35, 240 45, 240 60 L 240 220 Z"
        fill="url(#towerGrad)"
      />

      {/* Curved ribbed architectural louvers on tower */}
      {[50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200].map((y, i) => (
        <path
          key={i}
          d={`M 142 ${y} Q 190 ${y - 4}, 238 ${y}`}
          stroke="#4E7366"
          strokeWidth="1.5"
          opacity="0.8"
        />
      ))}

      {/* Window glow grids */}
      <g opacity="0.75">
        {[70, 85, 100, 115, 130, 145, 160].map((y, row) => (
          <g key={row}>
            <rect x="155" y={y} width="6" height="4" rx="0.5" fill="#FDE047" opacity={row % 2 === 0 ? 0.9 : 0.4} />
            <rect x="168" y={y} width="6" height="4" rx="0.5" fill="#34D399" opacity="0.7" />
            <rect x="182" y={y} width="6" height="4" rx="0.5" fill="#FDE047" opacity={row % 3 === 0 ? 0.8 : 0.3} />
            <rect x="195" y={y} width="6" height="4" rx="0.5" fill="#FFFFFF" opacity="0.6" />
            <rect x="208" y={y} width="6" height="4" rx="0.5" fill="#34D399" opacity={row % 2 === 1 ? 0.8 : 0.2} />
            <rect x="220" y={y} width="6" height="4" rx="0.5" fill="#FDE047" opacity="0.5" />
          </g>
        ))}
      </g>

      {/* Digital Ticker Ring around mid-level */}
      <rect x="135" y="145" width="110" height="14" rx="2" fill="#06120D" stroke="#00B074" strokeWidth="1" />
      <circle cx="145" cy="152" r="2.5" fill="#10B981" />
      <line x1="155" y1="152" x2="195" y2="152" stroke="#34D399" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="205" cy="152" r="2.5" fill="#EF4444" />
      <line x1="215" y1="152" x2="238" y2="152" stroke="#EF4444" strokeWidth="2" strokeDasharray="2 2" />

      {/* Rooftop antenna and signal beacon */}
      <line x1="190" y1="35" x2="190" y2="10" stroke="#94A3B8" strokeWidth="2" />
      <circle cx="190" cy="10" r="3" fill="#EF4444" className="animate-pulse" />
    </svg>
  );
}
