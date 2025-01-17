import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200' ,'300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Snippet",
  description: "Create your snippet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
