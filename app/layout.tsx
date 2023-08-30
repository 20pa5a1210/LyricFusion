import SideBar from "@/components/SideBar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import { getSongByUserId } from "@/actions/getSongByUserId";
import Player from "@/components/Player";

const figTree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Spotify Clone",
    description: "Listen to music for free.",
};
export const revalidate = 0;
export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const userSongs = await getSongByUserId()
    return (
        <html lang="en">
            <body className={figTree.className}>
                <ToasterProvider />
                <SupabaseProvider>
                    <UserProvider>
                        <ModalProvider />
                        <SideBar songs={userSongs}>{children}</SideBar>
                        <Player />
                    </UserProvider>
                </SupabaseProvider>
            </body>
        </html>
    );
}
