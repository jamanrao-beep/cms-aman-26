import React from "react";

export function SkyscraperCandlestickVisual({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 320"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Financial district high-rise towers with overlaid candlestick chart"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="60%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        <linearGradient id="towerGlass1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0369A1" stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id="towerGlass2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0F766E" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#2DD4BF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#115E59" stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id="sunGlow" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Sky Background */}
      <rect width="100%" height="100%" fill="url(#skyGrad)" rx="16" />

      {/* Sunset/Atmospheric glow on right */}
      <circle cx="700" cy="160" r="140" fill="url(#sunGlow)" />

      {/* Skyscraper Silhouettes */}
      {/* Tower 1 (Left background) */}
      <rect x="40" y="80" width="85" height="240" fill="#1E293B" opacity="0.9" />
      {/* Tower 2 (Diagonal facade) */}
      <rect x="150" y="50" width="120" height="270" fill="url(#towerGlass1)" />
      {/* Tower 3 (Center tall tower) */}
      <rect x="300" y="25" width="140" height="295" fill="url(#towerGlass2)" />
      {/* Tower 4 (Right tower) */}
      <rect x="470" y="60" width="110" height="260" fill="url(#towerGlass1)" />
      {/* Tower 5 (Far right) */}
      <rect x="610" y="90" width="90" height="230" fill="#1E293B" opacity="0.9" />

      {/* Architectural Window Grid Texture */}
      <g stroke="#FFFFFF" strokeWidth="0.75" opacity="0.25">
        {[70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270].map((y) => (
          <line key={y} x1="150" y1={y} x2="270" y2={y} />
        ))}
        {[45, 65, 85, 105, 125, 145, 165, 185, 205, 225, 245, 265, 285].map((y) => (
          <line key={y} x1="300" y1={y} x2="440" y2={y} />
        ))}
        {[80, 100, 120, 140, 160, 180, 200, 220, 240, 260].map((y) => (
          <line key={y} x1="470" y1={y} x2="580" y2={y} />
        ))}
      </g>

      {/* OVERLAID CANDLESTICK CHART CURVE */}
      <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.6))">
        {/* Trend line */}
        <path
          d="M 20 220 Q 140 240, 260 170 T 500 130 T 740 180"
          stroke="#00B074"
          strokeWidth="3"
          strokeDasharray="4 2"
          opacity="0.85"
        />

        {/* Candlesticks sequence */}
        {[
          { x: 70, y: 220, h: 40, up: true },
          { x: 110, y: 200, h: 30, up: true },
          { x: 150, y: 215, h: 25, up: false },
          { x: 190, y: 180, h: 45, up: true },
          { x: 230, y: 190, h: 30, up: false },
          { x: 270, y: 150, h: 55, up: true },
          { x: 310, y: 140, h: 35, up: true },
          { x: 350, y: 160, h: 40, up: false },
          { x: 390, y: 120, h: 60, up: true },
          { x: 430, y: 110, h: 45, up: true },
          { x: 470, y: 135, h: 30, up: false },
          { x: 510, y: 125, h: 40, up: true },
          { x: 550, y: 145, h: 50, up: false },
          { x: 590, y: 135, h: 45, up: true },
          { x: 630, y: 160, h: 40, up: false },
          { x: 670, y: 175, h: 35, up: false },
          { x: 710, y: 160, h: 45, up: true },
        ].map((c, i) => (
          <g key={i}>
            <line
              x1={c.x + 6}
              y1={c.y - 12}
              x2={c.x + 6}
              y2={c.y + c.h + 12}
              stroke={c.up ? "#00B074" : "#E63946"}
              strokeWidth="2"
            />
            <rect
              x={c.x}
              y={c.y}
              width="12"
              height={c.h}
              rx="2"
              fill={c.up ? "#00B074" : "#E63946"}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
