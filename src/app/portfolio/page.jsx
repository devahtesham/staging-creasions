import React from "react";
import "@/app/css/OurPortfolio.css";

import Image from "next/image";

import Image1 from "/public/Logo-Design.webp";
import Image2 from "/public/Branding.webp";
import Image3 from "/public/Website-Design.webp";
import Image4 from "/public/Mobile-Application.webp";
import Link from "next/link";


import { metadata as pageMetadata } from "@/components/mocks/metadata/portfolio/metadata";


export const metadata = pageMetadata; 


export default function OurPortfolio() {
  return (
    <div>
      <section className="inner-title" id="inner-title">
        <style>
          {`
                #inner-title {
                    background-image: url('/web-design-bg.webp') !important;
                }
                `}
        </style>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h1>
                  Your Gateway <strong>to Portfolio Brilliance.</strong>
                </h1>
                <p>
                  Experience excellence through our portfolio showcase—a
                  testament to skill, innovation, and dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="parallax-sec">
        <div className="img-box-1" id="logo-designs">
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
        </div>
      </section>
    </div>
  );
}
