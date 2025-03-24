import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IndustryContactSectionProps {
  industry?: string;
  contactPerson?: {
    name: string;
    title: string;
    imageUrl: string;
  };
}

export function IndustryContactSection({
  industry = "Energy",
  contactPerson = {
    name: "Remmelt de Jong",
    title: "Industry lead - Energy",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Remmelt",
  },
}: IndustryContactSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className=" mx-auto px-4 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Contact us heading */}
          <div>
            <h2 className="text-3xl font-bold text-navy-800">Contact us</h2>
          </div>

          {/* Right side - Contact person details */}
          <div>
            <div className="space-y-8">
              {/* Heading */}
              <div>
                <h3 className="text-3xl md:text-5xl tracking-tight font-bold text-navy-800">
                  Get in touch for
                </h3>
                <h3 className="text-3xl tracking-tight font-bold text-gray-400">
                  {industry} services
                </h3>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200"></div>

              {/* Contact person */}
              <div className="flex items-center space-x-6">
                <div className="relative h-32 w-32 flex-shrink-0">
                  <Image
                    src={contactPerson.imageUrl || "/placeholder.svg"}
                    alt={contactPerson.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-navy-800">
                    {contactPerson.name}
                  </h4>
                  <p className="text-gray-600">{contactPerson.title}</p>
                </div>
              </div>

              {/* Contact link */}
              <div>
                <Link
                  href={`/contact/${contactPerson.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex font-medium items-center text-[#EB3300]/90 hover:text-[#EB3300]"
                >
                  <span>Contact {contactPerson.name}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Bottom divider */}
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
