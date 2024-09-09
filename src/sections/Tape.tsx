import { Fragment } from "react";

import { WORDS } from "@/constant";
import StarIcon from "@/assets/icons/star.svg";

export const TapeSection = () => {
  return (
    <section className="py-16 overflow-x-clip lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_70%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 animate-move-left [animation-duration:30s]">
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {WORDS.map((word) => (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="uppercase font-extrabold text-gray-900 text-sm">
                        {word}
                      </span>
                      <span>
                        <StarIcon className="size-6 text-gray-900 -rotate-12" />
                      </span>
                    </div>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </section>
  );
};
