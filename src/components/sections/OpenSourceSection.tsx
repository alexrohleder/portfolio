import BaseSection from "../BaseSection";
import OpenSourceBlock from "../blocks/OpenSourceBlock";

function OpenSourceSection() {
  return (
    <BaseSection title="Open Source">
      <div className="grid xl:grid-cols-2 gap-6 print:gap-4">
        <OpenSourceBlock
          title="Cryptocurrency Order Book"
          sourceLink="github.com/alexrohleder/order-book"
          deployLink="order-book-beta.vercel.app"
          year={2021}
          highlights={[
            "Highly performant react app targeted to run on slow devices",
            "Receives 10+ updates per second, uses throttling based on device performance",
            "Efficiently uses DOM and CSS to avoid unecessary computations",
            "Built critical components using test driven development (TDD), used Jest",
          ]}
        />
        <OpenSourceBlock
          title="Airbnb Mobile Authentication Clone"
          sourceLink="github.com/alexrohleder/a2"
          deployLink="auth-with-firestore-ts-vue.web.app"
          year={2018}
          highlights={[
            "Showcase authentication app in VueJS, TypeScript and Firebase",
            "Have a extensive documentation with technical detailing",
            "Implement url access control and handle redirects",
            "Allows use of social login with Facebook and Google",
          ]}
        />
      </div>
    </BaseSection>
  );
}

export default OpenSourceSection;
