import { HeroSection } from "@/components/hero-section";
import { BlogPosts } from "../../lib/queries";
import { BlogPostCard } from "../components/blog-post-card";
import LatestStories from "../components/latest-stories";
import { NewsSection } from "../components/news-section";

interface Props {
  blogPosts: BlogPosts;
}

export const BlogView = async ({ blogPosts }: Props) => {
  const secondaryNavigationItems = [
    { label: "Latest Stories", href: "#latest-stories" },
    { label: "News", href: "#news" },
    { label: "Insights", href: "#insights" },
    { label: "Press Releases", href: "#press" },
    { label: "Events", href: "#events" },
  ];

  const latestBlogPosts = blogPosts.slice(0, 3);

  const newsCategoriesPosts = secondaryNavigationItems.map((item) => ({
    title: item.label,
    path: item.href.replace("#", ""),
    posts: blogPosts.filter(
      (post) => post.category === item.href.replace("#", "")
    ),
  }));

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
        {newsCategoriesPosts.map((category) => (
       
            <NewsSection
              key={category.title}
              posts={category.posts}
              sectionTitle={category.title}
              path={category.path}
              isNewsPage={true}
            />
      
        ))}
      </div>
    </>
  );
};
