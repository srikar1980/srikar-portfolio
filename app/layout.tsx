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
  title: "Srikar Ravoori | Frontend Developer",
  description:
    "Portfolio showcasing projects, skills and experience.",
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
