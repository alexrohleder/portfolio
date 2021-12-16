import BaseSection from "../BaseSection";
import ProjectBlock from "../blocks/ProjectBlock";

function ProjectsSection() {
  return (
    <BaseSection title="Projects">
      <div className="grid xl:grid-cols-2 gap-6 print:gap-4">
        <ProjectBlock
          title="Micro-Frontend platform"
          employeer="Sportradar"
          employeerWebsite="https://sportradar.com"
          startDate={new Date(2021, 6)}
          highlights={[
            "Single page frontend built with TypeScript, React, Import-Maps and Webpack",
            "Able to load different apps into a single interface and bridge their communication",
            "There is a huge side of CLI tooling and webpack configuration",
            "Developer experience is critical, this is the platform to build apps for",
          ]}
        />
        <ProjectBlock
          title="Formula 1 Trading Application"
          employeer="Sportradar"
          employeerWebsite="https://sportradar.com"
          startDate={new Date(2020, 1)}
          highlights={[
            "Real-time frontend built with Typescript, React, Redux and Styled-Components",
            "Handle a lot of live data. The data can receive 5 to 8 updates per second",
            "There is render throttling for different portions of the screen, performance is important",
            "Tested using end to end tests, unit tests and static tests",
          ]}
        />
        <ProjectBlock
          title="Booking Calendar"
          employeer="Sportradar"
          employeerWebsite="https://sportradar.com"
          startDate={new Date(2018, 2)}
          endDate={new Date(2020, 1)}
          highlights={[
            "Single page frontend built with React, Redux and SCSS",
            "Handled a lot of data, performance was important",
            "There is a set of complex filtering with filter composing heuristics",
            "Fully tested on critical paths with end to end, integration and unit tests",
          ]}
        />
        <ProjectBlock
          title="Healthcare Insurance Application"
          employeer="Meta"
          employeerWebsite="https://www.meta.com.br/"
          client="Unimed"
          clientWebsite="https://www.linkedin.com/company/unimed-com-br/"
          startDate={new Date(2016, 2)}
          endDate={new Date(2018, 0)}
          highlights={[
            "Multi-page app built with Laravel, VueJS and SCSS",
            "Developers had direct access to stakeholders, the domain was well known by both",
            "Load performance was critical, many techniques were applied to maintain it",
            "Search functionalities were highly optimized and allowed rich queries",
          ]}
        />
      </div>
    </BaseSection>
  );
}

export default ProjectsSection;
