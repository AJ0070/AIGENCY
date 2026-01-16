import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ValueProp />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
