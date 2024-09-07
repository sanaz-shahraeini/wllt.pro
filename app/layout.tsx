import type { Metadata } from "next";

import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});
import "./globals.css";



export const metadata: Metadata = {
  title: "Wllt.pro",
  description: "Wllt.pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <body>{children}</body>
    </html>
  );
}
