import React from 'react';
import '@/app/css/NewAbout.css';
import Image from 'next/image';

import BGImage from '/public/new-about/about-bg.png';

import { faqData } from '@/components/mocks/homeFaq';


import { metadata as pageMetadata } from "@/components/mocks/metadata/our-company/metadata";
import Section2 from '@/components/views/about/our-company/Section2';
import { fetchOurCompanyPage } from '@/utils/helper';
import Faqs from './FAQs';


export const metadata = pageMetadata;


export default async function Page() {
    const [data] = await fetchOurCompanyPage();
    console.log('[data]', data);
    return (
        <main className="about">
            <section className="inner-title" style={{ backgroundColor: '#000' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading">
                                <div className="bg">
                                    <Image src={BGImage} alt="about-bg" className='banner-bg' />
                                </div>
                                <h2>{data?.banner?.section_heading}</h2>
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
                                <h4>{data?.our_company_section?.section_heading}</h4>
                                <div dangerouslySetInnerHTML={{ __html: data?.our_company_section?.section_text }} />
                            </div>
                        </div>
                    </div>
                </section>

                <Section2 data={data?.icon_boxes} />


                <section className="sec-03">
                    <div className="container">
                        <h4>
                            {data?.why_choose_us?.section_title}
                        </h4>
                        <div dangerouslySetInnerHTML={{ __html: data?.why_choose_us?.section_text }} />

                        <div className="row">
                            {
                                data?.why_choose_us?.cards?.length > 0 && data?.why_choose_us?.cards?.map((card, index) => (
                                    <>
                                        <div className={`${index % 2 === 0 ? 'top-box' : 'bottom-box'}`}>
                                            <h3>{card?.section_title}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: card?.section_text }} />
                                        </div>
                                    </>
                                ))
                            }

                            {/* <div className="top-box">
                                <h3>Client-Centric Approach</h3>
                                <p>Our client-centric approach ensures that we understand your goals and work diligently to achieve them.</p>
                            </div>

                            <div className="bottom-box">
                                <h3>Proven Track Record</h3>
                                <p> With over 4600 projects completed and a vast number of happy clients, our track record speaks for itself.</p>
                            </div> */}

                        </div>
                    </div>
                </section>

                <section className="sec-04">
                    <div className="container">
                        <h2>{data?.locations?.section_heading}</h2>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="map mb-2 mt-2">
                                    <iframe
                                        src={data?.locations?.google_map_embebed}
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
                                <h4>{data?.cta_section?.section_title}</h4>
                                <div dangerouslySetInnerHTML={{ __html: data?.cta_section?.section_text }} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <Faqs data={data?.faq_section?.faqs} />
        </main>
    );
}
