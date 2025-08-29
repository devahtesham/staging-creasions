"use client";
import React, { useEffect } from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
export default function PortfolioCategoryCard({ imgSrc, link, caption }) {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='group']", {
      Thumbs: {
        autoStart: false, 
      },
    });
  }, []); 

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
      <div className="img-box">
        <a href={link} data-fancybox="group" data-caption={caption}>
          <img src={imgSrc} alt={caption} className="img-fluid" />
        </a>
      </div>
    </div>
  );
}
