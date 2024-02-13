import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({ subsets: ["latin"],
variable : '--font-work-sans', 
weight : ['400', '700', '800'] });

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "A minimalis figma clone using Fabric.js and Liveblocks for realtime collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
