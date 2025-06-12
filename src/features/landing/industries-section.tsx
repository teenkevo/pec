"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { INDUSTRIES } from "../industries/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const hideScrollbarStyle = `
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}
`;

// Define industry data
// const industries = [
//   {
//     id: "transport",
//     industry: "Transport",
//     href: "/industries/transport",
//     title:
//       "Connecting cities and communities with reliable transportation corridors",
//     description:
//       "We are committed delivering sustainable infrastructure that connects people, businesses, and communities",
//     image:
//       "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp", // Replace with actual energy image
//   },
//   {
//     id: "water",
//     industry: "Water and Sanitation",
//     href: "/industries/water",
//     title: "Engineering sustainable water & waste water management solutions",
//     description:
//       "We're dedicated to improving access to clean water with sustainable supply, drainage, and treatment solutions",
//     image:
//       "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_64/v1743528565/69790D60-4A3D-4638-96B5-DAF4243A17D2_1_201_a_soin4z.webp", // Replace with actual ocean image
//   },
//   {
//     id: "materials",
//     industry: "Materials and Geotechnics",
//     href: "/industries/materials",
//     title:
//       "Building strong foundations with innovative geotechnical & materials solutions",
//     description: "Tailored solutions for foundations of every complexity",
//     image:
//       "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1726662738/IMG_20240817_112347_umok4y.webp", // Replace with actual urban image
//   },
// ];
interface Props {
  industries: INDUSTRIES;
}

export function IndustriesSection({ industries }: Props) {
  // State to track the active industry
  const [activeIndustry, setActiveIndustry] = useState("transport");

  // Get the active industry data
  const activeIndustryData =
    industries.find((industry) => industry.slug === activeIndustry) ||
    industries[0];

  return (
    <section
      id="our-industries"
      className="relative w-full h-[900px] md:h-[900px] overflow-hidden"
    >
      {/* <style>{hideScrollbarStyle}</style> */}
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
            backgroundImage: `url('${urlFor(activeIndustryData.mainImage).url()}')`,
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
          className="text-2xl md:text-3xl font-bold text-white mb-8"
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
          <div className="flex overflow-x-auto pb-4 -mx-6 px-4 hide-scrollbar">
            {industries.map((industry, index) => {
              const isActive = activeIndustry === industry.slug;

              return (
                <motion.div
                  key={industry._id}
                  className={`${
                    isActive
                      ? "bg-white"
                      : "bg-gray-900/40 border backdrop-blur-sm"
                  } p-6 flex flex-col h-full cursor-pointer transition-colors duration-300 min-w-[320px] md:min-w-0 flex-1 mx-2 snap-start`}
                  onClick={() => setActiveIndustry(industry.slug)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                >
                  <span
                    className={`${isActive ? "text-[#EB3300]" : "text-white"} font-bold text-lg mb-4 inline-block`}
                  >
                    {industry.title}
                  </span>

                  <h3
                    className={`text-xl md:text-2xl font-bold mb-4 tracking-tight ${isActive ? "text-gray-900" : "text-white"}`}
                  >
                    {industry.subtitle}
                  </h3>
                  <p
                    className={`mb-8 flex-grow h-[100px] overflow-hidden ${isActive ? "text-gray-700" : "text-gray-200"}`}
                  >
                    {industry.description}
                  </p>

                  <div>
                    <Link
                      href={`/industries/${industry.slug}`}
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
