"use client";

import { Container, Flex, IconButton, Link } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { SunIcon,MoonIcon } from '@radix-ui/react-icons'

export function Header() {
  const {  setTheme } = useTheme();
  return (
    <>
      <Container py={"5"}  size="2">
        
        <Flex gap="5" align={"center"} justify={"center"} direction="row">
          
          {/* Link component come from radix ui */}
          <Link href="/deploy-nextjs-app-router-github-pages/" weight="medium">Home</Link>
          <Link href="/deploy-nextjs-app-router-github-pages/about" weight="medium">About us</Link>
          <Link href="/deploy-nextjs-app-router-github-pages/contact" weight="medium">Contact us</Link>

        {/* Use it onClick event and pass the theme name as an argument. */}
        <IconButton variant="outline" onClick={() => setTheme("light")}>
          <SunIcon />
        </IconButton>
        <IconButton variant="outline" onClick={() => setTheme("dark")}>
          <MoonIcon />
        </IconButton>

        </Flex>
      </Container>
    </>
  );
}
