
import CSHARP_ICON from "../icons/stacks/csharp";
import DOCKER_ICON from "../icons/stacks/docker";
import GIT_ICON from "../icons/stacks/git";
import GRAPHQL_ICON from "../icons/stacks/graphql";
import NEXTJS_ICON from "../icons/stacks/nextjs";
import POSTGRESQL_ICON from "../icons/stacks/postgresql";
import PRISMA_ICON from "../icons/stacks/prisma";
import TAILWIND_ICON from "../icons/stacks/tailwind";
import TS_ICON from "../icons/stacks/Typescript";
import WORDPRESS_ICON from "../icons/stacks/wordpress";
import BoxReveal from "../ui/box-reveal";
import { Separator } from "@radix-ui/react-separator";



export default function LandingTechs() {
    return (
        <>
            <section className="relative flex h-full justify-center p-6 w-full text-center items-center flex-col gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-1">
                    <BoxReveal boxColor={"#555"} duration={0.5}>
                        <h2 className="text-transparent pb-1 pr-2 bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-3xl tracking-tighter font-bold">🎓 Technologie</h2>
                    </BoxReveal>
                    <BoxReveal boxColor={"#555"} duration={0.5}>
                        <p className="max-w-3xl flex text-[15px] text-pretty leading-relaxed text-sm lg:text-lg text-[#505050] dark:text-[#b3b2b2]">z których korzystam na co dzień</p>
                    </BoxReveal>
                </div>
                <Separator className="bg-[#121212]/25 dark:bg-zinc-200/25 max-w-xs" />
                <div className="flex flex-wrap max-w-xs items-center justify-center gap-3">
                    <DOCKER_ICON />
                    <NEXTJS_ICON />
                    <TAILWIND_ICON />
                    <TS_ICON />
                    <WORDPRESS_ICON />
                    <POSTGRESQL_ICON />
                    <PRISMA_ICON />
                    <GRAPHQL_ICON />
                    <CSHARP_ICON />
                    <GIT_ICON />
                </div>
            </section>
        </>
    );
}