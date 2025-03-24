"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-2xl md:text-5xl font-bold mb-4">
        Page Under Development
      </h1>
      <p className="md:text-lg text-gray-600 mb-6 tracking-tight">
        We're working hard to bring this page to life. Check back soon!
      </p>
      <Button onClick={() => router.push("/")}>Return Home</Button>
    </div>
  );
}
