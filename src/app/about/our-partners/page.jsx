import React from 'react';
import '@/app/css/OurPartners.css'; 

import Image from 'next/image';

import Image1 from '/public/image-177.webp'
import Image2 from '/public/image-176.webp'
import Image3 from '/public/image-175.webp'
import Image4 from '/public/image-171.webp'
import Image5 from '/public/image-172.webp'
import Image6 from '/public/Semrush-1.webp'
import Image7 from '/public/image-173-1.webp'
import Image8 from '/public/image-170.webp'


import { metadata as pageMetadata } from "@/components/mocks/metadata/our-partners/metadata";


export const metadata = pageMetadata; 



export default function Ourpartner() {
    return (
      <div className='our-partners'>
        <section className="inner-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading">
                            <h2>Our Partners</h2>
                            <p>At Creasions Digital, we pride ourselves on our strong partnerships with leading companies and platforms in the industry. As a top website development company, top design agency, and top developer team, our collaborations enable us to deliver exceptional solutions to our clients. Here’s a brief overview of our esteemed partners.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="web-sec-3 soft-sec-4 gradian-bg partners-sec">
            <div className="container">
                <Image src={Image1} className="first" alt="Partner 1" />
                <Image src={Image2} className="secrn" alt="Partner 2" />
                <Image src={Image3} className="last-mg" alt="Partner 3" />

                <div className="row p-0 border-0 row-col">
                    <div className="col-lg-4 col-md-6">
                        <div className="text text-center box">
                            <h5>Upwork</h5>
                            <p>Upwork is a global freelancing platform where businesses and independent professionals connect and collaborate remotely. Creasions Digital has been a top partner on Upwork, recognized for our high-quality website development and design services. Our top developer team leverages Upwork to engage with clients, delivering custom IT solutions that meet their unique needs.</p>
                            <Image src={Image5} className="img-fluid" alt="Upwork Logo" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="text text-center box">
                            <h5>Software Development Expertise</h5>
                            <p>Fiverr is a global online marketplace offering tasks and services, beginning at a cost of $5 per job, hence its name. Creasions Digital has been a top partner on Fiverr for over five years, providing top-tier website development, design, and IT services. Our expertise and dedication have earned us a reputation as a reliable and professional IT company on the platform.</p>
                            <Image src={Image4} className="img-fluid" alt="Fiverr Logo" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="text text-center box">
                            <h5>Semrush</h5>
                            <p>Semrush is a leading online visibility management and content marketing SaaS platform, trusted by internet marketers worldwide. As a top design agency and website development company, Creasions Digital has partnered with Semrush to enhance our clients’ digital marketing strategies. Our use of Semrush’s powerful tools helps us deliver data-driven results and optimize online presence effectively.</p>
                            <Image src={Image6} className="img-fluid" alt="Semrush Logo" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 pre-ede">
                        <div className="text text-center box">
                            <h5>Automattic</h5>
                            <p>Automattic Inc. is an American global distributed company founded in August 2005, best known for WordPress.com and its contributions to WordPress. The company’s name is a play on founder Matt Mullenweg. Creasions Digital has proudly partnered with Automattic, utilizing WordPress to develop and design dynamic websites. As a top website development company, we leverage Automattic’s technology to create responsive, user-friendly websites that stand out in the digital landscape.</p>
                            <Image src={Image7} className="img-fluid" alt="Automattic Logo" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 pre-ede">
                        <div className="text text-center box">
                            <h5>Intel</h5>
                            <p>Intel is a multinational corporation and technology company, widely known for its innovation in semiconductor manufacturing and computing. Our partnership with Intel allows Creasions Digital to integrate cutting-edge technology into our website development and IT solutions. As a top design agency and IT company, we benefit from Intel’s advanced hardware and software solutions to deliver high-performance results for our clients.</p>
                            <Image src={Image8} className="img-fluid" alt="Intel Logo" />
                        </div>
                    </div>
                </div>

                <div className="row last-partn">
                    <div className="col-lg-12">
                        <div className="heading">
                            <p>Our long-standing partnerships with these industry leaders underscore our commitment to excellence and innovation. At Creasions Digital, we continue to collaborate with the best to provide top-notch services and solutions for our clients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}