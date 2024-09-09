import { twMerge } from "tailwind-merge";
import { ComponentPropsWithRef } from "react";

import grainImage from "@/assets/images/grain.jpg";
const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithRef<"div">) => {
  return (
    <article
      className={twMerge(
        `bg-gray-800 z-0 rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:z-30 overflow-hidden after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6`,
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </article>
  );
};

export default Card;
