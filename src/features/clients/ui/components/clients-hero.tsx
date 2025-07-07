"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";
import { SecondaryNav } from "@/components/layout/secondary-nav";

interface FeaturedProject {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  startDate: string;
  endDate?: string;
  isCompleted: boolean;
  valueOfService: {
    currency: string;
    value: number;
  };
  client: { name: string };
  industry: { title: string; slug: string };
  description: string;
}

export interface FeaturedProjectsData {
  earliest: FeaturedProject | null;
  latestTransport: FeaturedProject | null;
  latestWater: FeaturedProject | null;
  biggestBudget: FeaturedProject | null;
  latestOngoing: FeaturedProject | null;
}

interface Props {
  featuredProjects: FeaturedProjectsData;
}

export function ClientsHero({ featuredProjects }: Props) {
  const secondaryNavigationItems = [
    { title: "Featured Clients", href: "featured-clients" },
    { title: "All clients", href: "all" },
  ];
  const stats = useMemo(() => {
    return [
      {
        title: "Years of Experience",
        value: "17+",
        icon: "/client-icons/experience.svg",
        project: featuredProjects.earliest,
        display_text: "Nearly two decades strong",
      },
      {
        title: "Infrastructure Projects",
        value: "50+",
        icon: "/client-icons/infrastructure.svg",
        project: featuredProjects.latestOngoing,
        display_text: "Building the future",
      },
      {
        title: "Water engineering projects",
        value: "13",
        icon: "/client-icons/water.svg",
        project: featuredProjects.latestWater,
        display_text: "Engineering clean water access",
      },
      {
        title: "Cumulative contract Amount",
        value: "USD 26,500,000+",
        icon: "/client-icons/money.svg",
        project: featuredProjects.biggestBudget,
        display_text: "Trusted with millions",
      },
      {
        title: "Roads designed and supervised",
        value: "1000+ kms",
        icon: "/client-icons/road.svg",
        project: featuredProjects.latestTransport,
        display_text: "Building safer connections",
      },
    ];
  }, [featuredProjects]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === stats.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, stats.length]);

  return (
    <>
      {" "}
      <div className="w-full h-fit md:h-screen md:max-h-[620px] relative isolate overflow-hidden">
        <Image
          src={
            urlFor(stats[activeIndex].project?.mainImage).url() ||
            "https://cdn.sanity.io/images/ea9vpu9f/production/54f982147260795134f8aa4602371b2c9dd46f02-5464x3640.jpg"
          }
          alt={stats[activeIndex].title}
          width={1000}
          height={800}
          priority
          draggable={false}
          className="w-full h-full absolute inset-0 -z-20 object-center object-cover transition-all duration-100"
        />
        <div className="w-full bg-gradient-to-b md:bg-gradient-to-r from-black/80 h-full flex justify-between flex-col gap-12 md:gap-20 md:flex-row items-end px-8 py-12">
          <div className="max-w-2xl flex-1">
            <span className="text-white py-1 text-lg mb-2">Clients</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold md:font-medium text-white tracking-tight leading-10">
              {"Working with bold organizations"}
            </h1>
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="flex items-center mt-6"
              >
                <p
                  // href={`/industries/${stats[activeIndex].project?.client}`}
                  className="inline-flex items-center bg-[#EB3300] text-white font-bold px-3 py-1 text-base mb-4 "
                >
                  <span className="max-w-[280px] truncate">
                    {stats[activeIndex]?.project?.client.name}
                  </span>{" "}
                </p>
              </motion.div>

              <motion.p
                key={`desc-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="text-white line-clamp-3 text-sm md:text-sm mb-4 md:mb-6 h-auto leading-6"
              >
                {stats[activeIndex].project?.title}
              </motion.p>
              <div>
                <Link
                  href={`/projects/${stats[activeIndex].project?.slug.current}`}
                  className={`inline-flex items-center text-white font-medium group`}
                >
                  <span className="group-hover:bg-white border border-white p-2 group-hover:translate-x-1 transition-transform mr-5">
                    <ArrowRight className="group-hover:text-[#EB3300]" />
                  </span>
                  Go to project
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex-1 grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 h-full gap-4 max-w-2xl w-full">
            {stats.map((stat, index) => (
              <div
                key={stat.value + index}
                className={cn(
                  index == 0 && "md:row-span-2",
                  index == 3 && "md:col-span-2",
                  index == 4 && "md:col-span-3",
                  activeIndex == index ? "bg-[#EB3300]" : "bg-black/20",
                  " backdrop-blur-md flex flex-col justify-between items-end p-4 text-white min-h-fit h-full overflow-hidden transition-colors duration-300 cursor-pointer hover:ring-1 hover:ring-white/40"
                )}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  width={40}
                  height={40}
                  src={stat.icon}
                  alt={stat.title + "Professional Engneering Consultants"}
                />
                <div className="space-y-2 w-full">
                  <span className="text-4xl font-bold text-white">
                    {stat.value}
                  </span>
                  <p className="text-sm">{stat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
      <SecondaryNav initialActiveItem={secondaryNavigationItems[0].href} navItems={secondaryNavigationItems} />
    </>
  );
}
