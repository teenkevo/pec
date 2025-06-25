import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Professional Engineering Consultants Limited",
  description:
    "PEC transforms industries with innovative civil engineering and geotechnical solutions.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
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
