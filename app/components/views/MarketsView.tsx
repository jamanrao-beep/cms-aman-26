"use client";

import React, { useState } from "react";
import { FacetedBullLogo } from "../FacetedBullLogo";
import { TOP_INDICES, SECTORS, MOVERS_DATA, MARKET_NEWS } from "../../data/markets";

interface MarketsViewProps {
  onNavigate: (view: string) => void;
}

export function MarketsView({ onNavigate }: MarketsViewProps) {
  const [timeframe, setTimeframe] = useState<"1D" | "1W" | "1M" | "1Y">("1D");
  const [moverTab, setMoverTab] = useState<"gainers" | "losers" | "mostActive">("gainers");
  const [sectorPeriod, setSectorPeriod] = useState<"day" | "week">("day");

  // Chart coordinate variations for timeframes
  const chartPoints = {
    "1D": {
      nifty: "M 30 150 Q 80 165, 140 140 T 260 130 T 380 95 T 500 85 L 560 70",
      sensex: "M 30 140 Q 80 170, 140 185 T 260 190 T 380 200 T 500 205 L 560 215",
      niftyEnd: { x: 560, y: 70, val: "101.8" },
      sensexEnd: { x: 560, y: 215, val: "98.6" },
    },
    "1W": {
      nifty: "M 30 180 Q 100 130, 200 110 T 350 140 T 480 80 L 560 60",
      sensex: "M 30 170 Q 100 160, 200 150 T 350 170 T 480 130 L 560 120",
      niftyEnd: { x: 560, y: 60, val: "103.2" },
      sensexEnd: { x: 560, y: 120, val: "101.1" },
    },
    "1M": {
      nifty: "M 30 200 Q 120 180, 220 120 T 380 90 T 490 60 L 560 45",
      sensex: "M 30 210 Q 120 190, 220 140 T 380 110 T 490 90 L 560 75",
      niftyEnd: { x: 560, y: 45, val: "105.4" },
      sensexEnd: { x: 560, y: 75, val: "103.8" },
    },
    "1Y": {
      nifty: "M 30 220 Q 150 190, 260 140 T 420 80 T 510 50 L 560 35",
      sensex: "M 30 230 Q 150 200, 260 160 T 420 100 T 510 70 L 560 55",
      niftyEnd: { x: 560, y: 35, val: "114.6" },
      sensexEnd: { x: 560, y: 55, val: "112.2" },
    },
  }[timeframe];

  return (
    <div className="space-y-10 pb-16">
      {/* HEADER WITH FACETED BULL */}
      <section className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 dark:border-[#1a2d25] pb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight">
            The market, in perspective.
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 mt-2">
            Understand the moves behind the numbers.
          </p>
        </div>

        {/* Origami 3D Faceted Bull Visual */}
        <div className="shrink-0 flex justify-end">
          <div className="w-32 sm:w-40 h-auto">
            <FacetedBullLogo className="w-full h-auto drop-shadow-md" />
          </div>
        </div>
      </section>

      {/* TOP 4 INDICES CARDS WITH MINI CHARTS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TOP_INDICES.map((idx) => {
          return (
            <div
              key={idx.name}
              className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase font-bold text-gray-500 dark:text-gray-400">
                  {idx.name}
                </span>
                <div className="text-2xl font-bold font-mono text-gray-900 dark:text-white mt-1">
                  {idx.value}
                </div>
                <div className="flex items-center gap-1.5 mt-1 font-mono text-xs font-semibold">
                  <span className={idx.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500"}>
                    {idx.isPositive ? "▲" : "▼"} {idx.change} ({idx.percent})
                  </span>
                </div>
              </div>

              {/* Sparkline Graphic */}
              <div className="mt-4 flex items-end justify-between">
                <svg className="w-32 h-10 overflow-visible" viewBox="0 0 100 30">
                  <path
                    d={`M 0 ${idx.isPositive ? "24 Q 25 20, 50 15 T 75 10 T 100 4" : "6 Q 25 10, 50 16 T 75 20 T 100 26"}`}
                    fill="none"
                    stroke={idx.isPositive ? "#00B074" : "#E63946"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[9px] font-mono text-gray-400">Illustrative data</span>
              </div>
            </div>
          );
        })}
      </section>

      {/* MARKET OVERVIEW DUAL CHART & SECTOR SPOTLIGHT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Dual Line Chart (Col 8) */}
        <div className="lg:col-span-8 p-6 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-[#1e332a]">
              <h2 className="text-xl font-bold font-serif text-gray-900 dark:text-white">
                Market overview
              </h2>

              <div className="flex items-center gap-4">
                {/* Timeframe selector pills */}
                <div className="flex items-center bg-gray-100 dark:bg-[#0c1713] p-1 rounded-full text-xs font-mono">
                  {(["1D", "1W", "1M", "1Y"] as const).map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      className={`px-3 py-1 rounded-full transition-all font-semibold ${
                        timeframe === tf
                          ? "bg-white dark:bg-[#162e24] text-emerald-600 dark:text-emerald-400 shadow-xs"
                          : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>

                {/* Legend indicator */}
                <div className="flex items-center gap-3 text-xs font-medium">
                  <span className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    NIFTY 50
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    SENSEX
                  </span>
                </div>
              </div>
            </div>

            {/* Dual Chart Area SVG */}
            <div className="mt-6 relative">
              <svg viewBox="0 0 600 280" className="w-full h-auto overflow-visible" fill="none">
                {/* Horizontal reference grid lines */}
                {[50, 100, 150, 200, 250].map((y, i) => (
                  <g key={i}>
                    <line x1="30" y1={y} x2="570" y2={y} stroke="#e5e7eb" strokeDasharray="3 3" opacity="0.6" className="dark:stroke-[#223d32]" />
                    <text x="10" y={y + 4} fill="#9ca3af" fontSize="10" fontFamily="var(--font-mono)">
                      {102 - i}
                    </text>
                  </g>
                ))}

                {/* SENSEX Line (Red) */}
                <path
                  d={chartPoints.sensex}
                  fill="none"
                  stroke="#E63946"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* NIFTY 50 Line (Green) */}
                <path
                  d={chartPoints.nifty}
                  fill="none"
                  stroke="#00B074"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* End Point Markers with Coordinates */}
                {/* Nifty 101.8 Tag */}
                <g transform={`translate(${chartPoints.niftyEnd.x - 24}, ${chartPoints.niftyEnd.y - 12})`}>
                  <rect x="0" y="0" width="38" height="20" rx="4" fill="#00B074" />
                  <text x="19" y="14" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="var(--font-mono)" textAnchor="middle">
                    {chartPoints.niftyEnd.val}
                  </text>
                </g>

                {/* Sensex 98.6 Tag */}
                <g transform={`translate(${chartPoints.sensexEnd.x - 24}, ${chartPoints.sensexEnd.y - 10})`}>
                  <rect x="0" y="0" width="38" height="20" rx="4" fill="#E63946" />
                  <text x="19" y="14" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="var(--font-mono)" textAnchor="middle">
                    {chartPoints.sensexEnd.val}
                  </text>
                </g>

                {/* Time Axis Labels */}
                {["09:15", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"].map((t, idx) => (
                  <text
                    key={t}
                    x={30 + idx * 85}
                    y="275"
                    fill="#9ca3af"
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                    textAnchor="middle"
                  >
                    {t}
                  </text>
                ))}
              </svg>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-[#1e332a] flex items-center justify-between text-xs text-gray-400 font-mono">
            <span>Illustrative data • Indexed to 100</span>
            <span>Real-time NSE/BSE Feed Simulation</span>
          </div>
        </div>

        {/* Right: Sector Spotlight (Col 4) */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-[#1e332a]">
              <h2 className="text-xl font-bold font-serif text-gray-900 dark:text-white">
                Sector spotlight
              </h2>
              <div className="relative">
                <button
                  onClick={() => setSectorPeriod(sectorPeriod === "day" ? "week" : "day")}
                  className="px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-[#1e332a] rounded-lg hover:bg-gray-50 dark:hover:bg-[#162720] flex items-center gap-1"
                >
                  <span>{sectorPeriod === "day" ? "Day change" : "Weekly"}</span>
                  <span className="text-[10px]">▼</span>
                </button>
              </div>
            </div>

            {/* Sector Progress Bars */}
            <div className="mt-6 space-y-5">
              {SECTORS.map((sector) => {
                const isPos = sector.percent > 0;
                const widthPercent = Math.min(Math.abs(sector.percent) * 35, 100);

                return (
                  <div key={sector.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                        {sector.icon === "banking" && (
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l9-4 9 4v2H3V6zm2 4h2v7H5v-7zm6 0h2v7h-2v-7zm6 0h2v7h-2v-7zM2 20h20v2H2v-2z" />
                          </svg>
                        )}
                        {sector.icon === "it" && (
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {sector.icon === "auto" && (
                          <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zm-9-5l1.5-4.5h7L17 12m-13 4h16a1 1 0 001-1v-3a2 2 0 00-2-2H4a2 2 0 00-2 2v3a1 1 0 001 1z" />
                          </svg>
                        )}
                        {sector.icon === "energy" && (
                          <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                        <span>{sector.name}</span>
                      </div>
                      <span className={`font-mono ${isPos ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500"}`}>
                        {isPos ? `+${sector.percent}%` : `${sector.percent}%`}
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-3 bg-gray-100 dark:bg-[#0c1713] rounded-full overflow-hidden flex">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isPos ? "bg-[#00b074]" : "bg-[#e63946]"
                        }`}
                        style={{ width: `${widthPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-gray-100 dark:border-[#1e332a] text-right">
            <span className="text-[10px] font-mono text-gray-400">Illustrative data</span>
          </div>
        </div>
      </section>

      {/* MARKET MOVERS (GAINERS / LOSERS / MOST ACTIVE) */}
      <section className="p-6 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold font-serif text-gray-900 dark:text-white">
            Market movers
          </h2>

          <div className="flex items-center gap-2 bg-gray-100 dark:bg-[#0c1713] p-1 rounded-full text-xs font-semibold">
            <button
              onClick={() => setMoverTab("gainers")}
              className={`px-3 py-1 rounded-full transition-all ${
                moverTab === "gainers"
                  ? "bg-white dark:bg-[#162e24] text-emerald-600 dark:text-emerald-400 shadow-xs"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Gainers
            </button>
            <button
              onClick={() => setMoverTab("losers")}
              className={`px-3 py-1 rounded-full transition-all ${
                moverTab === "losers"
                  ? "bg-white dark:bg-[#162e24] text-rose-500 shadow-xs"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Losers
            </button>
            <button
              onClick={() => setMoverTab("mostActive")}
              className={`px-3 py-1 rounded-full transition-all ${
                moverTab === "mostActive"
                  ? "bg-white dark:bg-[#162e24] text-gray-900 dark:text-white shadow-xs"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Most active
            </button>
          </div>
        </div>

        {/* Split Table Layout from Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-x-auto">
          {/* Table Column 1: Gainers list */}
          <div>
            <span className="text-xs font-mono font-bold uppercase text-emerald-600 block mb-3">Top Gainers</span>
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-gray-200 dark:border-[#1e332a] text-gray-400 text-[11px]">
                  <th className="pb-2 font-normal">Company</th>
                  <th className="pb-2 text-right font-normal">Price (₹)</th>
                  <th className="pb-2 text-right font-normal">Change</th>
                  <th className="pb-2 text-right font-normal">Volume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-[#1e332a]">
                {MOVERS_DATA.gainers.map((row) => (
                  <tr key={row.company} className="hover:bg-gray-50 dark:hover:bg-[#162720] transition-colors">
                    <td className="py-2.5 font-sans font-semibold text-gray-900 dark:text-white">{row.company}</td>
                    <td className="py-2.5 text-right font-medium text-gray-800 dark:text-gray-200">{row.price}</td>
                    <td className="py-2.5 text-right font-bold text-emerald-600 dark:text-emerald-400">▲ {row.change}</td>
                    <td className="py-2.5 text-right text-gray-500 dark:text-gray-400">{row.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Column 2: Losers list */}
          <div>
            <span className="text-xs font-mono font-bold uppercase text-rose-500 block mb-3">Top Losers</span>
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-gray-200 dark:border-[#1e332a] text-gray-400 text-[11px]">
                  <th className="pb-2 font-normal">Company</th>
                  <th className="pb-2 text-right font-normal">Price (₹)</th>
                  <th className="pb-2 text-right font-normal">Change</th>
                  <th className="pb-2 text-right font-normal">Volume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-[#1e332a]">
                {MOVERS_DATA.losers.map((row) => (
                  <tr key={row.company} className="hover:bg-gray-50 dark:hover:bg-[#162720] transition-colors">
                    <td className="py-2.5 font-sans font-semibold text-gray-900 dark:text-white">{row.company}</td>
                    <td className="py-2.5 text-right font-medium text-gray-800 dark:text-gray-200">{row.price}</td>
                    <td className="py-2.5 text-right font-bold text-rose-500">▼ {row.change}</td>
                    <td className="py-2.5 text-right text-gray-500 dark:text-gray-400">{row.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3 NEWS CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MARKET_NEWS.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onNavigate("article")}
            className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs flex flex-col justify-between hover:border-emerald-500 transition-all cursor-pointer group"
          >
            <div className="space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-[#162e24] px-2 py-0.5 rounded">
                {item.category}
              </span>
              <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-[#1e332a] flex items-center justify-between">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 inline-flex items-center gap-1">
                <span>Read more</span>
                <span>→</span>
              </span>
              <span className="text-[10px] font-mono text-gray-400">{item.readTime}</span>
            </div>
          </div>
        ))}
      </section>

      {/* BOTTOM KNOWLEDGE STRIP */}
      <section className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-[#11241c] border border-emerald-100 dark:border-[#1c3a2e] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <div>
            <h4 className="font-bold text-sm text-gray-900 dark:text-white">
              Build your market knowledge.
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Simple, unbiased explainers on investing, markets and personal finance.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold text-emerald-700 dark:text-emerald-300 flex-wrap">
          <button onClick={() => onNavigate("learn")} className="hover:underline">Market basics →</button>
          <button onClick={() => onNavigate("learn")} className="hover:underline">Understand indices →</button>
          <button onClick={() => onNavigate("learn")} className="hover:underline">Read financial statements →</button>
          <button onClick={() => onNavigate("learn")} className="hover:underline">Investment strategies →</button>
        </div>
      </section>
    </div>
  );
}
