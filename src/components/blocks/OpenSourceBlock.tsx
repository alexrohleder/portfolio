import { CalendarIcon, CodeIcon, LinkIcon } from "@heroicons/react/outline";
import BaseLink from "../BaseLink";

type Props = {
  title: string;
  sourceLink: string;
  deployLink?: string;
  year: number;
  highlights: string[];
  techStack: string[];
};

function OpenSourceBlock(props: Props) {
  return (
    <article>
      <h1 className="font-semibold">{props.title}</h1>
      <div className="flex flex-col gap-2 mt-1 text-sm text-gray-500 dark:text-gray-400 lgp:flex-row lgp:gap-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4" />
          <div>{props.year}</div>
        </div>
        <div className="flex items-center gap-2">
          <CodeIcon className="w-4 h-4" />
          <div>
            <BaseLink
              variant="primary"
              href={`https://${props.sourceLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.sourceLink}
            </BaseLink>
          </div>
        </div>
        {props.deployLink && (
          <div className="flex items-center gap-2">
            <LinkIcon className="w-4 h-4" />
            <div>
              <BaseLink
                variant="primary"
                href={`https://${props.deployLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.deployLink}
              </BaseLink>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-1 print:flex-row">
        <ol className="flex-1 list-disc">
          {props.highlights.map((highlight, index) => (
            <li className="mb-2 print:mb-0" key={index}>
              {highlight};
            </li>
          ))}
        </ol>
        <div className="flex flex-col text-sm print:w-1/4 lg:flex-row lg:gap-2">
          <div className="font-semibold whitespace-nowrap">Tech Stack:</div>
          <div>{props.techStack.join(", ")}.</div>
        </div>
      </div>
    </article>
  );
}

export default OpenSourceBlock;
