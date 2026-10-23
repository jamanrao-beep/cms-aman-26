"use client";

import React, { useState } from "react";

export function StudioView() {
  const [title, setTitle] = useState(
    "Banks post steady Q2 profits, but margins are the number to watch"
  );
  const [slug, setSlug] = useState("/news/bank-q2-results-margins");
  const [isPublished, setIsPublished] = useState(false);
  const [activeNav, setActiveNav] = useState("Articles");

  return (
    <div className="space-y-8 pb-16">
      {/* HEADER */}
      <section className="pt-4 border-b border-gray-100 dark:border-[#1a2d25] pb-6">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          HEADLESS CMS
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 dark:text-white tracking-tight mt-1">
          Sanity Studio: how your team publishes
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          Interactive simulation of the editorial workspace. Write, preview SEO in real time, and publish without requiring developer deployments.
        </p>
      </section>

      {/* STUDIO WORKSPACE SHELL */}
      <div className="rounded-3xl border border-gray-200 dark:border-[#1e332a] bg-white dark:bg-[#111e19] shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
        {/* Left Sidebar: Document Types (3 cols) */}
        <div className="md:col-span-3 bg-gray-50/70 dark:bg-[#0c1713] border-r border-gray-200 dark:border-[#1e332a] p-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-gray-400 block px-2 mb-2">
                Content Schemas
              </span>
              <div className="space-y-1 text-xs">
                {["Articles", "IPOs", "Calculators", "Case studies", "Services"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveNav(item)}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-all font-medium ${
                      activeNav === item
                        ? "bg-emerald-100/70 text-emerald-800 dark:bg-[#1a382b] dark:text-emerald-300 font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#162720]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200 dark:border-[#1e332a]">
              <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-gray-400 block px-2 mb-2">
                Setup & Taxonomy
              </span>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <div className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-[#162720] rounded-lg cursor-pointer">
                  Authors
                </div>
                <div className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-[#162720] rounded-lg cursor-pointer">
                  Categories
                </div>
                <div className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-[#162720] rounded-lg cursor-pointer">
                  Redirects & 301
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-[#1e332a] text-[11px] text-gray-400 font-mono">
            Connected to Sanity Content Lake
          </div>
        </div>

        {/* Center: Main Editor Form (6 cols) */}
        <div className="md:col-span-6 p-6 space-y-5 border-r border-gray-200 dark:border-[#1e332a] overflow-y-auto">
          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-lg sm:text-xl font-serif font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-[#0c1713] border border-gray-200 dark:border-[#1e332a] rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">
              Slug
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-[#0c1713] border border-gray-200 dark:border-[#1e332a] rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 block mb-2">
              Body (Portable Text Editor)
            </label>

            {/* Rich Editor Toolbar */}
            <div className="flex items-center gap-1 p-2 bg-gray-50 dark:bg-[#0c1713] border border-gray-200 dark:border-[#1e332a] rounded-t-xl text-xs flex-wrap">
              <span className="px-2 py-1 font-bold rounded hover:bg-gray-200 dark:hover:bg-[#1e332a] cursor-pointer">B</span>
              <span className="px-2 py-1 italic rounded hover:bg-gray-200 dark:hover:bg-[#1e332a] cursor-pointer">I</span>
              <span className="px-2 py-1 font-mono font-bold rounded hover:bg-gray-200 dark:hover:bg-[#1e332a] cursor-pointer">H2</span>
              <span className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-[#1e332a] cursor-pointer">Link</span>
              <span className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-[#1e332a] cursor-pointer">Image</span>
              <span className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-[#1e332a] cursor-pointer">Table</span>
              <span className="px-2 py-1 bg-emerald-100 dark:bg-[#16382a] text-emerald-800 dark:text-emerald-300 font-semibold rounded cursor-pointer">
                Callout
              </span>
              <span className="px-2 py-1 bg-emerald-100 dark:bg-[#16382a] text-emerald-800 dark:text-emerald-300 font-semibold rounded cursor-pointer">
                + Calculator
              </span>
            </div>

            {/* Textarea simulation */}
            <div className="p-4 bg-white dark:bg-[#111e19] border-x border-b border-gray-200 dark:border-[#1e332a] rounded-b-xl min-h-[180px] font-serif text-sm leading-relaxed text-gray-800 dark:text-gray-200">
              Net interest margins narrowed at three of the five largest private lenders this quarter.{" "}
              <span className="font-sans text-xs bg-emerald-50 dark:bg-[#1a382b] text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-medium">
                Type &ldquo;/&rdquo; to insert a table, image, key-takeaways box or an interactive calculator.
              </span>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Status, SERP Preview & Checks (3 cols) */}
        <div className="md:col-span-3 p-5 space-y-6 bg-gray-50/50 dark:bg-[#0c1713] flex flex-col justify-between">
          <div className="space-y-6">
            {/* Status & Publish Button */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">
                  Document Status
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                    isPublished
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                      : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                  }`}
                >
                  {isPublished ? "Published" : "Draft"}
                </span>
              </div>

              <button
                onClick={() => setIsPublished(!isPublished)}
                className={`w-full py-2.5 rounded-xl text-xs font-semibold text-white transition-all shadow-sm ${
                  isPublished
                    ? "bg-gray-700 hover:bg-gray-800"
                    : "bg-[#00b074] hover:bg-[#009663]"
                }`}
              >
                {isPublished ? "Unpublish changes" : "Publish to live website"}
              </button>
            </div>

            {/* Live SERP Preview */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">
                Google SERP Preview
              </span>
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] space-y-1 text-xs">
                <span className="text-[11px] text-emerald-700 dark:text-emerald-400 truncate block font-mono">
                  yourbrand.com › news › bank-q2-results
                </span>
                <h5 className="font-bold text-gray-900 dark:text-white line-clamp-1 font-serif text-sm">
                  {title.slice(0, 48)} | YourBrand
                </h5>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                  Net interest margins narrowed at three of five large private banks. See what it means for loan and deposit rates.
                </p>
              </div>
            </div>

            {/* Automated SEO & Quality Checks */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">
                Automated Quality Checks
              </span>
              <div className="space-y-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <div className="flex items-center gap-1.5">
                  <span>✓</span> <span>Meta description length optimal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>✓</span> <span>Canonical tag auto-configured</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>✓</span> <span>Author & category assigned</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>✓</span> <span>JSON-LD Structured data generated</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-gray-400 font-mono pt-4 border-t border-gray-200 dark:border-[#1e332a]">
            Incremental Static Regeneration (ISR) ensures sub-second updates across all edge caches.
          </div>
        </div>
      </div>

      {/* NOTICE */}
      <div className="p-5 rounded-2xl bg-emerald-50/80 dark:bg-[#11241c] border border-emerald-200 dark:border-[#1e332a] text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
        <strong className="text-emerald-800 dark:text-emerald-400 font-bold block mb-1">
          What this means for your team:
        </strong>
        Write, format, schedule and publish without requiring a software engineer. Rich fields enforce consistent formatting and rigorous SEO parameters across every post.
      </div>
    </div>
  );
}
