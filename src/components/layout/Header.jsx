import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// logo
import HeaderLogo from '/public/Creasions-Logo.webp'
import RightArrow from '/public/right-arrow.webp'

export default function Header() {
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
                <li>
                  <Link href="/" className="home-active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#">Services <i priority className="fa fa-angle-down" aria-hidden="true"></i></Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/services/website-development-dallas">
                        Web Development Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/website-design-dallas">
                        Web Design Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/branding-agency-dallas">
                        Branding Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/graphic-designing-dallas">
                        Graphic Design Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/digital-marketing-dallas">
                        Digital Marketing Services <i priority className="fa fa-angle-right" aria-hidden="true"></i>
                      </Link>
                      <ul className="sub-menu">
                                                <li>
                          <Link href="/services/seo-services-dallas">
                            Search Engine Optimization
                          </Link>
                        </li>
                                                <li>
                          <Link href="/services/social-media-marketing-dallas">
                            Social Media Marketing 
                          </Link>
                        </li>
                                                <li>
                          <Link href="/services/ecommerce-marketing-dallas">
                            Ecommerce Marketing
                          </Link>
                        </li>
                                                <li>
                          <Link href="/services/ppc-services-dallas">
                            Search Engine Marketing
                          </Link>
                        </li>
                                                <li>
                          <Link href="/services/email-marketing-dallas">
                            Email Marketing
                          </Link>
                        </li>
                                                <li>
                          <Link href="/services/content-marketing-dallas">
                            Content Marketing
                          </Link>
                        </li>

                        <li>
                          <Link href="/services/listing-service-dallas">
                            Local Listing Management 
                          </Link>
                        </li>


                        <li>
                          <Link href="/services/internet-marketing-dallas">
                            Internet Marketing
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/reputation-management-dallas">
                            Reputation Management
                          </Link>
                        </li>



                      </ul>
                    </li>
                    <li>
                      <Link href="/services/software-development-dallas">
                        Software Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/application-development-dallas">
                        Application Development Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/virtual-employees-services-dallas">
                        Virtual Employee Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">About Us <i priority className="fa fa-angle-down" aria-hidden="true"></i></Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/about/our-company">
                        Our Company
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/our-partners">
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/our-mission">
                        Mission
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">Industry <i priority className="fa fa-angle-down" aria-hidden="true"></i></Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/industry/real-estate-website-services-dallas">
                        Real Estate Website Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/industry/cleaning-company-website-services-dallas">
                        Cleaning Company Website Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/industry/beauty-salons-spa-website-services-dallas">
                        Beauty Salons & Spa Website Services
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <Link href="/portfolio">Portfolio
                   <i priority className="fa fa-angle-down" aria-hidden="true"></i>
                   </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/">
                        Case Studies
                      </Link>
                    </li>
                  </ul>
                </li> */}

                <li>
                  <Link href="/case-study">
                    Case Studies
                  </Link>
                </li>
                {/* Blogs */}
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link target='_parent' href="/contact-us" className="t-btn t-btn-arrow" passHref>
                    Contact Us <Image src={RightArrow} alt="right arrow" />
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </header>


  )
}
