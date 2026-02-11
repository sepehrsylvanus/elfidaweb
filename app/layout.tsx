import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ToastProvider from "@/components/toast-provider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elfida Ev Yemekleri - Her Gün Taze Ev Yemekleri, Çekmeköy",
  description:
    "Elfida Ev Yemekleri olarak her gün taze malzemelerle, evinizdeymiş gibi hissedeceğiniz lezzetler hazırlıyoruz. Çekmeköy, İstanbul.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.className} ${playfair.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <ToastProvider />
        <Analytics />
      </body>
    </html>
  );
}
