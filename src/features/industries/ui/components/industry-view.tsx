import type React from "react";

import { IndustryLead } from "./industry-lead";

interface ContentSectionProps {
  id?: string;
  heading: string;
  content: string | React.ReactNode;
  linkText?: string;
  linkUrl?: string;
  className?: string;
  headingClassName?: string;
  contentClassName?: string;
  linkClassName?: string;
  backgroundColor?: string;
  industryLeadTitle: string;
  industryLeadImageUrl: string;
  industryLeadName: string;
}

export function IndustryView({
  id,
  heading,
  content,
  className = "",
  headingClassName = "",
  contentClassName = "",
  backgroundColor = "bg-white",
  industryLeadTitle,
  industryLeadImageUrl,
  industryLeadName,
}: ContentSectionProps) {
  return (
    <section id={id} className={`py-10 ${backgroundColor} ${className}`}>
      <div className=" mx-auto px-4 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Heading - takes up 1/4 of the space on desktop */}
          <div className="md:col-span-1">
            <h2
              className={`text-2xl md:text-3xl font-bold text-gray-900 ${headingClassName}`}
            >
              {heading}
            </h2>
          </div>

          {/* Content - takes up 3/4 of the space on desktop */}
          <div className="md:col-span-3 max-w-2xl">
            {typeof content === "string" ? (
              <p
                className={`md:text-lg text-black leading-relaxed tracking-tight mb-6 ${contentClassName}`}
              >
                {content}
              </p>
            ) : (
              <div className={`mb-6 ${contentClassName}`}>{content}</div>
            )}

            <IndustryLead
              title={industryLeadTitle}
              imageUrl={industryLeadImageUrl}
              name={industryLeadName}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
