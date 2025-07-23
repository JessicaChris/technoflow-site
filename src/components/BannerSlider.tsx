import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/company-1.jpg';
import img2 from '../assets/company-2.jpg';
import img3 from '../assets/company-3.jpg';

const images = [img1, img2, img3];

const BannerSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      style={styles.slider}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // 🔥 Fade-in on reload
    >
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            ...styles.slide,
            opacity: index === current ? 1 : 0,
            zIndex: index === current ? 1 : 0,
          }}
        >
          <img src={img} alt={`Slide ${index}`} style={styles.image} />
          <div style={styles.overlay}></div>
        </div>
      ))}
    </motion.div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  slider: {
    position: 'relative',
    width: '100%',
    height: '400px',
    overflow: 'hidden',
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease-in-out',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // 🖤 Dark overlay
    zIndex: 2,
  },
};

export default BannerSlider;
