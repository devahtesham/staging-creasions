"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

import Circle from "/public/services/branding/dropsectonImage.png";

// Fallback services list
const fallbackServices = [
  "Pay-Per-Click (PPC)",
  "Search Engine Optimization (SEO)", 
  "Search Engine Marketing (SEM)",
  "Email Marketing",
  "Content Marketing",
  "Social Media Marketing (SMM)",
  "Affiliate Marketing",
  "Online Public Relations (PR)",
  "Influencer Marketing",
  "Web Analytics and Data Analysis",
  "Mobile Marketing",
  "Video Marketing",
  "Local SEO and Marketing",
  "Customer Relationship Management (CRM)",
  "E-commerce Marketing",
  "Social Listening",
  "Marketing Automation",
  "Reputation Management",
  "Chatbot Marketing",
  "Remarketing and Retargeting"
];

export default function Section3({ allServicesData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Use API data if available, otherwise fallback to static services
  const services = allServicesData?.services_grid?.length > 0 ? allServicesData.services_grid : fallbackServices;
  const sectionHeading = allServicesData?.heading || "All Digital Marketing Services";

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
                  <Link href={service?.service_url ? service?.service_url : '#'} className="btn t-btn">{service?.service_name}</Link>
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
