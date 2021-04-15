import Experience from "./Experience";
import Section from "./Section";

const ExperienceSection = () => {
  const years = new Date().getFullYear() - 2016;
  const subTitle = `${years} years as full-time and 1 year as intern.`;

  return (
    <Section title="Experience" subTitle={subTitle}>
      <div className="flex flex-col gap-8">
        <Experience
          title="Software Engineer"
          employeer="Sportradar"
          employeerWebsite="https://sportradar.com"
          startDate={new Date(2018, 2)}
          location="Trondheim, Norway"
          summary="Sportradar is the world's leading sports data company, have clients like NHL, NBA, FIFA and NASCAR."
          highlights={[
            "Works mainly in JavaScript, including one react app that generated direct revenue",
            "Helps new employees with onboarding and technical doubts",
            "Was set as security champion of 2 teams",
            "Moved to a team with a tight deadline and managed to reach the goal",
            "Created by it's own initiative a package that bundles common react components",
            "Ideated and implemented at least 3 projects",
          ]}
        />
        <Experience
          title="Software Engineer (Contractor)"
          employeer="Syntesis"
          employeerWebsite="https://syntesis.it/"
          startDate={new Date(2018, 0)}
          endDate={new Date(2018, 2)}
          location="Santa Maria, Brazil"
          summary="Syntesis created SYNSUITE, an software capable to manage businesses in almost every aspect."
          highlights={[
            "Worked on the migration and installation of their own hosted Gitlab instance",
            "Implanted a new development workflow that enabled them to build faster",
            "Ported their system to work within docker containers",
            "Created deployment pipelines allowing them to do seamless atomic deployments",
          ]}
        />
        <Experience
          title="Software Engineer"
          employeer="Meta"
          employeerWebsite="https://www.meta.com.br/"
          startDate={new Date(2016, 2)}
          endDate={new Date(2018, 0)}
          location="Recanto Maestro, Brazil"
          summary="Meta is an international IT outsourcing enterprise operating a software factory that is listed as one of the leaders in Brazil."
          highlights={[
            "Was set as technical reference for PHP outsourcing projects",
            "Took responsibility at client's operation critical situations",
            "Was making deployment of features with business impact",
            "Were involved in meetings with clients and sometimes traveled to meet them",
            "Worked in multiple projects and clients at same time, seamlessly doing context switch",
            "Got experience with big clients under the national market, such as Unimed",
          ]}
        />
      </div>
    </Section>
  );
};

export default ExperienceSection;
