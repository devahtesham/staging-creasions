"use client";
import React from 'react';
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import Link from 'next/link';

import Portfolio1 from '/public/kadobu/kudobu-sec06-portfolio-01.png';
import Portfolio2 from '/public/kadobu/kudobu-sec06-portfolio-02.png';
import Portfolio3 from '/public/kadobu/kudobu-sec06-portfolio-03.png';
import Portfolio4 from '/public/kadobu/kudobu-sec06-portfolio-04.png';

const Section6 = ({ data }) => {
  const kicker = data?.kicker || 'HIGH FIDELITY DESIGNS'
  const title = data?.title || 'Shape of Website'
  const text = data?.text || '<p>The KaDoBu website is structured to highlight its expertise...</p>'
  const buttonUrl = data?.button_url || '/portfolio/website-design'
  const buttonText = data?.button_text || 'View More'
  
  const defaultImages = [Portfolio1.src, Portfolio2.src, Portfolio3.src, Portfolio4.src]
  const images = data?.images?.length > 0 ? data.images : defaultImages

  // Initialize Fancybox on component mount
  React.useEffect(() => {
    Fancybox.bind("[data-fancybox='group']", {
      Thumbs: {
        autoStart: true,
      },
    });
  }, []);

  return (
    <section className="KaDoBu-06">
      <div className="container">
        <div className="row justify-content-center">
          {/* Image 1 */}
          <div className="col-md-4 col-sm-4">
            <div className="img-box">
              <Link
                href={images[0] || defaultImages[0]}
                data-fancybox="group"
                data-caption="web page-1"
              >
                <img src={images[0] || defaultImages[0]} alt="web page-1" />
              </Link>
            </div>
          </div>

          {/* Image 2 & 4 */}
          <div className="col-md-4 col-sm-4">
            <div className="space-btween">
              <div className="img-box">
                <Link
                  href={images[1] || defaultImages[1]}
                  data-fancybox="group"
                  data-caption="web page-2"
                >
                  <img src={images[1] || defaultImages[1]} alt="web page-2" />
                </Link>
              </div>
              {images[3] && (
                <div className="img-box">
                  <Link
                    href={images[3]}
                    data-fancybox="group"
                    data-caption="web page-4"
                  >
                    <img src={images[3]} alt="web page-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Text & Image 3 */}
          <div className="col-md-4 col-sm-4">
            <div className="space-btween">
              <div className="text" style={{ color: '#000'}}>
                <h6>{kicker}</h6>
                <h3 dangerouslySetInnerHTML={{ __html: title }} />
                <div dangerouslySetInnerHTML={{ __html: text }} />
              </div>
              <div className="img-box">
                <Link
                  href={images[2] || defaultImages[2]}
                  data-fancybox="group"
                  data-caption="web page-3"
                >
                  <img src={images[2] || defaultImages[2]} alt="web page-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="col-md-12 col-sm-6">
            <div className="web-btn">
              <Link
                href={buttonUrl}
                className="t-btn"
                tabIndex="0"
                style={{ background: '#000000', marginBottom:'0'}}
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
