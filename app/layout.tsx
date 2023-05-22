import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import Info from "@/components/Info";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const spaceGrotestk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotestk.className}>
        <Info />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
