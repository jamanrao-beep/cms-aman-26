import React from "react";

export function CandlestickHeroVisual() {
  return (
    <div className="relative w-full h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden select-none">
      {/* Soft gradient background glow */}
      <div className="absolute inset-0 bg-radial from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Grid lines in isometric perspective */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25 dark:opacity-15 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00b074" strokeWidth="0.5" strokeDasharray="3 3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Isometric/3D Glass Candlesticks Visual */}
      <svg
        viewBox="0 0 680 400"
        className="w-full h-full max-w-[660px] filter drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Green Glass Gradient */}
          <linearGradient id="greenGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#00B074" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.95" />
          </linearGradient>

          {/* Green Glass Side */}
          <linearGradient id="greenSide" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#064E3B" stopOpacity="0.95" />
          </linearGradient>

          {/* Red Glass Gradient */}
          <linearGradient id="redGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7080" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#E63946" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#9B2226" stopOpacity="0.95" />
          </linearGradient>

          {/* Red Glass Side */}
          <linearGradient id="redSide" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D90429" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#640D14" stopOpacity="0.95" />
          </linearGradient>

          {/* Crystal Highlight */}
          <linearGradient id="glassReflection" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Trend upward curve line connecting high points */}
        <path
          d="M 60 290 Q 220 270, 360 170 T 630 80"
          stroke="#00B074"
          strokeWidth="2"
          strokeDasharray="6 4"
          opacity="0.4"
        />

        {/* CANDLE 1: Small Red (x: 80) */}
        <line x1="95" y1="230" x2="95" y2="340" stroke="#E63946" strokeWidth="2.5" />
        <rect x="85" y="260" width="20" height="60" rx="3" fill="url(#redGlass)" />
        <rect x="85" y="260" width="6" height="60" rx="2" fill="url(#glassReflection)" />

        {/* CANDLE 2: Green Upward (x: 130) */}
        <line x1="145" y1="180" x2="145" y2="310" stroke="#00B074" strokeWidth="2.5" />
        <rect x="135" y="210" width="20" height="80" rx="3" fill="url(#greenGlass)" />
        <rect x="135" y="210" width="6" height="80" rx="2" fill="url(#glassReflection)" />

        {/* CANDLE 3: Medium Red (x: 185) */}
        <line x1="200" y1="210" x2="200" y2="330" stroke="#E63946" strokeWidth="2.5" />
        <rect x="190" y="235" width="20" height="75" rx="3" fill="url(#redGlass)" />
        <rect x="190" y="235" width="6" height="75" rx="2" fill="url(#glassReflection)" />

        {/* CANDLE 4: Tall 3D Glass Green (x: 240) */}
        <line x1="262" y1="100" x2="262" y2="320" stroke="#00B074" strokeWidth="3" />
        {/* 3D front & side facets */}
        <path d="M 248 130 L 276 130 L 276 280 L 248 280 Z" fill="url(#greenGlass)" />
        <path d="M 276 130 L 286 118 L 286 268 L 276 280 Z" fill="url(#greenSide)" />
        <path d="M 248 130 L 258 118 L 286 118 L 276 130 Z" fill="#6EE7B7" opacity="0.9" />
        <line x1="250" y1="135" x2="250" y2="275" stroke="#FFFFFF" strokeWidth="2" opacity="0.75" />

        {/* Floating Tag 1 near Candle 4 */}
        <g transform="translate(230, 85)" className="animate-pulse-subtle">
          <rect x="0" y="0" width="90" height="26" rx="13" fill="#ffffff" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.12))" />
          <text x="45" y="14" fill="#0f172a" fontSize="10.5" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">22,517.40</text>
          <text x="45" y="23" fill="#00B074" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600" textAnchor="middle">▲ +0.80%</text>
        </g>

        {/* CANDLE 5: Red Medium (x: 310) */}
        <line x1="322" y1="170" x2="322" y2="300" stroke="#E63946" strokeWidth="2.5" />
        <rect x="312" y="200" width="20" height="85" rx="3" fill="url(#redGlass)" />
        <rect x="312" y="200" width="6" height="85" rx="2" fill="url(#glassReflection)" />

        {/* CANDLE 6: 3D Crystal Green (x: 360) */}
        <line x1="380" y1="130" x2="380" y2="310" stroke="#00B074" strokeWidth="3" />
        <path d="M 366 160 L 394 160 L 394 285 L 366 285 Z" fill="url(#greenGlass)" />
        <path d="M 394 160 L 404 148 L 404 273 L 394 285 Z" fill="url(#greenSide)" />
        <path d="M 366 160 L 376 148 L 404 148 L 394 160 Z" fill="#6EE7B7" opacity="0.9" />
        <line x1="368" y1="165" x2="368" y2="280" stroke="#FFFFFF" strokeWidth="2" opacity="0.75" />

        {/* CANDLE 7: Red Pullback (x: 425) */}
        <line x1="438" y1="150" x2="438" y2="280" stroke="#E63946" strokeWidth="2.5" />
        <rect x="428" y="175" width="20" height="90" rx="3" fill="url(#redGlass)" />
        <rect x="428" y="175" width="6" height="90" rx="2" fill="url(#glassReflection)" />

        {/* CANDLE 8: 3D Tall Green (x: 480) */}
        <line x1="500" y1="80" x2="500" y2="280" stroke="#00B074" strokeWidth="3" />
        <path d="M 486 115 L 514 115 L 514 265 L 486 265 Z" fill="url(#greenGlass)" />
        <path d="M 514 115 L 524 103 L 524 253 L 514 265 Z" fill="url(#greenSide)" />
        <path d="M 486 115 L 496 103 L 524 103 L 514 115 Z" fill="#6EE7B7" opacity="0.9" />
        <line x1="488" y1="120" x2="488" y2="260" stroke="#FFFFFF" strokeWidth="2" opacity="0.75" />

        {/* Floating Tag 2 near Candle 8 */}
        <g transform="translate(485, 255)">
          <rect x="0" y="0" width="85" height="24" rx="12" fill="#ffffff" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.12))" />
          <text x="42" y="13" fill="#0f172a" fontSize="10" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">48,321.90</text>
          <text x="42" y="21" fill="#00B074" fontSize="7.5" fontFamily="var(--font-mono)" fontWeight="600" textAnchor="middle">▲ +0.91%</text>
        </g>

        {/* CANDLE 9: Highest 3D Glass Green (x: 545) */}
        <line x1="565" y1="40" x2="565" y2="240" stroke="#00B074" strokeWidth="3.5" />
        <path d="M 550 70 L 580 70 L 580 230 L 550 230 Z" fill="url(#greenGlass)" />
        <path d="M 580 70 L 592 56 L 592 216 L 580 230 Z" fill="url(#greenSide)" />
        <path d="M 550 70 L 562 56 L 592 56 L 580 70 Z" fill="#A7F3D0" opacity="0.95" />
        <line x1="552" y1="75" x2="552" y2="225" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.85" />

        {/* Floating Tag 3 Top Right Peak */}
        <g transform="translate(560, 20)">
          <rect x="0" y="0" width="94" height="26" rx="13" fill="#ffffff" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.14))" />
          <text x="47" y="14" fill="#0f172a" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">74,102.32</text>
          <text x="47" y="23" fill="#00B074" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600" textAnchor="middle">▲ +0.83%</text>
        </g>

        {/* CANDLE 10: Red Final (x: 615) */}
        <line x1="626" y1="120" x2="626" y2="250" stroke="#E63946" strokeWidth="2.5" />
        <rect x="616" y="145" width="20" height="75" rx="3" fill="url(#redGlass)" />
        <rect x="616" y="145" width="6" height="75" rx="2" fill="url(#glassReflection)" />
      </svg>
    </div>
  );
}
