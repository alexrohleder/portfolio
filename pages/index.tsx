const IndustryExperise = (props) => {
  return (
    <div>
      <div className="mb-1">{props.label}</div>
      <div className="relative">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: `${props.value}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

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

      <h2 className="font-semibold text-blue-500">
        <a href={props.employeerWebsite} target="_blank">
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
              strokeWidth={2}
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

const Index = () => (
  <main className="container m-auto px-8 py-24">
    <header className="flex flex-col lg:flex-row gap-4">
      <img
        className="rounded h-36 w-36"
        src="https://media-exp1.licdn.com/dms/image/C5603AQHs6kpEH849ZQ/profile-displayphoto-shrink_800_800/0/1547587447758?e=1623888000&v=beta&t=dkWP8_jl1mg6g63e33yLggzQDbu6oakK0ui2FZKDQ-c"
      />
      <div className="flex flex-col w-full lg:h-36 lg:justify-between">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-auto">
            <h1 className="text-4xl font-semibold">Alex Rohleder</h1>
            <h2 className="text-xl">Software Engineer</h2>
          </div>
          <a
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            href="https://calendly.com/alexrohleder/30min"
            target="_blank"
          >
            Schedule a meeting
          </a>
        </div>
        <div className="mt-24 grid lg:grid-rows-2 lg:mt-0 lg:grid-cols-2 gap-2 w-full">
          <div className="flex gap-2 items-center">
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href="tel:+4741244953">+47 412 44 953</a>
          </div>
          <div className="flex gap-2 items-center">
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
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <a href="mailto:contact@alexrohleder.com">
              contact@alexrohleder.com
            </a>
          </div>
          <div className="flex gap-2 items-center">
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
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <a href="https://linkedin.com/in/alexrohleder" target="_blank">
              linkedin.com/in/alexrohleder
            </a>
          </div>
          <div className="flex gap-2 items-center">
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
            Trondheim, Norway (open to remote)
          </div>
        </div>
      </div>
    </header>
    <div className="mt-6 grid gap-4 lg:grid-cols-4">
      <div className="lg:col-span-4">
        <h1 className="text-xl font-semibold mb-4">Summary</h1>
        <p className="mb-2">
          Hey, I'm a brazilian who started coding with 15 and got his first job
          at 19 years old, in 2015.
        </p>
        <p className="mb-2">
          I started my full-time career at a software factory, which I believe
          is one of the richest places you can start on, in terms of knowledge.
        </p>
        <p>
          After 2 years, dozens of projects and a hand-full of clients I choose
          to move to Europe. Now I live and work in Norway.
        </p>
      </div>
      <div className="lg:col-span-3">
        <section>
          <h1 className="text-xl font-semibold">Experience</h1>
          <h2 className="text-gray-500 mb-4 text-sm">
            {new Date().getFullYear() - 2016} years as full-time and 1 year as
            intern.
          </h2>
          <div className="flex flex-col gap-8">
            <Experience
              title="Software Engineer"
              employeer="Sportradar"
              employeerWebsite="https://sportradar.com"
              startDate={new Date(2018, 2)}
              location="Trondheim, Norway"
              summary="Sportradar is the world's leading sports data company, have clients like NHL, NBA, FIFA and NASCAR."
              highlights={[
                "Works mainly in JavaScript, including one react app that generated direct revenue",
                "Helps new employees with onboarding and technical doubts",
                "Was set as security champion of 2 teams",
                "Moved to a team with a tight deadline and managed to reach the goal",
                "Created by it's own initiative a package that bundles common react components",
                "Ideated and implemented at least 3 projects",
              ]}
            />
            <Experience
              title="Software Engineer (Contractor)"
              employeer="Syntesis"
              employeerWebsite="https://syntesis.it/"
              startDate={new Date(2018, 0)}
              endDate={new Date(2018, 2)}
              location="Santa Maria, Brazil"
              summary="Syntesis created SYNSUITE, an software capable to manage businesses in almost every aspect."
              highlights={[
                "Worked on the migration and installation of their own hosted Gitlab instance",
                "Implanted a new development workflow that enabled them to build faster",
                "Ported their system to work within docker containers",
                "Created deployment pipelines allowing them to do seamless atomic deployments",
              ]}
            />
            <Experience
              title="Software Engineer"
              employeer="Meta"
              employeerWebsite="https://www.meta.com.br/"
              startDate={new Date(2016, 2)}
              endDate={new Date(2018, 0)}
              location="Recanto Maestro, Brazil"
              summary="Meta is an international IT outsourcing enterprise operating a software factory that is listed as one of the leaders in Brazil."
              highlights={[
                "Was set as technical reference for PHP outsourcing projects",
                "Took responsibility at client's operation critical situations",
                "Was making deployment of features with business impact",
                "Were involved in meetings with clients and sometimes traveled to meet them",
                "Worked in multiple projects and clients at same time, seamlessly doing context switch",
                "Got experience with big clients under the national market, such as Unimed",
              ]}
            />
          </div>
        </section>
      </div>
      <div className="flex flex-col gap-4">
        <section>
          <h1 className="text-xl font-semibold mb-4">Education</h1>
          <ul className="list-disc">
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Bachelor_of_Information_Systems#:~:text=Bachelor%20of%20Information%20Systems%20is,covered%20in%20the%20study%20program.&text=A%20typical%20job%20gained%20after%20graduation%20is%20IT%20consulting."
                target="_blank"
              >
                Information Systems Bachelor Degree
              </a>
            </li>
            <li>
              <a
                href="https://www.zend-zce.com/en/yellow-pages/ZEND029184"
                target="_blank"
              >
                Certified PHP Engineer by ZEND
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h1 className="text-xl font-semibold">Industry Expertise</h1>
          <h2 className="text-gray-500 mb-4 text-sm">
            How confortable I'm with each technology
          </h2>
          <IndustryExperise label="Javascript (5+ years)" value={100} />
          <IndustryExperise label="PHP (5 years + certification)" value={70} />
          <IndustryExperise label="React (3 years + courses)" value={90} />
          <p className="mt-4 text-sm text-gray-500">
            Didn't find the technology you are looking for?
            <br />
            <a className="text-blue-500 hover:underline" href="">
              Click here to search the full list
            </a>
          </p>
        </section>
      </div>
    </div>
  </main>
);

export default Index;
