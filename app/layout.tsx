import type { Metadata } from "next";
import "./globals.css";
import './style.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "캠핑메이커",
  description: "캠핑카 제작 홈페이지",
  other: {
    'naver-site-verification': '632bbdbe748e6125f42049c66acc306736a8ad8e',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
