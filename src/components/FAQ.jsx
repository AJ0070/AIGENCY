import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <m.div
      className={`faq-item ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="faq-question">
        <h3>{question}</h3>
        <span className="toggle">{isOpen ? '−' : '+'}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <m.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Why not just hire a full-time developer?",
      answer: "Hiring in-house is costly, experienced designers can exceed $100k and developers $120k annually, not including the benefits. We deliver senior-level expertise at a fraction of the cost."
    },
    {
      question: "How fast can you deliver my project?",
      answer: "Timelines depend on scope, but most projects wrap up within 2-6 weeks. After our initial discussion, you'll receive a clear timeline with milestones."
    },
    {
      question: "What if I'm not satisfied with the outcome?",
      answer: "It's rare, but if you're not fully happy, we include unlimited revisions within the project scope. We'll refine until the final product matches your vision."
    },
    {
      question: "How will we talk throughout the project?",
      answer: "We typically communicate through Discord, Whatsapp, Telegram or Slack (or your preferred platform) and schedule regular check-ins. You'll always know the progress and have direct access to us when needed."
    },
    {
      question: "Do you provide support after the launch?",
      answer: "Absolutely. We offer end-to-end support and maintenance plans so your website stays secure, optimized, and up-to-date long after launch."
    }
  ];
  return (
    <section className="faq section-padding" id="faq">
      <div className="container">
        <div className="faq-container">
          <m.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </m.h2>
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
          overflow: hidden;
          color: var(--text-secondary);
        }
        
        .faq-answer p {
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
