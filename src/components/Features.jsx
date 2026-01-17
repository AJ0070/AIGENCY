import React, { Suspense, lazy, useState, useEffect } from 'react';
import { m } from 'framer-motion';

// Lazy load the heavy 3D component
const FeatureIcon3D = lazy(() => import('./FeatureIcon3D'));

const FeatureIcon = ({ type }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial width
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    // Add listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    // Mobile Fallback: lightweight CSS placeholder
    return (
      <div className="icon-placeholder">
        <div className={`shape-icon shape-${type}`}></div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="icon-placeholder" />}>
      <FeatureIcon3D type={type} />
    </Suspense>
  );
};

const Features = () => {
  const features = [
    {
      title: "Conversion-Driven Design",
      desc: "Crafted to turn visitors into loyal customers. Every detail designed for measurable ROI and lasting growth.",
      shape: "knot"
    },
    {
      title: "Lightning-Fast Delivery",
      desc: "Fast turnarounds, flawless quality. So you can move fast, launch sooner, and stay ahead of the competition.",
      shape: "tetrahedron"
    },
    {
      title: "Clear, Honest Pricing",
      desc: "One flat rate, no hidden fees, no surprises. Predictable pricing that makes budgeting effortless.",
      shape: "dodecahedron"
    },
    {
      title: "Strategic Design Thinking",
      desc: "We blend creativity and strategy to solve real business challenges and drive measurable outcomes.",
      shape: "octahedron"
    },
    {
      title: "Post-Launch Support",
      desc: "We stay with you even after launch. Get quick help, updates, and ongoing improvements as your business grows.",
      shape: "torus"
    },
    {
      title: "Top-Tier Creative Team",
      desc: "Work with senior designers trusted by leading brands. Premium quality without inflated agency pricing.",
      shape: "sphere"
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="features section-padding" id="benefits">
      <div className="container">
        <m.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why AIGENCY?</h2>
          <p className="section-subtitle">The competitive advantage your startup needs.</p>
        </m.div>

        <m.div
          className="features-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <m.div className="feature-card" key={index} variants={item}>
              <FeatureIcon type={feature.shape} />
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>

      <style>{`
        .section-header {
          margin-bottom: 4rem;
          text-align: center;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.2rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-card {
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color);
        }

        .icon-canvas-container {
          height: 180px;
          background: #000;
          cursor: pointer;
        }

        .icon-placeholder {
          height: 180px;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
        }

        .shape-icon {
          width: 50px;
          height: 50px;
          border: 2px solid var(--accent-color);
          transform: rotate(45deg);
        }

        .shape-sphere { border-radius: 50%; }
        .shape-cube { border-radius: 0; }
        .shape-tetrahedron { border-radius: 0; transform: rotate(0deg); clip-path: polygon(50% 0%, 0% 100%, 100% 100%); border: none; background: transparent; border-bottom: 2px solid var(--accent-color); }


        .feature-content {
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .feature-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #fff;
          font-weight: 600;
        }

        .feature-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 968px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
