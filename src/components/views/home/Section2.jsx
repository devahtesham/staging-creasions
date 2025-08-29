"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { syne } from '@/app/layout'


import HeroBannerText from '/public/hero-banner-text.webp'
import RightArrow from '/public/right-arrow.webp'
import { fetchWhoWeAreSection } from '@/utils/helper'

export default function Section2() {

  const [sectionData, setSectionData] = useState({});



  // effect for fetching hero section banners
  useEffect(() => {
    fetchWhoWeAreSection()
      .then((data) => {
        console.log('[sectionData]', data)
        setSectionData(data[0])
      })
      .catch(error => {
        console.error('[error]', error)
      })
  }, []);


  return (
    <section className="home-sec-02" id="home-sec-02">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="text" style={{ marginBottom: "40px" }}>
              <h3 className={syne.className}>
                {" "}
                <span>{sectionData?.span_heading}</span>{sectionData?.main_heading_1?.split(" ").slice(0, 2).join(" ")}
                <br /> {sectionData?.main_heading_1?.split(" ").slice(2).join(" ")}
                <Image src={sectionData?.main_heading_img} alt="Hero Banner" width={205} height={60} />
              </h3>
            </div>
            <div className="text">
              <h3 className={syne.className}>
                {sectionData?.main_heading_2?.split(" ").slice(0, 3).join(" ")}
                <br />
                {sectionData?.main_heading_2?.split(" ").slice(3).join(" ")}

              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="text">
              <p
                dangerouslySetInnerHTML={{ __html: sectionData?.content }}
              />
            </div>

            {/* <div className="text">
              <p>
                We are an energetic team of creative minds and technical experts devoted to upgrading your digital presence. As a top <Link href="/services/website-design-dallas/">website design dallas</Link> company, we specialize in providing a wide range of tailored designs that align with your brand’s identity. Our <Link href="/services/website-development-dallas/">web development dallas</Link> company ensures a seamless experience across multiple devices—tablets, desktops, and smartphones—providing an optimal user experience. With years of experience in top-tier digital marketing services, we adhere to smart strategies and solutions for meaningful online growth, utilizing data-driven insights to ensure a strong and impactful digital presence for your branding.
              </p>

            </div>
            <div className="text">
              <p>
                We craft a compelling voice that resonates with your target audience and establish consistent brand guidelines to ensure uniformity across different mediums and platforms. We also offer <Link href="/services/software-development-dallas/">software development consulting</Link> services which are designed to bridge the gap between business goals and technical execution for successful delivery of software projects. We excel in providing <Link href="/services/application-development-dallas/">IOS app development services</Link> which are crucial for business and entrepreneurs alike who are looking forward to a vast and engaged user base within the Apple ecosystem.
              </p>
              <Link
                href="/about/our-company"
                className="t-btn t-btn-arrow"
                tabIndex={0}
              >
                Know More &nbsp;<Image src={RightArrow} alt="right arrow" />
              </Link>

            </div> */}
          </div>

        </div>
      </div>
    </section>

  )
}
