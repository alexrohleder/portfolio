import { useState } from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import Section from "./Section";

const defaultData = {
  seniorBaseLine: {
    data: {
      agile: 0.7,
      cloudDevOps: 0.5,
      operations: 0.5,
      product: 0.5,
      softwareCraft: 0.7,
      security: 0.5,
      architecture: 0.5,
      testQuality: 0.5,
      delivery: 0.1,
    },
    meta: {
      class: "fill-current text-red-700",
    },
  },
  currentState: {
    data: {
      agile: 0.8,
      cloudDevOps: 0.5,
      operations: 0.5,
      product: 0.6,
      softwareCraft: 0.9,
      security: 0.6,
      architecture: 0.6,
      testQuality: 0.8,
      delivery: 0.2,
    },
    meta: {
      class: "fill-current text-blue-700",
    },
  },
};

const Competence = () => {
  const [data, setData] = useState(defaultData);

  const toggleData = (name: string) => {
    setData({
      ...data,
      [name]: data[name] ? undefined : defaultData[name],
    });
  };

  return (
    <Section title="Competence">
      <div className="flex gap-4">
        <button
          type="button"
          className={`flex gap-2 items-center transition-opacity ${
            data.seniorBaseLine ? "" : "opacity-50"
          }`}
          onClick={() => toggleData("seniorBaseLine")}
        >
          <div className="h-4 w-4 rounded bg-red-700" />
          Senior Base Line
        </button>
        <button
          type="button"
          className={`flex gap-2 items-center transition-opacity ${
            data.currentState ? "" : "opacity-50"
          }`}
          onClick={() => toggleData("currentState")}
        >
          <div className="h-4 w-4 rounded bg-blue-700" />
          Current State
        </button>
      </div>
      <RadarChart
        captions={{
          agile: "Agile",
          cloudDevOps: "Cloud/DevOps",
          operations: "Operations",
          product: "Product",
          softwareCraft: "Software Craft",
          security: "Security",
          architecture: "Architecture",
          testQuality: "Test/Quality",
          delivery: "Delivery",
        }}
        data={Object.values(data).filter((d) => d)}
        size={500}
      />
    </Section>
  );
};

export default Competence;
