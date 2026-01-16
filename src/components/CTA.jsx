import React from 'react';

const CTA = () => {
    return (
        <section className="cta section-padding" id="contact">
            <div className="container">
                <div className="cta-box">
                    <h2>
                        Your website is your <span className="highlight">24/7 salesman.</span>
                    </h2>
                    <p>
                        Don't just settle for an ordinary one. Go beyond with AIGENCY.
                    </p>
                    <div className="input-group">
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn btn-primary">Schedule Meeting</button>
                    </div>
                </div>
            </div>

            <style>{`
        .cta-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 4rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% -20%, rgba(203, 243, 130, 0.1), transparent 50%);
          pointer-events: none;
        }

        .cta-box h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .cta-box p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }

        .input-group {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
          gap: 0.5rem;
        }

        input {
          flex: 1;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 1rem;
          border-radius: 9999px;
          color: #fff;
          outline: none;
        }

        input:focus {
          border-color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .cta-box h2 {
            font-size: 2rem;
          }
          
          .input-group {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
          }
        }
      `}</style>
        </section>
    );
};

export default CTA;
