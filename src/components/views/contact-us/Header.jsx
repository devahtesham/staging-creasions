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
              <Link target='_parent' href="/">

                <Image src={HeaderLogo} priority alt="creasions logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="header-nav">
              <ul>
                <li>
                  <Link target="_parent" href="/" className="home-active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link target="_parent" href="#">Services <i priority className="fa fa-angle-down" aria-hidden="true"></i></Link>
                  <ul className="sub-menu">
                    <li>
                      <Link target="_parent" href="/services/website-development-dallas">
                        Web Development Service
                      </Link>
                    </li>
                    <li>
                      <Link target="_parent" href="/services/website-design-dallas">
                        Web Design Services
                      </Link>
                    </li>
                    <li>
                      <Link target="_parent" href="/services/branding-agency-dallas">
                        Branding Services
                      </Link>
                    </li>
                    <li>
                      <Link target="_parent" href="/services/graphic-designing-dallas">
                        Graphic Design Services
                      </Link>
                    </li>
                    <li>
                      <Link target="_parent" href="/services/local-listing-management-dallas">
                        Local Listing Management Services
                      </Link>
                    </li>
                    <li>
                      <Link target="_parent" href="/services/digital-marketing-dallas">
                        Digital Marketing Services
                      </Link>
                    </li>
                    <li>
                      <Link target="_parent" href="/services/software-development-dallas">
                        Software Services
                      </Link>
                    </li>
                    <li>
                      <Link target="_parent" href="/services/application-development-dallas">
                        Application Development Services
                      </Link>
                    </li>
                    <li>
                      <Link target="_parent" href="/services/virtual-employees-services-dallas">
                        Virtual Employee Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link target="_parent" href="#">About Us <i priority className="fa fa-angle-down" aria-hidden="true"></i></Link>
                  <ul className="sub-menu">
                    <li>
                      <Link target="_parent" href="/about/our-company">
                        Our Company
                      </Link>
                    </li>
                    <li>
                      <Link target="_parent" href="/about/our-partners">
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link target="_parent" href="/about/our-mission">
                        Mission
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link target="_parent" href="#">Industry <i priority className="fa fa-angle-down" aria-hidden="true"></i></Link>
                  <ul className="sub-menu">
                    <li>
                      <Link target="_parent" href="/industry/real-estate-website-services-dallas">
                        Real Estate Website Services
                      </Link>
                    </li>
                    <li>
                      <Link target="_parent" href="/industry/cleaning-company-website-services-dallas">
                        Cleaning Company Website Services
                      </Link>
                    </li>
                    <li>
                      <Link target="_parent" href="/industry/beauty-salons-spa-website-services-dallas">
                        Beauty Salons & Spa Website Services
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <Link target="_parent" href="/portfolio">Portfolio
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
                  <Link target="_parent" href="/case-study">
                    Case Studies
                  </Link>
                </li>
                {/* Blogs */}
                <li>
                  <Link target="_parent" href="/blogs">Blogs</Link>
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
