import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

const HeroOrbit = ({
  children,
  size,
  rotation,
  spinDuration,
  starSpinDuration,
  shouldStarSpin = false,
  shouldSpin = false,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  spinDuration?: string;
  starSpinDuration?: string;
  shouldStarSpin?: boolean;
  shouldSpin?: boolean;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(shouldSpin === true && "animate-spin")}
        style={{
          animationDuration: spinDuration,
        }}
      >
        <div
          className=""
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={twMerge(shouldStarSpin === true && "animate-spin")}
            style={{
              animationDuration: starSpinDuration,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
