import { project } from "@/utils/projectSlugs";
import BoxReveal from "@/components/ui/box-reveal";
import ProjectImage from "@/components/_projectPage/project-image";
import ProjectIntro from "@/components/_projectPage/project-intro";
import ProjectTech from "@/components/_projectPage/project-tech";
import ProjectPerformance from "@/components/_projectPage/project-performance";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {params: Promise<{id: string }>;}) {
    const { id } = await props.params; 
    const projectData = project.find((e) => e.id === id);

    return {
        title: `${projectData?.title}`,
        description: projectData?.projectDetails?.intro,
        openGraph: {
            title: `${projectData?.title}`,
            description: projectData?.projectDetails?.intro,
            image: projectData?.image,
        },
    };
}

export default async function ProjectPage(props: {params: Promise<{id: string }>;}) {
    const { id } = await props.params; 

    const projectData = project.find((e) => e.id === id);

    if (!projectData) {
        return notFound();
    }

    const frontendStacks = projectData?.projectDetails?.techs.find(tech => tech.type === "frontend")?.stacks || [];
    const backendStacks = projectData?.projectDetails?.techs.find(tech => tech.type === "backend")?.stacks || [];
    const toolsStacks = projectData?.projectDetails?.techs.find(tech => tech.type === "tools")?.stacks || [];

    return (
        <>
            <main className="w-full max-w-full flex flex-col justify-center space-y-12 xl:space-y-24">
                <ProjectImage image={`${projectData?.image}`} alt={`${projectData?.alt}`} />
                <ProjectIntro intro={projectData?.projectDetails?.intro} />
                <section id="techs" className="border-[#121212]/15 dark:border-white/15 border-t border-b border-dotted p-6 flex flex-col gap-6">
                    <BoxReveal boxColor={"#555"} duration={0.5}>
                        <h2 className="text-left text-transparent bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-3xl tracking-tighter font-bold">Technologia 🖥</h2>
                    </BoxReveal>
                    <ProjectTech title="Frontend" stacks={frontendStacks} />
                    <ProjectTech title="Backend" stacks={backendStacks} />
                    <ProjectTech title="Narzędzia" stacks={toolsStacks} />
                </section>
                <ProjectPerformance perf={projectData?.projectDetails?.performanceText} image={`${projectData?.projectDetails?.performanceImage}`} alt={`${projectData?.alt}`} />
            </main>
        </>
    );
}