import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';

const Geometries = ({ type, color }) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * (hovered ? 2 : 0.5);
    }
  });

  const materialProps = {
    color: hovered ? '#ffffff' : color,
    wireframe: true,
    transparent: true,
    opacity: 0.8,
  };

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 2.2 : 2}
    >
      {type === 'cube' && <boxGeometry args={[1, 1, 1]} />}
      {type === 'sphere' && <icosahedronGeometry args={[0.8, 1]} />}
      {type === 'cone' && <coneGeometry args={[0.7, 1.4, 4]} />}
      {type === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 32]} />}
      {type === 'octahedron' && <octahedronGeometry args={[0.9]} />}
      {type === 'knot' && <torusKnotGeometry args={[0.5, 0.15, 64, 8]} />}
      {type === 'tetrahedron' && <tetrahedronGeometry args={[1.2]} />}
      {type === 'dodecahedron' && <dodecahedronGeometry args={[0.8]} />}

      <meshStandardMaterial {...materialProps} />
    </mesh>
  );
};

const FeatureIcon = ({ type }) => {
  return (
    <div className="icon-canvas-container">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#CBF382" />
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Geometries type={type} color="#CBF382" />
        </Float>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Conversion-Driven Design",
      desc: "Crafted to turn visitors into loyal customers. Every detail designed for measurable ROI and lasting growth.",
      shape: "knot"
    },
    {
      title: "Lightning-Fast Delivery",
      desc: "Fast turnarounds, flawless quality. So you can move fast, launch sooner, and stay ahead of the competition.",
      shape: "tetrahedron"
    },
    {
      title: "Clear, Honest Pricing",
      desc: "One flat rate, no hidden fees, no surprises. Predictable pricing that makes budgeting effortless.",
      shape: "dodecahedron"
    },
    {
      title: "Strategic Design Thinking",
      desc: "We blend creativity and strategy to solve real business challenges and drive measurable outcomes.",
      shape: "octahedron"
    },
    {
      title: "Post-Launch Support",
      desc: "We stay with you even after launch. Get quick help, updates, and ongoing improvements as your business grows.",
      shape: "torus"
    },
    {
      title: "Top-Tier Creative Team",
      desc: "Work with senior designers trusted by leading brands. Premium quality without inflated agency pricing.",
      shape: "sphere"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="features section-padding" id="benefits">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why AIGENCY?</h2>
          <p className="section-subtitle">The competitive advantage your startup needs.</p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div className="feature-card" key={index} variants={item}>
              <FeatureIcon type={feature.shape} />
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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

        .icon-canvas-container {
          height: 180px;
          background: #000;
          cursor: pointer;
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
