"use client";

import Image from "next/image";

import { AspectRatio, Box, useTheme } from "@mui/joy";
import { useMediaQuery } from "@mui/system";

import { Link } from "../link";

export function Logo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile)
    return (
      <Link href="/">
        <Box width="32px">
          <AspectRatio
            variant="plain"
            ratio="1"
            objectFit="cover"
            maxHeight="64px"
          >
            <Image src="/images/initials-logo.png" alt="Logo" fill />
          </AspectRatio>
        </Box>
      </Link>
    );

  return (
    <Link href="/">
      <Box width="200px">
        <AspectRatio
          variant="plain"
          ratio="16/9"
          objectFit="cover"
          maxHeight="64px"
        >
          <Image src="/images/logo.png" alt="Logo" fill />
        </AspectRatio>
      </Box>
    </Link>
  );
}
