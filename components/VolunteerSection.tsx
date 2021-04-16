import Section from "./Section";

const VolunteerSection = () => {
  return (
    <Section title="Volunteer">
      <div className="flex flex-col gap-4">
        <article>
          <h1 className="font-lg mb-2 font-semibold">
            Case study for university students
          </h1>
          <p className="font-sm">
            Participated in presentations for more than 500 concurrent students
            where I was interviewed and used as a case study...{" "}
            <a
              href="/volunteer/case-study-for-university-students"
              className="text-blue-700 hover:underline"
            >
              See more
            </a>
          </p>
        </article>
        <article>
          <h1 className="font-lg mb-2 font-semibold">Judge in hackaton</h1>
          <p className="font-sm">
            CODE RACE is the biggest hackaton in the shouthest state in Brazil.
            In one of their editions I had the opportunity to be a judge...{" "}
            <a
              href="/volunteer/coderace"
              className="text-blue-700 hover:underline"
            >
              See more
            </a>
          </p>
        </article>
        <article>
          <h1 className="font-lg mb-2 font-semibold">
            Software development teacher
          </h1>
          <p className="font-sm">
            Teached how to code web apps to young students in small cities as
            part of a social program to give them more opportunities in life...{" "}
            <a
              href="/volunteer/software-development-teacher"
              className="text-blue-700 hover:underline"
            >
              See more
            </a>
          </p>
        </article>
      </div>
    </Section>
  );
};

export default VolunteerSection;
