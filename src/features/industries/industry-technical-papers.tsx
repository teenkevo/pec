import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

// Define the structure for technical papers
interface TechnicalPaper {
  date: string;
  type: "Link" | "PDF";
  title: string;
  url: string;
}

// Sample technical papers data
const technicalPapers: TechnicalPaper[] = [
  {
    date: "01 Jan 2022",
    type: "Link",
    title:
      "Optimisation of Predictions for Driven Piles Performance in Carbonate Silts for Offshore Structures in the Arabian Gulf",
    url: "#",
  },
  {
    date: "01 Jan 2022",
    type: "Link",
    title:
      "Towards Implementation of Artificial Intelligence in Predicting Pile Driving Blow Counts",
    url: "#",
  },
  {
    date: "01 Apr 2022",
    type: "PDF",
    title: "Making crewless offshore surveys a reality",
    url: "#",
  },
];

export function TechnicalPapers() {
  return (
    <section className="py-12 bg-white">
      <div className=" mx-auto px-4 md:px-14">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-navy-800">Publications</h2>
          <Link
            href="/technical-papers"
            className="text-[#EB3300]/90  hover:text-[#EB3300] flex items-center"
          >
            <span>All publications</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-0">
          {technicalPapers.map((paper, index) => (
            <div key={index}>
              <div className="border-t border-gray-200 py-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="w-full md:w-1/6 text-gray-500 mb-2 md:mb-0">
                    {paper.date}
                  </div>
                  <div className="w-full md:w-1/12 text-gray-400 mb-2 md:mb-0 flex items-center">
                    <span className="inline-block w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                    {paper.type}
                  </div>
                  <div className="w-full md:w-4/6 flex-grow">
                    <Link
                      href={paper.url}
                      className="text-navy-800 hover:text-[#EB3300] flex items-start justify-between group"
                    >
                      <span className="mr-4">{paper.title}</span>
                      <ExternalLink className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-[#EB3300]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
