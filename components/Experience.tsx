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

const Experience = (props: Props) => {
  const getFormattedDate = (date: Date) => {
    return (
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "/" +
      date.getFullYear()
    );
  };

  return (
    <article>
      <h1 className="font-semibold">{props.title}</h1>

      <h2 className="font-semibold text-blue-700">
        <a href={props.employeerWebsite} target="_blank" rel="noopener">
          {props.employeer}
        </a>
      </h2>

      <div className="flex gap-4 text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <div>
            {getFormattedDate(props.startDate)} -{" "}
            {props.endDate ? getFormattedDate(props.endDate) : "Ongoing"}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div>{props.location}</div>
        </div>
      </div>
      <p className="my-4">{props.summary}</p>
      <ul className="list-disc mt-2">
        {props.highlights.map((highlight) => (
          <li className="mb-2" key={highlight}>
            {highlight};
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Experience;
