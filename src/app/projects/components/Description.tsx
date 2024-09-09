import ProjectSectionHeader from "@/app/projects/components/ProjectSectionHeader";

export default function Description({ description }: { description: string }) {
  return (
    <div className="mt-8">
      <ProjectSectionHeader heading="description" />
      <p className="text-sm lg:text-base text-white/30 mt-4 md:mt-8">
        {description}
      </p>
    </div>
  );
}
