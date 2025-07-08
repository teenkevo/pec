"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SecondaryNav } from "@/components/layout/secondary-nav";

export function ClientsHero() {
  const secondaryNavigationItems = [
    { title: "Featured Clients", href: "featured-clients" },
    { title: "All clients", href: "all" },
  ];

  const stats = useMemo(() => {
    return [
      {
        title: "Years of Experience",
        value: "17+",
        icon: "/client-icons/experience.svg",
        display_text: "Nearly two decades strong",
      },
      {
        title: "Infrastructure Projects",
        value: "50+",
        icon: "/client-icons/infrastructure.svg",
        display_text: "Building the future",
      },
      {
        title: "Water engineering projects",
        value: "13",
        icon: "/client-icons/water.svg",
        display_text: "Engineering clean water access",
      },
      {
        title: "Cumulative contract Amount",
        value: "$ 26.5M+",
        icon: "/client-icons/money.svg",
        display_text: "Trusted with millions",
      },
      {
        title: "Roads designed & supervised",
        value: "1000+ kms",
        icon: "/client-icons/road.svg",
        display_text: "Building safer connections",
      },
    ];
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === stats.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, stats.length]);

  useEffect(() => {
    return () => {
      // Cleanup any remaining intervals on unmount
      setIsAutoPlaying(false);
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 1 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <>
      <div className="w-full h-[400px] md:h-[550px] relative isolate overflow-hidden flex flex-col">
        {/* Video Background */}
        <div className="absolute inset-0">
          {videoFailed ? (
            <Image
              src="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_68/v1751940323/client-hero-fallback_ztdro5.webp"
              alt="Professional working on laptop in outdoor setting"
              fill
              priority
              className="object-cover"
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_68/v1751940323/client-hero-fallback_ztdro5.webp"
              onError={() => setVideoFailed(true)}
              className="w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/teenkevo-cloud/video/upload/v1751955744/KNB-1_vsu0fe.mp4"
                type="video/mp4"
              />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Hero Content - Takes up most of the space */}
          <div className="flex-1 flex items-center px-4 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-white py-1 text-lg mt-10">Clients</span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading tracking-tighter mt-5 mb-6">
                Our success is built on the{" "}
                <span className="bg-[#EB3300] px-2 py-0 my-2">trust</span> of
                our clients
              </h1>
              <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                Together, we are building a better future for Uganda and beyond.
              </p>
            </div>
          </div>

          {/* Statistics Cards - Positioned at the bottom */}
          <div className="hidden md:block px-6 lg:px-12 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.value + index}
                  className={cn(
                    activeIndex == index ? "bg-[#EB3300]/20" : "bg-black/40",
                    "border border-white/10 backdrop-blur-md flex flex-col justify-between items-start p-4 text-white min-h-[120px] transition-colors duration-300 cursor-pointer hover:ring-1 hover:ring-white/40 rounded-lg"
                  )}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.15, // Staggered delay
                    ease: "easeOut",
                  }}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Image
                    width={30}
                    height={30}
                    src={stat.icon || "/placeholder.svg"}
                    alt={stat.title + " Professional Engineering Consultants"}
                    className="mb-2"
                  />

                  <div className="space-y-1 w-full">
                    <span className="text-2xl font-bold text-white block">
                      {stat.value}
                    </span>
                    <p className="text-sm text-white/90">{stat.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
