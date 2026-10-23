import React from "react";

export function LearningModuleBooksVisual({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="3D Stack of books with rupee coin and plant"
    >
      <defs>
        {/* Book 1 (Bottom Green Book) */}
        <linearGradient id="bookGreenCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="bookPages" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Book 2 (Middle Red Book) */}
        <linearGradient id="bookRedCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#B91C1C" />
        </linearGradient>

        {/* Book 3 (Top Emerald Book) */}
        <linearGradient id="bookTopCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Gold Coin */}
        <linearGradient id="goldFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
        <linearGradient id="goldEdge" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A16207" />
          <stop offset="100%" stopColor="#713F12" />
        </linearGradient>

        {/* Sprout Leaves */}
        <linearGradient id="sproutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="170" cy="210" rx="130" ry="22" fill="#047857" opacity="0.12" />

      {/* Book 1 (Bottom Green Book - Isometric) */}
      <g transform="translate(40, 135)">
        {/* Pages block */}
        <path d="M 30 18 L 190 28 L 190 48 L 30 38 Z" fill="url(#bookPages)" />
        {/* Front Cover spine & edge */}
        <path d="M 20 12 L 180 22 L 175 48 L 15 38 Z" fill="url(#bookGreenCover)" />
        <path d="M 15 38 L 175 48 L 170 56 L 10 46 Z" fill="#065F46" />
        <path d="M 10 46 L 15 38 L 20 12 L 15 14 Z" fill="#047857" />
      </g>

      {/* Book 2 (Middle Red Book) */}
      <g transform="translate(50, 105)">
        <path d="M 28 16 L 185 25 L 185 42 L 28 33 Z" fill="url(#bookPages)" />
        <path d="M 20 10 L 175 19 L 170 42 L 15 33 Z" fill="url(#bookRedCover)" />
        <path d="M 15 33 L 170 42 L 165 49 L 10 40 Z" fill="#991B1B" />
        <path d="M 10 40 L 15 33 L 20 10 L 15 12 Z" fill="#7F1D1D" />
      </g>

      {/* Book 3 (Top Teal/Green Book) */}
      <g transform="translate(60, 75)">
        <path d="M 25 14 L 175 22 L 175 38 L 25 30 Z" fill="url(#bookPages)" />
        <path d="M 18 8 L 165 16 L 160 38 L 13 30 Z" fill="url(#bookTopCover)" />
        <path d="M 13 30 L 160 38 L 155 45 L 8 37 Z" fill="#065F46" />
        <path d="M 8 37 L 13 30 L 18 8 L 13 10 Z" fill="#047857" />
      </g>

      {/* Plant sprouting from behind the books */}
      <g transform="translate(200, 30)">
        <path d="M 30 90 Q 35 45, 45 10" stroke="#047857" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 32 75 C 10 75, -5 60, 2 40 C 18 45, 30 58, 32 75 Z" fill="url(#sproutGrad)" />
        <path d="M 36 60 C 58 60, 75 48, 70 30 C 54 35, 42 48, 36 60 Z" fill="url(#sproutGrad)" />
        <path d="M 40 35 C 25 20, 28 5, 40 -5 C 46 8, 44 24, 40 35 Z" fill="url(#sproutGrad)" />
        <path d="M 45 15 C 60 5, 72 -5, 65 -15 C 52 -5, 48 8, 45 15 Z" fill="url(#sproutGrad)" />
      </g>

      {/* Gold Rupee Coin Leaning in front */}
      <g transform="translate(195, 125)">
        {/* Coin edge/thickness */}
        <ellipse cx="44" cy="46" rx="36" ry="36" fill="url(#goldEdge)" />
        {/* Coin face */}
        <ellipse cx="40" cy="42" rx="36" ry="36" fill="url(#goldFace)" />
        <ellipse cx="40" cy="42" rx="31" ry="31" fill="none" stroke="#CA8A04" strokeWidth="2" strokeDasharray="3 2" />
        {/* Rupee Symbol ₹ */}
        <text
          x="40"
          y="54"
          fill="#854D0E"
          fontSize="36"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          ₹
        </text>
      </g>

      {/* Small extra coin stack on right */}
      <g transform="translate(170, 185)">
        <ellipse cx="20" cy="18" rx="18" ry="7" fill="url(#goldEdge)" />
        <ellipse cx="20" cy="14" rx="18" ry="7" fill="url(#goldFace)" />
        <ellipse cx="20" cy="10" rx="18" ry="7" fill="url(#goldEdge)" />
        <ellipse cx="20" cy="6" rx="18" ry="7" fill="url(#goldFace)" />
      </g>
    </svg>
  );
}
