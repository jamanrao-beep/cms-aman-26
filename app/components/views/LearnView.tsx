"use client";

import React, { useState } from "react";
import { LearningModuleBooksVisual } from "../visuals/LearningModuleBooksVisual";
import { SkylineFooterVisual } from "../visuals/SkylineFooterVisual";
import { PlantOnCoinsVisual } from "../visuals/PlantOnCoinsVisual";
import { FacetedBullLogo } from "../FacetedBullLogo";

interface LearnViewProps {
  onNavigate: (view: string) => void;
  onOpenSearch: () => void;
}

export function LearnView({ onNavigate, onOpenSearch }: LearnViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Investing basics", "Mutual funds", "IPOs", "Personal finance"];

  const topics = [
    {
      id: "sip-guide",
      category: "INVESTING BASICS",
      title: "What is a SIP?",
      summary: "Learn how a Systematic Investment Plan works and why it can be a simple way to build wealth.",
      readTime: "5 min read",
      icon: "coins",
      page: "calc",
    },
    {
      id: "ipo-guide",
      category: "IPOS",
      title: "Understanding IPOs",
      summary: "Know what an IPO is, how it works and key things to consider before investing.",
      readTime: "6 min read",
      icon: "ipo",
      page: "ipo",
    },
    {
      id: "emi-guide",
      category: "PERSONAL FINANCE",
      title: "How an EMI works",
      summary: "Understand how EMIs are calculated and how they impact your overall cost.",
      readTime: "5 min read",
      icon: "calc",
      page: "calc",
    },
    {
      id: "risk-return",
      category: "INVESTING BASICS",
      title: "Risk and return",
      summary: "Explore how risk and return are related and how to find the right balance for your goals.",
      readTime: "6 min read",
      icon: "bars",
      page: "article",
    },
    {
      id: "market-indices",
      category: "MARKET BASICS",
      title: "Reading market indices",
      summary: "Understand what market indices are, how they work and what they indicate about the market.",
      readTime: "5 min read",
      icon: "line",
      page: "markets",
    },
    {
      id: "emergency-fund",
      category: "PERSONAL FINANCE",
      title: "Building an emergency fund",
      summary: "Learn why an emergency fund is important and how much you should aim to keep aside.",
      readTime: "5 min read",
      icon: "rupee",
      page: "article",
    },
  ];

  const filteredTopics = topics.filter((t) => {
    const matchesCategory =
      activeCategory === "All" ||
      t.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10 pb-12">
      {/* HEADER SECTION */}
      <section className="pt-4 space-y-4 border-b border-gray-100 dark:border-[#1a2d25] pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              FINANCIAL EDUCATION
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight mt-1">
              Less jargon. More understanding.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2">
              Build your financial knowledge, one clear explanation at a time.
            </p>
          </div>

          <div className="shrink-0 flex justify-end">
            <div className="w-36 sm:w-48 h-auto">
              <PlantOnCoinsVisual className="w-full h-auto drop-shadow-sm" />
            </div>
          </div>
        </div>

        {/* SEARCH BAR & CATEGORY PILLS */}
        <div className="space-y-3 pt-2">
          <div className="relative max-w-xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What would you like to understand?"
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 shadow-xs"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#00b074] text-white shadow-xs"
                    : "bg-white dark:bg-[#111e19] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-[#1e332a] hover:border-emerald-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MODULE & TERM OF THE DAY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Featured Module (8 cols) */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="space-y-4 max-w-sm">
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              FEATURED LEARNING MODULE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 dark:text-white leading-tight">
              Start with the fundamentals
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Understand key concepts, build the right mindset and create a strong base for your financial journey.
            </p>

            <button
              onClick={() => onNavigate("article")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#e63946] hover:bg-[#cc2734] transition-all shadow-sm"
            >
              <span>Start learning</span>
              <span>→</span>
            </button>
          </div>

          {/* 3D Books & Coins Graphic */}
          <div className="w-full md:w-64 h-auto shrink-0 flex items-center justify-center">
            <LearningModuleBooksVisual className="w-full h-auto" />
          </div>
        </div>

        {/* Term of the Day: Compounding (4 cols, dark card) */}
        <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-[#111e19] text-white border border-[#1e332a] shadow-md flex flex-col justify-between relative overflow-hidden">
          {/* Bulb Icon top right */}
          <div className="absolute top-6 right-6 text-emerald-400 opacity-80">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>

          <div className="space-y-3 z-10">
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-gray-400">
              TERM OF THE DAY
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Compounding
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Compounding is the process where your earnings generate their own earnings over time, helping your money grow faster the longer you stay invested.
            </p>
          </div>

          {/* Small callout quote box */}
          <div className="mt-6 p-3.5 rounded-xl bg-[#162720] border border-[#223d32] flex items-center gap-3">
            <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p className="text-[11px] text-gray-300 leading-normal">
              Small, consistent investments can grow significantly over the long term, thanks to compounding.
            </p>
          </div>
        </div>
      </section>

      {/* EXPLORE KEY TOPICS GRID */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-serif text-gray-900 dark:text-white">
            Explore key topics
          </h2>
          <button
            onClick={onOpenSearch}
            className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline inline-flex items-center gap-1"
          >
            <span>View all lessons</span>
            <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onNavigate(topic.page)}
              className="p-5 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] hover:border-emerald-500 dark:hover:border-emerald-500 shadow-xs transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="flex items-start gap-3.5">
                {/* Icon based on topic */}
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-[#162e24] flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  {topic.icon === "coins" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {topic.icon === "ipo" && (
                    <span className="font-mono font-bold text-xs">IPO</span>
                  )}
                  {topic.icon === "calc" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {topic.icon === "bars" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                  {topic.icon === "line" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )}
                  {topic.icon === "rupee" && (
                    <span className="font-mono font-bold text-sm">₹</span>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[9.5px] uppercase font-bold tracking-wider text-gray-400">
                    {topic.category}
                  </span>
                  <h3 className="font-serif font-bold text-base text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {topic.summary}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-[#1e332a] flex items-center justify-between text-xs">
                <span className="text-gray-400 font-mono text-[11px]">{topic.readTime}</span>
                <span className="text-rose-600 dark:text-rose-400 group-hover:translate-x-1 transition-transform font-bold">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CITY SKYLINE & DISCLAIMER BANNER (From Screenshot 2) */}
      <section className="relative pt-6 overflow-hidden rounded-3xl bg-emerald-50/50 dark:bg-[#0c1713] border border-emerald-100/60 dark:border-[#1e332a]">
        <div className="px-6 sm:px-8 py-5 flex items-center gap-4 z-10 relative">
          <FacetedBullLogo className="h-7 w-auto shrink-0" />
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            This content is for educational purposes only. It does not constitute financial advice or a recommendation to buy or sell any financial product. Illustrative data.
          </p>
        </div>

        {/* Green Skyline Silhouettes at bottom */}
        <div className="w-full">
          <SkylineFooterVisual className="w-full h-16 sm:h-20" />
        </div>
      </section>
    </div>
  );
}
