import BaseHeader from "../components/BaseHeader";
import SummarySection from "../components/sections/SummarySection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="container mx-auto p-8 print:h-[297mm] print:w-[210mm] flex flex-col gap-8">
        <BaseHeader />
        <SummarySection />
      </div>
      <div className="container mx-auto p-8 print:h-[297mm] print:w-[210mm]">
        page 2
      </div>
      <div className="container mx-auto p-8 print:h-[296mm] print:w-[210mm]">
        page 3
      </div>
    </div>
  );
}
