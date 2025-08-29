"use client";

import { Helmet } from 'react-helmet-async';
import { usePathname } from 'next/navigation';


const HelmetHeadWrapper = ({ children }) => {
  const pathname = usePathname();

  const canonicalUrl = `https://creasions.com${pathname}`;

  return (
    <Helmet>
          <link rel="canonical" href={canonicalUrl} />
      {children}
    </Helmet>
  );
};

export default HelmetHeadWrapper;
