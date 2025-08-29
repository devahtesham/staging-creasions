import React from 'react'
import RightArrow from '/public/right-arrow.webp'
import Link from 'next/link'

export default function Section3() {
    return (

        <section className="real-sec-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="case-bread">
                            <h2>Custom Real Estate Website Design Services &ndash; Build a Real Estate Empire</h2>
                            <p>
                                Believe your real estate website development to the true professional. We are able to offer your unique business needs in a timely manner with the development of an integrated all-in-one real estate portal through our experts who design and integrate IDX and MLS services. Ennoble Your Online Presence with Our Unbeatable Expertise


                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="case-list">
                            <li>Allow dissemination of real estate property information to potential buyers</li>
                            <li>Monitor customer search behavior using advanced tracking tools</li>
                            <li>Send prospects timely email reminders and notifications</li>
                            <li>Maintain an up-to-date listing inventory for customer convenience</li>
                            <li>The creation of customer trust through transparent and reliable information dissemination</li>
                        </ul>
                        <Link href="/contact-us/" className="t-btn t-btn-arrow real-bg">
                            It&apos;s Free! Take the First Step For Consultation
                            <img src={RightArrow.src} alt="right Arrow" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
