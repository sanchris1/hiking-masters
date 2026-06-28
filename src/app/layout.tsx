import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const manrope = Manrope({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Superhikers",
  description: "New generation hikers website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` h-full antialiased ${manrope.className} `}>
      <body className="min-h-full flex flex-col ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
