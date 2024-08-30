import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageTransition from "@/components/PageTransition";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Meltus Bwire",
  description: "An enthusiastic and determined individual with a profound passion for a career in Software Development and Data Science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <PageTransition>{children} </PageTransition>
      </body>
    </html>
  );
}
