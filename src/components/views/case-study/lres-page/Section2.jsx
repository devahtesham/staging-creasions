import React from 'react';

const Section2 = ({ data }) => {
  const backgroundImage = data?.background_image || 'https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/bg-1-2.png'
  const title = data?.title || 'Welcome to Property Management'
  const buttonUrl = data?.button_url || 'https://mylres.com/'
  const buttonText = data?.button_text || 'Visit Live Site'
  const heroImage = data?.hero_image || 'https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/tap-1-cut.png'

  return (
    <section
      className="sec-02 wow fadeIn"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        visibility: 'visible',
        animationName: 'fadeIn'
      }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 wow fadeInLeft"
            data-wow-duration="2s"
            style={{
              visibility: 'visible',
              animationDuration: '2s',
              animationName: 'fadeInLeft'
            }}
          >
            <div className="text">
              <h1>{title?.split(" ").slice(0, 2).join(" ")}<br />{title?.split(" ").slice(2).join(" ")}</h1>
              <a
                href={buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="t-btn"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        src={heroImage}
        className="img-fluid tap-1 wow fadeInRight"
        data-wow-duration="2s"
        alt="Hero"
        style={{
          visibility: 'visible',
          animationDuration: '2s',
          animationName: 'fadeInRight'
        }}
      />
    </section>
  );
};

export default Section2;
