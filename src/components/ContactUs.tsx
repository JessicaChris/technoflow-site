import React, { useEffect, useRef, useState } from 'react';

const ContactUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '6rem 2rem',
        color: '#fff',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        backgroundImage: 'url("/assets/office-2.jpg")', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '12px',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 🖤 Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 0,
        }}
      />

      {/* 🔥 Content Wrapper */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '4rem',
          maxWidth: '1000px',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {/* 📍 Left: Header */}
        <div
          style={{
            flex: '1 1 300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            Contact Us
          </h2>
        </div>

        {/* 📨 Right: Form */}
        <div style={{ flex: '1 1 500px' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Sent! You slayed that message queen 👑');
            }}
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1.5rem',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
              }}
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1.5rem',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
              }}
            />
            <textarea
              required
              placeholder="Your Message"
              rows={5}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1.5rem',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
                resize: 'vertical',
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                background: '#000000ff',
                color: '#fff',
                fontWeight: '700',
                fontSize: '1.1rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#262c2fff')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0d0f11ff')}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
