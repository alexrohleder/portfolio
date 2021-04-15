import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import Header from "../components/Header";
import ExpertiseSection from "../components/ExpertiseSection";
import SummarySection from "../components/SummarySection";
import VolunteerSection from "../components/VolunteerSection";

const Index = () => (
  <main className="container m-auto px-8 py-24">
    <Header />
    <div className="mt-10 grid gap-4 lg:grid-cols-4">
      <div className="lg:col-span-4 lg:mb-6">
        <SummarySection />
      </div>
      <div className="lg:col-span-3">
        <ExperienceSection />
      </div>
      <div className="flex flex-col gap-10">
        <EducationSection />
        <ExpertiseSection />
        <VolunteerSection />
      </div>
    </div>
  </main>
);

export default Index;
