import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* 🔥 Banner Section with Image and Overlay */}
      <motion.section
        style={styles.banner}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div style={styles.overlay}></div>
        <h1 style={styles.bannerTitle}>Contact Us</h1>
        <p style={styles.bannerSubtitle}>We'd love to hear from you! 💬</p>
      </motion.section>

      {/* 📬 Contact Section */}
      <section style={styles.container}>
        {/* Form */}
        <motion.div
          style={styles.formSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form style={styles.form}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <textarea placeholder="Your Message" style={styles.textarea} rows={5} />
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          style={styles.infoSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={styles.infoTitle}>GET IN TOUCH</h2>
          <p style={styles.infoText}>Email: technoflow.int@gmail.com</p>
          <p style={styles.infoText}>Phone: +971 55 138 79 60</p>
          <p style={styles.infoText}>Address: TECHNO FLOW ELECTRO MECHANICAL SERVICES L.L.C
TEL-06 520 7047,MOB- +971 54 511 6417
KHALWAN BUILDING ,LIWARA 1 AJMAN-UAE</p>

          <div style={styles.socialContainer}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.socialIcon}>
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a href="https://wa.me/97141234567" target="_blank" rel="noreferrer" style={styles.socialIcon}>
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </section>

      {/* 🌙 Footer Section */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerLeft}>
            <h3 style={styles.footerLogo}>TrendAce Software Solutions</h3>
            <p style={styles.footerTagline}>Empowering innovation, together. </p>
          </div>
        </div>
        <p style={styles.footerCopyright}>
          © {new Date().getFullYear()} TrendAce Software Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  banner: {
    backgroundImage: `url('/assets/office-3.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '100px 20px',
    textAlign: 'center',
    color: '#fff',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    zIndex: 1,
  },
  bannerTitle: {
    fontSize: '48px',
    fontWeight: 800,
    marginBottom: '20px',
    position: 'relative',
    zIndex: 2,
  },
  bannerSubtitle: {
    fontSize: '18px',
    color: '#ccc',
    maxWidth: '600px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '60px',
    padding: '80px 20px',
    backgroundColor: '#f9f9f9',
  },
  formSection: {
    flex: '1 1 450px',
    maxWidth: '450px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '6px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
  },
  infoSection: {
    flex: '1 1 450px',
    maxWidth: '450px',
    margin: '0 auto',
  },
  infoTitle: {
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '20px',
    color: '#000',
    textAlign: 'left',
    paddingLeft: '100px',
  },
  infoText: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'left',
    paddingLeft: '100px',
  },
  socialContainer: {
    marginTop: '20px',
    display: 'flex',
    gap: '20px',
    paddingLeft: '100px',
  },
  socialIcon: {
    fontSize: '26px',
    color: '#000',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  footer: {
    backgroundColor: '#111',
    color: '#eee',
    padding: '40px 20px 20px',
    textAlign: 'center',
  },
  footerContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLeft: {
    textAlign: 'center',
  },
  footerLogo: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '10px',
    color: '#fff',
  },
  footerTagline: {
    fontSize: '14px',
    color: '#ccc',
  },
  footerRight: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footerLink: {
    color: '#bbb',
    fontSize: '14px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  footerCopyright: {
    marginTop: '20px',
    fontSize: '12px',
    color: '#888',
  },
};

export default ContactPage;
