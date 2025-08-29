import React from "react";
import VideoOptimizer from "@/components/ui/VideoOptimizer";
import VideoThumbnail from '/public/video-thumbnail.png'
import Link from 'next/link'

const Section2 = () => {
  const sectionData = [
    {
      title: "Best Search Engine Optimization Dallas - Drive More Traffic & Leads",
      description: "At Creasions, a leading SEO company Dallas, we provide expert SEO services Dallas that help businesses dominate search engine rankings. Our team specializes in on-page SEO, technical SEO, local SEO, and link-building strategies to boost visibility and organic traffic. As a trusted search engine optimization Dallas agency, we craft customized SEO strategies that drive measurable results, improve conversions, and elevate your brand’s digital presence. Partner with Creasions for data-driven SEO solutions that make your business stand out online.",
      videoSrc: "/services/digital-marketing/digital_m-sec-03-1.mp4",
      reverseOrder: false,
      link: "/services/seo-services-dallas",
    },
    {
      title: "Top AdWords Company in Dallas | Expert PPC Services in Dallas",
      description: "In today's competitive digital landscape, having a strong search engine marketing Dallas strategy is essential for business growth. At Creasions, we are a trusted AdWords company in Dallas, offering data-driven PPC services in Dallas to help businesses maximize their ROI. Our team of SEM experts specializes in Google Ads, Bing Ads, and display advertising, ensuring targeted reach, high conversion rates, and increased leads. Whether you're looking for strategic SEM services Dallas or need an experienced PPC agency to optimize your campaigns, we deliver tailored solutions to boost your online presence and drive measurable success.",
      videoSrc: "/services/digital-marketing/digital_m-sec-03-2.mp4",
      reverseOrder: true,
      link: "/services/ppc-services-dallas",
    },
    {
      title: "E-commerce Marketing Dallas | Drive Sales & Brand Growth",
      description: "In the competitive digital landscape, e-commerce marketing Dallas plays a crucial role in driving online success. Whether you’re a startup looking to establish your brand or a growing business aiming to scale, our expert team at Creasions specializes in data-driven e-commerce marketing strategies tailored to boost visibility, engagement, and sales. As a leading e-commerce marketing company, we utilize cutting-edge digital solutions, including SEO, PPC, social media, and conversion optimization, to help your online store stand out and thrive.",
      videoSrc: "/services/digital-marketing/digital_m-sec-03-1.mp4",
      reverseOrder: false,
      link: "/services/ecommerce-marketing-dallas",
    },
    {
      title: "Social Media Marketing Dallas | Elevate Your Brand Online",
      description: "In today's digital landscape, social media marketing Dallas is essential for building brand awareness, engagement, and conversions. At Creasions, we specialize in strategic social media marketing services designed to help businesses increase their online visibility and drive results. From organic content creation to paid social media advertising (PPC marketing services), our expert team develops customized campaigns tailored to your target audience. Whether you're looking to grow on Facebook, Instagram, LinkedIn, Twitter, or TikTok, we help brands make an impact and maximize their social media potential.",
      videoSrc: "/services/digital-marketing/digital_m-sec-03-2.mp4",
      reverseOrder: true,
      link: "/services/social-media-marketing-dallas",
    },
    {
      title: "Email Marketing Dallas | Drive Engagement & Conversions",
      description: "Looking to boost customer engagement and drive sales? Email marketing Dallas is one of the most effective ways to connect with your audience and nurture leads. At Creasions, we specialize in personalized email marketing campaigns that increase brand awareness, customer retention, and conversions. Our data-driven email marketing strategies, including automation, segmentation, and A/B testing, ensure your emails reach the right audience at the right time. Whether you need newsletters, promotional emails, or drip campaigns, our expert team will craft compelling content that drives results.",
      videoSrc: "/services/digital-marketing/digital_m-sec-03-1.mp4",
      reverseOrder: false,
      link: "/services/email-marketing-dallas",
    },
    {
      title: "Reputation Management Dallas | Protect & Enhance Your Brand",
      description: "Your online reputation can make or break your business. At Creasions, our expert reputation management Dallas services help businesses build a strong, positive brand image while minimizing negative content. Whether you’re dealing with bad reviews, misleading information, or need a proactive approach to maintain credibility, we implement strategic online reputation management (ORM) solutions tailored to your needs. From review monitoring and response strategies to SEO-driven content creation, we ensure that your brand remains trustworthy and competitive in the digital space.",
      videoSrc: "/services/digital-marketing/digital_m-sec-03-2.mp4",
      reverseOrder: true,
      link: "/services/reputation-management-dallas",
    },
    {
      title: "Content Marketing Dallas | Drive Engagement & Boost Visibility",
      description: "At Creasions, we specialize in content marketing Dallas services that help businesses attract, engage, and convert their target audience. Our expert team crafts high-quality, SEO-optimized content, including blog posts, website copy, email campaigns, and social media content, ensuring your brand stays relevant and competitive. Through data-driven content strategies, we enhance brand awareness, improve search rankings, and drive meaningful customer interactions. Whether you're looking for thought leadership content, storytelling, or high-converting ad copy, we deliver tailored solutions that align with your business goals.",
      videoSrc: "/services/digital-marketing/digital_m-sec-03-1.mp4",
      reverseOrder: false,
      link: "/services/content-marketing-dallas",
    },
  ];

  return (
    <section className="web-sec-2 web-design-2 pb-0">
      <div className="container">
        {/* Title Row */}
        <div className="row">
          <div className="col-lg-5">
            <div className="text">
              <h4>What Web <br /> Solution Do <br /> You Need?</h4>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <p>
                Creasions emerges as the go-to solution for a diverse array of web needs, offering a comprehensive range of services to address every aspect of your online presence. Whether you require a visually stunning and user-friendly website, cutting-edge web design services, or strategic digital marketing solutions, it has the expertise to meet all requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sections Rows */}
      <div className="container-fluid pl-0 sticky-sec">
        {sectionData.map((data, index) => (
          <Link href={data.link} key={index}>
          <div
            className={`row align-items-center pb-0 ${data.reverseOrder ? "reverse-digital" : ""}`}
            key={index}
          >
            {/* Video Column */}
            <div className={`col-lg-5 col-md-12`}>
              <div className="img-box">
                <div className="video-box">

                  <VideoOptimizer
                    src={data.videoSrc}
                    poster={VideoThumbnail}
                  />
                </div>
              </div>
            </div>
            
            {data.reverseOrder && (
              <div className="col-lg-1 col-md-1"></div>
            )}

            {/* Text Column */}
            <div className={`${data.reverseOrder ? "col-lg-5" : "col-lg-6"} col-md-12`}>
              <div className="text box-2">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Section2;
