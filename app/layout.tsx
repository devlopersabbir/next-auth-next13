import "../styles/globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next Auth with Next 13",
  description: "Next13 - next auth",
  authors: [
    {
      name: "Sabbir Hossain Shuvo",
      url: "https://showwcase.com/devlopersabbir",
    },
  ],
};

type IRootLayoutPros = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: IRootLayoutPros) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
