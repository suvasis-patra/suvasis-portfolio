import StarIcon from "@/assets/icons/star.svg";

export default function ProjectSectionHeader({ heading }: { heading: string }) {
  return (
    <div className="inline-flex gap-3 items-center">
      <StarIcon className="size-4 md:size-5 text-emerald-300" />
      <h3 className="text-xl md:text-3xl font-semibold font-serif tracking-wider uppercase">
        {heading}
      </h3>
    </div>
  );
}
