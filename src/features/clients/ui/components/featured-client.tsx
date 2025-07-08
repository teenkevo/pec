"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlogPostCard } from "@/features/blog/ui/components/blog-post-card";
import { BlogPosts } from "@/features/blog/lib/queries";
import { useIsMobile } from "@/hooks/use-mobile";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "date-fns";

interface Props {
  allProjects: PROJECT_TYPE[];
  clientName: string;
}

const FeaturedClient = ({ allProjects, clientName }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState<PROJECT_TYPE[]>(allProjects);
  const maxIndex = Math.max(0, projects.length - 3); // Show 3 articles on desktop
  const carouselRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setProjects(allProjects.slice(0, 3));
    } else {
      setProjects(allProjects);
    }
  }, [allProjects, isMobile]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-12 bg-white">
      <motion.div
        className="mx-auto px-4 md:px-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-gray-700">Key projects by</span>
          <div className="flex justify-between items-end mt-2">
            <h2 className="text-3xl font-bold text-gray-900">{clientName}</h2>
            {/* <Link
              href="/news"
              className="text-[#EB3300]/90 hover:text-[#EB3300] flex items-center"
            >
              <span>view all projects</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link> */}
          </div>
        </div>

        {/* News Carousel */}
        <div className="relative mt-8">
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex flex-col md:flex-row gap-12 md:gap-6 transition-transform duration-500 ease-in-out"
              style={
                isMobile
                  ? {}
                  : { transform: `translateX(-${currentIndex * 33.333}%)` }
              }
            >
              {projects.map((project, index) => (
                <div
                  key={project.slug + index}
                  className="w-full md:w-1/3 lg:w-1/3 flex-shrink-0 pr-6"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block group"
                  >
                    <motion.div
                      className="relative aspect-[4/3] w-full"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={
                            urlFor(project.mainImage).format("webp").url() ||
                            "/placeholder.svg"
                          }
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center text-sm text-gray-600 tracking-tight">
                          <div className="w-2 h-2 bg-gray-300 font-bold mr-4"></div>
                          {project.industry.title}
                        </div>
                        <h3 className="text-xl tracking-tight font-bold line-clamp-4 text-gray-900 mt-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-black mt-1">
                          <span>{project.location?.city}, </span>
                          <span>{project.location?.country}</span>
                        </p>
                        <p className="text-xs italic text-gray-500 mt-4">
                          <span>
                            {formatDate(project.startDate, "MMM yyyy")} -{" "}
                            {project.isCompleted && project.endDate
                              ? formatDate(project.endDate, "MMM yyyy")
                              : "Ongoing"}
                          </span>
                        </p>
                      </div>
                    </motion.div>
                    {/* Divider */}
                    <div className="border-t border-gray-200 group-hover:border-black group-hover:-translate-y-2 transition-all mt-5"></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`w-10 h-10 border border-gray-300 flex items-center justify-center mr-2 ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              aria-label="Previous articles"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-10 h-10 border border-gray-300 flex items-center justify-center ${
                currentIndex >= maxIndex
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              aria-label="Next articles"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedClient;
