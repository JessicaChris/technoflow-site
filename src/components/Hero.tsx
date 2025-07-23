import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 1rem',
      }}
    >
      <div
        ref={ref}
        style={{
          textAlign: 'center',
          color: '#fff',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
          transition: 'all 1s ease-out',
          maxWidth: '850px',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Company LLC</h1>
        <p style={{ fontSize: '1.5rem', lineHeight: '2.3rem' }}>
          Company LLC is a leading engineering company delivering a comprehensive range of services and solutions across multiple sectors, including power, water, infrastructure, and more. With decades of experience and a commitment to excellence, we deliver innovation with integrity.
        </p>
      </div>
    </div>
  );
};

export default Hero;
