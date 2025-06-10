import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

//TODO: work on per page metadata below, this layout is shared
export const metadata: Metadata = {
  title: "Professional Engineering Consultants Limited",
  description:
    "PEC transforms industries with innovative civil engineering and geotechnical solutions.",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
