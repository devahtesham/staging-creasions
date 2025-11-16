import Link from 'next/link';
import React from 'react';
import SecImg from '/public/kadobu/laptop-img.png'
import Image from 'next/image';

export default function Section2({ data }) {
    const title = data?.title || 'The Challenge'
    const text = data?.text || '<p>We didn\'t just design a website for KaDoBu - we built their digital presence...</p>'
    const ctaUrl = data?.cta_url || 'https://kadobu.com/'
    const ctaText = data?.cta_text || 'Visit Website'
    const laptopImage = data?.laptop_image || SecImg.src
    
    const strategyTitle = data?.strategy_discovery?.title || 'Strategy & Discovery'
    const strategyText = data?.strategy_discovery?.text || '<p>As KaDoBu\'s creative and strategic partners...</p>'
    const strategyButtonUrl = data?.strategy_discovery?.button_url || 'https://kadobu.com/'
    const strategyButtonText = data?.strategy_discovery?.button_text || 'Visit Website'

    return (
        <>
            <section className="KaDoBu-02" style={{ background: '#080411', color: '#E5DEFF', padding: '140px 0 0' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 text-center position-relative z-1">
                            <h3 style={{ color: '#FFFFFF', fontWeight: 600, letterSpacing: 2 }}>{title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: text }} />
                            <a
                                href={ctaUrl}
                                className="t-btn"
                                tabIndex="0"
                            >
                                {ctaText}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="additional-section">
                    <img src={laptopImage} alt="KaDoBu Laptop" style={{ width: '100%', height: 'auto' }} />
                    <div className="text">
                        <h3 style={{ color: '#FFFFFF', fontWeight: 600, letterSpacing: 2 }}>{strategyTitle}</h3>
                        <div dangerouslySetInnerHTML={{ __html: strategyText }} />
                        {strategyButtonUrl && (
                            <a href={strategyButtonUrl} className='t-btn'>
                                {strategyButtonText}
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
