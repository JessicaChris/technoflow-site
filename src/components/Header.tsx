/// <reference types="node" />
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => setMenuOpen(!menuOpen);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  };

  return (
    <>
      <style>{`
        .fade-dropdown {
          animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.logoWrapper}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img
                src="/assets/logo.png"
                alt="Techno Flow Logo"
                style={styles.logoImage}
              />
            </Link>
          </div>

          {isMobile ? (
            <div style={styles.hamburger} onClick={toggleMobileMenu}>
              {menuOpen ? <FaTimes size={22} color="#000" /> : <FaBars size={22} color="#000" />}
            </div>
          ) : (
            <nav style={styles.nav}>
              {/* About Us */}
              <div
                style={styles.navItemWrapper}
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <span style={styles.link}>ABOUT US ▾</span>
                {hoveredMenu === 'about' && (
                  <div style={styles.dropdown} className="fade-dropdown">
                    <Link to="/about/our-team" style={styles.dropdownItem}>OUR TEAM</Link>
                    <Link to="/about/mission" style={styles.dropdownItem}>MISSION</Link>
                  </div>
                )}
              </div>

              {/* Companies */}
              <div
                style={styles.navItemWrapper}
                onMouseEnter={() => handleMouseEnter('companies')}
                onMouseLeave={handleMouseLeave}
              >
                <span style={styles.link}>COMPANIES ▾</span>
                {hoveredMenu === 'companies' && (
                  <div style={styles.dropdown} className="fade-dropdown">
                    <a href="#llc" style={styles.dropdownItem}>TECHNOFLOW LLC</a>
                    <a href="#em" style={styles.dropdownItem}>TECHNOFLOW EM</a>
                  </div>
                )}
              </div>

              <a href="#media" style={styles.link}>MEDIA CENTER</a>
              <a href="#csr" style={styles.link}>CSR</a>
              <Link to="/contact" style={styles.link}>CONTACT US</Link>
              <span style={styles.searchIcon}>🔍</span>
            </nav>
          )}

          {isMobile && menuOpen && (
            <div style={styles.mobileNav}>
              <Link to="/about/our-team" style={styles.mobileLink}>ABOUT US</Link>
              <Link to="/about/mission" style={styles.mobileLink}>MISSION</Link>
              <a href="#llc" style={styles.mobileLink}>TECHNOFLOW LLC</a>
              <a href="#em" style={styles.mobileLink}>TECHNOFLOW EM</a>
              <a href="#media" style={styles.mobileLink}>MEDIA CENTER</a>
              <a href="#csr" style={styles.mobileLink}>CSR</a>
              <Link to="/contact" style={styles.mobileLink}>CONTACT US</Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    width: '100%',
    backgroundColor: '#fff',
    position: 'sticky',
    top: 0,
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    zIndex: 999,
  },
  container: {
    maxWidth: '1500px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '90px',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  logoImage: {
    height: '85px',
    objectFit: 'contain',
    marginTop: '10px',
  },
  hamburger: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    position: 'relative',
  },
  navItemWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 500,
    fontSize: '17px',
    cursor: 'pointer',
  },
  dropdown: {
    position: 'absolute',
    top: '35px',
    left: 0,
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 999,
  },
  dropdownItem: {
    padding: '10px 20px',
    textDecoration: 'none',
    color: '#000',
    whiteSpace: 'nowrap',
    fontSize: '15px',
  },
  searchIcon: {
    fontSize: '18px',
    cursor: 'pointer',
  },
  mobileNav: {
    position: 'absolute',
    top: '90px',
    right: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    zIndex: 998,
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  mobileLink: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 500,
    fontSize: '16px',
  },
};

export default Header;
