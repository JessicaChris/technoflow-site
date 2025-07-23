import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';
import { MdWorkOutline } from 'react-icons/md';

const Intro: React.FC = () => {
  return (
    <motion.section
      style={{
        backgroundColor: '#111',
        color: '#fff',
        padding: '7rem 5rem 1rem', // ⬅️ Pushes content lower
        textAlign: 'center',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        style={{ fontSize: '3.4rem', marginBottom: '1rem' }} // ⬅️ Bigger logo/title
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        TECHNO FLOW LLC
      </motion.h2>

      <motion.p
        style={{
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          lineHeight: '1.8',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        TECHNO FLOW LLC, established in 2024 in the UAE, has grown to meet and exceed market expectations.
        As a specialized organization, it excels in engineering, and covering building services, infrastructure, and oil and gas industries.
        <br /><br />
        We have worked on a variety of project-related necessities, including electrical switchgear panels,
        energy automation, low-current solutions, fire alarms, lighting control, diesel generators,
        water treatment systems, pumps, motors, distribution and power transformers,
        industrial junction boxes, UPS & DC systems.
      </motion.p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        <motion.div
          style={styles.statBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <FaUsers size={50} color="#00AEEF" style={{ marginBottom: '0.5rem' }} />
          <span style={styles.statNumber}>10+</span>
          <span style={styles.statLabel}>Clients</span>
        </motion.div>

        <motion.div
          style={styles.statBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <MdWorkOutline size={50} color="#00AEEF" style={{ marginBottom: '0.5rem' }} />
          <span style={styles.statNumber}>25+</span>
          <span style={styles.statLabel}>Completed Projects</span>
        </motion.div>
      </div>
    </motion.section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '140px',
  },
  statNumber: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    color: '#00AEEF',
  },
  statLabel: {
    fontSize: '1rem',
    marginTop: '0.2rem',
  },
};

export default Intro;
