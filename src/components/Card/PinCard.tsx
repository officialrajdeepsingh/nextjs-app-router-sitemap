import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Container
} from "@radix-ui/themes";
import Link from "next/link"
interface Post {
  id: number;
  title: string;
  reactions: number;
  userId: number;
  body: string;
  tags: string[];
}
export function PinCard({post}:{post:Post}) {
  return (
      <Card
        my={"7"}
        variant="ghost"
        size={"5"}
        mx={"0"}
        style={{ background: "var(--gray-a2)", marginLeft:0, marginRight:0}}>
        <Container py={"7"}>
          <Flex direction={"column"}>
            <Heading as="h1" mb={"4"} size={"7"}>
              {post.title}
            </Heading>
            <Text as="p" size={"4"}>
              Qui minim labore adipisicing minim sint
            </Text>
            <Box mt={"6"}>
               <Link href={`/read/${post.id}`}>
                  <Button size={"3"}>Learn More</Button>
              </Link>
            </Box>
          </Flex>
        </Container>
      </Card>
  );
}
