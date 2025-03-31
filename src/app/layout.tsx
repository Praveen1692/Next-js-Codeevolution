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
  title: "Hello Praveen Sharma",
  description: "Praveen Sharma by create next app",
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
      <header style={{backgroundColor:'lightblue',padding:'10px'}}>
        <p>Header</p>
      </header>
      {children}
      <footer style={{backgroundColor:'lightgoldenrodyellow',padding:'10px'}}>
        <p>Footer</p>
      </footer>
      </body>
    </html>
  );
}
