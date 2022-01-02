import BaseSection from "../BaseSection";
import ReferenceBlock from "../blocks/ReferenceBlock";

function ReferencesSection() {
  return (
    <BaseSection
      title="References"
      subTitle="Need more? Ask and I can provide ✌️"
    >
      <div className="flex flex-col gap-2">
        <ReferenceBlock
          name="Fernando Alencar"
          relation="Worked with at Sportradar; Bought a house with him"
        />
        <ReferenceBlock
          name="Stefan Pammer"
          relation="Was my PO in many projects at Sportradar"
        />
      </div>
    </BaseSection>
  );
}

export default ReferencesSection;
