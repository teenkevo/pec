"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function OrganisationSection() {
  return (
    <section className="py-10">
      <motion.div
        className=" mx-auto px-4 md:px-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Our organisation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Our Purpose - Left Side */}
          <div className="lg:col-span-8 relative overflow-hidden rounded-sm border border-gray-200">
            <div className="flex flex-col md:flex-row h-full">
              {/* Text Content - Left Side */}
              <div className="md:w-1/2 bg-[#128191] p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl tracking-tight font-bold text-white mb-4">
                    Our purpose
                  </h3>
                  <p className="text-white">
                    At PEC, we always keep the bigger picture in mind. We don't
                    just help you realise and operate your projects safely and
                    efficiently, but sustainably too.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/purpose"
                    className="inline-flex items-center text-white font-medium group"
                  >
                    <span>Read more</span>
                    <span className="ml-2 bg-white p-2 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="h-4 w-4 text-black" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Image - Right Side */}
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_66/v1742240490/cytonn-photography-n95VMLxqM2I-unsplash_bt9nyr.webp"
                  alt="handshake"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Sustainability Initiatives Card */}
            <div className="border border-gray-200 rounded-sm p-6">
              <span className="text-sm text-gray-500">
                Sustainability initiatives
              </span>

              <h3 className="text-2xl tracking-tight font-bold text-gray-900 mt-4">
                Net Zero
              </h3>
              <p className="text-green-500 font-medium flex items-center mt-1">
                <span>by 2035</span>
              </p>

              <p className="text-gray-600 mt-4">
                Our roadmap to carbon neutrality includes transitioning to
                renewable energy sources and investing in carbon offset
                projects.
              </p>

              <div className="mt-8">
                <Link
                  href="/sustainability"
                  className="inline-flex items-center text-gray-900 font-medium group"
                >
                  <span>Read more</span>
                  <span className="ml-2 bg-gray-100 p-2 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Leadership Card - Bottom Left */}
          <div className="lg:col-span-4 border border-gray-200 rounded-sm p-8">
            <div>
              <h3 className="text-2xl tracking-tight font-bold text-gray-900">
                Leadership
              </h3>

              <p className="text-gray-700 mt-4">
                Get to know the leadership team at PEC.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/certifications"
                className="inline-flex items-center text-gray-900 font-medium group"
              >
                <span>Read more</span>
                <span className="ml-2 bg-gray-100 p-2 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
          {/* Certifications Card */}
          <div className="lg:col-span-4 border border-gray-200 rounded-sm p-8">
            <div>
              <h3 className="text-2xl tracking-tight font-bold text-gray-900">
                Our certifications
              </h3>

              <p className="text-gray-700 mt-4">
                PEC maintains the highest industry standards with ISO 9001, ISO
                14001, and ISO 45001 certifications across our global
                operations, ensuring quality, environmental responsibility, and
                safety.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/certifications"
                className="inline-flex items-center text-gray-900 font-medium group"
              >
                <span>Read more</span>
                <span className="ml-2 bg-gray-100 p-2 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
