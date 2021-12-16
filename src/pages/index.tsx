import BaseHeader from "../components/BaseHeader";
import ExperienceSection from "../components/sections/ExperienceSection";
import SummarySection from "../components/sections/SummarySection";
import WhatSetsMeApartSection from "../components/sections/WhatSetsMeApartSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="container mx-auto p-8 print:h-[297mm] print:w-[210mm] flex flex-col gap-8 print:gap-8">
        <BaseHeader />
        <SummarySection />
        <div className="grid gap-8 print:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col gap-8 print:gap-8 lg:col-span-2 xl:col-span-3">
            <ExperienceSection />
            <WhatSetsMeApartSection />
          </div>
          <div className="flex flex-col gap-8 print:flex-row">aside</div>
        </div>
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
