import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="#" className="logo">AIGENCY</a>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
                    <a href="#benefits" onClick={() => setIsOpen(false)}>Benefits</a>
                    <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#reviews" onClick={() => setIsOpen(false)}>Reviews</a>
                    <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
                </div>

                <a href="#contact" className="btn btn-primary nav-cta">Start Project</a>

                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 1.25rem 0;
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-secondary);
          font-weight: 700;
          font-size: 1.5rem;
          color: #fff;
          letter-spacing: -0.05em;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .nav-links a {
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #fff;
        }

        .nav-cta {
          padding: 0.6rem 1.2rem;
          font-size: 0.9rem;
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
        }

        .mobile-toggle span {
          width: 24px;
          height: 2px;
          background: #fff;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #050505;
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            z-index: -1;
          }

          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }

          .nav-cta {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
