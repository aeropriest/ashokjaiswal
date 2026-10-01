import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ModeProvider } from "@/components/ModeProvider";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://aeropriest.github.io"),
  title: "Ashok Jaiswal · Portfolio",
  description:
    "Product builder in Hong Kong: crypto wallets and NFT platforms, AI apps, crowdfunded hardware (EzeeCube, Yomee), Kyozo, PawMe and the Orbie robot.",
  openGraph: {
    title: "Ashok Jaiswal · Portfolio",
    description: "Crypto, AI, robots and the apps around them.",
    images: [`${base}/images/goingape-site.webp`],
    type: "website",
  },
  icons: { icon: `${base}/favicon.svg` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
