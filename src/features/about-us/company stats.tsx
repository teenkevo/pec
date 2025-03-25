"use client";

import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
  title: string;
  description: string;
}

export function CompanyStats() {
  const stats: StatItem[] = [
    {
      value: "50+",
      label: "Employees",
      title: "Team of experts",
      description:
        "Technology and equipment are one thing, but the real key to our success? Our people. PEC is home to expertise and talent from more than 10 different specialties.",
    },
    {
      value: "16",
      label: "Years of Experience",
      title: "Proven Expertise",
      description:
        "Since 2008, we've consistently delivered engineering solutions that shape infrastructure. We're still pioneering today, committed to being the most innovative engineering company in Uganda.",
    },
    {
      value: "52+",
      label: "Projects Completed",
      title: "A Legacy of Success",
      description:
        "From concept to completion, our projects reflect precision, innovation, and engineering excellence.",
    },
    {
      value: "#1",
      label: "in many of our specialty industries",
      title: "Setting the Standard",
      description:
        "We've earned a reputation for delivering reliable engineering solutions across diverse industries. Our commitment to precision, sustainability, and forward-thinking design keeps us ahead of the curve.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className=" px-4 md:px-14">
        <div className="space-y-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-4 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Left side - Statistic */}
              <div className="md:col-span-1">
                <div className="space-y-1">
                  <h3 className="text-4xl md:text-5xl font-bold text-navy-800">
                    {stat.value}
                  </h3>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              </div>

              {/* Right side - Description */}
              <div className="md:col-span-3">
                <h4 className="text-2xl font-bold text-navy-800 mb-3">
                  {stat.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
