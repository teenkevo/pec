"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { PROJECT_TYPE } from "../../lib/queries";

interface ProjectsSectionProps {
  projects: PROJECT_TYPE[];
  title: string;
  linkText: string;
}

export function ProjectsSection2({
  projects,
  title,
  linkText,
}: ProjectsSectionProps) {
  const [projectA, featuredProject, projectB] = projects;
  // const featuredProject = projects.find((project) => project.featured);
  // const nonFeaturedProjects = projects.filter((project) => !project.featured);
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
            {projectA && (
              <Link
                href={`/projects/${projects[0].slug}`}
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
                        urlFor(projectA.mainImage)
                          .format("webp")
                          .width(600)
                          .height(600)
                          .url() || "/placeholder.svg"
                      }
                      alt={projectA.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      {projectA.industry.title}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      {projectA.title}
                    </h3>
                    <p className="text-xs text-black mt-1">
                      <span> {projectA.location.city}</span>,{" "}
                      <span> {projectA.location.country}</span>
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
                href={`/projects/${featuredProject.slug}`}
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
                        urlFor(featuredProject.mainImage)
                          .format("webp")
                          .url() || "/placeholder.svg"
                      }
                      alt={featuredProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      {featuredProject.industry.title}
                    </span>

                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                      {featuredProject.title}
                    </h3>
                    <p className="text-xs text-black mt-1">
                      <span> {featuredProject.location.city}</span>,{" "}
                      <span> {featuredProject.location.country}</span>
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
            {projectB && (
              <Link href={`/projects/${projectB.slug}`} className="block group">
                <motion.div
                  className="relative aspect-[4/3] w-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={
                        urlFor(projectB.mainImage).url() || "/placeholder.svg"
                      }
                      alt={projectB.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      {projectB.industry.title}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      {projectB.title}
                    </h3>
                    <p className="text-xs text-black mt-1">
                      <span> {featuredProject.location.city}</span>,{" "}
                      <span> {featuredProject.location.country}</span>
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
