import type { ReactNode } from "react";

import { Box, Container, Stack } from "@mui/joy";

type ContentProps = Readonly<{
  children: ReactNode;
}>;

export function Content({ children }: ContentProps) {
  return (
    <Stack component="section">
      <Box flexGrow={1} height="64px" />

      <Container>{children}</Container>
    </Stack>
  );
}
