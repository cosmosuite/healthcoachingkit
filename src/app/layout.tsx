import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { CurrencyProvider } from "@/contexts/CurrencyContext";

export const metadata: Metadata = {
  title: {
    default: "Health and Wellness Branding Toolkit - 2,000+ Canva Templates | Health Coaching Kit",
    template: "%s | Health Coaching Kit"
  },
  description: "Complete digital health and wellness coaching business toolkit with 2,000+ customizable Canva templates with pre-written content. Get instant access to business branding, client management forms, coaching workbooks, social media templates, and lead magnets. Everything you need to launch and grow your health coaching business.",
  keywords: [
    "health coaching templates",
    "wellness coaching templates",
    "health and wellness branding",
    "canva health coaching templates",
    "health coach branding",
    "wellness coach toolkit",
    "coaching business forms",
    "health coaching workbooks",
    "wellness social media templates",
    "health coach resources",
    "holistic health coaching",
    "coaching business kit",
    "health coaching client management",
    "wellness worksheets",
    "health coaching lead magnets",
    "wellness coach marketing",
    "health coaching business essentials",
    "health coaching templates canva"
  ],
  authors: [{ name: "Health Coaching Kit" }],
  creator: "Health Coaching Kit",
  publisher: "Health Coaching Kit",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lifecoachingkit.store',
    siteName: 'Health Coaching Kit',
    title: 'Health and Wellness Branding Toolkit - 2,000+ Canva Templates | Health Coaching Kit',
    description: 'Complete digital health and wellness coaching business toolkit with 2,000+ customizable Canva templates with pre-written content. Business branding, client management, coaching workbooks, social media templates, and lead magnets. Instant download.',
    images: [
      {
        url: 'https://lifecoachingkit.store/assets/healthcoaching/Hero Image .avif',
        width: 1200,
        height: 630,
        alt: 'Health and Wellness Branding Toolkit - 2,000+ Templates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health and Wellness Branding Toolkit - 2,000+ Canva Templates | Health Coaching Kit',
    description: 'Complete digital health and wellness coaching business toolkit. 2,000+ Canva templates with pre-written content for branding, client management, workbooks, and social media. Instant download.',
    images: ['https://lifecoachingkit.store/assets/healthcoaching/Hero Image .avif'],
  },
  metadataBase: new URL('https://lifecoachingkit.store'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'your-google-verification-code', // Update with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://link.funnelbay.io" />
        <link rel="preconnect" href="https://i.etsystatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://slelguoygbfzlpylpxfs.supabase.co" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7F8D74" />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '8159603937386273');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://www.facebook.com/tr?id=8159603937386273&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Pinterest Base Tag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(e){
  if(!window.pintrk){
    window.pintrk = function () {
      window.pintrk.queue.push(Array.prototype.slice.call(arguments))
    };
    var n=window.pintrk; n.queue=[], n.version="3.0";
    var t=document.createElement("script"); t.async=!0; t.src=e;
    var r=document.getElementsByTagName("script")[0];
    r.parentNode.insertBefore(t,r)
  }
}("https://s.pinimg.com/ct/core.js");

pintrk('load', '2612657632915');
pintrk('page');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt=""
            src="https://ct.pinterest.com/v3/?event=init&tid=2612657632915&noscript=1" />
        </noscript>

        {/* Reddit Base Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(w,d){
  if(!w.rdt){
    var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};
    p.callQueue=[];
    var t=d.createElement("script");
    t.src="https://www.redditstatic.com/ads/pixel.js";
    t.async=!0;
    var s=d.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(t,s);
  }
}(window,document);

rdt('init','a2_hxh7mvrfzlzo');
rdt('track','PageVisit');
            `,
          }}
        />

      </head>
      <body className="antialiased">
        <CurrencyProvider>
          <ErrorReporter />
          {/* FunnelBay Tracking */}
          <Script
            src="https://link.funnelbay.io/js/external-tracking.js"
            strategy="afterInteractive"
            data-tracking-id="tk_e81992bc8b7f4febabd5011637efa8b2"
          />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
          <VisualEditsMessenger />
        </CurrencyProvider>
      </body>
    </html>
  );
}
