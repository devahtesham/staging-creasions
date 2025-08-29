import { Lato, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css"; // Use local Bootstrap import (optional)
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import Footer from "@/components/layout/Footer";
import FixedSocial from "@/components/layout/FixedSocial";
import ContactForm from "@/components/layout/ContactForm";
import Newsletter from "@/components/layout/Newsletter";
import LoadingWrapper from "@/components/ui/LoadingWrapper";

import ReCaptchaWrapper from "@/components/ui/ReCaptchaWrapper";
import { Helmet, HelmetProvider } from 'react-helmet-async'; // import necessary components


import { LenisSmoothScroll } from '@/components/ui/LenisSmoothScroll'; // Import the provider correctly


import { metadata as globalMetadata } from "./metadata"; // Default global metadata
import HeaderMobile from "@/components/layout/HeaderMobile";


import OGImage from '/public/og-img-logo-2.png'



// Tawkto 
import TawktoWidget from "@/components/ui/TawktoWidget";
import Head from "next/head";
import HelmetWrapper from "@/components/ui/HelmetWrapper";
import HelmetHeadWrapper from "@/components/ui/HelmetHeadWrapper";


export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const syne = Syne({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const GOOGLE_TAG_ID = 'G-MWT5WJQ766';

export default function RootLayout({ children, metadata = globalMetadata }) {
  const metadataToUse = metadata && !isEmpty(metadata) ? metadata : globalMetadata;

  // Schemas
  const searchActionMarkupSchema = {
    "@context": "https://schema.org/",
    "@type": "Website",
    "name": "Creasions Digital",
    "url": "https://creasions.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const localBusinessMarkupSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Creasions Digital",
    "image": "https://creasions.com/public/header-logo-2.webp",
    "@id": "",
    "url": "https://creasions.com/",
    "telephone": "+1 469-854-3814",
    "address": {
    "@type": "PostalAddress",
    "streetAddress": "6600 Chase Oaks Blvd #150",
    "addressLocality": "Plano",
    "addressRegion": "TX",
    "postalCode": "75023",
    "addressCountry": "US"
    },
    "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.0654098,
    "longitude": -96.6954099
    },
    "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
    },
    "sameAs": [
    "",
    "https://www.instagram.com/creasionsdigital/",
    "https://twitter.com/creasionsllc/",
    "https://www.linkedin.com/company/creasions/",
    "https://www.youtube.com/@Creasions",
    "https://www.facebook.com/creasionsdigital",
    "https://maps.app.goo.gl/unWgGT4Ru7vvTD569",
    "https://dribbble.com/creasions/",
    "https://www.pinterest.com/creasionsllc/",
    "https://creasions.com/"
    ]
  }

  const organizationMarkupSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Creasions",
  "alternateName": "Digital",
  "url": "https://creasions.com/",
  "logo": "https://creasions.com/public/header-logo-2.webp",
  "sameAs": [
  "https://www.facebook.com/creasionsdigital",
  "https://twitter.com/creasionsllc",
  "https://www.instagram.com/creasionsdigital/",
  "https://www.youtube.com/@Creasions",
  "https://maps.app.goo.gl/unWgGT4Ru7vvTD569",
  "https://dribbble.com/creasions/",
  "https://www.pinterest.com/creasionsllc/",
  ]
  }

  const breadcrumbMarkupSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Creasions Digital",
      "item": "https://creasions.com/"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Website Development Services",
      "item": "https://creasions.com/services/website-development-dallas/"
    }, {
      "@type": "ListItem",
      "position": 3,
      "name": "Website Design Services",
      "item": "https://creasions.com/services/website-design-dallas/"
    }, {
      "@type": "ListItem",
      "position": 4,
      "name": "branding-services",
      "item": "https://creasions.com/services/branding-agency-dallas/"
    }, {
      "@type": "ListItem",
      "position": 5,
      "name": "Digital Marketing Services",
      "item": "https://creasions.com/services/digital-marketing-dallas/"
    }, {
      "@type": "ListItem",
      "position": 6,
      "name": "Software Development Services",
      "item": "https://creasions.com/services/software-development-dallas/"
    }, {
      "@type": "ListItem",
      "position": 7,
      "name": "Application Development Services",
      "item": "https://creasions.com/services/application-development-dallas/"
    }, {
      "@type": "ListItem",
      "position": 8,
      "name": "Virtual Employees Services",
      "item": "https://creasions.com/services/virtual-employees-services-dallas/"
    }, {
      "@type": "ListItem",
      "position": 9,
      "name": "Real Estate Website Services",
      "item": "https://creasions.com/industry/real-estate-website-services-dallas/"
    }, {
      "@type": "ListItem",
      "position": 10,
      "name": "Cleaning Company Website Services",
      "item": "https://creasions.com/industry/cleaning-company-website-services-dallas/"
    }, {
      "@type": "ListItem",
      "position": 11,
      "name": "Beauty Salons & Spa Website Services",
      "item": "https://creasions.com/industry/beauty-salons-spa-website-services-dallas/"
    }, {
      "@type": "ListItem",
      "position": 12,
      "name": "Our Company",
      "item": "https://creasions.com/about/our-company/"
    }, {
      "@type": "ListItem",
      "position": 13,
      "name": "Our Partners",
      "item": "https://creasions.com/about/our-partners/"
    }, {
      "@type": "ListItem",
      "position": 14,
      "name": "Our Mission",
      "item": "https://creasions.com/about/our-mission/"
    }, {
      "@type": "ListItem",
      "position": 15,
      "name": "Portfolio",
      "item": "https://creasions.com/portfolio/"
    }, {
      "@type": "ListItem",
      "position": 16,
      "name": "Logo Design Portfolio",
      "item": "https://creasions.com/portfolio/logo-design/"
    }, {
      "@type": "ListItem",
      "position": 17,
      "name": "Graphic Design Portfolio",
      "item": "https://creasions.com/portfolio/graphic-design/"
    }, {
      "@type": "ListItem",
      "position": 18,
      "name": "Website Design Portfolio",
      "item": "https://creasions.com/portfolio/website-design/"
    }, {
      "@type": "ListItem",
      "position": 19,
      "name": "App Design Portfolio",
      "item": "https://creasions.com/portfolio/app-design/"
    }]
  }

  return (
    <HelmetWrapper>
      <html lang="en">
        <Head>
          <title>{metadataToUse.title}</title>

          <meta name="title" content={metadataToUse.title} />
          <meta name="description" content={metadataToUse.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />


          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            crossOrigin="anonymous"
          />
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Syne:wght@400..800&display=swap" rel="stylesheet"></link>


        </Head>

        <HelmetHeadWrapper>
          {/* Robots */}
          <meta name="robots" content={`${metadataToUse.robots.index ? 'index' : 'noindex'}, ${metadataToUse.robots.follow ? 'follow' : 'nofollow'}`} />

          {/* Keywords */}
          <meta name="keywords" content={metadataToUse.keywords} />

          <meta name="geo.region" content="US-TX" />
          <meta name="geo.placename" content="Dallas" />
          <meta name="geo.position" content="32.776272;-96.796856" />
          <meta name="ICBM" content="32.776272, -96.796856" />


          <meta name="google-site-verification" content="J9n6Z5fWPs7Jr4ysPOykWHEIypDZhx4cCXpaApWSzQA" />


          {/* Open Graph tags */}
          <meta property="og:title" content={metadataToUse.openGraph.title} />
          <meta property="og:description" content={metadataToUse.openGraph.description} />
          <meta property="og:url" content={metadataToUse.openGraph.url} />
          <meta property="og:site_name" content={metadataToUse.openGraph.site_name} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={OGImage.src} />
          <meta property="og:image:type" content="image/png"/>
          <meta property="og:image:width" content="1024"/>
          <meta property="og:image:height" content="1024"/>


          {/* Twitter Card tags  */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadataToUse.openGraph.title} />
          <meta name="twitter:description" content={metadataToUse.openGraph.description} />
          <meta name="twitter:url" content={metadataToUse.openGraph.url} />

          {/* Schema Search Action Markup */}
          <script type="application/ld+json">{JSON.stringify(searchActionMarkupSchema)}</script>


          {/* Schema Local Business Markup */}
          <script type="application/ld+json">{JSON.stringify(localBusinessMarkupSchema)}</script>


          {/* Schema Organization Markup */}
          <script type="application/ld+json">{JSON.stringify(organizationMarkupSchema)}</script>


          {/* Schema Breadcrumb Markup */}
          <script type="application/ld+json">{JSON.stringify(breadcrumbMarkupSchema)}</script>


          {/* Google Tag (gtag.js) */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`} />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_TAG_ID}');
            `}
          </script>

         {/* Facebook Meta Pixel */}
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
              fbq('init', '958344659060192');
              fbq('track', 'PageView');
            `,
          }}
        />

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=958344659060192&ev=PageView&noscript=1" />`,
          }}
        />


        </HelmetHeadWrapper>



        <LenisSmoothScroll>
          <body className={`${lato.className}`}>
            <LoadingWrapper>
              <Header />
              <HeaderMobile />
              <FixedSocial />
              {/* <CircleShadow /> */}

              {children}
              <TawktoWidget />
              {/* Use LoadingWrapper to manage loading */}
              <div className="sticky-effect">
                <Newsletter />
                <ContactForm />
              </div>
              <ReCaptchaWrapper>
                <Footer />
              </ReCaptchaWrapper>
            </LoadingWrapper>
            {/* <SpeedInsights /> */}
          </body>
        </LenisSmoothScroll>
      </html>
    </HelmetWrapper>
  );
}
