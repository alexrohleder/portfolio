import BaseSection from "../BaseSection";
import SkillBlock from "../blocks/SkillBlock";

function TopSkillsSection() {
  return (
    <BaseSection title="Top Skills" footerNote="Missing any? Contact me 😊">
      <div className="hidden print:flex gap-2 lg:gap-4">
        <div className="flex-1">
          <SkillBlock name="React" rating={5} />
          <SkillBlock name="AWS" rating={3} />
        </div>
        <div className="flex-1">
          <SkillBlock name="TypeScript" rating={5} />
          <SkillBlock name="Sanity" rating={4} />
        </div>
      </div>
      <div className="print:hidden grid grid-cols-2 grid-rows-2 gap-2">
        <SkillBlock name="React" rating={5} />
        <SkillBlock name="TypeScript" rating={5} />
        <SkillBlock name="Sanity" rating={4} />
        <SkillBlock name="AWS" rating={3} />
      </div>
    </BaseSection>
  );
}

export default TopSkillsSection;
