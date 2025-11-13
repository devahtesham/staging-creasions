import React from 'react';

import SecImg from '/public/kadobu/kadobu-sec01.png'
import Image from 'next/image';


export default function Section1() {
    return (
        <section className="KaDoBu-01" style={{  color: '#fff', padding: '60px 0 0' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="text">
                            <h6 style={{ color: '#A6A6D6', fontWeight: 600, letterSpacing: 2 }}>ABOUT KADOBU</h6>
                            <h2 style={{ fontWeight: 700, fontSize: '4.2rem', margin: '1rem 0' }}>
                                Strategic Consulting, <br />Transformative Solutions.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <p>
                            KaDoBu & Company acts as a COO for small businesses, handling administration, operations, and unexpected tasks so owners can focus on growth. We streamline processes, enhance efficiency, and support key initiatives for long-term success. Our team manages projects, aligns daily operations with business goals, and fosters future opportunities with stakeholders.
                        </p>
                        <p>
                            With a focus on seamless business operations, we provide the structure and support needed to drive productivity. From process optimization to strategic planning, we help businesses stay agile and competitive.

                        </p>
                    </div>
                </div>

                <Image src={SecImg} alt="KaDoBu Section 1 Image" style={{ width: '100%', height: 'auto', marginTop: '2rem', borderRadius: 16, boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)' }} />

            </div>
        </section>
    );
}
