"use client";

import type React from "react";
import { createPortal } from "react-dom";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  User,
  Building,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  question: string;
}

export function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    question: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.question
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    // Construct mailto link
    const subject = encodeURIComponent(
      `PEC Website Contact Form: ${formData.firstName} ${formData.lastName}`
    );
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\n` +
        `Last Name: ${formData.lastName}\n` +
        `Company: ${formData.company}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `\nQuestion:\n${formData.question}`
    );
    const mailto = `mailto:info@pec.co.ug?subject=${subject}&body=${body}`;

    // Open mailto link
    window.open(mailto, "_blank");

    // Optionally close the drawer and reset form
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      question: "",
    });
    onClose();
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.question;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Contact Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white z-[95] flex flex-col shadow-2xl"
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
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#128191] to-[#0f6b7a]">
              <div className="text-white">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="text-blue-100 text-sm mt-1">
                  We'd love to hear from you
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-blue-200 transition-colors p-2 hover:bg-white/10 rounded-full"
                aria-label="Close contact form"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto">
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
                    >
                      <User className="h-4 w-4 text-[#128191]" />
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="mt-1 focus:ring-[#128191] focus:border-[#128191]"
                      placeholder="John"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
                    >
                      <User className="h-4 w-4 text-[#128191]" />
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="mt-1 focus:ring-[#128191] focus:border-[#128191]"
                      placeholder="Doe"
                      required
                    />
                  </motion.div>
                </div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Label
                    htmlFor="company"
                    className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
                  >
                    <Building className="h-4 w-4 text-[#128191]" />
                    Company
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    className="mt-1 focus:ring-[#128191] focus:border-[#128191]"
                    placeholder="Your Company Name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4 text-[#128191]" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1 focus:ring-[#128191] focus:border-[#128191]"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4 text-[#128191]" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1 focus:ring-[#128191] focus:border-[#128191]"
                    placeholder="+1 (555) 123-4567"
                  />
                </motion.div>

                {/* Question */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <Label
                    htmlFor="question"
                    className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4 text-[#128191]" />
                    What's your question? *
                  </Label>
                  <Textarea
                    id="question"
                    value={formData.question}
                    onChange={(e) =>
                      handleInputChange("question", e.target.value)
                    }
                    className="mt-1 focus:ring-[#128191] focus:border-[#128191] min-h-[120px] resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    className="w-full bg-[#128191] hover:bg-[#0f6b7a] text-white py-3 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
