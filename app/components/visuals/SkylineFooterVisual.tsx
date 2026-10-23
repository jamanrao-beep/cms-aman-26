import React from "react";

export function SkylineFooterVisual({ className = "w-full h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      className={className}
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="City skyline and landscape"
    >
      <defs>
        <linearGradient id="skylineGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D1FAE5" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="skylineGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* Background Distant Buildings */}
      <rect x="80" y="40" width="30" height="80" rx="2" fill="url(#skylineGrad1)" />
      <rect x="120" y="25" width="25" height="95" rx="2" fill="url(#skylineGrad1)" />
      <rect x="155" y="50" width="35" height="70" rx="2" fill="url(#skylineGrad1)" />

      <rect x="850" y="30" width="35" height="90" rx="2" fill="url(#skylineGrad1)" />
      <rect x="895" y="15" width="28" height="105" rx="2" fill="url(#skylineGrad1)" />
      <rect x="935" y="45" width="40" height="75" rx="2" fill="url(#skylineGrad1)" />
      <rect x="985" y="20" width="30" height="100" rx="2" fill="url(#skylineGrad1)" />
      <rect x="1025" y="40" width="45" height="80" rx="2" fill="url(#skylineGrad1)" />

      {/* Foreground Skyline Elements */}
      <rect x="920" y="55" width="20" height="65" rx="2" fill="url(#skylineGrad2)" />
      <rect x="950" y="35" width="22" height="85" rx="2" fill="url(#skylineGrad2)" />
      <rect x="1000" y="50" width="18" height="70" rx="2" fill="url(#skylineGrad2)" />
      <rect x="1050" y="60" width="32" height="60" rx="2" fill="url(#skylineGrad2)" />

      {/* Soft rolling hills foreground */}
      <path
        d="M 0 120 C 150 90, 350 95, 500 120 Z"
        fill="#10B981"
        opacity="0.12"
      />
      <path
        d="M 400 120 C 600 85, 900 90, 1200 120 Z"
        fill="#059669"
        opacity="0.1"
      />
    </svg>
  );
}
