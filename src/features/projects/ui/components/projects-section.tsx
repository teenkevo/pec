"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { PROJECT_TYPE } from "../../lib/queries";

interface ProjectsSectionProps {
  projects: PROJECT_TYPE[];
  title: string;
  linkText: string;
}

export function ProjectsSection({
  projects,
  title,
  linkText,
}: ProjectsSectionProps) {
  return (
    <section className="md:py-16 py-5">
      <div className="mx-auto px-4 md:px-14">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl leading-tight font-bold text-gray-900">
            {title}
          </h2>
          <Link
            href="/projects"
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
          {/* Regular Case Studies (Right) */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.slug}>
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
                          urlFor(project.mainImage).url() || "/placeholder.svg"
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
                        <span>{project.location?.city}</span>
                        <span>{project.location?.country}</span>
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
