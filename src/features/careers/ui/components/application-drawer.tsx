"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, User, FileText, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FileUpload } from "@/components/ui/file-upload";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ApplicationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  jobId: string;
  jobTitle: string;
}

export function ApplicationDrawer({
  isOpen,
  onClose,
  jobId,
  jobTitle,
}: ApplicationDrawerProps) {
  const [mounted, setMounted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [interviewDate, setInterviewDate] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name || !email || !resume) {
      setError("Name, email, and resume are required.");
      return;
    }

    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("phone", phone);
    form.append("linkedin", linkedin);
    form.append("portfolio", portfolio);
    form.append("additionalInfo", additionalInfo);
    form.append("jobId", jobId);
    if (interviewDate) {
      form.append("interviewDate", interviewDate);
    }
    if (resume) {
      form.append("resume", resume);
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/applicants", {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit application.");
      }

      setName("");
      setEmail("");
      setPhone("");
      setLinkedin("");
      setPortfolio("");
      setAdditionalInfo("");
      setResume(null);
      setInterviewDate("");
      onClose();
      setSuccessDialogOpen(true);
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!mounted) return null;

  const drawerPortal = createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-[520px] bg-white z-[95] flex flex-col shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4,
            }}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#128191] to-[#0f6b7a] text-white">
              <div>
                <h2 className="text-2xl font-bold">Apply for {jobTitle}</h2>
                <p className="text-white/80 text-sm mt-1">
                  Share your details and resume to get started.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close application form"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" />
                    Full name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+256 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    Resume / CV (PDF preferred)
                  </Label>
                  <FileUpload
                    multiple={false}
                    accept=".pdf,.doc,.docx"
                    maxSize={5}
                    onFilesChange={(files) => setResume(files[0] || null)}
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    LinkedIn
                  </Label>
                  <Input
                    id="linkedin"
                    type="url"
                    placeholder="https://www.linkedin.com/in/..."
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="portfolio"
                    className="flex items-center gap-2"
                  >
                    <Globe className="h-4 w-4 text-gray-500" />
                    Portfolio / Website
                  </Label>
                  <Input
                    id="portfolio"
                    type="url"
                    placeholder="https://your-portfolio.com"
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional information</Label>
                  <Textarea
                    className="text-sm"
                    id="additionalInfo"
                    placeholder="Share your motivation, context, or anything else you'd like us to know."
                    rows={4}
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                  />
                </div>

                {/* <div className="space-y-2">
                  <Label htmlFor="interviewDate">
                    If scheduling, proposed interview date/time (optional)
                  </Label>
                  <Input
                    id="interviewDate"
                    type="datetime-local"
                    value={interviewDate}
                    onChange={(e) => setInterviewDate(e.target.value)}
                  />
                </div> */}

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md p-3">
                    {error}
                  </p>
                )}
                <div className="pt-2 flex gap-3">
                  <Button
                    type="submit"
                    className="bg-[#EB3300] hover:bg-[#c52a00] text-white"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit application"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    disabled={submitting}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );

  return (
    <>
      {drawerPortal}
      <Dialog
        open={successDialogOpen}
        onOpenChange={(open) => setSuccessDialogOpen(open)}
      >
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="h-14 w-14 rounded-full bg-emerald-50 flex items-center justify-center">
              <Image
                src="/sent.svg"
                alt="Application sent"
                width={32}
                height={32}
              />
            </div>
            <DialogHeader className="items-center">
              <DialogTitle className="text-2xl mb-4 font-bold">
                Application received
              </DialogTitle>
              <DialogDescription className="text-center mb-4 text-black">
                Thank you for applying for {jobTitle}. We&apos;ve received your
                application. Our team will review it shortly.
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => setSuccessDialogOpen(false)}
              className="mt-8 w-full"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
