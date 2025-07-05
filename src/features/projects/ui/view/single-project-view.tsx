"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  X,
  LocateIcon,
  Wallet,
  BriefcaseBusiness,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Navigation } from "@/components/layout/navigation";

import { NumericFormat } from "react-number-format";
import { SINGLE_PROJECT_RESULT } from "../../lib/queries";

import {
  type ProjectStageTitle,
  transformProjectData,
  type TransformedProject,
} from "../../lib/utils";
import { PROJECT_PHASES } from "@/sanity/schemaTypes/project";

interface Props {
  projectData: SINGLE_PROJECT_RESULT;
}

export function ProjectView({ projectData }: Props) {
  const project: TransformedProject = transformProjectData(projectData);

  const allStages: ProjectStageTitle[] = PROJECT_PHASES.map(
    (phase) => phase.title
  );

  // State for the expertise sheet
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [expandedStage, setExpandedStage] = useState<ProjectStageTitle | null>(
    null
  );
  const [currentExpertiseIndex, setCurrentExpertiseIndex] = useState(0);

  // Toggle stage expansion
  const toggleStageExpansion = (stage: ProjectStageTitle) => {
    if (expandedStage === stage) {
      setExpandedStage(null);
    } else {
      setExpandedStage(stage);
      setCurrentExpertiseIndex(0);
    }
  };

  // Navigate between expertise areas
  const navigateExpertise = (direction: "prev" | "next") => {
    if (!expandedStage) return;

    const expertiseCount = project.stageDetails[expandedStage].expertise.length;

    if (direction === "prev") {
      setCurrentExpertiseIndex(
        (prev) => (prev - 1 + expertiseCount) % expertiseCount
      );
    } else {
      setCurrentExpertiseIndex((prev) => (prev + 1) % expertiseCount);
    }
  };

  // Get current expertise
  const getCurrentExpertise = () => {
    if (!expandedStage) return null;
    const expertise = project.stageDetails[expandedStage].expertise;
    if (expertise.length === 0) return null;
    return expertise[currentExpertiseIndex];
  };

  return (
    <>
      <div className="relative w-full bg-black">
        <Navigation />
      </div>
      <div className=" relative">
        {/* Hero Section */}
        <div className="px-4 md:px-14 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text */}
            <div>
              <div className="mb-4">
                <span className="inline-block text-navy-800">
                  Industry: {project.industry}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-semibold md:font-semibold text-navy-800 mb-6">
                {project.title}
              </h1>
              <div className="flex space-x-2 text-navy-800 border-t border-gray-300 pt-4 mt-8">
                <LocateIcon />
                <p>
                  <span>{project.location}</span>
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Client Info and Summary */}
        <div className="px-4 md:px-14 py-8 border-t border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Client Info */}
            <div>
              <div className="flex space-x-2 text-navy-800">
                <BriefcaseBusiness />
                <h2 className="text-navy-800 font-bold mb-1">Client</h2>
              </div>
              <p className="text-navy-800 tracking-tight">
                {project.clientName}
              </p>
              {project.funder && (
                <>
                  <div className="flex space-x-2 text-navy-800 mt-6">
                    <Wallet />
                    <h2 className="text-navy-800 font-bold mb-1">Funder</h2>
                  </div>
                  <p className="text-navy-800 tracking-tight">
                    {project.funder}
                  </p>
                </>
              )}
              {/* TODO: What if value of services is not given? */}
              {project.valueOfServices && (
                <>
                  <div className="flex space-x-2 text-navy-800 mt-6">
                    <DollarSign />
                    <h2 className="text-navy-800 font-bold mb-1">
                      Value of services
                    </h2>
                  </div>

                  <NumericFormat
                    thousandSeparator={true}
                    displayType="text"
                    prefix={project.currency + " "}
                    value={project.valueOfServices}
                  />
                </>
              )}
              {/* TODO: What if value of services is not given? */}
              {project.startDate && (
                <>
                  <div className="flex space-x-2 text-navy-800 mt-6">
                    <Calendar />
                    <h2 className="text-navy-800 font-bold mb-1">Start date</h2>
                  </div>

                  <p className="text-navy-800 tracking-tight">
                    {new Date(project.startDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                </>
              )}
            </div>

            {/* Project Summary */}
            <div className="md:col-span-3">
              <p className="text-navy-800 tracking-tight">
                {project.clientNarrative}
              </p>
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="px-4 md:px-14 py-8 border-t border-gray-300">
          <button
            className="hidden text-navy-800 hover:text-[#EB3300] my-6 underline text-sm md:flex items-center"
            onClick={() => setIsSheetOpen(true)}
          >
            Show full process
          </button>
          {/* Horizontal Timeline for Medium and Large screens */}
          <div className="relative hidden md:block">
            {/* Timeline Bar */}
            <div className="h-0.5 bg-black absolute top-3 left-0 right-0 z-0"></div>

            {/* Timeline Stages */}
            <div className="flex justify-between relative z-10">
              {allStages.map((stage, index) => {
                const isActive = stage === project.activeStage;

                return (
                  <div key={index} className="flex flex-col items-center w-1/5">
                    <div
                      className={`w-6 h-6 rounded-full border-2 ${
                        isActive
                          ? "bg-black border-black"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      {isActive && (
                        <div className="w-2 h-2 bg-white rounded-full m-auto mt-1.5"></div>
                      )}
                    </div>
                    <div
                      className={`text-sm mt-4 font-semibold ${isActive ? "text-navy-300" : "text-gray-400"}`}
                    >
                      {stage}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vertical Timeline for Small screens */}
          <div className="md:hidden">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-black z-0"></div>

              {/* Timeline Stages */}
              <div className="space-y-8 relative z-10">
                {allStages.map((stage, index) => {
                  const isActive = stage === project.activeStage;

                  return (
                    <div key={index} className="flex items-start">
                      <div
                        className={`w-6 h-6 flex-shrink-0 border-2 ${
                          isActive
                            ? "bg-black border-black"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        {isActive && (
                          <div className="w-2 h-2 bg-white m-auto mt-1.5"></div>
                        )}
                      </div>
                      <div
                        className={`ml-4 text-sm font-semibold ${isActive ? "text-navy-800" : "text-gray-400"}`}
                      >
                        {stage}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button
            className="md:hidden text-navy-800 hover:text-[#EB3300] my-6 underline text-sm flex items-center"
            onClick={() => setIsSheetOpen(true)}
          >
            Show full process
          </button>
        </div>

        {/* Challenge Section */}
        <div className="px-4 md:px-14 py-12 border-t border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-navy-800">Challenge</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-navy-800 tracking-tight mb-4">
                {project.challenge}
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="px-4 md:px-14 py-12 border-t border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-navy-800">Solution</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-navy-800 mb-4 tracking-tight">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Project Images Grid */}
        <div className="px-4 md:px-14 py-12 border-t border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.projectImages &&
              project.projectImages.map(({ src, alt, description }, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={alt || `${project.title} image`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-white py-4">
                    <p className="text-navy-800 text-sm">{description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Expertise Sheet */}
        {isSheetOpen && (
          <div className="fixed inset-0 bg-black/30 z-50 flex justify-end">
            <div className="bg-white w-full max-w-xl overflow-y-auto animate-slide-in-right">
              {/* Sheet Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 className="text-xl md:text-2xl text-gray-600 tracking-tight font-bold">
                  Expertise applied in this project
                </h2>
                <button
                  onClick={() => setIsSheetOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Sheet Content */}
              <div className="p-6">
                {allStages.map((stage, index) => {
                  const stageDetails = project.stageDetails[stage];
                  const isActive = stage === project.activeStage;
                  const isExpanded = stage === expandedStage;
                  const hasExpertise =
                    stageDetails.isInProject &&
                    stageDetails.expertise.length > 0;
                  const expertiseCount = stageDetails.expertise.length;

                  return (
                    <div
                      key={index}
                      className="border-b border-gray-200 py-6 last:border-b-0"
                    >
                      {/* Stage Header */}
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-400 mr-2">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`font-semibold ${isActive ? "text-navy-800" : "text-gray-400"}`}
                          >
                            {stage}
                          </span>
                        </div>

                        <div className="flex items-center">
                          {stageDetails.isInProject ? (
                            <span className="text-sm text-black mr-4">
                              {expertiseCount === 1
                                ? "1 area of expertise"
                                : `${expertiseCount} areas of expertise`}
                            </span>
                          ) : (
                            <span className="text-sm text-gray-400 mr-4">
                              Not in this project
                            </span>
                          )}

                          {hasExpertise && (
                            <button
                              onClick={() => toggleStageExpansion(stage)}
                              className="border border-gray-300 w-8 h-8 flex items-center justify-center"
                            >
                              {isExpanded ? (
                                <Minus className="h-4 w-4" />
                              ) : (
                                <Plus className="h-4 w-4" />
                              )}
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && hasExpertise && (
                        <div className="mt-6">
                          {/* Expertise Image */}
                          <div className="relative h-64 w-full mb-4">
                            <Image
                              src={
                                getCurrentExpertise()?.image ||
                                "/placeholder.svg"
                              }
                              alt={getCurrentExpertise()?.title || "Expertise"}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Expertise Title */}
                          <div className="mb-4">
                            <span className="text-sm text-gray-500">
                              • Expertise
                            </span>
                            <h3 className="text-xl font-medium text-navy-800 mt-1">
                              {getCurrentExpertise()?.title}
                            </h3>
                          </div>

                          {/* Navigation Arrows */}
                          {expertiseCount > 1 && (
                            <div className="flex mt-4 mb-6">
                              <button
                                onClick={() => navigateExpertise("prev")}
                                className="border border-gray-300 w-10 h-10 flex items-center justify-center mr-2"
                              >
                                <ChevronLeft className="h-5 w-5" />
                              </button>
                              <button
                                onClick={() => navigateExpertise("next")}
                                className="border border-gray-300 w-10 h-10 flex items-center justify-center"
                              >
                                <ChevronRight className="h-5 w-5" />
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
