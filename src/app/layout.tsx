import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "리그오브레전드 정보 찾기",
  description:
    "리그오브레전드의 챔피언/아이템/로테이션 정보를 찾을 수 있습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary-dark-navy`}
      >
        <header className="flex justify-evenly items-center w-full h-[60px] bg-secondary-dark-navy font-bold text-white">
          <Link href="/">홈</Link>
          <Link href="/champions">챔피언 목록</Link>
          <Link href="/items">아이템 목록</Link>
          <Link href="/rotation">챔피언 로테이션</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
