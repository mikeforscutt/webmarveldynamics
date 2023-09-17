import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Marvel Dynamics",
  description: "Elevating Ideas through Seamless Code and Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        {/* Other meta tags */}
      </Head>
      <body className={inter.className}>
        {children}
        <script src='/js/scrollAnimation.js' async />
      </body>
    </html>
  );
}
