import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '3rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      {/* 🧭 Top Row - Info */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1000px',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '2rem',
        }}
      >
        {/* 📍 Address */}
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ marginBottom: '1rem' }}>Our Office</h3>
          <p style={{ lineHeight: 1.6 }}>
            TECHNO FLOW ELECTRO MECHANICAL SERVICES L.L.C <br />
            TEL-06 520 7047,MOB- +971 54 511 6417  <br />
            KHALWAN BUILDING ,LIWARA 1
            AJMAN-UAE
          </p>
        </div>

        {/* 📧 Email */}
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ marginBottom: '1rem' }}>Contact</h3>
          <p>Email: <a href="mailto:info@danwaygroup.com" style={{ color: '#fff', textDecoration: 'underline' }}>technoflow.int@gmail.com</a></p>
        </div>

        {/* 📲 Social Icons */}
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={28} color="#fff" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter size={28} color="#fff" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
              <FaWhatsapp size={28} color="#fff" />
            </a>
          </div>
        </div>
      </div>

      {/* 🔚 Bottom Text */}
      <div style={{ borderTop: '1px solid #444', paddingTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>
        © {new Date().getFullYear()} TrendAce Software Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
