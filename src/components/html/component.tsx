"use client";

import type { ReactNode } from "react";

import { styled } from "@mui/joy";

const StyledHtml = styled("html")({});

type HtmlProps = Readonly<{
  children: ReactNode;
}>;

export function Html({ children }: HtmlProps) {
  return (
    <StyledHtml
      lang="pt-BR"
      sx={{
        "&::-webkit-scrollbar": {
          backgroundColor: (theme) => theme.palette.primary[900],
          width: 4,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: (theme) => theme.palette.primary[500],
          borderRadius: 2,
        },
        "&::-moz-scrollbar": {
          backgroundColor: (theme) => theme.palette.primary[900],
          width: 4,
        },
        "&::-moz-scrollbar-thumb": {
          backgroundColor: (theme) => theme.palette.primary[500],
          borderRadius: 2,
        },
      }}
    >
      {children}
    </StyledHtml>
  );
}
