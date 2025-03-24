"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CareersSection() {
  return (
    <section className="py-10">
      <motion.div
        className="mx-auto px-4 md:px-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row overflow-hidden">
          {/* Left side - Image */}
          <div className="md:w-1/2 relative h-[500px] md:h-[700px]">
            <Image
              src="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_59/v1742245950/thisisengineering-vEoMKBdUIzs-unsplash_ybdrsh.webp"
              alt="PEC employee"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right side - Content */}
          <div className="md:w-1/2 bg-[#128191] p-8 md:p-16 flex flex-col justify-center">
            <div className="max-w-lg">
              <span className="text-white text-lg">Come work with us</span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
                Help create an impact on a global scale
              </h2>

              <div className="mt-auto pt-16">
                <Link
                  href="/careers"
                  className="inline-flex items-center text-white font-medium group"
                >
                  <span>Careers at PEC</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
