"use client";
import React, { useState } from 'react';
import Image from 'next/image';


import TabbingImage1 from '/public/services/software-development/software-sec-03-1.png';
import TabbingImage2 from '/public/services/software-development/software-sec-03-2.png';
import TabbingImage3 from '/public/services/software-development/software-sec-03-3.png';
import TabbingImage4 from '/public/services/software-development/software-sec-03-4.png';
import TabbingImage5 from '/public/services/software-development/software-sec-03-5.png';
import TabbingImage6 from '/public/services/software-development/software-sec-03-6.png';
import TabbingImage7 from '/public/services/software-development/software-sec-03-7.png';
import TabbingImage8 from '/public/services/software-development/software-sec-03-8.png';

import TabbingMobileImage1 from '/public/services/software-development/software-secm-03-1.png';
import TabbingMobileImage2 from '/public/services/software-development/software-secm-03-2.png';
import TabbingMobileImage3 from '/public/services/software-development/software-secm-03-3.png';
import TabbingMobileImage4 from '/public/services/software-development/software-secm-03-4.png';
import TabbingMobileImage5 from '/public/services/software-development/software-secm-03-5.png';
import TabbingMobileImage6 from '/public/services/software-development/software-secm-03-6.png';
import TabbingMobileImage7 from '/public/services/software-development/software-secm-03-7.png';
import TabbingMobileImage8 from '/public/services/software-development/software-secm-03-8.png';

const tabsData = [
  {
    id: 'tabs-1',
    title: 'Custom API Development',
    description:
      'Custom API Development is a cornerstone of modern software architecture, enabling seamless integration and communication between disparate systems and applications. At Creasions, we specialize in crafting custom APIs tailored to your specific needs and requirements. Whether you’re looking to enhance data exchange, automate processes, or extend the functionality of your applications, our expert developers are dedicated to delivering scalable and efficient API solutions.',
    imageUrl: TabbingImage1,
    mobileImageUrl: TabbingMobileImage1
  },
  {
    id: 'tabs-2',
    title: 'Custom Software Development',
    description:
      'We specialize in designing and developing customized software solutions that cater specifically to our clients’ needs. Our software development services enable businesses to streamline their operations, increase their productivity, and ultimately, improve their bottom line. With our creative and energetic approach to software development, we’ll make sure that your technology is as dynamic and innovative as your business.',
    imageUrl: TabbingImage2,
    mobileImageUrl: TabbingMobileImage2
  },
  {
    id: 'tabs-3',
    title: 'Database Design and Development',
    description:
      'We offer custom database design services tailored to suit the unique needs of your business. Our team of expert database designers is dedicated to crafting scalable and efficient database solutions that align with your specific requirements. Whether you’re looking to optimize data storage, improve data retrieval speed, or enhance data security, our custom database design services ensure that you have a robust and reliable foundation for your applications.',
    imageUrl: TabbingImage3,
    mobileImageUrl: TabbingMobileImage3
  },
  {
    id: 'tabs-4',
    title: 'DevOps Services',
    description:
      'We specialize in designing and developing customized software solutions that cater specifically to our clients’ needs. Our software development services enable businesses to streamline their operations, increase their productivity, and ultimately, improve their bottom line. With our creative and energetic approach to software development, we’ll make sure that your technology is as dynamic and innovative as your business.',
    imageUrl: TabbingImage4,
    mobileImageUrl: TabbingMobileImage4
  },
  {
    id: 'tabs-5',
    title: 'Enterprise Software Development',
    description:
      'Renowned for its expertise in software development consulting, Creasions guides enterprises through strategic planning and implementation phases, ensuring that the resulting software solutions align seamlessly with their needs. As a custom software developer, the company excels in creating bespoke and scalable software solutions tailored specifically for the enterprise environment.',
    imageUrl: TabbingImage5,
    mobileImageUrl: TabbingMobileImage5
  },
  {
    id: 'tabs-6',
    title: 'Mobile App Development',
    description:
      'Our team of expert developers specializes in crafting bespoke mobile applications that cater to your specific needs and objectives. Whether you’re looking to enhance customer engagement, streamline internal processes, or expand your reach, our custom mobile app development services ensure that you have a solution perfectly suited to your requirements.',
    imageUrl: TabbingImage6,
    mobileImageUrl: TabbingMobileImage6
  },
  {
    id: 'tabs-7',
    title: 'UI/UX Design for Software',
    description:
      'Creasions stands at the forefront of providing exceptional UI/UX designs for software, seamlessly integrating user-centric principles into its software development services. Renowned for its commitment to delivering visually appealing and highly intuitive user interfaces, Creasions ensures an exceptional user experience for every software application.',
    imageUrl: TabbingImage7,
    mobileImageUrl: TabbingMobileImage7

  },
  {
    id: 'tabs-8',
    title: 'Web Application Development',
    description:
      'We excel in custom web application development, offering tailored solutions to meet the unique needs of your business. Our team of expert developers specializes in crafting bespoke web applications that are designed to address your specific requirements and objectives. Whether you’re looking to streamline processes, improve efficiency, or enhance user experiences, our custom web application development services ensure that you have a solution perfectly aligned with your business goals.',
    imageUrl: TabbingImage8,
    mobileImageUrl: TabbingMobileImage8
  },
];

const TabContent = ({ activeTab, tabId, title, description, imageUrl, mobileImageUrl }) => (
  <div
    className={`tab-pane ${tabId === activeTab ? 'active show' : ''}`}
    id={tabId}
    role="tabpanel"
  >
    <div className="box desktop">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" priority />
      <div className="text">
        <div className="blur"></div>
        <h5>{title}</h5>
        <p>{description}</p>
        <a href="#" className="t-btn t-btn-arrow-contact t-btn-arrow">
          Explore Beyond
        </a>
      </div>
    </div>

    <div className="box mobile">
      <div className="image-container">
        <Image 
          src={mobileImageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="fill" 
          priority 
          className="image" 
        />
      </div>
      
      <div className="text">
        <div className="blur"></div>
        <div className="row">
          <div className="col-sm-12">
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
          <div className="explore-btn">
            <a href="#" className="t-btn t-btn-arrow-contact t-btn-arrow">
              Explore Beyond
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
);


const Section2 = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  // Handle tab switch
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="soft-sec-2 mobile-screen-slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center box-1">
              <h4>
                What Software Development <br />
                Services and Solution We Offer
              </h4>
              <p>
                Creasions is your go-to company for comprehensive software
                development services. Our team of skilled developers is committed
                to delivering tailored solutions that align perfectly with your
                business needs. Whether you require custom software development, CRM
                integration, or application maintenance, our expertise ensures that
                you receive top-notch solutions that drive efficiency and innovation.
                Trust Creasions to be your partner in software development, guiding
                you towards success with our cutting-edge solutions and unparalleled
                expertise.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-tabs" >
              {tabsData.map(({ id, title }) => (
                <li className="nav-item" key={id}>
                  <a
                    className={`nav-link ${activeTab === id ? 'active' : ''}`}
                    onClick={() => handleTabClick(id)}
                    role="tab"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="tab-content software-mobile-slider">
              {tabsData.map(({ id, title, description, imageUrl , mobileImageUrl}) => (
                <TabContent
                  key={id}
                  activeTab={activeTab}
                  tabId={id}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  mobileImageUrl={mobileImageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
