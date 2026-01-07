import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blockgram Landing Page",
  description: "Landing page for Blockgram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
