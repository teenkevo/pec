"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Download, ChevronDown } from "lucide-react";

import { type Publication } from "../../lib/queries";
import Filters from "../components/filters";

interface Props {
  publications: Publication[];
}

export function PublicationsView({ publications }: Props) {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");

  const availableYears = useMemo(() => {
    const years = publications
      .map((pub) => new Date(pub.publicationDate).getFullYear())
      .filter((year, index, arr) => arr.indexOf(year) === index)
      .sort((a, b) => b - a);

    return years;
  }, [publications]);

  const availableIndustries = useMemo(() => {
    const industries = publications
      .filter((pub) => pub.industry?.title)
      .map((pub) => pub.industry!.title)
      .filter((industry, index, arr) => arr.indexOf(industry) === index)
      .sort();

    return industries;
  }, [publications]);

  const filteredPublications = useMemo(() => {
    let filtered = publications;

    if (selectedYear !== "all") {
      filtered = filtered.filter(
        (pub) =>
          new Date(pub.publicationDate).getFullYear().toString() ===
          selectedYear
      );
    }

    if (selectedIndustry !== "all") {
      filtered = filtered.filter(
        (pub) => pub.industry?.title === selectedIndustry
      );
    }

    return filtered;
  }, [publications, selectedYear, selectedIndustry]);

  const publicationsByYear = useMemo(() => {
    const grouped = filteredPublications.reduce(
      (acc, pub) => {
        const year = new Date(pub.publicationDate).getFullYear();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(pub);
        return acc;
      },
      {} as Record<number, Publication[]>
    );

    Object.keys(grouped).forEach((year) => {
      grouped[Number.parseInt(year)].sort(
        (a, b) =>
          new Date(b.publicationDate).getTime() -
          new Date(a.publicationDate).getTime()
      );
    });

    return grouped;
  }, [filteredPublications]);

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

  const sortedYears = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="space-y-8 isolate">
      <Filters
        availableYears={availableYears}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        setSelectedIndustry={setSelectedIndustry}
        selectedIndustry={selectedIndustry}
        availableIndustries={availableIndustries}
      />
      {/* Publications by Year */}
      {sortedYears.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No publications found for the selected filters.
          </p>
        </div>
      ) : (
        sortedYears.map((year, yearIndex) => (
          <div key={year} className="space-y-6">
            {yearIndex > 0 && <div className="border-t border-gray-200 pt-8" />}

            <h2 className="text-2xl font-bold text-gray-900">{year}</h2>

            <div className="space-y-0">
              {publicationsByYear[year].map((publication, index) => (
                <div key={publication._id}>
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
                        {publication.publicationType === "external"
                          ? "Link"
                          : "PDF"}
                      </span>
                    </div>

                   
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-medium text-gray-900 group-hover:text-[#EB3301] transition-colors">
                        {publication.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {publication.summary}
                      </p>
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

                  {index < publicationsByYear[year].length - 1 && (
                    <div className="border-b border-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
