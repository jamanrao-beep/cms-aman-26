import React from "react";

export function PlantOnCoinsVisual({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 280"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Investment growth plant on coin stack"
    >
      <defs>
        {/* Background bars gradient */}
        <linearGradient id="barGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.8" />
        </linearGradient>

        {/* Coin gradients */}
        <linearGradient id="coinFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="coinSide" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>

        <linearGradient id="goldCoinFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="goldCoinSide" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        {/* Leaf gradient */}
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>

        <linearGradient id="leafGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* Background Growth Bar Chart columns */}
      <rect x="180" y="140" width="18" height="90" rx="4" fill="url(#barGrad)" />
      <rect x="205" y="110" width="18" height="120" rx="4" fill="url(#barGrad)" />
      <rect x="230" y="80" width="18" height="150" rx="4" fill="url(#barGrad)" />
      <rect x="255" y="50" width="18" height="180" rx="4" fill="url(#barGrad)" />

      {/* Upward Curved Red Trend Arrow */}
      <path
        d="M 160 170 Q 210 160, 248 85"
        stroke="#E63946"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <polygon points="252,75 254,92 240,84" fill="#E63946" />

      {/* Stacks of Coins */}
      {/* Stack 1: Left Small Stack */}
      <g transform="translate(110, 195)">
        {/* Coin 1 */}
        <path d="M 0 10 C 0 5, 20 0, 36 0 C 52 0, 72 5, 72 10 L 72 18 C 72 23, 52 28, 36 28 C 20 28, 0 23, 0 18 Z" fill="url(#coinSide)" />
        <ellipse cx="36" cy="10" rx="36" ry="10" fill="url(#coinFace)" />
        {/* Coin 2 */}
        <path d="M 0 -2 C 0 -7, 20 -12, 36 -12 C 52 -12, 72 -7, 72 -2 L 72 6 C 72 11, 52 16, 36 16 C 20 16, 0 11, 0 6 Z" fill="url(#coinSide)" />
        <ellipse cx="36" cy="-2" rx="36" ry="10" fill="url(#coinFace)" />
        {/* Coin 3 */}
        <path d="M 0 -14 C 0 -19, 20 -24, 36 -24 C 52 -24, 72 -19, 72 -14 L 72 -6 C 72 -1, 52 4, 36 4 C 20 4, 0 -1, 0 -6 Z" fill="url(#coinSide)" />
        <ellipse cx="36" cy="-14" rx="36" ry="10" fill="url(#coinFace)" />
      </g>

      {/* Stack 2: Main Center Tall Stack */}
      <g transform="translate(140, 210)">
        {/* Coin bottom */}
        <path d="M 0 15 C 0 8, 25 2, 45 2 C 65 2, 90 8, 90 15 L 90 26 C 90 33, 65 39, 45 39 C 25 39, 0 33, 0 26 Z" fill="url(#coinSide)" />
        <ellipse cx="45" cy="15" rx="45" ry="13" fill="url(#coinFace)" />

        {/* Coin middle */}
        <path d="M 0 0 C 0 -7, 25 -13, 45 -13 C 65 -13, 90 -7, 90 0 L 90 11 C 90 18, 65 24, 45 24 C 25 24, 0 18, 0 11 Z" fill="url(#coinSide)" />
        <ellipse cx="45" cy="0" rx="45" ry="13" fill="url(#coinFace)" />

        {/* Coin top (base for plant) */}
        <path d="M 0 -15 C 0 -22, 25 -28, 45 -28 C 65 -28, 90 -22, 90 -15 L 90 -4 C 90 3, 65 9, 45 9 C 25 9, 0 3, 0 -4 Z" fill="url(#coinSide)" />
        <ellipse cx="45" cy="-15" rx="45" ry="13" fill="url(#coinFace)" />
        <ellipse cx="45" cy="-15" rx="32" ry="9" fill="#047857" opacity="0.4" />
      </g>

      {/* Growing Plant Stem & Lush Leaves */}
      {/* Main curved central stem */}
      <path
        d="M 185 190 Q 186 120, 184 75"
        stroke="#047857"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Leaf 1 (Left Lower) */}
      <path
        d="M 184 165 C 160 165, 140 148, 145 130 C 160 135, 178 145, 184 165 Z"
        fill="url(#leafGrad)"
      />
      {/* Leaf 2 (Right Lower) */}
      <path
        d="M 185 145 C 210 145, 228 128, 222 110 C 206 115, 192 128, 185 145 Z"
        fill="url(#leafGrad2)"
      />

      {/* Leaf 3 (Left Middle) */}
      <path
        d="M 184 125 C 152 125, 136 102, 145 80 C 162 88, 178 105, 184 125 Z"
        fill="url(#leafGrad)"
      />

      {/* Leaf 4 (Right Middle) */}
      <path
        d="M 185 105 C 218 105, 234 82, 226 60 C 208 68, 194 85, 185 105 Z"
        fill="url(#leafGrad2)"
      />

      {/* Top Sprouts */}
      <path
        d="M 184 75 C 172 55, 174 35, 184 25 C 190 38, 188 58, 184 75 Z"
        fill="url(#leafGrad)"
      />
      <path
        d="M 184 75 C 196 55, 208 40, 200 25 C 188 38, 185 58, 184 75 Z"
        fill="url(#leafGrad2)"
      />
    </svg>
  );
}
