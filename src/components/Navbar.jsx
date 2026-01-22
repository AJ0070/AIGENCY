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
          <svg className="logo-mark" width="32" height="32" viewBox="0 0 64 64" aria-hidden="true">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CBF382" />
                <stop offset="100%" stopColor="#7FE19E" />
              </linearGradient>
            </defs>
            <rect x="6" y="6" width="52" height="52" rx="14" fill="url(#logoGradient)" />
            <path
              d="M20 46L32 18L44 46H36.8L32 34.5L27.2 46H20Z"
              fill="#050505"
            />
            <path d="M22 44H42" stroke="#050505" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="logo-wordmark">AIGENCY</span>
        </div>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#benefits">Benefits</a>
          <a href="#process">Process</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQs</a>
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
          background: rgba(5, 5, 5, 0.65);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          max-width: 960px;
          width: 100%;
          justify-content: space-between;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .logo-container {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .logo-mark {
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0));
        }

        .logo-wordmark {
          font-size: 0.95rem;
        }

        .nav-links {
          display: flex;
          gap: 1.25rem;
        }

        .nav-links a {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          transition: color 0.3s, opacity 0.3s;
        }

        .nav-links a:hover {
          color: #fff;
          opacity: 1;
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
            padding: 0.6rem 0.75rem;
          }
          
          .nav-links {
            display: none;
          }

          .toolbar-wrapper {
            top: 1rem;
          }
          
          .logo-container {
             margin-right: auto;
             gap: 0.4rem;
          }

           .logo-wordmark {
             display: none;
           }
        }
      `}</style>
    </m.nav>
  );
};

export default Navbar;
