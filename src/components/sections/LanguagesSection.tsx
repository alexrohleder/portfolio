import BaseSection from "../BaseSection";

const LanguagesSection = () => (
  <BaseSection
    title="Languages"
    footerNote="Based on CEFR language proficiency levels"
  >
    <div className="flex flex-col">
      <div className="grid grid-cols-4 gap-8">
        <div>Portuguese</div>
        <div className="italic text-right">C2</div>
        <div>English</div>
        <div className="italic text-right">C2</div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <div>Spanish</div>
        <div className="italic text-right">A2</div>
        <div>Norwegian</div>
        <div className="italic text-right">A2</div>
      </div>
    </div>
  </BaseSection>
);

export default LanguagesSection;
