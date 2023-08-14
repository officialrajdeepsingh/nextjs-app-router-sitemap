import { BlogCard } from "@/components/Card/Card";
import { PinCard } from "@/components/Card/PinCard";
interface Post {
  id: number;
  title: string;
  reactions: number;
  userId: number;
  body: string;
  tags: string[];
}
async function getDummyPosts() {
  const res = await fetch("https://dummyjson.com/posts?limit=10");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { posts } = await getDummyPosts();

  return (
    <>

      {posts.map((post: Post) => post.id== 1? <PinCard key={post.id} post={post} /> : <BlogCard key={post.id} post={post} />)}

    </>
  );
}

