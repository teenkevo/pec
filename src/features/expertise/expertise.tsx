import { HeroSection } from "@/components/sections/hero-section";
import { GraphicSection } from "../about-us/ui/components/graphic-section";
import { AreasOfExpertise } from "./areas-of-expertise";

export default function Expertise() {
  const secondaryNavigationItems = [
    { label: "Areas of expertise", href: "#areas-of-expertise" },
    { label: "Publications", href: "#publications" },
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
