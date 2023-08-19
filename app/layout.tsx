import SideBar from "@/components/SideBar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const figTree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music for free.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figTree.className}>
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
}
