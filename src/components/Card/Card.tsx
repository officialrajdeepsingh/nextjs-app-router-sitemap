import { Badge, Card, Flex, Heading,Container,Button } from "@radix-ui/themes";
import Link from "next/link";
interface Post {
  id: number;
  title: string;
  reactions: number;
  userId: number;
  body: string;
  tags: string[];
}
export function BlogCard({ post }: { post: Post }) {
  return (
    <Container p={"5"} my={"9"}>
      <Card my={"9"} size="3">
        <Flex
          gap={"5"}
          align={"start"}
          shrink={"1"}
          justify={"center"}
          direction={"column"}
        >
          <Heading as="h2" color="gray" mb="1" size="5">
            {post.title}
          </Heading>
          <Flex gap="2">
            {post.tags.map(
              (tag) => <Badge size={"2"} key={tag}>{tag}</Badge>,
            )}
          </Flex>
          <Link href={`/read/${post.id}`}>
            <Button size={"3"}>
                Read More
            </Button>
          </Link>
        </Flex>
      </Card>
    </Container>
  );
}
