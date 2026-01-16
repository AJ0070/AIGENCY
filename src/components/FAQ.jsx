import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <h3>{question}</h3>
                <span className="toggle">{isOpen ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
                <p>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "How fast can you build my site?",
            answer: "We typically launch standard agency sites within 2-3 weeks. Complex web apps may take 4-8 weeks depending on requirements. Speed is our core metric."
        },
        {
            question: "What technology stack do you use?",
            answer: "We specialize in modern React ecosystems (Next.js, Vite), ensuring your site is blazing fast, SEO-ready, and scalable. No bloated legacy builders."
        },
        {
            question: "Do you offer post-launch support?",
            answer: "Yes. We don't disappear after launch. We offer monthly maintenance packages to keep your site updated, secure, and converting."
        },
        {
            question: "How does your pricing work?",
            answer: "We offer startup-friendly flat rates for standard builds, and custom quotes for complex projects. Transparency is key—no hidden fees."
        }
    ];

    return (
        <section className="faq section-padding" id="faq">
            <div className="container">
                <div className="faq-container">
                    <h2 className="section-title text-center">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} {...faq} />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          border-bottom: 1px solid var(--border-color);
          cursor: pointer;
          transition: background 0.3s;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
        }

        .faq-question h3 {
          font-size: 1.2rem;
          font-weight: 500;
        }

        .toggle {
          font-size: 1.5rem;
          color: var(--accent-color);
          font-weight: 300;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          color: var(--text-secondary);
        }

        .faq-item.open .faq-answer {
          max-height: 200px;
          padding-bottom: 1.5rem;
        }

        .faq-item.open .faq-question h3 {
          color: var(--accent-color);
        }
      `}</style>
        </section>
    );
};

export default FAQ;
