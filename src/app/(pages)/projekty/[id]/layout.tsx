import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import RetroGrid from "@/components/ui/retro-grid";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { AsideSection } from "@/components/_projectPage/_blocks/aside-section";
import { MainContent } from "@/components/_projectPage/_blocks/main-content";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col relative">
            <Navbar />
            <RetroGrid angle={0} />
            <div className="bg-zinc-200 dark:bg-[#121212] relative border-dotted border-[#121212]/15 dark:border-white/15 border-r container max-w-screen-xl mx-auto">
                <DotPattern className={cn("[mask-image:radial-gradient(1700px_circle_at_center,white,transparent)]")} />
                <div className="grid grid-cols-12 relative gap-6 xl:mx-auto xl:container w-full">
                    <MainContent>{children}</MainContent>
                    <AsideSection />
                </div>
            </div>
            <Footer />
        </div>
    );
};
