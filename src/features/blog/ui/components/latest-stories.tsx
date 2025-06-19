import { BlogPostCard } from "./blog-post-card";
import { BlogPosts } from "../../lib/queries";

interface Props {
  posts: BlogPosts;
}

const LatestStories = ({ posts }: Props) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-2 row-span-3">
        <BlogPostCard post={posts[0]} />
      </div>
      {posts.slice(1, 3).map((post) => (
        <BlogPostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default LatestStories;
