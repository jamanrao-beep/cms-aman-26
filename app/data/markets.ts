export interface MarketIndex {
  name: string;
  value: string;
  change: string;
  percent: string;
  isPositive: boolean;
  subtext?: string;
  sparkline: number[];
}

export const TOP_INDICES: MarketIndex[] = [
  {
    name: "NIFTY 50",
    value: "22,694.30",
    change: "-183.40",
    percent: "-0.80%",
    isPositive: false,
    sparkline: [22850, 22820, 22790, 22740, 22760, 22710, 22694],
  },
  {
    name: "SENSEX",
    value: "75,312.06",
    change: "-612.48",
    percent: "-0.81%",
    isPositive: false,
    sparkline: [75900, 75800, 75650, 75500, 75580, 75400, 75312],
  },
  {
    name: "BANK NIFTY",
    value: "48,125.20",
    change: "+421.35",
    percent: "+0.88%",
    isPositive: true,
    sparkline: [47700, 47780, 47850, 47920, 48010, 48090, 48125],
  },
  {
    name: "GOLD (MCX)",
    value: "70,214.00",
    change: "+318.00",
    percent: "+0.46%",
    isPositive: true,
    sparkline: [69800, 69920, 70050, 70010, 70120, 70180, 70214],
  },
];

export interface SectorItem {
  name: string;
  icon: "banking" | "it" | "auto" | "energy";
  percent: number;
}

export const SECTORS: SectorItem[] = [
  { name: "Banking", icon: "banking", percent: 2.1 },
  { name: "IT", icon: "it", percent: 1.3 },
  { name: "Auto", icon: "auto", percent: -0.8 },
  { name: "Energy", icon: "energy", percent: -1.1 },
];

export interface StockMover {
  company: string;
  price: string;
  change: string;
  isPositive: boolean;
  volume: string;
}

export const MOVERS_DATA = {
  gainers: [
    { company: "Sample Bank", price: "1,245.80", change: "+4.8%", isPositive: true, volume: "3.2Cr" },
    { company: "Example Motors", price: "982.35", change: "+3.6%", isPositive: true, volume: "1.8Cr" },
    { company: "Demo Tech", price: "1,567.10", change: "+3.1%", isPositive: true, volume: "2.4Cr" },
    { company: "Apex Finance", price: "2,840.00", change: "+2.8%", isPositive: true, volume: "1.2Cr" },
  ],
  losers: [
    { company: "Illustration Energy", price: "431.20", change: "-4.2%", isPositive: false, volume: "1.9Cr" },
    { company: "Generic Pharma", price: "719.85", change: "-3.6%", isPositive: false, volume: "2.7Cr" },
    { company: "Alpha Metals", price: "298.50", change: "-2.9%", isPositive: false, volume: "4.1Cr" },
    { company: "Vanguard Infra", price: "512.40", change: "-2.4%", isPositive: false, volume: "1.5Cr" },
  ],
  mostActive: [
    { company: "Sample Bank", price: "1,245.80", change: "+4.8%", isPositive: true, volume: "3.2Cr" },
    { company: "Alpha Metals", price: "298.50", change: "-2.9%", isPositive: false, volume: "4.1Cr" },
    { company: "Generic Pharma", price: "719.85", change: "-3.6%", isPositive: false, volume: "2.7Cr" },
    { company: "Demo Tech", price: "1,567.10", change: "+3.1%", isPositive: true, volume: "2.4Cr" },
  ],
};

export const MARKET_NEWS = [
  {
    category: "EARNINGS",
    title: "Q4 earnings season: What to watch this time around",
    summary: "Key sectors, margin trends and management guidance in focus as results begin this week.",
    imageUrl: "/news-buildings.jpg",
    readTime: "4 min read",
  },
  {
    category: "ECONOMY",
    title: "Inflation cools to 4.8% in March, below expectations",
    summary: "Easing food prices help headline inflation moderate, adding to rate cut hopes.",
    imageUrl: "/news-groceries.jpg",
    readTime: "5 min read",
  },
  {
    category: "MARKET TRENDS",
    title: "Why banking and capital goods are back in focus",
    summary: "Strong credit growth and order pipeline revive sentiment in key sectors.",
    imageUrl: "/news-infra.jpg",
    readTime: "6 min read",
  },
];
