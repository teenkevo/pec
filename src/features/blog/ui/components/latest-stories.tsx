import { BlogPostCard } from "./blog-post-card";
import { BlogPosts } from "../../lib/queries";

interface Props {
  posts: BlogPosts;
}

const LatestStories = ({ posts }: Props) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-16 px-4 md:px-14"
      id="latest-stories"
    >
      <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
        <BlogPostCard post={posts[0]} isFeatured={true} />
      </div>
      {posts.slice(1, 3).map((post) => (
        <BlogPostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default LatestStories;
