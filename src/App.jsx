import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Comparison from './components/Comparison';
import Process from './components/Process';
import ServicesList from './components/ServicesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ServicesList />
      <ValueProp />
      <Process />
      <Features />
      <Comparison />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
