import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white antialiased">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
