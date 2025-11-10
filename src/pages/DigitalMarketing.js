import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Process from "../components/Process";
import Industries from "../components/Industries";
import FAQ from "../components/FAQ";
import OurClients from "../components/OurClients";
import WhyChooseUs from "../components/WhyChooseUs";
import OurWork from "./OurWork";
import DigitalMarketingServices from "../components/DigitalMarketingServices";

const DigitalMarketing = () => {
  return (
    <div>
      <Navbar />
      <Hero mode="marketing" />
      
      <DigitalMarketingServices />
      <Process mode="digital-marketing" />
      <Industries mode="digital-marketing" />
      <WhyChooseUs mode="digital-marketing" />
      <OurClients mode="digital-marketing" />
      <OurWork mode="digital-marketing" />
      <FAQ mode="digital-marketing"/>
      <Contact
        mode="marketing"
        title="Boost Your Marketing Results"
        subtitle="Ready to grow your business? Share your goals and we'll create a winning strategy."
      />
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
