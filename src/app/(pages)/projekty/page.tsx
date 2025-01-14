import type { Metadata } from 'next'

import { cn } from "@/lib/utils";
import BoxReveal from "@/components/ui/box-reveal";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "@/components/cards/ProjectCard";
import { project } from "@/utils/projectSlugs";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import DotPattern from "@/components/ui/dot-pattern";
import RetroGrid from "@/components/ui/retro-grid";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: 'Projekty',
    description: 'W tej sekcji znajdziesz projekty, nad którymi pracowałem – od stron internetowych, przez aplikacje webowe, aż po mobilne i desktopowe rozwiązania. Każdy projekt to połączenie nowoczesnych technologii z kreatywnym podejściem, mające na celu tworzenie funkcjonalnych i innowacyjnych rozwiązań.'
}



export default function ProjectPage() {
    return (
        <>
            <div className="flex flex-col relative">
            <RetroGrid angle={0} />
                <Navbar />
                <main className="container bg-zinc-200  dark:bg-[#121212] max-w-screen-xl  justify-center relative mx-auto flex flex-col overflow-hidden items-center border-l border-dotted border-r border-[#121212]/15 dark:border-white/15">
                    <DotPattern className={cn("[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",)} />
                    <section className="relative w-full lg:min-h-[800px] flex justify-center items-center p-6  text-center flex-col gap-2">
                        <div className="lg:max-w-5xl flex flex-col gap-2">
                            <Breadcrumb className="mb-3">
                                <BreadcrumbList>
                                    <BoxReveal boxColor={"#555"} duration={0.5}>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/" className="font-bold text-sm text-left sm:text-base text-[#424242] dark:text-[#b3b2b2] hover:text-[#1d1d1d] dark:hover:text-[#d3d2d2]">Strona Główna</BreadcrumbLink>
                                        </BreadcrumbItem>
                                    </BoxReveal>
                                    <BoxReveal boxColor={"#555"} duration={0.5}>
                                        <BreadcrumbSeparator className="text-[#424242] dark:text-[#b3b2b2]" />
                                    </BoxReveal>
                                    <BoxReveal boxColor={"#555"} duration={0.5}>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/projekty" className="font-bold text-sm text-left sm:text-base text-[#424242] dark:text-[#b3b2b2] hover:text-[#1d1d1d] dark:hover:text-[#d3d2d2]">Projekty</BreadcrumbLink>
                                        </BreadcrumbItem>
                                    </BoxReveal>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <BoxReveal boxColor={"#555"} duration={0.5}>
                                <h1 className="text-left text-transparent bg-clip-text sm:pb-3 inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-3xl md:text-4xl xl:text-6xl tracking-tighter font-bold ">Moje Projekty</h1>
                            </BoxReveal>
                            <BoxReveal boxColor={"#555"} duration={0.5}>
                                <p className="text-pretty leading-relaxed text-left text-sm lg:text-base  text-[#424242] dark:text-[#b3b2b2]">
                                    W tej sekcji znajdziesz projekty, nad którymi pracowałem – od stron internetowych, przez aplikacje webowe, aż po mobilne i desktopowe rozwiązania. Każdy projekt to połączenie nowoczesnych technologii z kreatywnym podejściem, mające na celu tworzenie funkcjonalnych i innowacyjnych rozwiązań.
                                </p>
                            </BoxReveal>
                            <Separator className="bg-[#121212]/25 dark:bg-zinc-200/25 my-4" />
                            {project.length > 0 ? (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start justify-start text-left">
                                    {project.map((e) => (
                                        <ProjectCard key={e.id} id={e.id || ''} title={e.title} image={e.image} alt={e.alt} description={e.description} stacks={e.stacks} />
                                    ))}
                                </div>
                            ) : (
                                <div className="items-start justify-start flex">
                                    <div className="flex flex-col items-start justify-center gap-3">
                                        <BoxReveal boxColor={"#555"} duration={0.5}>
                                            <span className="text-3xl">🧐</span>
                                        </BoxReveal>
                                        <BoxReveal boxColor={"#555"} duration={0.5}>
                                            <h2 className="text-transparent pb-1 pr-2 bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-xl tracking-tighter font-bold">Brak Projektów</h2>
                                        </BoxReveal>
                                        <BoxReveal boxColor={"#555"} duration={0.5}>
                                            <p className="text-pretty max-w-sm text-center leading-relaxed text-sm sm:text-base text-[#424242] dark:text-[#b3b2b2]">Już wkrótce podzielę się.</p>
                                        </BoxReveal>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </main>
                <Footer/> 
            </div>
        </>
    );
}