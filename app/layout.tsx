import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-tee.org"),
  title: {
    default: "dev-tee.org | Business Website Design, Development & Web Strategy",
    template: "%s | dev-tee.org",
  },
  description:
    "dev-tee.org helps businesses build clearer, faster, more effective websites through strategy, design, development, SEO, and ongoing optimization.",
  keywords: [
    "Web Design",
    "Web Development",
    "Web Strategy",
    "SEO",
    "Business Websites",
    "Digital Agency",
  ],
  authors: [{ name: "dev-tee.org" }],
  creator: "dev-tee.org",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://dev-tee.org",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dev-tee.org",
    title: "dev-tee.org | Business Website Design, Development & Web Strategy",
    description:
      "dev-tee.org helps businesses build clearer, faster, more effective websites through strategy, design, development, SEO, and ongoing optimization.",
    siteName: "dev-tee.org",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "dev-tee.org Brand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "dev-tee.org | Business Website Design, Development & Web Strategy",
    description:
      "dev-tee.org helps businesses build clearer, faster, more effective websites through strategy, design, development, SEO, and ongoing optimization.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-offwhite text-text-primary font-sans">
        <Navbar />
        <main className="flex-grow pt-[61px] sm:pt-[70px]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
