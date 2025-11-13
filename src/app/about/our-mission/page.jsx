import VideoOptimizer from '@/components/ui/VideoOptimizer'
import React from 'react'
import '@/app/css/NewOurMission.css';


import Thumbnail from '/public/our-mission/Banner-bg.png';
import Card1Bg from '/public/our-mission/our-mission-sec03-01.png';
import Card2Bg from '/public/our-mission/our-mission-sec03-02.png';
import Card3Bg from '/public/our-mission/our-mission-sec03-03.png';
import Card4Bg from '/public/our-mission/our-mission-sec03-04.png';
import Card5Bg from '/public/our-mission/our-mission-sec03-05.png';
import Card6Bg from '/public/our-mission/our-mission-sec03-06.png';

import Image from 'next/image';



import { metadata as pageMetadata } from "@/components/mocks/metadata/our-mission/metadata";
import { fetchOurMissionPage } from '@/utils/helper';
import Faqs from './FAQs';


export const metadata = pageMetadata;




export default async function Page() {
    const [data] = await fetchOurMissionPage();
    console.log('[data]', data);
    return (
        <main className="our-mission">
            <section className="inner-title" style={{ backgroundColor: '#000' }}>
                <div className="banner-video">
                    <VideoOptimizer
                        src="/video/our-mission-bg.mp4"
                        poster={Thumbnail}
                    />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading">
                                <h2>Our Mission</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="glass-bg">
                <section className="sec-02">
                    <div className="container">
                        <div dangerouslySetInnerHTML={{ __html: data?.mission_intro?.section_title }} />
                        <div dangerouslySetInnerHTML={{ __html: data?.mission_intro?.text }} />

                    </div>
                </section>


                <section className="sec-03">
                    <div className="container">
                        <div dangerouslySetInnerHTML={{ __html: data?.values_section?.section_title }} />

                        <div className="row">
                            {
                                data?.values_section?.cards?.length > 0 && data?.values_section?.cards?.map((card) => (
                                    <div className="col-lg-4 col-md-6">
                                        <div className="img-box">
                                            <Image src={card?.image} alt={card?.image} className="card-bg" width={394} height={649} />
                                            <div className="content">
                                                <h2>{card?.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </section>

                <section className="sec-04">
                    <div className="container">
                        <div dangerouslySetInnerHTML={{ __html: data?.success_section?.section_title }} />
                        {
                            data?.success_section?.paragraphs?.length > 0 && data?.success_section?.paragraphs?.map((p) => (
                                <div dangerouslySetInnerHTML={{ __html: p }} />
                            ))
                        }
                    </div>
                </section>
            </div>

            <Faqs data={data?.faq_section?.faqs} />
        </main>
    )
}
