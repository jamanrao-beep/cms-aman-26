import React from "react";

export function TickerStrip({ onNavigate }: { onNavigate?: (view: string) => void }) {
  const tickerItems = [
    {
      name: "NIFTY 50",
      value: "22,517.40",
      change: "+178.65",
      percent: "+0.80%",
      isUp: true,
      sparkline: "M 0 16 Q 15 12, 30 14 T 60 4 T 90 2",
    },
    {
      name: "SENSEX",
      value: "74,102.32",
      change: "+612.17",
      percent: "+0.83%",
      isUp: true,
      sparkline: "M 0 16 Q 20 18, 40 10 T 70 8 T 90 2",
    },
    {
      name: "BANK NIFTY",
      value: "48,321.90",
      change: "+436.25",
      percent: "+0.91%",
      isUp: true,
      sparkline: "M 0 18 Q 20 14, 45 12 T 70 5 T 90 1",
    },
    {
      name: "USD / INR",
      value: "84.10",
      change: "-0.05",
      percent: "-0.06%",
      isUp: false,
      sparkline: "M 0 4 Q 25 8, 50 12 T 75 14 T 90 18",
    },
    {
      name: "GOLD (MCX)",
      value: "₹78,450",
      change: "+164.00",
      percent: "+0.21%",
      isUp: true,
      sparkline: "M 0 14 Q 25 12, 50 8 T 75 6 T 90 2",
    },
  ];

  return (
    <div className="border-b border-gray-100 dark:border-[#1a2d25] bg-white/60 dark:bg-[#0c1713]/60 backdrop-blur-xs overflow-x-auto py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 sm:gap-8 min-w-max text-xs">
          {tickerItems.map((item) => (
            <div
              key={item.name}
              onClick={() => onNavigate?.("markets")}
              className="flex items-center gap-3 cursor-pointer group hover:opacity-80 transition-opacity"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[10.5px] uppercase font-semibold text-gray-400 dark:text-gray-400">
                  {item.name}
                </span>
                <span className="font-mono font-bold text-sm text-gray-900 dark:text-white">
                  {item.value}
                </span>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold">
                <span className={item.isUp ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500"}>
                  {item.isUp ? "▲" : "▼"} {item.change} ({item.percent})
                </span>
              </div>

              {/* Sparkline mini SVG */}
              <svg className="w-16 h-5 overflow-visible" viewBox="0 0 90 20">
                <path
                  d={item.sparkline}
                  fill="none"
                  stroke={item.isUp ? "#00B074" : "#E63946"}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>

              <span className="text-[9px] font-mono text-gray-400 hidden xl:inline">
                Illustrative data
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
