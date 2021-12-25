import { CalendarIcon, CodeIcon, LinkIcon } from "@heroicons/react/outline";

type Props = {
  title: string;
  sourceLink: string;
  deployLink: string;
  year: number;
  highlights: string[];
  techStack: string[];
};

function OpenSourceBlock(props: Props) {
  return (
    <article>
      <h1 className="font-semibold">{props.title}</h1>
      <div className="flex flex-col gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1 lgp:flex-row lgp:gap-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          <div>{props.year}</div>
        </div>
        <div className="flex items-center gap-2">
          <CodeIcon className="h-4 w-4" />
          <div>
            <a
              className="text-blue-700 dark:text-blue-400 hover:underline font-semibold"
              href={`https://${props.sourceLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.sourceLink}
            </a>
          </div>
        </div>
        {props.deployLink && (
          <div className="flex items-center gap-2">
            <LinkIcon className="h-4 w-4" />
            <div>
              <a
                className="text-blue-700 dark:text-blue-400 hover:underline font-semibold"
                href={`https://${props.deployLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.deployLink}
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col mt-2 gap-2 print:flex-row">
        <ol className="list-disc flex-1">
          {props.highlights.map((highlight, index) => (
            <li className="mb-2 print:mb-0" key={index}>
              {highlight};
            </li>
          ))}
        </ol>
        <div className="flex flex-col text-sm print:w-1/4 lg:flex-row lg:gap-2">
          <div className="font-semibold">Tech Stack:</div>
          <div>{props.techStack.join(", ")}.</div>
        </div>
      </div>
    </article>
  );
}

export default OpenSourceBlock;
