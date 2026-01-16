import React from 'react';

const Comparison = () => {
  const data = [
    { feature: "Project Timeline", aigency: "2-4 weeks", generic: "6-12 weeks", freelance: "8-16 weeks" },
    { feature: "Conversion Optimization", aigency: "Included", generic: "Extra Cost", freelance: "Not Available" },
    { feature: "Design Quality", aigency: "Premium", generic: "Standard", freelance: "Basic" },
    { feature: "Technical Support", aigency: "24/7", generic: "Business Hours", freelance: "Limited" },
    { feature: "SEO Optimization", aigency: "Included", generic: "Basic", freelance: "Not Included" },
    { feature: "Mobile Responsive", aigency: "Perfect", generic: "Good", freelance: "Basic" },
    { feature: "Senior Talent", aigency: "Expert Level", generic: "Mid Level", freelance: "Junior Level" },
  ];

  return (
    <section className="comparison section-padding" id="comparison">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">What makes us different?</h2>
          <p className="section-subtitle">See how we stack up against the competition</p>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="feature-col">Features</th>
                <th className="aigency-col">
                  AIGENCY
                  <span className="badge">Recommended</span>
                </th>
                <th>Generic Agency</th>
                <th>Freelancer</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="feature-name">{row.feature}</td>
                  <td className="aigency-cell">{row.aigency}</td>
                  <td className="muted">{row.generic}</td>
                  <td className="muted">{row.freelance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .mb-5 { margin-bottom: 3rem; }

        .table-container {
          overflow-x: auto;
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
        }

        .table-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 800px;
        }

        th {
          text-align: left;
          padding: 1.5rem;
          color: var(--text-secondary);
          font-family: var(--font-secondary);
          font-weight: 500;
          border-bottom: 1px solid var(--border-color);
        }

        .aigency-col {
          color: var(--accent-color);
          font-weight: 700;
          font-size: 1.25rem;
          position: relative;
        }

        .badge {
          display: block;
          font-size: 0.75rem;
          background: var(--accent-color);
          color: #000;
          padding: 2px 8px;
          border-radius: 4px;
          width: fit-content;
          margin-top: 5px;
          text-transform: uppercase;
          font-weight: 700;
        }

        td {
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          color: #fff;
        }

        tr:last-child td {
          border-bottom: none;
        }

        .feature-name {
          font-weight: 500;
          color: #fff;
        }

        .aigency-cell {
          color: #fff;
          font-weight: 600;
          text-shadow: 0 0 10px rgba(203, 243, 130, 0.2);
          position: relative;
        }

        /* Highlight column background effect */
        td.aigency-cell::after, th.aigency-col::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(203, 243, 130, 0.03);
          z-index: -1;
        }
        
        th.aigency-col::after {
            border-radius: 12px 12px 0 0;
        }
        tr:last-child td.aigency-cell::after {
            border-radius: 0 0 12px 12px;
        }

        .muted {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .table-container {
            padding: 1rem;
          }
          th, td {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Comparison;
