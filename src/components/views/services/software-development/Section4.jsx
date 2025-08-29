import React from 'react';

import Image from 'next/image';

import Image1 from '/public/services/software-development/software-sec-04-1.webp'
import Image2 from '/public/services/software-development/software-sec-04-2.webp'
import Image3 from '/public/services/software-development/software-sec-04-3.webp'

const Section4 = () => {
  return (
    <section className="web-sec-3 soft-sec-4 gradian-bg">
      <div className="container">
        <div className="row p-0 border-0">
          <div className="col-lg-12">
            <div className="text text-center">
              <h2>
                Collaboration Scenarios <br />
                for Software Development
              </h2>
            </div>
          </div>
        </div>

        <div className="row p-0 border-0">
          <div className="col-lg-4">
            <div className="text text-center box">
              <Image
                src={Image1}
                className="img-fluid"
                alt="Software Development Expertise"
              />
              <h5>Software<br />Development Expertise</h5>
              <p>
                <span style={{ fontWeight: 400 }}>
                  At Creasions, we pride ourselves on our extensive expertise in
                  software development. As a leading software development company,
                  we specialize in creating tailored solutions that meet the unique needs
                  of our clients. Our team of skilled software developers is dedicated to
                  delivering high-quality, innovative software products that drive business
                  growth. From custom CRM development to cutting-edge applications, we have
                  the knowledge and experience to bring your ideas to life.
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text text-center box">
              <Image
                src={Image2}
                className="img-fluid"
                alt="Meet Our Software Development Team"
              />
              <h5>Meet Our Software<br />Development Team</h5>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Get to know the talented individuals behind our software development
                  success at Creasions. Our team of experienced software developers is
                  passionate about crafting solutions that exceed expectations and deliver
                  results. With a diverse skill set and a commitment to excellence, our team
                  is equipped to tackle any software development challenge. Collaborate with
                  us and meet the dedicated professionals who will bring your vision to
                  reality.
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text text-center box">
              <Image
                src={Image3}
                className="img-fluid"
                alt="Outsourced Software Management Solutions"
              />
              <h5>Outsourced Software<br />Management Solutions</h5>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Looking for reliable outsourced software management solutions? Look no
                  further than Creasions. As a trusted partner in software development, we
                  offer comprehensive outsourcing services to help you manage your software
                  projects efficiently and cost-effectively. Our experienced team handles
                  everything from project planning and execution to ongoing support and
                  maintenance, allowing you to focus on your core business activities. With
                  Creasions as your outsourcing partner, you can rest assured that your
                  software projects are in capable hands.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
