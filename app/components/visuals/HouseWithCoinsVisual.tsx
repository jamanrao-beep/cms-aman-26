import React from "react";

export function HouseWithCoinsVisual({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 380 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Suburban house with coin stack and plant"
    >
      <defs>
        <linearGradient id="houseWall" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>
        <linearGradient id="roofRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4D4D" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
        <linearGradient id="roofSide" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="windowBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="goldCoinF" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
        <linearGradient id="goldCoinE" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A16207" />
          <stop offset="100%" stopColor="#713F12" />
        </linearGradient>
        <linearGradient id="leafGradH" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="bgHills" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D1FAE5" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#A7F3D0" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Gentle background green hill */}
      <ellipse cx="200" cy="190" rx="190" ry="60" fill="url(#bgHills)" />

      {/* House structure */}
      <g transform="translate(140, 60)">
        {/* Main Body */}
        <rect x="0" y="55" width="105" height="75" rx="3" fill="url(#houseWall)" stroke="#E2E8F0" strokeWidth="2" />
        
        {/* Front Door */}
        <rect x="42" y="88" width="22" height="42" rx="2" fill="#047857" />
        <circle cx="47" cy="110" r="1.5" fill="#FDE047" />

        {/* Windows */}
        <rect x="12" y="70" width="20" height="20" rx="2" fill="url(#windowBlue)" stroke="#E2E8F0" strokeWidth="1.5" />
        <line x1="22" y1="70" x2="22" y2="90" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="12" y1="80" x2="32" y2="80" stroke="#FFFFFF" strokeWidth="1.5" />

        <rect x="74" y="70" width="20" height="20" rx="2" fill="url(#windowBlue)" stroke="#E2E8F0" strokeWidth="1.5" />
        <line x1="84" y1="70" x2="84" y2="90" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="74" y1="80" x2="94" y2="80" stroke="#FFFFFF" strokeWidth="1.5" />

        {/* Chimney */}
        <rect x="80" y="20" width="14" height="30" fill="#DC2626" />
        <rect x="77" y="17" width="20" height="4" rx="1" fill="#991B1B" />

        {/* Red Gable Roof */}
        <polygon points="-12,56 52,10 118,56" fill="url(#roofRed)" />
        <polygon points="52,10 118,56 112,60 52,16" fill="url(#roofSide)" />
      </g>

      {/* Garden Bush / Trees beside house */}
      <circle cx="125" cy="155" r="18" fill="#10B981" />
      <circle cx="112" cy="162" r="14" fill="#059669" />
      <circle cx="138" cy="162" r="12" fill="#34D399" />

      {/* Coin Stacks on Right */}
      <g transform="translate(265, 125)">
        {/* Stack 1 */}
        <path d="M 0 10 C 0 5, 14 0, 24 0 C 34 0, 48 5, 48 10 L 48 22 C 48 27, 34 32, 24 32 C 14 32, 0 27, 0 22 Z" fill="url(#goldCoinE)" />
        <ellipse cx="24" cy="10" rx="24" ry="7" fill="url(#goldCoinF)" />
        <path d="M 0 2 C 0 -3, 14 -8, 24 -8 C 34 -8, 48 -3, 48 2 L 48 10 C 48 15, 34 20, 24 20 C 14 20, 0 15, 0 10 Z" fill="url(#goldCoinE)" />
        <ellipse cx="24" cy="2" rx="24" ry="7" fill="url(#goldCoinF)" />
        <path d="M 0 -6 C 0 -11, 14 -16, 24 -16 C 34 -16, 48 -11, 48 -6 L 48 2 C 48 7, 34 12, 24 12 C 14 12, 0 7, 0 2 Z" fill="url(#goldCoinE)" />
        <ellipse cx="24" cy="-6" rx="24" ry="7" fill="url(#goldCoinF)" />
      </g>

      <g transform="translate(290, 135)">
        {/* Stack 2 */}
        <path d="M 0 10 C 0 5, 14 0, 24 0 C 34 0, 48 5, 48 10 L 48 25 C 48 30, 34 35, 24 35 C 14 35, 0 30, 0 25 Z" fill="url(#goldCoinE)" />
        <ellipse cx="24" cy="10" rx="24" ry="7" fill="url(#goldCoinF)" />
        <path d="M 0 -2 C 0 -7, 14 -12, 24 -12 C 34 -12, 48 -7, 48 -2 L 48 10 C 48 15, 34 20, 24 20 C 14 20, 0 15, 0 10 Z" fill="url(#goldCoinE)" />
        <ellipse cx="24" cy="-2" rx="24" ry="7" fill="url(#goldCoinF)" />
      </g>

      {/* Fresh Green Sprouting Plant */}
      <g transform="translate(285, 35)">
        <path d="M 25 110 Q 25 60, 20 20" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
        <path d="M 23 80 C 5 80, -5 65, 2 50 C 15 55, 22 68, 23 80 Z" fill="url(#leafGradH)" />
        <path d="M 24 60 C 42 60, 52 48, 48 35 C 35 38, 28 48, 24 60 Z" fill="url(#leafGradH)" />
        <path d="M 21 35 C 8 20, 10 5, 20 -2 C 25 8, 23 22, 21 35 Z" fill="url(#leafGradH)" />
        <path d="M 20 20 C 32 10, 42 0, 36 -10 C 25 -2, 22 8, 20 20 Z" fill="url(#leafGradH)" />
      </g>

      {/* Small floating caption banner */}
      <g transform="translate(325, 40)">
        <text x="0" y="0" fill="#0f172a" fontSize="10" fontWeight="600" fontFamily="var(--font-serif)">Bigger goals</text>
        <text x="0" y="12" fill="#0f172a" fontSize="10" fontWeight="600" fontFamily="var(--font-serif)">feel closer</text>
        <text x="0" y="24" fill="#0f172a" fontSize="10" fontWeight="600" fontFamily="var(--font-serif)">with a clearer</text>
        <text x="0" y="36" fill="#00B074" fontSize="10" fontWeight="700" fontFamily="var(--font-serif)">plan today.</text>
      </g>
    </svg>
  );
}
