import ExperienceBlock from "../blocks/ExperienceBlock";
import BaseSection from "../BaseSection";

function ExperienceSection() {
  const years = new Date().getFullYear() - 2016;
  const subTitle = `${years} years as full-time and 1 year as intern — there are unlisted working experiences.`;

  return (
    <BaseSection title="Experience" subTitle={subTitle}>
      <div className="flex flex-col gap-4">
        <ExperienceBlock
          title="Software Engineer (Independent Contractor)"
          startDate={new Date(2022, 3)}
          location="Oslo, Norway (Remote)"
        />
        <ExperienceBlock
          title="Software Engineer (Senior)"
          employeer="Sportradar"
          employeerWebsite="https://sportradar.com"
          startDate={new Date(2018, 2)}
          endDate={new Date(2022, 3)}
          location="Trondheim, Norway"
          summary="Sportradar, the world's leading sports data company, has clients like NHL, NBA, FIFA and NASCAR."
          highlights={[
            "Improved DX for micro-frontend teams. One of the achieved results was a reduction in avg. 70% in build times",
            "Reduced by 87% the number of software vulnerabilities over two teams, either by triage or by development advising",
            "Resolves performance issues on applications with a high level of data updates or high amount of data",
            "Supports hiring, onboarding and mentoring new employees",
          ]}
        />
        <ExperienceBlock
          title="Software Engineer (Mid-level)"
          employeer="Meta"
          employeerWebsite="https://www.meta.com.br/"
          startDate={new Date(2016, 2)}
          endDate={new Date(2018, 0)}
          location="Recanto Maestro, Brazil"
          summary="Meta is an international IT outsourcing enterprise with clients like Sascar, Unimed and O Boticário."
          highlights={[
            "Responsible for deployments of critical applications that would lead to severe impact to business in case of downtimes",
            "Worked with different development methodologies, such as Scrum and variations, accordingly to clients' choices",
            "Nominated as the technical reference for PHP outsourcing, helped with architecting and kick-starting multiple projects",
            "Represented the company in client conversations, taking technical decisions to solve their problems",
          ]}
        />
      </div>
    </BaseSection>
  );
}

export default ExperienceSection;
