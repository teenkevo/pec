"use client";

import * as React from "react";
import {
  AudioWaveform,
  Briefcase,
  Cable,
  Command,
  DatabaseZap,
  FileCheck2,
  FileStack,
  FlaskConical,
  Frame,
  GalleryVerticalEnd,
  LayoutList,
  Map,
  PieChart,
  Rocket,
  ScrollText,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";

import { NavGroup } from "./nav-group";
import { NavUser } from "./nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Logo } from "./logo";
import { ToggleLightDark } from "./toggle-light-dark";

// This is sample data.
const data = {
  user: {
    name: "Kevin Mugumya",
    email: "luwembamugumya@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navCore: [
    {
      title: "Projects",
      url: "/projects",
      icon: FileStack,
      isActive: false,
      items: [
        {
          title: "Create new",
          url: "/projects/create",
        },
      ],
    },

    {
      title: "Labs",
      url: "#",
      icon: FlaskConical,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Equipment",
      url: "#",
      icon: Cable,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Repository",
      url: "#",
      icon: DatabaseZap,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
    {
      title: "Staff",
      url: "#",
      icon: Users,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
    {
      title: "Billing",
      url: "#",
      icon: Wallet,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
    {
      title: "Workflows",
      url: "#",
      icon: FileCheck2,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
    {
      title: "Security",
      url: "#",
      icon: ShieldCheck,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
  ],
  navCustomer: [
    {
      title: "Clients",
      url: "/clients",
      icon: Briefcase,

      items: [
        {
          title: "Create new",
          url: "/projects/create",
        },
      ],
    },
    {
      title: "Services",
      url: "#",
      icon: LayoutList,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Reporting",
      url: "#",
      icon: ScrollText,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo icon={Rocket} name="GIMS by GETLAB" />
      </SidebarHeader>
      <SidebarContent aria-describedby={undefined}>
        <NavGroup label="Internal" items={data.navCore} />
        <NavGroup label="Customer" items={data.navCustomer} />
      </SidebarContent>
      <SidebarFooter>
        <ToggleLightDark />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
