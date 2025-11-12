import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import WhoWeAre from './WhoWeAre';
import OurClients from '../components/OurClients';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import DigitalMarketingWork from '../components/DigitalMarketingWork';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero  mode='combined'/>
      <WhoWeAre/>
      <Services />
   
      <OurClients mode='home' />
      <DigitalMarketingWork />
      <Testimonials />
      <FAQ mode='home'/>
      <Contact mode='combined' />
      <Footer />
    </div>
  );
};

export default Homepage;