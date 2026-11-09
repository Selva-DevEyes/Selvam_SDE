import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Selvam S | Web Developer · WordPress & Python",
  description: "Selvam S builds production websites and full-stack applications. Explore 6+ years of web development, WordPress client work, Python APIs, and end-to-end delivery including Java Master.",
  keywords: ["Selvam S", "CodeBySelvam", "Python Developer", "Data Analyst", "FastAPI", "Pandas", "WordPress Developer", "Full Stack Developer", "Tirunelveli"],
  authors: [{ name: "Selvam S" }],
  openGraph: {
    title: "Selvam S | Web Developer · WordPress & Python",
    description: "Production websites, Python APIs, and thoughtful user experiences. Explore selected work and 6+ years of web development.",
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
