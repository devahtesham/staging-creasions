import React from 'react'
import RightArrow from '/public/right-arrow.webp'
import Link from 'next/link'

export default function Section5() {
    return (
        <section
            className="real-sec-5 wow bounceInUp"
            data-wow-duration="3s"
            style={{
                visibility: "visible",
                animationDuration: "3s",
                animationName: "bounceInUp"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="case-brand-text">
                            <h3>
                                Beyond web design, our team can handle your social media management &amp; run effective pay-per-click (PPC) campaigns to increase your traffic. Here&apos;s a look at some of our specialized real estate web design services &amp; how they can help grow your business.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="case-box">
                            <div className="text">
                                <h3>Search Engine Optimisation</h3>
                                <p>Boost your real estate website&apos;s visibility with our expert SEO services. Our real estate web designers collaborate with SEO specialists to ensure every aspect of your site is fully optimized. By improving your search rankings, we help you attract more leads and increase conversions for your real estate business.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="case-box">
                            <div className="text">
                                <h3>Ecommerce Web Design</h3>
                                <p>Maximize sales with our comprehensive ecommerce web design services. We handle everything from hosting to payment processing, ensuring a seamless shopping experience for your customers. Our designs are conversion-focused, making it easy for visitors to complete their transactions smoothly from start to finish.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="case-box">
                            <div className="text">
                                <h3>Web Design &amp; Development</h3>
                                <p>At Creasions, we create custom real estate websites tailored specifically to your business. Every site we design is unique, reflecting the individual identity of each client. We work closely with you to bring your vision to life, ensuring that your website perfectly represents your brand and services.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="case-box">
                            <div className="text">
                                <h3>Responsive Web Design</h3>
                                <p>Your website should look amazing on every device. That&apos;s why we follow best practices in responsive design, ensuring your site functions beautifully whether viewed on a desktop, laptop, or mobile device. With a responsive design, visitors will enjoy seamless navigation no matter how they access your site.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="case-box">
                            <div className="text">
                                <h3>Content Writing</h3>
                                <p>Our content specialists are ready to craft high-quality, original content that drives action. As part of our real estate web design services, we ensure your website&apos;s messaging is clear &amp; compelling. With your input, our writers will align their style to suit your brand &amp; create content that motivates visitors to follow your calls to action (CTAs).</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="case-box">
                            <div className="text">
                                <h3>Shopify Web Design</h3>
                                <p>Build your real estate brand and attract more customers with a customized Shopify store. Our web design team creates tailored Shopify themes to showcase your business and drive conversions. Plus, we offer SEO services for your Shopify site to ensure maximum visibility and success.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="case-box">
                            <div className="text">
                                <h3>Wordpress Experts</h3>
                                <p>We use WordPress to design professional, custom websites that meet the unique needs of our real estate clients. Whether you&apos;re tech-savvy or not, WordPress provides an intuitive content management system (CMS) that makes it easy to update and manage your site, all while maintaining a polished, professional look.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="case-box">
                            <div className="text">
                                <h3>Custom Web Design</h3>
                                <p>Stand out from the competition with a fully customized website. At Creasions, we offer bespoke web designs that allow you to showcase your brand&apos;s unique identity. A custom-designed site not only strengthens your brand but also ensures your message reaches your target audience with clarity &amp; impact.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <Link href="/contact-us/" className="t-btn t-btn-arrow" tabIndex="0">
                        Let&apos;s Talk
                        <img src={RightArrow.src} alt="arrow-btn" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
