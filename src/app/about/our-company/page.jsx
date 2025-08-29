import React from 'react';
import '@/app/css/NewAbout.css';
import Image from 'next/image';

import BGImage from '/public/new-about/about-bg.png';
import Faq from '@/components/layout/Faq';
import { faqData } from '@/components/mocks/homeFaq';


import { metadata as pageMetadata } from "@/components/mocks/metadata/our-company/metadata";
import Section2 from '@/components/views/about/our-company/Section2';


export const metadata = pageMetadata; 


export default function Page() {
   
    return (
        <main className="about">
            <section className="inner-title" style={{ backgroundColor: '#000' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading">
                                <div className="bg">
                                    <Image src={BGImage} alt="about-bg" className='banner-bg'/>
                                </div>
                                <h2>About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="glass-bg">
                <section className="sec-01">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4>A FEW THINGS ABOUT Creasions</h4>
                                <p>
                                    Welcome to Creasions, a leading force in the IT industry and a Top USA Software Company. Founded in 2020, our journey began much earlier in 2011, working through top freelancing platforms such as Upwork, Fiverr, and more. Over the years, we have earned top-rated badges and established ourselves as a premier Design Agency, Marketing Agency, and top website development company. Our US-based team of expert developers and designers is dedicated to delivering cutting-edge solutions that drive success for our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Section2 />

                
                <section className="sec-03">
                    <div className="container">
                        <h4>
                            Why Choose Us
                        </h4>
                        <p>
                            Choosing Creasions means opting for a top website development company and top design agency that prioritizes your success. Here are a few reasons why you should partner with us:
                        </p>

                        <div className="row">
                            <div className="top-box">
                                <h3>Top Developer Team</h3>
                                <p>Our team comprises highly skilled and experienced professionals who excel in their respective fields.</p>
                            </div>

                            <div className="bottom-box">
                                <h3>Innovative Solutions</h3>
                                <p>We are committed to providing innovative and custom solutions tailored to meet your specific business needs</p>
                            </div>

                            <div className="top-box">
                                <h3>Client-Centric Approach</h3>
                                <p>Our client-centric approach ensures that we understand your goals and work diligently to achieve them.</p>
                            </div>

                            <div className="bottom-box">
                                <h3>Proven Track Record</h3>
                                <p> With over 4600 projects completed and a vast number of happy clients, our track record speaks for itself.</p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="sec-04">
                    <div className="container">
                        <h2>Location</h2>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="map mb-2 mt-2">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.6601022609175!2d-96.69798482549919!3d33.06541426919385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19c57901763b%3A0x1ce994a7f1f6c253!2s6600%20Chase%20Oaks%20Blvd%20%23150%2C%20Plano%2C%20TX%2075023%2C%20USA!5e0!3m2!1sen!2s!4v1714753639578!5m2!1sen!2s"
                                        width="100%"
                                        height="550"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sec-05">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4>How You Can Stay Connected with Creasions</h4>
                                <p>
                                    Stay connected with Creasions! Follow us on social media, join our newsletter, and visit our website for updates and services. Let’s bring your vision to life!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <Faq data={faqData} />
        </main>
    );
}
