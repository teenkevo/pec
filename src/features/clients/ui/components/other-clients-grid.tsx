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
    <section className="py-4 bg-white">
      <div className="px-4 md:px-14">
        <motion.h2
          className="text-3xl font-bold text-navy-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          All other clients
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <div className="col-span-2">
            {otherClients.map(
              (client, index) =>
                client.count > 0 && (
                  <Link
                    key={client.name + index}
                    href={`/projects/${client.projects[0]?.slug}`}
                  >
                    <motion.div
                      className="border-t border-gray-200 pb-6 pt-6 group"
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
                        <>
                          <p className="text-gray-700 tracking-tight mb-2">
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
                        </>
                      )}
                    </motion.div>
                  </Link>
                )
            )}
          </div>

          <div className=" col-span-1">
            {otherClients.map(
              (client, index) =>
                client.count === 0 && (
                  <motion.div
                    key={client.name + index}
                    className=" border-gray-200 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(0.1 * index, 0.5),
                    }}
                  >
                    <h3 className=" text-navy-800 tracking-tight mb-4">
                      {client.name}
                    </h3>
                  </motion.div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherClientsGrid;
