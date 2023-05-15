import Info from "@/components/Info";
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Info />
        <Nav />
        {children}
      </body>
    </html>
  );
}
