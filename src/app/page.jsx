import "./page.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "@/components/views/home/Hero";
import Section1 from "@/components/views/home/Section1";
import Section2 from "@/components/views/home/Section2";
import Section3 from "@/components/views/home/Section3";
import Section4 from "@/components/views/home/Section4";
import Section5 from "@/components/views/home/Section5";
import Section6 from "@/components/views/home/Section6";
import Section7 from "@/components/views/home/Section7";
import VideoSection from "@/components/views/home/VideoSection";

import { faqData } from "@/components/mocks/homeFaq";
import Faq from "@/components/layout/Faq";

import { metadata as pageMetadata } from "./metadata"; // Default global metadata
import { Suspense } from "react";
import { fetchHomeBanners } from "@/utils/helper";

export const metadata = pageMetadata;

const Home = () => {


  return (
    <main className="homepage">
      <div>
        <Hero />
        {/* Services section / Section 1 */}
        <Section1 />

        {/* Section 2 */}
        <Section2 />
        {/* Video Section */}
        <VideoSection />        
        <div className="sticky-effect">
          <Section3 />
          <Section4 />
          <Section5 />                   {/* skip this for dynamic due to missing in portal  */} 
          <Section6 />
          {/* <MobilePortfolio /> */}

          <Section7 />
        </div>
      </div>

      <Faq data={faqData} />

    </main>
  );
};

export default Home;
