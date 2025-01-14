import { Separator } from "@/components/ui/separator";
import BoxReveal from "@/components/ui/box-reveal";

export default function LandingReference() {
    return (
        <section className="relative flex h-full items-center justify-center  p-6 w-full text-center flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-1">
                <BoxReveal boxColor={"#555"} duration={0.5}>
                    <h2 className="text-transparent pb-1 pr-2 bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-3xl tracking-tighter font-bold">💼 Referencje</h2>
                </BoxReveal>
                <BoxReveal boxColor={"#555"} duration={0.5}>
                    <p className="max-w-3xl flex text-[15px] text-pretty leading-relaxed text-sm lg:text-lg text-[#505050] dark:text-[#b3b2b2]">Co mówią o mnie inni?</p>
                </BoxReveal>
            </div>
            <Separator className="bg-[#121212]/25 dark:bg-zinc-200/25 max-w-xs" />
            <div className="flex flex-col items-center justify-center gap-3">
                <BoxReveal boxColor={"#555"} duration={0.5}>
                    <span className="text-3xl">🧐</span>
                </BoxReveal>
                <BoxReveal boxColor={"#555"} duration={0.5}>
                    <h3 className="text-transparent pb-1 pr-2 bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-xl tracking-tighter font-bold">Brak Referencji</h3>
                </BoxReveal>
                <BoxReveal boxColor={"#555"} duration={0.5}>
                    <p className="text-pretty max-w-sm text-center leading-relaxed text-sm sm:text-base text-[#424242] dark:text-[#b3b2b2]">Już wkrótce podzielę się.</p>
                </BoxReveal>
            </div>
        </section>
    );
}