import React from 'react';
import { m } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <m.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Launch <br />
            Your Site. <br />
            <m.span
              className="highlight"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Now.
            </m.span>
          </m.h1>
          <m.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stop waiting for slow agencies. Get your high-converting website delivered fast.
          </m.p>
          <m.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary">Start Your Project</a>
            <a href="#work" className="btn btn-outline">View Portfolio</a>
          </m.div>
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 180px;
          padding-bottom: 80px;
          overflow: hidden;
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }

        .hero-container {
          display: flex;
          justify-content: center;
          text-align: center;
          width: 100%;
        }

        .hero-content {
          max-width: 900px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-title {
          font-size: 6rem;
          line-height: 0.95;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
        }

        .hero-title .highlight {
          color: #fff;
          position: relative;
          display: inline-block;
        }
        
        .hero-title .highlight::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 0;
          width: 100%;
          height: 10px;
          background: var(--accent-color);
          z-index: -1;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 3rem;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
          }

          .hero-subtitle {
             font-size: 1.2rem;
          }
          
          .hero-actions {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }
           
          .btn {
             width: 100%;
           }
        }
      `}</style>
    </section>
  );
};

export default Hero;
