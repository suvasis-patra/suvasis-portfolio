import React from "react";
import { twMerge } from "tailwind-merge";

import StarIcon from "@/assets/icons/star.svg";
const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="text-emerald-300 size-9" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
