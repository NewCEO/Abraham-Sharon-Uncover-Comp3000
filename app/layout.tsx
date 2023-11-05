import "./globals.css";

import type { Metadata } from "next";
import localFont from "@next/font/local";
import Sidebar from "@/Components/Sidebar";

const ramblerBold = localFont({
  src: "../public/Assets/font/CorsicaRamblerLX-Bold.ttf",
  variable: "--font-ramblerBold",
});
const ramblerBoldItalic = localFont({
  src: "../public/Assets/font/CorsicaRamblerLX-BoldItalic.ttf",
  variable: "--font-ramblerBoldItalic",
});
const ramblerBook = localFont({
  src: "../public/Assets/font/CorsicaRamblerLX-Book.ttf",
  variable: "--font-ramblerBook",
});

const ramblerSemibold = localFont({
  src: "../public/Assets/font/CorsicaRamblerLX-SemiBold.ttf",
  variable: "--font-ramblerSemiBold",
});

export const metadata: Metadata = {
  title: "Uncover",
  description: "Where Covers Become Discoveries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ramblerBold.variable} ${ramblerBoldItalic.variable} ${ramblerSemibold.variable} ${ramblerBook.variable} `}
    >
      <body className={ramblerBook.className}>
        {children}
      </body>
    </html>
  );
}
