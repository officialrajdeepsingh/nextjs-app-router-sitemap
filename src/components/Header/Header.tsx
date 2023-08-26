"use client";

import { Container, Flex, IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import {
  EnvelopeOpenIcon,
  HomeIcon,
  MoonIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@radix-ui/themes";

export function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Container py={"5"} size="2">
        <Flex gap="5" align={"center"} justify={"center"} direction="row">
          {/* Link component come from radix ui */}
          <Link href="/deploy-nextjs-app-router-github-pages/">
            <Button size={"3"} variant="soft">
              <HomeIcon width="16" height="16" /> Home
            </Button>
          </Link>

          <Link href="/deploy-nextjs-app-router-github-pages/about">
            <Button size={"3"} variant="soft">
              <PersonIcon width="16" height="16" /> About us
            </Button>
          </Link>

          <Link href="/deploy-nextjs-app-router-github-pages/contact">
            <Button size={"3"} variant="soft">
              <EnvelopeOpenIcon width="16" height="16" /> Contact us
            </Button>
          </Link>

          {/* Use it onClick event and pass the theme name as an argument. */}

          {theme === "dark"
            ? (
              <IconButton variant="outline" onClick={() => setTheme("light")}>
                <SunIcon />
              </IconButton>
            )
            : (
              <IconButton variant="outline" onClick={() => setTheme("dark")}>
                <MoonIcon />
              </IconButton>
            )}
        </Flex>
      </Container>
    </>
  );
}
