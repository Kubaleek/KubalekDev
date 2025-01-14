import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import siteConfigs from '../config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfigs.name,
    template: `%s | ${siteConfigs.name}`,
  },
  description: siteConfigs.description,
  authors: siteConfigs.authors,
  keywords: siteConfigs.keywords.join(", "),
  manifest: siteConfigs.manifest,
  creator: siteConfigs.creator,
  openGraph: siteConfigs.openGraph,
  publisher: siteConfigs.publisher,
  referrer: "origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`bg-zinc-200  dark:bg-[#121212] text-[#424242] dark:text-[#b3b2b2] h-full min-h-svh relative !font-custom antialiased text-pretty leading-relaxed text-base`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
