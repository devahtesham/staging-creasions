import Image from 'next/image'
import React from 'react'

import Circle from '/public/services/new-virtual-employees/ve-sec01-circle.png';

export default function Section6() {
    return (
        <section className="sec-06">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h2>Elevate Your Business with Dynamic Talent And Exceptional Results</h2>
                        <p>Creasions Digital – Virtual Employee Services (VES) stands out as a leading outsourcing provider, delivering recruitment and sales outsourcing solutions that drive impactful outcomes across diverse industries including Manufacturing, Engineering, Supply Chain, Accounting/Finance, Technology, and Healthcare.</p>
                    </div>

                    <div className="col-lg-5">
                        <Image src={Circle} className="circle-1" alt="circle-1" />
                    </div>
                </div>
            </div>
        </section>
    )
}
