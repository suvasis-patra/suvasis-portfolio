import { SOCIAL_LINKS } from "@/constant";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-20"></div>
      <div className="container relative z-10">
        <div className="border-t-2 md:flex-row md:justify-between border-white/15 flex flex-col items-center py-6 text-sm gap-8">
          <div className="text-white/40">&copy; All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
