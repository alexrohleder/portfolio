import BaseSection from "../BaseSection";

function SummarySection() {
  return (
    <BaseSection title="Summary">
      <div className="flex flex-col gap-2 print:gap-0">
        <p>
          Hey! I&apos;m a Brazilian passionate about building high-impact,
          well-performing user experiences.
        </p>
        <p>
          I believe that work is a significant portion of my day, so I try to
          make the best out of it for my colleagues and me.
        </p>
        <p>
          To achieve that, I focus on empathy during conversations and try to
          deliver something I&apos;m happy with.
        </p>
      </div>
    </BaseSection>
  );
}

export default SummarySection;
