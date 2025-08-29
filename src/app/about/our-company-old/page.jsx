import React from 'react';
import '@/app/css/OurCompany.css'; 

import Image from 'next/image';

import Image1 from '/public/image-159-1.webp'
import Image2 from '/public/Rectangle-190-1.webp'
import Faq from '@/components/layout/Faq';
import { faqData } from '@/components/mocks/homeFaq';



import { metadata as pageMetadata } from "@/components/mocks/metadata/our-company-old/metadata";


export const metadata = pageMetadata; 




export default function Ourcompany() {
  return (
    <main className='our-company'>
      <section className="inner-title" style={{ backgroundColor: '#000' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h2>About Creasions</h2>
                <p>
                  Welcome to Creasions, a leading force in the IT industry and a Top USA Software Company. Founded in 2020, our journey began much earlier in 2011, working through top freelancing platforms such as Upwork, Fiverr, and more. Over the years, we have earned top-rated badges and established ourselves as a premier Design Agency, Marketing Agency, and top website development company. Our US-based team of expert developers and designers is dedicated to delivering cutting-edge solutions that drive success for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="about-main-im">
        <Image src={Image1} alt="" className="img-fluid w-100" />
        <section className="web-sec-3 web-design-3 about-sec-3">   
          <div className="main-box">
            <div className="text">
              <h4>15+ Years</h4>
              <h5>Market Experience</h5>
              <p>Leveraging over a decade of expertise in the industry.</p>
            </div>
            <div className="text">
              <h4>4600+</h4>
              <h5>Projects DONE</h5>
              <p>A testament to our capability and reliability in handling diverse and complex projects.</p>
            </div>
            <div className="text">
              <h4>10+</h4>
              <h5>Locations</h5>
              <p>Our global presence ensures that we are accessible to clients from various regions.</p>
            </div>
            <div className="text">
              <h4>1,840+</h4>
              <h5>Happy Clients</h5>
              <p>Our commitment to excellence is reflected in our large base of satisfied customers.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="web-sec-3 gradian-bg about-sec-ma">
        <div className="container">
          <div className="row p-0 border-0">
            <div className="col-lg-12 mb-2">
              <div className="text text-center">
                <h2>Location</h2>
                <p>Creasions operates from multiple locations to better serve our clients. Our primary office is based in the USA, ensuring we are at the heart of the latest industry trends and technological advancements. Additionally, we have a significant presence in other key regions to support our global clientele.</p>
              </div>
            </div>
          </div>        
          <br /><br />        
          <div className="row">
            <div className="col-md-12">
              <div className="map mb-2 mt-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.6601022609175!2d-96.69798482549919!3d33.06541426919385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19c57901763b%3A0x1ce994a7f1f6c253!2s6600%20Chase%20Oaks%20Blvd%20%23150%2C%20Plano%2C%20TX%2075023%2C%20USA!5e0!3m2!1sen!2s!4v1714753639578!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>         
          </div>
        </div>
      </section>

      <section className="web-sec-2 web-design-2 pb-0 about-sec-4md soft-sec-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="text">
                <h4>Why <br /> Choose Us</h4>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="text">
                <p>Choosing Creasions means opting for a top website development company<br/> and top design agency that prioritizes your success. Here are a few reasons<br/> why you should partner with us:</p>
              </div>
            </div>
          </div>
          
          <div className="row last-ro">
            <div className="col-lg-3 col-md-6">
              <div className="box" style={{ backgroundImage: "url(/Rectangle-168.webp)" }}>
                <div className="text">
                  <div className="blur"></div>
                  <h5>Top Developer Team</h5>
                  <p>Our team comprises of highly skilled and experienced professionals who excel in their respective fields.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box" style={{ backgroundImage: "url(/Rectangle-180.webp)" }}>
                <div className="text">
                  <div className="blur"></div>
                  <h5>Innovative Solutions</h5>
                  <p>We are committed to providing innovative and custom solutions tailored to meet your specific business needs.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box" style={{ backgroundImage: "url(/Rectangle-176.webp)" }}>
                <div className="text">
                  <div className="blur"></div>
                  <h5>Client-Centric Approach</h5>
                  <p>Our client-centric approach ensures that we understand your goals and work diligently to achieve them.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box" style={{ backgroundImage: "url(/Rectangle-178.webp)" }}>
                <div className="text">
                  <div className="blur"></div>
                  <h5>Proven Track Record</h5>
                  <p>With over 4600 projects completed and a vast number of happy clients, our track record speaks for itself.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="web-sec-2 web-design-2 pb-0 about-sec-gmi" style={{ backgroundImage: "url(/Group-1597883209.webp)" }}>
        <div className="container-fluid pl-0">
          <div className="row align-items-center pb-0 reverse-webdesign">
            <div className="col-lg-6 col-md-12">
              <div className="text box-2">
                <h4>How You Can Stay Connected with Creasions</h4>
                <p>Staying connected with Creasions is easy. Follow us on social media platforms to get the latest updates about our projects, services, and industry insights. Join our newsletter to receive regular updates, tips, and exclusive offers directly in your inbox. Visit our website to explore our services and read about our success stories.</p>
                <p>At Creasions, we believe in building long-term relationships with our clients. Our team is always ready to assist you with your design, development, and marketing needs. Let’s work together to transform your vision into reality and achieve remarkable success.</p>
              </div>
            </div>
            <div className="col-lg-6 p-0 col-md-12">
              <div className="img-box">
                <Image src={Image2} alt="" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq data={faqData} />
    </main>
  );
}