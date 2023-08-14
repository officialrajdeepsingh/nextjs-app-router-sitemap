import { ArrowLeftIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  reactions: number;
  userId: number;
  body: string;
  tags: string[];
}

export async function generateStaticParams() {
  const { posts } = await fetch("https://dummyjson.com/posts?limit=10").then((
    res,
  ) => res.json());

  return posts.map((post: Post) => ({
    slug: post.id.toString(),
  }));
}

async function getDummySinglePost(id: string) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Read({ params }: { params: { slug: string } }) {
  const post: Post = await getDummySinglePost(params.slug);

  return (
    <>
      <Box
        my={"7"}
        style={{
          background: "var(--gray-a2)",
          borderRadius: "var(--radius-3)",
        }}
      >
        <Container py={"6"}>
          <Link href="/">
            <IconButton size={"2"} variant="soft">
              <ArrowLeftIcon width="24" height="24" />
            </IconButton>
          </Link>
          <Box py="5">
            <Heading mb={"4"} size={"9"}>{post.title}</Heading>
          </Box>
          <Flex gap="2">
            {post.tags.map(
              (tag) => <Badge key={tag} size={"2"}>{tag}</Badge>,
            )}
          </Flex>
        </Container>
      </Box>
      <Container>
        <Text mt={"7"} as="p" size="3">
          {post.body}
        </Text>
      </Container>
    </>
  );
}
