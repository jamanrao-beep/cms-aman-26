import React from "react";

export function BseRotundaVisual({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 180"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="BSE Rotunda Tower and IPO market curves"
    >
      <defs>
        <linearGradient id="rotundaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#34D399" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="curveGreenGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>

      {/* Upward market curves in the background */}
      <path
        d="M 20 160 Q 120 150, 200 90 T 310 40"
        stroke="#00B074"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 60 170 Q 160 160, 240 110 T 315 70"
        stroke="#34D399"
        strokeWidth="2"
        strokeDasharray="4 3"
        fill="none"
        opacity="0.6"
      />

      {/* Red Candlestick bar on right */}
      <line x1="285" y1="30" x2="285" y2="85" stroke="#E63946" strokeWidth="2.5" />
      <rect x="281" y="42" width="8" height="28" rx="2" fill="#E63946" />

      {/* BSE Rotunda architectural arc structure */}
      <g transform="translate(130, 20)">
        {/* Main circular layered arches */}
        <path
          d="M 10 150 C 10 65, 80 10, 160 10 C 170 10, 180 12, 190 15 L 190 150 Z"
          fill="none"
          stroke="#00B074"
          strokeWidth="4"
          opacity="0.3"
        />
        <path
          d="M 40 150 C 40 85, 95 38, 160 38 L 160 150 Z"
          fill="none"
          stroke="#00B074"
          strokeWidth="3.5"
          opacity="0.5"
        />
        <path
          d="M 70 150 C 70 105, 110 68, 160 68 L 160 150 Z"
          fill="none"
          stroke="#00B074"
          strokeWidth="3"
          opacity="0.7"
        />

        {/* Vertical ribs of the BSE Tower facade */}
        {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135].map((x) => (
          <line
            key={x}
            x1={x}
            y1="150"
            x2={x}
            y2={60 + (150 - x) * 0.4}
            stroke="#059669"
            strokeWidth="1.5"
            opacity="0.4"
          />
        ))}

        {/* Digital display ring at mid-level */}
        <rect x="15" y="105" width="135" height="12" rx="3" fill="#064E3B" opacity="0.8" />
        <line x1="25" y1="111" x2="140" y2="111" stroke="#34D399" strokeWidth="2" strokeDasharray="3 2" />
      </g>
    </svg>
  );
}
