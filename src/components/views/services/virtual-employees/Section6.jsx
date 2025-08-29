import React from 'react';
import { Section5Mocks } from '@/components/mocks/section5mocks';
import Image from 'next/image';


import SecImg1 from '/public/services/virtual-employees/ve-sec06-01.png'


export default function Section6() {
    const tabs = Section5Mocks.map(section => section.title);

    return (
        <section className="virtual-sec-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="img-box">
                            <Image
                                src={SecImg1}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 pl-5">
                        <div className="text">
                            <h2>
                                Elevate Your Business with Dynamic Talent and Exceptional Results
                            </h2>
                            <p>
                                Creasions Digital - Virtual Employee Services (VES) stands out as a
                                leading outsourcing provider, delivering recruitment and sales
                                outsourcing solutions that drive impactful outcomes across diverse
                                industries including Manufacturing, Engineering, Supply Chain,
                                Accounting/Finance, Technology, and Healthcare.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
