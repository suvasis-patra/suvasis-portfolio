import CircleCheckIcon from "@/assets/icons/check-circle.svg";
import ProjectSectionHeader from "@/app/projects/components/ProjectSectionHeader";

export default function Features({
  features,
}: {
  features: { title: string }[];
}) {
  return (
    <div className="mt-8">
      <ProjectSectionHeader heading="features" />
      <div className="flex flex-col gap-3 mt-4 md:mt-8">
        {features.map((feature, i) => (
          <div
            key={`feature-${i + 1}`}
            className="inline-flex items-center gap-3 text-white/30"
          >
            <span>
              <CircleCheckIcon />
            </span>
            <span className="text-sm lg:text-base">{feature.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
