import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from 'next/head';
import Script from 'next/script';

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
  title: "ドバイ総合研究所 by Logical X - ドバイ移住・不動産購入/会計サポート",
  description: "ドバイ総合研究所が、法人設立/不動産購入/ビザ取得/税務/海外移住まで、あなたのドバイ移住を全力サポートします。",
  openGraph: {
    url: "https://lp.getfr33.com",
    title: "ドバイ総合研究所 by Logical X - ドバイ移住・不動産購入サポート",
    description: "ドバイ総合研究所が、法人設立/不動産購入/ビザ取得/税務/海外移住まで、あなたのドバイ移住を全力サポートします。",
    images: [
      {
        url: "http://getfr33.com/wp-content/uploads/2024/07/logo_yoko_fix.png",
      },
    ],
    siteName: "ドバイ総合研究所 by Logical X",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LogicalX_Dubai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://lp.getfr33.com" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-gray-900 bg-gray-100`}
      >
        {children}
        <SpeedInsights />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "o1vx3tg2e2");
          `}
        </Script>
      </body>
    </html>
  );
}
