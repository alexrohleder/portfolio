import type { ComponentPropsWithoutRef } from "react";
import cn from "../lib/cn";
import match from "../lib/match";

type CommonProps = { variant?: "primary" | "secondary" };

type AnchorProps = ComponentPropsWithoutRef<"a">;
type ButtonProps = ComponentPropsWithoutRef<"button">;

type Props = AnchorProps | ButtonProps;

// Guard for narrowing the type from Props to AnchorProps
const hasHref = (props: Props): props is AnchorProps => "href" in props;

function BaseButton({ variant = "secondary", ...props }: Props & CommonProps) {
  const className = cn(
    props.className,
    "hidden lg:block text-center px-4 py-2 text-sm font-medium rounded transition-colors",
    match(variant, {
      primary: "text-white bg-blue-700 hover:bg-blue-800",
      secondary:
        "text-black hover:bg-gray-300 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700",
    })
  );

  if (hasHref(props)) {
    return <a {...props} className={className} />;
  }

  return <button type="button" {...props} className={className} />;
}

export default BaseButton;
