import React from 'react'
import './page.css';
import Link from 'next/link';


export default function ThankYouPage() {
    return (
        <section
            className="main"
            style={{
                backgroundImage:
                    'url("/home-sec-01-bg.png")'
            }}
        >
            <div className="site-header" id="header">
                <h1 className="site-header__title" data-lead-id="site-header-title">
                    THANK YOU!
                </h1>
            </div>
            <div className="main-content">
                <i className="fa fa-check main-content__checkmark" id="checkmark" />
                <p className="main-content__body" data-lead-id="main-content-body">
                    Thanks a bunch for filling that out. It means a lot to us, just like you
                    do! <br />
                    We really appreciate you giving us a moment of your time today. Thanks for
                    being you.
                </p>
                <Link target='_parent' className='main-content__button' href="/">Visit Our Site</Link>
            </div>
            <div className="site-footer" id="footer">
                <p className="site-footer__fineprint" id="fineprint">
                    Copyright © 2025 | All Rights Reserved
                </p>
            </div>
        </section>
    )
}
