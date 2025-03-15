"use client";

import { BackgroundImage } from "./hero/background-image";
import { Navigation } from "./hero/navigation";
import { HeroContent } from "./hero/hero-content";

export default function Landing() {
  const navigationItems = [
    { label: "Industries", href: "#industries" },
    { label: "Expertise", href: "#expertise" },
    { label: "Careers", href: "#careers" },
    { label: "Investors", href: "#investors" },
    { label: "News", href: "#news" },
    { label: "About us", href: "#about" },
  ];

  return (
    <div className="relative h-[90vh] w-full">
      {/* Background Image with Gradient Overlays */}
      <BackgroundImage
        imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_60/v1742072212/IMG_7398_yum9au.webp"
        alt="Ocean view with offshore structures"
      />

      {/* Navigation and Content */}

      <Navigation items={navigationItems} />
      <HeroContent title="Engineering tomorrow's solutions today" />
    </div>
  );
}
