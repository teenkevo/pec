import { Navigation } from "@/components/layout/navigation";
import {
  CLIENTS_HERO_PROJECTS,
  FEATURED_CLIENTS_QUERY,
} from "@/features/clients/lib/queries";
import { ClientsLoadingSkeleton } from "@/features/clients/ui/components/clients-loading-skeleton";
import ClientsView from "@/features/clients/ui/views/clients-view";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";

const getClientsData = async () => {
  const { data: featuredProjects } = await sanityFetch({
    query: CLIENTS_HERO_PROJECTS,
  });
  const {
    data: clientProjects,
  }: {
    data: {
      name: string;
      count: number;
      projects: PROJECT_TYPE[];
    }[];
  } = await sanityFetch({
    query: FEATURED_CLIENTS_QUERY,
  });

  const featuredClients = clientProjects.filter(
    ({ count }: { count: number }) => count >= 3
  );

  const otherClients = clientProjects.filter(
    ({ count }: { count: number }) => count < 3
  );

  return {
    featuredProjects,
    featuredClients,
    otherClients,
  };
};

const Page = async () => {
  const clientsData = await getClientsData();

  return (
    <>
      <div className="relative w-full bg-black">
        <Navigation />
      </div>

      <Suspense fallback={<ClientsLoadingSkeleton />}>
        <ClientsView clientsData={clientsData} />
      </Suspense>
    </>
  );
};

export default Page;
