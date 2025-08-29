import React from "react";
import '@/app/css/OurMission.css'; 

import Image from 'next/image';

import Image1 from '/public/image-159.webp'
import Image2 from '/public/image-176-1.webp'
import Image3 from '/public/image-177-1.webp'

import { metadata as pageMetadata } from "@/components/mocks/metadata/our-mission-old/metadata";


export const metadata = pageMetadata; 


export default function Ourmission() {
  return (
    <div>
      <section className="inner-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h2>Our Mission</h2>
                <p>
                  At Creasions, our primary goal is to drive success in every
                  project, regardless of time constraints, budget limitations,
                  or evolving requirements. We are committed to achieving the
                  goals you set forth, ensuring that your project reaches its
                  full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mission-sec-1">
        <Image src={Image1} alt="" className="img-fluid w-100" />
        <section className="web-sec-2 web-design-2 pb-0 mission-sec">
          <div className="container">
            <Image
              src={Image2}
              className="mission-img-1"
              alt=""
            />
            <Image
              src={Image3}
              className="mission-img-2"
              alt=""
            />

            <div className="row align-items-center pb-0 pt-0">
              <div className="col-lg-12 col-md-12">
                <div className="text box-2">
                  <h4>Driving Success in Every Project</h4>
                  <p>
                    At Creasions, our primary goal is to drive success in every
                    project, regardless of time constraints, budget limitations,
                    or evolving requirements. We are committed to achieving the
                    goals you set forth, ensuring that your project reaches its
                    full potential…
                  </p>
                  <p>
                    At Creasions, our goal is simple: we want to help every
                    business succeed online. As a web development and digital
                    agency, we specialize in creating strong brands, great
                    websites, and smart marketing plans. Our team loves taking
                    ideas and making them real, so your business can thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
