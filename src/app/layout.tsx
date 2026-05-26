import type { Metadata } from "next";
import { Archivo, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kallol's Playground",
  description: "A digital mark of my work, hobbies and thoughts.  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${archivo.className} ${archivo.className} antialiased  bg-cover`}
      >
        {children}
      </body>
    </html>
  );
}
