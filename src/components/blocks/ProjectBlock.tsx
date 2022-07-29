import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/outline";
import getFormattedDate from "../../lib/getFormattedDate";
import getWorkedTime from "../../lib/getWorkedTime";
import BaseLink from "../BaseLink";

type Props = {
  title: string;
  employeer: string;
  employeerWebsite: string;
  client?: string;
  clientWebsite?: string;
  startDate: Date;
  endDate?: Date;
  highlights?: string[];
  techStack: string[];
};

function ProjectBlock(props: Props) {
  return (
    <article>
      <h1 className="font-semibold">{props.title}</h1>
      <div className="flex flex-col gap-1 my-1 text-sm text-gray-500 dark:text-gray-400 lgp:flex-row lgp:gap-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4" />
          <div>
            {getFormattedDate(props.startDate)} -{" "}
            {props.endDate ? (
              <>
                {getFormattedDate(props.endDate)} ·{" "}
                {getWorkedTime(props.startDate, props.endDate)}
              </>
            ) : (
              "Ongoing"
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BriefcaseIcon className="w-4 h-4" />
          <div>
            <BaseLink
              variant="primary"
              href={props.employeerWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.employeer}
            </BaseLink>
            {props.client && (
              <>
                {" consulting for "}
                <BaseLink
                  variant="primary"
                  href={props.clientWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.client}
                </BaseLink>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 print:flex-row">
        {props.highlights && (
          <ol className="flex-1 list-disc">
            {props.highlights.map((highlight, index) => (
              <li className="mb-1 print:mb-0" key={index}>
                {highlight};
              </li>
            ))}
          </ol>
        )}
        <div className="flex flex-col text-sm print:w-1/4 lg:flex-row lg:gap-2">
          <div className="font-semibold whitespace-nowrap">Tech Stack:</div>
          <div>{props.techStack.join(", ")}.</div>
        </div>
      </div>
    </article>
  );
}

export default ProjectBlock;
