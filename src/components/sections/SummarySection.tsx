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
          I believe that work is such a significant portion of my day, that being
          great at it makes me happier and more fulfilled.
        </p>
        <p>
          I focus on being a team player; to be empatic, friendly, and to write clean, maintainable code.
        </p>
      </div>
    </BaseSection>
  );
}

export default SummarySection;
