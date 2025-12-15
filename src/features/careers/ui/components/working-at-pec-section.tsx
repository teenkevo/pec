"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ContentSection } from "@/components/sections/content-section";

export function WorkingAtPECSection() {
  const values = [
    {
      title: "Innovation",
      description:
        "We encourage creative thinking and innovative solutions to complex engineering challenges.",
    },
    {
      title: "Collaboration",
      description:
        "Work alongside experienced professionals in a supportive, team-oriented environment.",
    },
    {
      title: "Impact",
      description:
        "Make a real difference in communities by building sustainable infrastructure.",
    },
    {
      title: "Growth",
      description:
        "Continuous learning opportunities and career development support.",
    },
  ];

  const principles = [
    {
      title: "Find a way",
      description:
        "We give individuals and teams the agency to solve what matters. Ideas can come from anywhere, regardless of title or tenure.",
    },
    {
      title: "Creativity over control",
      description:
        "We favor creative, principled solutions over rigidity. First principles and best practices guide how we work.",
    },
    {
      title: "Update quickly",
      description:
        "We start with hypotheses, seek truth, and adapt fast as new information arrives. Flexibility keeps progress sustainable.",
    },
    {
      title: "Intense focus",
      description:
        "We work hard with clarity and resilience to make an impact. Focus helps us make the tough decisions that move us forward.",
    },
  ];

  return (
    <section id="working" className="bg-gray-50">
      <ContentSection
        id="working"
        heading="Working at PEC"
        content={
          <div>
            <p className="md:text-lg text-black leading-relaxed tracking-tight mb-8">
              At PEC, we believe that great infrastructure starts with great
              people. We're committed to creating an environment where our team
              members can thrive, grow, and make meaningful contributions to
              Uganda's development and beyond.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg border border-gray-200 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our operating principles
              </h3>
              <p className="text-black leading-relaxed tracking-tight mb-6">
                These principles define how we work together and build our
                operating culture.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg border border-gray-200 transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-gray-600">{principle.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="mt-12 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_70/v1742877869/marten-bjork-6dW3xyQvcYE-unsplash_kxslgq.webp"
                alt="PEC team working together"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        }
      />
    </section>
  );
}
