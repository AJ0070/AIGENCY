import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <m.nav
      className="toolbar-wrapper"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
    >
      <div className="toolbar">
        <div className="logo-container">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22H22L12 2Z" fill="#fff" />
          </svg>
        </div>

        <div className="nav-links">
          <a href="#work">Our Work</a>
          <a href="#comparison">Comparison</a>
          <a href="#faq">FAQs</a>
          <a href="#">Careers</a>
        </div>

        <m.a
          href="https://calendly.com/jashambaliya1/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Call
        </m.a>
      </div>

      <style>{`
        .toolbar-wrapper {
          position: fixed;
          top: 2rem;
          left: 0;
          width: 100%;
          z-index: 1000;
          display: flex;
          justify-content: center;
          padding: 0 1rem;
        }

        .toolbar {
          background: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          padding: 0.5rem 0.5rem 0.5rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          max-width: 600px;
          width: 100%;
          justify-content: space-between;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .logo-container svg {
          display: block;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
        }

        .nav-links a {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #fff;
        }

        .btn-white {
          background: #fff;
          color: #000;
          padding: 0.6rem 1.25rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-white:hover {
          background: #e5e5e5;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .toolbar {
            gap: 1rem;
            padding: 0.5rem 0.5rem 0.5rem 1rem;
          }
          
          .nav-links {
            display: none;
          }

          .toolbar-wrapper {
            top: 1rem;
          }
          
          .logo-container {
             margin-right: auto;
          }
        }
      `}</style>
    </m.nav>
  );
};

export default Navbar;
