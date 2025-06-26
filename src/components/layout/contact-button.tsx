"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDrawer } from "./contact-drawer";

export function ContactButton() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsContactOpen(true)}
        className="bg-red-500 hover:bg-[#0f6b7a] text-white flex items-center gap-2"
      >
        <MessageCircle className="h-4 w-4" />
        Reach out to us
      </Button>
      {/* Contact Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
