"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoDark from "./icons/LogoDark";
import { useTheme } from "next-themes";
import Logo from "./icons/Logo";
import Github from "./icons/Github";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { NavItems } from "@/utils/navSlugs";
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import Linkedin from "./icons/Linkedin";


export default function Navbar() {
    const { theme, setTheme } = useTheme();

    const isDarkMode = theme === "dark";
    const Icon = isDarkMode ? Sun : Moon;
    const NavbarLogo = isDarkMode ? <Logo /> : <LogoDark />;
    const [expanded, setExpanded] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const isProjectPath = pathname && /^\/projekty\/\d+$/.test(pathname);
    const isContactPage = pathname === "/kontakt";
    const isPathes = pathname != "/"

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setExpanded(false);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }


    const isOpen = expanded;

    const toggleMenu = () => setExpanded((prev) => !prev);

    const isActive = (path: string): boolean => {
        return pathname ? pathname === path : false;
    }

    return (
        <>

            <div className={`sticky top-0 border-dotted  max-w-screen-xl border-b border-[#121212]/15 container ${isPathes ? 'max-w-screen-xl' : ''} ${isProjectPath ? "max-w-screen-xl" : ""}  ${isContactPage ? "!max-w-screen-xl" : ''} dark:border-white/15 z-50 dark:bg-[#121212] bg-zinc-200 mx-auto`}>
                <header
                    className={`container  max-w-screen-xl ${isPathes ? 'max-w-screen-xl' : ''} ${isProjectPath ? "max-w-screen-xl" : ""}  ${isContactPage ? "!max-w-screen-xl" : ''}  items-center mx-auto p-3 border-l dark:bg-[#121212] bg-zinc-200 border-dotted border-r border-[#121212]/15 dark:border-white/15`}>
                    <nav className="relative flex justify-between items-center gap-3">
                        <Link href={"/"} className="flex items-center gap-4">
                            {NavbarLogo}
                            <div className="h-6 w-0.5 bg-[#121212]/50 rotate-12 dark:bg-white/50" />
                            <h2 className="font-bold sm:uppercase text-sm sm:text-xl text-pretty leading-relaxed text-[#121212] dark:text-zinc-200">
                                Kubalek.<span className="text-xs dark:text-white/75">Dev</span>
                            </h2>
                        </Link>
                        <div className="items-center gap-4 md:flex hidden">
                            {NavItems.map((e) => (
                                <Link key={e.id} href={e.href} className={`transition-colors duration-300 ease-in-out text-sm rounded-md font-semibold 
                            ${isActive(e.href)
                                        ? "text-[#121212] dark:text-[#fff] font-bold"
                                        : "text-[#666] dark:text-[#888] hover:text-[#121212] dark:hover:text-zinc-100"
                                    } relative`}>
                                    {e.title}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <Button aria-labelledby="menu" aria-label="menu" variant="ghost" size="icon" onClick={toggleMenu} className={`flex md:hidden bg-transparent ${isDarkMode ? '' : 'hover:bg-[#121212f]/5'}`}>
                                {isOpen ? <X /> : <Menu />}
                            </Button>
                            <Button aria-labelledby="Linkedin" aria-label="Linkedin" asChild variant="ghost" size="icon" className={`bg-transparent hidden md:flex ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`}>
                                <Link aria-labelledby="Linkedin" aria-label="Linkedin" href={"https://www.linkedin.com/in/kuba-kr%C3%B3l-9b4946274/"}><Linkedin /></Link>
                            </Button>
                            <Button aria-labelledby="Github" aria-label="Github" asChild variant="ghost" size="icon" className={`bg-transparent hidden md:flex ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`}>
                                <Link aria-labelledby="Github" aria-label="Github" href={"https://github.com/Kubaleek"}><Github /></Link>
                            </Button>
                            <Button aria-labelledby="Themes" aria-label="Themes" variant="ghost" size="icon" className={`bg-transparent hidden md:flex ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`} onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
                                <Icon />
                            </Button>
                        </div>
                    </nav>

                </header>
            </div>
            <Drawer open={isOpen} onOpenChange={toggleMenu} >
                <DrawerContent className="flex md:hidden justify-start items-start text-[#121212] dark:bg-[#121212] dark:text-zinc-100">
                    <DrawerHeader>
                        <div className="flex items-center gap-4">
                            {NavbarLogo}
                            <div className="h-6 w-0.5 bg-[#121212]/50 rotate-12 dark:bg-white/50" />
                            <DrawerTitle>Kubalek.<span className="capitalize text-xs dark:text-white/75">Docs</span></DrawerTitle>
                        </div>
                    </DrawerHeader>
                    <div className="overflow-auto px-4">
                        <div className="flex flex-col space-y-3">
                            {NavItems.map((e) => (
                                <Link key={e.id} href={e.href} className={`text-[#666] dark:text-[#888] transition-colors duration-300 ease-in-out text-sm rounded-md font-semibold`}>
                                    {e.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <DrawerFooter>
                        <div className="flex items-center">
                            <Button aria-labelledby="Linkedin" aria-label="Linkedin" asChild variant="ghost" size="icon" className={`bg-transparent ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`}>
                                <Link aria-labelledby="Linkedin" aria-label="Linkedin" href={"https://www.linkedin.com/in/kuba-kr%C3%B3l-9b4946274/"}><Linkedin /></Link>
                            </Button>
                            <Button aria-labelledby="Github" aria-label="Github" asChild variant="ghost" size="icon" className={`bg-transparent ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`}>
                                <Link aria-labelledby="Github" aria-label="Github" href={"https://github.com/Kubaleek"}><Github /></Link>
                            </Button>
                            <Button aria-labelledby="Themes" aria-label="Themes" variant="ghost" size="icon" className={`bg-transparent ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`} onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
                                <Icon />
                            </Button>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}