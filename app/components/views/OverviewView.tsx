"use client";

import React, { useState } from "react";
import { CandlestickHeroVisual } from "../visuals/CandlestickHeroVisual";
import { BseBuildingVisual } from "../visuals/BseBuildingVisual";
import { IpoChecklistVisual } from "../visuals/IpoChecklistVisual";
import { PlantOnCoinsVisual } from "../visuals/PlantOnCoinsVisual";

interface OverviewViewProps {
  onNavigate: (view: string) => void;
}

export function OverviewView({ onNavigate }: OverviewViewProps) {
  const [showAllIpos, setShowAllIpos] = useState(false);

  const ipoWatchData = [
    { company: "Sample Industries Ltd", opens: "17 Oct", closes: "21 Oct", price: "₹210–221", lot: 67, status: "Upcoming", badge: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300" },
    { company: "Example Foods Ltd", opens: "14 Oct", closes: "16 Oct", price: "₹98–103", lot: 145, status: "Open", badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" },
    { company: "Demo Power Corp", opens: "08 Oct", closes: "10 Oct", price: "₹330–348", lot: 43, status: "Closed", badge: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" },
    { company: "Sketch Logistics Ltd", opens: "15 Oct", closes: "17 Oct", price: "₹150–158", lot: 95, status: "Open", badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" },
    { company: "Mock Pharma Ltd", opens: "01 Oct", closes: "03 Oct", price: "₹412–433", lot: 34, status: "Closed", badge: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" },
  ];

  const visibleIpos = showAllIpos ? ipoWatchData : ipoWatchData.slice(0, 3);

  return (
    <div className="space-y-14 pb-16">
      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                THE DAILY BRIEF
              </span>
              <span className="text-gray-300 dark:text-gray-600">/</span>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                MARKET INSIGHTS
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-gray-900 dark:text-white leading-[1.08]">
                A clearer view.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-emerald-600 dark:text-emerald-400 leading-[1.08]">
                A smarter move.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl font-normal leading-relaxed">
              Actionable insights, market trends and simple explanations to help you make confident financial decisions.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate("article")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#e63946] hover:bg-[#d02e3b] transition-all shadow-md shadow-rose-500/20 active:scale-95 group cursor-pointer"
              >
                <span>Read the latest</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Right Visual: 3D Candlesticks */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <CandlestickHeroVisual />
          </div>
        </div>
      </section>

      {/* 3 FEATURED CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Beyond the headlines (Dark Card) */}
        <div className="bg-[#111e19] text-white rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden border border-[#1e332a] group hover:border-emerald-600/50 transition-all shadow-lg shadow-black/10">
          <div className="space-y-3 z-10">
            <span className="font-mono text-[10.5px] uppercase font-bold tracking-wider text-gray-400">
              MARKET INSIGHTS
            </span>
            <h3 className="text-2xl font-serif font-bold text-white leading-snug">
              Beyond the headlines.
              <span className="block text-emerald-400">The numbers that move markets.</span>
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
              In-depth analysis, expert views and market-moving stories, all in one place.
            </p>
          </div>

          {/* BSE Building graphic preview */}
          <div className="my-4 h-32 w-full rounded-xl overflow-hidden border border-emerald-950/40">
            <BseBuildingVisual />
          </div>

          <div className="z-10">
            <button
              onClick={() => onNavigate("markets")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#e63946] hover:bg-[#cc2734] transition-all cursor-pointer"
            >
              <span>Explore market insights</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Card 2: Your IPO checklist */}
        <div className="bg-white dark:bg-[#111e19] rounded-2xl p-6 flex flex-col justify-between border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500/50 transition-all shadow-sm group">
          <div className="space-y-3">
            <span className="font-mono text-[10.5px] uppercase font-bold tracking-wider text-rose-600 dark:text-rose-400">
              IPOS
            </span>
            <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white leading-snug">
              Your IPO checklist.
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Key dates, valuations, risk factors and expert views — everything you need before you apply.
            </p>
          </div>

          {/* 3D IPO graphic */}
          <div className="my-2 h-36 flex items-center justify-center">
            <IpoChecklistVisual className="w-48 h-auto" />
          </div>

          <div>
            <button
              onClick={() => onNavigate("ipo")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 group-hover:underline cursor-pointer"
            >
              <span>Track upcoming IPOs</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Card 3: Build a better SIP plan */}
        <div className="bg-white dark:bg-[#111e19] rounded-2xl p-6 flex flex-col justify-between border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500/50 transition-all shadow-sm group">
          <div className="space-y-3">
            <span className="font-mono text-[10.5px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
              WEALTH BUILDING
            </span>
            <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white leading-snug">
              Build a better SIP plan.
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              See how small, consistent investments can create big possibilities over time.
            </p>
          </div>

          {/* Plant on coins graphic */}
          <div className="my-2 h-36 flex items-center justify-center">
            <PlantOnCoinsVisual className="w-44 h-auto" />
          </div>

          <div>
            <button
              onClick={() => onNavigate("calc")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 group-hover:underline cursor-pointer"
            >
              <span>Plan your SIP</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* IPO WATCH SECTION WITH "VIEW MORE" (Requested in Screenshot 5 with red circle!) */}
      <section className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-[#1e332a]">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
              IPO watch
            </h2>
            <span className="text-xs text-gray-400">Live from Sanity + data feed</span>
          </div>

          {/* "View More" option prominent link */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAllIpos(!showAllIpos)}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 dark:bg-[#1a2d25] hover:bg-gray-200 text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
            >
              {showAllIpos ? "Show less" : "Expand list"}
            </button>

            <button
              onClick={() => onNavigate("ipo")}
              className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>View full dashboard</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* IPO Watch Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-gray-200 dark:border-[#1e332a] text-gray-400 uppercase text-[10.5px]">
                <th className="py-2.5 font-normal">Company</th>
                <th className="py-2.5 font-normal">Opens</th>
                <th className="py-2.5 font-normal">Closes</th>
                <th className="py-2.5 text-right font-normal">Price band</th>
                <th className="py-2.5 text-right font-normal">Lot</th>
                <th className="py-2.5 font-normal text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-[#1e332a]">
              {visibleIpos.map((ipo) => (
                <tr key={ipo.company} className="hover:bg-gray-50 dark:hover:bg-[#162720] transition-colors">
                  <td className="py-3 font-sans font-bold text-gray-900 dark:text-white">{ipo.company}</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400">{ipo.opens}</td>
                  <td className="py-3 text-gray-600 dark:text-gray-400">{ipo.closes}</td>
                  <td className="py-3 text-right font-semibold text-gray-800 dark:text-gray-200">{ipo.price}</td>
                  <td className="py-3 text-right text-gray-500">{ipo.lot}</td>
                  <td className="py-3 text-right">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${ipo.badge}`}>
                      {ipo.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Prominent "View more" button bar right below the table */}
        <div className="pt-3 border-t border-gray-100 dark:border-[#1e332a] flex items-center justify-between">
          <span className="text-xs text-gray-400">
            Showing {visibleIpos.length} of {ipoWatchData.length} active mainboard IPOs
          </span>

          <button
            onClick={() => onNavigate("ipo")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#00b074] hover:bg-[#009663] transition-all shadow-xs cursor-pointer"
          >
            <span>View more IPOs</span>
            <span>→</span>
          </button>
        </div>
      </section>

      {/* TOPICS SECTION (From Screenshot 5) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
              Topics
            </h2>
            <span className="text-xs text-gray-400">Add new categories in Studio, no rebuild</span>
          </div>
          <button
            onClick={() => onNavigate("learn")}
            className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline"
          >
            View all topics →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            onClick={() => onNavigate("markets")}
            className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500 transition-all cursor-pointer group shadow-xs"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-[#162e24] px-2 py-0.5 rounded">
              MARKETS
            </span>
            <h4 className="font-serif font-bold text-base text-gray-900 dark:text-white mt-2 group-hover:text-emerald-600">
              Stock market news
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Daily moves, sector stories and earnings.
            </p>
          </div>

          <div
            onClick={() => onNavigate("learn")}
            className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500 transition-all cursor-pointer group shadow-xs"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-[#162e24] px-2 py-0.5 rounded">
              LEARN
            </span>
            <h4 className="font-serif font-bold text-base text-gray-900 dark:text-white mt-2 group-hover:text-emerald-600">
              Financial guides
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Long-form explainers for first-time investors.
            </p>
          </div>

          <div
            onClick={() => onNavigate("calc")}
            className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500 transition-all cursor-pointer group shadow-xs"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-[#162e24] px-2 py-0.5 rounded">
              FUNDS
            </span>
            <h4 className="font-serif font-bold text-base text-gray-900 dark:text-white mt-2 group-hover:text-emerald-600">
              Mutual funds
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              SIPs, categories, costs and returns.
            </p>
          </div>

          <div
            onClick={() => onNavigate("calc")}
            className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500 transition-all cursor-pointer group shadow-xs"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-[#162e24] px-2 py-0.5 rounded">
              MONEY
            </span>
            <h4 className="font-serif font-bold text-base text-gray-900 dark:text-white mt-2 group-hover:text-emerald-600">
              Personal finance
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Tax, loans, insurance and retirement.
            </p>
          </div>
        </div>
      </section>

      {/* FINANCIAL CALCULATORS SECTION (From Screenshot 5) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
              Financial calculators
            </h2>
            <span className="text-xs text-gray-400">16 tools, each with its own SEO page</span>
          </div>
          <button
            onClick={() => onNavigate("calc")}
            className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline"
          >
            Explore all 16 tools →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            onClick={() => onNavigate("calc")}
            className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500 transition-all cursor-pointer group shadow-xs flex flex-col justify-between"
          >
            <div>
              <h4 className="font-serif font-bold text-base text-gray-900 dark:text-white group-hover:text-emerald-600">
                SIP Calculator
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Estimate what a monthly investment grows to.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-600 mt-3 inline-block">Try it →</span>
          </div>

          <div
            onClick={() => onNavigate("calc")}
            className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500 transition-all cursor-pointer group shadow-xs flex flex-col justify-between"
          >
            <div>
              <h4 className="font-serif font-bold text-base text-gray-900 dark:text-white group-hover:text-emerald-600">
                EMI Calculator
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Monthly payment for any loan amount and tenure.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-600 mt-3 inline-block">Try it →</span>
          </div>

          <div
            onClick={() => onNavigate("calc")}
            className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500 transition-all cursor-pointer group shadow-xs flex flex-col justify-between"
          >
            <div>
              <h4 className="font-serif font-bold text-base text-gray-900 dark:text-white group-hover:text-emerald-600">
                PPF Calculator
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Maturity value for 15 years and extensions.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-600 mt-3 inline-block">Try it →</span>
          </div>

          <div
            onClick={() => onNavigate("calc")}
            className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500 transition-all cursor-pointer group shadow-xs flex flex-col justify-between"
          >
            <div>
              <h4 className="font-serif font-bold text-base text-gray-900 dark:text-white group-hover:text-emerald-600">
                Retirement Calculator
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                How large a corpus you need and monthly saving.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-600 mt-3 inline-block">Try it →</span>
          </div>
        </div>
      </section>

      {/* FOOTER TRUST BADGES */}
      <footer className="pt-8 border-t border-gray-100 dark:border-[#1a2d25] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-start gap-3">
          <span className="text-emerald-600 text-lg">📖</span>
          <div>
            <span className="font-bold text-gray-900 dark:text-gray-200 block">Learn</span>
            <span>Concepts, guides and explainers for smarter investing.</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-emerald-600 text-lg">📈</span>
          <div>
            <span className="font-bold text-gray-900 dark:text-gray-200 block">Stay informed</span>
            <span>Market news, expert opinions and in-depth analysis.</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-emerald-600 text-lg">🛡️</span>
          <div>
            <span className="font-bold text-gray-900 dark:text-gray-200 block">Educational purpose only</span>
            <span>This content is for educational purposes only and does not constitute financial advice or a recommendation to buy or sell any securities.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
