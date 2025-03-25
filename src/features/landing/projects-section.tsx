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
    // TODO: Allow multiple projects to be featured and possibly schedule the change timing
    featured: boolean;
  }>;
  title: string;
  linkText: string;
}

export function ProjectsSection({
  projects,
  title,
  linkText,
}: ProjectsSectionProps) {
  return (
    <section className="py-16">
      <div className="mx-auto px-4 md:px-14">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl leading-tight font-bold text-gray-900">
            {title}
          </h2>
          <Link
            href="/case-studies"
            className="text-[#EB3300]/90 hover:text-[#EB3300] flex items-center"
          >
            <span>{linkText}</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Case Studies Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Featured Case Study (Left) */}
          <div className="lg:col-span-6 group">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <Link
                  key={project.id}
                  href={`/project`}
                  className="block group"
                >
                  <motion.div
                    className="relative aspect-[4/3] w-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">
                        {project.industry}
                      </span>
                      <h3 className="text-2xl tracking-tight font-bold line-clamp-4 text-gray-900 mt-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-black mt-1">
                        {project.location}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            {/* Divider */}
            <div className="border-t border-gray-200 group-hover:border-black group-hover:-translate-y-2 transition-all mt-5"></div>
          </div>

          {/* Regular Case Studies (Right) */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <div key={project.id}>
                  <Link href={`/project`} className="block group">
                    <motion.div
                      className="relative aspect-[4/3] w-full"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <span className="text-sm text-gray-500">
                          {project.industry}
                        </span>
                        <h3 className="text-xl font-bold line-clamp-4 text-gray-900 mt-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-black mt-1">
                          {project.location}
                        </p>
                      </div>
                    </motion.div>
                    {/* Divider */}
                    <div className="border-t border-gray-200 group-hover:border-black group-hover:-translate-y-2 transition-all mt-5"></div>
                  </Link>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
