"use client";

import { Box, Container, Sheet } from "@mui/joy";

import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { SocialMedias } from "@/components/social-medias";

type HeaderProps = Readonly<{}>;

export function Header({}: HeaderProps) {
  return (
    <Box component="header" position="fixed" width="100%">
      <Sheet
        variant="soft"
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          height: 64,
          background: (theme) => theme.palette.background.backdrop,
          boxShadow: "25px 25px 50px #16151e, -25px -25px 50px #201f2e",
          backdropFilter: "blur(5.6px)",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container>
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Logo />

            <Navbar />

            <Box flexGrow={1} />

            <SocialMedias />
          </Box>
        </Container>
      </Sheet>
    </Box>
  );
}
