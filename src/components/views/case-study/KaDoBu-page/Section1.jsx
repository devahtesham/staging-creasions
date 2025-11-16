import React from 'react';

import SecImg from '/public/kadobu/kadobu-sec01.png'
import Image from 'next/image';


export default function Section1({ data }) {
    const kicker = data?.kicker || 'ABOUT KADOBU'
    const heading = data?.heading || 'Strategic Consulting, Transformative Solutions.'
    const heroImage = data?.hero_image || SecImg.src
    const paragraphs = data?.paragraphs || []

    return (
        <section className="KaDoBu-01" style={{  color: '#fff', padding: '60px 0 0' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="text">
                            <h6 style={{ color: '#A6A6D6', fontWeight: 600, letterSpacing: 2 }}>{kicker}</h6>
                            <h2 style={{ fontWeight: 700, fontSize: '4.2rem', margin: '1rem 0' }} dangerouslySetInnerHTML={{ __html: heading }} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        {paragraphs.length > 0 ? (
                            paragraphs.map((paragraph, index) => (
                                <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                            ))
                        ) : (
                            <>
                                <p>KaDoBu & Company acts as a COO for small businesses...</p>
                                <p>With a focus on seamless business operations...</p>
                            </>
                        )}
                    </div>
                </div>

                <img src={heroImage} alt="KaDoBu Section 1 Image" style={{ width: '100%', height: 'auto', marginTop: '2rem', borderRadius: 16, boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)' }} />

            </div>
        </section>
    );
}
