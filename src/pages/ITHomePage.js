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
import ITServices from "../components/ITServices";

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
      <ITServices />
      <Process mode="it-services" />
      <Industries mode="it-services" />
      <WhyChooseUs mode="it-services" />
      <OurClients mode="it-services" />
      <OurWork mode="it-services" />
      <FAQ mode="it-services"/>
      <Footer />
    </div>
  );
};

export default ITHomePage;
