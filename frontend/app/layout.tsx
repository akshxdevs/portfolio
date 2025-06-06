import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { RecoilProvider } from "./providers/providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "akshxdevs-portfolio",
  description: "Themed by -akshxdevs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
