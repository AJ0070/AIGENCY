import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

import Reviews from './components/Reviews';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ValueProp />
      <Features />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
