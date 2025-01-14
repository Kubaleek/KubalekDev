
import { Button } from "@/components/ui/button";
import Github from "@/components/icons/Github";
import Link from "next/link";
import { AppWindow } from "lucide-react";

export const ProjectLinks = ({ projectData }: { projectData: ProjectProps }) => (
    <div className="flex gap-3">
        <Button size={"default"} asChild variant={"secondary"} className="bg-[#ece8eb] hover:bg-transparent group dark:bg-secondary shadow shadow-black dark:shadow-white">
            <Link href={`${projectData?.githubLink}`} className="opacity-[0.6] hover:opacity-100 transition-opacity duration-75">
                <Github />
                Github
            </Link>
        </Button>
        <Button size={"default"} asChild variant={"secondary"} className="bg-[#ece8eb] hover:bg-transparent group dark:bg-secondary shadow shadow-black dark:shadow-white">
            <Link href={`${projectData?.demolink}`} className="opacity-[0.6] hover:opacity-100 transition-opacity duration-75">
                <AppWindow />
                Na Żywo
            </Link>
        </Button>
    </div>
);