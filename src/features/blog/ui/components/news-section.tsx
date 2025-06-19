"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlogPosts } from "../../lib/queries";
import { BlogPostCard } from "./blog-post-card";


interface Props {
  posts: BlogPosts;
  sectionTitle: string;
  isNewsPage?: boolean;
  path?: string;
}

export function NewsSection({ posts, sectionTitle,path, isNewsPage = false }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, posts.length - 3);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  if (posts.length === 0) return null;

  return (
    <section className="md:py-10 py-0 bg-white">
      <motion.div
        className="mx-auto px-4 md:px-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="mb-4">
         {!isNewsPage && <span className="text-gray-700">{sectionTitle}</span>}
          <div className="flex justify-between items-end mt-2">
            <h2 className="text-3xl font-bold text-gray-900">{sectionTitle}</h2>
            <Link
              href={isNewsPage ? "/blog" : `/blog/${path}`}
              className="text-[#EB3300]/90 hover:text-[#EB3300] flex items-center"
            >
              <span>ViewAll</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* News Carousel */}
        <div className="relative mt-8">
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex space-x-10 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {posts.map((post) => (
                <div className="w-full md:w-1/2 lg:w-1/3" key={post._id}>
                  <BlogPostCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex mt-8">
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
