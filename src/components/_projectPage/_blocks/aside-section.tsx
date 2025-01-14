"use client"

import { useIntersectionObserver } from "@/hooks/observer";
import { cn } from "@/lib/utils";

const AsideData = [
    { id: 1, label: "Wstęp", href: "#intro" },
    { id: 2, label: "Technologia", href: "#techs" },
    { id: 3, label: "Wydajność", href: "#performance" },
];

export const AsideSection = () => {
    const activeSection = useIntersectionObserver();

    return (
        <aside className="hidden sticky top-24 items-center justify-start h-fit w-full p-6 xl:flex col-span-12 xl:col-span-4">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h2 className="uppercase tracking-wider text-left text-transparent bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-lg font-bold">
                        Spis Projektu
                    </h2>
                </div>
                <ul className="space-y-1">
                    {AsideData.map(({ id, label, href }) => (
                        <li key={id}>
                            <span
                                className={cn(
                                    "text-xs relative text-left sm:text-base text-[#424242] dark:text-[#b3b2b2] hover:text-[#000000] dark:hover:text-[#ffffff]",
                                    activeSection === href.substring(1) && "text-[#131313] dark:text-[#ffffff] font-bold"
                                )}
                            >
                                {label}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};
