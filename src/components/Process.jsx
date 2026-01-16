import React from 'react';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery",
            desc: "We start with a quick conversation to learn about your business, goals, and audience. Together, we decide what needs to be built, how it should look, and when it will be ready."
        },
        {
            number: "02",
            title: "Design",
            desc: "We create simple first drafts and quickly turn them into polished designs. You’ll see progress as we go and can give feedback anytime. The focus: looking great and working for your audience."
        },
        {
            number: "03",
            title: "Development",
            desc: "We turn the approved design into a fast, mobile-friendly website that’s easy to use. Everything comes with built-in SEO, analytics, and performance optimization."
        },
        {
            number: "04",
            title: "Launch",
            desc: "We set up hosting, connect your domain, and make the site live. After launch, we track performance and make any fine-tuning needed so you get the best results."
        }
    ];

    return (
        <section className="process section-padding" id="process">
            <div className="container">
                <div className="process-header">
                    <div className="header-content">
                        <span className="subtitle-sm">How it works</span>
                        <h2 className="section-title">A clean, 4-step process</h2>
                        <p className="section-desc">
                            We make it easy to get you a stunning, high-performing website. Fast, clear, and built to win customers.
                        </p>

                    </div>
                </div>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div className="step-card" key={index}>
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .process-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 5rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .header-content {
          max-width: 600px;
        }

        .subtitle-sm {
          color: var(--accent-color);
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 1rem;
        }

        .mt-4 { margin-top: 2rem; }
        
        .section-desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4rem;
          position: relative;
        }

        /* Connecting line for visual flow */
        .process-steps::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1px;
          height: 80%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent);
        }

        .step-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .step-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }

        .step-number {
          font-size: 3rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.1);
          font-family: var(--font-secondary);
          margin-bottom: 1.5rem;
          line-height: 1;
        }

        .step-card:hover .step-number {
          color: var(--accent-color);
          opacity: 0.5;
        }

        .step-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .step-content p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 968px) {
          .process-steps {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .process-steps::before {
            display: none;
          }
        }
      `}</style>
        </section>
    );
};

export default Process;
