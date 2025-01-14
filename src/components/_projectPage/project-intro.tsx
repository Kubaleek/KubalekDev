import BoxReveal from "@/components/ui/box-reveal";

const ProjectIntro = ({ intro = [] }: { intro?: string[] }) => {
    return (
        <>
            <section id="intro" className="border-[#121212]/15 dark:border-white/15 xl:min-h-full border-t border-b border-dotted p-6 flex flex-col gap-7">
                <BoxReveal boxColor={"#555"} duration={0.5}>
                    <h2 className="text-left text-transparent bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-3xl tracking-tighter font-bold ">Wstęp 🪧</h2>
                </BoxReveal>
                {intro.map((text, index) => (
                    <BoxReveal key={`${index}`} boxColor={"#555"} duration={0.5}>
                        <p className="text-pretty leading-relaxed text-left truncate text-sm lg:text-base text-[#424242] dark:text-[#b3b2b2]">{text}</p>
                    </BoxReveal>
                ))}
            </section>
        </>
    );
};

export default ProjectIntro;