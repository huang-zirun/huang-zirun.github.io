import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cherry Nav · 树状个人导航站",
  description: "极简、高效、树状分类的个人知识与网址导航中心",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
