import { ClientsHero } from "@/features/clients/ui/components/clients-hero";
import FeaturedClient from "@/features/clients/ui/components/featured-client";
import OtherClientsGrid from "@/features/clients/ui/components/other-clients-grid";
import { HistorySection } from "@/features/home/ui/components/history-section";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";

interface Props {
  clientsData: {
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
  const { featuredClients, otherClients } = clientsData;

  return (
    <>
      <ClientsHero />
      <div id="featured-clients">
        {featuredClients.map((client, index) => (
          <div key={index}>
            <FeaturedClient
              key={index}
              clientName={client.name}
              allProjects={client.projects
                .filter(({ mainImage }) => !!mainImage)
                .slice(0, 4)}
            />
            <div className="border-t border-gray-200 group-hover:border-black group-hover:-translate-y-2 transition-all my-5"></div>
          </div>
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
