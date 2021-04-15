import Experience from "../components/Experience";
import Header from "../components/Header";
import IndustryExpertise from "../components/IndustryExpertise";

const Index = () => (
  <main className="container m-auto px-8 py-24">
    <Header />
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
            <li className="mb-2">
              <a
                href="https://en.wikipedia.org/wiki/Bachelor_of_Information_Systems#:~:text=Bachelor%20of%20Information%20Systems%20is,covered%20in%20the%20study%20program.&text=A%20typical%20job%20gained%20after%20graduation%20is%20IT%20consulting."
                target="_blank"
                rel="noopener"
              >
                Information Systems Bachelor Degree
              </a>
            </li>
            <li>
              <a
                href="https://www.zend-zce.com/en/yellow-pages/ZEND029184"
                target="_blank"
                rel="noopener"
              >
                Certified PHP Engineer by ZEND
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h1 className="text-xl font-semibold">Expertise</h1>
          <h2 className="text-gray-500 mb-4 text-sm">
            How confortable I'm with each technology
          </h2>
          <IndustryExpertise label="Javascript (5+ years)" value={100} />
          <IndustryExpertise label="PHP (5 years + certification)" value={70} />
          <IndustryExpertise label="React (3 years + courses)" value={90} />
          <p className="mt-4 text-sm text-gray-500">
            Didn't find the technology you are looking for?
            <br />
            <button className="text-blue-700 hover:underline">
              Click here to search the full list
            </button>
          </p>
        </section>
      </div>
    </div>
  </main>
);

export default Index;
