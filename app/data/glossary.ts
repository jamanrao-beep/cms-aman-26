export interface GlossaryItem {
  term: string;
  definition: string;
  page: "overview" | "markets" | "calc" | "ipo" | "learn" | "article" | "studio" | "arch";
  linkLabel: string;
  aliases: string[];
}

export interface SitePage {
  id: string;
  title: string;
  description: string;
  keywords: string;
}

export const GLOSSARY: GlossaryItem[] = [
  {
    term: "IPO",
    definition:
      "Initial Public Offering. The first time a company sells its shares to the public, so it can raise money and get listed on the stock exchange.",
    page: "ipo",
    linkLabel: "Open IPO dashboard",
    aliases: ["initial public offering"],
  },
  {
    term: "Mainboard IPO",
    definition:
      "An IPO of a larger company listed on the main exchange board (NSE or BSE), as opposed to the SME platform for small firms.",
    page: "ipo",
    linkLabel: "Open IPO dashboard",
    aliases: ["mainboard"],
  },
  {
    term: "Price band",
    definition:
      "The range (lowest to highest price) within which investors can bid for shares in an IPO.",
    page: "ipo",
    linkLabel: "Open IPO dashboard",
    aliases: ["price range"],
  },
  {
    term: "Lot size",
    definition:
      "The minimum number of shares you must apply for in an IPO. Your bid must be in multiples of the lot.",
    page: "ipo",
    linkLabel: "Open IPO dashboard",
    aliases: ["lot"],
  },
  {
    term: "GMP",
    definition:
      "Grey Market Premium. The unofficial extra amount people pay over the issue price before listing. It hints at expected listing gains but is not guaranteed.",
    page: "ipo",
    linkLabel: "Open IPO dashboard",
    aliases: ["grey market premium"],
  },
  {
    term: "Subscription",
    definition:
      "How many times the shares on offer were applied for. 5x means investors bid for five times the available shares.",
    page: "ipo",
    linkLabel: "Open IPO dashboard",
    aliases: ["subscribed", "oversubscribed"],
  },
  {
    term: "Issue size",
    definition: "The total amount a company aims to raise through its IPO.",
    page: "ipo",
    linkLabel: "Open IPO dashboard",
    aliases: [],
  },
  {
    term: "Allotment",
    definition:
      "The process of deciding which applicants receive shares when an IPO is oversubscribed. Often done by lottery.",
    page: "ipo",
    linkLabel: "Open IPO dashboard",
    aliases: ["allot"],
  },
  {
    term: "SIP",
    definition:
      "Systematic Investment Plan. Investing a fixed amount in a mutual fund every month, which spreads your buying across market highs and lows.",
    page: "calc",
    linkLabel: "Open SIP calculator",
    aliases: ["systematic investment plan"],
  },
  {
    term: "Step-up SIP",
    definition:
      "A SIP where the monthly amount rises by a set percentage each year as your income grows.",
    page: "calc",
    linkLabel: "Open Calculators",
    aliases: [],
  },
  {
    term: "SWP",
    definition:
      "Systematic Withdrawal Plan. Taking out a fixed amount from your investment at regular intervals, often used for retirement income.",
    page: "calc",
    linkLabel: "Open Calculators",
    aliases: ["systematic withdrawal plan"],
  },
  {
    term: "EMI",
    definition:
      "Equated Monthly Instalment. The fixed amount you pay your lender every month to repay a loan with interest.",
    page: "calc",
    linkLabel: "Open EMI calculator",
    aliases: ["equated monthly instalment", "equated monthly installment"],
  },
  {
    term: "CAGR",
    definition:
      "Compound Annual Growth Rate. The steady yearly rate at which an investment would have grown to reach its final value.",
    page: "calc",
    linkLabel: "Open Calculators",
    aliases: ["compound annual growth rate"],
  },
  {
    term: "FD",
    definition:
      "Fixed Deposit. A bank deposit that pays a fixed interest rate for a fixed period.",
    page: "calc",
    linkLabel: "Open Calculators",
    aliases: ["fixed deposit"],
  },
  {
    term: "RD",
    definition:
      "Recurring Deposit. A bank deposit where you save a fixed amount every month and earn fixed interest.",
    page: "calc",
    linkLabel: "Open Calculators",
    aliases: ["recurring deposit"],
  },
  {
    term: "PPF",
    definition:
      "Public Provident Fund. A government-backed long-term savings scheme with tax benefits and a 15-year lock-in.",
    page: "calc",
    linkLabel: "Open Calculators",
    aliases: ["public provident fund"],
  },
  {
    term: "EPF",
    definition:
      "Employees Provident Fund. A retirement fund where you and your employer each contribute part of your salary.",
    page: "calc",
    linkLabel: "Open Calculators",
    aliases: ["employees provident fund", "pf"],
  },
  {
    term: "Lump sum",
    definition:
      "Investing the entire amount at once instead of in monthly instalments.",
    page: "calc",
    linkLabel: "Open Calculators",
    aliases: ["lumpsum"],
  },
  {
    term: "Retirement corpus",
    definition:
      "The total savings you need by retirement to cover your expenses for the rest of your life.",
    page: "calc",
    linkLabel: "Open Calculators",
    aliases: ["corpus"],
  },
  {
    term: "Mutual fund",
    definition:
      "A pool of money from many investors, managed by a professional who invests it in stocks, bonds or other assets.",
    page: "overview",
    linkLabel: "Go to Overview",
    aliases: ["mf", "funds"],
  },
  {
    term: "Repo rate",
    definition:
      "The rate at which the RBI lends money to banks. When it changes, loan and deposit rates usually follow.",
    page: "article",
    linkLabel: "Open Article",
    aliases: ["rbi", "repo"],
  },
  {
    term: "Net interest margin",
    definition:
      "The gap between what a bank earns on loans and what it pays on deposits, shown as a percentage. Also called NIM.",
    page: "article",
    linkLabel: "Open Article",
    aliases: ["nim", "margin", "margins"],
  },
  {
    term: "Basis point",
    definition:
      "One hundredth of a percentage point. A fall of 10 to 20 basis points means 0.10% to 0.20%.",
    page: "article",
    linkLabel: "Open Article",
    aliases: ["bps", "bp", "basis points"],
  },
  {
    term: "NIFTY 50",
    definition:
      "An index tracking the 50 largest listed companies on the NSE. It shows how the overall market is doing.",
    page: "markets",
    linkLabel: "Go to Markets",
    aliases: ["nifty"],
  },
  {
    term: "SENSEX",
    definition:
      "An index of 30 large companies on the BSE. It is the other main gauge of the Indian market.",
    page: "markets",
    linkLabel: "Go to Markets",
    aliases: ["sensex"],
  },
  {
    term: "Bank Nifty",
    definition:
      "An index of the biggest banking stocks on the NSE.",
    page: "markets",
    linkLabel: "Go to Markets",
    aliases: ["banknifty"],
  },
  {
    term: "SEO",
    definition:
      "Search Engine Optimisation. Making pages easy for Google to find and rank, using good titles, descriptions and structure.",
    page: "studio",
    linkLabel: "Open Sanity Studio",
    aliases: ["search engine optimisation", "search engine optimization"],
  },
  {
    term: "Canonical tag",
    definition:
      "A tag that tells search engines which URL is the main version of a page, so duplicates do not compete.",
    page: "studio",
    linkLabel: "Open Sanity Studio",
    aliases: ["canonical"],
  },
  {
    term: "Sanity",
    definition:
      "A headless content system. Your team writes in Sanity Studio and the website reads the content from it.",
    page: "studio",
    linkLabel: "Open Sanity Studio",
    aliases: ["sanity studio", "cms", "content lake"],
  },
  {
    term: "Next.js",
    definition:
      "A framework for building fast websites with good SEO. It renders the pages that readers see.",
    page: "arch",
    linkLabel: "Open Architecture",
    aliases: ["nextjs"],
  },
  {
    term: "Compounding",
    definition:
      "The process where your earnings generate their own earnings over time, helping your money grow faster the longer you stay invested.",
    page: "learn",
    linkLabel: "Open Learn Hub",
    aliases: ["compound interest", "growth"],
  },
];

export const SITE_PAGES: SitePage[] = [
  {
    id: "overview",
    title: "Overview",
    description: "Daily brief, market insights, featured opportunities & tools.",
    keywords: "daily brief market insights ticker overview home",
  },
  {
    id: "markets",
    title: "Markets",
    description: "Market overview, NIFTY & SENSEX dual charts, sector spotlight and movers.",
    keywords: "market nifty sensex sector movers stocks banking it auto",
  },
  {
    id: "calc",
    title: "Calculators",
    description: "Interactive SIP, EMI, Lump Sum calculators with breakdown donut & growth charts.",
    keywords: "sip emi loan calculator investment compounding wealth lump sum",
  },
  {
    id: "ipo",
    title: "IPO Dashboard",
    description: "Mainboard IPO tracker with price bands, GMP, issue sizes and status.",
    keywords: "ipo issue gmp subscription grey market allotment upcoming",
  },
  {
    id: "learn",
    title: "Learn",
    description: "Financial education, fundamentals, terms of the day, and topic guides.",
    keywords: "learn education fundamentals compounding emergency fund investing basics",
  },
  {
    id: "article",
    title: "Article",
    description: "Quarterly results analysis with key takeaways, TOC, and inline calculator.",
    keywords: "article news bank quarterly margins results prose",
  },
  {
    id: "studio",
    title: "Sanity Studio",
    description: "Publishing studio mock with real-time SEO preview and formatting tools.",
    keywords: "editor sanity studio cms publish draft serp seo",
  },
  {
    id: "arch",
    title: "Architecture",
    description: "Proposed Next.js + Sanity infrastructure and hosting analysis.",
    keywords: "architecture hostinger node vercel tech stack cloud",
  },
];
