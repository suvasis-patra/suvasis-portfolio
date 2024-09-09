import IdeaIcon from "@/assets/icons/idea-icon.svg";
import ProjectSectionHeader from "@/app/projects/components/ProjectSectionHeader";
export default function FuturePlans({
  futurePlans,
}: {
  futurePlans: { title: string }[];
}) {
  return (
    <div className="mt-8">
      <ProjectSectionHeader heading="future plans" />
      <div className="flex flex-col gap-3 mt-4 md:mt-8">
        {futurePlans.map((plan, i) => (
          <div
            key={`feature-${i + 1}`}
            className="inline-flex items-center gap-3 text-white/30"
          >
            <span>
              <IdeaIcon
                className="size-4 md:size-6"
                fill={"rgb(255 255 255 / 0.3)"}
              />
            </span>
            <span className="text-sm lg:text-base">{plan.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
