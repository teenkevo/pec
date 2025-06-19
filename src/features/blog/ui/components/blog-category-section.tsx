"use client";

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

export function BlogCategorySection({
  posts,
  sectionTitle,
  path,
  isNewsPage = false,
}: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="md:py-10 py-4 bg-white" id={path}>
      <motion.div
        className="mx-auto px-4 md:px-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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

        <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div className="" key={post._id}>
              <BlogPostCard post={post} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
