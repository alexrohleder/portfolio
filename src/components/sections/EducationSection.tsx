import { ExternalLinkIcon } from "@heroicons/react/outline";
import BaseSection from "../BaseSection";

function EducationSection() {
  return (
    <BaseSection
      title="Education"
      subTitle="There are unlisted courses and certifications"
    >
      <ul className="list-disc">
        <li className="mb-2 print:mb-0">
          <a
            className="flex items-center gap-2"
            href="https://en.wikipedia.org/wiki/Bachelor_of_Information_Systems#:~:text=Bachelor%20of%20Information%20Systems%20is,covered%20in%20the%20study%20program.&text=A%20typical%20job%20gained%20after%20graduation%20is%20IT%20consulting."
            target="_blank"
            rel="noopener noreferrer"
          >
            Information Systems BSc
            <ExternalLinkIcon className="h-4 w-4 print:hidden" />
          </a>
        </li>
        <li className="mb-2 print:mb-0">
          <a
            className="flex items-center gap-2"
            href="https://aws.amazon.com/en/certification/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS - Cloud Practioner Certification
            <ExternalLinkIcon className="h-4 w-4 print:hidden" />
          </a>
        </li>
        <li className="mb-2 print:mb-0">
          <a
            className="flex items-center gap-2"
            href="https://reactlive.nl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React - Advanced React Patterns Course
            <ExternalLinkIcon className="h-4 w-4 print:hidden" />
          </a>
        </li>
      </ul>
    </BaseSection>
  );
}

export default EducationSection;
