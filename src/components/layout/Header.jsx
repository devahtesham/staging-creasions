"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { fetchMegaMenu, getpageSlugByHeading } from '@/utils/helper'

// logo
import HeaderLogo from '/public/Creasions-Logo.webp'
import RightArrow from '/public/right-arrow.webp'

export default function Header() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const data = await fetchMegaMenu();
        setMenuData(data);
      } catch (error) {
        console.error('Error loading menu:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
  }, []);

  // Fallback menu data in case API fails
  const fallbackMenu = [
    {
      id: 1,
      title: "Home",
      slug: "/",
      children: []
    },
    {
      id: 2,
      title: "Services",
      slug: "",
      children: [
        {
          id: 3,
          title: "Web Development Service",
          slug: "/services/website-development-dallas",
          subchildren: []
        },
        {
          id: 4,
          title: "Web Design Services",
          slug: "/services/website-design-dallas",
          subchildren: []
        },
        {
          id: 5,
          title: "Branding Services",
          slug: "/services/branding-agency-dallas",
          subchildren: []
        },
        {
          id: 6,
          title: "Graphic Design Services",
          slug: "/services/graphic-designing-dallas",
          subchildren: []
        },
        {
          id: 7,
          title: "Digital Marketing Services",
          slug: "/services/digital-marketing-dallas",
          subchildren: [
            {
              id: 8,
              title: "Search Engine Optimization",
              slug: "/services/seo-services-dallas"
            },
            {
              id: 9,
              title: "Social Media Marketing",
              slug: "/services/social-media-marketing-dallas"
            },
            {
              id: 10,
              title: "Ecommerce Marketing",
              slug: "/services/ecommerce-marketing-dallas"
            },
            {
              id: 11,
              title: "Search Engine Marketing",
              slug: "/services/ppc-services-dallas"
            },
            {
              id: 12,
              title: "Email Marketing",
              slug: "/services/email-marketing-dallas"
            },
            {
              id: 13,
              title: "Content Marketing",
              slug: "/services/content-marketing-dallas"
            },
            {
              id: 14,
              title: "Local Listing Management",
              slug: "/services/listing-service-dallas"
            },
            {
              id: 15,
              title: "Internet Marketing",
              slug: "/services/internet-marketing-dallas"
            },
            {
              id: 16,
              title: "Reputation Management",
              slug: "/services/reputation-management-dallas"
            }
          ]
        },
        {
          id: 17,
          title: "Software Services",
          slug: "/services/software-development-dallas",
          subchildren: []
        },
        {
          id: 18,
          title: "Application Development Services",
          slug: "/services/application-development-dallas",
          subchildren: []
        },
        {
          id: 19,
          title: "Virtual Employee Services",
          slug: "/services/virtual-employees-services-dallas",
          subchildren: []
        }
      ]
    },
    {
      id: 20,
      title: "About Us",
      slug: "",
      children: [
        {
          id: 21,
          title: "Our Company",
          slug: "/about/our-company",
          subchildren: []
        },
        {
          id: 22,
          title: "Partners",
          slug: "/about/our-partners",
          subchildren: []
        },
        {
          id: 23,
          title: "Mission",
          slug: "/about/our-mission",
          subchildren: []
        }
      ]
    },
    {
      id: 24,
      title: "Industry",
      slug: "",
      children: [
        {
          id: 25,
          title: "Real Estate Website Services",
          slug: "/industry/real-estate-website-services-dallas",
          subchildren: []
        },
        {
          id: 26,
          title: "Cleaning Company Website Services",
          slug: "/industry/cleaning-company-website-services-dallas",
          subchildren: []
        },
        {
          id: 27,
          title: "Beauty Salons & Spa Website Services",
          slug: "/industry/beauty-salons-spa-website-services-dallas",
          subchildren: []
        }
      ]
    },
    {
      id: 28,
      title: "Case Studies",
      slug: "/case-study",
      children: []
    },
    {
      id: 29,
      title: "Blogs",
      slug: "/blogs",
      children: []
    },
    {
      id: 30,
      title: "Contact Us",
      slug: "/contact-us",
      children: []
    }
  ];

  // Use API data if available, otherwise fallback to static menu
  const currentMenu = menuData.length > 0 ? menuData : fallbackMenu;

  // Helper function to format slug
  const formatSlug = (slug) => {
    if (!slug || slug === "#") return "#";
    return slug.startsWith("/") ? slug : `/${slug}`;
  };

  // Helper function to render menu items
  const renderMenuItem = (item) => {
    const hasChildren = item.children && item.children.length > 0;
    const hasSubChildren = item.children && item.children.some(child => child.subchildren && child.subchildren.length > 0);
    
    return (
      <li key={item.id}>
        <Link 
          href={formatSlug(item.slug)} 
          className={item.slug === "/" ? "home-active" : ""}
        >
          {item.title}
          {hasChildren && <i priority className="fa fa-angle-down" aria-hidden="true"></i>}
        </Link>
        {hasChildren && (
          <ul className="sub-menu">
            {item.children.map((child) => (
              <li key={child.id}>
                <Link href={formatSlug(child.slug)}>
                  {child.title}
                  {child.subchildren && child.subchildren.length > 0 && (
                    <i priority className="fa fa-angle-right" aria-hidden="true"></i>
                  )}
                </Link>
                {child.subchildren && child.subchildren.length > 0 && (
                  <ul className="sub-menu">
                    {child.subchildren.map((subChild) => (
                      <li key={subChild.id}>
                        <Link href={formatSlug(subChild.slug)}>
                          {subChild.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  if (loading) {
    return (
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3">
              <div className="header-logo">
                <Link href="/">
                  <Image src={HeaderLogo} priority alt="creasions logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="header-nav">
                <div>Loading...</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3">
            <div className="header-logo">
              <Link href="/">
                <Image src={HeaderLogo} priority alt="creasions logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="header-nav">
              <ul>
                {currentMenu.map((item) => {
                  // Special handling for Contact Us to maintain the button styling
                  if (item.title === "Contact Us") {
                    return (
                      <li key={item.id}>
                        <Link target='_parent' href={formatSlug(item.slug)} className="t-btn t-btn-arrow" passHref>
                          {item.title} <Image src={RightArrow} alt="right arrow" />
                        </Link>
                      </li>
                    );
                  }
                  
                  // Render all other menu items using the helper function
                  return renderMenuItem(item);
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
