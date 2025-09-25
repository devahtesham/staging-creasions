import Image from 'next/image'
import React from 'react'

import Circle from '/public/services/new-virtual-employees/ve-sec01-circle.png';

export default function Section6({ whyChooseUsData }) {
    const title = whyChooseUsData?.title || "Elevate Your Business with Dynamic Talent And Exceptional Results";
    const description = whyChooseUsData?.description?.replace(/<[^>]*>/g, '') || "Creasions Digital – Virtual Employee Services (VES) stands out as a leading outsourcing provider, delivering recruitment and sales outsourcing solutions that drive impactful outcomes across diverse industries including Manufacturing, Engineering, Supply Chain, Accounting/Finance, Technology, and Healthcare.";
    const imageUrl = whyChooseUsData?.image_url;

    return (
        <section className="sec-06">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>

                    <div className="col-lg-5">
                        {imageUrl ? (
                            <img src={imageUrl} className="circle-1" alt="why choose us" />
                        ) : (
                            <Image src={Circle} className="circle-1" alt="circle-1" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
