import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/outline";
import getFormattedDate from "../../lib/getFormattedDate";
import getWorkedTime from "../../lib/getWorkedTime";

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
      <div className="flex flex-col gap-2 text-gray-500 text-sm mt-1 lgp:flex-row lgp:gap-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          <div>
            {getFormattedDate(props.startDate)} -{" "}
            {props.endDate ? getFormattedDate(props.endDate) : "Ongoing"} ·{" "}
            {getWorkedTime(props.startDate, props.endDate)}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BriefcaseIcon className="h-4 w-4" />
          <div>
            <a
              className="text-blue-700 hover:underline font-semibold"
              href={props.employeerWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.employeer}
            </a>
            {props.client && (
              <>
                {" consulting for "}
                <a
                  className="text-blue-700 hover:underline font-semibold"
                  href={props.clientWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.client}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2 gap-2 print:flex-row">
        {props.highlights && (
          <ol className="list-disc flex-1">
            {props.highlights.map((highlight, index) => (
              <li className="mb-2 print:mb-0" key={index}>
                {highlight};
              </li>
            ))}
          </ol>
        )}
        <div className="flex flex-col text-sm print:w-1/4 lg:flex-row lg:gap-2">
          <div className="font-semibold">Tech Stack:</div>
          <div>{props.techStack.join(", ")}.</div>
        </div>
      </div>
    </article>
  );
}

export default ProjectBlock;
