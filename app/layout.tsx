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
  description: "DEV-TEE helps businesses build clearer, faster, more effective websites through strategy, design, development, SEO, and ongoing optimization.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-offwhite text-text-primary font-sans">
        <Navbar />
        <main className="flex-grow pt-[61px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
