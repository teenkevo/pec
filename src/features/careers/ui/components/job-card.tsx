"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Job {
  _id: string;
  title: string;
  industries?: string[];
  location?: string;
  type?: "full-time" | "part-time" | "contract" | "internship";
  postedDate?: string;
  slug?: string;
  summary?: string;
  isFeatured?: boolean;
}

interface JobCardProps {
  job: Job;
  index?: number;
}

export function JobCard({ job, index = 0 }: JobCardProps) {
  const typeLabels: Record<string, string> = {
    "full-time": "Full Time",
    "part-time": "Part Time",
    contract: "Contract",
    internship: "Internship",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link
        href={job.slug ? `/careers/${job.slug}` : "#"}
        className="block h-full"
      >
        <div className="h-full bg-white border border-gray-200 rounded-lg p-6 hover:border-[#EB3300] hover:shadow-lg transition-all duration-300 flex flex-col">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#EB3300] transition-colors">
                  {job.title}
                </h3>
                {job.industries && job.industries.length > 0 && (
                  <p className="text-sm text-gray-600 mb-3">
                    {job.industries.join(" • ")}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {job.location && (
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{job.location}</span>
                </div>
              )}
              {job.type && (
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{typeLabels[job.type] || job.type}</span>
                </div>
              )}
              {job.postedDate && (
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-gray-400" />
                  <span>Posted {job.postedDate}</span>
                </div>
              )}
            </div>

            {job.summary && (
              <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                {job.summary}
              </p>
            )}
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="inline-flex items-center text-[#EB3300] font-medium group-hover:gap-2 transition-all">
              <span>View details</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
