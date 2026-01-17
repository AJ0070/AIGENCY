import React, { Suspense, lazy } from 'react';
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

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
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
  );
}

export default App;
