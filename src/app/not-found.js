"use client";
import Link from 'next/link';
import '@/app/css/404.css';
import RightArrow from '/public/right-arrow.webp'
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <main className='not-found'>
      <div className="container">
        <h1 className="error-message">404 ERROR</h1>
        <p className="message">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          target='_parent'
          href="/"
          className="t-btn t-btn-arrow t-btn-arrow-gra"
        >
          Go back to Home <Image src={RightArrow} alt="right arrow" />
        </Link>




      </div>
    </main>
  );
};

export default NotFoundPage;
