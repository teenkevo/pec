"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Download } from "lucide-react";
import { Publication } from "../../lib/queries";

interface Props {
  publications: Publication[];
}

export function PublicationsSection({ publications }: Props) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handlePublicationClick = (publication: Publication) => {
    if (publication.publicationType === "external" && publication.externalUrl) {
      window.open(publication.externalUrl, "_blank");
    } else if (
      publication.publicationType === "internal" &&
      publication.internalFile
    ) {
      window.open(publication.internalFile.asset.url, "_blank");
    }
  };

  return (
    <motion.div
      className="mx-auto px-4 md:px-14 pt-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Section Header */}
      <div className="mb-8">
        <span className="text-gray-700">Publications</span>
        <div className="flex justify-between items-end mt-2">
          <h2 className="text-3xl font-bold text-gray-900">
           Latest Research & Insights
          </h2>
          <Link
            href="/publications"
            className="text-[#EB3300]/90 hover:text-[#EB3300] flex items-center transition-colors flex-shrink-0"
          >
            <span>View all</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="">
        {publications.slice(0, 5).map((publication, index) => (
          <motion.div
            key={publication._id}
            className="group cursor-pointer"
            onClick={() => handlePublicationClick(publication)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-6 py-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => handlePublicationClick(publication)}
            >
              <div className="flex items-center justify-between md:hidden">
                <span className="text-sm text-gray-600">
                  {formatDate(publication.publicationDate)}
                </span>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 ${
                      publication.publicationType === "external"
                        ? "bg-gray-400 group-hover:bg-[#EB3301]"
                        : "bg-gray-400 group-hover:bg-[#EB3301]"
                    } transition-colors`}
                  />
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {publication.publicationType === "external"
                      ? "Link"
                      : "PDF"}
                  </span>
                </div>
              </div>

              <div className="hidden md:block flex-shrink-0 w-24">
                <span className="text-sm text-gray-600">
                  {formatDate(publication.publicationDate)}
                </span>
              </div>

              <div className="hidden md:flex flex-shrink-0 items-center gap-2">
                <div
                  className={`w-2 h-2 ${
                    publication.publicationType === "external"
                      ? "bg-gray-400 group-hover:bg-[#EB3301]"
                      : "bg-gray-400 group-hover:bg-[#EB3301]"
                  } transition-colors`}
                />
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {publication.publicationType === "external" ? "Link" : "PDF"}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium text-gray-900 group-hover:text-[#EB3301] transition-colors">
                  {publication.title}
                </h3>
                <p className="text-gray-600 mt-1">{publication.summary}</p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 self-start md:self-center">
                {publication.publicationType === "external" ? (
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#EB3301] transition-colors" />
                ) : (
                  <Download className="h-5 w-5 text-gray-400 group-hover:text-[#EB3301] transition-colors" />
                )}
              </div>
            </div>
            {index != 4 && <div className="border-b border-gray-200" />}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
