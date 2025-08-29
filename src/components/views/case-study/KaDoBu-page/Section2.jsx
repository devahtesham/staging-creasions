import Link from 'next/link';
import React from 'react';
// import laptopimg from '/public/KaDoBu/laptop-mockup.png'
import SecImg from '/public/kadobu/laptop-img.png'
import Image from 'next/image';

export default function Section2() {
    return (
<>
        <section className="KaDoBu-02" style={{ background: '#080411', color: '#E5DEFF', padding: '140px 0 0' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 text-center position-relative z-1">
                        <h3 style={{ color: '#FFFFFF', fontWeight: 600, letterSpacing: 2 }}>The Challenge</h3>
                        <p>
                            We didn&apos;t just design a website for KaDoBu - we built their digital presence. UX: Seamless. Visuals: On-brand. Content: Strategically crafted. From wireframes to launch, we handled it all to create a
                            high-performing site that drives results.
                        </p>
                        <a
                            href="https://kadobu.com/business-operations/"
                            className="t-btn"
                            tabIndex="0"
                        >
                            Visit Website
                        </a>
                    </div>
                </div>
            </div>


            <div className="additional-section">
                <Image src={SecImg} alt="KaDoBu Section 1 Image" style={{ width: '100%', height: 'auto' }} />
                <div className="text">
                    <h3 style={{ color: '#FFFFFF', fontWeight: 600, letterSpacing: 2 }}>Strategy & Discovery</h3>
                    <p>
                        As KaDoBu’s creative and strategic partners, we conducted in-depth
                        research to shape a seamless digital experience. From user behavior to
                        market trends, every insight guided us in crafting a sleek, intuitive
                        5-page website that blends aesthetics with performance.
                    </p>
                    <button
                    className='t-btn'
                        type="button"
                    >
                        Visit Website
                    </button>
                </div>
            </div>
        </section>
        </>
    );
}
