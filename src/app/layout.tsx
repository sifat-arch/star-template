import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavContainer from "@/components/Home/Navbar/NavContainer";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Star Landing Page",
  description: "Star Landing Page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className} antialiased bg-[#1f242c]`}>
      <body className="min-h-full flex flex-col">
        <NavContainer />
        {children}
      </body>
    </html>
  );
}
