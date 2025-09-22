import React from 'react';

import Image from 'next/image';

import Image1 from '/public/services/software-development/software-sec-04-1.webp'
import Image2 from '/public/services/software-development/software-sec-04-2.webp'
import Image3 from '/public/services/software-development/software-sec-04-3.webp'

const Section4 = ({ pageData }) => {
  const infoCardsData = pageData?.info_cards_section;
  
 
  const cards = infoCardsData?.cards;

  return (
    <section className="web-sec-3 soft-sec-4 gradian-bg">
      <div className="container">
        <div className="row p-0 border-0">
          <div className="col-lg-12">
            <div className="text text-center">
              <h2>{infoCardsData?.section_heading || "Collaboration Scenarios for Software Development"}</h2>
            </div>
          </div>
        </div>

        <div className="row p-0 border-0">
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4">
              <div className="text text-center box">
                <Image
                  src={card.image}
                  className="img-fluid"
                  alt={card.heading}
                  width={120}
                  height={106}
                />
                <h5 dangerouslySetInnerHTML={{ __html: card.heading }} />
                <p>
                  <span style={{ fontWeight: 400 }} dangerouslySetInnerHTML={{
                    __html: card.content
                  }} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
