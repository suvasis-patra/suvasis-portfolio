import Image from "next/image";
import mimojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
export const HeroSection = () => {
  return (
    <section
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={550}
          rotation={20}
          spinDuration="30s"
          shouldSpin
          // starSpinDuration="6s"
          // shouldStarSpin
        >
          <StarIcon className="text-emerald-300 size-12" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          spinDuration="32s"
          shouldSpin
          // starSpinDuration="6s"
          // shouldStarSpin
        >
          <StarIcon className="text-emerald-300 size-8" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          spinDuration="34s"
          shouldSpin
          // starSpinDuration="6s"
          // shouldStarSpin
        >
          <StarIcon className="text-emerald-300 size-28" />
        </HeroOrbit>
        <HeroOrbit
          size={430}
          rotation={-14}
          spinDuration="36s"
          shouldSpin
          // starSpinDuration="6s"
          // shouldStarSpin
        >
          <SparkleIcon className="text-emerald-300/20 size-8" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          spinDuration="38s"
          shouldSpin
          // starSpinDuration="6s"
          // shouldStarSpin
        >
          <SparkleIcon className="text-emerald-300/20 size-5" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          spinDuration="40s"
          shouldSpin
          // starSpinDuration="6s"
          // shouldStarSpin
        >
          <SparkleIcon className="text-emerald-300/20 size-10" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          spinDuration="42s"
          shouldSpin
          // starSpinDuration="6s"
          // shouldStarSpin
        >
          <SparkleIcon className="text-emerald-300/20 size-14" />
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={mimojiImage}
            className="size-28"
            alt="a person with laptop"
          />
          <div className="bg-gray-950 border border-gray-800 rounded-lg inline-flex items-center gap-3 px-4 py-1.5">
            <div className="bg-green-500 size-[15px] rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building exceptional user experiences
          </h1>
          <p className="text-center md:text-lg mt-4 text-white/60">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-emerald-300">Suvasis</span>, a{" "}
            <span className="font-semibold text-emerald-300">
              Fullstack Developer
            </span>{" "}
            based in India. Let&apos;s discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-10 relative">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 rounded-xl px-6 h-12">
              <span className="font-semibold">Explore my works</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <a href="#contact">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-800 h-12 px-6 rounded-xl">
              <span>👋</span>
              <span>Let&apos;s connect</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
