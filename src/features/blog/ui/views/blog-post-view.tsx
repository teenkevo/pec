import { format } from "date-fns";
import Link from "next/link";
import { Navigation } from "@/components/layout/navigation";
import { BlogPost } from "../../lib/queries";
import { categoryMap } from "../../lib/utils";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Markdown from "@/components/markdown";
import { GraphicSection } from "@/features/about-us/ui/components/graphic-section";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  postData: BlogPost;
}

export const BlogPostView = ({ postData }: Props) => {
  return (
    <div>
      <div className="relative w-full bg-black">
        <Navigation />
      </div>
      <div className="px-4 md:px-14 py-12">
        <div className="w-full flex items-center justify-start gap-x-3 mb-8">
          <Link
            href={"/blog"}
            className="flex items-center gap-x-3 text-[#EB3300]/90 hover:text-[#EB3300] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to blog</span>
          </Link>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl md:text-4xl font-semibold text-navy-800">
            {postData.title}
          </h1>
        </div>

        <div className="flex items-center gap-x-6 mb-8">
          <span className="text-navy-800">
            {format(new Date(postData.publishedAt), "MMM d, yyyy")}
          </span>

          <div className="flex items-center space-x-3">
            <div className="relative h-12 w-12 rounded-full flex-shrink-0">
              <Image
                src={
                  urlFor(postData.author.image)
                    .format("webp")
                    .width(60)
                    .height(60)
                    .url() || "/placeholder.svg"
                }
                alt={
                  postData.author.name + ", " + postData.author.role + ", PEC"
                }
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-navy-800">
                {postData.author.name}
              </h3>
              <p className="text-xs text-gray-600">{postData.author.role}</p>
            </div>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="relative min-h-[300px] md:min-h-[500px] w-full mb-12">
          <Image
            src={urlFor(postData.image).format("webp").url()}
            alt={postData.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Markdown markdown={postData.content} />
        </div>

       {postData.nextPost && <div className="max-w-4xl mx-auto">
          <Link
            href={`/blog/${postData.nextPost?.slug}`}
            className="block group"
          >
            <div className="border border-gray-200 rounded-lg p-6 transition-colors">
              <div className="flex flex-col gap-y-4">
                <p className="text-sm text-[#EB3300]/90 font-medium">
                  Next Read
                </p>

                <div className="flex items-center justify-between gap-x-6">
                  <h3 className="text-lg font-semibold text-navy-800">
                    {postData.nextPost?.title}
                  </h3>

                  <span className="bg-white p-2 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>}
      </div>

      <GraphicSection
        imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_61/v1742770900/How-Solar-Panels-Are-Beneficial-for-the-Environment-2048x1365_i2ppd3.webp"
        section="About us"
        title="What we do at PEC"
        linkText="Learn more"
        linkUrl="/about-us"
      />
    </div>
  );
};
