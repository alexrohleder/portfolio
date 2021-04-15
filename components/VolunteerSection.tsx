import Section from "./Section";

const VolunteerSection = () => {
  return (
    <Section title="Volunteer">
      <div className="flex flex-col gap-4">
        <article>
          <h1 className="font-lg mb-2 font-semibold">
            Case study for young brazilians
          </h1>
          <p className="font-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            ultrices massa a risus pretium sollicitudin...{" "}
            <a href="" className="text-blue-700 hover:underline">
              See more
            </a>
          </p>
        </article>
        <article>
          <h1 className="font-lg mb-2 font-semibold">Judge in hackaton</h1>
          <p className="font-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            ultrices massa a risus pretium sollicitudin...{" "}
            <a href="" className="text-blue-700 hover:underline">
              See more
            </a>
          </p>
        </article>
        <article>
          <h1 className="font-lg mb-2 font-semibold">
            Software development teacher
          </h1>
          <p className="font-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            ultrices massa a risus pretium sollicitudin...{" "}
            <a href="" className="text-blue-700 hover:underline">
              See more
            </a>
          </p>
        </article>
      </div>
    </Section>
  );
};

export default VolunteerSection;
