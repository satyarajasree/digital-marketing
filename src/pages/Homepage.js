import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import WhoWeAre from './WhoWeAre';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <WhoWeAre/>
      <Services />
      <Industries />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Homepage;