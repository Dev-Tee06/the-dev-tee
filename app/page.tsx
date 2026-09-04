import { Hero } from "@/components/home/Hero"
import { Intro } from "@/components/home/Intro"
import { ValueEngine } from "@/components/home/ValueEngine"
import { SelectedWork } from "@/components/home/SelectedWork"
import { Process } from "@/components/home/Process"
import { BrandStatement } from "@/components/home/BrandStatement"
import { FinalCTA } from "@/components/home/FinalCTA"

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
