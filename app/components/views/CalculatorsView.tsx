"use client";

import React, { useState } from "react";
import { PlantOnCoinsVisual } from "../visuals/PlantOnCoinsVisual";
import { HouseWithCoinsVisual } from "../visuals/HouseWithCoinsVisual";

export function CalculatorsView() {
  const [activeTab, setActiveTab] = useState<"SIP" | "EMI" | "Lump sum">("SIP");

  // SIP Inputs
  const [sipMonthly, setSipMonthly] = useState<number>(10000);
  const [sipRate, setSipRate] = useState<number>(12);
  const [sipYears, setSipYears] = useState<number>(15);

  // EMI Inputs (Default ₹35,00,000, 8.7%, 20 years matching screenshot)
  const [emiAmount, setEmiAmount] = useState<number>(3500000);
  const [emiRate, setEmiRate] = useState<number>(8.7);
  const [emiYears, setEmiYears] = useState<number>(20);
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  // Lump Sum Inputs
  const [lumpAmount, setLumpAmount] = useState<number>(100000);
  const [lumpRate, setLumpRate] = useState<number>(12);
  const [lumpYears, setLumpYears] = useState<number>(15);

  // Formatting helpers
  const formatInr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
  const formatLakhOrCr = (n: number) => {
    if (n >= 1e7) return "₹" + (n / 1e7).toFixed(2) + " crore";
    if (n >= 1e5) return "₹" + (n / 1e5).toFixed(2) + " lakh";
    return formatInr(n);
  };
  const formatCompact = (n: number) => {
    if (n >= 1e7) return "₹" + (n / 1e7).toFixed(2) + "Cr";
    if (n >= 1e5) return "₹" + (n / 1e5).toFixed(2) + "L";
    return "₹" + Math.round(n / 1000) + "k";
  };

  // 1. SIP Calculations
  const sipMonthlyRate = sipRate / 1200;
  const sipMonths = sipYears * 12;
  const sipInvested = sipMonthly * sipMonths;
  const sipTotalValue =
    sipMonthlyRate > 0
      ? sipMonthly * ((Math.pow(1 + sipMonthlyRate, sipMonths) - 1) / sipMonthlyRate) * (1 + sipMonthlyRate)
      : sipInvested;
  const sipReturns = sipTotalValue - sipInvested;
  const sipInvestedPct = Math.round((sipInvested / sipTotalValue) * 100) || 0;
  const sipReturnsPct = 100 - sipInvestedPct;

  const sipPoints: { year: number; invested: number; total: number }[] = [];
  for (let y = 0; y <= sipYears; y++) {
    const m = y * 12;
    const inv = sipMonthly * m;
    const tot =
      sipMonthlyRate > 0 && m > 0
        ? sipMonthly * ((Math.pow(1 + sipMonthlyRate, m) - 1) / sipMonthlyRate) * (1 + sipMonthlyRate)
        : inv;
    sipPoints.push({ year: y, invested: inv, total: tot });
  }

  // 2. EMI Calculations (Exact formula from financial standards)
  const emiMonthlyRate = emiRate / 1200;
  const emiMonths = emiYears * 12;
  const monthlyEmi =
    emiMonthlyRate > 0
      ? (emiAmount * emiMonthlyRate * Math.pow(1 + emiMonthlyRate, emiMonths)) /
        (Math.pow(1 + emiMonthlyRate, emiMonths) - 1)
      : emiAmount / emiMonths;

  const emiTotalRepayment = monthlyEmi * emiMonths;
  const emiTotalInterest = emiTotalRepayment - emiAmount;
  const emiPrincipalPct = Math.round((emiAmount / emiTotalRepayment) * 100) || 0;
  const emiInterestPct = 100 - emiPrincipalPct;

  // Yearly amortization schedule generator
  const emiSchedule: { year: number; principalPaid: number; interestPaid: number; balance: number }[] = [];
  let currentBalance = emiAmount;
  for (let y = 1; y <= emiYears; y++) {
    let yearInterest = 0;
    let yearPrincipal = 0;
    for (let m = 0; m < 12; m++) {
      const interestForMonth = currentBalance * emiMonthlyRate;
      const principalForMonth = monthlyEmi - interestForMonth;
      yearInterest += interestForMonth;
      yearPrincipal += principalForMonth;
      currentBalance = Math.max(0, currentBalance - principalForMonth);
    }
    emiSchedule.push({
      year: y,
      principalPaid: Math.round(yearPrincipal),
      interestPaid: Math.round(yearInterest),
      balance: Math.round(currentBalance),
    });
  }

  // 3. Lump Sum Calculations
  const lumpTotalValue = lumpAmount * Math.pow(1 + lumpRate / 100, lumpYears);
  const lumpReturns = lumpTotalValue - lumpAmount;
  const lumpInvestedPct = Math.round((lumpAmount / lumpTotalValue) * 100) || 0;
  const lumpReturnsPct = 100 - lumpInvestedPct;

  // Mode flags
  const isSip = activeTab === "SIP";
  const isEmi = activeTab === "EMI";

  // Donut SVG circumference calculation (r = 54, circumference = 2 * PI * 54 = 339.292)
  const donutCircumference = 339.292;
  const donutGreenPct = isSip ? sipInvestedPct : isEmi ? emiPrincipalPct : lumpInvestedPct;
  const donutRedPct = isSip ? sipReturnsPct : isEmi ? emiInterestPct : lumpReturnsPct;
  const greenStrokeDash = (donutGreenPct / 100) * donutCircumference;
  const redStrokeDash = (donutRedPct / 100) * donutCircumference;

  // SIP Growth Area Chart SVG
  const chartMaxVal = Math.max(...sipPoints.map((p) => p.total)) * 1.15;
  const svgW = 540;
  const svgH = 180;
  const padL = 35;
  const padR = 25;
  const padT = 20;
  const padB = 30;
  const plotW = svgW - padL - padR;
  const plotH = svgH - padT - padB;

  const totalPointsPath = sipPoints
    .map((p, idx) => {
      const x = padL + (p.year / sipYears) * plotW;
      const y = padT + plotH - (p.total / chartMaxVal) * plotH;
      return `${idx === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  const totalAreaPath =
    totalPointsPath +
    ` L ${(padL + plotW).toFixed(1)} ${(padT + plotH).toFixed(1)} L ${padL} ${(padT + plotH).toFixed(1)} Z`;

  const investedPointsPath = sipPoints
    .map((p, idx) => {
      const x = padL + (p.year / sipYears) * plotW;
      const y = padT + plotH - (p.invested / chartMaxVal) * plotH;
      return `${idx === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  const lastPoint = sipPoints[sipPoints.length - 1];
  const lastTotalY = padT + plotH - (lastPoint.total / chartMaxVal) * plotH;
  const lastInvestedY = padT + plotH - (lastPoint.invested / chartMaxVal) * plotH;

  return (
    <div className="space-y-8 pb-16">
      {/* BREADCRUMB */}
      <div className="text-xs font-mono text-gray-500 pt-2 flex items-center gap-1.5">
        <span>Home</span>
        <span>/</span>
        <span>Calculators</span>
        {isEmi && (
          <>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-200 font-semibold">EMI</span>
          </>
        )}
      </div>

      {/* DYNAMIC HEADER SECTION BASED ON TAB */}
      <section className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 dark:border-[#1a2d25] pb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight">
            {isEmi ? "A clearer plan for your next big step." : "Small steps. Bigger possibilities."}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2">
            {isEmi ? "Understand your loan before you commit." : "Bring your financial goals into focus."}
          </p>
        </div>

        {/* Top Right Visual: House for EMI, Plant on Coins for SIP */}
        <div className="shrink-0 flex justify-end">
          <div className="w-48 sm:w-60 h-auto">
            {isEmi ? (
              <HouseWithCoinsVisual className="w-full h-auto drop-shadow-sm" />
            ) : (
              <PlantOnCoinsVisual className="w-full h-auto drop-shadow-sm" />
            )}
          </div>
        </div>
      </section>

      {/* MAIN CALCULATOR CONTAINER */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs space-y-8">
        {/* TABS: SIP / EMI / LUMP SUM */}
        <div className="flex items-center gap-8 border-b border-gray-100 dark:border-[#1e332a] pb-4">
          {(["SIP", "EMI", "Lump sum"] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 font-semibold text-sm transition-colors cursor-pointer ${
                  isActive
                    ? "text-emerald-700 dark:text-emerald-400 font-bold"
                    : "text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
              >
                {tab}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* 2-COLUMN INPUTS AND RESULTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: SLIDERS & NUMERIC BOXES (5 Cols) */}
          <div className="lg:col-span-5 space-y-7">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white">
                {isEmi ? "Your loan details" : "Investment details"}
              </h3>
              <span className="text-[11px] font-mono text-gray-400">All figures are illustrative ⓘ</span>
            </div>

            {/* Input 1 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {isEmi ? "Loan amount" : isSip ? "Monthly investment" : "Total investment"}
                </label>
                <div className="px-3.5 py-1.5 rounded-lg bg-gray-50 dark:bg-[#0c1713] border border-gray-200 dark:border-[#1e332a] font-mono font-bold text-sm text-gray-900 dark:text-white">
                  {formatInr(isEmi ? emiAmount : isSip ? sipMonthly : lumpAmount)}
                </div>
              </div>

              <input
                type="range"
                min={isEmi ? 500000 : isSip ? 500 : 10000}
                max={isEmi ? 50000000 : isSip ? 100000 : 5000000}
                step={isEmi ? 50000 : isSip ? 500 : 5000}
                value={isEmi ? emiAmount : isSip ? sipMonthly : lumpAmount}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (isEmi) setEmiAmount(val);
                  else if (isSip) setSipMonthly(val);
                  else setLumpAmount(val);
                }}
                className="w-full h-1.5 bg-gray-200 dark:bg-[#1e332a] rounded-lg cursor-pointer accent-emerald-500"
              />

              <div className="flex justify-between text-[11px] font-mono text-gray-400">
                <span>{isEmi ? "₹5 lakh" : isSip ? "₹500" : "₹10,000"}</span>
                <span>{isEmi ? "₹5 crore" : isSip ? "₹1,00,000" : "₹50,00,000"}</span>
              </div>
            </div>

            {/* Input 2 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {isEmi ? "Interest rate (p.a.)" : "Expected return (p.a.)"}
                </label>
                <div className="px-3.5 py-1.5 rounded-lg bg-gray-50 dark:bg-[#0c1713] border border-gray-200 dark:border-[#1e332a] font-mono font-bold text-sm text-gray-900 dark:text-white">
                  {isEmi ? emiRate : isSip ? sipRate : lumpRate} %
                </div>
              </div>

              <input
                type="range"
                min={isEmi ? 5 : isSip ? 4 : 1}
                max={isEmi ? 15 : isSip ? 20 : 30}
                step={0.1}
                value={isEmi ? emiRate : isSip ? sipRate : lumpRate}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (isEmi) setEmiRate(val);
                  else if (isSip) setSipRate(val);
                  else setLumpRate(val);
                }}
                className="w-full h-1.5 bg-gray-200 dark:bg-[#1e332a] rounded-lg cursor-pointer accent-emerald-500"
              />

              <div className="flex justify-between text-[11px] font-mono text-gray-400">
                <span>{isEmi ? "5%" : isSip ? "4%" : "1%"}</span>
                <span>{isEmi ? "15%" : isSip ? "20%" : "30%"}</span>
              </div>
            </div>

            {/* Input 3 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {isEmi ? "Loan tenure" : "Time period"}
                </label>
                <div className="px-3.5 py-1.5 rounded-lg bg-gray-50 dark:bg-[#0c1713] border border-gray-200 dark:border-[#1e332a] font-mono font-bold text-sm text-gray-900 dark:text-white">
                  {isEmi ? emiYears : isSip ? sipYears : lumpYears} years
                </div>
              </div>

              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={isEmi ? emiYears : isSip ? sipYears : lumpYears}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (isEmi) setEmiYears(val);
                  else if (isSip) setSipYears(val);
                  else setLumpYears(val);
                }}
                className="w-full h-1.5 bg-gray-200 dark:bg-[#1e332a] rounded-lg cursor-pointer accent-emerald-500"
              />

              <div className="flex justify-between text-[11px] font-mono text-gray-400">
                <span>1 year</span>
                <span>30 years</span>
              </div>
            </div>
          </div>

          {/* RIGHT: RESULTS & DONUT / SCHEDULE (7 Cols) */}
          <div className="lg:col-span-7 bg-[#fbfdfc] dark:bg-[#0c1713] rounded-2xl p-6 border border-gray-100 dark:border-[#1a2d25] space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                {isEmi ? "Your monthly EMI" : "Your projected investment"}
              </span>
              <span className="text-[11px] font-mono text-gray-400">Illustrative data ⓘ</span>
            </div>

            {/* Big Headline Number */}
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#00b074]">
              {isEmi ? formatInr(monthlyEmi) : formatLakhOrCr(isSip ? sipTotalValue : lumpTotalValue)}
            </div>

            {/* 3 Metrics breakdown row */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-gray-100 dark:border-[#1e332a]">
              <div>
                <span className="text-xs text-gray-400 block font-medium">
                  {isEmi ? "Principal amount" : "Invested amount"}
                </span>
                <strong className="text-sm sm:text-base font-bold font-mono text-gray-800 dark:text-gray-200">
                  {isEmi ? formatLakhOrCr(emiAmount) : formatLakhOrCr(isSip ? sipInvested : lumpAmount)}
                </strong>
              </div>

              <div>
                <span className="text-xs text-gray-400 block font-medium">
                  {isEmi ? "Total interest" : "Estimated returns"}
                </span>
                <strong className="text-sm sm:text-base font-bold font-mono text-gray-800 dark:text-gray-200">
                  {isEmi ? formatLakhOrCr(emiTotalInterest) : formatLakhOrCr(isSip ? sipReturns : lumpReturns)}
                </strong>
              </div>

              <div>
                <span className="text-xs text-gray-400 block font-medium">
                  {isEmi ? "Total repayment" : "Total value"}
                </span>
                <strong className="text-sm sm:text-base font-bold font-mono text-gray-800 dark:text-gray-200">
                  {isEmi ? formatLakhOrCr(emiTotalRepayment) : formatLakhOrCr(isSip ? sipTotalValue : lumpTotalValue)}
                </strong>
              </div>
            </div>

            {/* REPAYMENT / INVESTMENT BREAKDOWN DONUT */}
            <div className="pt-4 border-t border-gray-100 dark:border-[#1e332a] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Donut Chart */}
              <div className="flex items-center gap-6">
                <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#f1f5f9" strokeWidth="12" className="dark:stroke-[#1a2d25]" />
                    {/* Green Segment (Principal / Invested) */}
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#00b074"
                      strokeWidth="12"
                      strokeDasharray={`${greenStrokeDash} ${donutCircumference}`}
                    />
                    {/* Red Segment (Interest / Returns) */}
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#e63946"
                      strokeWidth="12"
                      strokeDasharray={`${redStrokeDash} ${donutCircumference}`}
                      strokeDashoffset={-greenStrokeDash}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
                    <span className="text-xs font-bold font-mono text-gray-900 dark:text-white leading-tight">
                      {isEmi ? formatLakhOrCr(emiTotalRepayment) : formatLakhOrCr(isSip ? sipTotalValue : lumpTotalValue)}
                    </span>
                    <span className="text-[9px] text-gray-400 mt-0.5">
                      {isEmi ? "Total repayment" : "Total value"}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e63946]" />
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong className="text-gray-900 dark:text-white">{donutRedPct}%</strong> {isEmi ? "Interest" : "Returns"} ({isEmi ? formatLakhOrCr(emiTotalInterest) : formatLakhOrCr(isSip ? sipReturns : lumpReturns)})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00b074]" />
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong className="text-gray-900 dark:text-white">{donutGreenPct}%</strong> {isEmi ? "Principal" : "Invested"} ({isEmi ? formatLakhOrCr(emiAmount) : formatLakhOrCr(isSip ? sipInvested : lumpAmount)})
                    </span>
                  </div>
                </div>
              </div>

              {/* Callout box on right */}
              {isEmi && (
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-[#142820] border border-emerald-100 dark:border-[#1e3c30] flex items-start gap-2.5 max-w-xs">
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm">📅</span>
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    You&rsquo;ll pay <strong>{formatLakhOrCr(emiTotalInterest)}</strong> in interest, which is <strong>{emiInterestPct}%</strong> of your total repayment.
                  </p>
                </div>
              )}
            </div>

            {/* SIP GROWTH CHART (Shown for SIP / Lump Sum) */}
            {!isEmi && (
              <div className="pt-4 border-t border-gray-100 dark:border-[#1e332a]">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Investment growth over time
                  </span>
                  <div className="flex items-center gap-4 text-[11px] text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00b074]" />
                      Projected value (₹)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#e63946]" />
                      Invested amount (₹)
                    </span>
                  </div>
                </div>

                <div className="w-full overflow-hidden">
                  <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-auto overflow-visible" fill="none">
                    <defs>
                      <linearGradient id="growthAreaGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00b074" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#00b074" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>

                    {[0, 15, 30, 45, 60].map((val, i) => {
                      const y = padT + plotH - (i / 4) * plotH;
                      return (
                        <g key={val}>
                          <line x1={padL} y1={y} x2={padL + plotW} y2={y} stroke="#e5e7eb" strokeDasharray="3 3" opacity="0.6" className="dark:stroke-[#223d32]" />
                          <text x={padL - 6} y={y + 3} fill="#9ca3af" fontSize="9" fontFamily="var(--font-mono)" textAnchor="end">
                            {val}
                          </text>
                        </g>
                      );
                    })}

                    <path d={totalAreaPath} fill="url(#growthAreaGrad2)" />
                    <path d={investedPointsPath} stroke="#e63946" strokeWidth="2" fill="none" />
                    <path d={totalPointsPath} stroke="#00b074" strokeWidth="2.5" fill="none" />

                    <g transform={`translate(${padL + plotW - 10}, ${lastTotalY - 14})`}>
                      <rect x="0" y="0" width="52" height="18" rx="4" fill="#00b074" />
                      <text x="26" y="12" fill="#ffffff" fontSize="9.5" fontWeight="bold" fontFamily="var(--font-mono)" textAnchor="middle">
                        {formatCompact(sipTotalValue)}
                      </text>
                    </g>

                    <g transform={`translate(${padL + plotW - 10}, ${lastInvestedY - 10})`}>
                      <rect x="0" y="0" width="42" height="16" rx="4" fill="#e63946" />
                      <text x="21" y="11" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="var(--font-mono)" textAnchor="middle">
                        {formatCompact(sipInvested)}
                      </text>
                    </g>

                    {[0, 2, 4, 6, 8, 10, 12, 14, 15].filter((y) => y <= sipYears).map((y) => {
                      const x = padL + (y / sipYears) * plotW;
                      return (
                        <text key={y} x={x} y={svgH - 10} fill="#9ca3af" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">
                          {y}
                        </text>
                      );
                    })}
                    <text x={padL + plotW / 2} y={svgH} fill="#9ca3af" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">
                      Years
                    </text>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* EMI AMORTIZATION SCHEDULE TABLE & "WHAT AFFECTS YOUR EMI?" (From Screenshot 3) */}
      {isEmi && (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Schedule Table (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white">
                Repayment schedule (yearly summary)
              </h3>
              <span className="text-[11px] font-mono text-gray-400">Illustrative data ⓘ</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-[#1e332a] text-gray-500">
                    <th className="py-2.5 font-semibold">Year</th>
                    <th className="py-2.5 text-right font-semibold">Principal paid (₹) ↕</th>
                    <th className="py-2.5 text-right font-semibold">Interest paid (₹) ↕</th>
                    <th className="py-2.5 text-right font-semibold">Balance (₹) ↕</th>
                    <th className="py-2.5 text-right font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-[#1e332a]">
                  {emiSchedule.slice(0, 5).map((row) => (
                    <tr
                      key={row.year}
                      className="hover:bg-gray-50 dark:hover:bg-[#162720] transition-colors cursor-pointer"
                      onClick={() => setExpandedYear(expandedYear === row.year ? null : row.year)}
                    >
                      <td className="py-3 font-semibold text-gray-900 dark:text-white">{row.year}</td>
                      <td className="py-3 text-right text-gray-800 dark:text-gray-200">{row.principalPaid.toLocaleString("en-IN")}</td>
                      <td className="py-3 text-right text-gray-800 dark:text-gray-200">{row.interestPaid.toLocaleString("en-IN")}</td>
                      <td className="py-3 text-right font-bold text-emerald-600 dark:text-emerald-400">{row.balance.toLocaleString("en-IN")}</td>
                      <td className="py-3 text-right text-gray-400">{expandedYear === row.year ? "▲" : "▼"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-gray-400 pt-2 border-t border-gray-100 dark:border-[#1e332a]">
              ⓘ These are estimates only and exclude processing fees, insurance and other charges. Actual results may differ.
            </p>
          </div>

          {/* "What affects your EMI?" (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] shadow-xs space-y-5">
            <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white">
              What affects your EMI?
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-[#22171a] text-rose-500 font-bold flex items-center justify-center shrink-0">
                  %
                </div>
                <div>
                  <h5 className="font-bold text-xs text-gray-900 dark:text-white">Rate</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                    A higher interest rate increases your EMI, and a lower rate reduces it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-[#162e24] text-emerald-600 flex items-center justify-center shrink-0">
                  📅
                </div>
                <div>
                  <h5 className="font-bold text-xs text-gray-900 dark:text-white">Tenure</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                    A longer tenure lowers your EMI, but increases the total interest paid.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-[#252014] text-amber-600 flex items-center justify-center shrink-0">
                  💰
                </div>
                <div>
                  <h5 className="font-bold text-xs text-gray-900 dark:text-white">Loan amount</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                    A higher loan amount increases your EMI, and a lower amount reduces it.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[10px] text-gray-400 text-right">
              Illustrative data. For educational purposes only.
            </div>
          </div>
        </section>
      )}

      {/* 3 EDUCATIONAL CARDS (Shown for SIP) */}
      {!isEmi && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-[#162e24] flex items-center justify-center text-emerald-600 shrink-0">
              🌱
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">How SIP works</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                You invest a fixed amount regularly, which buys more units when prices are low and fewer units when prices are high, helping you average your cost over time.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-[#162e24] flex items-center justify-center text-emerald-600 shrink-0">
              📊
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">Why consistency matters</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Staying invested through market ups and downs can help you benefit from compounding and potentially higher long-term returns.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#111e19] border border-gray-200 dark:border-[#1e332a] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-[#162e24] flex items-center justify-center text-emerald-600 shrink-0">
              📋
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">Understand the assumptions</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                This calculator assumes a constant rate of return and regular, on-time investments. Actual returns may vary due to market fluctuations, fees, taxes and other factors.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER DISCLAIMER */}
      <div className="text-center text-xs font-mono text-gray-400 pt-2">
        Illustrative projections. Returns are not guaranteed.
      </div>
    </div>
  );
}
