import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Aurora Haven",
//   description: "A Nordic luxury hotel and retreat experience.",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };
export const metadata: Metadata = {
  title: "Aurora Haven",
  description: "A Nordic luxury hotel and retreat experience.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
