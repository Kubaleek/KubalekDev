"use client"

import LandingTechs from "@/components/_ladingPage/landing-techs";
import LandingHero from "@/components/_ladingPage/landing-hero";
import LandingProjects from "@/components/_ladingPage/landing-projects";
import LandingReference from "@/components/_ladingPage/landing-reference";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
import RetroGrid from "@/components/ui/retro-grid";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <RetroGrid angle={0}/>
      <main className="container bg-zinc-200 py-8  dark:bg-[#121212] max-w-screen-xl  justify-center relative mx-auto flex flex-col gap-6 overflow-hidden items-center border-l border-dotted border-r border-[#121212]/15 dark:border-white/15">
      <LandingHero />
        <DotPattern className={cn("[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",)} />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 items-center justify-center">
          <LandingTechs />
          <LandingProjects />
        </div>
        <LandingReference />
      </main>
      <Footer />
    </div>
  );
}
