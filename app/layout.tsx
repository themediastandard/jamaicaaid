import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mission of Hope: Capt. Barrington Irving's Humanitarian Flight to Jamaica",
  description: "Join Capt. Barrington Irving's humanitarian mission to deliver over 100,000 pounds of critical supplies to Jamaica. Support Experience Aviation's effort to bring hope and aid to communities in need.",
  openGraph: {
    title: "Mission of Hope: Humanitarian Flight to Jamaica",
    description: "Support Capt. Barrington Irving's mission to deliver critical supplies to Jamaica",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
