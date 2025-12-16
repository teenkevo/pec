"use client";
import { PortableText } from "@portabletext/react";
import { ChevronLeft, MapPin, Briefcase, Clock } from "lucide-react";
import Link from "next/link";
import { SINGLE_JOB_RESULT } from "@/features/careers/lib/queries";
import { Navigation } from "@/components/layout/navigation";
import Markdown from "@/components/markdown";
import { useState } from "react";
import { ApplicationDrawer } from "../components/application-drawer";
import { Button } from "@/components/ui/button";

interface SingleJobViewProps {
  job: SINGLE_JOB_RESULT & { postedDateFormatted?: string };
}

export function SingleJobView({ job }: SingleJobViewProps) {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const typeLabels: Record<string, string> = {
    "full-time": "Full Time",
    "part-time": "Part Time",
    contract: "Contract",
    internship: "Internship",
  };

  const postedDate =
    job.postedDateFormatted ||
    (job.postedDate
      ? new Intl.DateTimeFormat("en-UG", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(new Date(job.postedDate))
      : undefined);

  return (
    <>
      <div className="relative w-full bg-black">
        <Navigation />
      </div>
      <section className="bg-black text-white py-16 relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/Pattern.png')",
            backgroundRepeat: "repeat",
            // filter: "brightness(0) invert(1)",
          }}
        />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/careers#positions"
            className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-6"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to open positions
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-3">
                Careers at PEC
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {job.title}
              </h1>
              {job.aboutTheRole && (
                <p className="text-base md:text-lg text-gray-200 max-w-2xl">
                  {job.aboutTheRole}
                </p>
              )}
              {job.industries && job.industries.length > 0 && (
                <p className="text-sm text-gray-300 mt-3">
                  {job.industries.join(" • ")}
                </p>
              )}
            </div>

            <div className="w-full md:w-auto md:text-right space-y-2">
              {postedDate && (
                <p className="text-sm text-gray-400">Posted {postedDate}</p>
              )}
              {job.type && (
                <p className="inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400 border border-orange-500/40 mt-2">
                  {typeLabels[job.type] || job.type}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f5f5f5]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[2fr,minmax(260px,1fr)] gap-10 lg:gap-16">
          <article>
            <div className="mb-8 space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Role overview
              </h2>
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
              {postedDate && (
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-gray-400" />
                  <span>Posted {postedDate}</span>
                </div>
              )}
            </div>

            {job.aboutTheTeam && (
              <div className="mt-8 space-y-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  About the team
                </h2>
                <p className="text-gray-700">{job.aboutTheTeam}</p>
              </div>
            )}

            {job.roles && job.roles.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  In this role, you will...
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {job.roles.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  You&apos;ll thrive in this role if you...
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {job.requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.aboutTheCompany && (
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  About PEC
                </h2>
                <div className="prose prose-slate max-w-none">
                  <Markdown markdown={job.aboutTheCompany} />
                </div>
              </div>
            )}
          </article>

          <aside className="lg:mt-4">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white shadow-sm p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Apply for this role
              </h2>
              <p className="text-sm text-gray-600">
                Share your CV, a brief introduction, and any relevant project
                experience that highlights why you&apos;re a great fit for PEC.
              </p>

              <Button
                onClick={() => setIsApplyOpen(true)}
                className="inline-flex w-full hover:bg-[#0f6b7a] items-center justify-center rounded-md bg-[#EB3300] px-4 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#EB3300]"
              >
                Submit your application
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <ApplicationDrawer
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        jobId={job._id}
        jobTitle={job.title}
      />
    </>
  );
}
