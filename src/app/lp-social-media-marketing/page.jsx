import Image from "next/image";
import "@/app/css/SocialMedia.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fancyapps/ui/dist/fancybox/fancybox.css';


import CreasionsLogo from '/public/socialmedia/creasions-logo.png';
import BannerLogo from '/public/socialmedia/banner-logo.png';
import FiftypercentLogo from '/public/socialmedia/fifty-percent.png';
import frekLogo from '/public/socialmedia/frek.png';
import fremLogo from '/public/socialmedia/frem.png';
import brackLogo from '/public/socialmedia/brack.png';
import capsLogo from '/public/socialmedia/caps.png';
import sentLogo from '/public/socialmedia/sent.png';
import percentLogo from '/public/socialmedia/percent.png';
import numbLogo from '/public/socialmedia/numb.png';
import vacenLogo from '/public/socialmedia/vacen.png';
import socialmediaLogo from '/public/socialmedia/social-media-v2.png';
import phoneLogo from '/public/socialmedia/phone-icon.png';
import rm1Logo from '/public/socialmedia/rm1.png';
import rm2Logo from '/public/socialmedia/rm2.png';
import rm4Logo from '/public/socialmedia/rm4.png';
import premsoftLogo from '/public/socialmedia/premsoft.png';
import softLogo from '/public/socialmedia/soft-bm.png';
import Form from "@/components/views/lp-social-media/Form";
import Portfolio from "@/components/views/lp-social-media/Portfolio";
import Section7 from "@/components/views/home/Section7";
import Faq from "@/components/layout/Faq";
import { faqData } from "@/components/mocks/homeFaq";


export default function LpSocialMediaMarketing() {
    return (

        <>
            <section className="banner-sec lp-market">
                <div className="container">
                    <Image src={CreasionsLogo} className="top-logo" alt="logo" />
                    <div className="row align-items-center">

                        <div className="col-lg-7 col-md-12">

                            <div className="banner-text">

                                <p>Award-Winning Social Media Marketing Agency in the USA</p>

                                <h1>Social Media</h1>
                                <h1><span>Services</span> to Boost</h1>
                                <h1>Your desired <span>Brand</span></h1>

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
                                    Get the BEST <strong>RESULTS </strong> <br />IN <span>1  WEEK</span>
                                </h3>
                                <Form />

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Portfolio />




            <section className="full-section audio">
                <div className="container">
                    <h2 className="title_block center">The Complete Social Media Experience</h2>
                    <p className="center">Drive engagement and leads with a premium social media marketing agency.</p>
                    <div className="video_columns audio-platform items book-slider-mob ">
                        <div className="logo-plat item image-container"> <Image src={frekLogo} alt="banner-logo" />
                            <h3>Social Media Audit</h3>
                            <p>Initial performance and content review of your social media.</p>
                        </div>
                        <div className="logo-plat item image-container">  <Image src={fremLogo} alt="banner-logo" />
                            <h3>Social Media Strategy</h3>
                            <p>Custom plans to meet your branding and social media objectives.</p>
                        </div>
                        <div className="logo-plat item image-container">  <Image src={brackLogo} alt="banner-logo" />
                            <h3>Social Media Content</h3>
                            <p>Text, image, and video content that captures your audience’s interest.</p>
                        </div>
                        <div className="logo-plat item image-container">  <Image src={capsLogo} alt="banner-logo" />
                            <h3>Community Management</h3>
                            <p>Online community building to start conversations with your followers.</p>
                        </div>
                        <div className="logo-plat item image-container"> <Image src={sentLogo} alt="banner-logo" />
                            <h3>Paid Social sMedia</h3>
                            <p>Promote content to the right audience and grow leads with your media spend.</p>
                        </div>
                        <div className="logo-plat item image-container">  <Image src={percentLogo} alt="banner-logo" />
                            <h3>Influencer Marketing</h3>
                            <p>Niche social media influencer collaborations to grow your social presence.</p>
                        </div>
                        <div className="logo-plat item image-container">  <Image src={numbLogo} alt="banner-logo" />
                            <h3>Social Media Campaigns</h3>
                            <p>Impactful campaign creation with social boosting for immediate results.</p>
                        </div>
                        <div className="logo-plat item image-container">  <Image src={vacenLogo} alt="banner-logo" />
                            <h3>Analytics &amp; Reporting</h3>
                            <p>Track and monitor your social success through weekly reports.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="cta-mainWrap">

                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="title_block white">Beat The Competition With A Top Notch Social Media Marketing Strategy Today</h2>
                            <p><b>91% of businesses use social media to reach customers. Don’t let the competition get to your audience first.</b>

                                Let us set up and manage a social media presence for your business.</p>
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
                            <h2 className="title_block center">The Social Media Strategy Road Map</h2> </div>
                    </div>
                    <div className="road-map book-slider-mob">
                        <div className="road-map-bx"> <Image src={rm1Logo} alt="sec-logo" />
                            <h3>Discovery  Call</h3>
                            <p>The kick-off call allows us to understand your business and the goals you want to achieve with social media. The baseline we set during our initial call helps us create a custom strategy.</p>
                        </div>
                        <div className="road-map-bx"> <Image src={rm2Logo} alt="sec-logo" />
                            <h3>Social Media  Audit</h3>
                            <p>Once we have the relevant details, we do a deep-dive into your existing social presence so we can assess your audience, identify areas of improvement, and opportunities to achieve your goals.</p>
                        </div>
                        <div className="road-map-bx"> <Image src={premsoftLogo} alt="sec-logo" />
                            <h3>Strategy  Creation</h3>
                            <p>Here we finalize the social media strategy including the content strategy while keeping your goals in focus. If you’re opting for paid social media, we will also factor your budget into the strategy.</p>
                        </div>
                        <div className="road-map-bx"><Image src={rm4Logo} alt="sec-logo" />
                            <h3>Approval &amp; Execution</h3>
                            <p>Your strategy is shared for approval. At this stage, you can share any feedback so we can make edits before the execution stage. As soon as you give us the green light, our team will deploy your plan.</p>
                        </div>
                        <div className="road-map-bx"> <Image src={softLogo} alt="sec-logo" />
                            <h3>Analytics &amp; Reporting</h3>
                            <p>You can expect to receive weekly and monthly updates on the current status and execution of your social media strategy along with the results of our organic and paid (if selected) social efforts.</p>
                        </div>
                    </div>
                </div>


            </section>

      <Section7 />
      <Faq data={faqData} />





        </>











    );
}
