"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Publication } from "@/features/publications/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "date-fns";

interface Props {
  companyProfile: Publication;
}

export function CompanyProfileSection({ companyProfile }: Props) {
  const handlePublicationClick = (publication: Publication) => {
    if (publication.publicationType === "external" && publication.externalUrl) {
      window.open(publication.externalUrl, "_blank");
    } else if (
      publication.publicationType === "internal" &&
      publication.internalFile
    ) {
      window.open(publication?.internalFile?.asset?.url, "_blank");
    }
  };

  const companyProfileSizeInMB = companyProfile?.internalFile?.asset?.size
    ? (companyProfile?.internalFile?.asset?.size / 1024 / 1024).toFixed(1)
    : 0;

  const fileType = companyProfile?.internalFile?.asset?.mimeType;

  return (
    <section className="py-16 px-4 md:px-14 bg-white">
      {/* Laptop Frame */}
      <div className="relative">
        {/* Laptop Screen */}
        <div className="bg-slate-800 rounded-t-2xl p-3 relative">
          {/* Screen Bezel */}
          <div className="bg-black rounded-xl p-1">
            {/* Actual Screen Content */}
            <div className="bg-white rounded-lg overflow-hidden relative min-h-[500px]">
              {/* Browser Chrome */}
              <div className="bg-slate-100 px-4 py-3 border-b flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1 text-sm text-slate-600 border">
                    company-profile.pdf
                  </div>
                </div>
              </div>

              <div className="bg-white p-6">
                {/* Grid Layout - Single column on small screens, two columns on larger screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-[350px]">
                  {/* Image Column */}
                  <div className="order-2 lg:order-1">
                    <div
                      onClick={() => handlePublicationClick(companyProfile)}
                      className="hover:scale-[1.01] transition-all duration-300 rounded-lg overflow-hidden shadow-lg bg-gray-50"
                    >
                      <img
                        src={
                          urlFor(companyProfile?.coverImage ?? "")
                            .format("webp")
                            .url() ||
                          "/placeholder.svg?height=300&width=400&query=modern office building"
                        }
                        alt="Company Profile Cover"
                        className="w-full h-auto object-contain max-h-[350px]"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="order-1 lg:order-2 space-y-4">
                    <div>
                      <h2 className="text-2xl lg:text-8xl font-bold text-gray-900 mb-3">
                        {companyProfile?.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                        {companyProfile?.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="p-6 bg-slate-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <Button
                        onClick={() => handlePublicationClick(companyProfile)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Profile
                      </Button>

                      <p className="text-xs mt-4 text-slate-600">
                        Last updated:{" "}
                        {formatDate(
                          companyProfile?.publicationDate ?? "",
                          "MMM d, yyyy"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    {/* <p className="text-sm text-slate-600">{fileType} format</p> */}
                    <p className="text-xs text-slate-500">
                      {companyProfileSizeInMB} MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
