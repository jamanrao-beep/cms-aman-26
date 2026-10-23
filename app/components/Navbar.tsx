"use client";

import React, { useState } from "react";
import { FacetedBullLogo } from "./FacetedBullLogo";

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenSearch: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Navbar({
  currentView,
  onNavigate,
  onOpenSearch,
  darkMode,
  onToggleDarkMode,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const navLinks = [
    { id: "overview", label: "Overview" },
    { id: "markets", label: "Markets" },
    { id: "ipo", label: "IPOs" },
    { id: "calc", label: "Calculators" },
    { id: "learn", label: "Learn" },
  ];

  const secondaryLinks = [
    { id: "article", label: "Quarterly Analysis Article" },
    { id: "studio", label: "Sanity Studio CMS" },
    { id: "arch", label: "Architecture & Hostinger" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0a1410]/95 backdrop-blur-md border-b border-gray-100 dark:border-[#1a2d25] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo only (No overlapping text) */}
          <button
            className="flex items-center cursor-pointer group shrink-0 p-1 rounded-xl hover:opacity-90 transition-opacity focus:outline-none"
            onClick={() => onNavigate("overview")}
            aria-label="Home Overview"
          >
            <FacetedBullLogo className="h-10 w-auto" />
          </button>

          {/* Desktop Navigation Links (Clean 5 tabs from screenshot) */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              const isRedActive = link.id === "ipo" || link.id === "learn";
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`relative px-3.5 py-1.5 text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? isRedActive
                        ? "text-rose-600 dark:text-rose-400"
                        : "text-emerald-700 dark:text-emerald-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${
                        isRedActive ? "bg-rose-600 dark:bg-rose-400" : "bg-emerald-600 dark:bg-emerald-400"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-50 dark:bg-[#12221b] border border-gray-200 dark:border-[#1e332a] transition-all hover:border-emerald-500"
              aria-label="Search"
            >
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden sm:inline text-xs">Search terms or pages...</span>
              <kbd className="hidden lg:inline text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-200/60 dark:bg-[#1c3329] text-gray-500">⌘K</kbd>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-200 dark:border-[#223d32] bg-gray-50 dark:bg-[#162720] text-gray-700 dark:text-gray-200 hover:border-emerald-500 transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Toggle theme"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <>
                  <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <span className="hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </button>

            {/* "Explore tools ->" Button from Screenshot */}
            <button
              onClick={() => onNavigate("calc")}
              className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold bg-[#00b074] hover:bg-[#009663] text-white shadow-sm transition-all shadow-emerald-500/20 active:scale-95"
            >
              <span>Explore tools</span>
              <span>→</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0e1a15] border-b border-gray-200 dark:border-[#1a2d25] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
                currentView === link.id
                  ? "bg-emerald-50 dark:bg-[#162e24] text-emerald-700 dark:text-emerald-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-gray-100 dark:border-[#1a2d25]">
            <div className="px-3 py-1 text-[11px] font-mono uppercase text-gray-400">Additional Features</div>
            {secondaryLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
