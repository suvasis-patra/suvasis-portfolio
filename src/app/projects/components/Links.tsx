import GithubIcon from "@/assets/icons/github.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import ProjectSectionHeader from "@/app/projects/components/ProjectSectionHeader";
export default function Links({
  githubLink,
  liveLink,
}: {
  githubLink: string;
  liveLink: string;
}) {
  return (
    <div className="mt-8">
      <ProjectSectionHeader heading="links" />
      <div className="flex w-full items-center gap-4 md:gap-8 justify-between mt-4 md:mt-8">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <button className="w-full inline-flex justify-center items-center gap-2 bg-white h-12 rounded-xl text-gray-950  px-6">
            <span>Visit live site</span>
            <span>
              <ArrowRightIcon className="size-4 md:size-6" />
            </span>
          </button>
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <button className="w-full inline-flex relative z-0 justify-center items-center gap-2 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:z-30 overflow-hidden after:-outline-offset-2 after:outline-gradient-to-r after:from-emerald-300 after:to-sky-400 after:rounded-xl  rounded-xl px-6 h-12">
            <GithubIcon className="size-4 rounded-full md:size-6 bg-gradient-to-r from-emerald-300 to-sky-400" />
            <span className="">Github link</span>
          </button>
        </a>
      </div>
    </div>
  );
}
