import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaTools, FaShieldAlt } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const cards = [
    {
      icon: <FaBolt size={28} color="#ffffffff" />,
      title: 'High Performance',
      text: 'Engineered for reliability, efficiency, and modern infrastructure demands.',
    },
    {
      icon: <FaTools size={28} color="#ffffffff" />,
      title: 'Cutting-Edge Solutions',
      text: 'From automation to power systems, we deliver tailor-made technology.',
    },
    {
      icon: <FaShieldAlt size={28} color="#ffffffff" />,
      title: 'Trusted Expertise',
      text: 'Built on experience, driven by innovation, focused on client success.',
    },
  ];

  return (
    <section style={styles.wrapper}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={styles.heading}
      >
        Powering Tomorrow's Infrastructure ⚡
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.2}}
        style={styles.subtext}
      >
        At Techno Flow LLC, we combine engineering precision with a future-focused approach—
        delivering premium solutions across power, automation, and control systems.
      </motion.p>

      <div style={styles.grid}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.1 }}
            whileHover={{ scale: 1.05 }}
            style={styles.card}
          >
            <div style={styles.icon}>{card.icon}</div>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardText}>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    backgroundColor: '#111',
    padding: '5rem 1.5rem',
    fontFamily: 'sans-serif',
    minHeight: '100vh',
    textAlign: 'center',
    color: '#fff',
  },
  heading: {
    fontSize: '2.8rem',
    marginBottom: '1.5rem',
    color: '#ffffffff',
  },
  subtext: {
    maxWidth: '700px',
    margin: '0 auto 3rem',
    color: '#ccc',
    fontSize: '1.125rem',
    lineHeight: '1.8',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    background: '#1a1a1a',
    borderRadius: '1rem',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    padding: '2rem',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  icon: {
    marginBottom: '1rem',
  },
  cardTitle: {
    marginBottom: '0.75rem',
    color: '#ffffffff',
    fontSize: '1.3rem',
  },
  cardText: {
    color: '#aaa',
    fontSize: '0.95rem',
  },
};

export default HeroSection;
