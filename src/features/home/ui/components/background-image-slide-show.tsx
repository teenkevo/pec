"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/sanity/lib/image";

interface BackgroundImageSlideshowProps {
  images: { alt: string; asset: SanityAsset }[];
  interval?: number;
}

export function BackgroundImageSlideshow({
  images,
  interval = 5000,
}: BackgroundImageSlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length, interval]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {images.map(
          (image, index) =>
            index === currentImageIndex && (
              <motion.div
                key={`bg-${index}`}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative h-full w-full">
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{
                      duration: 8,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src={urlFor(image.asset).url() || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      priority
                      className="object-cover"
                      sizes="100vw"
                    />
                  </motion.div>

                  {/* Top gradient overlay */}
                  <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-black to-transparent z-10"></div>

                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-[800px] bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation dots and progress bar container */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Navigation dots */}
        <div className="flex justify-center items-center gap-2 pb-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentImageIndex
                  ? "bg-white shadow-lg"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-white/20 backdrop-blur-sm">
          <motion.div
            key={`progress-${currentImageIndex}`}
            className="h-full bg-gradient-to-r from-white/80 to-[#EB3300]/60"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: interval / 1000,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
