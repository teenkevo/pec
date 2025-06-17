"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

// Define the structure for our values
interface ValueItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

interface Props {
  values?: any[];
}

export function ValuesSection({ values: valuesData }: Props) {
  // Define our four values
  const defaultValues: ValueItem[] = [
    {
      id: "customer-centric",
      number: "01",
      title: "Customer-centric",
      description:
        "All our work is geared towards customer satisfaction and we undertake to continuously identify all the legitimate customer requirements and endeavour to comprehensively address them.",
      image:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/v1742772760/christina-wocintechchat-com-rCyiK4_aaWw-unsplash_kukqqs.jpg",
    },
    {
      id: "respect",
      number: "02",
      title: "Respect",
      description:
        "PEC undertakes to be and to remain sincere, fair and forthright; treating others with dignity and respecting their individual differences, feelings, and contributions",
      image:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/v1742240490/cytonn-photography-n95VMLxqM2I-unsplash_bt9nyr.jpg",
    },
    {
      id: "integrity",
      number: "03",
      title: "Integrity",
      description:
        "As we operate in an intensely competitive environment, we undertake to compete fairly, conducting our business in a professional manner that reflects favourably on the Company and on each of the individuals at PEC. We further undertake to hold ourselves to the PEC Code of Conduct dutifully, consistently and effectively.",
      image:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_61/v1742774671/christina-wocintechchat-com-rg1y72eKw6o-unsplash_m2xhqy.webp",
    },
    {
      id: "shared-ownership",
      number: "04",
      title: "Shared Ownership",
      description:
        "We undertake to continuously build value for our shareholders and share the results of the Company's success with those who produce it.",
      image:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/v1742777149/microsoft-365-oUbzU87d1Gc-unsplash_ekgtti.jpg",
    },
  ];

  const values = valuesData ? valuesData.map((value, index) => ({
    id: value.title?.toLowerCase().replace(/\s+/g, '-') || `value-${index}`,
    number: String(index + 1).padStart(2, '0'),
    title: value.title || `Value ${index + 1}`,
    description: value.description || 'Description not available',
    image: value.image ? urlFor(value.image).url() : defaultValues[index]?.image || "https://res.cloudinary.com/teenkevo-cloud/image/upload/v1742772760/christina-wocintechchat-com-rCyiK4_aaWw-unsplash_kukqqs.jpg",
  })) : defaultValues;

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

    // Observe all value elements
    valueRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      valueRefs.current.forEach((ref) => {
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
