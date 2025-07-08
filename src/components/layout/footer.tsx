import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ContactButton } from "./contact-button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-10 pb-8">
      <div className=" mx-auto px-4 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logo Column */}
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/PEC-logo.svg"
                  alt="Fugro Logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Main Navigation Column */}
            <div className="md:border-l border-gray-200 md:pl-8">
              <div className="md:hidden h-px bg-gray-300 mb-8"></div>
              <nav className="space-y-4">
                <Link
                  href="/about-us"
                  className="block text-navy-800 hover:text-gray-500 transition-all text-xl md:text-3xl font-semibold tracking-tight"
                >
                  About us
                </Link>
                <Link
                  href="/projects"
                  className="block text-navy-800 hover:text-gray-500 transition-all text-xl md:text-3xl font-semibold tracking-tight"
                >
                  Projects
                </Link>
                <Link
                  href="/expertise"
                  className="block text-navy-800 hover:text-gray-500 transition-all text-xl md:text-3xl font-semibold tracking-tight"
                >
                  Expertise
                </Link>
                <Link
                  href="/clients"
                  className="block text-navy-800 hover:text-gray-500 transition-all text-xl md:text-3xl font-semibold tracking-tight"
                >
                  Clients
                </Link>

                <Link
                  href="/careers"
                  className="block text-navy-800 hover:text-gray-500 transition-all text-xl md:text-3xl font-semibold tracking-tight"
                >
                  Careers
                </Link>
                <Link
                  href="/blog"
                  className="block text-navy-800 hover:text-gray-500 transition-all text-xl md:text-3xl font-semibold tracking-tight"
                >
                  Blog
                </Link>
              </nav>
            </div>
          </div>

          {/* Subscribe and Contact Column */}
          <div className="md:border-l border-gray-200 md:pl-8">
            <div className="md:hidden h-px bg-gray-300 mb-8"></div>
            <div className="mb-8">
              <h3 className="text-lg font-medium tracking-tight text-navy-800 mb-2">
                We're ready to execute your next project
              </h3>
              <ContactButton />
            </div>

            <div className="h-px bg-gray-300 my-8"></div>

            <div className="grid grid-cols-2 gap-8">
              {/* Social Media Links */}
              <div>
                <h3 className="text-lg tracking-tight font-bold text-navy-800 mb-4">
                  Social media
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://linkedin.com"
                      className="text-gray-600 tracking-tight hover:text-black"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://facebook.com"
                      className="text-gray-600 tracking-tight hover:text-black"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com"
                      className="text-gray-600 tracking-tight hover:text-black"
                    >
                      X (Twitter)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://instagram.com"
                      className="text-gray-600 tracking-tight hover:text-black"
                    >
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Links */}
              <div>
                <h3 className="text-lg font-bold tracking-tight text-navy-800 mb-4">
                  Contact
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-600 tracking-tight hover:text-black"
                    >
                      General contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations"
                      className="text-gray-600 tracking-tight hover:text-black"
                    >
                      Our locations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link
                href="/cookies"
                className="text-gray-600 text-sm hover:text-black"
              >
                Cookies
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 text-sm hover:text-black"
              >
                Privacy statement
              </Link>
              <Link
                href="/disclaimer"
                className="text-gray-600 text-sm hover:text-black"
              >
                Disclaimer
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 text-sm hover:text-black"
              >
                General purchase terms and conditions
              </Link>
            </div>
            <div className="text-gray-600 text-sm">
              © {currentYear} PEC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
