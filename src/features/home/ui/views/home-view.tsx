import { INDUSTRIES } from "@/features/industries/lib/queries";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";
import { HeroSection } from "@/components/sections/hero-section";
import { ContentSection } from "@/components/sections/content-section";
import { IndustriesSection } from "../components/industries-section";
import { ProjectsSection } from "@/features/projects/ui/components/projects-section";
import { OrganisationSection } from "../components/organization-section";
import { CareersSection } from "../components/careers-section";
import { NewsSection } from "../../../../components/sections/news-section";
import { HistorySection } from "../components/history-section";
import { BlogPosts } from "@/features/blog/lib/queries";

interface Props {
  homeData: {
    projects: PROJECT_TYPE[];
    industries: INDUSTRIES;
    posts: BlogPosts;
  };
}

function projectPerIndustry(projects: PROJECT_TYPE[]): PROJECT_TYPE[] {
  const seenIndustries = new Set<string>();
  const latestProjects = projects.filter((project) => {
    const industrySlug = project.industry.slug;
    if (seenIndustries.has(industrySlug)) {
      return false;
    }
    seenIndustries.add(industrySlug);
    return true;
  });

  return latestProjects;
}

export default function HomeView({ homeData }: Props) {
  const { projects, industries, posts } = homeData;

  const slides = {
    content: projectPerIndustry(projects).map(({ title, slug, industry }) => {
      return {
        title: industry.subtitle,
        description: title,
        projectSlug: slug,
        industry: industry.title,
        industrySlug: industry.slug,
      };
    }),
    images: projectPerIndustry(projects).map(({ mainImage, title }) => {
      return { alt: title, asset: mainImage };
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
    "Professional Engineering Consultants (PEC) is a limited liability Company, established in Uganda in 2008 by a team of six (6) extensively skilled practicing consulting professionals. Since then, PEC has grown into one of the leading design, engineering and project management consultancies in Uganda, with an establishment of more than 50 staff some of whom have joined its shareholding. PEC’s success is as a result of the firm’s deliberate emphasis on professionalism, quality services and customer satisfaction.";

  return (
    <>
      <HeroSection
        secondaryNavigationItems={secondaryNavigationItems}
        slides={slides}
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
      <div id="industries" className="px-4 md:px-14 py-16 md:py-0">
        <IndustriesSection industries={industries} />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects.slice(0, 3)}
          title="Projects"
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
          <NewsSection posts={posts} />
        </div>
      )}
      <div id="history">
        <HistorySection />
      </div>
    </>
  );
}
