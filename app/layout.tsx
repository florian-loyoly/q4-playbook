import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import "./globals.css";
import { GateProvider } from "@/lib/gate";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://q4-playbook.vercel.app"),
  title: "The Ultimate Q4 Playbook 2026",
  description:
    "The Q4 customer journey, sponsored by the experts who master it. Nine stages, nine partner playbooks for Black Friday, Cyber Week and the holidays.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${inter.variable}`}>
      <body>
        <GateProvider>{children}</GateProvider>
      </body>
    </html>
  );
}
