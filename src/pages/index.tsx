import BaseHeader from "../components/BaseHeader";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="container mx-auto p-8 print:h-[297mm] print:w-[210mm]">
        <BaseHeader />
      </div>
      <div className="container mx-auto p-8 print:h-[297mm] print:w-[210mm]">
        page 2
      </div>
      <div className="container mx-auto p-8 print:h-[296mm] print:w-[210mm]">
        page 3
      </div>
    </div>
  );
}
