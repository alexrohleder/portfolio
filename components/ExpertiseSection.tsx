import Expertise from "./Expertise";
import Section from "./Section";

const ExpertiseSection = () => {
  return (
    <Section
      title="Expertise"
      subTitle="How confortable I'm with each technology"
    >
      <Expertise label="Javascript (5+ years)" value={100} />
      <Expertise label="PHP (5 years + certification)" value={70} />
      <Expertise label="React (3 years + courses)" value={90} />
      <p className="mt-4 text-sm text-gray-500">
        Didn't find the technology you are looking for?
        <br />
        <a className="text-blue-700 hover:underline" href="/expertise">
          Click here to search the full list
        </a>
      </p>
    </Section>
  );
};

export default ExpertiseSection;
