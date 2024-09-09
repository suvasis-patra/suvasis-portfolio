import StarIcon from "@/assets/icons/star.svg";

export default function Heading({ projectName }: { projectName: string }) {
  return (
    <div className="flex justify-center items-center gap-4 pt-16">
      <span>
        <StarIcon className="text-emerald-300 size-9 md:size-12" />
      </span>
      <h1 className="text-3xl md:text-5xl font-serif">{projectName}</h1>
    </div>
  );
}
