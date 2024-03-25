import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const mulish = Mulish({ 
  weight: ["400", "800"],
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News",
  description: "Sua central de notícias sobre o mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        <Nav />
        {children}
        <Footer />
        </body>
    </html>
  );
}
