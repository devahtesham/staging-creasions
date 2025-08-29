import Image from 'next/image'
import React from 'react'
import RightArrow from '/public/right-arrow.webp';

export default function Section1() {
    return (
        <section className='cleaning-sec-1 '>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text">
                            <form>
                                <input type="email" placeholder="Enter your Email Address *" required />
                                <button type="submit" className="submit-btn">
                                    Get My Free Proposal <Image src={RightArrow} alt="right arrow" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
