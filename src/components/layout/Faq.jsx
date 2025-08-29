"use client";
import React, { useEffect, useState } from 'react';

import FAQ1 from '/public/faq-1.webp';
import { fetchFaqSection } from '@/utils/helper';

export default function Faq({ data }) {
    // Set the first accordion to be open by default (index 0)
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    const [allFaqs, setAllFaqs] = useState([]);



    // effect for fetching hero section banners
    useEffect(() => {
        fetchFaqSection()
            .then((data) => {
                // console.log('[servicesWeProvide]', data)
                setAllFaqs(data.map(item => {
                    return {
                        "question": item.question,
                        "answer": item.answer
                    }
                }))
            })
            .catch(error => {
                console.error('[error]', error)
            })
    }, []);

    console.log('[Faqs]', allFaqs)


    return (
        <>
            <div className="marquee">
                {[...Array(4)].map((_, index) => (
                    <div className="track" key={index}>
                        <img
                            decoding="async"
                            src={FAQ1.src}
                            alt="marquee image"
                            data-ll-status="loaded"
                        />
                    </div>
                ))}
            </div>

            <section
                className="home-sec-08"
                style={{ backgroundImage: "url(/accordion-bg.png)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="accordion">
                                {allFaqs.length > 0 ? allFaqs.map((faq, index) => (
                                    <div className="card" key={index}>
                                        <div className="card-header" onClick={() => toggleAccordion(index)}>
                                            <h5 className="mb-0">
                                                <a
                                                    className={`card-link accordion-title ${openIndex === index ? '' : 'collapsed'}`}
                                                >
                                                    {faq.question}
                                                </a>
                                            </h5>
                                        </div>
                                        <div className={`collapse ${openIndex === index ? 'show' : ''}`}>
                                            <div className="card-body">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                )) : <div>Loading...</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
