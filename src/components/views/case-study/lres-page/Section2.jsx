import React from 'react';

const Section2 = () => {
  return (
    <section
      className="sec-02 wow fadeIn"
      style={{
        backgroundImage: 'url("https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/bg-1-2.png")',
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
              <h1>
                Welcome to<br /> Property Management
              </h1>
              <a
                href="https://mylres.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="t-btn"
              >
                Visit Live Site
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        src="https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/tap-1-cut.png"
        className="img-fluid tap-1 wow fadeInRight"
        data-wow-duration="2s"
        alt=""
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
