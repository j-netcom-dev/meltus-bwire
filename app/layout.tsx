import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800'], variable: '--font-jetbrains-mono' });

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
      <body className={jetbrainsMono.variable}>{children}</body>
    </html>
  );
}
