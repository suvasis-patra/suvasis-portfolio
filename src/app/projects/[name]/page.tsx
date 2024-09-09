import ShowImages from "../container/Images";
import grainImage from "@/assets/images/grain.jpg";
import { PORTFOLIO_PROJECT_DETAILS } from "@/constant";
import Description from "../container/Description";
import Features from "../container/Features";
import TechStack from "../container/Techstack";
import FuturePlans from "../container/FuturePlans";
import Heading from "../container/Heading";
import Links from "../container/Links";
import { Footer } from "@/sections/Footer";
import Link from "next/link";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";

export default function Project({ params }: { params: { name: string } }) {
  const [project, ...other] = PORTFOLIO_PROJECT_DETAILS.filter(
    (item) => item.slug === params.name
  );
  if (!project) {
    return <h1>Back to home</h1>;
  }
  return (
    <section className="relative h-screen w-full z-0">
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="container py-12">
        <Heading projectName={project.projectName} />
        <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
        <ShowImages images={project.images} />
        <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
        <Description description={project.description} />
        <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
        <Features features={project.features} />
        <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
        <TechStack techstack={project.techstack} />
        <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
        <FuturePlans futurePlans={project.futurePlans} />
        <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
        <Links githubLink={project.githubLink} liveLink={project.link} />
        <div className="mt-12 ">
          <Link href="/" className="flex justify-center items-center">
            <button className="w-1/3 inline-flex justify-center items-center gap-3 px-4 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 rounded-lg h-12">
              <span className="md:text-xl text-base">Back to Home</span>
              <span>
                <ArrowRightIcon className="md:size-6 size-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}