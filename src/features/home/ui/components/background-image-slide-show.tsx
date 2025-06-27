"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
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
    </div>
  );
}
