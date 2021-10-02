import Experience from "./Experience";
import Section from "./Section";

const ExperienceSection = () => {
  const years = new Date().getFullYear() - 2016;
  const subTitle = `${years} years as full-time and 1 year as intern.`;

  return (
    <Section title="Experience" subTitle={subTitle}>
      <div className="flex flex-col gap-6">
        <Experience
          title="Software Engineer (Senior)"
          employeer="Sportradar"
          employeerWebsite="https://sportradar.com"
          startDate={new Date(2018, 2)}
          location="Trondheim, Norway"
          summary="Sportradar is the world's leading sports data company, have clients like NHL, NBA, FIFA and NASCAR."
          highlights={[
            "Improved DX for micro-frontend teams. For example, the build times were reduced by an avg. of 70%", // talk about micro-frontends and platform setup
            "Reduced by 87% the number of software vulnerabilities over two teams, either by triage or by development advising", // talk about security champion responsibilities
            "Resolves performance issues on applications with high level of data updates or high amount of data", // talk about performance problems we solved
            "Support hiring, onboarding and mentoring new employees", // talk about hiring, hook to talk about mentoring
          ]}
        />
        <Experience
          title="Software Engineer (Mid-level)"
          employeer="Meta"
          employeerWebsite="https://www.meta.com.br/"
          startDate={new Date(2016, 2)}
          endDate={new Date(2018, 0)}
          location="Recanto Maestro, Brazil"
          summary="Meta is an international IT outsourcing enterprise, have clients like Sascar, Unimed and O Boticário."
          highlights={[
            "Responsible for deployments of applications that could have a severe business impact if there was a downtime",
            "Worked with different development methodologies, as clients may use different variations of Scrum or other methods",
            "Helped on architecting and kick-starting projects. Was set as technical reference for PHP outsourcing",
            "Represented the company in conversations with clients, helping them to solve problems and taking decisions over technical aspects",
          ]}
        />
        <p className="text-sm text-gray-500">
          There is three working experiences that are not listed.
        </p>
      </div>
    </Section>
  );
};

export default ExperienceSection;
