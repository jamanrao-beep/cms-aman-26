export interface IpoItem {
  company: string;
  dates: string;
  issueSize: string;
  priceBand: string;
  subscription: string;
  gmp: string;
  lot: number;
  status: "Open" | "Upcoming" | "Closed";
  type: string;
  description?: string;
}

export const IPO_DATA: IpoItem[] = [
  {
    company: "Sample Industries Ltd",
    dates: "17–21 Oct",
    issueSize: "₹1,240 Cr",
    priceBand: "₹210–221",
    subscription: "—",
    gmp: "+₹28",
    lot: 67,
    status: "Upcoming",
    type: "Mainboard",
    description: "Leading specialty manufacturing firm raising capital for global expansion and green manufacturing.",
  },
  {
    company: "Example Foods Ltd",
    dates: "14–16 Oct",
    issueSize: "₹620 Cr",
    priceBand: "₹98–103",
    subscription: "2.4x",
    gmp: "+₹9",
    lot: 145,
    status: "Open",
    type: "Mainboard",
    description: "Fast-growing FMCG player expanding retail distribution across tier-2 and tier-3 cities.",
  },
  {
    company: "Sketch Logistics Ltd",
    dates: "15–17 Oct",
    issueSize: "₹890 Cr",
    priceBand: "₹150–158",
    subscription: "5.1x",
    gmp: "+₹14",
    lot: 95,
    status: "Open",
    type: "Mainboard",
    description: "Integrated cold chain and express delivery service provider with tech-driven route optimization.",
  },
  {
    company: "Demo Power Corp",
    dates: "08–10 Oct",
    issueSize: "₹2,100 Cr",
    priceBand: "₹330–348",
    subscription: "38.7x",
    gmp: "+₹52",
    lot: 43,
    status: "Closed",
    type: "Mainboard",
    description: "Renewable energy utility operating 2.4 GW of solar and hybrid power generation capacity.",
  },
  {
    company: "Mock Pharma Ltd",
    dates: "01–03 Oct",
    issueSize: "₹760 Cr",
    priceBand: "₹412–433",
    subscription: "12.2x",
    gmp: "+₹19",
    lot: 34,
    status: "Closed",
    type: "Mainboard",
    description: "Formulation and API manufacturer with US FDA approved facilities and export focus.",
  },
  {
    company: "Apex Tech Mobility Ltd",
    dates: "23–25 Oct",
    issueSize: "₹1,550 Cr",
    priceBand: "₹520–550",
    subscription: "—",
    gmp: "+₹85",
    lot: 27,
    status: "Upcoming",
    type: "Mainboard",
    description: "Electric vehicle powertrain and battery intelligence platform supplier for OEMs.",
  },
];
