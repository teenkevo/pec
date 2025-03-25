"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface GraphicSectionProps {
  imageUrl: string;
  section: string;
  title: string;
  linkText: string;
  linkUrl: string;
}

export function GraphicSection({
  imageUrl,
  section,
  title,
  linkText,
  linkUrl,
}: GraphicSectionProps) {
  return (
    <section className="w-full px-4 mt-5 md:px-14">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Image */}
        <motion.div
          className="relative h-[400px] md:h-[600px]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={imageUrl}
            alt="solar panels"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right side - Blue panel with text */}
        <motion.div
          className="bg-[#128191] p-8 md:p-16 flex flex-col justify-between"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-gray-200">{section}</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-4 leading-tight">
              {title}
            </h2>
          </div>

          <div className="mt-5 pt-16 border-t border-gray-200">
            <Link
              href={linkUrl}
              className="inline-flex items-center text-white group"
            >
              <span>{linkText}</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
