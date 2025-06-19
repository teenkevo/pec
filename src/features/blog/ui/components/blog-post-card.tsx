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
  accentColor?: string;
}

export function BlogPostCard({ post, accentColor = "[#EB3300]" }: Props) {
  const categoryTextColor = `text-${accentColor}`;
  const categoryBgColor = `bg-${accentColor}`;
  const readMoreTextColor = `text-[${accentColor}]`;

  const categoryMap = {
    news: "News",
    insights: "Insights",
    press: "Press Releases",
    event: "Event",
  };

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="w-full px-4 md:px-6 block group flex-shrink-0"
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
        <span className={cn("text-sm text-gray-500", categoryTextColor)}>
          {categoryMap[post.category as keyof typeof categoryMap]}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-1 tracking-tight transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 text-xs mt-2">
          {format(new Date(post.publishedAt), "MMM d, yyyy")}
        </p>
      </div>
    </Link>
  );
}
