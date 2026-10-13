import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ernest Fakokunde | Full-Stack Product Developer",
  description:
    "Ernest Fakokunde Ayodele builds product-focused web experiences with clean structure, motion, and modern UI systems.",
  verification: {
    google: "bpovFkoH9D8qlJNBHCIDxcq0EJLLniDMBnISwK7-TNk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
