"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlogPostCard } from "@/features/blog/ui/components/blog-post-card";
import { BlogPosts } from "@/features/blog/lib/queries";

// Define news article data
// const newsArticles = [
//   {
//     id: "seafloor-mapping",
//     category: "Business news",
//     title:
//       "PEC leads large-scale seafloor mapping project to protect Entebbe's coast",
//     image:
//       "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp",
//     date: "6 Jan 2025",
//   },
//   {
//     id: "coral-reefs",
//     category: "Podcast",
//     title: "Coral reefs, data, and decision making",
//     image:
//       "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_64/v1742072211/IMG_7455_2_i3bpiw.webp",
//     date: "28 Nov 2024",
//   },
//   {
//     id: "seismic-imaging",
//     category: "Long read",
//     title: "Marine seismic imaging: the key to robust wind farm foundations",
//     image:
//       "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_66/v1725968449/D1MqaczXcAUaOuB_o9n01n.webp",
//     date: "4 Nov 2024",
//   },
//   {
//     id: "digital-twins",
//     category: "Innovation",
//     title: "Digital twins revolutionizing offshore asset management",
//     image:
//       "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp",
//     date: "15 Oct 2024",
//   },
//   {
//     id: "autonomous-vessels",
//     category: "Technology",
//     title: "PEC expands fleet of autonomous vessels for ocean exploration",
//     image:
//       "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_64/v1742072211/IMG_7455_2_i3bpiw.webp",
//     date: "2 Oct 2024",
//   },
//   {
//     id: "carbon-capture",
//     category: "Sustainability",
//     title: "New geo-data techniques enhance carbon capture site selection",
//     image:
//       "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_66/v1725968449/D1MqaczXcAUaOuB_o9n01n.webp",
//     date: "18 Sep 2024",
//   },
// ];

interface Props{
  posts: BlogPosts
}

export function NewsSection({posts}:Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, posts.length - 3); // Show 3 articles on desktop
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

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
          <span className="text-gray-700">News</span>
          <div className="flex justify-between items-end mt-2">
            <h2 className="text-3xl font-bold text-gray-900">Highlights</h2>
            <Link
              href="/news"
              className="text-[#EB3300]/90 hover:text-[#EB3300] flex items-center"
            >
              <span>All news</span>
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
                <div
                  key={post._id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                >
                  {/* <Link href={`/news/${article.id}`} className="block group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">
                        {article.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1 tracking-tight transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-xs mt-2">
                        {article.date}
                      </p>
                    </div>
                  </Link> */}
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
