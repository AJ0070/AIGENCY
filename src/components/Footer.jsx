import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="footer">
      <motion.div
        className="container footer-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="footer-left" variants={item}>
          <h3 className="logo">AIGENCY</h3>
          <p>© 2026 AIGENCY. All rights reserved.</p>
        </motion.div>
        <div className="footer-links">
          <motion.div className="link-col" variants={item}>
            <h4>Services</h4>
            <a href="#">Web Design</a>
            <a href="#">Development</a>
            <a href="#">SEO</a>
          </motion.div>
          <motion.div className="link-col" variants={item}>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Career</a>
            <a href="#">Contact</a>
          </motion.div>
          <motion.div className="link-col" variants={item}>
            <h4>Social</h4>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        .footer {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 4rem 0 2rem;
          background: #020202;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 3rem;
        }

        .footer-left p {
          margin-top: 1rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 4rem;
        }

        .link-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .link-col h4 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .link-col a {
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .link-col a:hover {
          color: #fff;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
          }
          
          .footer-links {
            flex-wrap: wrap;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
