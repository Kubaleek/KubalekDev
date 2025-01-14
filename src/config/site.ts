export const siteConfigs: Site = {
    name: 'KubalekDev',
    description: 'KubalekDev to nowoczesne portfolio prezentujące moje umiejętności jako Frontend Developera. Zbudowane z użyciem Next.js, Tailwind CSS, Shadcn/ui i TypeScript, projekt łączy estetykę, wydajność i responsywność, zapewniając wyjątkowe doświadczenia użytkownika.',
    url: 'http://localhost:3000/',
    keywords: [
        "Portfolio", "Programista", "Strony Internetowe", "Aplikacje Webowe",
        "Aplikacje Mobilne", "Aplikacje Desktopowe", "Nowoczesne Strony Internetowe",
        "Nowoczesne Technologie", "Programowanie", "SEO", "Optymalizacja Stron WWW",
        "Wydajne Strony WWW", "UI/UX Wygląd", "Frontend Developer", "Web Developer",
        "Nowoczesny Wygląd", "Next.js", "Tailwind", "Typescript", "Docker"
    ],
    authors: [
        {
            name: 'Kuba `Kubalek` Król',
            url: 'https://github.com/Kubaleek',
        },
    ],
    creator: 'KubalekDev',
    publisher: 'KubalekDev',
    openGraph: {
        type: 'website',
        image: '/portfolio/kubalekdev.png',
        locale: 'pl_PL',
        url: 'http://localhost:3000/',
        title: 'KubalekDev',
        description: 'KubalekDev to nowoczesne portfolio prezentujące moje umiejętności jako Frontend Developera.',
        siteName: 'KubalekDev',
    },
    manifest: '/site.webmanifest',
};

export default siteConfigs;
