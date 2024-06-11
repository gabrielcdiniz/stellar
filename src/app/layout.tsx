import type { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
    <html lang="pt-BR">
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
