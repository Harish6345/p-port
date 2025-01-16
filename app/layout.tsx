import type { Metadata } from "next";
import { Nunito_Sans, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito=Nunito_Sans({
  variable: "--nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio website", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
