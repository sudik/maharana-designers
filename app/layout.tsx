import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maharana Designers — Interior Design & Architecture",
  description:
    "Pune-based interior design consultancy crafting warm, considered residential and commercial spaces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <CustomCursor />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
