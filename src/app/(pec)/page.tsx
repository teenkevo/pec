import { Metadata } from "next";
import Landing from "@/features/landing/landing";

export const metadata: Metadata = {
  title: "Professional Engineering Consultants (PEC) Limited",
  description:
    "PEC transforms industries with innovative civil engineering and geotechnical solutions.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
  openGraph: {
    title: "Professional Engineering Consultants Limited",
    description:
      "PEC transforms industries with innovative civil engineering and geotechnical solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/teenkevo-cloud/image/upload/v1742780530/og-pec_1_nuscap.png",
      },
    ],
  },
};

export default function Page() {
  return <Landing />;
}
