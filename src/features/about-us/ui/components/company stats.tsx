"use client";

import { motion } from "framer-motion";
import { AboutUs } from "../../../../../sanity.types";

interface Props {
  statistics?: AboutUs["statistics"];
}

export function CompanyStats({ statistics }: Props) {
 

  const stats = statistics ? statistics.map(stat => ({
    value: stat.value,
    title: stat.title,
    subtitle: stat.subtitle,
    description: stat.description,
  })) : [];

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
                  <p className="text-gray-500">{stat.title}</p>
                </div>
              </div>

              {/* Right side - Description */}
              <div className="md:col-span-3">
                <h4 className="text-2xl font-bold text-navy-800 mb-3">
                  {stat.subtitle}
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
