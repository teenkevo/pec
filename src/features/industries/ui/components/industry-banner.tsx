"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { INDUSTRIES } from "../../lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface IndustryBannerProps {
  industry: INDUSTRIES[0];
}

export function IndustryBanner({
 industry
}: IndustryBannerProps) {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={urlFor(industry.mainImage).url()}
          alt={`${industry.title} background image`}
          fill
          className="object-cover"
          priority
        />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[600px] bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end px-4 py-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-white text-black font-medium px-3 py-1 text-sm mb-4">
              {industry.title}
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              {industry.subtitle}
            </h2>

            <div className="h-px bg-white/50 mb-6"></div>

            <Link
              href={`/industries/${industry.slug}`}
              className="inline-flex items-center"
            >
              <span className="bg-[#EB3300]/90 hover:bg-[#EB3300] transition-colors p-3 mr-5">
                <ArrowRight className="h-5 w-5 text-white" />
              </span>
              <span className="text-white font-medium">{`View ${industry.title} industry`}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
