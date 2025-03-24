"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectsSectionProps {
  projects: Array<{
    id: string;
    title: string;
    image?: string;
    industry: string;
    location: string;
    featured: boolean;
  }>;
  title: string;
  linkText: string;
}

export function ProjectsSection2({
  projects,
  title,
  linkText,
}: ProjectsSectionProps) {
  const featuredProject = projects.find((project) => project.featured);
  const nonFeaturedProjects = projects.filter((project) => !project.featured);
  return (
    <section>
      <div className="mx-auto px-4 md:px-14">
        {/* Case Studies Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Card */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-1 gap-6">
            {nonFeaturedProjects[0] && (
              <Link
                href={`/case-studies/${nonFeaturedProjects[0].id}`}
                className="block group"
              >
                <motion.div
                  className="relative aspect-[4/3] w-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={nonFeaturedProjects[0].image || "/placeholder.svg"}
                      alt={nonFeaturedProjects[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      {nonFeaturedProjects[0].industry}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      {nonFeaturedProjects[0].title}
                    </h3>
                    <p className="text-xs text-black mt-1">
                      {nonFeaturedProjects[0].location}
                    </p>
                  </div>
                </motion.div>
                {/* Divider */}
                <div className="border-t border-gray-200 mt-5"></div>
              </Link>
            )}
          </div>
          {/* Featured Case Study (Left) */}
          <div className="lg:col-span-6">
            {featuredProject && (
              <Link
                key={featuredProject.id}
                href={`/case-studies/${featuredProject.id}`}
                className="block group"
              >
                <motion.div
                  className="relative aspect-[4/3] w-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={featuredProject.image || "/placeholder.svg"}
                      alt={featuredProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      {featuredProject.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                      {featuredProject.title}
                    </h3>
                    <p className="text-xs text-black mt-1">
                      {featuredProject.location}
                    </p>
                  </div>
                </motion.div>
              </Link>
            )}
            {/* Divider */}
            <div className="border-t border-gray-200 mt-5"></div>
          </div>

          {/* Left Card */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-1 gap-6">
            {nonFeaturedProjects[1] && (
              <Link
                href={`/case-studies/${nonFeaturedProjects[1].id}`}
                className="block group"
              >
                <motion.div
                  className="relative aspect-[4/3] w-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={nonFeaturedProjects[1].image || "/placeholder.svg"}
                      alt={nonFeaturedProjects[1].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      {nonFeaturedProjects[1].industry}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      {nonFeaturedProjects[1].title}
                    </h3>
                    <p className="text-xs text-black mt-1">
                      {nonFeaturedProjects[1].location}
                    </p>
                  </div>
                </motion.div>
                {/* Divider */}
                <div className="border-t border-gray-200 mt-5"></div>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
