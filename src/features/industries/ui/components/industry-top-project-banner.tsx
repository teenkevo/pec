"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { createSlug } from "@/lib/utils";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface IndustryTopProjectBannerProps {
  featuredProject: PROJECT_TYPE;
}

export function IndustryTopProjectBanner({
  featuredProject,
}: IndustryTopProjectBannerProps) {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden p-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={
            featuredProject?.mainImage
              ? urlFor(featuredProject?.mainImage).url()
              : "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_66/v1725968449/D1MqaczXcAUaOuB_o9n01n.webp"
          }
          alt="Wind turbines on land and sea"
          fill
          className="object-cover"
          priority
        />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[600px] bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end px-4">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              {featuredProject.title}
            </h2>

            <div className="h-px bg-white/50 mb-6"></div>

            <Link
              href={`/projects/${featuredProject.slug}`}
              className="inline-flex items-center"
            >
              <span className="bg-[#EB3300]/90 hover:bg-[#EB3300] transition-colors p-3 mr-5">
                <ArrowRight className="h-5 w-5 text-white" />
              </span>
              <span className="text-white font-medium">View project</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
