import type React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
}

export function ContentSection({
  id,
  heading,
  content,
  linkText,
  linkUrl = "#",
  className = "",
  headingClassName = "",
  contentClassName = "",
  linkClassName = "",
  backgroundColor = "bg-white",
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={`md:py-16 py-5 ${backgroundColor} ${className}`}
    >
      <div className=" mx-auto px-4 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Heading - takes up 1/4 of the space on desktop */}
          <div className="md:col-span-1">
            <h2
              className={`text-2xl md:text-3xl font-semibold  md:font-bold text-gray-900 ${headingClassName}`}
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

            {linkText && (
              <Link
                href={linkUrl}
                className={`inline-flex items-center text-[#EB3300]/90 hover:text-black transition-colors ${linkClassName}`}
              >
                <span className="font-medium">{linkText}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
