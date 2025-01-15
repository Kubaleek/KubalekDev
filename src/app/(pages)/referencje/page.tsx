import type { Metadata } from 'next'

import { cn } from "@/lib/utils";
import BoxReveal from "@/components/ui/box-reveal";
import { Separator } from "@/components/ui/separator";
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
    title: 'Referencje',
    description: 'Nie mam jeszcze referencji, ale wierzę, że przyszłe projekty i zadowoleni klienci będą najlepszym dowodem na moje zaangażowanie i profesjonalizm.'
}


export default function ReferencePage() {
    return (
        <>
            <div className="flex flex-col relative">
                <Navbar />
                <RetroGrid angle={0} />
                <main className="container bg-zinc-200  dark:bg-[#121212] max-w-screen-xl  justify-center relative mx-auto flex flex-col overflow-hidden items-center border-l border-dotted border-r border-[#121212]/15 dark:border-white/15">
                    <DotPattern className={cn("[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",)} />
                    <section className="relative w-full lg:min-h-[800px] flex justify-center items-center p-6  text-center flex-col gap-2">
                        <div className="max-w-6xl flex flex-col gap-2">
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
                                            <BreadcrumbLink href="/projekty" className="font-bold text-sm text-left sm:text-base text-[#424242] dark:text-[#b3b2b2] hover:text-[#1d1d1d] dark:hover:text-[#d3d2d2]">Referencje</BreadcrumbLink>
                                        </BreadcrumbItem>
                                    </BoxReveal>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <BoxReveal boxColor={"#555"} duration={0.5}>
                                <h1 className="text-left text-transparent bg-clip-text sm:pb-3 inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-3xl md:text-4xl xl:text-6xl tracking-tighter font-bold ">Referencje</h1>
                            </BoxReveal>
                            <BoxReveal boxColor={"#555"} duration={0.5}>
                                <p className="text-pretty leading-relaxed text-left text-sm lg:text-base  text-[#424242] dark:text-[#b3b2b2]">
                                Nie mam jeszcze referencji, ale wierzę, że przyszłe projekty i zadowoleni klienci będą najlepszym dowodem na moje zaangażowanie.
                                </p>                            
                            </BoxReveal>
                            <Separator className="bg-[#121212]/25 dark:bg-zinc-200/25 my-4" />
                            <div className="justify-start items-start flex">
                                <div className="flex flex-col items-start justify-start gap-3">
                                    <BoxReveal boxColor={"#555"} duration={0.5}>
                                        <span className="text-3xl">🧐</span>
                                    </BoxReveal>
                                    <BoxReveal boxColor={"#555"} duration={0.5}>
                                        <h2 className="text-transparent pb-1 pr-2 bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-xl tracking-tighter font-bold">Brak Referencji</h2>
                                    </BoxReveal>
                                    <BoxReveal boxColor={"#555"} duration={0.5}>
                                        <p className="text-pretty max-w-sm text-center leading-relaxed text-sm sm:text-base text-[#424242] dark:text-[#b3b2b2]">Już wkrótce podzielę się.</p>
                                    </BoxReveal>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}