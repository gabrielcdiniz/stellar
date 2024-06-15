"use client";

import { Box, Stack, Typography } from "@mui/joy";

import { Link } from "@/components/link";

export default function CreditsPage() {
  return (
    <Stack py={6} gap={4}>
      <Typography level="h2">Créditos</Typography>

      <Typography level="h4">Ferramentas Utilizadas</Typography>

      <Box>
        <Link href="https://nextjs.org/">Next.js</Link>
      </Box>
      <Box>
        <Link href="https://mui.com/joy-ui/getting-started/">Joy UI</Link>
      </Box>
      <Box>
        <Link href="https://favicon.io/favicon-generator/">
          Favicon Generator
        </Link>
      </Box>
      <Box>
        <Link href="https://favicon.io/logo-generator/">Logo Generator</Link>
      </Box>
    </Stack>
  );
}
