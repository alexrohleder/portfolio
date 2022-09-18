import BaseSection from "../BaseSection";
import SkillBlock from "../blocks/SkillBlock";

function TopSkillsSection() {
  return (
    <BaseSection title="Top Skills" footerNote="Missing any? Contact me 😊">
      <div className="hidden gap-8 print:flex">
        <div className="flex-1">
          <SkillBlock name="React" years={5} />
          <SkillBlock name="AWS" years={3} />
        </div>
        <div className="flex-1">
          <SkillBlock name="TypeScript" years={5} />
          <SkillBlock name="Sanity" years={1} />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 print:hidden">
        <SkillBlock name="React" years={5} />
        <SkillBlock name="TypeScript" years={5} />
        <SkillBlock name="Sanity" years={1} />
        <SkillBlock name="AWS" years={3} />
      </div>
    </BaseSection>
  );
}

export default TopSkillsSection;
