import type { ComponentPropsWithoutRef } from "react";
import cn from "../lib/cn";
import match from "../lib/match";

type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
};

function BaseLink({ variant = "secondary", ...props }: Props) {
  return (
    <a
      {...props}
      className={cn(
        props.className,
        "underline-offset-4 transition-colors duration-200 print:no-underline",
        match(variant, {
          primary:
            "text-blue-700 dark:text-blue-400 font-semibold hover:underline",
          secondary:
            "underline decoration-gray-300 hover:decoration-current dark:decoration-gray-600 dark:hover:decoration-current",
        })
      )}
    />
  );
}

export default BaseLink;
