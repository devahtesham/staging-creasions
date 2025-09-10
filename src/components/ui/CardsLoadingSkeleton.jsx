import React from 'react';

const CardsLoadingSkeleton = ({ count = 6 }) => {
  return (
    <div className="container">
      <div className="row post-lest">
        {Array.from({ length: count }).map((_, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="prod-main skeleton-card">
              {/* Image skeleton */}
              <div className="skeleton-image"></div>
              
              <div className="main-heading">
                <div className="heading-box">
                  {/* Title skeleton */}
                  <div className="skeleton-title"></div>
                  <div className="skeleton-title skeleton-title-short"></div>
                  
                  {/* Description skeleton */}
                  <div className="skeleton-text"></div>
                  <div className="skeleton-text"></div>
                  <div className="skeleton-text skeleton-text-short"></div>
                </div>
                
                <div className="pric-box">
                  {/* Date skeleton */}
                  <div className="skeleton-date"></div>
                  {/* Button skeleton */}
                  <div className="skeleton-button"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .skeleton-card {
          background: transparent;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .skeleton-image {
          width: 100%;
          height: 250px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          margin-bottom: 1rem;
        }

        .skeleton-title {
          height: 24px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          margin-bottom: 8px;
        }

        .skeleton-title-short {
          width: 70%;
        }

        .skeleton-text {
          height: 16px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          margin-bottom: 6px;
        }

        .skeleton-text-short {
          width: 60%;
        }

        .skeleton-date {
          height: 14px;
          width: 120px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }

        .skeleton-button {
          height: 36px;
          width: 120px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 20px;
        }

        .pric-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        }

        .heading-box {
          margin-bottom: 1rem;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* Dark theme support */
        @media (prefers-color-scheme: dark) {
          .skeleton-image,
          .skeleton-title,
          .skeleton-text,
          .skeleton-date,
          .skeleton-button {
            background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
            background-size: 200% 100%;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .skeleton-card {
            margin-bottom: 1.5rem;
          }
          
          .skeleton-image {
            height: 200px;
          }
        }

        @media (max-width: 576px) {
          .skeleton-image {
            height: 180px;
          }
          
          .pric-box {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .skeleton-button {
            width: 100px;
            height: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default CardsLoadingSkeleton;
