import BaseSection from "../BaseSection";
import OpenSourceBlock from "../blocks/OpenSourceBlock";

function OpenSourceSection() {
  return (
    <BaseSection title="Open Source">
      <div className="grid gap-6 xl:grid-cols-2 print:gap-3">
        <OpenSourceBlock
          title="Cryptocurrency Order Book"
          sourceLink="github.com/alexrohleder/order-book"
          deployLink="order-book-beta.vercel.app"
          year={2021}
          highlights={[
            "Highly performant react app targeted to run on slow devices",
            "Receives 10+ updates per second, uses throttling based on device performance",
            "Efficiently uses DOM and CSS to avoid unnecessary  computations",
            "Built critical components using test-driven development (TDD), and used Jest",
          ]}
          techStack={[
            "React",
            "TypeScript",
            "WebSocket",
            "Jest",
            "Tailwind",
            "NextJS",
            "Redux",
            "Redux-Sagas",
          ]}
        />
        <OpenSourceBlock
          title="Airbnb Mobile Authentication Clone"
          sourceLink="github.com/alexrohleder/a2"
          deployLink="auth-with-firestore-ts-vue.web.app"
          year={2018}
          highlights={[
            "Showcase authentication app in VueJS, TypeScript and Firebase",
            "Have extensive documentation with technical detailing",
            "Implement URL access control and handle redirects",
            "Allows use of social login with Facebook and Google",
          ]}
          techStack={["VueJS", "TypeScript", "Firebase", "Vue Router", "SCSS"]}
        />
        <OpenSourceBlock
          title="Bike Rental App"
          sourceLink="github.com/alexrohleder/bike-rental"
          year={2022}
          highlights={[
            "Showcase app for mentorship with backend and frontend set up",
            "Implement authentication with multiple roles",
            "Focuses on user experience and accessibility; uses the HTML efficiently",
          ]}
          techStack={[
            "React",
            "TypeScript",
            "Prisma",
            "Tailwind",
            "NextJS",
            "NodeJS",
            "PostgreSQL",
          ]}
        />
      </div>
    </BaseSection>
  );
}

export default OpenSourceSection;
