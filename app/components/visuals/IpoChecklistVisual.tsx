import React from "react";

export function IpoChecklistVisual({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 180"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="IPO Checklist Prospectus and Growth Bars"
    >
      <defs>
        <linearGradient id="ipoBar1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="ipoBar2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
        <linearGradient id="ipoBar3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="120" cy="160" rx="90" ry="14" fill="#000000" opacity="0.08" />

      {/* Slanted IPO Prospectus Document */}
      <g transform="translate(45, 80) rotate(-18)">
        <rect x="0" y="0" width="85" height="110" rx="6" fill="url(#paperGrad)" stroke="#E2E8F0" strokeWidth="1.5" />
        {/* Document Header */}
        <rect x="12" y="14" width="40" height="8" rx="2" fill="#059669" opacity="0.8" />
        <text x="12" y="42" fill="#1E293B" fontSize="16" fontWeight="bold" fontFamily="system-ui, sans-serif">IPO</text>
        {/* Lines representing prospectus content */}
        <line x1="12" y1="56" x2="70" y2="56" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <line x1="12" y1="68" x2="62" y2="68" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="78" x2="66" y2="78" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="88" x2="50" y2="88" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* 3D Vertical Volume/Price Bars */}
      {/* Green Bar 1 */}
      <g transform="translate(140, 75)">
        <path d="M 0 10 L 16 0 L 30 10 L 14 20 Z" fill="#6EE7B7" />
        <path d="M 0 10 L 14 20 L 14 85 L 0 75 Z" fill="url(#ipoBar1)" />
        <path d="M 14 20 L 30 10 L 30 75 L 14 85 Z" fill="#047857" />
      </g>

      {/* Tall Green Bar 2 */}
      <g transform="translate(155, 45)">
        <path d="M 0 10 L 16 0 L 30 10 L 14 20 Z" fill="#A7F3D0" />
        <path d="M 0 10 L 14 20 L 14 115 L 0 105 Z" fill="url(#ipoBar3)" />
        <path d="M 14 20 L 30 10 L 30 105 L 14 115 Z" fill="#065F46" />
      </g>

      {/* Red Bar 3 */}
      <g transform="translate(175, 95)">
        <path d="M 0 8 L 14 0 L 26 8 L 12 16 Z" fill="#FCA5A5" />
        <path d="M 0 8 L 12 16 L 12 65 L 0 57 Z" fill="url(#ipoBar2)" />
        <path d="M 12 16 L 26 8 L 26 57 L 12 65 Z" fill="#991B1B" />
      </g>
    </svg>
  );
}
