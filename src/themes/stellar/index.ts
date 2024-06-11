import { extendTheme } from "@mui/joy/styles";

export const StellarTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          "50": "#e0e7ff",
          "100": "#c7d2fe",
          "200": "#a5b4fc",
          "300": "#818cf8",
          "400": "#6366f1",
          "500": "#4f46e5",
          "600": "#4338ca",
          "700": "#3730a3",
          "800": "#312e81",
          "900": "#1e1b4b",
        },
        secondary: {
          "50": "#fae8ff",
          "100": "#f5d0fe",
          "200": "#f0abfc",
          "300": "#e879f9",
          "400": "#d946ef",
          "500": "#c026d3",
          "600": "#a21caf",
          "700": "#86198f",
          "800": "#701a75",
          "900": "#4a044e",

          outlinedActiveBg: "var(--joy-palette-secondary-200)",
          outlinedBorder: "var(--joy-palette-secondary-300)",
          outlinedColor: "var(--joy-palette-secondary-500)",
          outlinedDisabledBorder: "var(--joy-palette-neutral-200)",
          outlinedDisabledColor: "var(--joy-palette-neutral-400)",
          outlinedHoverBg: "var(--joy-palette-secondary-100)",

          plainActiveBg: "var(--joy-palette-secondary-200)",
          plainColor: "var(--joy-palette-secondary-500)",
          plainDisabledColor: "var(--joy-palette-neutral-400)",
          plainHoverBg: "var(--joy-palette-secondary-100)",

          softActiveBg: "var(--joy-palette-secondary-300)",
          softBg: "var(--joy-palette-secondary-100)",
          softColor: "var(--joy-palette-secondary-700)",
          softDisabledBg: "var(--joy-palette-neutral-50)",
          softDisabledColor: "var(--joy-palette-neutral-400)",
          softHoverBg: "var(--joy-palette-secondary-200)",

          solidActiveBg: "var(--joy-palette-secondary-700)",
          solidBg: "var(--joy-palette-secondary-500)",
          solidColor: "var(--joy-palette-common-white)",
          solidDisabledBg: "var(--joy-palette-neutral-100)",
          solidDisabledColor: "var(--joy-palette-neutral-400)",
          solidHoverBg: "var(--joy-palette-secondary-600)",
        },
        success: {
          "50": "#d1fae5",
          "100": "#a7f3d0",
          "200": "#6ee7b7",
          "300": "#34d399",
          "400": "#10b981",
          "500": "#059669",
          "600": "#047857",
          "700": "#065f46",
          "800": "#064e3b",
          "900": "#022c22",
        },
        warning: {
          "50": "#fef9c3",
          "100": "#fef08a",
          "200": "#fde047",
          "300": "#facc15",
          "400": "#eab308",
          "500": "#ca8a04",
          "600": "#a16207",
          "700": "#854d0e",
          "800": "#713f12",
          "900": "#422006",
        },
        danger: {
          "50": "#ffe4e6",
          "100": "#fecdd3",
          "200": "#fda4af",
          "300": "#fb7185",
          "400": "#f43f5e",
          "500": "#e11d48",
          "600": "#be123c",
          "700": "#9f1239",
          "800": "#881337",
          "900": "#4c0519",
        },
        info: {
          "50": "#e0f2fe",
          "100": "#bae6fd",
          "200": "#7dd3fc",
          "300": "#38bdf8",
          "400": "#0ea5e9",
          "500": "#0284c7",
          "600": "#0369a1",
          "700": "#075985",
          "800": "#0c4a6e",
          "900": "#082f49",

          outlinedActiveBg: "var(--joy-palette-info-200)",
          outlinedBorder: "var(--joy-palette-info-300)",
          outlinedColor: "var(--joy-palette-info-500)",
          outlinedDisabledBorder: "var(--joy-palette-neutral-200)",
          outlinedDisabledColor: "var(--joy-palette-neutral-400)",
          outlinedHoverBg: "var(--joy-palette-info-100)",

          plainActiveBg: "var(--joy-palette-info-200)",
          plainColor: "var(--joy-palette-info-500)",
          plainDisabledColor: "var(--joy-palette-neutral-400)",
          plainHoverBg: "var(--joy-palette-info-100)",

          softActiveBg: "var(--joy-palette-info-300)",
          softBg: "var(--joy-palette-info-100)",
          softColor: "var(--joy-palette-info-700)",
          softDisabledBg: "var(--joy-palette-neutral-50)",
          softDisabledColor: "var(--joy-palette-neutral-400)",
          softHoverBg: "var(--joy-palette-info-200)",

          solidActiveBg: "var(--joy-palette-info-700)",
          solidBg: "var(--joy-palette-info-500)",
          solidColor: "var(--joy-palette-common-white)",
          solidDisabledBg: "var(--joy-palette-neutral-100)",
          solidDisabledColor: "var(--joy-palette-neutral-400)",
          solidHoverBg: "var(--joy-palette-info-600)",
        },
        neutral: {
          "50": "#f1f5f9",
          "100": "#e2e8f0",
          "200": "#cbd5e1",
          "300": "#94a3b8",
          "400": "#64748b",
          "500": "#475569",
          "600": "#334155",
          "700": "#1e293b",
          "800": "#0f172a",
          "900": "#020617",
        },
      },
    },
  },
});