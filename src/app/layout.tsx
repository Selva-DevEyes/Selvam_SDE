import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Selvam S | Python Developer & Data Analyst",
  description: "Official portfolio of Selvam S. Python Developer & Data Analyst with 1 year hands-on experience in Python, SQL, FastAPI, Pandas & 6+ years web engineering foundation.",
  keywords: ["Selvam S", "CodeBySelvam", "Python Developer", "Data Analyst", "FastAPI", "Pandas", "WordPress Developer", "Full Stack Developer", "Tirunelveli"],
  authors: [{ name: "Selvam S" }],
  openGraph: {
    title: "Selvam S | Python Developer & Data Analyst",
    description: "Python Developer & Data Analyst with 1 year hands-on experience in Python, SQL, FastAPI, Pandas, and 6+ years of web engineering experience.",
    url: "https://selvam-sde.onrender.com/",
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
      className="h-full antialiased dark"
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-body)] text-[var(--text-main)] selection:bg-[var(--accent-green)] selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
