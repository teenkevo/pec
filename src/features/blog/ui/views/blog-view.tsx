import { HeroSection } from "@/components/sections/hero-section";
import { BlogPosts } from "../../lib/queries";
import LatestStories from "../components/latest-stories";
import { BlogCategorySection } from "../components/blog-category-section";

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
    posts: blogPosts
      .filter((post) => post.category === item.href.replace("#", ""))
      .slice(0, 3),
  }));

  return (
    <>
      <HeroSection
        title={"Latest news and insights"}
        page={"Blog"}
        secondaryNavigationItems={secondaryNavigationItems}
        initialActiveItem="#news"
        backgroundImage="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_68/v1742342734/scott-blake-x-ghf9LjrVg-unsplash_nrmovu.webp"
      />

      <LatestStories posts={latestBlogPosts} />

      <div className="py-16">
        {newsCategoriesPosts.map((category) => (
          <BlogCategorySection
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
