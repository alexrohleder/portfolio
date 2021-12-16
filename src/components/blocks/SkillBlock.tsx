import { StarIcon } from "@heroicons/react/outline";

type Props = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

function SkillBlock(props: Props) {
  const getStarClassName = (index: number) => {
    return `h-4 w-4${index <= props.rating ? " fill-blue-500" : ""}`;
  };

  return (
    <div className="flex items-center justify-between">
      <div>{props.name}</div>
      <div className="flex items-center">
        <StarIcon className={getStarClassName(1)} />
        <StarIcon className={getStarClassName(2)} />
        <StarIcon className={getStarClassName(3)} />
        <StarIcon className={getStarClassName(4)} />
        <StarIcon className={getStarClassName(5)} />
      </div>
    </div>
  );
}

export default SkillBlock;
