import React from "react";
import Image from "next/image";

export function FacetedBullLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      {/* Exact uploaded high-res bull logo from user */}
      <Image
        src="/bull-logo.png"
        alt="Faceted Origami Bull Logo"
        width={48}
        height={48}
        className="h-10 w-auto object-contain filter drop-shadow-xs"
        priority
      />
    </div>
  );
}
