"use client";
import React from 'react';
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import Link from 'next/link';
import Image from 'next/image';


import Portfolio1 from '/public/kadobu/kudobu-sec06-portfolio-01.png';
import Portfolio2 from '/public/kadobu/kudobu-sec06-portfolio-02.png';
import Portfolio3 from '/public/kadobu/kudobu-sec06-portfolio-03.png';
import Portfolio4 from '/public/kadobu/kudobu-sec06-portfolio-04.png';
import RightArrow from '/public/right-arrow.webp'




const Section6 = () => {
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
    <section className="KaDoBu-06">
      <div className="container">
        <div className="row justify-content-center">
          {/* Image 1 */}
          <div className="col-md-4 col-sm-4">
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
          <div className="col-md-4 col-sm-4">
              <div className="space-btween">
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
          </div>

          {/* Image 3 */}
          <div className="col-md-4 col-sm-4">
            <div className="space-btween">
                          <div className="text" style={{ color: '#000'}}>
              {/* <span>HIGH FIDELITY DESIGNS</span> */}
              <h6>HIGH FIDELITY DESIGNS</h6>
              <h3>Shape <br/> of Website</h3>
              <p>The KaDoBu website is structured to highlight its expertise in
                Business Operations, Quality Assurance, People Strategy, and
                Safety Compliance. It emphasizes tailored solutions, showcasing
                the company&apos;s commitment to operational excellence and
                strategic alignment with clients&apos; long-term goals. The content is
                organized to build trust and communicate KaDoBu&apos;s approach to
                continuous improvement and risk management.</p>
            </div>
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
          </div>


          {/* View More Button */}
          <div className="col-md-12 col-sm-6">
            <div className="web-btn">
              <Link
                href="#"
                className="t-btn"
                tabIndex="0"
                style={{ background: '#000000', marginBottom:'0'}}
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
