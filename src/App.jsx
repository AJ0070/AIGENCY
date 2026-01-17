import React, { Suspense, lazy, useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
// import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Comparison from './components/Comparison';
import Process from './components/Process';
import ServicesList from './components/ServicesList';
// import ThreeBackground from './components/ThreeBackground';

const Features = lazy(() => import('./components/Features'));
const ThreeBackground = lazy(() => import('./components/ThreeBackground'));

const DelayedBackground = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Defer loading of heavy 3D background until after LCP
    const timer = setTimeout(() => setShouldLoad(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) return <div className="three-bg-placeholder" />;

  return (
    <Suspense fallback={null}>
      <ThreeBackground />
    </Suspense>
  );
};

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="App">
        <DelayedBackground />
        <Navbar />
        <Hero />
        <ServicesList />
        <ValueProp />
        <Process />
        <Suspense fallback={<div style={{ height: '600px' }} />}>
          <Features />
        </Suspense>
        <Comparison />
        <Reviews />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default App;
