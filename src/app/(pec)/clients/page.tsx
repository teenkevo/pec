import { Navigation } from "@/components/layout/navigation";
import { CLIENTS_HERO_PROJECTS } from "@/features/clients/lib/queries";
import { ClientsHero } from "@/features/clients/ui/components/clients-hero";

import { cn } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import Image from "next/image";

import React from "react";

const Page = async () => {
  const { data: featuredProjects } = await sanityFetch({
    query: CLIENTS_HERO_PROJECTS,
  });
  const stats = [
    {
      title: "Infrastrucure Projects",
      value: "50+",
      icon: "/client-icons/infrastructure.svg",
    },
    {
      title: "Years of Experience",
      value: "17+",
      icon: "/client-icons/experience.svg",
    },

    {
      title: "Water engineering projects",
      value: "13",
      icon: "/client-icons/water.svg",
    },
    {
      title: "Cumulative contract Amount",
      value: "USD 26,500,000+",
      icon: "/client-icons/money.svg",
    },
    {
      title: "Roads designed and supervised",
      value: "1000+ kms",
      icon: "/client-icons/road.svg",
    },
  ];
  return (
    <>
      <div className="relative w-full bg-black">
        <Navigation />
      </div>

      <ClientsHero featuredProjects={featuredProjects} />
    </>
  );
};

export default Page;
