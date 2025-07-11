// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Zach Shaffer Portfolio",
  description: "Machine Learning Engineer and Creative Technologist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-gradient-to-br from-purple-500 to-blue-500 text-white overflow-x-hidden">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
