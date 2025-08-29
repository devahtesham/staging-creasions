import Image from "next/image";
import "@/app/css/MediaAudits.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import CreasionsLogo from '/public/mediaaudits/creasions-logo.png';
import BannerLogo from '/public/mediaaudits/banner-logo.png';
import FiftypercentLogo from '/public/mediaaudits/fifty-percent.png';
import frekLogo from '/public/mediaaudits/frek.png';
import fremLogo from '/public/mediaaudits/frem.png';
import brackLogo from '/public/mediaaudits/brack.png';
import capsLogo from '/public/mediaaudits/caps.png';
import sentLogo from '/public/mediaaudits/sent.png';
import percentLogo from '/public/mediaaudits/percent.png';
import numbLogo from '/public/mediaaudits/numb.png';
import vacenLogo from '/public/mediaaudits/vacen.png';
import socialmediaLogo from '/public/mediaaudits/social-media-v2.png';
import phoneLogo from '/public/mediaaudits/phone-icon.png';
import rm1Logo from '/public/mediaaudits/rm1.png';
import rm2Logo from '/public/mediaaudits/rm2.png';
import rm4Logo from '/public/mediaaudits/rm4.png';
import premsoftLogo from '/public/mediaaudits/premsoft.png';
import softLogo from '/public/mediaaudits/soft-bm.png';
import maskarrow from '/public/mediaaudits/mask-arrow.png';
import leftsecbann from '/public/mediaaudits/left-sec-bann.png';

import Form from "@/components/views/lp-social-media/Form";
import Section7 from "@/components/views/home/Section7";
import { faqData } from "@/components/mocks/homeFaq";
import Faq from "@/components/layout/Faq";
import Portfolio from "@/components/views/lp-social-media/Portfolio";

export default function LpSocialMediaAudits() {
    return (

        <>

            <section className="banner-sec mediaaudits">
                <div className="container">
                    <Image src={CreasionsLogo} className="top-logo" alt="creasions-logo" />
                    <div className="row align-items-center">

                        <div className="col-lg-7 col-md-12">

                            <div className="banner-text">

                                <p>Award-Winning Social Media Marketing Agency in the USA</p>

                                <h1>Unlock the True</h1>
                                <h1>
                                    <span>Power</span> Your Brand&apos;s
                                </h1>
                                <h1>
                                    <span>Social Media</span>
                                </h1>

                                <p>
                                    Take your brand to the next level with a strategy that connects! From engaging posts to targeted campaigns, we make your brand unforgettable. </p>
                                <div className="btn-banner">
                                    <a className="t-btn" href="#">Get Started</a>

                                </div>
                                <a href="#">
                                    <Image src={BannerLogo} alt="banner-logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="banner-form">
                                <div className="Image-per">
                                    {/* <Image src={FiftypercentLogo}   alt=""/> */}
                                </div>
                                <h4>LIMITED TIME OFFER</h4>
                                <h3>
                                    Get the <strong>Audit </strong>IN  <span>24  HOURS</span>
                                </h3>
                                <div className="form-contact">
                                    <Form />



                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Portfolio  />

            <section className="full-section audio">
                <div className="container">
                    <h2 className="title_block center">
                        The Complete Social Media Experience
                    </h2>
                    <p className="center">
                        Drive engagement and leads with a premium social media marketing
                        agency.
                    </p>
                    <div className="video_columns audio-platform items book-slider-mob ">
                        <div className="logo-plat item image-container">
                            {" "}
                            <Image src={frekLogo} alt="banner-logo" />
                            <h3>Gain Clarity</h3>
                            <p>
                                Our audit provides a detailed evaluation of your social media profiles, helping you understand what&apos;s working and what needs improvement.
                            </p>
                        </div>
                        <div className="logo-plat item image-container">
                            {" "}
                            <Image src={fremLogo} alt="banner-logo" />
                            <h3>Optimize Your Branding</h3>
                            <p>
                                We analyze your visual identity and ensure consistency across all platforms, making your brand instantly recognizable and memorable.
                            </p>
                        </div>
                        <div className="logo-plat item image-container">
                            {" "}
                            <Image src={brackLogo} alt="banner-logo" />
                            <h3>Create Engaging Content</h3>
                            <p>
                                Discover content buckets and pillars that resonate with your target audience, allowing you to consistently deliver valuable and captivating posts.
                            </p>
                        </div>
                        <div className="logo-plat item image-container">
                            {" "}
                            <Image src={capsLogo} alt="banner-logo" />
                            <h3>Boost Organic Engagement</h3>
                            <p>
                                Learn proven strategies to increase your reach, visibility, and engagement, helping you connect with your audience on a deeper level.
                            </p>
                        </div>
                        <div className="logo-plat item image-container">
                            {" "}
                            <Image src={sentLogo} alt="banner-logo" />
                            <h3>Receive Actionable Insights</h3>
                            <p>
                                Our 25+ page presentation breaks down every aspect of your social media presence, providing clear action items and next steps to implement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-mainWrap">

                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="title_block white">Stay Ahead with a Comprehensive Social Media Audit Don&apos;t Let Your Competitors Outperform You! </h2>
                            <p><b>With 91% of businesses using social media to reach their audience, it&apos;s crucial to ensure your strategy is optimized for success. Our expert social media audit will uncover gaps.</b>
                            <br />
                            <br />
                            Let Creasions audit and elevate your social media strategy to outperform the competition. Contact us today!</p>
                            <div className="hero-btns-v1">
                                <div className="hero-btn-ctas">
                                    <a className="hero-phone-btn btn" href="tel:+14698543814">     <Image src={phoneLogo} alt="Blog Management" />+1 469-854-3814</a>

                                </div>
                            </div>
                        </div>
                        <div className="col-5 none-991">
                            <Image src={socialmediaLogo} alt="Blog Management" />
                        </div>
                    </div>
                </div>

            </section>

            <section className="chooseSection-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="title_block center">The Social Media Optimization Roadmap</h2> </div>
                    </div>
                    <div className="road-map book-slider-mob">
                        <div className="road-map-bx"> <Image src={rm1Logo} alt="sec-logo" />
                            <h3>Audit Review & Insights</h3>
                            <p>After completing the audit, we review the findings with you. This step allows us to share valuable insights on your current social media performance, identifying strengths, weaknesses, and growth opportunities for your brand.</p>
                        </div>
                        <div className="road-map-bx"> <Image src={rm2Logo} alt="sec-logo" />
                            <h3>Custom Strategy Development</h3>
                            <p>With audit insights in hand, we create a tailored social media strategy. This includes audience targeting, content optimization, platform selection, and engagement tactics, all designed to achieve your specific goals.</p>
                        </div>
                        <div className="road-map-bx"> <Image src={premsoftLogo} alt="sec-logo" />
                            <h3>Content Planning & Calendar Setup</h3>
                            <p>We develop a content calendar based on your brand&apos;s unique messaging and goals. Whether you&apos;re aiming for more engagement, brand awareness, or conversions, our team ensures that every post is aligned with your strategy.</p>
                        </div>
                        <div className="road-map-bx"><Image src={rm4Logo} alt="sec-logo" />
                            <h3>Strategy Approval & Adjustments</h3>
                            <p>Before execution, we present the revised strategy for your feedback. Your input ensures the plan aligns perfectly with your vision, and we make any necessary adjustments before moving forward.</p>
                        </div>
                        <div className="road-map-bx"> <Image src={softLogo} alt="sec-logo" />
                            <h3>Implementation & Management</h3>
                            <p>Once approved, our team will manage the execution of your strategy. From content creation to scheduling and platform management, we ensure your social media presence is active, engaging, and consistent.</p>
                        </div>
                    </div>
                </div>


            </section>

            <section className="virtual-sec-9">
                <div className="container">
                    <div className="row align-items-center">


                        <div className="col-lg-6 ">
                            <div className="text">
                                <h2>Discover Untapped Potential with Our Social Media Audit!</h2>

                                <a href="#" className="vertul-t-btn" target="_blank">View Report</a>

                                <div className="cont-box">

                                    <p><a href="#">Connect</a></p>
                                    <Image src={maskarrow} alt="mask" />
                                </div>




                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="img-box">

                                <Image src={leftsecbann} alt="left" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Section7 />
            <Faq data={faqData} />


        </>

    );
}
