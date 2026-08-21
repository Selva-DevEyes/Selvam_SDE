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
  title: "Selvam S | Python Developer & Full-Stack AI Engineer",
  description: "Official portfolio of Selvam S. 6+ years of software & web engineering experience. Python, FastAPI, Pydantic, SQLAlchemy, GenAI, and 410+ shipped WordPress websites.",
  keywords: ["Selvam S", "CodeBySelvam", "Python Developer", "FastAPI", "GenAI", "WordPress Developer", "Full Stack Developer", "Tirunelveli"],
  authors: [{ name: "Selvam S" }],
  openGraph: {
    title: "Selvam S | Python Developer & Full-Stack AI Engineer",
    description: "6+ years of software & web engineering experience specializing in Python, FastAPI, GenAI, and Enterprise Web Development.",
    url: "https://selva-deveyes.github.io/codeBySelvam",
    siteName: "Selvam S Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080c14] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
