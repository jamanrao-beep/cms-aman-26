"use client";

import React, { useState, useEffect, useRef } from "react";
import { GLOSSARY, SITE_PAGES, GlossaryItem, SitePage } from "../data/glossary";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export function SearchModal({ isOpen, onClose, onNavigate }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Exact matching algorithm from HTML code
  const q = query.trim().toLowerCase();
  
  let terms: GlossaryItem[] = [];
  let pages: SitePage[] = [];

  if (q) {
    terms = GLOSSARY.map((g) => {
      const names = [g.term, ...g.aliases].map((x) => x.toLowerCase());
      const score = names.includes(q)
        ? 3
        : names.some((x) => x.startsWith(q))
        ? 2
        : names.some((x) => x.includes(q)) || (q.length >= 3 && g.definition.toLowerCase().includes(q))
        ? 1
        : 0;
      return { score, item: g };
    })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.item);

    pages = SITE_PAGES.filter((p) =>
      (p.title + " " + p.description + " " + p.keywords).toLowerCase().includes(q)
    );
  }

  const primaryTerm = terms[0];
  const relatedTerms = terms.slice(1, 6);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
    if (e.key === "Enter") {
      if (primaryTerm) {
        onNavigate(primaryTerm.page);
        onClose();
      } else if (pages.length > 0) {
        onNavigate(pages[0].id);
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#111e19] rounded-2xl shadow-2xl border border-gray-200 dark:border-[#223d32] overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-gray-100 dark:border-[#1e332a] gap-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search terms or pages, e.g. IPO, SIP, EMI, Repo rate..."
            className="w-full bg-transparent text-base md:text-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-[#1a2d25] text-gray-500 rounded hover:bg-gray-200 dark:hover:bg-[#253f34]"
          >
            ESC
          </button>
        </div>

        {/* Search Suggestions & Quick Filters */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-gray-50/80 dark:bg-[#0c1713] border-b border-gray-100 dark:border-[#1e332a] text-xs text-gray-500 flex-wrap">
          <span className="font-medium text-gray-600 dark:text-gray-400">Try searching:</span>
          {["IPO", "SIP", "EMI", "GMP", "Repo rate", "Compounding"].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-0.5 rounded-full bg-white dark:bg-[#162720] border border-gray-200 dark:border-[#223d32] hover:border-emerald-500 text-gray-700 dark:text-gray-300 font-medium transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-5 space-y-4 flex-1">
          {!q && (
            <div className="text-center py-10 space-y-2">
              <p className="text-gray-600 dark:text-gray-300 font-medium">Search the glossary and site pages</p>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                Type any financial acronym or concept to see instant plain-language definitions and launch interactive tools.
              </p>
            </div>
          )}

          {q && !terms.length && !pages.length && (
            <div className="p-6 text-center text-gray-500 dark:text-gray-400">
              No results found for <span className="font-semibold text-gray-800 dark:text-gray-200">“{query}”</span>.
              Try searching for <span className="text-emerald-600 font-medium">IPO, SIP, EMI, or GMP</span>.
            </div>
          )}

          {/* Primary Featured Definition Card */}
          {primaryTerm && (
            <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-[#132c22] border border-emerald-200/80 dark:border-[#1e4838]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded">
                  Definition
                </span>
                <span className="text-xs text-gray-400 font-mono">Press Enter ↵</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-900 dark:text-white">
                {primaryTerm.term}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 mt-1 leading-relaxed">
                {primaryTerm.definition}
              </p>
              <button
                onClick={() => {
                  onNavigate(primaryTerm.page);
                  onClose();
                }}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200"
              >
                <span>{primaryTerm.linkLabel}</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          )}

          {/* Related Terms */}
          {relatedTerms.length > 0 && (
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2">
                Related Terms
              </span>
              <div className="space-y-1.5">
                {relatedTerms.map((t) => (
                  <button
                    key={t.term}
                    onClick={() => setQuery(t.term)}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-[#162720] transition-colors border border-transparent hover:border-gray-200 dark:hover:border-[#223d32] group"
                  >
                    <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {t.term}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                      {t.definition}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matching Pages */}
          {pages.length > 0 && (
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2">
                Matching Pages
              </span>
              <div className="space-y-1.5">
                {pages.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onNavigate(p.id);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-[#162720] transition-colors border border-transparent hover:border-gray-200 dark:hover:border-[#223d32] flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {p.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {p.description}
                      </div>
                    </div>
                    <span className="text-gray-400 group-hover:text-emerald-600 text-sm">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
