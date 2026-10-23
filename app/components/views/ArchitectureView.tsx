"use client";

import React from "react";

export function ArchitectureView() {
  return (
    <div className="space-y-10 pb-16">
      {/* HEADER */}
      <section className="pt-4 border-b border-gray-100 dark:border-[#1a2d25] pb-6">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
          INFRASTRUCTURE & DEPLOYMENT
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 dark:text-white tracking-tight mt-1">
          Proposed architecture & hosting plan
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          Technical assessment of Sanity headless CMS, Next.js frontend rendering, and hosting alternatives including Hostinger.
        </p>
      </section>

      {/* 4 ARCHITECTURE CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#111e19] border-t-4 border-t-[#00b074] border-x border-b border-gray-200 dark:border-[#1e332a] shadow-xs space-y-3">
          <span className="font-mono text-[10.5px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
            Content Layer
          </span>
          <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white">
            Sanity Studio + Lake
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
            Hosted securely on Sanity cloud infrastructure. Non-technical staff edit here. Zero database maintenance or server security patches required.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#111e19] border-t-4 border-t-[#00b074] border-x border-b border-gray-200 dark:border-[#1e332a] shadow-xs space-y-3">
          <span className="font-mono text-[10.5px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
            Frontend
          </span>
          <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white">
            Next.js 16 Web Engine
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
            Consumes content via GROQ APIs, compiling ultra-fast static HTML with client-side interactive calculators and real-time feeds.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#111e19] border-t-4 border-t-[#f4b400] border-x border-b border-gray-200 dark:border-[#1e332a] shadow-xs space-y-3">
          <span className="font-mono text-[10.5px] uppercase font-bold tracking-wider text-amber-500">
            Hosting Environment
          </span>
          <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white">
            Node-Capable Server
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
            Vercel edge network (recommended), or Hostinger VPS / Cloud plan with Node.js runtime support.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#111e19] border-t-4 border-t-[#f4b400] border-x border-b border-gray-200 dark:border-[#1e332a] shadow-xs space-y-3">
          <span className="font-mono text-[10.5px] uppercase font-bold tracking-wider text-amber-500">
            Zero Disruption
          </span>
          <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white">
            GoDaddy & Google Suite
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
            Domain DNS A/CNAME records point smoothly to new web host. All corporate emails and MX routing remain 100% untouched.
          </p>
        </div>
      </section>

      {/* HOSTINGER QUESTION NOTICE (From HTML) */}
      <section className="p-6 rounded-3xl bg-amber-50/70 dark:bg-[#1d1b11] border border-amber-200/80 dark:border-[#38331d] space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-mono text-xs font-bold uppercase">
            Hosting Assessment
          </span>
          <h3 className="font-serif font-bold text-lg text-amber-950 dark:text-amber-100">
            Hostinger Shared Hosting vs Node.js Server Options
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
          Standard Hostinger shared hosting runs Apache/PHP and static files, not an active persistent Next.js Node process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white/80 dark:bg-[#14120a] border border-amber-200/60 dark:border-[#2d2817] space-y-1.5">
            <h4 className="font-bold text-xs text-gray-900 dark:text-white">Option 1: Hostinger Node / VPS</h4>
            <p className="text-[11px] text-gray-600 dark:text-gray-400">
              Upgrade Hostinger plan to a VPS tier or Cloud Startup tier with native Node.js and PM2 support.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/80 dark:bg-[#14120a] border border-amber-200/60 dark:border-[#2d2817] space-y-1.5">
            <h4 className="font-bold text-xs text-gray-900 dark:text-white">Option 2: Next.js Static Export</h4>
            <p className="text-[11px] text-gray-600 dark:text-gray-400">
              Export site as static HTML (`next export`) and deploy directly to existing shared Hostinger hosting.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/80 dark:bg-[#14120a] border border-amber-200/60 dark:border-[#2d2817] space-y-1.5">
            <h4 className="font-bold text-xs text-gray-900 dark:text-white">Option 3: Vercel Free / Pro Tier</h4>
            <p className="text-[11px] text-gray-600 dark:text-gray-400">
              Deploy Next.js on Vercel global edge for zero maintenance, keeping Hostinger for secondary domains or email.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT AGENCY BAND (From HTML) */}
      <section className="p-8 rounded-3xl bg-[#111e19] text-white border border-[#1e332a] shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-lg">
          <span className="font-mono text-xs uppercase font-bold text-amber-400">
            CONTENT AGENCY & EDITORIAL PRODUCTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
            Financial content that ranks and reads well
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            High-converting articles, video scripts and ghostwriting for fintechs, stock brokers and mutual fund houses.
          </p>
          <div className="pt-2">
            <button className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-xs transition-colors shadow-sm">
              Request sample editorial package
            </button>
          </div>
        </div>

        <div className="w-full md:w-64 space-y-2.5 text-xs font-mono">
          <div className="p-3 rounded-xl bg-[#162720] border border-[#223d32] flex items-center justify-between">
            <span className="font-sans font-semibold text-gray-200">SEO articles</span>
            <span className="text-emerald-400 font-bold">✓ Live</span>
          </div>
          <div className="p-3 rounded-xl bg-[#162720] border border-[#223d32] flex items-center justify-between">
            <span className="font-sans font-semibold text-gray-200">Video scripts</span>
            <span className="text-emerald-400 font-bold">✓ Live</span>
          </div>
          <div className="p-3 rounded-xl bg-[#162720] border border-[#223d32] flex items-center justify-between">
            <span className="font-sans font-semibold text-gray-200">Ghostwriting</span>
            <span className="text-gray-400">Planned</span>
          </div>
          <div className="p-3 rounded-xl bg-[#162720] border border-[#223d32] flex items-center justify-between">
            <span className="font-sans font-semibold text-gray-200">Social infographics</span>
            <span className="text-gray-400">Planned</span>
          </div>
        </div>
      </section>
    </div>
  );
}
