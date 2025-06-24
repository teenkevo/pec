"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, X } from "lucide-react";

interface Props {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  availableYears: number[];
  availableIndustries: string[];
  selectedIndustry: string;
  setSelectedIndustry: (industry: string) => void;
}

const Filters = ({
  selectedYear,
  setSelectedYear,
  availableYears,
  availableIndustries,
  selectedIndustry,
  setSelectedIndustry,
}: Props) => {
  const hasActiveFilters = selectedYear !== "all" || selectedIndustry !== "all";

  const clearFilters = () => {
    setSelectedYear("all");
    setSelectedIndustry("all");
  };

  return (
    <div className="w-full border-b mt-12 sticky top-0 z-50 border-gray-200 bg-white">
      <div className="py-4">
        <nav className="flex items-center overflow-x-auto">
          <div className="whitespace-nowrap py-4 pr-4 pl-0 font-semibold text-black tracking-tight flex items-center">
            Filter by
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-white text-gray-700 border-gray-300 hover:text-[#EB3301] hover:border-[#EB3301] focus:ring-0 focus:ring-[#EB3301] focus:ring-offset-2 focus:outline-none py-4 px-4 transition-colors font-medium flex tracking-tight items-center border rounded">
                {selectedYear === "all" ? "All years" : selectedYear}
                <ChevronDown className="ml-2 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white">
                <DropdownMenuItem
                  onClick={() => setSelectedYear("all")}
                  className="hover:bg-gray-50"
                >
                  All years
                </DropdownMenuItem>
                {availableYears.map((year) => (
                  <DropdownMenuItem
                    key={year}
                    onClick={() => setSelectedYear(year.toString())}
                    className="hover:bg-gray-50"
                  >
                    {year}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="bg-white text-gray-700 border-gray-300 hover:text-[#EB3301] hover:border-[#EB3301] focus:ring-0 focus:ring-[#EB3301] focus:ring-offset-2 focus:outline-none py-4 px-4 transition-colors font-medium flex tracking-tight items-center border rounded">
                {selectedIndustry === "all"
                  ? "All industries"
                  : selectedIndustry}
                <ChevronDown className="ml-2 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white max-w-64">
                <DropdownMenuItem
                  onClick={() => setSelectedIndustry("all")}
                  className="hover:bg-gray-50"
                >
                  All industries
                </DropdownMenuItem>
                {availableIndustries.map((industry) => (
                  <DropdownMenuItem
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className="hover:bg-gray-50"
                  >
                    {industry}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {hasActiveFilters && (
              <Button
                onClick={clearFilters}
                variant="ghost"
                className="bg-white h-full text-gray-700 border-gray-300 hover:text-[#EB3301] hover:border-[#EB3301] focus:ring-0 focus:ring-[#EB3301] focus:ring-offset-2 focus:outline-none py-4 px-4 transition-colors font-medium flex tracking-tight items-center rounded"
              >
                <X className="mr-2 h-4 w-4" />
                Clear filters
              </Button>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Filters;
