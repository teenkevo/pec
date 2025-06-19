"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BackgroundImageProps {
  imageUrl: string;
  alt: string;
}

export function BackgroundImage({ imageUrl, alt }: BackgroundImageProps) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="relative h-full w-full">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            duration: 4,
            ease: "easeOut",
          }}
        >
          <Image
            src={imageUrl}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Top gradient overlay */}
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-black to-transparent z-10"></div>

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[600px] bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      </div>
    </div>
  );
}
