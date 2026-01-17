import React from 'react';
import { m } from 'framer-motion';

const ValueProp = () => {
  return (
    <section className="value-prop section-padding">
      <div className="container">
        <m.div
          className="value-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="title-large">
            Expert Talent. <br />
            <span className="text-gradient">Startup Rates.</span>
          </h2>
          <p className="subtitle">
            High-quality website builds by experienced developers. Maximize conversions without overspending.
          </p>
        </m.div>
      </div>

      <style>{`
        .value-prop {
          background: linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(203, 243, 130, 0.03) 50%, rgba(5,5,5,0) 100%);
          text-align: center;
        }

        .value-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .title-large {
          font-size: 4rem;
          line-height: 1;
          margin-bottom: 2rem;
          color: #fff;
        }

        .text-gradient {
          background: linear-gradient(90deg, #fff, var(--text-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .title-large {
            font-size: 2.5rem;
          }
          
          .subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ValueProp;
