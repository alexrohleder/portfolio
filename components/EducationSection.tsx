import Section from "./Section";

const ExternalLink = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 ml-2 inline"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const EducationSection = () => {
  return (
    <Section title="Education">
      <ul className="list-disc">
        <li className="mb-2">
          <a
            className="flex items-center"
            href="https://en.wikipedia.org/wiki/Bachelor_of_Information_Systems#:~:text=Bachelor%20of%20Information%20Systems%20is,covered%20in%20the%20study%20program.&text=A%20typical%20job%20gained%20after%20graduation%20is%20IT%20consulting."
            target="_blank"
            rel="noopener"
          >
            Information Systems Bachelor Degree
            <ExternalLink />
          </a>
        </li>
        <li className="mb-2">
          <a
            className="flex items-center"
            href="https://www.zend-zce.com/en/yellow-pages/ZEND029184"
            target="_blank"
            rel="noopener"
          >
            Certified PHP Engineer by ZEND
            <ExternalLink />
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="https://reactlive.nl/"
            target="_blank"
            rel="noopener"
          >
            Advanced React Patterns - React Live AMS
            <ExternalLink />
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default EducationSection;
