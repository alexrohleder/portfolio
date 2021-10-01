import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import ExpertiseSection from "../components/ExpertiseSection";
import SummarySection from "../components/SummarySection";
import VolunteerSection from "../components/VolunteerSection";

const Index = () => (
  <div className="mt-10 grid gap-4 lg:grid-cols-3 xl:grid-cols-4">
    <div className="lg:col-span-3 xl:col-span-4 lg:mb-6">
      <SummarySection />
    </div>
    <div className="lg:col-span-2 xl:col-span-3">
      <ExperienceSection />
    </div>
    <div className="flex flex-col gap-10">
      <EducationSection />
      <ExpertiseSection />
      <VolunteerSection />
    </div>
  </div>
);

export default Index;
