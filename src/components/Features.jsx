import React from 'react';
import featureSpeed from '../assets/feature-speed.png';
import featureConversion from '../assets/feature-conversion.png';
import featureStrategy from '../assets/feature-strategy.png';
import featurePricing from '../assets/feature-pricing.png';
import featureSupport from '../assets/feature-support.png';
import featureTeam from '../assets/feature-team.png';

const Features = () => {
  const features = [
    {
      title: "Conversion-Driven Design",
      desc: "Crafted to turn visitors into loyal customers. Every detail designed for measurable ROI and lasting growth.",
      img: featureConversion
    },
    {
      title: "Lightning-Fast Delivery",
      desc: "Fast turnarounds, flawless quality. So you can move fast, launch sooner, and stay ahead of the competition.",
      img: featureSpeed
    },
    {
      title: "Clear, Honest Pricing",
      desc: "One flat rate, no hidden fees, no surprises. Predictable pricing that makes budgeting effortless.",
      img: featurePricing
    },
    {
      title: "Strategic Design Thinking",
      desc: "We blend creativity and strategy to solve real business challenges and drive measurable outcomes.",
      img: featureStrategy
    },
    {
      title: "Post-Launch Support",
      desc: "We stay with you even after launch. Get quick help, updates, and ongoing improvements as your business grows.",
      img: featureSupport
    },
    {
      title: "Top-Tier Creative Team",
      desc: "Work with senior designers trusted by leading brands. Premium quality without inflated agency pricing.",
      img: featureTeam
    }
  ];

  return (
    <section className="features section-padding" id="benefits">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why AIGENCY?</h2>
          <p className="section-subtitle">The competitive advantage your startup needs.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-image">
                <img src={feature.img} alt={feature.title} />
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
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

        .feature-image {
          height: 180px;
          overflow: hidden;
          position: relative;
        }

        .feature-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .feature-card:hover .feature-image img {
          transform: scale(1.05);
        }

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
