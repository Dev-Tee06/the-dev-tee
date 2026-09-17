import { Hero } from "@/components/home/Hero"
import { Intro } from "@/components/home/Intro"
import { ValueEngine } from "@/components/home/ValueEngine"
import { SelectedWork } from "@/components/home/SelectedWork"
import { Process } from "@/components/home/Process"
import { BrandStatement } from "@/components/home/BrandStatement"
import { FinalCTA } from "@/components/home/FinalCTA"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "dev-tee.org | Business Website Design, Development & Web Strategy",
  description: "dev-tee.org helps businesses build clearer, faster, more effective websites through strategy, design, development, SEO, and ongoing optimization.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Intro />
      <ValueEngine />
      <SelectedWork />
      <Process />
      <BrandStatement />
      <FinalCTA />
    </div>
  );
}
