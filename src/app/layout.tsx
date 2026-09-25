import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preeti Pal | Software Engineer (SDE-1) | Portfolio",
  description:
    "Portfolio of Preeti Pal — Software Engineer (SDE-1) building high-performance web, mobile, and AI applications. Creator of ScamGuard, Goldgini AR E-Commerce, 150+ DSA solved.",
  keywords: [
    "Preeti Pal",
    "Software Engineer",
    "SDE-1",
    "React Native",
    "Next.js",
    "React.js",
    "Node.js",
    "ScamGuard",
    "Frontend Developer",
    "Full Stack Engineer",
    "Ayodhya",
    "Noida",
  ],
  authors: [{ name: "Preeti Pal", url: "https://scamguard-website.vercel.app/" }],
  openGraph: {
    title: "Preeti Pal | Software Engineer (SDE-1)",
    description:
      "Explore Preeti Pal's software engineering portfolio, production experience at Kushmanda Cosmetics & Samra Infotech, ScamGuard platform, and 150+ DSA problem solutions.",
    url: "https://scamguard-website.vercel.app/",
    siteName: "Preeti Pal Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
