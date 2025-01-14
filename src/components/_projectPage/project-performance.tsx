import Image from "next/image";
import BoxReveal from "@/components/ui/box-reveal";
export default function ProjectPerformance({ image, alt, perf = [] }: { image: string, alt: string, perf?: string[] }) {
    return (
        <section id="performance" className="border-[#121212]/15 dark:border-white/15 border-t border-b-0 border-dotted p-6 flex flex-col gap-5">
            <BoxReveal boxColor={"#555"} duration={0.5}>
                <h2 className="text-left text-transparent bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-3xl tracking-tighter font-bold ">Wydajność 🖥</h2>
            </BoxReveal>
            {perf.map((text, index) => (
                <BoxReveal key={index} boxColor={"#555"} duration={0.5}>
                    <p className="text-pretty leading-relaxed text-left truncate text-sm lg:text-base text-[#424242] dark:text-[#b3b2b2]">{text}</p>
                </BoxReveal>
            ))}
            <BoxReveal boxColor={"#555"} duration={0.5}>
                <Image src={image} alt={alt} width={470} height={130} className="rounded-md" />
            </BoxReveal>
        </section>
    );
}