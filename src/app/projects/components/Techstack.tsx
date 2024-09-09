import ProjectSectionHeader from "@/app/projects/components/ProjectSectionHeader";

export default function TechStack({
  techstack,
}: {
  techstack: { tech: string; icon: React.ReactElement }[];
}) {
  return (
    <div className="mt-8">
      {" "}
      <ProjectSectionHeader heading="tech stacks" />
      <div className="mt-4 md:mt-8 flex gap-4 items-center flex-wrap">
        {techstack.map((techstack) => (
          <div
            key={techstack.tech}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/65 rounded-lg"
          >
            <span>{techstack.icon}</span>
            <span className="text-sm md:text-base text-white/50">
              {techstack.tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
