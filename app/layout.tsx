import type { Metadata } from "next";
import { Geologica, Literata } from "next/font/google";
import content from "@/content";
import "./globals.css";

const display = Literata({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
});

const sans = Geologica({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  keywords: content.meta.keywords,
  openGraph: {
    title: content.meta.openGraph.title,
    description: content.meta.openGraph.description,
    locale: content.meta.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-sans)]">{children}</body>
    </html>
  );
}
