"use client";

import { Box, Container, Typography } from "@mui/joy";

import { Link } from "@/components/link";

export function Footer() {
  return (
    <Box component="footer" width="100%" pb={4}>
      <Container>
        <Typography>
          Feito com{" "}
          <Link href="https://nextjs.org/" rel="noopener">
            Next.js
          </Link>{" "}
          e{" "}
          <Link
            href="https://mui.com/joy-ui/getting-started/"
            target="_blank"
            rel="noopener"
          >
            Material Joy UI
          </Link>
          , implantado com Vercel. Fonte usada:{" "}
          <Link
            href="https://fonts.google.com/specimen/Inter?query=inter"
            target="_blank"
            rel="noopener"
          >
            Inter
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
