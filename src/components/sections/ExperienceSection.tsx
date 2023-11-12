import ExperienceBlock from "../blocks/ExperienceBlock";
import BaseSection from "../BaseSection";

function ExperienceSection() {
  return (
    <BaseSection
      title="Experience"
      subTitle="There are unlisted working experiences."
    >
      <div className="flex flex-col gap-3">
        <ExperienceBlock
          title="Software Engineer (Independent Consultant)"
          startDate={new Date(2022, 3)}
          location="Oslo, Norway (Remote from Trondheim)"
          highlights={[
            "Setting up monorepos, shared packages and code quality tooling",
            "Improve frontend build. Got ~380% faster CI and 45% smaller bundles sizes",
            "Adjusting frontend architecture to enable faster development cycles",
            "Working on ecommerce store UX, backoffice and Sanity CMS implementation"
          ]}
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
            "Improves DX for micro-frontend teams. The achieved results include ~70% faster build time",
            "Manages the security of frontend apps. Reduced the number of vulnerabilities by 87%",
            "Resolves performance issues on real-time data-heavy applications",
            "Supports hiring, onboarding and mentoring of new employees",
          ]}
        />
      </div>
    </BaseSection>
  );
}

export default ExperienceSection;
