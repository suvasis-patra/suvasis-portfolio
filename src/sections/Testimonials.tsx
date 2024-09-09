import Image from "next/image";
import { Fragment } from "react";

import Card from "@/components/Card";
import { TESTIMONIALS } from "@/constant";
import SectionHeader from "@/components/SectionHeader";

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my words. See what my clients have to say about my
        works."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {" "}
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {TESTIMONIALS.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:p-8 md:max-w-md hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="inline-flex size-14 rounded-full bg-gray-700 flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/30">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm mt-4 md:mt-6 md:text-base">
                        {testimonial.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </section>
  );
};
