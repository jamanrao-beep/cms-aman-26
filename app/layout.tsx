import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sanity Financial Portal | Markets, IPOs, Calculators & Learn",
  description: "Market insights, IPO tracker, financial calculators, and clear financial education.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f8faf8] text-[#111827] dark:bg-[#0a1410] dark:text-[#f3f4f6]">
        {children}
      </body>
    </html>
  );
}
