import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

const ToolboxItem = ({
  TOOLBOX,
  className,
  itemsWrapperClassName,
}: {
  TOOLBOX: { tool: string; icon: React.ReactElement }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {...Array(2)
          .fill(0)
          .map((_, idx) => (
            <Fragment key={idx}>
              {TOOLBOX.map((item) => (
                <div
                  key={item.tool}
                  className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/65 rounded-lg"
                >
                  <span>{item.icon}</span>
                  <span className="font-semibold">{item.tool}</span>
                </div>
              ))}
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default ToolboxItem;
