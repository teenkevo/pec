import { format } from "date-fns";
import Link from "next/link";
import { Navigation } from "@/components/layout/navigation";
import { BlogPost } from "../../lib/queries";
import { categoryMap } from "../../lib/utils";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Markdown from "@/components/markdown";

interface Props {
  postData: BlogPost;
}

export const BlogPostView = ({ postData }: Props) => {
  return (
    <div>
      <div className="relative w-full bg-black">
        <Navigation />
      </div>
      <div className="px-4 md:px-14 py-12 grid lg:grid-cols-12 gap-x-12 gap-y-12 ">
        <div className="w-full flex items-center justify-start gap-x-4 col-span-12 ">
          <Link href={"/blog"}>Blog</Link>
          <span>/</span>
          <Link href={"/blog/categories/" + postData.category}>
            {" "}
            {categoryMap[postData.category as keyof typeof categoryMap]}
          </Link>
        </div>
        <div className="lg:col-span-7 lg:col-start-4 ">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-4xl font-semibold md:font-semibold text-navy-800 mb-6">
              {postData.title}
            </h1>
            <span className="inline-block text-navy-800">
              {" "}
              {format(new Date(postData.publishedAt), "MMM d, yyyy")}
            </span>
          </div>
        </div>
        <div className="flex items-start space-x-4 col-span-3">
          <div className="relative h-20 w-20 rounded-full flex-shrink-0">
            <Image
              src={
                urlFor(postData.author.image)
                  .format("webp")
                  .width(100)
                  .height(100)
                  .url() || "/placeholder.svg"
              }
              alt={postData.author.name + ", " + postData.author.role + ", PEC"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-navy-800">
              {postData.author.name}
            </h3>
            <p className="text-gray-600">{postData.author.role}</p>
          </div>
        </div>

        <div className="relative min-h-[440px] lg:col-span-7 lg:col-start-4">
          <Image
            src={urlFor(postData.image).format("webp").url()}
            alt={postData.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-4">
          <Markdown markdown={postData.content} />
        </div>
      </div>
    </div>
  );
};
