"use client";
import React from 'react';
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';


import Portfolio1 from '/public/industry/beauty-salons/bs-portfolio-01.webp'
import Portfolio2 from '/public/industry/beauty-salons/bs-portfolio-02.webp'
import Portfolio3 from '/public/industry/beauty-salons/bs-portfolio-03.webp'
import Portfolio4 from '/public/industry/beauty-salons/bs-portfolio-04.webp'

import RightArrow from '/public/right-arrow.webp'
import Link from 'next/link';


const Portfolios = () => {
  // Initialize Fancybox on component mount
  React.useEffect(() => {
    Fancybox.bind("[data-fancybox='group']", {
      // Optional configurations for Fancybox
      Thumbs: {
        autoStart: true,
      },
    });
  }, []);

  return (
    <section className="beauty-sec-8"
      style={{
        backgroundImage:
          "url(/industry/beauty-salons/bs-portfolio-bg.webp)"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="case-text-brand"
            >
              <h2>
                Explore Our Stunning
                <br />
                Beauty Salons & Spas Website Templates
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Image 1 */}
          <div className="col-md-6 col-sm-6">
            <div className="img-box">
              <a
                href={Portfolio1.src}
                data-fancybox="group"
                data-caption="web page-1"
              >
                <img
                  src={Portfolio1.src}
                  alt="web page-1"
                />
              </a>
            </div>
          </div>

          {/* Image 2 */}
          <div className="col-md-6 col-sm-6">
            <div className="img-box">
              <a
                href={Portfolio2.src}
                data-fancybox="group"
                data-caption="web page-2"
              >
                <img
                  src={Portfolio2.src}
                  alt="web page-2"
                />
              </a>
            </div>
          </div>

          {/* Image 3 */}
          <div className="col-md-6 col-sm-6">
            <div className="img-box">
              <a
                href={Portfolio3.src}
                data-fancybox="group"
                data-caption="web page-3"
              >
                <img
                  src={Portfolio3.src}
                  alt="web page-3"
                />
              </a>
            </div>
          </div>

          {/* Image 4 */}
          <div className="col-md-6 col-sm-6">
            <div className="img-box">
              <a
                href={Portfolio4.src}
                data-fancybox="group"
                data-caption="web page-4"
              >
                <img
                  src={Portfolio4.src}
                  alt="web page-4"
                />
              </a>
            </div>
          </div>

          {/* View More Button */}
          <div className="col-md-12 col-sm-6">
            <div className="web-btn">
              <Link
                href="/portfolio/website-design/beauty"
                className="t-btn t-btn-arrow real-bg"
                tabIndex="0"
              >
                View More
                <img
                  src={RightArrow.src}
                  alt="right Arrow"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
