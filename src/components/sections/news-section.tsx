"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlogPostCard } from "@/features/blog/ui/components/blog-post-card";
import { BlogPosts } from "@/features/blog/lib/queries";
import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  allPosts: BlogPosts;
}

export function NewsSection({ allPosts }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posts, setPosts] = useState<BlogPosts>(allPosts);
  const maxIndex = Math.max(0, posts.length - 3); // Show 3 articles on desktop
  const carouselRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setPosts(allPosts.slice(0, 3));
    } else {
      setPosts(allPosts);
    }
  }, [posts, allPosts, isMobile]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <motion.div
        className="mx-auto px-4 md:px-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-gray-700">Blog</span>
          <div className="flex justify-between items-end mt-2">
            <h2 className="text-3xl font-bold text-gray-900">Highlights</h2>
            <Link
              href="/news"
              className="text-[#EB3300]/90 hover:text-[#EB3300] flex items-center"
            >
              <span>View All</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="w-full md:w-1/3 lg:w-1/3 flex-shrink-0 pr-6"
                >
                  <BlogPostCard post={post} />
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
}
