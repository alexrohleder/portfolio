import { CalendarIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import getFormattedDate from "../../lib/getFormattedDate";
import getWorkedTime from "../../lib/getWorkedTime";

type Props = {
  title: string;
  employeer: string;
  employeerWebsite: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  summary: string;
  highlights: string[];
};

function ExperienceBlock(props: Props) {
  return (
    <article>
      <h1 className="font-semibold">
        <a
          className="text-blue-700 hover:underline"
          href={props.employeerWebsite}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.employeer}
        </a>
        {" - "}
        {props.title}
      </h1>
      <div className="flex flex-col gap-2 text-gray-500 text-sm mt-1 lgp:gap-4 lgp:flex-row">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          <div>
            {getFormattedDate(props.startDate)} -{" "}
            {props.endDate ? getFormattedDate(props.endDate) : "Ongoing"} ·{" "}
            {getWorkedTime(props.startDate, props.endDate)}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LocationMarkerIcon className="h-4 w-4" />
          <div>{props.location}</div>
        </div>
      </div>
      <p className="my-2">{props.summary}</p>
      <ol className="list-disc">
        {props.highlights.map((highlight, index) => (
          <li className="mb-2 print:mb-0" key={index}>
            {highlight};
          </li>
        ))}
      </ol>
    </article>
  );
}

export default ExperienceBlock;
