import { HeroSection } from "@/components/hero-section";
import { BlogPosts } from "../../lib/queries";
import { BlogPostCard } from "../components/blog-post-card";
import LatestStories from "../components/latest-stories";

interface Props {
  blogPosts: BlogPosts;
  activeCategory: string | undefined;
}

export const BlogView = async ({ blogPosts, activeCategory }: Props) => {


  console.log(activeCategory);

  const secondaryNavigationItems = [
    { label: "Latest Stories", href: "#latest-stories" },
    { label: "News", href: "#news" },
    { label: "Insights", href: "#insights" },
    { label: "Press Releases", href: "#press" },
    { label: "Events", href: "#events" },
  ];

  const getFilteredPosts = () => {
    return !activeCategory
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);
  };

  console.log(blogPosts[0].category, activeCategory);

  const filteredBlogPosts = getFilteredPosts();
  const latestBlogPosts = filteredBlogPosts.slice(0, 3);

  return (
    <>
      <HeroSection
        title={"Latest news and insights"}
        page={"Blog"}
        secondaryNavigationItems={secondaryNavigationItems}
        initialActiveItem="#news"
        backgroundImage="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_68/v1742342734/scott-blake-x-ghf9LjrVg-unsplash_nrmovu.webp"
        alt="Ocean view with offshore structures"
     
      />

      <LatestStories posts={latestBlogPosts} />

      <div className="pt-10 space-y-20">
        {latestBlogPosts.slice(0, 3).map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
        {!activeCategory && <div>No active category</div>}
        {latestBlogPosts.slice(3, 6).map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};
