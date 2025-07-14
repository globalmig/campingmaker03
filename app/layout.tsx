import type { Metadata } from "next";
import "./globals.css";
import './style.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "캠핑메이커",
  description: "캠핑카 제작 홈페이지",
  openGraph: {
    title: '캠핑카 제작 No.1 캠핑메이커',
    description: '승합차, 화물차, SUV등 다양한 캠핑카를 제작합니다.',
    url: 'https://www.campingmaker.co.kr/',
    siteName: '캠핑메이커',
    images: [
      {
        url: 'https://www.campingmaker.co.kr/images/og_image.png',
        width: 1200,
        height: 630,
        alt: '캠핑메이커 미리보기 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
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
