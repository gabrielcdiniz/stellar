import { type ReactNode } from "react";

import type { Metadata } from "next";

import { Content } from "@/layout/content";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import { Main } from "@/layout/main";

export const metadata: Metadata = {
  title: "Gabriel Diniz",
  description: "Gabriel Diniz's portfolio.",
};

type HomeLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Main>
      <Header />

      <Content>{children}</Content>

      <Footer />
    </Main>
  );
}
