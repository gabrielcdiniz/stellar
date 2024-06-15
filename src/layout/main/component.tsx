import type { ReactNode } from "react";

import { Box, Stack } from "@mui/joy";

import { StarParticles } from "./particles";

type MainProps = Readonly<{
  children: ReactNode;
}>;

export function Main({ children }: MainProps) {
  return (
    <Stack component="main" minHeight="100vh" justifyContent="flex-start">
      <StarParticles />

      <Box
        sx={{
          "&:before": {
            content: '""',
            background:
              "linear-gradient(135deg, rgba(30,27,75,0.25) 0%, rgba(99,102,241,0.25) 15%, rgba(125,211,252,0.25) 50%, rgba(134,25,143,0.25) 85%, rgba(74,4,78,0.25) 100%)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.5,
            zIndex: -1,
          },
          "&: after": {
            content: '""',
            background:
              "linear-gradient(65deg, rgba(30,27,75,0.15) 0%, rgba(99,102,241,0.15) 15%, rgba(125,211,252,0.15) 50%, rgba(134,25,143,0.15) 85%, rgba(74,4,78,0.15) 100%)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.5,
            zIndex: -1,
          },
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}
