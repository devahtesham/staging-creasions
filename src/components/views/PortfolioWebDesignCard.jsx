import Link from 'next/link';
import React from 'react';

export default function PortfolioWebDesignCard({ imgSrc, altText, link, title }) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-6">
      <div className="img-box">
        <Link href={link}>
          <img
            src={imgSrc}
            className="img-fluid"
            alt={altText}
          />
          <p>{title}</p>
        </Link>
      </div>
    </div>
  );
}
