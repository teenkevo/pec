import { Navigation } from "@/components/layout/navigation";
import { FEATURED_CLIENTS_QUERY } from "@/features/clients/lib/queries";
import { ClientsLoadingSkeleton } from "@/features/clients/ui/components/clients-loading-skeleton";
import ClientsView from "@/features/clients/ui/views/clients-view";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";

const getClientsData = async () => {
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
    ({ count }: { count: number }) => count >= 2
  );

  const otherClients = clientProjects.filter(
    ({ count }: { count: number }) => count < 2
  );

  return {
    featuredClients,
    otherClients,
  };
};

const Page = async () => {
  const clientsData = await getClientsData();

  return (
    <Suspense fallback={<ClientsLoadingSkeleton />}>
      <>
        <div className="relative w-full bg-black">
          <Navigation />
        </div>

        <ClientsView clientsData={clientsData} />
      </>
    </Suspense>
  );
};

export default Page;
