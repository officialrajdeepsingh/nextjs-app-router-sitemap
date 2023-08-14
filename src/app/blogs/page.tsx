import { BlogCard } from "@/components/Card/Card";
import { Container } from "@radix-ui/themes";
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

export default async function Blogs() {
  const { posts } = await getDummyPosts();

  return (
    <Container p={"5"} my={"9"}>
      {posts.map((post: Post) => <BlogCard key={post.id} post={post} />)}
    </Container>
  );
}
