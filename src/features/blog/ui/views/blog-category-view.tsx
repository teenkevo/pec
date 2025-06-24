"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { BlogPosts } from "../../lib/queries";
import { BlogPostCard } from "../components/blog-post-card";
import { categoryMap } from "../../lib/utils";

interface Props {
  posts: BlogPosts;
  category: string;
}

export const BlogCategoryView = ({ posts, category }: Props) => {

  return (
    <div>
      <div className="relative w-full bg-black">
        <Navigation />
      </div>
      <div className="py-16">
        <motion.div
          className="mx-auto px-4 md:px-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <div className="flex justify-between items-end mt-2">
              <h2 className="text-3xl font-bold text-gray-900">
                {categoryMap[category as keyof typeof categoryMap]}
              </h2>
            </div>
          </div>

          <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {posts.map((post) => (
              <div className="" key={post._id}>
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogCategoryView;
