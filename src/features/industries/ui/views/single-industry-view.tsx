import { CareersSection } from "@/features/home/ui/components/careers-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IndustryView } from "../components/industry-view";
import { IndustryTopProjectBanner } from "../components/industry-top-project-banner";
import { NewsSection } from "@/components/sections/news-section";
import { IndustryContactSection } from "../components/industry-contact";
import { SINGLE_INDUSTRY_RESULT } from "../../lib/queries";

import { urlFor } from "@/sanity/lib/image";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";
import { ProjectsSection } from "@/features/projects/ui/components/projects-section";
import { ProjectsSection2 } from "@/features/projects/ui/components/projects-section-2";
import { BlogPosts } from "@/features/blog/lib/queries";
import { PublicationsSection } from "@/features/publications/ui/components/publications-section";
import { Publication } from "@/features/publications/lib/queries";

interface Props {
  industryData: {
    industry: SINGLE_INDUSTRY_RESULT;
    projects: PROJECT_TYPE[];
    posts: BlogPosts;
    publications: Publication[];
  };
}

export function SingleIndustryView({ industryData }: Props) {
  const { industry, projects, posts, publications } = industryData;

  const secondaryNavigationItems = [
    { title: "Our view", href: "our-view" },
    ...(projects && projects.length > 0
      ? [{ title: "Projects", href: "projects" }]
      : []),
    { title: "Publications", href: "publications" },
    ...(posts && posts.length > 0 ? [{ title: "News", href: "news" }] : []),
    { title: "Contact", href: "contact" },
  ];

  return (
    <>
      <HeroSection
        title={
          industry.subtitle ??
          "Connecting cities and communities with reliable transportation corridors"
        }
        page={industry.title}
        secondaryNavigationItems={secondaryNavigationItems}
        backgroundImage={
          industry?.mainImage
            ? urlFor(industry?.mainImage).format("webp").url()
            : "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_66/v1725968449/D1MqaczXcAUaOuB_o9n01n.webp"
        }
      />

      {/* What We Do Section */}
      <div id="our-view">
        <IndustryView
          id="our-view"
          heading={`Our view on ${industry?.title}`}
          content={industry?.ourView?.content}
          linkText="Read about our purpose"
          linkUrl="/about-us/what-we-do"
          industryLeadTitle={industry.ourView?.industryLead?.role}
          industryLeadImageUrl={
            industry.ourView?.industryLead?.image
              ? urlFor(industry.ourView?.industryLead?.image).url()
              : ""
          }
          industryLeadName={industry.ourView?.industryLead?.name}
        />
      </div>
      {projects && projects.length > 0 && (
        <div id={industry?.slug} className="px-4 md:px-14">
          <IndustryTopProjectBanner featuredProject={projects[0]} />
        </div>
      )}
      {projects && projects.length > 0 && (
        <>
          <div id="projects">
            <ProjectsSection
              projects={projects?.slice(1, 4)}
              title={`${industry?.title} projects`}
              linkText="Explore all"
            />
          </div>
          <div id="projects">
            <ProjectsSection2
              projects={projects?.slice(4, 6)}
              title={`${industry?.title} projects`}
              linkText={`All ${industry?.title} projects`}
            />
          </div>
        </>
      )}
      {/* Divider */}
      { publications && publications.length > 0 && 
        <>
          <div className="border-t border-gray-200 mt-16 hidden md:block"></div>
          <div id="publications">
            <PublicationsSection publications={publications} />
          </div>
        </>
      }
      {/* News Section */}
      {posts &&
        (posts.length > 0 && (
          <div id="news-highlights">
            <NewsSection allPosts={posts} />
          </div>
        ))}
      {/* Divider */}
      <div className="border-t border-gray-200 mt-16 hidden md:block"></div>
      <div id="contact">
        <IndustryContactSection
          industry={industry.title}
          contactPerson={{
            title: industry.ourView?.industryLead?.role,
            imageUrl: industry.ourView?.industryLead?.image
              ? urlFor(industry.ourView?.industryLead?.image)
                  .width(120)
                  .height(120)
                  .url()
              : "",
            name: industry.ourView?.industryLead?.name ?? "Eng Charles Wasswa",
          }}
        />
      </div>
      {/* Divider */}
      {/* <div className="border-t border-gray-200 my-10 hidden"></div> */}
      <div id="careers">
        <CareersSection />
      </div>
    </>
  );
}
