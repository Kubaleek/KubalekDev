import Image from "next/image";
import BoxReveal from "@/components/ui/box-reveal";

const ProjectImage = ({ image, alt }: {image: string, alt: string}) => {
    return (
        <section className="border-[#121212]/15 dark:border-white/15 border-b border-dotted p-6">
            <BoxReveal boxColor={"#555"} duration={0.5}>
                <Image src={image} alt={alt} width={1200} height={1200} loading="lazy"  className="rounded-md shadow shadow-black dark:shadow-white" />
            </BoxReveal>
        </section>
    );
};

export default ProjectImage;