import { StarIcon } from "@heroicons/react/outline";

type Props = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

function SkillBlock(props: Props) {
  const getStarClassName = (index: number) => {
    return `h-3 w-3${
      index <= props.rating
        ? " fill-blue-500 dark:fill-blue-400 dark:stroke-blue-400"
        : ""
    }`;
  };

  return (
    <div className="print:flex items-center justify-between">
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
