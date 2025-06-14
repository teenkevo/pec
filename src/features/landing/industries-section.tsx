"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { INDUSTRIES } from "../industries/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const hideScrollbarStyle = `
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}
`;

interface Props {
  industries: INDUSTRIES;
}

export function IndustriesSection({ industries }: Props) {
  // State to track the active industry
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  //This is for the background change..
  const [activeIndex, setActiveIndex] = useState(0);

  const activeIndustryData = industries[activeIndex] || industries[0];
  const activeIndustry = activeIndustryData?.slug;

  useEffect(() => {
    if (!api) {
      return;
    }

    // Set initial current slide
    const initialSlide = api.selectedScrollSnap();
    setCurrent(initialSlide);
    setActiveIndex(initialSlide);

    const handleSelect = () => {
      const newCurrent = api.selectedScrollSnap();
      setCurrent(newCurrent);
      setActiveIndex(newCurrent);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    api?.scrollTo(index);
  };

  return (
    <section
      id="our-industries"
      className="relative w-full h-[900px] md:h-[900px] overflow-hidden"
    >
      {/* <style>{hideScrollbarStyle}</style> */}
      {/* Background Images with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndustry}
          className="absolute inset-0 bg-cover bg-center z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            backgroundImage: `url('${urlFor(activeIndustryData.mainImage).url()}')`,
            backgroundPosition: "center 30%",
          }}
        >
          {/* Top gradient overlay */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-10"></div>
          {/* Bottom gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        </motion.div>
      </AnimatePresence>

      {/* Section Title */}
      <div className="relative z-10 mx-auto px-4 md:px-14 pt-16">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our industries
        </motion.h2>
      </div>

      {/* Cards Container */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="absolute -top-20 right-0 md:right-14 z-10 flex gap-2">
          <Button
            onClick={() => api?.scrollPrev()}
            disabled={!api?.canScrollPrev()}
            size={"icon"}
            variant={"outline"}
            className="group hover:bg-white border p-2 group-hover:translate-x-1 transition-transform mr-5 rounded-none [&>svg]:text-white "
          >
            <ArrowLeft className="group-hover:text-[#EB3300]" />
          </Button>
          <Button
            onClick={() => api?.scrollNext()}
            disabled={!api?.canScrollNext()}
            size={"icon"}
            variant={"outline"}
            className="group hover:bg-white border border-white p-2 group-hover:translate-x-1 transition-transform rounded-none [&>svg]:text-white"
          >
            <ArrowRight className="group-hover:text-[#EB3300]" />
          </Button>
        </div>
        <Carousel
          setApi={setApi}
          className="mx-auto px-4 md:px-14 pb-16"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent className="">
            {industries.map((industry, index) => {
              const isActive = activeIndustry === industry.slug;

              return (
                <CarouselItem
                  key={industry._id}
                  className="md:basis-1/2 lg:basis-1/3"
                  onClick={() => handleItemClick(index)}
                >
                  <motion.div
                    key={industry._id}
                    className={`${
                      isActive
                        ? "bg-white"
                        : "bg-gray-900/40 border backdrop-blur-sm"
                    } p-6 flex flex-col h-full cursor-pointer transition-colors duration-300 min-w-[320px] md:min-w-0 flex-1 mx-2 snap-start`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  >
                    <span
                      className={`${isActive ? "text-[#EB3300]" : "text-white"} font-bold text-lg mb-4 inline-block`}
                    >
                      {industry.title}
                    </span>

                    <h3
                      className={`text-xl md:text-2xl font-bold mb-4 tracking-tight ${isActive ? "text-gray-900" : "text-white"}`}
                    >
                      {industry.subtitle}
                    </h3>
                    <p
                      className={`mb-8 flex-grow h-[100px] overflow-hidden ${isActive ? "text-gray-700" : "text-gray-200"}`}
                    >
                      {industry.description}
                    </p>

                    <div>
                      <Link
                        href={`/industries/${industry.slug}`}
                        className={`inline-flex items-center ${isActive ? "text-black" : "text-white"} font-medium group`}
                      >
                        <span
                          className={` ${isActive ? "bg-[#EB3300]" : "bg-white"} p-2 group-hover:translate-x-1 transition-transform`}
                        >
                          <ArrowRight
                            className={`h-5 w-5 ${isActive ? "text-white" : "text-[#EB3300]"}`}
                          />
                        </span>
                      </Link>
                    </div>
                    {/* <div className="self-start mt-auto">
                    <ArrowRight
                      className={`h-5 w-5 ${isActive ? "text-[#EB3300]" : "text-white"}`}
                    />
                  </div> */}
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <div></div>
      </div>
    </section>
  );
}
