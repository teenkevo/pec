import { INDUSTRIES } from "@/features/industries/lib/queries";
import {
  LATEST_INDUSTRY_PROJECT,
  PROJECT_TYPE,
} from "@/features/projects/lib/queries";
import { HeroSection } from "@/components/sections/hero-section";
import { ContentSection } from "@/components/sections/content-section";
import { IndustriesSection } from "../components/industries-section";
import { ProjectsSection } from "@/features/projects/ui/components/projects-section";
import { OrganisationSection } from "../components/organization-section";
import { CareersSection } from "../components/careers-section";
import { NewsSection } from "../../../../components/sections/news-section";
import { HistorySection } from "../components/history-section";
import { BlogPosts } from "@/features/blog/lib/queries";
import { SlideShowContent } from "@/components/sections/hero-section";

interface Props {
  homeData: {
    latestProjects: LATEST_INDUSTRY_PROJECT[];
    projects: PROJECT_TYPE[];
    industries: INDUSTRIES;
    posts: BlogPosts;
  };
}

export default function HomeView({ homeData }: Props) {
  const { latestProjects, projects, industries, posts } = homeData;

  const sortedLatestProjects = latestProjects
    .filter((project) => project.latestProject != null)
    .sort((a, b) =>
      (b.latestProject?.industry.title || "").localeCompare(
        a.latestProject?.industry.title || ""
      )
    );

  const slides = {
    content: sortedLatestProjects.map(({ latestProject }) => {
      return {
        title: latestProject?.industry.subtitle,
        description: latestProject?.title,
        projectSlug: latestProject?.slug,
        industry: latestProject?.industry.title,
        industrySlug: latestProject?.industry.slug,
      };
    }),
    images: sortedLatestProjects.map(({ latestProject }) => {
      return { alt: latestProject?.title, asset: latestProject?.mainImage };
    }),
  };

  const secondaryNavigationItems = [
    { title: "What we do", href: "what-we-do" },
    { title: "Our industries", href: "industries" },
    { title: "Projects", href: "projects" },
    { title: "Organisation", href: "organisation" },
    { title: "Careers", href: "careers" },
    { title: "News highlights", href: "news-highlights" },
    { title: "History", href: "history" },
  ];

  const whatWeDoContent =
    "Professional Engineering Consultants (PEC) is a limited liability Company, established in Uganda in 2008 by a team of five (5) extensively skilled practicing consulting professionals. Since then, PEC has grown into one of the leading design, engineering and project management consultancies in Uganda, with an establishment of more than 50 permanent staff some of whom have joined its shareholding. PEC's success is a result of the firm's deliberate emphasis on professionalism, quality services and customer satisfaction.";

  return (
    <>
      <HeroSection
        secondaryNavigationItems={secondaryNavigationItems}
        slides={slides as SlideShowContent}
        initialActiveItem="#what-we-do"
        isHome
      />

      <div id="what-we-do">
        <ContentSection
          id="what-we-do"
          heading="What we do"
          content={whatWeDoContent}
          linkText="Read more"
          linkUrl="/about-us"
        />
      </div>
      <div id="industries" className="px-4 md:px-14 pt-16 md:py-0">
        <IndustriesSection industries={industries} />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects}
          title="Latest projects"
          linkText="All projects"
        />
      </div>

      {/* Organisation Section */}
      <div id="organisation">
        <OrganisationSection />
      </div>

      {/* Careers Section */}
      <div id="careers">
        <CareersSection />
      </div>

      {/* News Section */}
      {posts && posts.length > 0 && (
        <div id="news-highlights">
          <NewsSection allPosts={posts} />
        </div>
      )}
      <div id="history">
        <HistorySection />
      </div>
    </>
  );
}
