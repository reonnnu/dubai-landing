"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight, Check, X } from 'lucide-react'
import Head from 'next/head'


export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isButtonAnimated, setIsButtonAnimated] = useState(false)

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "o1vx3tg2e2");
    `;
    document.head.appendChild(script);

    const animationInterval = setInterval(() => {
      setIsButtonAnimated(true)
      setTimeout(() => setIsButtonAnimated(false), 1000)
    }, 5000)

    return () => {
      document.head.removeChild(script);
      clearInterval(animationInterval)
    };
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-gray-100">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ドバイ総合研究所 by Logical X - ドバイ移住・不動産購入/会計サポート</title>
        <meta name="description" content="ドバイ総合研究所が、法人設立/不動産購入/ビザ取得/税務/海外移住まで、あなたのドバイ移住を全力サポートします。" />
        <meta property="og:url" content="https://lp.getfr33.com" />
        <meta property="og:title" content="ドバイ総合研究所 by Logical X - ドバイ移住・不動産購入サポート" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="ドバイ総合研究所が、法人設立/不動産購入/ビザ取得/税務/海外移住まで、あなたのドバイ移住を全力サポートします。" />
        <meta property="og:image" content="http://getfr33.com/wp-content/uploads/2024/07/logo_yoko_fix.png" />
        <meta property="og:site_name" content="ドバイ総合研究所 by Logical X" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LogicalX_Dubai" />
        <link rel="canonical" href="https://lp.getfr33.com" />
        <link rel="icon" href="/icon.png" />
      </Head>

      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="http://getfr33.com/wp-content/uploads/2024/07/logo_yoko_fix.png" alt="ドバイ総合研究所 by Logical X" className="h-12 md:h-16 w-auto" />
          </a>
          <nav className="hidden md:flex space-x-4">
            <a href="#features" className="text-sm hover:text-primary transition-colors">サービス特徴</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">価格</a>
            <a href="#team" className="text-sm hover:text-primary transition-colors">対応メンバー</a>
            <a href="#testimonials" className="text-sm hover:text-primary transition-colors">お客様の声</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">よくある質問</a>
            <a href="#founder" className="text-sm hover:text-primary transition-colors">創業者からの手紙</a>
          </nav>
          <Button className="hidden md:inline-flex bg-[#06C755] hover:bg-[#05A847] transition-colors duration-300">
            <a href="https://s.lmes.jp/landing-qr/2001137955-jWxrM6pe?uLand=3vYW85" target="_blank" rel="noopener noreferrer">
              無料カウンセリング予約
            </a>
          </Button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#features" className="text-sm hover:text-primary transition-colors">サービス特徴</a>
              <a href="#pricing" className="text-sm hover:text-primary transition-colors">価格</a>
              <a href="#team" className="text-sm hover:text-primary transition-colors">対応メンバー</a>
              <a href="#testimonials" className="text-sm hover:text-primary transition-colors">お客様の声</a>
              <a href="#faq" className="text-sm hover:text-primary transition-colors">よくある質問</a>
              <a href="#founder" className="text-sm hover:text-primary transition-colors">創業者からの手紙</a>
              <Button className="w-full">
                <a href="https://s.lmes.jp/landing-qr/2001137955-jWxrM6pe?uLand=3vYW85" target="_blank" rel="noopener noreferrer">
                  無料カウンセリング予約
                </a>
              </Button>
            </nav>
          </div>
        )}
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16702186461"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16702186461');
          `
        }} />
      </header>

      {/* ヒーローセクション（FV） */}
      <section className="relative pt-32 pb-16 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="http://getfr33.com/wp-content/uploads/2024/09/att.zbJGWhgPoCJf3lk_mn5X7oWyh-R3qAngwK9Z24WygPg.jpg"
            alt="ドバイの夜景"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            ドバイ移住で明日から<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">税金0の人生を</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            ドバイ総合研究所が、法人設立/不動産購入/ビザ取得/会計サポート/海外移住まで、あなたのドバイ移住を全力サポートします。
          </p>
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="relative">
              <div className={`absolute inset-0 bg-[#06C755] opacity-75 blur-lg transition-all duration-300 ${isButtonAnimated ? 'scale-110' : 'scale-100'}`}></div>
              <Button 
                size="lg" 
                className={`relative w-full md:w-auto bg-gradient-to-r from-[#06C755] to-[#05A847] hover:from-[#05A847] hover:to-[#06C755] transition-all duration-300 transform hover:scale-105 shadow-lg ${isButtonAnimated ? 'animate-pulse' : ''}`}
              >
                <a href="https://s.lmes.jp/landing-qr/2001137955-jWxrM6pe?uLand=3vYW85" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-4 text-lg font-semibold">
                  無料相談をLINEで予約する
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                今すぐ予約！
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-xs font-semibold">仮想通貨決済対応</span>
              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="BTC" width={24} height={24} className="rounded-full" />
              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="ETH" width={24} height={24} className="rounded-full" />
              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png" alt="USDC" width={24} height={24} className="rounded-full" />
              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png" alt="USDT" width={24} height={24} className="rounded-full" />
            </div>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#54bbff] to-[#0073e6] text-white text-center py-1 z-10 rounded-t-lg">
              <span className="text-xs font-semibold">詳しい内容を動画でチェック👇️</span>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
              <script src="https://fast.wistia.com/embed/medias/wu9gjdinne.jsonp" async></script>
              <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
              <div className="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
                <div className="wistia_responsive_wrapper" style={{height:'100%', left:0, position:'absolute', top:0, width:'100%'}}>
                  <div className="wistia_embed wistia_async_wu9gjdinne seo=true videoFoam=true" style={{height:'100%', position:'relative', width:'100%'}}>
                    <div className="wistia_swatch" style={{height:'100%', left:0, opacity:0, overflow:'hidden', position:'absolute', top:0, transition:'opacity 200ms', width:'100%'}}>
                      <img src="https://fast.wistia.com/embed/medias/wu9gjdinne/swatch" style={{filter:'blur(5px)', height:'100%', objectFit:'contain', width:'100%'}} alt="" aria-hidden="true" onLoad={(e) => {
                        const parentNode = e.currentTarget.parentNode as HTMLElement;
                        if (parentNode) {
                          parentNode.style.opacity = '1';
                        }
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 提携企業ロゴセクション */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-2xl md:text-3xl font-bold mb-6">TRUSTED BY</h3>
          <p className="text-center text-sm mb-8">現地企業や中小企業から、プライム上場企業まで幅広く取引をしています。</p>
          <div className="relative overflow-hidden w-full">
            <div className="flex animate-scroll md:animate-scroll-slow space-x-0 py-2" style={{ width: "100%" }}>
              {[
                { name: 'Company A', url: 'http://logicalx.co/wp-content/uploads/2024/09/202404181822080014-1.png' },
                { name: 'Company B', url: 'http://logicalx.co/wp-content/uploads/2024/09/RAKEZLogo-English.png' },
                { name: 'Company C', url: 'http://logicalx.co/wp-content/uploads/2024/09/IFZA-LOGO002.jpg' },
                { name: 'Company D', url: 'http://logicalx.co/wp-content/uploads/2024/09/FPAN1YEaQAIFro-.jpg' },
                { name: 'Company E', url: 'http://logicalx.co/wp-content/uploads/2024/09/png-clipart-logo-re-max-llc-re-max-valley-real-estate-brand-remax-balloon-company-text.png' },
                { name: 'Company F', url: 'http://getfr33.com/wp-content/uploads/2024/09/ogp.jpg' },
                { name: 'Company G', url: 'http://getfr33.com/wp-content/uploads/2024/09/21422934.jpg' },
                { name: 'Company H', url: 'http://getfr33.com/wp-content/uploads/2024/09/9447318b-3879-4103-b2e2-f93b2d9027bb.png' },
                { name: 'Company I', url: 'http://getfr33.com/wp-content/uploads/2024/09/1-desktop.jpg' },
              ].concat([
                { name: 'Company A', url: 'http://logicalx.co/wp-content/uploads/2024/09/202404181822080014-1.png' },
                { name: 'Company B', url: 'http://logicalx.co/wp-content/uploads/2024/09/RAKEZLogo-English.png' },
                { name: 'Company C', url: 'http://logicalx.co/wp-content/uploads/2024/09/IFZA-LOGO002.jpg' },
                { name: 'Company D', url: 'http://logicalx.co/wp-content/uploads/2024/09/FPAN1YEaQAIFro-.jpg' },
                { name: 'Company E', url: 'http://logicalx.co/wp-content/uploads/2024/09/png-clipart-logo-re-max-llc-re-max-valley-real-estate-brand-remax-balloon-company-text.png' },
                { name: 'Company F', url: 'http://getfr33.com/wp-content/uploads/2024/09/ogp.jpg' },
                { name: 'Company G', url: 'http://getfr33.com/wp-content/uploads/2024/09/21422934.jpg' },
                { name: 'Company H', url: 'http://getfr33.com/wp-content/uploads/2024/09/9447318b-3879-4103-b2e2-f93b2d9027bb.png' },
                { name: 'Company I', url: 'http://getfr33.com/wp-content/uploads/2024/09/1-desktop.jpg' },
              ]).map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-[150px] mx-4">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-10 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* メディア掲載実績セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">メディア掲載実績</h2>
          <div className="flex flex-col md:flex-row items-stretch justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2 bg-gray-100 rounded-lg shadow-md p-6 flex flex-col">
              <div className="mb-4 flex justify-center">
                <img 
                  src="http://logicalx.co/wp-content/uploads/2024/09/FPAN1YEaQAIFro-.jpg" 
                  alt="ABEMA Prime ロゴ" 
                  className="h-12"
                />
              </div>
              <div className="flex-grow mb-4">
                <img 
                  src="https://getfr33.com/wp-content/uploads/2024/04/72fe13c1568b89b547e541d4d4bf5e2c.jpg" 
                  alt="ABEMA Prime 特集" 
                  className="w-full h-auto object-cover rounded-lg shadow"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">ABEMA Primeで特集されました</h3>
              <p className="text-gray-600">
                2024年4月24日放送の「ABEMA Prime」に弊社の移住コンサルタント鈴木結が出演しました。「なぜドバイに人は集まるのか」をテーマに、税制や治安、生活状況などについて議論を行いました。
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 rounded-lg shadow-md p-6 flex flex-col">
              <div className="mb-4 flex justify-center">
                <img 
                  src="http://getfr33.com/wp-content/uploads/2024/09/Yahoo_News_Japan_logo.png" 
                  alt="Yahoo! JAPAN ニュース ロゴ" 
                  className="h-12"
                />
              </div>
              <div className="flex-grow mb-4">
                <img 
                  src="http://getfr33.com/wp-content/uploads/2024/09/2024-09-12_09h23_42.jpg" 
                  alt="Yahoo! JAPAN ニュース 記事スクリーンショット" 
                  className="w-full h-auto object-cover rounded-lg shadow"
                  style={{aspectRatio: '16/9'}}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Yahoo! JAPANニュースで紹介されました</h3>
              <p className="text-gray-600">
                弊社の記事がYahoo! JAPANニュースに取り上げられました。ドバイ移住に関する最新の情報や、弊社のサービスについて詳しく紹介されています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ドバイ移住/不動産購入のメリット</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <img 
                src="http://getfr33.com/wp-content/uploads/2022/09/0fb4dcbf924a333d507fc55fc0d16ad9.png" 
                alt="ドバイ移住/不動産購入のメリット" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <ul className="space-y-6">
                  {[
                    "個人所得税0%",
                    "法人税0%（フリーゾーン）(条件付き)",
                    "不動産投資による高利回り",
                    "治安の良さと高品質な生活環境"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </span>
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ドバイ総研ができること</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">ドバイ移住サポート</h3>
                <div className="relative h-64 mb-4">
                  <img src="http://getfr33.com/wp-content/uploads/2024/09/GNsaxUOW8AArtp7.jpg" alt="ドバイのスカイライン" className="w-full h-full object-cover rounded-md" />
                </div>
                <p className="text-gray-600 text-sm">
                  ドバイへの移住をトータルサポート。法人設立、ビザ取得から住居探し、銀行口座開設まで、あなたの新生活のスタートを全面的にバックアップします。
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">ドバイ不動産購入サポート</h3>
                <div className="relative h-64 mb-4">
                  <img src="http://getfr33.com/wp-content/uploads/2024/09/IMG_4983.jpg" alt="ドバイの不動産" className="w-full h-full object-cover rounded-md" />
                </div>
                <p className="text-gray-600 text-sm">
                  ドバイの不動産市場に精通したエキスパートといっしょに、あなたの予算と希望に合わせた物件選びから購入手続きまでをサポートします。
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">その他なんでもご相談</h3>
                <div className="relative h-64 mb-4">
                  <img src="http://getfr33.com/wp-content/uploads/2024/09/Snipaste_2024-09-12_16-58-14.jpg" alt="相談風景" className="w-full h-full object-cover rounded-md" />
                </div>
                <p className="text-gray-600 text-sm">
                  ドバイ生活に関するあらゆる疑問や不安にお答えします。SIMが切れた？Wifiが繋がらなくなった？我々にお任せください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* サービスの特徴 */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">サービスの特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <img src="http://getfr33.com/wp-content/uploads/2024/09/Group-1-e1726309223577.png" alt="手厚いチャット対応" width={375} height={500} className="mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-center">チャット対応で、なんでも相談可能！</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>ドバイ総研のサポーターが、原則5時間以内にチャットで返答</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>LINE/Messenger/Chatwork全て対応</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>不動産、銀行口座開設など、幅広い分野でサポート提供</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <img src="http://getfr33.com/wp-content/uploads/2024/09/Chat-screen-1.png" alt="国際税務サポート" width={375} height={406} className="mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-center">国際税務サポート</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>国際税務の黒田氏と提携し、日本の非居住者判定を徹底サポート</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>弊社オリジナルの居住者判定チェックシートも提供</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <img src="http://getfr33.com/wp-content/uploads/2024/09/step2.jpg" alt="幅広い法人設立アドバイス" width={375} height={406} className="mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-center">幅広い法人設立アドバイス</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>IFZAやJAFZAなど、お客様のビジネスに合わせたフリーゾーンやライセンスを提案</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>仮想通貨ビジネスに適したBVI法人なども紹介可能</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 価格表 */}
      <section id="pricing" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">法人設立やVISA取得にかかる価格</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">エンタープライズ</h3>
                <p className="text-2xl font-bold mb-6 text-center">お問い合わせ</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>カスタマイズされたソリューション</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>専任サポートチーム</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>オフィス用賃貸の選定</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>優先サポート</span>
                  </li>
                </ul>
                <Button className="w-full">LINEで問い合わせする</Button>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">スタンダード</h3>
                <p className="text-3xl font-bold mb-2">48,000 AED<span className="text-lg font-normal">（約184万円）</span></p>
                <p className="text-green-600 font-semibold mb-2">ビザ1名様の価格</p>
                <p className="text-sm text-gray-600 mb-6">※ビザの枚数によっては変動あり。詳しくはLINEでお問い合わせください。</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>移住ビザの取得サポート</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>法人設立手続き代行</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>法人・個人銀行口座開設サポート</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>生活お役立ち情報提供</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>居住予定不動産の下見同行（1回）</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>非居住者判定チェックリスト(30万円相当)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>各種現地同行サポート（車での送迎）</span>
                  </li>
                </ul>
                <Button className="w-full">LINEで問い合わせする</Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-8 text-sm text-gray-600">
            ※ 不動産購入、ドバイ視察、会計サポートなどの追加サービスの料金は別途ご相談ください。
          </p>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section id="service-flow" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ご利用の流れ</h2>
          <div className="space-y-2">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <img src="https://chat.logicalx.co/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcGdCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6cef732e32f121cb78a860829f2b4e8a12ae1550/IMG_4981.png" alt="ステップ1" width={300} height={225} className="rounded-lg shadow-sm" />
                </div>
                <div className="w-full md:w-1/2 md:pl-6">
                  <h3 className="text-xl font-semibold mb-2">1. お問い合わせ</h3>
                  <p className="text-gray-700 text-sm">LINEまたはウェブサイトからお気軽にお問い合わせください。ご要望やご質問をお聞かせください。</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="http://getfr33.com/wp-content/uploads/2024/09/arrow.png" alt="下向き矢印" className="mx-auto w-12 h-18" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <img src="http://getfr33.com/wp-content/uploads/2024/09/step2.jpg" alt="ステップ2" width={300} height={225} className="rounded-lg shadow-sm" />
                </div>
                <div className="w-full md:w-1/2 md:pr-6">
                  <h3 className="text-xl font-semibold mb-2">2. 無料カウンセリング</h3>
                  <p className="text-gray-700 text-sm">専門スタッフがお客様のニーズを詳しくヒアリングし、最適なプランをご提案いたします。</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="http://getfr33.com/wp-content/uploads/2024/09/arrow.png" alt="下向き矢印" className="mx-auto w-12 h-18" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <img src="http://getfr33.com/wp-content/uploads/2024/09/step3.png" alt="ステップ3" width={300} height={500} className="rounded-lg shadow-sm" />
                </div>
                <div className="w-full md:w-1/2 md:pl-6">
                  <h3 className="text-xl font-semibold mb-2">3. サービス開始</h3>
                  <p className="text-gray-700 text-sm">契約後、すぐにサポートを開始します。ドバイ進出に向けて、一緒に歩んでいきましょう。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 対応メンバー */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">移住コンサルタント</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "http://getfr33.com/wp-content/uploads/2023/04/edb316e5bb73ababdc022dcd1443c523-100x100.png",
                position: "COO 兼 ドバイ移住コンサルタント総括",
                name: "加藤 宗士",
                facebook: "https://www.facebook.com/KatoSohshi",
                description: "2020年、東京大学在学中にインフルエンサービジネスを行う株式会社 Ｎａｐｏｌｅｏｎを創業。2022年にパーソルイノベーション株式会社に株式会社 Ｎａｐｏｌｅｏｎを売却。その後ドバイに移住しLogical X FZCOにCOOとしてジョイン。"
              },
              {
                image: "https://logicalx.co/wp-content/uploads/2024/09/feXrnalA_400x400.jpg",
                position: "ドバイ移住コンサルタント",
                name: "鈴木結/Suzuki Yu",
                twitter: "https://x.com/dubaiisgood",
                description: "大学卒業後、国内EC事業者向けプラットフォームを提供する会社にてカスタマーサクセスとして従事。ドバイの可能性に魅了され2024年1月に移住。ドバイ情報をXで発信中。趣味は美容。Habibi come to Dubai！"
              },
              {
                image: "https://logicalx.co/wp-content/uploads/2024/09/T04B7EATYHJ-U06U8JSP4S1-86590d1c178c-512.png",
                position: "ドバイ移住コンサルタント",
                name: "Shuho Kanasaki🌰",
                description: "ドバイ総合コンサルタント。新潟大学法学部卒業後、国内半導体商社やドバイの和食店で経験を積む。フットワーク軽く現地情報を収集し、お客様へ最適なサポートを提供。趣味は街歩き。ドバイ在住2年のエキスパート。"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                {member.image && <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src={member.image} alt={member.name} />}
                {!member.image && <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold">{member.name[0]}</div>}
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">{member.position}</p>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="flex justify-center space-x-2 mb-4">
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                      </a>
                    )}
                    {member.facebook && (
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 inline-block shadow-sm">
              <p className="text-lg text-gray-700 mb-4">
                私たちの日々の業務をのぞいてみませんか？ 🎥
              </p>
              <a 
                href="https://www.youtube.com/watch?v=adiol1tOP28" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-2 rounded-full hover:from-blue-500 hover:to-purple-500 transition duration-300 shadow-md"
              >
                YouTubeでエージェント1日密着動画を見る 👀
              </a>
              <p className="text-sm text-gray-600 mt-4">
                一緒にドバイ生活を始めましょう！ ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お客様のリアルな声 */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">お客様のリアルな喜びの声</h2>
          <div className="text-center mb-12">
            <span className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
              実際のところ、どれくらい得をしたの？💰
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "XXさん",
                age: "50代半ば",
                occupation: "システム開発会社経営者",
                family: "4人家族（お子さん2人と奥様）",
                comment: "リタイアメント生活を視野に入れ、税制面でのメリットを考慮してドバイを選びました。生活費は意外と手頃で、治安も良く、FX取引にも適した環境です。ロジカルXのサポートは迅速で丁寧で、若いスタッフの情報収集能力に感心しました。",
                highlights: [
                  "シンガポール、マレーシア、タイと比較検討",
                  "生活費は東京と同程度か少し高い程度",
                  "天候が安定（雨が少ない）",
                  "ロンドン・ニューヨーク市場時間帯が活動時間と重なる",
                  "引きこもり気味の人にも適している"
                ],
                advice: "ドバイは意外と住みやすいです。移住サポートはフットワークの良い会社を選ぶことをおすすめします。",
                videoId: "DCYGFqE06Jk",
                videoTitle: "システム開発会社経営者が語るドバイ移住のメリット・デメリット"
              },
              {
                name: "XXさん",
                age: "27歳",
                occupation: "Web広告代理店経営者・アフィリエイト事業者",
                comment: "ドバイの急速な経済成長と税制面でのメリットに魅力を感じ、弟と共に移住を決意しました。不動産購入による移住で年間数千万円単位の節税効果があり、若い世代にも大きなチャンスがあることを実感しています。",
                highlights: [
                  "30歳までの海外移住という目標を達成",
                  "日本との時差が5時間で仕事がしやすい",
                  "英語が完璧でなくても生活可能",
                  "自由な生活スタイルと刺激的な日本人コミュニティ",
                  "ロジカルXのスピーディーで顧客目線のサポート"
                ],
                advice: "オンラインで完結する事業を行っている人や、人生に刺激を求める若い方におすすめです。ドバイの日本人コミュニティは面白く優秀な人が多いので、新たな可能性が広がります。",
                videoId: "2eq5IYR1l-k",
                videoTitle: "27歳起業家がドバイ不動産を購入・移住した理由と体験談"
              },
              {
                name: "YUJIさん",
                age: "30代",
                occupation: "オンラインスクール運営者・マーケティングコンサルタント・YouTuber",
                comment: "税金対策を主な目的としてドバイ法人設立を決意しました。約3ヶ月という短期間で法人設立からビザ取得まで完了し、ロジカルXのスピーディーなサポートに助けられました。ドバイの生活インフラの充実度には驚かされます。",
                highlights: [
                  "完全オンラインのビジネスモデルで税制メリットを最大化",
                  "法人はドバイ、個人はタイに居住予定で最適化を図る",
                  "2週間の短期滞在で全手続きを完了",
                  "ドバイのアプリやインフラの優秀さに感銘",
                  "Web3関連ビジネスや新規チャンスを求める人におすすめ"
                ],
                advice: "信頼できる紹介元からのサービス選びが重要です。ドバイに少しでも興味があれば、検討する価値は十分にあります。",
                videoId: "MuMs50_Q0_Y",
                videoTitle: "30歳日本人経営者に聞くドバイで法人設立した理由"
              },
               {
                name: "Yさん",
                age: "30代",
                occupation: "仮想通貨投資家",
                comment: "含み益が無税というドバイの税制に魅力を感じ、即決で移住を決めました。投資家にとっては大きなメリットです。",
                highlights: [
                  "含み益が無税という魅力的な税制",
                  "投資家にとって大きなメリット",
                  "即決での移住決断"
                ],
                videoId: "jg_6qT7dL-M",
                videoTitle: "32歳の仮想通貨投資家がドバイ移住を即決した理由"
              },
              {
                name: "Xさん",
                age: "26歳",
                occupation: "専業トレーダー・投資家",
                comment: "新しいチャレンジとして一人でドバイに移住しました。税制面でのメリットや自由な時間の使い方が魅力です。想像以上に住みやすい環境ですが、人との交流は意識して作る必要があります。",
                highlights: [
                  "税制面でのメリット（投資収益への課税が大幅に軽減）",
                  "英語環境での生活による語学力向上",
                  "充実した宅配サービスと多国籍の人々との交流機会"
                ],
                videoId: "Evv23sYt4RM",
                videoTitle: "20代トレーダーがドバイ移住を決めた理由と生活の実態"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src={`/testimonial-${index + 1}.jpg`} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-sm">{testimonial.name}</h3>
                      <p className="text-xs text-gray-600">{testimonial.age}、{testimonial.occupation}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">&quot;{testimonial.comment}&quot;</p>
                  <div className="mb-3">
                    <h4 className="font-semibold text-sm mb-2">ポイント：</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {testimonial.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative pt-[56.25%]">
                    <iframe 
                      src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                      title={testimonial.videoTitle}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section id="dubai-process" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ドバイ移住の流れ</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <img src="http://getfr33.com/wp-content/uploads/2024/09/GNsaxUOW8AArtp7.jpg" alt="ステップ1" width={300} height={225} className="rounded-lg shadow-sm" />
                </div>
                <div className="w-full md:w-1/2 md:pl-6">
                  <h3 className="text-xl font-semibold mb-2">1. エージェント選び</h3>
                  <p className="text-gray-700 text-sm">信頼できるドバイ法人設立代行エージェントを見つけます。ドバイ総研では、鈴木や金崎エージェントがあなたの移住をサポートします。</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="http://getfr33.com/wp-content/uploads/2024/09/arrow.png" alt="下向き矢印" className="mx-auto w-6 h-12" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <img src="http://getfr33.com/wp-content/uploads/2024/09/step2.jpg" alt="ステップ2" width={300} height={225} className="rounded-lg shadow-sm" />
                </div>
                <div className="w-full md:w-1/2 md:pr-6">
                  <h3 className="text-xl font-semibold mb-2">2. 法人設立場所とライセンス決定</h3>
                  <p className="text-gray-700 text-sm">フリーゾーンの選択と必要なライセンスを決定します。エージェントと相談しながら最適な選択をしましょう。</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="http://getfr33.com/wp-content/uploads/2024/09/arrow.png" alt="下向き矢印" className="mx-auto w-6 h-12" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <img src="http://getfr33.com/wp-content/uploads/2024/09/step3.png" alt="ステップ3" width={300} height={225} className="rounded-lg shadow-sm" />
                </div>
                <div className="w-full md:w-1/2 md:pl-6">
                  <h3 className="text-xl font-semibold mb-2">3. 必要書類の準備と提出</h3>
                  <p className="text-gray-700 text-sm">パスポートコピーや証明写真など、必要な書類を準備し提出します。エージェントの指示に従って手続きを進めましょう。</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="http://getfr33.com/wp-content/uploads/2024/09/arrow.png" alt="下向き矢印" className="mx-auto w-6 h-12" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <img src="http://getfr33.com/wp-content/uploads/2024/09/att.DzScImL9_8G4nI62xB-50_eQzRZkwqm_JUtP3_cNZcc.jpg" alt="ステップ4" width={300} height={225} className="rounded-lg shadow-sm" />
                </div>
                <div className="w-full md:w-1/2 md:pr-6">
                  <h3 className="text-xl font-semibold mb-2">4. ドバイ入国と各種手続き</h3>
                  <p className="text-gray-700 text-sm">ドバイに入国し、健康診断、指紋登録、エミレーツID用の写真撮影などの手続きを行います。エージェントのサポートを受けながら進めましょう。</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="http://getfr33.com/wp-content/uploads/2024/09/arrow.png" alt="下向き矢印" className="mx-auto w-6 h-12" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <img src="http://getfr33.com/wp-content/uploads/2024/09/att.zbJGWhgPoCJf3lk_mn5X7oWyh-R3qAngwK9Z24WygPg.jpg" alt="ステップ5" width={300} height={225} className="rounded-lg shadow-sm" />
                </div>
                <div className="w-full md:w-1/2 md:pl-6">
                  <h3 className="text-xl font-semibold mb-2">5. 居住ビザとエミレーツID取得</h3>
                  <p className="text-gray-700 text-sm">必要な手続きが完了すると、居住ビザとエミレーツIDが発行されます。これらの取得で正式にドバイでの生活が始まります。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* よくある質問（FAQ） */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "💰 ドバイ移住にはどのくらいの費用がかかりますか？",
                answer: "ドバイ移住の費用は個人の状況によって大きく異なりますが、一般的に法人設立費用、ビザ取得費用、住居費用などが主な出費となります。詳細は無料カウンセリングでご相談ください。"
              },
              {
                question: "🏛️ 日本の税金はどうなりますか？",
                answer: "日本の非居住者となることで、日本国外での所得に対する課税を避けることができます。ただし、正確な判断には専門家のアドバイスが必要です。当社では国際税務の専門家と連携し、お客様の状況に応じたアドバイスを提供しています。"
              },
              {
                question: "💸 ドバイでの生活費はどのくらいですか？",
                answer: "ドバイの生活費は、住居の選択や生活スタイルによって大きく変わります。一般的に、日本の大都市と比較すると、食費や日用品は同程度か少し安い傾向にありますが、住居費は高めです。詳細な試算は個別相談で行っています。"
              },
              {
                question: "✈️ 日本に一時帰国することは可能ですか？",
                answer: "はい、可能です。ただし、日本での滞在日数や活動内容によっては税務上の影響がある場合があります。当社では、お客様の渡航計画に基づいて、税務リスクを最小限に抑えるアドバイスを提供しています。"
              },
              {
                question: "🏢 ドバイで起業するメリットは何ですか？",
                answer: "ドバイでの起業の主なメリットには、法人税や個人所得税が0%であること、戦略的な地理的位置、充実したインフラ、多様な人材プールなどがあります。また、政府の起業支援策も充実しています。具体的なメリットは、ビジネスモデルによって異なるため、個別相談で詳しくご説明いたします。"
              },
              {
                question: "💳 送金や決済はどのように行えますか？",
                answer: "当社では、お客様の利便性を考慮し、複数の送金・決済オプションをご用意しています。Stripeやwiseを使用した入金、または日本支社の銀行口座への送金が可能です。具体的な方法や手数料については、個別にご案内いたしますので、お気軽にお問い合わせください。"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="px-6 py-4 bg-primary text-white hover:bg-primary-dark transition-colors">
                      <span className="text-xl font-semibold">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="p-6 text-lg leading-relaxed">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 創業者からの手紙 */}
      <section id="founder" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">創業者からのメッセージ</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-4 text-gray-700">
              <h3 className="text-2xl font-bold mb-4">長期的な視点を大切に、日々を過ごす</h3>
              <p>
                はじめまして、代表の松田です。20代半ばで、石川の田舎から東京を経て、単身でドバイに移住しました。
                環境が変わると、世界の見方が一変し、新しい視点が生まれるものです。
              </p>
              <p>
                場所を変えることは、長い目で見ると大きな投資になると実感しています。
                私たちがサポートしたいのは、そうした中長期的な視点で決断に取り組む方々です。
              </p>
              <p>
                目先の変動に惑わされず、大局的に判断できる個人投資家、小規模事業者、ご家族の皆様。
                こういった方々こそ、私たちが最も大切にするお客様です。
              </p>
              <h4 className="text-xl font-semibold mt-6 mb-3">私たちの目標は、新しい機会に挑戦する人々をサポートすること</h4>
              <p>
                ドバイ総研は、夢を追う人々のためにあります。個人起業家、創造性豊かな小規模チーム、
                質を重視する中小企業の皆様。私たちは、そんな「小さくても大きな可能性を秘めた」お客様を
                全力でバックアップします。
              </p>
              <p>
                移住というのは、新しい挑戦であり、人生を豊かに変えます。環境を変えることが人生に大きな影響を与えることが多々あります。
              </p>
              <h4 className="text-xl font-semibold mt-6 mb-3">ドバイ総研のミッション</h4>
              <p>
                海外移住を引っ越しのように気軽に。そういったミッションで我々は快適な移住サポート事業に取り組んでいます。
              </p>
              <h4 className="text-xl font-semibold mt-6 mb-3">私たちはあなたの味方です</h4>
              <p>
                私たちは、お客様と自分たち自身にのみ答えを求めます。外部投資家も取締役会もなく、
                上場や売却の予定もありません。お客様のために素晴らしいサービスを作ることに
                専念した、独立自営の会社です。
              </p>
              <div className="bg-primary-100 p-4 rounded-md mt-6">
                <p className="font-semibold">
                  ドバイ総研を選ぶことは、あなた自身、そしてあなたの会社に投資することです。
                  ドバイでゆっくりするもよし、新しい挑戦をするもよしです。
                </p>
              </div>
              <p className="mt-6">
                ぜひ、私たちと一緒に素敵な毎日への一歩を踏み出しましょう。
              </p>
              <div className="mt-8 text-center">
                <img src="http://logicalx.co/wp-content/uploads/2024/09/newsign.png" alt="松田 怜央の署名" className="mx-auto mb-4" style={{maxWidth: "200px"}} />
                <div className="flex items-center justify-center mt-4">
                  <Avatar className="w-16 h-16 mr-4">
                    <AvatarImage src="https://logicalx.co/wp-content/uploads/2023/04/T04B7EATYHJ-U04AYCKAFGE-22717ad1f2ae-512.png" alt="松田 怜央" />
                    <AvatarFallback>松田</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">松田 怜央</h3>
                    <p className="text-gray-600">代表取締役</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-sm">
                <p>
                  お読みいただき、ありがとうございます。ドバイ総研にご興味を持っていただき感謝申し上げます。
                  ご質問やお問い合わせがございましたら、いつでも <a href="mailto:hi@logicalx.com" className="text-primary hover:underline">hi@logicalx.com</a> までご連絡ください。
                  松田や鈴木が直接お返事いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 最終CTA */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">ドバイ移住の第一歩を踏み出そう</h2>
          <p className="text-xl mb-12">専門家があなたの疑問にお答えします</p>
          <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 z-10 sm:top-1/4 sm:left-1/4">
            <div className="transform -rotate-45 bg-primary bg-opacity-30 text-white text-xs sm:text-sm md:text-base font-bold py-1 px-2 sm:py-2 sm:px-3 md:py-3 md:px-4 shadow-lg">
              無料カウンセリング実施中！
            </div>
          </div>
          <img src="https://card.kiok.jp/images/lp/arrow-down-1.svg" alt="下向き矢印" className="mx-auto my-8 w-16 h-16 animate-bounce" />
          <Button 
            size="lg" 
            className="bg-[#06C755] hover:bg-[#05A847] text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <a href="https://s.lmes.jp/landing-qr/2001137955-jWxrM6pe?uLand=3vYW85" target="_blank" rel="noopener noreferrer" className="flex items-center">
              LINEで無料カウンセリングを予約
              <ChevronRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">今なら登録で特典をプレゼント！</h3>
            <div className="flex justify-center space-x-8">
              <div>
                <img src="http://getfr33.com/wp-content/uploads/2024/09/1721288383-1.png" alt="ドバイ不動産の教科書" className="w-48 h-48 object-cover rounded-lg shadow-lg" />
                <p className="mt-2">ドバイ不動産の教科書</p>
              </div>
              <div>
                <img src="http://getfr33.com/wp-content/uploads/2024/09/1721288326-1.png" alt="ドバイ移住の教科書" className="w-48 h-48 object-cover rounded-lg shadow-lg" />
                <p className="mt-2">ドバイ移住の教科書</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">本社</h3>
              <p className="text-sm">
                社名: Logical X Consultancy FZ-LLC<br />
                代表取締役: 松田 怜央<br />
                本社所在地: FOB50848 Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates<br />
                設立: 2023年 6月<br />
                資本金: 10,000AED<br />
                主要取引銀行: MASHREQ BANK<br />
                事業内容: 移住事業、ウェブサービス開発受託
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">日本支部</h3>
              <p className="text-sm">
                社名: 株式会社 ドバイ総合研究所<br />
                本店所在地: 東京都新宿区新宿１丁目３６番２号新宿第七葉山ビル３階<br />
                設立: 2024年9月<br />
                資本金: 10万円<br />
                主要取引銀行: 住信SIBネット銀行<br />
                事業内容: ドバイ不動産のセミナーの企画/WEBサービス開発<br />
                電話番号: +81 070 84443256
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <p className="text-sm">
              メール: hi@logicalx.com<br />
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; 2024 ドバイ総合研究所 by Logical X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
