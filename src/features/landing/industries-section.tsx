"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Define industry data
const industries = [
  {
    id: "transport",
    industry: "Transport",
    href: "/industries/transport",
    title:
      "Connecting cities and communities with reliable transportation corridors",
    description:
      "We are committed delivering sustainable infrastructure that connects people, businesses, and communities",
    image:
      "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp", // Replace with actual energy image
  },
  {
    id: "water",
    industry: "Water and Sanitation",
    href: "/industries/water",
    title: "Engineering sustainable water & waste water management solutions",
    description:
      "We're dedicated to improving access to clean water with sustainable supply, drainage, and treatment solutions",
    image:
      "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1742339704/02_1_zckrbq.webp", // Replace with actual ocean image
  },
  {
    id: "materials",
    industry: "Materials and Geotechnics",
    href: "/industries/materials",
    title:
      "Building strong foundations with innovative geotechnical and materials solutions",
    description: "Tailored solutions for foundations of every complexity",
    image:
      "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1726662738/IMG_20240817_112347_umok4y.webp", // Replace with actual urban image
  },
];

export function IndustriesSection() {
  // State to track the active industry
  const [activeIndustry, setActiveIndustry] = useState("transport");

  // Get the active industry data
  const activeIndustryData =
    industries.find((industry) => industry.id === activeIndustry) ||
    industries[0];

  return (
    <section
      id="our-industries"
      className="relative w-full h-[1000px] md:h-[700px] overflow-hidden"
    >
      {/* Background Images with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndustry}
          className="absolute inset-0 bg-cover bg-center z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            backgroundImage: `url('${activeIndustryData.image}')`,
            backgroundPosition: "center 30%",
          }}
        >
          {/* Top gradient overlay */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-10"></div>
          {/* Bottom gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        </motion.div>
      </AnimatePresence>

      {/* Section Title */}
      <div className="relative z-10 mx-auto px-4 md:px-14 pt-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our industries
        </motion.h2>
      </div>

      {/* Cards Container */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className=" mx-auto px-4 md:px-14 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {industries.map((industry, index) => {
              const isActive = activeIndustry === industry.id;

              return (
                <motion.div
                  key={industry.id}
                  className={`${
                    isActive
                      ? "bg-white"
                      : "bg-gray-900/40 border backdrop-blur-sm"
                  } p-8 flex flex-col h-full cursor-pointer transition-colors duration-300`}
                  onClick={() => setActiveIndustry(industry.id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <span
                    className={`${isActive ? "text-[#EB3300]" : "text-white"} font-bold text-lg mb-4 inline-block`}
                  >
                    {industry.industry}
                  </span>

                  <h3
                    className={`text-2xl font-bold mb-4 tracking-tight ${isActive ? "text-gray-900" : "text-white"}`}
                  >
                    {industry.title}
                  </h3>
                  <p
                    className={`mb-8 flex-grow ${isActive ? "text-gray-700" : "text-gray-200"}`}
                  >
                    {industry.description}
                  </p>
                  <div>
                    <Link
                      href={industry.href}
                      className={`inline-flex items-center ${isActive ? "text-black" : "text-white"} font-medium group`}
                    >
                      <span
                        className={` ${isActive ? "bg-[#EB3300]" : "bg-white"} p-2 group-hover:translate-x-1 transition-transform`}
                      >
                        <ArrowRight
                          className={`h-5 w-5 ${isActive ? "text-white" : "text-[#EB3300]"}`}
                        />
                      </span>
                    </Link>
                  </div>
                  {/* <div className="self-start mt-auto">
                    <ArrowRight
                      className={`h-5 w-5 ${isActive ? "text-[#EB3300]" : "text-white"}`}
                    />
                  </div> */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
