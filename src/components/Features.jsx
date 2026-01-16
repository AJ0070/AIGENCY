import React from 'react';
import featureSpeed from '../assets/feature-speed.png';
import featureConversion from '../assets/feature-conversion.png';
import featureStrategy from '../assets/feature-strategy.png';

const Features = () => {
    const features = [
        {
            title: "Strategy",
            desc: "We don't just build. We architect digital experiences that align with your business goals.",
            img: featureStrategy
        },
        {
            title: "Speed",
            desc: "Slow sites cost you money. We guarantee lightning-fast load times and SEO optimization.",
            img: featureSpeed
        },
        {
            title: "Conversion",
            desc: "Your website is your 24/7 salesman. We design not just for looks, but for results.",
            img: featureConversion
        }
    ];

    return (
        <section className="features section-padding" id="benefits">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">The Missing Features</h2>
                    <p className="section-subtitle">Why most agency sites fail to deliver.</p>
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
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color);
        }

        .feature-image {
          height: 200px;
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
        }

        .feature-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .feature-content p {
          color: var(--text-secondary);
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
