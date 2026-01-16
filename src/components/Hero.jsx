import React from 'react';
import heroVisual from '../assets/hero-visual.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Launch <br />
                        Your Site. <br />
                        <span className="highlight">Now.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Stop waiting for slow agencies. Get your high-converting website delivered fast.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">Start Your Project</a>
                        <a href="#work" className="btn btn-outline">View Portfolio</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <img src={heroVisual} alt="Abstract technical visualization" />
                    <div className="glow"></div>
                </div>
            </div>

            <style>{`
        .hero {
          padding-top: 180px;
          padding-bottom: 80px;
          overflow: hidden;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 5rem;
          line-height: 0.95;
          margin-bottom: 1.5rem;
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
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 6px;
          background: var(--accent-color);
          z-index: -1;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 480px;
          margin-bottom: 2.5rem;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .hero-visual {
          position: relative;
        }

        .hero-visual img {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
          position: relative;
          z-index: 2;
        }

        .glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
          background: var(--accent-color);
          filter: blur(120px);
          opacity: 0.15;
          z-index: 1;
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-title {
            font-size: 3.5rem;
          }
          
          .hero-visual {
            max-width: 600px;
            margin: 0 auto;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
