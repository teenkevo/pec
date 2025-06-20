"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { AboutUs } from "../../../../../sanity.types";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

// Define the structure for our values
interface ValueItem {
  title?: string;
  description?: string;
  image: SanityAsset;
}

interface Props {
  values?: ValueItem[];
}

export function ValuesSection({ values: valuesData }: Props) {
  const values = valuesData
    ? valuesData.map((value, index) => ({
        id: value.title?.toLowerCase().replace(/\s+/g, "-") || `value-${index}`,
        number: String(index + 1).padStart(2, "0"),
        title: value.title || `Value ${index + 1}`,
        description: value.description || "Description not available",
        image: urlFor(value.image).format("webp").width(800).height(800).url(),
      }))
    : [];

  const [activeValue, setActiveValue] = useState(values[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);
  const valueRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set up intersection observer to track which value is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Consider value in view when it's in the middle 20% of the viewport
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-value-id");
          if (id) {
            setActiveValue(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Copy the current ref value to avoid stale closure
    const currentRefs = valueRefs.current;

    // Observe all value elements
    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  // Get the active value object
  const activeValueObj =
    values.find((value) => value.id === activeValue) || values[0];

  return (
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className=" px-4 md:px-14">
        <h2 className="text-3xl font-bold text-navy-800 mb-12">Our values</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Sticky image that changes based on active value */}
          <div className="relative">
            <div className="sticky top-20 h-[400px] md:h-[600px]">
              {values.map((value) => (
                <motion.div
                  key={value.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeValue === value.id ? 1 : 0,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Image
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Scrollable values */}
          <div className="space-y-32">
            {values.map((value, index) => (
              <div
                key={value.id}
                ref={(el) => {
                  valueRefs.current[index] = el;
                }}
                data-value-id={value.id}
                className="min-h-[400px]"
              >
                <div className="text-4xl text-gray-400 font-light mb-4">
                  {value.number}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
