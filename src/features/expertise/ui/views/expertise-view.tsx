import { HeroSection } from "@/components/sections/hero-section";
import { GraphicSection } from "@/features/about-us/ui/components/graphic-section";
import { AreasOfExpertise } from "../components/areas-of-expertise";
import { PublicationsSection } from "@/features/publications/ui/components/publications-section";
import { Publication } from "@/features/publications/lib/queries";

interface Props{
  publications: Publication[]
}

export default function ExpertiseView({publications}:Props) {
  const secondaryNavigationItems = [
    { title: "Areas of expertise", href: "areas-of-expertise" },
    { title: "Publications", href: "publications" },
  ];

  return (
    <>
      <HeroSection
        title="PEC: An all-round quality civil engineering consultancy"
        page="Expertise"
        secondaryNavigationItems={secondaryNavigationItems}
        backgroundImage="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_55/v1742876740/william-topa-x9AZgR25G-k-unsplash_pfi9zf.webp"
      />

      {/* What We Do Section */}
      <div id="areas-of-expertise">
        <AreasOfExpertise />
      </div>

      <div id="publications">
        <PublicationsSection publications={publications} />
      </div>

      <GraphicSection
        imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_61/v1742770900/How-Solar-Panels-Are-Beneficial-for-the-Environment-2048x1365_i2ppd3.webp"
        section="About us"
        title="What we do at PEC"
        linkText="Learn more"
        linkUrl="/about-us"
      />
    </>
  );
}
