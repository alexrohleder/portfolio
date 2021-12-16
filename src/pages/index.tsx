import BaseHeader from "../components/BaseHeader";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import LanguagesSection from "../components/sections/LanguagesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ReferencesSection from "../components/sections/ReferencesSection";
import SummarySection from "../components/sections/SummarySection";
import TopSkillsSection from "../components/sections/TopSkillsSection";
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
          <div className="flex flex-col gap-8 print:flex-row">
            <div className="flex flex-col gap-8 print:flex-1">
              <TopSkillsSection />
              <ReferencesSection />
            </div>
            <div className="flex flex-col gap-8 print:flex-1">
              <LanguagesSection />
              <EducationSection />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8 print:h-[297mm] print:w-[210mm]">
        <ProjectsSection />
      </div>
      <div className="container mx-auto p-8 print:h-[296mm] print:w-[210mm]">
        page 3
      </div>
    </div>
  );
}
