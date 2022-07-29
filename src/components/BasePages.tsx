import React from "react";
import cn from "../lib/cn";
import BaseLink from "./BaseLink";

type Props = {
  children: React.ReactNode;
};

function BasePages(props: Props) {
  const pages = React.Children.count(props.children);
  const lastPageIndex = pages - 1;

  return (
    <>
      {React.Children.map(props.children, (page, index) => {
        const printSize =
          index === lastPageIndex
            ? "print:h-[296mm] print:w-[210mm]"
            : "print:h-[297mm] print:w-[210mm]";

        return (
          <div
            key={index}
            className={cn("print:relative container mx-auto p-8", printSize)}
          >
            {page}
            <div className="absolute hidden text-right bottom-4 right-8 left-8 print:block">
              <span className="text-gray-500">
                Made with React. See more at{" "}
                <BaseLink
                  variant="primary"
                  href="https://linkedin.com/in/alexrohleder"
                >
                  linkedin.com/in/alexrohleder
                </BaseLink>
              </span>
              {". "}
              {index + 1} of {pages}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BasePages;
