"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HistorySection() {
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
              src="https://res.cloudinary.com/teenkevo-cloud/image/upload/e_grayscale,q_70/v1750824007/d3867f63-e7bc-4fb3-962e-4c2bd7677a70_urwkog.webp"
              alt="Kampala vintage"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right side - Content */}
          <div className="md:w-1/2 bg-black p-6 md:p-16 flex flex-col justify-center">
            <div className="max-w-lg">
              <span className="text-white text-lg">Founded in 2008</span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white my-4 leading-tight">
                Our History
              </h2>
              <span className="text-white text-lg">
                Take a look at how PEC has evolved over the years
              </span>
              <div className="mt-auto pt-16">
                <Link
                  href="/about-us"
                  className="inline-flex items-center text-white font-medium group"
                >
                  <span>Read more</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-[#EB3300]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
