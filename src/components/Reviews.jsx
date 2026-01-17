import React from 'react';
import { m } from 'framer-motion';

const Reviews = () => {
  const reviews = [
    {
      text: "AIGENCY transformed our online presence. Our conversion rate tripled in a week. The speed is unmatched.",
      author: "Sarah Jenkins",
      role: "CEO, TechStart",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      text: "Fastest delivery I've ever seen. No bloat, just performance. They understood our developer-first mindset immediately.",
      author: "Marcus Chen",
      role: "Founder, ScaleUp",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
    },
    {
      text: "Finally, an agency that speaks developer and business at the same time. ROI was positive within month one.",
      author: "David Ross",
      role: "CTO, NextGen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="reviews section-padding" id="reviews">
      <div className="container">
        <m.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Founders.
        </m.h2>
        <m.div
          className="reviews-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reviews.map((review, index) => (
            <m.div className="review-card" key={index} variants={item}>
              <div className="stars">★★★★★</div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <img src={review.avatar} alt={review.author} className="avatar" />
                <div>
                  <h4>{review.author}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>

      <style>{`
        .text-center { text-align: center; margin-bottom: 4rem; }
        
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .review-card {
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          padding: 2rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: transform 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color);
        }

        .stars {
          color: var(--accent-color);
          letter-spacing: 2px;
        }

        .review-text {
          font-size: 1.1rem;
          color: #fff;
          font-style: italic;
          flex-grow: 1;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }

        .review-author h4 {
          font-size: 1rem;
          margin-bottom: 2px;
        }

        .review-author span {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        @media (max-width: 968px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews;
