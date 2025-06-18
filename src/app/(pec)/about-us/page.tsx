import AboutView from "@/features/about-us/ui/views/about-view";
import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";
import { AboutUs } from "../../../../sanity.types";

export default async function Page() {
  const { data }:{
    data:AboutUs
  } = await sanityFetch({
    query: `*[_type == "aboutUs"][0]`,
  });

  console.log(data)
  return (
    <Suspense fallback={<p>Loading...data</p>}>
      <AboutView aboutData={data} />
    </Suspense>
  );
}
