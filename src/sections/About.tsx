import Image from "next/image";

import Card from "@/components/Card";
import mapImage from "@/assets/images/map.png";
import { TOOLBOX, MY_HOBBIES } from "@/constant";
import CardHeader from "@/components/CardHeader";
import ToolboxItem from "@/components/ToolboxItem";
import bookCover from "@/assets/images/book-cover.png";
import SectionHeader from "@/components/SectionHeader";
import smileMemoji from "@/assets/images/memoji-smile.png";

export const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24" id="about">
      <div className="container">
        {" "}
        <SectionHeader
          title="About Me"
          eyebrow="A Glipms Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my prespectives"
              />
              <div className="w-40 mx-auto mt-8">
                <Image src={bookCover} alt="book cover" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I used to craft exceptional
              digital experiences"
                className="px-6 pt-6"
              />
              <ToolboxItem
                TOOLBOX={TOOLBOX}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItem
                TOOLBOX={TOOLBOX}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:10s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my hobbies and interests beyond the digital world"
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {MY_HOBBIES.map((item) => (
                  <div
                    key={item.hobby}
                    className="inline-flex items-center absolute gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                    style={{ top: item.top, left: item.left }}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium text-gray-950">
                      {item.hobby}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute size-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-gray-950/30 after:rounded-full">
                {" "}
                <Image src={smileMemoji} alt="smileemoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
