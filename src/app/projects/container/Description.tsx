import ProjectSectionHeader from "./ProjectSectionHeader";

export default function Description({ description }: { description: string }) {
  return (
    <div className="mt-8">
      {/* <h3 className="text-xl md:text-3xl font-semibold font-serif tracking-wider uppercase">
        Description
      </h3> */}
      <ProjectSectionHeader heading="description" />
      <p className="text-sm lg:text-base text-white/30 mt-4 md:mt-8">
        {description}
      </p>
    </div>
  );
}
