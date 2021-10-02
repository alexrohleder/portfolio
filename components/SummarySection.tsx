import Image from "next/image";
import Section from "./Section";

const SummarySection = () => {
  return (
    <Section title="Summary">
      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-1">
          Hey! I'm a Brazilian who is pasionate about building high-impact,
          well-performing user experiences
          <Image
            src="/star-struck.png"
            alt="Grinning Face with Star Eyes"
            width={16}
            height={16}
          />
        </p>
        <p>
          I believe that work is a big portion of my day, so I try to make the
          best out of it for me and my colleagues.
        </p>
        <p>
          <a
            className="text-blue-700 hover:underline"
            href="https://www.kitchensoap.com/2012/10/25/on-being-a-senior-engineer/"
            target="_blank"
          >
            On being a senior engineer
          </a>{" "}
          is an article from{" "}
          <a
            className="text-blue-700 hover:underline"
            href="https://www.kitchensoap.com/"
            target="_blank"
          >
            Kitchen Soap
          </a>{" "}
          that I like and use as guidance.
        </p>
      </div>
    </Section>
  );
};

export default SummarySection;
