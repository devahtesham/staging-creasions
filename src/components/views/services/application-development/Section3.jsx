"use client";
import React, { useState } from 'react';
import Image from 'next/image';

import TabbingImage1 from '/public/services/application-development/app-sec-03-1.png';
import TabbingImage2 from '/public/services/application-development/app-sec-03-2.png';
import TabbingImage3 from '/public/services/application-development/app-sec-03-3.png';
import TabbingImage4 from '/public/services/application-development/app-sec-03-4.png';
import TabbingImage5 from '/public/services/application-development/app-sec-03-5.png';
import TabbingImage6 from '/public/services/application-development/app-sec-03-6.png';
import TabbingImage7 from '/public/services/application-development/app-sec-03-7.png';

import TabbingMobileImage1 from '/public/services/application-development/app-secm-03-1.png';
import TabbingMobileImage2 from '/public/services/application-development/app-sec-03-2.png';
import TabbingMobileImage3 from '/public/services/application-development/app-sec-03-3.png';
import TabbingMobileImage4 from '/public/services/application-development/app-sec-03-4.png';
import TabbingMobileImage5 from '/public/services/application-development/app-sec-03-5.png';
import TabbingMobileImage6 from '/public/services/application-development/app-sec-03-6.png';
import TabbingMobileImage7 from '/public/services/application-development/app-sec-03-7.png';


const tabsData = [
  {
    id: 'tabs-1',
    title: 'Custom Application Development',
    description:
      'Creasions stands out as a premier mobile application development company, offering bespoke solutions through its expertise in custom application development. As a trusted partner in the digital landscape, we employ a team of skilled mobile app developers who are adept at transforming unique ideas into fully functional, tailor-made applications.',
    imageUrl: TabbingImage1,
    mobileImageUrl: TabbingMobileImage1
  },
  {
    id: 'tabs-2',
    title: 'Database Design and Development',
    description:
      'We excel in providing custom database design and development services tailored to meet the unique needs of your business. Our dedicated team of database design and developers specializes in crafting scalable and efficient database solutions that align perfectly with your requirements. Whether you’re looking to optimize data storage, improve data retrieval speed, or enhance data security, we have the expertise to deliver results.',
    imageUrl: TabbingImage2,
    mobileImageUrl: TabbingMobileImage2
  },
  {
    id: 'tabs-3',
    title: 'Enterprise Application Development',
    description:
      'We specialize in providing custom enterprise application development services tailored to meet the unique needs of your business. Our experienced team of enterprise application developers is dedicated to crafting scalable and innovative solutions that drive efficiency and productivity. Whether you require a comprehensive ERP system, a robust CRM platform, or a custom workflow management solution, we have the expertise to deliver results.',
    imageUrl: TabbingImage3,
    mobileImageUrl: TabbingMobileImage3
  },
  {
    id: 'tabs-4',
    title: 'Mobile Application Development',
    description:
      'Creasions stands as a distinguished mobile app design company, specializing in comprehensive mobile application development services. With a commitment to creating visually appealing and intuitively designed mobile applications, Creasions combines creativity with technical expertise to deliver exceptional results.',
    imageUrl: TabbingImage4,
    mobileImageUrl: TabbingMobileImage4
  },
  {
    id: 'tabs-5',
    title: 'UI/UX Design for Applications',
    description:
      'We offer top-notch custom UI/UX design services tailored specifically for applications. Our skilled team of UI/UX designers specializes in creating intuitive and engaging user interfaces that enhance the overall user experience. Whether you need a sleek mobile app interface or a user-friendly web application design, we have the expertise to bring your vision to life.',
    imageUrl: TabbingImage5,
    mobileImageUrl: TabbingMobileImage5
  },
  {
    id: 'tabs-6',
    title: 'Web Application Development',
    description:
      'Creasions establishes itself as a leading web app design company, offering a comprehensive range of services in web application development. With a focus on creating visually striking and user-friendly web applications, Creasions stands out for its commitment to excellence in both design and functionality.',
    imageUrl: TabbingImage6,
    mobileImageUrl: TabbingMobileImage6
  },
  {
    id: 'tabs-7',
    title: 'API Development and Integration',
    description:
      'We provide custom API development and integration services tailored to suit the unique needs of your business. Our skilled team of API development and integration developers is committed to crafting scalable and efficient solutions that seamlessly connect your systems and applications. Whether you need to enhance data exchange, automate processes, or extend the functionality of your software ecosystem, we have the expertise to deliver results.',
    imageUrl: TabbingImage7,
    mobileImageUrl: TabbingMobileImage7
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

const Section3 = () => {
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
                What Application Development <br />
                Services We Offers

              </h4>
              <p>
                We specialize in designing and developing customized software solutions that cater specifically to our clients&apos; needs. Our software development services enable businesses to streamline their operations, increase their productivity, and ultimately.
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

export default Section3;
