import Link from "next/link";
import Image from "next/image";
import BoxReveal from "../ui/box-reveal";

export default function ProjectCard({ id, title, image, alt, description, stacks, classImage }: { id?: string, title?: string, image?: string, alt?: string, description?: string, stacks?: string[], classImage?: string }) {
  return (
    <BoxReveal boxColor={"#555"} duration={0.7}>
      <Link key={id} href={`/projekty/${id}`} className="group flex flex-col p-3 max-w-3xl border border-[#121212]/25 bg-[white]/25 dark:bg-[#121212] backdrop-blur-3xl  dark:border-[#2c2c2c] items-center justify-start space-y-4 rounded-md transition duration-200 group dark:hover:bg-neutral-800 gap-1 md:flex-row md:space-x-4 md:space-y-0">
        <Image src={image || ''} alt={alt || ''} className={`${classImage} w-full rounded-md md:w-1/4 shadow shadow-black dark:shadow-white`} width={400} height={400} />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="transition-colors text-transparent pb-1 pr-2 bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-xl tracking-tighter font-bold">{title}</h2>
            <p className="transition-colors font-medium text-pretty leading-relaxed max-w-xl text-sm text-[#424242] dark:text-[#b3b2b2]">
              {description}
            </p>
          </div>
          <div className="mt-2 flex flex-wrap gap-2 md:mb-1">
            {stacks?.map((stack, index) => (
              <span key={index} className={`rounded-sm bg-neutral-700 px-2 py-1 text-xs text-zinc-200 md:text-xs lg:text-xs`}>
                {stack}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </BoxReveal>
  );
}