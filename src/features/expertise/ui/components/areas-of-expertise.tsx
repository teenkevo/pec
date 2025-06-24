"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Expertise } from "../../../../../sanity.types";

// Define the structure for expertise items
interface Props {
  expertise: Expertise[];
}

export function AreasOfExpertise({ expertise }: Props) {
  return (
    <section className="py-16 bg-white">
      <div className="px-4 md:px-14">
        <motion.h2
          className="text-3xl font-bold text-navy-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our areas of expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {expertise.map((item, index) => (
            <Link key={item._id} href={item.slug?.current ?? ""}>
              <motion.div
                key={item._id}
                className="border-t border-gray-200 pt-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(0.1 * index, 0.5),
                }}
              >
                <h3 className="text-xl font-bold text-navy-800 tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 tracking-tight mb-4">
                  {item.excerpt}
                </p>
                <div className="inline-flex items-center text-navy-800 group-hover:text-[#EB3300] font-medium group">
                  <span>Read more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
