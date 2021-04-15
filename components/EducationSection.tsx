import Section from "./Section";

const EducationSection = () => {
  return (
    <Section title="Education">
      <ul className="list-disc">
        <li className="mb-2">
          <a
            href="https://en.wikipedia.org/wiki/Bachelor_of_Information_Systems#:~:text=Bachelor%20of%20Information%20Systems%20is,covered%20in%20the%20study%20program.&text=A%20typical%20job%20gained%20after%20graduation%20is%20IT%20consulting."
            target="_blank"
            rel="noopener"
          >
            Information Systems Bachelor Degree
          </a>
        </li>
        <li>
          <a
            href="https://www.zend-zce.com/en/yellow-pages/ZEND029184"
            target="_blank"
            rel="noopener"
          >
            Certified PHP Engineer by ZEND
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default EducationSection;
