import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alexander W Cheney",
  description: "welcome to my branches of life",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={newsreader.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
