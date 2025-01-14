import { Metadata } from "next";
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
import TypingAnimation from "@/components/ui/typing-animation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: 'Kontakt',
    description: 'W tej sekcji znajdziesz wszystkie niezbędne informacje, aby się ze mną skontaktować.'
}

export default function ContactPage() {
    return (
        <>
            <div className="flex flex-col relative">
                <Navbar />
                <RetroGrid angle={0} />
                <main className="container bg-zinc-200  dark:bg-[#121212] max-w-screen-xl  justify-center relative mx-auto flex flex-col overflow-hidden items-center border-l border-dotted border-r border-[#121212]/15 dark:border-white/15">
                    <DotPattern className={cn("[mask-image:radial-gradient(1200px_circle_at_left,white,transparent)]",)} />
                    <section className="relative w-full lg:min-h-[500px]  flex justify-center  p-6  text-center flex-col gap-2">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
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
                                                <BreadcrumbLink href="/projekty" className="font-bold text-sm text-left sm:text-base text-[#424242] dark:text-[#b3b2b2] hover:text-[#1d1d1d] dark:hover:text-[#d3d2d2]">Kontakt</BreadcrumbLink>
                                            </BreadcrumbItem>
                                        </BoxReveal>
                                    </BreadcrumbList>
                                </Breadcrumb>
                                <BoxReveal boxColor={"#555"} duration={0.5}>
                                    <h1 className="text-left text-transparent bg-clip-text sm:pb-3 inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-3xl md:text-4xl xl:text-6xl tracking-tighter font-bold ">Kontakt</h1>
                                </BoxReveal>
                                <BoxReveal boxColor={"#555"} duration={0.5}>
                                    <p className="text-pretty leading-relaxed text-left text-sm lg:text-base  text-[#424242] dark:text-[#b3b2b2]">
                                        W tej sekcji znajdziesz wszystkie niezbędne informacje, aby się ze mną skontaktować.
                                    </p>
                                </BoxReveal>
                            </div>
                            <Separator className="bg-[#121212]/25 dark:bg-zinc-200/25 my-4" />
                            <div className="flex flex-col custom:flex-row items-start justify-start gap-5 custom:gap-3">
                                <div className="bg-[#5865f2] px-3 py-2  w-fit justify-center items-center gap-3 flex rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-[#fff]" viewBox="0 0 50 50">
                                        <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                                    </svg>
                                    <TypingAnimation className="text-pretty leading-relaxed text-left text-xs sm:text-sm  text-white">
                                        kubalek
                                    </TypingAnimation>
                                </div>
                                <div className="bg-zinc-200 px-3 py-2 items-center gap-3 flex rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-[#fff]" viewBox="0 0 48 48">
                                        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                                    </svg>
                                    <TypingAnimation className="text-pretty leading-relaxed text-left text-xs sm:text-sm  text-[#424242]">
                                        kuba.krol.ldz@gmail.com
                                    </TypingAnimation>
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