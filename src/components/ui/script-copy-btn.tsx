"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { HTMLAttributes, useEffect, useState } from "react";
import { codeToHtml } from "shiki";

interface ScriptCopyBtnProps extends HTMLAttributes<HTMLDivElement> {
  showMultiplePackageOptions?: boolean;
  codeLanguage: string;
  lightTheme?: string;
  darkTheme?: string;
  commandMap: Record<string, string>;
  className?: string;
}

export default function ScriptCopyBtn({
  showMultiplePackageOptions = true,
  codeLanguage,
  lightTheme,
  darkTheme,
  commandMap,
  className,
}: ScriptCopyBtnProps) {
  const packageManagers = Object.keys(commandMap);
  const [packageManager, setPackageManager] = useState(packageManagers[0]);
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState("");
  const { theme } = useTheme();
  const command = commandMap[packageManager];

  useEffect(() => {
    async function loadHighlightedCode() {
      try {
        const highlighted = await codeToHtml(command, {
          lang: codeLanguage,
          themes: {
            light: lightTheme,
            dark: darkTheme,
          },
          defaultColor: theme === "dark" ? "dark" : "light",
        });
        setHighlightedCode(highlighted);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre>${command}</pre>`);
      }
    }

    loadHighlightedCode();
  }, [command, theme, codeLanguage, lightTheme, darkTheme]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "flex max-w-full items-center justify-center",
        className,
      )}
    >
      <div className="w-full space-y-5">
        <div className="mb-2 flex items-center justify-between">
          {showMultiplePackageOptions && (
            <div className="relative">
              <div className="inline-flex overflow-hidden rounded-md border-[#121212]/15 dark:border-white/15 border text-xs">
                {packageManagers.map((pm, index) => (
                  <div key={pm} className="flex items-center">
                    {index > 0 && (
                      <div className="h-4 w-px bg-border" aria-hidden="true" />
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`relative rounded-none bg-zinc-200 text-[#424242] dark:text-[#b3b2b2] hover:bg-[#e4e4e4]  dark:bg-[#121212] py-1 dark:hover:bg-[#080808] ${
                        packageManager === pm
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setPackageManager(pm)}
                    >
                      {pm}
                      {packageManager === pm && (
                        <motion.div
                          className="absolute inset-x-0 bottom-[1px] mx-auto h-0.5 bg-[#121212]  dark:bg-zinc-200"
                          layoutId="activeTab"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative flex gap-3 items-center text-center">
          <div className="grow font-mono rounded-md border-[#121212]/15 dark:border-white/15 border bg-zinc-200 dark:bg-[#121212]">
            {highlightedCode ? (
              <div
                className={`[&>pre]:overflow-x-auto [&>pre]:rounded-md [&>pre]:p-2 [&>pre]:font-mono ${
                  theme === "dark" ? "dark" : "light"
                }`}
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            ) : (
              <pre className="rounded-md border-[#121212]/15 dark:border-white/15 border bg-white p-2 px-4 font-mono dark:bg-[#121212]">
                {command}
              </pre>
            )}
          </div>
          <Button
            variant="secondary"
            size="icon"
            className="relative border-[#121212]/15 dark:border-white/15 border bg-zinc-200 text-[#424242] dark:text-[#b3b2b2] hover:bg-[#e4e4e4]  dark:bg-[#121212]"
            onClick={copyToClipboard}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
          >
            <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
            <Copy
              className={`h-4 w-4 transition-all duration-300 ${
                copied ? "scale-0" : "scale-100"
              }`}
            />
            <Check
              className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${
                copied ? "scale-100" : "scale-0"
              }`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
