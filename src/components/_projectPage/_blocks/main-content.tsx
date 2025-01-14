"use client";

import { ProjectHeader } from "./project-header";
import { ProjectLinks } from "./project-links";
import { project } from "@/utils/projectSlugs";
import { notFound } from "next/navigation";
import { useProjectParams } from "@/hooks/useProjectParams";

export const MainContent = ({ children }: { children: React.ReactNode }) => {
    const id = useProjectParams(); 
    const projectData = project.find((e) => e.id === id); 

    if (!projectData) {
        return notFound(); 
    }

    return (
        <div className="dark:bg-[#121212] bg-zinc-200 col-span-12 w-full max-w-full relative xl:col-span-8 border border-dotted border-[#121212]/15 dark:border-white/15 xl:mx-auto xl:container border-t-0 border-b">
            <div className="p-6 container mx-auto max-w-7xl border-dotted border-t-0 border-b border-[#121212]/15 dark:border-white/15">
                <header className="flex flex-col sm:flex-row w-full h-full sm:min-h-[220px] justify-between items-start sm:items-center gap-6">
                    <ProjectHeader projectData={projectData} />
                    <ProjectLinks projectData={projectData} />
                </header>
            </div>
            {children}
        </div>
    );
};
