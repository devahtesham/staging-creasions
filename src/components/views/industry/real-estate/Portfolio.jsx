"use client";
import React from 'react';
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import Link from 'next/link';
import Image from 'next/image';


import Portfolio1 from '/public/industry/real-estate/re-portfolio-01.webp';
import Portfolio2 from '/public/industry/real-estate/re-portfolio-02.webp';
import Portfolio3 from '/public/industry/real-estate/re-portfolio-03.webp';
import Portfolio4 from '/public/industry/real-estate/re-portfolio-04.webp';
import RightArrow from '/public/right-arrow.webp'




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
    <section className="real-sec-8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="case-text-brand wow FadeIn"
              data-wow-duration="5s"
              style={{
                visibility: 'visible',
                animationDuration: '5s',
                animationName: 'fadeIn',
              }}
            >
              <h2>
                Explore Our Stunning
                <br />
                Real Estate Website Templates
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Image 1 */}
          <div className="col-md-6 col-sm-6">
            <div className="img-box">
              <Link
                href={Portfolio1.src}
                data-fancybox="group"
                data-caption="web page-1"
              >
                <Image
                  src={Portfolio1}
                  alt="web page-1"
                />
              </Link>
            </div>
          </div>

          {/* Image 2 */}
          <div className="col-md-6 col-sm-6">
            <div className="img-box">
              <Link
                href={Portfolio2.src}
                data-fancybox="group"
                data-caption="web page-2"
              >
                <Image
                  src={Portfolio2}
                  alt="web page-2"
                />
              </Link>
            </div>
          </div>

          {/* Image 3 */}
          <div className="col-md-6 col-sm-6">
            <div className="img-box">
              <Link
                href={Portfolio3.src}
                data-fancybox="group"
                data-caption="web page-3"
              >
                <Image
                  src={Portfolio3}
                  alt="web page-3"
                />
              </Link>
            </div>
          </div>

          {/* Image 4 */}
          <div className="col-md-6 col-sm-6">
            <div className="img-box">
              <Link
                href={Portfolio4.src}
                data-fancybox="group"
                data-caption="web page-4"
              >
                <Image
                  src={Portfolio4}
                  alt="web page-4"
                />
              </Link>
            </div>
          </div>

          {/* View More Button */}
          <div className="col-md-12 col-sm-6">
            <div className="web-btn">
              <Link
                href="/portfolio/website-design/real-estate/"
                className="t-btn t-btn-arrow real-bg"
                tabIndex="0"
              >
                View More
                <Image
                  src={RightArrow}
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
