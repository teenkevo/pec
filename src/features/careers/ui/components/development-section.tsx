"use client";

import { motion } from "framer-motion";
import { ContentSection } from "@/components/sections/content-section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function DevelopmentSection() {
  const developmentOpportunities = [
    {
      title: "Mentorship Programs",
      description:
        "Learn from industry veterans through our structured mentorship program.",
    },
    {
      title: "Technical Training",
      description:
        "Regular workshops and training sessions on the latest engineering practices and technologies.",
    },
    {
      title: "Conference Attendance",
      description:
        "Opportunities to attend and present at national and international engineering conferences.",
    },
    {
      title: "Certification Support",
      description:
        "Financial and time support for professional certifications and licenses.",
    },
    {
      title: "Cross-Functional Projects",
      description:
        "Work on diverse projects across different industries to broaden your experience.",
    },
    {
      title: "Leadership Development",
      description:
        "Pathways to leadership roles with dedicated leadership training programs.",
    },
  ];

  return (
    <section id="development" className="bg-gray-50">
      <ContentSection
        id="development"
        heading="Professional Development"
        content={
          <div>
            <p className="md:text-lg text-black leading-relaxed tracking-tight mb-8">
              Your growth is our priority. We invest in our team members through
              comprehensive development programs designed to advance your career
              and expand your expertise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {developmentOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600">{opportunity.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 p-8 bg-[#128191] rounded-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Ready to grow with us?
              </h3>
              <p className="text-white/90 mb-6">
                Join a team that values your development and invests in your
                success. Explore our open positions.
              </p>
              <Link
                href="#positions"
                className="inline-flex items-center text-white font-medium group"
              >
                <span>View Open Positions</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        }
      />
    </section>
  );
}
