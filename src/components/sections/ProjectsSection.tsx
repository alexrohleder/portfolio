import BaseSection from "../BaseSection";
import ProjectBlock from "../blocks/ProjectBlock";

function ProjectsSection() {
  return (
    <BaseSection title="Projects" subTitle="There are more, ask me about it!">
      <div className="grid gap-6 xl:grid-cols-2 print:gap-3">
        <ProjectBlock
          title="PowerOffice website"
          employeer=""
          client="PowerOffice"
          clientWebsite="https://poweroffice.no"
          employeerWebsite=""
          startDate={new Date(2022, 4)}
          highlights={[
            "Next.js website built with Sanity CMS",
            "Has a NodeJS API that uses Google Maps API, Redis and a relational database",
            "The CMS setup allows the creation of new unique pages with customizable modules",
            "There are many animations made with Framer Motion; Some with complex orchestration",
          ]}
          techStack={[
            "React",
            "TypeScript",
            "Next.js",
            "Sanity CMS",
            "Framer Motion",
            "AWS",
            "Redis",
            "Vercel",
            "NodeJS",
            "Google Tag Manager",
            "Figma",
          ]}
        />
        <ProjectBlock
          title="Micro-Frontend platform"
          employeer="Sportradar"
          employeerWebsite="https://sportradar.com"
          startDate={new Date(2021, 6)}
          endDate={new Date(2022, 3)}
          highlights={[
            "Single page frontend built with TypeScript, React, Import-Maps and Webpack",
            "Able to load different apps into a single interface and bridge their communication",
            "There is a huge side of CLI tooling and webpack configuration",
            "Developer experience is critical, this is the platform to build apps for",
          ]}
          techStack={[
            "React",
            "TypeScript",
            "AWS",
            "WebPack",
            "Jest",
            "NodeJS",
          ]}
        />
        <ProjectBlock
          title="Formula 1 Trading Application"
          employeer="Sportradar"
          employeerWebsite="https://sportradar.com"
          startDate={new Date(2020, 1)}
          endDate={new Date(2022, 3)}
          highlights={[
            "Real-time frontend built with Typescript, React, Redux and Styled-Components",
            "Handle a lot of live data. The data can receive 5 to 8 updates per second",
            "There is render throttling for different portions of the screen, performance is important",
            "Tested using end-to-end tests, unit tests and static tests",
          ]}
          techStack={[
            "React",
            "TypeScript",
            "WebSocket",
            "Styled-Components",
            "Jest",
            "Cypress",
            "Redux",
            "Redux-Sagas",
            "Figma",
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
            "Fully tested on critical paths with end-to-end, integration and unit tests",
          ]}
          techStack={[
            "React",
            "JavaScript",
            "Redux",
            "SCSS",
            "Cypress",
            "React Router",
            "PHP",
            "Symfony",
            "MySQL",
            "Figma",
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
          techStack={[
            "VueJS",
            "JavaScript",
            "Laravel",
            "PHP",
            "Oracle DB",
            "SQL",
          ]}
        />
      </div>
    </BaseSection>
  );
}

export default ProjectsSection;
