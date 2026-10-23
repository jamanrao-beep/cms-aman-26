"use client";

import React, { useState } from "react";
import { BseRotundaVisual } from "../visuals/BseRotundaVisual";

interface IpoViewProps {
  onNavigate?: (view: string) => void;
}

export function IpoView({ onNavigate }: IpoViewProps) {
  const [filter, setFilter] = useState<"All issues" | "Open" | "Upcoming" | "Listed">("All issues");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  const cardsData = [
    {
      company: "Example Foods Ltd",
      status: "OPEN",
      sector: "FMCG | Packaged Foods",
      desc: "A growing branded foods company with a pan-India distribution network.",
      priceBand: "₹210 – ₹222",
      issueSize: "₹1,250 cr",
      lotSize: "67 shares",
      subscription: "2.4x",
      subscriptionDay: "Subscription (Day 2)",
      subPct: 75,
      qib: "3.1x",
      nii: "2.0x",
      retail: "1.9x",
      dates: "Closes on 18 Apr 2025",
      icon: "🍲",
      color: "bg-emerald-500",
    },
    {
      company: "Sketch Logistics Ltd",
      status: "OPEN",
      sector: "Logistics | Supply Chain",
      desc: "Integrated logistics and warehousing solutions for a modern supply chain.",
      priceBand: "₹95 – ₹102",
      issueSize: "₹890 cr",
      lotSize: "145 shares",
      subscription: "1.8x",
      subscriptionDay: "Subscription (Day 1)",
      subPct: 55,
      qib: "2.4x",
      nii: "1.6x",
      retail: "1.2x",
      dates: "Closes on 17 Apr 2025",
      icon: "🚚",
      color: "bg-emerald-500",
    },
    {
      company: "Sample Industries Ltd",
      status: "UPCOMING",
      sector: "Specialty Chemicals | Manufacturing",
      desc: "A diversified chemical manufacturer serving domestic and global markets.",
      priceBand: "₹310 – ₹326",
      issueSize: "₹2,300 cr",
      lotSize: "46 shares",
      subscription: "Yet to open",
      subscriptionDay: "Subscription",
      subPct: 0,
      qib: "—",
      nii: "—",
      retail: "—",
      dates: "Opens on 22 Apr 2025",
      icon: "🏭",
      color: "bg-rose-500",
    },
  ];

  const calendarEvents = [
    { date: "15 Apr", company: "Alpha Retail Ltd", tag: "OPEN", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300" },
    { date: "17 Apr", company: "Sketch Logistics Ltd", tag: "OPEN", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300" },
    { date: "18 Apr", company: "Example Foods Ltd", tag: "CLOSES", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300" },
    { date: "22 Apr", company: "Sample Industries Ltd", tag: "OPENS", color: "bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300" },
    { date: "24 Apr", company: "Metro Green Energy Ltd", tag: "OPENS", color: "bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300" },
    { date: "28 Apr", company: "Vertex Housing Ltd", tag: "OPENS", color: "bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300" },
  ];

  const filteredCards = cardsData.filter((c) => {
    const matchesFilter =
      filter === "All issues" ||
      (filter === "Open" && c.status === "OPEN") ||
      (filter === "Upcoming" && c.status === "UPCOMING") ||
      (filter === "Listed" && c.status === "LISTED");
    const matchesSearch =
      !search ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.sector.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* HEADER SECTION WITH BSE ROTUNDA GRAPHIC */}
      <section className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 dark:border-[#1a2d25] pb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight">
            Tomorrow&rsquo;s listings. Today&rsquo;s research.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2">
            Explore issues, understand the details, make informed decisions.
          </p>
        </div>

        {/* Top Right BSE Rotunda Visual */}
        <div className="shrink-0 flex justify-end">
          <div className="w-48 sm:w-60 h-auto">
            <BseRotundaVisual className="w-full h-auto drop-shadow-sm" />
          </div>
        </div>
      </section>

      {/* FILTER PILLS & SEARCH BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          {(["All issues", "Open", "Upcoming", "Listed"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === tab
                  ? "bg-[#00b074] text-white shadow-xs"
                  : "bg-white dark:bg-[#111e19] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search companies, sectors or keywords..."
            className="w-full pl-9 pr-4 py-2 rounded-full bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
          />
          <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* 3 STAT SUMMARY CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] flex items-center gap-4 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-[#162e24] text-emerald-600 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <span className="text-xs text-gray-500 dark:text-gray-400 block font-medium">Open issues</span>
            <span className="text-3xl font-bold font-serif text-gray-900 dark:text-white">02</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] flex items-center gap-4 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-[#25171a] text-rose-500 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <span className="text-xs text-gray-500 dark:text-gray-400 block font-medium">Upcoming issues</span>
            <span className="text-3xl font-bold font-serif text-gray-900 dark:text-white">03</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] flex items-center gap-4 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-[#162e24] text-emerald-600 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <span className="text-xs text-gray-500 dark:text-gray-400 block font-medium">Recently listed</span>
            <span className="text-3xl font-bold font-serif text-gray-900 dark:text-white">05</span>
          </div>
        </div>
      </section>

      {/* RICH ISSUE CARDS GRID (From Screenshot 1) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCards.map((c) => (
          <div
            key={c.company}
            className="p-6 rounded-3xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs flex flex-col justify-between space-y-4 hover:border-emerald-500 transition-all group"
          >
            {/* Top row: thumbnail + title + badge */}
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#162720] flex items-center justify-center text-xl shrink-0 border border-gray-200 dark:border-[#223d32]">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="font-bold font-serif text-base text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                      {c.company}
                    </h4>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 block">
                      {c.sector}
                    </span>
                  </div>
                </div>

                <span
                  className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider ${
                    c.status === "OPEN"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                      : "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
                  }`}
                >
                  {c.status}
                </span>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                {c.desc}
              </p>
            </div>

            {/* Metrics: Price band, Issue size, Lot size */}
            <div className="pt-3 border-t border-gray-100 dark:border-[#1e332a] grid grid-cols-3 gap-2 text-xs font-mono">
              <div>
                <span className="text-[10px] text-gray-400 block font-sans">Price band</span>
                <strong className="text-gray-900 dark:text-white font-bold">{c.priceBand}</strong>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block font-sans">Issue size</span>
                <strong className="text-gray-900 dark:text-white font-bold">{c.issueSize}</strong>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block font-sans">Lot size</span>
                <strong className="text-gray-900 dark:text-white font-bold">{c.lotSize}</strong>
              </div>
            </div>

            {/* Subscription Progress Bar */}
            <div className="pt-2 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500 font-sans">{c.subscriptionDay}</span>
                <strong className="text-gray-900 dark:text-white font-bold">{c.subscription}</strong>
              </div>
              <div className="w-full h-2 bg-gray-100 dark:bg-[#0c1713] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#00b074] rounded-full transition-all duration-500"
                  style={{ width: `${c.subPct}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 pt-1">
                <span>QIB {c.qib}</span>
                <span>NII {c.nii}</span>
                <span>Retail {c.retail}</span>
              </div>
            </div>

            {/* Footer row: Closes/Opens on date + "View details ->" */}
            <div className="pt-3 border-t border-gray-100 dark:border-[#1e332a] flex items-center justify-between text-xs">
              <span className="text-gray-500 font-mono text-[11px]">{c.dates}</span>
              <button
                onClick={() => onNavigate?.("article")}
                className="font-bold text-rose-600 dark:text-rose-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>View details</span>
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* IPO CALENDAR SECTION (From Screenshot 1) */}
      <section className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white">
            IPO calendar
          </h3>
          <button
            onClick={() => setViewMode(viewMode === "table" ? "cards" : "table")}
            className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>{viewMode === "table" ? "View card layout" : "View full table"}</span>
            <span>→</span>
          </button>
        </div>

        {/* Horizontal Event Timeline Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {calendarEvents.map((ev, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-gray-50 dark:bg-[#0c1713] border border-gray-200 dark:border-[#1e332a] space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-gray-800 dark:text-gray-200">{ev.date}</span>
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold ${ev.color}`}>
                  {ev.tag}
                </span>
              </div>
              <p className="text-xs font-medium text-gray-900 dark:text-white line-clamp-1">
                {ev.company}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE YOU APPLY SECTION (From Screenshot 1) */}
      <section className="p-6 sm:p-7 rounded-3xl bg-emerald-50/60 dark:bg-[#11241c] border border-emerald-100 dark:border-[#1c3a2e] grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
        <div>
          <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white">
            Before you apply
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
            Key things to review before investing in an IPO.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#162e24] text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-[#223d32]">
            📄
          </div>
          <div>
            <h5 className="font-bold text-xs text-gray-900 dark:text-white">Read the prospectus</h5>
            <p className="text-[11px] text-gray-600 dark:text-gray-300 mt-0.5">
              Understand the business, objectives, financials and key risks.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#162e24] text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-[#223d32]">
            📊
          </div>
          <div>
            <h5 className="font-bold text-xs text-gray-900 dark:text-white">Understand valuation</h5>
            <p className="text-[11px] text-gray-600 dark:text-gray-300 mt-0.5">
              Look at peers, growth prospects and how the issue is priced.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#162e24] text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-[#223d32]">
            🛡️
          </div>
          <div>
            <h5 className="font-bold text-xs text-gray-900 dark:text-white">Know the risks</h5>
            <p className="text-[11px] text-gray-600 dark:text-gray-300 mt-0.5">
              Consider market conditions, industry risks and your own goals.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <div className="text-center text-xs font-mono text-gray-400">
        Illustrative data. Not a recommendation.
      </div>
    </div>
  );
}
