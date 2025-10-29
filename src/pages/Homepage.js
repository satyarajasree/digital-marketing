import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import WhoWeAre from './WhoWeAre';
import ContentCreation from '../components/ContentCreation';
import OurClients from '../components/OurClients';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero  mode='combined'/>
      <Contact mode='combined' />
      <Services />
      <WhoWeAre/>
      <ContentCreation />
      <OurClients />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Homepage;