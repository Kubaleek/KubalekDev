"use client"

import LogoDark from "./icons/LogoDark";
import Logo from "./icons/Logo";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Linkedin from "./icons/Linkedin";
import Github from "./icons/Github";
import { Moon, Sun} from "lucide-react";
import { usePathname } from "next/navigation";


export default function Footer() {
    const { theme, setTheme } = useTheme();

    const isDarkMode = theme === "dark"
    const NavbarLogo = isDarkMode ? <Logo /> : <LogoDark />;
    const Icon = isDarkMode ? Sun : Moon;
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const isProjectPath = pathname && /^\/projekty\/\d+$/.test(pathname);
    const isContactPage = pathname === "/kontakt";
    const isPathes = pathname != "/"

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <footer className={`relative bg-zinc-200  dark:bg-[#121212]  max-w-screen-xl ${isPathes ? 'max-w-screen-xl' : ''} ${isProjectPath ? "max-w-screen-xl" : ""}  ${isContactPage ? "!max-w-screen-xl" : ''} container w-full mx-auto border-dotted border p-6 border-[#121212]/15 dark:border-white/15`}>
            <div className={`justify-between flex flex-col gap-3 z-[2]`}>
                <h2 className="text-transparent pb-1 pr-2 bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-3xl tracking-tighter font-bold">Zbudujmy coś razem</h2>
                <p className="text-pretty max-w-sm leading-relaxed text-sm text-left sm:text-base text-[#424242] dark:text-[#b3b2b2]">
                    Jeśli potrzebujesz programisty, masz pytanie lub chcesz nawiązać kontakt, śmiało pisz!
                </p>
                <span className="text-sm text-[#424242] dark:text-white flex gap-1 items-center">
                    kuba.krol.ldz@gmail.com
                </span>
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        {NavbarLogo}
                        <p className="text-pretty leading-relaxed text-sm md:text-base text-[#424242] dark:text-[white] uppercase font-bold">Kubalek.<span className="capitalize text-xs dark:text-white/75">Dev</span></p>
                    </div>
                    <div className="flex">
                        <Button asChild variant="ghost" size="icon" aria-labelledby="Linkedin" aria-label="Linkedin"  className={`bg-transparent flex ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`}>
                            <Link aria-labelledby="Linkedin" aria-label="Linkedin" href={"https://www.linkedin.com/in/kuba-kr%C3%B3l-9b4946274/"}><Linkedin /></Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon" aria-labelledby="Github" aria-label="Github" className={`bg-transparent flex ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`}>
                            <Link aria-labelledby="Github" aria-label="Github" href={"https://github.com/Kubaleek"}><Github /></Link>
                        </Button>
                        <Button aria-labelledby="Themes" aria-label="Themes" variant="ghost" size="icon" className={`bg-transparent flex ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`} onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
                            <Icon />
                        </Button>
                    </div>
                </div>
                <p className="text-pretty leading-relaxed text-xs text-[#424242] dark:text-[#b3b2b2]">© 2024 Kuba Król. Wszelkie prawa zastrzeżone.</p>
            </div>
        </footer>
    );
}