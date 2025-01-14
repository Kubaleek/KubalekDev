import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import BoxReveal from "@/components/ui/box-reveal";

export const ProjectHeader = ({ projectData }: { projectData: ProjectProps }) => (
    <div className="flex flex-col gap-1">
        <Breadcrumb className="mb-3">
            <BreadcrumbList>
                <BoxReveal boxColor={"#555"} duration={0.5}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="font-bold text-xs text-left sm:text-base text-[#424242] dark:text-[#b3b2b2] hover:text-[#1d1d1d] dark:hover:text-[#d3d2d2]">Strona Główna</BreadcrumbLink>
                    </BreadcrumbItem>
                </BoxReveal>
                <BoxReveal boxColor={"#555"} duration={0.5}>
                    <BreadcrumbSeparator className="text-[#424242] dark:text-[#b3b2b2]" />
                </BoxReveal>
                <BoxReveal boxColor={"#555"} duration={0.5}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/projekty" className="font-bold text-xs text-left sm:text-base text-[#424242] dark:text-[#b3b2b2] hover:text-[#1d1d1d] dark:hover:text-[#d3d2d2]">Projekty</BreadcrumbLink>
                    </BreadcrumbItem>
                </BoxReveal>
                <BoxReveal boxColor={"#555"} duration={0.5}>
                    <BreadcrumbSeparator className="text-[#424242] dark:text-[#b3b2b2]" />
                </BoxReveal>
                <BoxReveal boxColor={"#555"} duration={0.5}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/projekty/${projectData?.id}`} className="font-bold text-xs text-left sm:text-base text-[#424242] dark:text-[#b3b2b2] hover:text-[#1d1d1d] dark:hover:text-[#d3d2d2]">{projectData?.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                </BoxReveal>
            </BreadcrumbList>
        </Breadcrumb>
        <BoxReveal boxColor={"#555"} duration={0.5}>
            <h1 className="text-left text-transparent bg-clip-text sm:pb-3 inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-4xl tracking-tighter font-bold">{projectData?.title}</h1>
        </BoxReveal>
        <BoxReveal boxColor={"#555"} duration={0.5}>
            <p className="text-pretty leading-relaxed text-left text-xs truncate md:text-sm lg:text-base text-[#424242] dark:text-[#b3b2b2] max-w-md">{projectData?.projectDetails?.desc}</p>
        </BoxReveal>
    </div>
);