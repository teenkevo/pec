"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SectionProps {
  section: string;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
}

export function Section({
  section,
  title,
  description,
  linkText,
  linkUrl,
}: SectionProps) {
  return (
    <section className="py-16 bg-white">
      <motion.div
        className="px-4 md:px-14 max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="space-y-4">
          <span className="text-gray-700">{section}</span>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-navy-800">
            {title}
          </h2>

          <div className="pt-4">
            <p className="md:text-lg text-black tracking-tight leading-relaxed">
              {description}
            </p>
          </div>

          {linkUrl && (
            <div className="pt-4">
              <Link
                href={linkUrl}
                className="inline-flex font-medium items-center text-[#EB3300]/90 hover:text-black transition-colors duration-300"
              >
                <span>{linkText}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
