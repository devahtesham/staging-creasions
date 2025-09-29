"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

import Circle from "/public/services/branding/dropsectonImage.png";

// Fallback services list
const fallbackServices = [
  { service_name: "Pay-Per-Click (PPC)", service_url: "/services/ppc-services-dallas" },
  { service_name: "Search Engine Optimization (SEO)", service_url: "/services/seo-services-dallas" },
  { service_name: "Search Engine Marketing (SEM)", service_url: "/services/social-media-marketing-dallas" },
  { service_name: "Email Marketing", service_url: "/services/email-marketing-dallas" },
  { service_name: "Content Marketing", service_url: "/services/content-marketing-dallas" },
  { service_name: "Social Media Marketing (SMM)", service_url: "/services/ppc-services-dallas" },
  { service_name: "Affiliate Marketing", service_url: "" },
  { service_name: "Online Public Relations (PR)", service_url: "" },
  { service_name: "Influencer Marketing", service_url: "" },
  { service_name: "Web Analytics and Data Analysis", service_url: "" },
  { service_name: "Mobile Marketing", service_url: "" },
  { service_name: "Video Marketing", service_url: "" },
  { service_name: "Local SEO and Marketing", service_url: "/services/local-listing-management-dallas" },
  { service_name: "Customer Relationship Management (CRM)", service_url: "" },
  { service_name: "E-commerce Marketing", service_url: "/services/ecommerce-marketing-dallas" },
  { service_name: "Social Listening", service_url: "" },
  { service_name: "Marketing Automation", service_url: "" },
  { service_name: "Reputation Management", service_url: "/services/local-listing-management-dallas" },
  { service_name: "Chatbot Marketing", service_url: "" },
  { service_name: "Remarketing and Retargeting", service_url: "" }
];

export default function Section4({ allServicesData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Use API data if available, otherwise fallback to static services
  const services = allServicesData?.services_grid?.length > 0 ? allServicesData.services_grid : fallbackServices;
  const sectionHeading = allServicesData?.section_heading || "All Digital Marketing Services";

  return (
    <section ref={ref} className="dropsection">
      <div className="container-fluid p-0">
        <div className="row p-0">
          <div className="col-lg-12">
            <div className="text text-center">
              <h2>{sectionHeading}</h2>
            </div>
            <div className="img-box flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: -400 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
            <div className="floatingButtonsBox">
              {services.map((service, index) => (
                <div key={index} className="btnBox">
                  <Link href={service.service_url || "#"} className="btn t-btn">
                    {service.service_name}
                  </Link>
                </div>
              ))}
            </div>
                {/* <Image src={Circle} alt="dropImage" className="imgfalldrop" /> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
