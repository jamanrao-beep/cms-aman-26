"use client";

import React, { useState } from "react";
import { SkyscraperCandlestickVisual } from "../visuals/SkyscraperCandlestickVisual";

export function ArticleView({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [loanAmount, setLoanAmount] = useState(3500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);

  // EMI formula
  const r = interestRate / 1200;
  const n = tenureYears * 12;
  const emi =
    r > 0 ? (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : loanAmount / n;

  const relatedReads = [
    {
      category: "MARKETS · ANALYSIS",
      title: "Will bank margins stabilise in the coming quarters?",
      readTime: "5 min read",
      icon: "🏛️",
    },
    {
      category: "BANKING · EXPLAINER",
      title: "How deposit costs are shaping bank profitability",
      readTime: "4 min read",
      icon: "📈",
    },
    {
      category: "INDUSTRY · INSIGHTS",
      title: "The next phase of credit growth in India",
      readTime: "6 min read",
      icon: "🪙",
    },
    {
      category: "MARKETS · OPINION",
      title: "What to watch in the next earnings season",
      readTime: "5 min read",
      icon: "🏙️",
    },
  ];

  return (
    <div className="py-6 pb-20 space-y-8">
      {/* BREADCRUMB */}
      <div className="text-xs font-mono text-gray-500 flex items-center gap-1.5">
        <span>Home</span>
        <span>/</span>
        <span>Markets</span>
        <span>/</span>
        <span className="text-gray-900 dark:text-gray-200 font-semibold">Earnings</span>
      </div>

      {/* ARTICLE HEADER & HERO BANNER */}
      <section className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              MARKETS
            </span>
            <span className="text-gray-400">·</span>
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-gray-500">
              EXPLAINER
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900 dark:text-white leading-[1.12] tracking-tight">
            Banks post steady profits. But what lies beneath?
          </h1>

          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 font-serif leading-relaxed">
            A closer look at margins, lending growth and the numbers behind the headlines.
          </p>

          <div className="flex items-center gap-3 text-xs text-gray-400 font-mono pt-1">
            <span className="font-semibold text-gray-700 dark:text-gray-300">Editorial desk</span>
            <span>|</span>
            <span>6 min read</span>
            <span>|</span>
            <span>Sample article</span>
          </div>
        </div>

        {/* HERO BANNER IMAGE (From Screenshot 2) */}
        <div className="w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-md">
          <SkyscraperCandlestickVisual className="w-full h-full" />
        </div>
      </section>

      {/* 3-COLUMN EDITORIAL LAYOUT (From Screenshot 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
        {/* LEFT COLUMN: STICKY IN THIS ARTICLE (3 cols) */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] space-y-3">
            <span className="font-mono text-xs font-bold text-gray-900 dark:text-white block">
              In this article
            </span>
            <nav className="flex flex-col space-y-2 text-xs">
              <a
                href="#headline"
                className="pl-2 border-l-2 border-emerald-600 text-emerald-700 dark:text-emerald-400 font-semibold"
              >
                Look beyond the headline number
              </a>
              <a href="#margins" className="pl-2 text-gray-500 hover:text-emerald-600">
                Margins show a mixed picture
              </a>
              <a href="#growth" className="pl-2 text-gray-500 hover:text-emerald-600">
                Lending growth remains healthy
              </a>
              <a href="#asset" className="pl-2 text-gray-500 hover:text-emerald-600">
                Asset quality stays stable
              </a>
              <a href="#watch" className="pl-2 text-gray-500 hover:text-emerald-600">
                What to watch next
              </a>
              <a href="#bigpicture" className="pl-2 text-gray-500 hover:text-emerald-600">
                The big picture
              </a>
            </nav>
          </div>
        </aside>

        {/* CENTER COLUMN: MAIN BODY + KEY TAKEAWAYS (6 cols) */}
        <article className="lg:col-span-6 space-y-6">
          <div id="headline" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 dark:text-white">
              Look beyond the headline number
            </h2>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
              Indian banks have reported another quarter of steady profits, with headline numbers showing resilience despite a challenging macro environment. On the surface, the results suggest continued momentum, supported by healthy credit growth and stable asset quality.
            </p>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
              But a closer look reveals a more nuanced picture. Margins are showing signs of pressure, deposit costs remain elevated, and growth is uneven across segments. While overall profitability remains strong, the numbers beneath the headline highlight both opportunities and challenges for the months ahead.
            </p>
          </div>

          {/* KEY TAKEAWAYS BOX (From Screenshot 2) */}
          <div className="p-6 rounded-2xl bg-emerald-50/70 dark:bg-[#11241c] border border-emerald-100 dark:border-[#1c3a2e] space-y-4">
            <span className="font-serif font-bold text-base text-gray-900 dark:text-white block">
              Key takeaways
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <h5 className="font-bold text-xs text-gray-900 dark:text-white">Profits remain steady</h5>
                  <p className="text-[11px] text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                    Banks reported stable earnings, supported by healthy credit growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <h5 className="font-bold text-xs text-gray-900 dark:text-white">Margins under pressure</h5>
                  <p className="text-[11px] text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                    Rising deposit costs and competitive pricing are weighing on margins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <h5 className="font-bold text-xs text-gray-900 dark:text-white">Outlook stays positive</h5>
                  <p className="text-[11px] text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                    Asset quality is stable, with growth expected to continue, albeit unevenly across segments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inline Interactive EMI Calculator Widget */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-[#1e332a] pb-3">
              <div>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">Planning a home loan?</h4>
                <p className="text-xs text-gray-500">See how loan repricing moves your monthly EMI.</p>
              </div>
              <button
                onClick={() => onNavigate("calc")}
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Full calculator</span>
                <span>→</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[11px] text-gray-500 block mb-1">Loan: ₹{(loanAmount / 100000).toFixed(1)}L</label>
                <input
                  type="range"
                  min="1000000"
                  max="10000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-1.5"
                />
              </div>

              <div>
                <label className="text-[11px] text-gray-500 block mb-1">Rate: {interestRate}%</label>
                <input
                  type="range"
                  min="7"
                  max="12"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-1.5"
                />
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-[#162e24] flex flex-col justify-center text-center">
                <span className="text-[10px] text-gray-500 font-medium">Monthly EMI</span>
                <span className="text-base font-bold font-mono text-emerald-700 dark:text-emerald-400">
                  ₹{Math.round(emi).toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* RIGHT COLUMN: RELATED READS & BOOKMARK (3 cols) */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-base text-gray-900 dark:text-white">
              Related reads
            </h3>
            <span className="text-rose-500 cursor-pointer">🔖</span>
          </div>

          <div className="space-y-3">
            {relatedReads.map((read, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500 transition-all cursor-pointer flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#162720] flex items-center justify-center text-lg shrink-0 border border-gray-200 dark:border-[#223d32]">
                  {read.icon}
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">
                    {read.category}
                  </span>
                  <h5 className="font-serif font-bold text-xs text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                    {read.title}
                  </h5>
                  <span className="text-[10px] font-mono text-gray-400 block">
                    {read.readTime} | Sample article
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* BOTTOM CONTINUE READING BANNER (From Screenshot 2) */}
      <section className="p-5 rounded-3xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-12 rounded-xl bg-gray-100 dark:bg-[#162720] flex items-center justify-center text-xl shrink-0 border border-gray-200 dark:border-[#223d32]">
            📊
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
              Continue reading
            </span>
            <h4 className="font-serif font-bold text-sm text-gray-900 dark:text-white">
              Five charts that explain where Indian banks are headed next
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Margins, credit growth, asset quality and more — a visual guide.
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate("markets")}
          className="w-10 h-10 rounded-full bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center shrink-0 transition-all shadow-sm cursor-pointer"
        >
          →
        </button>
      </section>
    </div>
  );
}
