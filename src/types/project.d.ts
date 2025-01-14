type TechStack = {
    id: number | null;
    name: string;
    svg: () => JSX.Element; 
};

type Tech = {
    type: "frontend" | "backend" | "tools";
    stacks: TechStack[];
};

type ProjectProps = {
    id?: string | null;
    title?: string;
    image?: string;
    alt?: string;
    description?: string;
    stacks?: string[];
    githubLink?: string;
    demolink?: string;
    projectDetails?: {
        desc: string;
        intro: string[];
        techs: Tech[];
        performanceText: string[];
        performanceImage: string;
    };
};