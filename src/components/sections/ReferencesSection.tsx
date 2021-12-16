import BaseSection from "../BaseSection";

function ReferencesSection() {
  return (
    <BaseSection
      title="References"
      subTitle="People you can contact via LinkedIn"
    >
      <div className="grid grid-cols-2 gap-2">
        <div>
          <div>Thadeu Menezes</div>
          <div className="text-gray-500 text-sm">Leader at Meta</div>
        </div>
        <div>
          <div>Frederico Oliveira</div>
          <div className="text-gray-500 text-sm">Leader at Meta</div>
        </div>
        <div>
          <div>Daniele Pagano</div>
          <div className="text-gray-500 text-sm">Leader at Sportradar</div>
        </div>
        <div>
          <div>Fernando Alencar</div>
          <div className="text-gray-500 text-sm">Business Partner</div>
        </div>
      </div>
    </BaseSection>
  );
}

export default ReferencesSection;
