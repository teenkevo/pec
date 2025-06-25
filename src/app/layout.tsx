import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/components/query-provider";
import { SanityLive } from "@/sanity/lib/live";
import { Suspense } from "react";
import Loading from "./_loading";
import ScrollToTop from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: "Professional Engineering Consultants Limited",
  description:
    "PEC transforms industries with innovative civil engineering and geotechnical solutions.",
};

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      style={{ scrollBehavior: "smooth" }}
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${spaceGrotesk.className} antialiased`}>
        {/* <Suspense fallback={<Loading />}>
          <QueryProvider> */}
        {/* <ScrollToTop /> */}
        {children}
        <SanityLive />
        {/* </QueryProvider>
        </Suspense> */}
        <Toaster />
      </body>
    </html>
  );
}
