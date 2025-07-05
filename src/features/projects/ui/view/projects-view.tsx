import { CareersSection } from "@/features/home/ui/components/careers-section";
import { ContentSection } from "../../../../components/sections/content-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/features/projects/ui/components/projects-section";
import { IndustryBanner } from "../../../industries/ui/components/industry-banner";
import { INDUSTRIES } from "../../../industries/lib/queries";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";

interface Props {
  projects: PROJECT_TYPE[];
  industries: INDUSTRIES;
}

export default function ProjectsView({ projects, industries }: Props) {
  const secondaryNavigationItems = [
    { title: "Introduction", href: "introduction" },
    ...industries.map((industry) => ({
      title: industry.title,
      href: `${industry.slug}`,
    })),
  ];

  const introduction =
    "With our wide range of assets, skills, and solutions tailored to our clients, we serve customers in our 4 key markets: transport, water and sanitation, materials and geotechnics, and structures. Together with our partners and clients, we're pushing for excellence.";

  return (
    <>
      <HeroSection
        title="Projects across key industries"
        page="Projects"
        secondaryNavigationItems={secondaryNavigationItems}
        backgroundImage="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_69/v1750813534/artur-voznenko-k04f4Q-MwCc-unsplash_zbmmtv.webp"
      />

      {/* What We Do Section */}
      <div id="introduction">
        <ContentSection
          id="introduction"
          heading="Introduction"
          content={introduction}
          linkText="Read about our purpose"
          linkUrl="/about-us/what-we-do"
        />
      </div>
      {industries.map((industry) => (
        <div key={industry.slug} className="py-8 md:py-2">
          <div id={industry.slug} className="px-4 md:px-14">
            <IndustryBanner industry={industry} />
          </div>
          <div id="projects">
            <ProjectsSection
              projects={projects
                .filter((project) => industry.slug === project.industry.slug)
                .slice(0, 6)}
              title={`${industry.title} projects`}
              linkText="Explore all"
              linkUrl={`/projects/${industry.slug}`}
            />
          </div>
        </div>
      ))}

      {/* Careers Section */}
      <div id="careers">
        <CareersSection />
      </div>
    </>
  );
}
