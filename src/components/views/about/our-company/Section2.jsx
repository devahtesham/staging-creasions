"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


export default function Section2() {
    // const [bgTransform, setBgTransform] = useState(0);

    const [scrollIndex, setScrollIndex] = useState(0); // Content change based on scroll
    const sec02Ref = useRef(null); // Reference for sec-02

    const handleScroll = () => {
        const scrollY = window.scrollY;

        // const bg = document.querySelector('.inner-title .bg');

        // if (scrollY >= 600) {
        //     setBgTransform(-300);
        //     bg.style.transform = `translate(100px, -900px)`; 
        // } else {
        //     setBgTransform(0); 
        //     bg.style.transform = 'translate(100px, 0)';
        // }

        // console.log("Scroll Y:", scrollY, "BG Bottom:", bgTransform);

        // when we scroll down, add

        if (scrollY >= 1450 && scrollY <= 2500) {
            const scrollPercentage = (scrollY - 1450) / (2500 - 1450);
            setScrollIndex(Math.floor(scrollPercentage * 4));
        } else if (scrollY < 1450) {
            setScrollIndex(0);
        } else {
            setScrollIndex(3);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section className="sec-02" ref={sec02Ref}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                        >
                            15
                        </motion.h1>
                    </div>

                    <div className="col-lg-4">
                        <div className="right-content">
                        <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Year Market Experience
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Leveraging over a decade of expertise in the industry.
                            </motion.p>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                4600+ <br />Projects Done
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                A testament to our capability & reliability in handling diverse & complex projects.
                            </motion.p>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                10+ <br />Locations
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Expanding our reach to global locations, we deliver local expertise.
                            </motion.p>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                1840+ <br />Happy Clients
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Our commitment to excellence is reflected in our large base of satisfied customers.
                            </motion.p>
                        </div>
                        <div className="right-content-mobile">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Year Market Experience
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Leveraging over a decade of expertise in the industry.
                            </motion.p>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                4600+ <br />Projects Done
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                A testament to our capability & reliability in handling diverse & complex projects.
                            </motion.p>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                10+ <br />Locations
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Expanding our reach to global locations, we deliver local expertise.
                            </motion.p>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                1840+ <br />Happy Clients
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Our commitment to excellence is reflected in our large base of satisfied customers.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
