type Props = {
  name: string;
  relation: string;
};

const subject = "Request for references";
const lineBreak = "%0D".repeat(2);
const body = `Hey Alex, can you send me the contact of your references?${lineBreak}Thanks in advance`;

function ReferenceBlock(props: Props) {
  return (
    <div className="">
      <div className="flex gap-2 items-center text">
        <div>{props.name}</div>
        <a
          className="text-sm text-blue-700 dark:text-blue-400"
          href={`mailto:alexrohleder96@gmail.com?subject=${subject}&body=${body}`}
        >
          (Request contact)
        </a>
      </div>
      <div className="text-gray-500 dark:text-gray-500 text-sm">
        {props.relation}.
      </div>
    </div>
  );
}

export default ReferenceBlock;
