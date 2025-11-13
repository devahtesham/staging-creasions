import React from 'react';
import '@/app/css/OurPartners.css';

import Image from 'next/image';

import Image1 from '/public/image-177.webp'
import Image2 from '/public/image-176.webp'
import Image3 from '/public/image-175.webp'
import Image4 from '/public/image-171.webp'
import Image5 from '/public/image-172.webp'
import Image6 from '/public/Semrush-1.webp'
import Image7 from '/public/image-173-1.webp'
import Image8 from '/public/image-170.webp'


import { metadata as pageMetadata } from "@/components/mocks/metadata/our-partners/metadata";
import { fetchOurPartnerPage } from '@/utils/helper';


export const metadata = pageMetadata;



export default async function Ourpartner() {
    const [data] = await fetchOurPartnerPage();

    console.log('[data]', data);
    return (
        <div className='our-partners'>
            <section className="inner-title">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="heading" dangerouslySetInnerHTML={{ __html: data?.banner?.section_heading }} />
                            <div className="heading" dangerouslySetInnerHTML={{ __html: data?.banner?.section_text }} />

                        </div>
                    </div>
                </div>
            </section>

            <section className="web-sec-3 soft-sec-4 gradian-bg partners-sec">
                <div className="container">
                    <Image src={Image1} className="first" alt="Partner 1" />
                    <Image src={Image2} className="secrn" alt="Partner 2" />
                    <Image src={Image3} className="last-mg" alt="Partner 3" />

                    <div className="row p-0 border-0 row-col">
                        {
                            data?.icon_boxes?.icon_boxes?.length > 0 && data?.icon_boxes?.icon_boxes?.map((partner) => (
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="text text-center box">
                                        <h5>{partner?.section_heading}</h5>
                                        <div dangerouslySetInnerHTML={{
                                            __html: partner?.
                                                section_text
                                        }} />
                                        <Image src={partner?.image} className="img-fluid" alt={partner?.image} width={200} height={100} />
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <div className="row last-partn">
                        <div className="col-lg-12">

                            <div className="heading" dangerouslySetInnerHTML={{
                                __html: data?.icon_boxes?.section_text
                            }} />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}