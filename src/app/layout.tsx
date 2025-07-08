import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SanityLive } from "@/sanity/lib/live";
import Script from "next/script";

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
      <head>
        {/* Injects into <head> and executes before hydration */}
        <Script
          src="https://global.ketchcdn.com/web/v3/config/pec/website_smart_tag/boot.js"
          strategy="beforeInteractive"
        />
      </head>
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
