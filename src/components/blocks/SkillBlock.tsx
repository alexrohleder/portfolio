type Props = {
  name: string;
  years: number;
};

function SkillBlock(props: Props) {
  return (
    <div className="items-center justify-between print:flex">
      <div>{props.name}</div>
      <div className="flex items-center">{props.years} years</div>
    </div>
  );
}

export default SkillBlock;
