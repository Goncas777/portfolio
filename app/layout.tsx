import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gonçalo Vieira — Software Developer",
  description:
    "Portfolio of Gonçalo Vieira — full-stack systems, backend architecture, automation and product engineering.",
  openGraph: {
    title: "Gonçalo Vieira — Software Developer",
    description:
      "Selected software projects across product engineering, backend architecture, automation and AI workflows.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
