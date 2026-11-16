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
    "Ernest Fakokunde is a full-stack developer building business websites, custom web applications, dashboards, and digital products for businesses and startups.",
  metadataBase: new URL("https://ernest-fakokunde-ayodele.vercel.app"),
  openGraph: {
    title: "Ernest Fakokunde | Full-Stack Developer & Product Builder",
    description: "Digital products that help businesses work smarter and grow.",
    url: "https://ernest-fakokunde-ayodele.vercel.app",
    siteName: "Ernest Fakokunde",
    type: "website",
  },
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
