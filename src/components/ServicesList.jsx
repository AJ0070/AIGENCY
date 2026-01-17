import React from 'react';
import { m } from 'framer-motion';

const ServicesList = () => {
  const services = [
    "Development",
    "Logos",
    "Copywriting",
    "Landing Pages",
    "UI UX Design",
    "Web Design",
    "Product Design",
    "CMS Setup",
    "Maintenance",
    "Motion Graphics",
    "Hosting",
    "Site Migration",
    "Deployment"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className="services-list section-padding">
      <div className="container services-container">
        <m.div
          className="services-header"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle-sm">All your marketing needs handled</span>
          <h2 className="title-large">
            In record <br />
            <span className="text-white">time.</span>
          </h2>
        </m.div>

        <m.div
          className="services-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <m.div className="service-item" key={index} variants={item}>
              <span className="service-name">{service}</span>
              <m.div
                className="icon-box"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#000" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </m.div>
            </m.div>
          ))}
        </m.div>
      </div>

      <style>{`
        .services-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .services-header {
          position: sticky;
          top: 100px;
        }

        .subtitle-sm {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          display: block;
        }

        .title-large {
          font-size: 4rem;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #fff;
        }

        .services-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .service-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .service-item:hover {
          padding-left: 1rem;
          border-color: var(--accent-color);
        }

        .service-name {
          font-size: 1.5rem;
          color: var(--text-secondary);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .service-item:hover .service-name {
          color: #fff;
        }

        .icon-box {
          width: 32px;
          height: 32px;
          background: var(--accent-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .service-item:hover .icon-box {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 968px) {
          .services-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .services-header {
            position: relative;
            top: 0;
            text-align: center;
          }
          
          .title-large {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesList;
