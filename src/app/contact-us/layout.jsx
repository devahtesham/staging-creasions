import { Lato, Syne } from "next/font/google";
import "@/app/contact-us/page.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Use local Bootstrap import (optional)
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import FixedSocial from "@/components/layout/FixedSocial";



import { metadata } from "@/app/metadata";
import Footer from "@/components/layout/Footer";
import LoadingWrapper from "@/components/ui/LoadingWrapper";
import Header from "@/components/views/contact-us/Header";
import HeaderMobile from "@/components/views/contact-us/HeaderMobile";
import ReCaptchaWrapper from "@/components/ui/ReCaptchaWrapper";


export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const syne = Syne({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});



export default function ContactUsLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Robots */}
        <meta name="robots" content={`${metadata.robots.index ? 'index' : 'noindex'}, ${metadata.robots.follow ? 'follow' : 'nofollow'}`} />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        <meta name="twitter:url" content={metadata.openGraph.url} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Syne:wght@400..800&display=swap" rel="stylesheet"></link>

      </head>
      <body className={`${lato.className}`}>

        <Header />
        <HeaderMobile />

        <FixedSocial />
        {children}

        <ReCaptchaWrapper>
          <Footer />
        </ReCaptchaWrapper>

      </body>

    </html>
  );
}
