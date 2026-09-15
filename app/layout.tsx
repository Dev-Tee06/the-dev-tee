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
  title: "DEV-TEE | Business Website Design, Development & Web Strategy",
  description:
    "DEV-TEE helps businesses build clearer, faster, more effective websites through strategy, design, development, SEO, and ongoing optimization.",
  keywords: [
    "Web Design",
    "Web Development",
    "Web Strategy",
    "SEO",
    "Business Websites",
    "Digital Agency"
  ],
  authors: [{ name: "DEV-TEE" }],
  creator: "DEV-TEE",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dev-tee.com",
    title: "DEV-TEE | Business Website Design, Development & Web Strategy",
    description:
      "DEV-TEE helps businesses build clearer, faster, more effective websites through strategy, design, development, SEO, and ongoing optimization.",
    siteName: "DEV-TEE",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "DEV-TEE Brand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEV-TEE | Business Website Design, Development & Web Strategy",
    description:
      "DEV-TEE helps businesses build clearer, faster, more effective websites through strategy, design, development, SEO, and ongoing optimization.",
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
