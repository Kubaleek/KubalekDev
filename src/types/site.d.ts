interface Author {
    name: string;
    url: string;
}
interface OpenGraph {
    type: string;
    locale: string;
    url: string;
    title: string;
    image: strtng;
    description: string;
    siteName: string;
}

interface Site {
    name: string;
    description: string;
    url: string;
    keywords: string[];
    authors: Author[];
    creator: string;
    publisher: string;
    openGraph: OpenGraph;
    manifest: string;
}