import React from 'react';

// import syne and lato fonts from layout.js
import { syne, lato } from '@/app/layout';

import Image from 'next/image';
import Link from 'next/link';

import FooterLogo from '/public/footer-logo.webp';
import PaymentLogos from '/public/payment-logos.webp';
import WhatsappIcon from '/public/whatsapp-img.webp';
import EmailIcon from '/public/email-img.webp';

const Footer = () => {
  return (
    <footer className={lato.className}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-logo">
              <Link href="/">
                <Image src={FooterLogo} priority alt="Creasions Logo" />
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="details-links-list">
              <div className="list-box">
                <h6 className={syne.className}>Drop us an Email</h6>
                <Link href="mailto:connect@creasions.com">connect@creasions.com</Link>
              </div>
              <div className="align-list-box">
                <div className="list-box">
                  <h6 className={syne.className}>Call Now</h6>
                  <Link href="tel:+1 469-854-3814">+1 469-854-3814</Link>
                </div>
                <div className="list-box">
                  <h6 className={syne.className}>Locations</h6>
                  <p>
                    6600 Chase Oaks Blvd #150, 
                    <br />
                    Plano, TX 75023, United States
                  </p>
                  <p>
                    530 Technology Dr Suite 100, <br/> Irvine, CA 92618
                  </p>
                </div>
              </div>
              {/* <div className="payment-box">
                <Image src={PaymentLogos} alt="" />
              </div> */}
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="footer-nav-lists">
                  <h5 className={syne.className}>Core Services</h5>
                  <ul>
                    <li><Link href="/services/website-development-dallas">Website Development Service</Link> </li>
                    <li><Link href="/services/website-design-dallas">Website Design Services</Link> </li>
                    <li><Link href="/services/branding-agency-dallas">Branding Services</Link> </li>
                    <li><Link href="/services/digital-marketing-dallas">Digital Marketing Services</Link> </li>
                    <li><Link href="/services/software-development-dallas">Software Services</Link> </li>
                    <li><Link href="/services/application-development-dallas">Application Development Services</Link> </li>
                    <li><Link href="/services/virtual-employees-services-dallas">Virtual Employee Services</Link> </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="three-align-box">
                  <div className="box-01">
                    <div className="footer-nav-lists">
                      <h5 className={syne.className}>Our Work</h5>
                      <ul>
                        <li><Link href="/portfolio">Portfolio</Link> </li>
                        {/* <li><Link href="/case-studies">Case Studies</Link> </li> */}
                      </ul>
                    </div>
                    <div className="footer-nav-lists">
                      <h5 className={syne.className}>About Us</h5>
                      <ul>
                        <li><Link href="/about/our-company">Our Company</Link> </li>
                        <li><Link href="/about/our-partners">Partners</Link> </li>
                        <li><Link href="/about/our-mission">Mission</Link> </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-02">
                    <div className="footer-nav-lists">
                      <h5 className={syne.className}>Others</h5>
                      <ul>
                        <li><Link href="/blogs">Blogs</Link> </li>
                        <li><Link href="/contact-us">Get In Touch</Link> </li>
                        <li><Link href="/about/privacy-policy/">Privacy Policy</Link> </li>
                        <li><Link href="/about/terms-conditions/">Terms & Conditions</Link> </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="two-links-btns-align">
                  {/* <Link href="https://wa.me/14698543814" target='_blank'>
                    <Image src={WhatsappIcon} alt="Whatsapp Icon" />
                    <div className="content">
                      <h6 className={syne.className}>Reach us on</h6>
                      <h5 className={syne.className}>Whatsapp</h5>
                    </div>
                  </Link> */}

                  <Link href="mailto:connect.creasions@gmail.com">
                    <Image src={EmailIcon} alt="" />
                    <div className="content">
                      <h6 className={syne.className}>Contact us on</h6>
                      <h5 className={syne.className}>Email</h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="copy-right-text text-center">
              <p>© 2025 All Right Reserved | <Link href="" target="_blank">Creasions</Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
