import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Services from "../components/Services";

const ITHomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero mode="it" />
      <Contact
        mode="it"
        title="Start Your IT Project"
        subtitle="Let's discuss your technology needs and build something amazing together."
      />
      <Services mode="it" />
      <Footer />
    </div>
  );
};

export default ITHomePage;
