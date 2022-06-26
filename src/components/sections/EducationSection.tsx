import BaseLink from "../BaseLink";
import BaseSection from "../BaseSection";

function EducationSection() {
  return (
    <BaseSection
      title="Education"
      footerNote="There are unlisted courses and certifications"
    >
      <ul className="flex gap-8 list-disc">
        <li className="mb-2 print:mb-0">
          <BaseLink
            className="flex items-center gap-2"
            href="https://en.wikipedia.org/wiki/Bachelor_of_Information_Systems#:~:text=Bachelor%20of%20Information%20Systems%20is,covered%20in%20the%20study%20program.&text=A%20typical%20job%20gained%20after%20graduation%20is%20IT%20consulting."
            target="_blank"
            rel="noopener noreferrer"
          >
            Information Systems BSc
          </BaseLink>
        </li>
        <li className="mb-2 print:mb-0">
          <BaseLink
            className="flex items-center gap-2"
            href="https://reactlive.nl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React - Advanced Patterns Course
          </BaseLink>
        </li>
        <li className="mb-2 print:mb-0">
          <BaseLink
            className="flex items-center gap-2"
            href="http://www.zend.com/en/yellow-pages/ZEND029184"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend - PHP Certified Engineer
          </BaseLink>
        </li>
      </ul>
    </BaseSection>
  );
}

export default EducationSection;
