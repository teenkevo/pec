"use client";

import { motion } from "framer-motion";
import { JobCard } from "./job-card";
import { ContentSection } from "@/components/sections/content-section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { ALL_JOBS_RESULT } from "../../lib/queries";

interface OpenPositionsSectionProps {
  jobs?: ALL_JOBS_RESULT[];
}

export function OpenPositionsSection({ jobs = [] }: OpenPositionsSectionProps) {
  const filterJobsByType = (type: "internship" | "full-time" | "contract") =>
    jobs.filter((job) => job.type === type);

  return (
    <section id="positions" className="bg-white">
      <ContentSection
        id="positions"
        heading="Open Positions"
        content={
          <div>
            <p className="md:text-lg text-black leading-relaxed tracking-tight mb-8">
              We're always looking for talented individuals to join our team.
              Explore our current openings and find a role that matches your
              skills and passion.
            </p>
            {jobs.length > 0 ? (
              <Tabs defaultValue="all" className="mt-8">
                <TabsList>
                  <TabsTrigger value="all">All roles</TabsTrigger>
                  <TabsTrigger value="full-time">Full-time</TabsTrigger>
                  <TabsTrigger value="contract">Contract</TabsTrigger>
                  <TabsTrigger value="internship">Internships</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="grid grid-cols-1 gap-6 mt-4">
                    {jobs.map((job, index) => (
                      <JobCard
                        key={job._id}
                        job={{
                          _id: job._id,
                          title: job.title,
                          industries: job.industries,
                          location: job.location,
                          type: job.type,
                          postedDate: job.postedDate,
                          slug: job.slug,
                          summary: job.aboutTheRole,
                          isFeatured: job.isFeatured,
                        }}
                        index={index}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="internship">
                  {filterJobsByType("internship").length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 mt-4">
                      {filterJobsByType("internship").map((job, index) => (
                        <JobCard
                          key={job._id}
                          job={{
                            _id: job._id,
                            title: job.title,
                            industries: job.industries,
                            location: job.location,
                            type: job.type,
                            postedDate: job.postedDate,
                            slug: job.slug,
                            summary: job.aboutTheRole,
                            isFeatured: job.isFeatured,
                          }}
                          index={index}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 p-8 bg-gray-50 rounded-lg text-center">
                      <p className="text-gray-600">
                        We don't have any internship openings at the moment, but
                        we're always interested in hearing from emerging talent.{" "}
                        <a
                          href="mailto:careers@pec.co.ug"
                          className="text-[#EB3300] hover:underline"
                        >
                          Send us your resume
                        </a>
                        .
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="full-time">
                  {filterJobsByType("full-time").length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 mt-4">
                      {filterJobsByType("full-time").map((job, index) => (
                        <JobCard
                          key={job._id}
                          job={{
                            _id: job._id,
                            title: job.title,
                            industries: job.industries,
                            location: job.location,
                            type: job.type,
                            postedDate: job.postedDate,
                            slug: job.slug,
                            summary: job.aboutTheRole,
                            isFeatured: job.isFeatured,
                          }}
                          index={index}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 p-8 bg-gray-50 rounded-lg text-center">
                      <p className="text-gray-600">
                        We don't have any full-time openings at the moment, but
                        we're always interested in hearing from experienced
                        professionals.{" "}
                        <a
                          href="mailto:careers@pec.co.ug"
                          className="text-[#EB3300] hover:underline"
                        >
                          Send us your resume
                        </a>
                        .
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="contract">
                  {filterJobsByType("contract").length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 mt-4">
                      {filterJobsByType("contract").map((job, index) => (
                        <JobCard
                          key={job._id}
                          job={{
                            _id: job._id,
                            title: job.title,
                            industries: job.industries,
                            location: job.location,
                            type: job.type,
                            postedDate: job.postedDate,
                            slug: job.slug,
                            summary: job.aboutTheRole,
                            isFeatured: job.isFeatured,
                          }}
                          index={index}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 p-8 bg-gray-50 rounded-lg text-center">
                      <p className="text-gray-600">
                        We don't have any contract openings at the moment, but
                        we're always interested in partnering with skilled
                        specialists.{" "}
                        <a
                          href="mailto:careers@pec.co.ug"
                          className="text-[#EB3300] hover:underline"
                        >
                          Send us your resume
                        </a>
                        .
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            ) : (
              <div className="mt-8 p-8 bg-gray-50 rounded-lg text-center">
                <p className="text-gray-600">
                  We don't have any open positions at the moment, but we're
                  always interested in hearing from talented individuals.{" "}
                  <a
                    href="mailto:careers@pec.co.ug"
                    className="text-[#EB3300] hover:underline"
                  >
                    Send us your resume
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        }
      />
    </section>
  );
}
