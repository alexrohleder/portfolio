import BaseFooter from "../components/BaseFooter";
import BaseHeader from "../components/BaseHeader";
import BasePages from "../components/BasePages";
import BaseSection from "../components/BaseSection";
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
        <div className="flex flex-col gap-6">
          <BaseHeader />
          <SummarySection />
          <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col gap-6 lg:col-span-2 xl:col-span-3">
              <ExperienceSection />
              <WhatSetsMeApartSection />
            </div>
            <div className="flex flex-col gap-8 print:flex-row">
              <div className="flex flex-col gap-6 print:flex-1">
                <TopSkillsSection />
              </div>
              <div className="flex flex-col gap-6 print:flex-1">
                <LanguagesSection />
              </div>
            </div>
            <BaseSection
              title="What my mentees say"
              subTitle="I'm a professional mentor! See more at my MentorCruise profile."
            >
              <div className="flex flex-col gap-3">
                <div>
                  <div className="mb-1">
                    <span className="font-semibold">Marcin Fiuk</span>
                    <span className="text-gray-500"> on April 25, 2022</span>
                  </div>
                  <div>
                    “It&#39;s a pleasure to work with Alex. He is really good
                    listener and has a lot of knowledge.”
                  </div>
                </div>
                <div>
                  <div className="mb-1">
                    <span className="font-semibold">Rory Collins</span>
                    <span className="text-gray-500"> on June 15, 2022</span>
                  </div>
                  <div>
                    “Alex is a phenomenal mentor and an all-around great person.
                    I&#39;m really grateful for his help and attention to
                    detail. . . . He obviously has a huge amount of knowledge
                    and experience . . . I&#39;m often left thinking about why I
                    did not start working with him earlier in my career. . . . I
                    100% recommend him to anyone at any level. Thanks Alex!!”
                  </div>
                </div>
              </div>
            </BaseSection>
            <EducationSection />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <ProjectsSection />
          <OpenSourceSection />
        </div>
      </BasePages>
      <BaseFooter />
    </div>
  );
}
