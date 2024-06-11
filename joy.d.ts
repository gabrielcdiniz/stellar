import "mui/joy/styles";

import type { PaletteRange } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface ColorPalettePropOverrides {
    secondary: true;
    info: true;
  }

  interface Palette {
    secondary: PaletteRange;
    info: PaletteRange;
  }
}
