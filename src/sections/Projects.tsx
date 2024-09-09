import Link from "next/link";
import Image from "next/image";

import Card from "@/components/Card";
import { PORTFOLIO_PROJECT } from "@/constant";
import GithubIcon from "@/assets/icons/github.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="font-semibold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world result
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
          See how I transformed digital ideas into engaging experience
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {PORTFOLIO_PROJECT.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="pb-0 px-8 md:pt-12 pt-8 lg:px-20 lg:pt-16 sticky top-[30px]"
            >
              <div
                // href={project.slug}
                className="lg:grid lg:grid-cols-2 lg:gap-16"
              >
                <div className="lg:pb-16">
                  <div className="flex justify-start">
                    <Link
                      href={project.slug}
                      className="relative bg-gradient-to-r from-emerald-300 to-sky-400 tracking-widest uppercase font-semibold inline-flex gap-2 text-transparent bg-clip-text"
                    >
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                      <span
                        className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-gradient-to-r from-emerald-300 to-sky-400"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-4">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-white/50 text-sm md:text-base"
                      >
                        <span>
                          <CheckCircleIcon className="size-5" />
                        </span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center mt-8">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-full inline-flex justify-center items-center gap-2 bg-white h-12 rounded-xl text-gray-950 md:w-auto px-6">
                        <span>Visit live site</span>
                        <span>
                          <ArrowRightIcon className="size-4 md:size-6" />
                        </span>
                      </button>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-full inline-flex relative z-0 justify-center items-center gap-2 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:z-30 overflow-hidden after:-outline-offset-2 after:outline-gradient-to-r after:from-emerald-300 after:to-sky-400 after:rounded-xl  rounded-xl px-6 h-12 md:w-auto">
                        <GithubIcon className="size-4 rounded-full md:size-6 bg-gradient-to-r from-emerald-300 to-sky-400" />
                        <span className="">Github link</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
