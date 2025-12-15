"use client";

import { motion } from "framer-motion";
import { ContentSection } from "@/components/sections/content-section";
import {
  Heart,
  GraduationCap,
  Calendar,
  DollarSign,
  Users,
  Shield,
} from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family.",
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Training programs, conferences, and certification support.",
    },
    {
      icon: Calendar,
      title: "Flexible Work",
      description: "Work-life balance with flexible scheduling options.",
    },
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Attractive compensation packages based on experience.",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with regular team events.",
    },
    {
      icon: Shield,
      title: "Retirement Plan",
      description: "Secure your future with our retirement benefits.",
    },
  ];

  return (
    <section id="benefits" className="bg-white">
      <ContentSection
        id="benefits"
        heading="Benefits"
        content={
          <div>
            <p className="md:text-lg text-black leading-relaxed tracking-tight mb-8">
              We offer a comprehensive benefits package designed to support your
              well-being, professional growth, and financial security.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#EB3300] hover:bg-white transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#EB3300]/10 rounded-lg group-hover:bg-[#EB3300] transition-colors">
                        <Icon className="h-6 w-6 text-[#EB3300] group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        }
      />
    </section>
  );
}
