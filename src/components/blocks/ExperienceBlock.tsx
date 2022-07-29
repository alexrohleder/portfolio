import { CalendarIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import getFormattedDate from "../../lib/getFormattedDate";
import getWorkedTime from "../../lib/getWorkedTime";
import BaseLink from "../BaseLink";

type Props = {
  title: string;
  employeer?: string;
  employeerWebsite?: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  summary?: string;
  highlights?: string[];
};

function ExperienceBlock(props: Props) {
  return (
    <article>
      <h1 className="font-semibold">
        {props.employeer && (
          <>
            <BaseLink
              variant="primary"
              href={props.employeerWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.employeer}
            </BaseLink>
            {" - "}
          </>
        )}
        {props.title}
      </h1>
      <div className="flex flex-col gap-2 my-1 text-sm text-gray-500 dark:text-gray-400 lgp:gap-4 lgp:flex-row">
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
          <LocationMarkerIcon className="w-4 h-4" />
          <div>{props.location}</div>
        </div>
      </div>
      {props.summary && <p>{props.summary}</p>}
      {props.highlights && (
        <ol className="list-disc">
          {props.highlights.map((highlight, index) => (
            <li className="mb-2 print:mb-0" key={index}>
              {highlight};
            </li>
          ))}
        </ol>
      )}
    </article>
  );
}

export default ExperienceBlock;
