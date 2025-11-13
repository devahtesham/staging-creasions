import React from 'react';

export default function Section5() {
  return (
    <section className="KaDoBu-05" style={{ background: '#0B0B2A', color: '#fff', padding: '60px 0' }}>
      <div className="container text-center">
        <img src="/KaDoBu/laptop-mockup.png" alt="KaDoBu Website Screenshot" style={{ maxWidth: 600, width: '100%', margin: '0 auto 2rem' }} />
        <p style={{ fontSize: '1.1rem', maxWidth: 700, margin: '0 auto 2rem' }}>
          As KaDoBu’s creative and strategic partners, we conducted in-depth research to shape a seamless digital experience. From user behavior to market trends, every insight guided us in crafting a sleek, intuitive 5-page website that blends aesthetics with performance.
        </p>
        <a href="#" target="_blank" rel="noopener noreferrer" className="t-btn" style={{ background: '#FF6B00', color: '#fff', padding: '12px 32px', borderRadius: '30px', fontWeight: 600, textDecoration: 'none' }}>Visit Website</a>
      </div>
    </section>
  );
}
