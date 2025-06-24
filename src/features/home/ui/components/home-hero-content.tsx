"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Slide {
  title: string;
  description: string;
  industry: string;
  projectSlug:string;
  industrySlug: string;
}

interface Props {
  slides: Slide[];
}

export function HomeHeroContent({ slides }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideInterval = 5000; // 5 seconds
  const updateInterval = 50; // Update progress every 100ms for smooth animation

  useEffect(() => {
    // Reset progress when slide changes
    setProgress(0);

    // Progress timer
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (updateInterval / slideInterval) * 100;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, updateInterval);

    // Slide change timer
    const slideTimer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [currentSlide, slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="px-4 md:px-14 absolute bottom-5 md:bottom-16 w-full z-20">
      <div className="flex flex-col md:flex-row justify-between items-end md:gap-4 w-full">
        <div className="w-full md:w-[55%]">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tighter leading-10">
           Engineering tomorrow's solution
          </h1>
        </div>

        <div className="w-full md:w-[35%]">
          {/* Divider */}
          <motion.div
            key={`descii-${currentSlide}`}
            className="border-t border-gray-300 md:my-10 my-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          <motion.div
            key={`link-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <Link
              href={`/industries/${currentSlideData.industrySlug}`}
              className="inline-block bg-[#128191] text-white font-bold px-3 py-1 text-base mb-4"
            >
              <span>{currentSlideData.industry}</span>
            </Link>
          </motion.div>
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="text-white text-sm md:text-sm mb-1 md:mb-6 h-[100px] md:h-auto"
          >
            {currentSlideData.description}
          </motion.p>
          <div>
            <Link
              href={`/projects/${currentSlideData.projectSlug}`}
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
    </div>
  );
}
