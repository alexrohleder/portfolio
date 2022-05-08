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
            <div className="hidden absolute bottom-4 right-8 print:block">
              <div className="inline text-gray-500">
                See more at{" "}
                <BaseLink href="https://alexrohleder.com">
                  alexrohleder.com
                </BaseLink>
              </div>
              <div className="inline-block w-4 h-px" />
              {index + 1} of {pages}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BasePages;
