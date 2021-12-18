import BaseHeader from "../components/BaseHeader";
import BasePages from "../components/BasePages";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import LanguagesSection from "../components/sections/LanguagesSection";
import OpenSourceSection from "../components/sections/OpenSourceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SummarySection from "../components/sections/SummarySection";
import TopSkillsSection from "../components/sections/TopSkillsSection";
import WhatSetsMeApartSection from "../components/sections/WhatSetsMeApartSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <BasePages>
        <div className="flex flex-col gap-8">
          <BaseHeader />
          <SummarySection />
          <div className="grid gap-8 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col gap-8 lg:col-span-2 xl:col-span-3">
              <ExperienceSection />
              <WhatSetsMeApartSection />
            </div>
            <div className="flex flex-col gap-8 print:flex-row">
              <div className="flex flex-col gap-8 print:flex-1">
                <TopSkillsSection />
                <EducationSection />
              </div>
              <div className="flex flex-col gap-8 print:flex-1">
                <LanguagesSection />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <ProjectsSection />
          <OpenSourceSection />
        </div>
      </BasePages>
      <div className="container mx-auto p-8 print:hidden">
        <div className="text-center">Made with ❤️ by Alex Rohleder</div>
      </div>
    </div>
  );
}
