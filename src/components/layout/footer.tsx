import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Locate, Phone } from "lucide-react";
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

            <div className="grid grid-cols-1 gap-8">
              {/* Social Media Links */}
              {/* <div>
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
              </div> */}

              {/* Contact Links */}
              <div>
                <h3 className="text-lg font-bold tracking-tight text-navy-800 mb-4">
                  Address and contact
                </h3>
                <ul className="space-y-2">
                  <li>
                    <p className="text-gray-600 tracking-tight hover:text-black">
                      Plot 9, Makajja Close off Ntinda 2 Road, Naguru, Kampala
                      Uganda , P.O. Box 9529, Kampala Uganda (East Africa).
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-600 tracking-tight hover:text-black">
                      +256 393 513 038 | pec@pec.co.ug | pecuganda@gmail.com
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-600 tracking-tight hover:text-black">
                      Mon - Fri: 8:00 - 17:00 | Sat: 8:00 - 1:00 pm
                    </p>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 col-span-4 lg:col-span-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7471590056125!2d32.60939757468819!3d0.3422029639864998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbce848ec8ad%3A0x27348f1dbf13211b!2sProfessional%20Engineering%20Consultants%20Ltd!5e0!3m2!1sen!2sbe!4v1754295540769!5m2!1sen!2sbe"
                  width="100%"
                  height="400"
                  style={{
                    border: "2px solid #118191",
                    borderRadius: "10px",
                  }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
