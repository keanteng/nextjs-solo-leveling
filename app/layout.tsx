import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solo-Leveling System",
  description: "Register as a System Player. From commonplace to the World Strongest!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
