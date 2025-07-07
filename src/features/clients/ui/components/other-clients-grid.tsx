"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";

interface Props {
  otherClients: { projects: PROJECT_TYPE[]; name: string; count: number }[];
}

const OtherClientsGrid = ({ otherClients }: Props) => {
  return (
    <section className="py-16 bg-white">
      <div className="px-4 md:px-14">
        <motion.h2
          className="text-3xl font-bold text-navy-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          All Clients
        </motion.h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {otherClients.map((client, index) => (
            <motion.div
              key={client.name + index}
              className="group break-inside-avoid mb-8 bg-gray-100/30 rounded p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: Math.min(0.1 * index, 0.5),
              }}
            >
              <h3 className="text-xl font-bold text-navy-800 tracking-tight mb-4">
                {client.name}
              </h3>
              {client.count > 0 && (
                <Link href={client.projects[0].slug}>
                  <p className="text-gray-700 tracking-tight mb-2 group-hover:underline group-hover:text-[#EB3300]">
                    {client.projects[0].title}
                  </p>

                  {client.count > 1 && (
                    <p className="text-sm text-gray-500 mb-4 ">
                      +{client.count - 1} other project
                      {client.count - 1 === 1 ? "" : "s"}
                    </p>
                  )}

                  <div className="inline-flex items-center text-navy-800 group-hover:text-[#EB3300] font-medium group text-sm">
                    <span>View project</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherClientsGrid;
