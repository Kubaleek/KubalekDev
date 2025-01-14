import BoxReveal from "@/components/ui/box-reveal";
import { JSX } from "react";

type StackItem = {
    id: number | null;
    name: string;
    svg: () => JSX.Element; 
};

const ProjectTech = ({
    title,
    stacks = [],
}: {
    title: string;
    stacks?: StackItem[];
}) => {
    return (
        <div className="flex flex-col gap-3">
            <BoxReveal boxColor={"#555"} duration={0.5}>
                <h3 className="text-left text-transparent bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-xl tracking-tighter font-semibold">
                    {title}
                </h3>
            </BoxReveal>
            {stacks.length === 0 ? (
                <BoxReveal boxColor={"#555"} duration={0.5}>
                    <p>Brak</p>
                </BoxReveal>
            ) : (
                <div className="flex gap-4">
                    {stacks.map((e) => {
                        return (
                            <BoxReveal key={e.id ?? Math.random()} boxColor={"#555"} duration={0.5}>
                                {e.svg()}
                            </BoxReveal>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ProjectTech;