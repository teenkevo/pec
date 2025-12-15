"use client";

import { SecondaryNav } from "@/components/layout/secondary-nav";
import { motion } from "framer-motion";
import Image from "next/image";

export function CareersHero() {
  const secondaryNavigationItems = [
    { title: "Open Positions", href: "positions" },
    { title: "Working at PEC", href: "working" },
    { title: "Development", href: "development" },
    { title: "Benefits", href: "benefits" },
  ];

  return (
    <>
      <div className="w-full h-[60vh] md:h-[70vh] relative isolate overflow-hidden flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_68/v1742877869/marten-bjork-6dW3xyQvcYE-unsplash_kxslgq.webp"
            alt="Careers at PEC"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Hero Content */}
          <div className="flex-1 flex items-center px-4 md:px-14">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white py-1 text-lg">Careers</span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading tracking-tighter mt-5 mb-6">
                Build your{" "}
                <span className="bg-[#EB3300] px-2 py-0 my-2">career</span> with
                us
              </h1>
              <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-3xl tracking-tight leading-relaxed">
                Join a team of passionate engineers and consultants dedicated to
                building sustainable infrastructure that makes a difference.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <SecondaryNav
        initialActiveItem={secondaryNavigationItems[0].href}
        navItems={secondaryNavigationItems}
      />
    </>
  );
}
