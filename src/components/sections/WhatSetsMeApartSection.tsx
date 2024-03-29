import BaseSection from "../BaseSection";

function WhatSetsMeApartSection() {
  return (
    <BaseSection title="What sets me apart">
      <ul className="list-disc">
        <li className="mb-2 print:mb-0">
          I demonstrate strong performance so <b>colleagues can rely upon me</b>.
        </li>
        <li className="mb-2 print:mb-0">
          I&apos;m <b>self-motivated</b> with a <b>passion for coding</b> and
          using front-end technology.
        </li>
        <li>
          I&apos;m a <b>systems thinker</b> who can reason through systems and{" "}
          <b>understand technical tradeoffs</b>.
        </li>
      </ul>
    </BaseSection>
  );
}

export default WhatSetsMeApartSection;
