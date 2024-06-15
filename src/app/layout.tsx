import type { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Html } from "@/components/html";

import { AppProviders } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio ~ Gabriel Diniz",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <AppProviders>
      <Html>
        <body className={inter.className}>{children}</body>
      </Html>
    </AppProviders>
  );
}
