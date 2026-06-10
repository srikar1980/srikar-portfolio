import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-primary",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Srikar Ravoori | Full Stack Developer",
  description:
    "Full Stack Developer with 4.5+ years of experience in React.js, Next.js, MERN Stack, Fintech and SaaS applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${merriweather.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}