import React from "react";
import "@/app/css/OurPortfolio.css";

import Image from "next/image";

import Image1 from "/public/Logo-Design.webp";
import Image2 from "/public/Branding.webp";
import Image3 from "/public/Website-Design.webp";
import Image4 from "/public/Mobile-Application.webp";
import Link from "next/link";


import { metadata as pageMetadata } from "@/components/mocks/metadata/portfolio/metadata";
import { fetchPortfolioMainPage, fetchPortfolioCategory } from "@/utils/helper";


export const metadata = pageMetadata;


export default async function OurPortfolio() {
  const portfolioMainPage = await fetchPortfolioMainPage();
  const portfolioCategory = await fetchPortfolioCategory();
  const portfolioData = portfolioMainPage[0]?.banner;
  console.log('[portfolioCategory]', portfolioCategory);
  return (
    <div>
      <section className="inner-title" id="inner-title">
        <style>
          {`
                #inner-title {
                    background-image: url(${portfolioData?.background_image}) !important;
                }
                `}
        </style>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h1>
                  {portfolioData?.section_heading}
                </h1>
                <p dangerouslySetInnerHTML={{ __html: portfolioData?.section_text }} />

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="parallax-sec">
        {
          portfolioCategory && portfolioCategory.length > 0 && portfolioCategory.map((category,index) => (
            <div className={`img-box-${index+1}`} id={category.slug}>
              <div className="text-div">
                <p>
                  <Link href={`/portfolio/${category.slug}`} alt={category.text}>{category.text}</Link>
                </p>
              </div>
              <Image src={category.image} alt={category.text} width={1920} height={980} />
            </div>
          ))
        }
        {/* <div className="img-box-1" id="logo-designs">
          <div className="text-div">
            <p>
              <Link href="/portfolio/logo-design" alt="logo design">LOGO DESIGNS</Link>
            </p>
          </div>
          <Image src={Image1} alt="" />
        </div>
        <div className="img-box-2" id="graphic-designs">
          <div className="text-div">
            <p>
              <Link href="/portfolio/graphic-design" alt="graphic design">GRAPHIC DESIGNS</Link>
            </p>
          </div>
          <Image src={Image2} alt="" />
        </div>

        <div className="img-box-1" id="web-designs">
          <div className="text-div">
            <p>
              <Link href="/portfolio/website-design" alt="website design">WEB DESIGNS</Link>
            </p>
          </div>
          <Image src={Image3} alt="" />
        </div>
        <div className="img-box-2" id="mobile-app">
          <div className="text-div">
            <p>
              <Link href="/portfolio/app-design" alt="mobile app">MOBILE APP</Link>
            </p>
          </div>
          <Image src={Image4} alt="" />
        </div> */}
      </section>
    </div>
  );
}
