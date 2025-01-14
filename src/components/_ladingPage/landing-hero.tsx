import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import Android from "@/components/ui/android";
import Safari from "@/components/ui/safari";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BoxReveal from "../ui/box-reveal";
import { Separator } from "../ui/separator";
import DotPattern from "../ui/dot-pattern";
import { latestProjects } from "./landing-projects";

export default function LandingHero() {
  const [firstProject, secondProject, thirdProject]: ProjectProps[] = latestProjects.length
    ? latestProjects
    : [{}, {}, {}];
  return (
    <section className="relative w-full flex justify-center h-full items-center p-6 text-center flex-col gap-6">
      <DotPattern className={cn("[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]")} />
      <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 lg:px-4 xl:px-8">
            <div className="flex flex-col gap-2">
              <BoxReveal boxColor={"#555"} duration={0.5}>
                <h1 className="text-left text-transparent bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-3xl md:text-4xl xl:text-6xl tracking-tighter font-bold">
                  Kuba Kubalek Król
                </h1>
              </BoxReveal>
              <BoxReveal boxColor={"#555"} duration={0.5}>
                <div className="flex w-full max-w-full custom:w-fit flex-col custom:flex-row gap-3">
                  <AnimatedGradientText className="w-full custom:w-fit">
                    👨🏻‍💻 <hr className="mx-2 h-4 w-px shrink-0 bg-[#121212] dark:bg-gray-300" />{" "}
                    <span className={cn("inline animate-gradient bg-gradient-to-r from-[#121212] via-[#2c2c2c] to-[#555] dark:from-[#121212] dark:via-zinc-100 dark:to-zinc-300 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent")}>
                      Freelancer
                    </span>
                  </AnimatedGradientText>
                  <AnimatedGradientText className="w-full custom:w-fit">
                    💼 <hr className="mx-2 h-4 w-px shrink-0 bg-[#121212] dark:bg-gray-300" />{" "}
                    <span className={cn("inline animate-gradient bg-gradient-to-r from-[#121212] via-[#2c2c2c] to-[#555] dark:from-[#121212] dark:via-zinc-100 dark:to-zinc-300 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent")}>
                      Szukam Zleceń
                    </span>
                  </AnimatedGradientText>
                </div>
              </BoxReveal>
            </div>
            <div className="flex flex-col gap-6 overflow-hidden">
              <BoxReveal boxColor={"#555"} duration={0.5}>
                <p className="text-pretty leading-relaxed text-sm text-left sm:text-base text-[#424242] dark:text-[#b3b2b2]">
                  ✌️ Cześć Jestem programistą z pasją do odkrywania nowych możliwości w różnych językach programowania oraz tworzenia ciekawych projektów za pomocą kodu.
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#555"} duration={0.5}>
                <p className="text-pretty leading-relaxed text-sm text-left sm:text-base text-[#424242] dark:text-[#b3b2b2]">
                  💻 Swoją przygodę z programowaniem rozpocząłem w 2022 roku. Moim celem jest ciągła nauka, zdobywanie nowej wiedzy i rozwijanie umiejętności. Zachęcam do zapoznania się z moimi projektami i serdecznie zapraszam do kontaktu!
                </p>
              </BoxReveal>
              <Separator className="bg-[#121212]/25 dark:bg-zinc-200/25" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <BoxReveal boxColor={"#555"} duration={0.5}>
                <RainbowButton>
                  <Link aria-label="projekty" href="/projekty">
                    Moje Projekty
                  </Link>
                </RainbowButton>
              </BoxReveal>
              <BoxReveal boxColor={"#555"} duration={0.5}>
                <RainbowButton>
                  <Link aria-label="kontakt" href="/kontakt">
                    Wyślij Wiadomość
                  </Link>
                </RainbowButton>
              </BoxReveal>
            </div>
          </div>
        </div>
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 relative items-center justify-center">
        <div className="relative grid grid-cols-1 gap-6">
            {[firstProject, secondProject].map(
              (project, i) =>
                project?.image ? (
                  <BoxReveal key={i} boxColor={"#555"} duration={0.7}>
                    <Safari imageSrc={project.image} className="size-full object-cover justify-center items-center border-[#121212]/15 dark:border-white/15 border" />
                  </BoxReveal>
                ) : (
                  <BoxReveal key={i} boxColor={"#555"} duration={0.7}>
                    <Safari className="size-full object-cover justify-center items-center border-[#121212]/15 dark:border-white/15 border" />
                  </BoxReveal>
                )
            )}
          </div>
          <BoxReveal boxColor={"#555"} duration={0.7}>
            {thirdProject?.image ? (
              <Android src={thirdProject.image} className="size-full mx-4 object-cover justify-center items-center" />
            ) : (
              <Android className="size-full mx-4 object-cover justify-center items-center" />
            )}
          </BoxReveal>
        </div>
      </div>
    </section>
  );
}
