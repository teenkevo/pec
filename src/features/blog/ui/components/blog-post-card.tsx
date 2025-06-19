import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlogPosts } from "../../lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";

interface Props {
  post: BlogPosts[number];
  isFeatured?: boolean;
}

export function BlogPostCard({ post, isFeatured = false }: Props) {

  const categoryMap = {
    news: "News",
    insights: "Insights",
    press: "Press Releases",
    event: "Event",
  };

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn("w-full block group flex-shrink-0", !isFeatured && "border-b pb-8 border-gray-800")}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={urlFor(post.image).format("webp").url() || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <span className={cn("text-sm text-[#EB3300] font-medium", isFeatured && "text-lg")}>
          {categoryMap[post.category as keyof typeof categoryMap]}
        </span>
        <h3
          className={cn(
            "text-xl font-bold text-gray-900 mt-1 tracking-tight transition-colors",
            isFeatured && "text-3xl"
          )}
        >
          {post.title}
        </h3>
        <p
          className={cn(
            "text-gray-600 text-sm mt-2",
            isFeatured && "text-lg"
          )}
        >
          {format(new Date(post.publishedAt), "MMM d, yyyy")}
        </p>
      </div>
    </Link>
  );
}
