import { HeroSection } from "@/components/sections/hero-section";
import { BlogPosts } from "../../lib/queries";
import LatestStories from "../components/latest-stories";
import { BlogCategorySection } from "../components/blog-category-section";
import { megaMenuData } from "@/constants/menu-data";

interface Props {
  blogPosts: BlogPosts;
}

export const BlogView = async ({ blogPosts }: Props) => {
  const latestBlogPosts = blogPosts.slice(0, 3);

  const newsCategoriesPosts = megaMenuData["blog"].items
    ? megaMenuData["blog"].items.map((item) => ({
        title: item.title,
        path: item.href.replace("#", ""),
        posts: blogPosts
          .filter((post) => post.category === item.href.replace("#", ""))
          .slice(0, 3),
      }))
    : [];

  return (
    <>
      <HeroSection
        title={"Latest news and insights"}
        page={"Blog"}
        secondaryNavigationItems={megaMenuData["blog"].items ?? []}
        backgroundImage="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_68/v1742342734/scott-blake-x-ghf9LjrVg-unsplash_nrmovu.webp"
      />

      {/* <LatestStories posts={latestBlogPosts} /> */}

      <div>
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
