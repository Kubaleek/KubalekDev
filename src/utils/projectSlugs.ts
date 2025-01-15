import NEXTJS_ICON from "@/components/icons/stacks/nextjs";
import TAILWIND_ICON from "@/components/icons/stacks/tailwind";
import TS_ICON from "@/components/icons/stacks/Typescript";


export const project: ProjectProps[] = [
    {
        id: '1',
        title: 'KubalekDev',
        image: '/portfolio/kubalekdev.png',
        alt: 'KubalekDev',
        description: 'KubalekDev to nowoczesne portfolio prezentujące moje umiejętności jako Frontend Developera. Zbudowane z użyciem Next.js, Tailwind CSS, Shadcn/ui i TypeScript, projekt łączy estetykę, wydajność i responsywność, zapewniając wyjątkowe doświadczenia użytkownika.',
        stacks: ['Next.js', 'Tailwind', 'Shadcn/ui', 'TypeScript'],
        githubLink: "https://github.com/Kubaleek/KubalekDev",
        demolink: "#",
        projectDetails: {
            desc: "KubalekDev to nowoczesne portfolio",
            intro: ["KubalekDev to współczesne portfolio stworzone z myślą o prezentacji projektów oraz umiejętności jako Frontend Developera. Projekt został zbudowany w oparciu o Next.js, Tailwind CSS, Shadcn/ui i TypeScript, co gwarantuje nowoczesność, wysoką wydajność oraz pełną responsywność na różnych urządzeniach.", "Portfolio nie tylko prezentuje przykłady mojej pracy, ale także skupia się na dostarczeniu użytkownikom wyjątkowego doświadczenia dzięki starannie zaprojektowanym interfejsom oraz płynnym animacjom. Każdy element strony, od interaktywnej nawigacji po szczegółowe opisy projektów, został zaprojektowany z myślą o estetyce i funkcjonalności."],
            techs: [
                {
                    type: "frontend",
                    stacks: [
                        {
                            id: 1,
                            name: "nextjs",
                            svg: NEXTJS_ICON,
                        },
                        {
                            id: 2,
                            name: "typescript",
                            svg: TS_ICON,
                        },
                        {
                            id: 3,
                            name: "tailwind",
                            svg: TAILWIND_ICON,
                        },
                    ],
                },
                {
                    type: "backend",
                    stacks: [],
                },
                {
                    type: "tools",
                    stacks: [],
                },
            ],
            performanceText: ["Moje portfolio to nowoczesna strona z porządnym SEO, szybkim ładowaniem i pełną responsywnością"],
            performanceImage: "/portfolio/seo.png",
        }
    },
];
