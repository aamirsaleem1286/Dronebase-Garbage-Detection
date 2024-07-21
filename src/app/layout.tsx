import { Toaster } from "react-hot-toast";
import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dronebase Garbage Detection",
    manifest: "/manifest.json",
    icons: { apple: "/drone.jpeg" },
    description: "Hardware-Accelerated Deep Learning For Drone-Based Garbage Detection",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-white text-black max-w-[400px] min-h-screen m-auto`}>
                <Toaster position="top-left" />
                <NextTopLoader color="#008000" initialPosition={0.08} crawlSpeed={200} height={3} crawl={true} easing="ease" speed={200} zIndex={1600} showAtBottom={false} />
                <Navbar />
                <ChakraProvider>{children}</ChakraProvider>
            </body>
        </html>
    );
}
