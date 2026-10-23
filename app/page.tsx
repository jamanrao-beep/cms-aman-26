"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { TickerStrip } from "./components/TickerStrip";
import { SearchModal } from "./components/SearchModal";
import { OverviewView } from "./components/views/OverviewView";
import { MarketsView } from "./components/views/MarketsView";
import { CalculatorsView } from "./components/views/CalculatorsView";
import { LearnView } from "./components/views/LearnView";
import { IpoView } from "./components/views/IpoView";
import { ArticleView } from "./components/views/ArticleView";
import { StudioView } from "./components/views/StudioView";
import { ArchitectureView } from "./components/views/ArchitectureView";

export default function Home() {
  const [currentView, setCurrentView] = useState<string>("overview");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Synchronize dark mode class and data-theme on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  // Global keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf8] text-[#111827] dark:bg-[#09120e] dark:text-[#f3f4f6] transition-colors duration-200">
      {/* Top sticky Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Market Ticker Strip */}
      <TickerStrip onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {currentView === "overview" && <OverviewView onNavigate={handleNavigate} />}
        {currentView === "markets" && <MarketsView onNavigate={handleNavigate} />}
        {currentView === "calc" && <CalculatorsView />}
        {currentView === "ipo" && <IpoView />}
        {currentView === "learn" && (
          <LearnView
            onNavigate={handleNavigate}
            onOpenSearch={() => setSearchOpen(true)}
          />
        )}
        {currentView === "article" && <ArticleView onNavigate={handleNavigate} />}
        {currentView === "studio" && <StudioView />}
        {currentView === "arch" && <ArchitectureView />}
      </main>

      {/* Global Glossary & Pages Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Global Footer */}
      <footer className="border-t border-gray-200 dark:border-[#1a2d25] bg-white dark:bg-[#0a1410] py-8 text-xs text-gray-500 dark:text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-gray-900 dark:text-white">Sanity Finance</span>
            <span>© 2026. For education only, not investment advice.</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium flex-wrap">
            <button onClick={() => handleNavigate("overview")} className="hover:text-emerald-600 transition-colors">
              Overview
            </button>
            <button onClick={() => handleNavigate("markets")} className="hover:text-emerald-600 transition-colors">
              Markets
            </button>
            <button onClick={() => handleNavigate("calc")} className="hover:text-emerald-600 transition-colors">
              Calculators
            </button>
            <button onClick={() => handleNavigate("ipo")} className="hover:text-emerald-600 transition-colors">
              IPO Dashboard
            </button>
            <button onClick={() => handleNavigate("learn")} className="hover:text-emerald-600 transition-colors">
              Learn
            </button>
            <button onClick={() => handleNavigate("studio")} className="hover:text-emerald-600 transition-colors">
              Sanity Studio
            </button>
            <button onClick={() => handleNavigate("arch")} className="hover:text-emerald-600 transition-colors">
              Architecture
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
