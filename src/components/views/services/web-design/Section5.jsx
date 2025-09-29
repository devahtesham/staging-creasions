import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Image1 from '/public/services/web-development/sec5img01.png'
import Image2 from '/public/services/web-development/sec5img02.png'
import Image3 from '/public/services/web-development/sec5img03.png'
import Image4 from '/public/services/web-development/sec5img04.png'
import Image5 from '/public/services/web-development/sec5img05.png'
import Image6 from '/public/services/web-development/sec5img06.png'



// Fallback images in case API doesn't provide portfolio images
const fallbackImages = [Image1, Image2, Image3, Image4, Image5, Image6];

export default function Section5({ portfolioData }) {
    // Use API data if available, otherwise fallback to static data
    const portfolioImages = portfolioData?.our_qualities?.length > 0 
        ? portfolioData.our_qualities.map(quality => quality.image)
        : fallbackImages;

    const sectionHeading = portfolioData?.section_heading || "Our Work";

    return (
        <section className="web-sec-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="text">
                            <h2>{sectionHeading}</h2>
                        </div>
                        <div className="image-gridBox">
                            {portfolioImages.slice(0, 6).map((imgSrc, index) => (
                                <Image 
                                    key={index}
                                    src={imgSrc} 
                                    alt={`portfolio image ${index + 1}`}
                                    width={300}
                                    height={200}
                                    unoptimized={typeof imgSrc === 'string' && imgSrc.startsWith('http')}
                                />
                            ))}
                        </div>
                        <div className="text">
                            <Link href="/portfolio/website-design" className="btn t-btn">View All Work <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.550781" width="19" height="19" rx="9.5" stroke="white"/>
                            <path d="M13.5211 12.8235L13.298 7.15893C13.2915 7.05339 13.2643 6.94853 13.2179 6.85036C13.129 6.6526 12.9682 6.49182 12.7705 6.4029C12.6723 6.35652 12.5675 6.32933 12.4619 6.32287L6.79738 6.09971C6.69175 6.09554 6.58797 6.11223 6.49198 6.14881C6.39598 6.18538 6.30964 6.24114 6.23789 6.31289C6.09299 6.45779 6.0163 6.65905 6.02471 6.87238C6.03311 7.08571 6.12592 7.29364 6.28271 7.45043C6.4395 7.60722 6.64743 7.70003 6.86076 7.70843L10.5935 7.84984L5.91933 12.524C5.77502 12.6683 5.69864 12.8687 5.70701 13.0812C5.71539 13.2936 5.80781 13.5007 5.96396 13.6569C6.12012 13.813 6.3272 13.9055 6.53966 13.9138C6.75212 13.9222 6.95256 13.8458 7.09687 13.7015L11.771 9.02738L11.9124 12.7601C11.9161 12.8658 11.9408 12.9714 11.9849 13.0708C12.029 13.1702 12.0918 13.2613 12.1695 13.3391C12.2472 13.4168 12.3384 13.4795 12.4378 13.5236C12.5371 13.5678 12.6427 13.5924 12.7485 13.5961C12.8542 13.6007 12.9582 13.5844 13.0544 13.5479C13.1506 13.5115 13.2371 13.4558 13.309 13.384C13.3808 13.3121 13.4365 13.2256 13.4729 13.1294C13.5094 13.0332 13.5257 12.9292 13.5211 12.8235Z" fill="white"/>
                            </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
