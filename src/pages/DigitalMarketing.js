import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Services from "../components/Services";

const DigitalMarketing = () => {
  return (
    <div>
      <Navbar />
      <Hero mode="marketing" />
      <Contact
        mode="marketing"
        title="Boost Your Marketing Results"
        subtitle="Ready to grow your business? Share your goals and we'll create a winning strategy."
      />
      <Services mode="marketing" />
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
