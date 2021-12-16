import BaseSection from "../BaseSection";
import SkillBlock from "../blocks/SkillBlock";

function TopSkillsSection() {
  return (
    <BaseSection title="Top Skills" subTitle="Missing any? Contact me 😊">
      <div className="flex gap-4">
        <div className="flex-1">
          <SkillBlock name="React" rating={5} />
          <SkillBlock name="Testing" rating={4} />
        </div>
        <div className="flex-1">
          <SkillBlock name="TypeScript" rating={5} />
          <SkillBlock name="AWS" rating={3} />
        </div>
      </div>
    </BaseSection>
  );
}

export default TopSkillsSection;
