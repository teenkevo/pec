import { ClientsHero, type FeaturedProjectsData } from "@/features/clients/ui/components/clients-hero";
import FeaturedClient from "@/features/clients/ui/components/featured-client";
import OtherClientsGrid from "@/features/clients/ui/components/other-clients-grid";
import { HistorySection } from "@/features/home/ui/components/history-section";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";

interface Props {
  clientsData: {
    featuredProjects: FeaturedProjectsData;
    featuredClients: {
      name: string;
      count: number;
      projects: PROJECT_TYPE[];
    }[];
    otherClients: {
      name: string;
      count: number;
      projects: PROJECT_TYPE[];
    }[];
  };
}

export default function ClientsView({ clientsData }: Props) {
  const { featuredProjects, featuredClients, otherClients } = clientsData;

  return (
    <>
      <ClientsHero featuredProjects={featuredProjects} />
      <div id="featured-clients">
        {featuredClients.map((client, index) => (
          <FeaturedClient
            key={index}
            clientName={client.name}
            allProjects={client.projects
              .filter(({ mainImage }) => !!mainImage)
              .slice(0, 4)}
          />
        ))}
      </div>
      <div id="all">
        <OtherClientsGrid otherClients={otherClients} />
      </div>
      <div id="history">
        <HistorySection />
      </div>
    </>
  );
}