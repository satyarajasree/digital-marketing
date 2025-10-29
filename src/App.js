import React, { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import sand from './anime/sandy.json'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PortfolioPage from './pages/PortfolioPage';
import Chatbot from './components/Chatbot';
import Careers from './pages/Careers';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import StrategyConsulting from './services/StrategyConsulting';
import JobApplication from './pages/JobApplication';
import SocialMediaMarketing from './services/SocialMediaMarketing';
import GraphicsDesigning from './services/GraphicsDesigning';
import Seo from'./pages/Seo';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simple loading animation data (you can replace this with your own Lottie JSON)
  const loadingAnimation = {
    v: "5.5.2",
    fr: 60,
    ip: 0,
    op: 180,
    w: 400,
    h: 400,
    nm: "Loading Animation",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Loading Circle",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 1, k: [{ t: 0, s: [0], h: 0 }, { t: 180, s: [360], h: 0 }], ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                p: { a: 0, k: [0, 0], ix: 3 },
                s: { a: 0, k: [80, 80], ix: 4 }
              },
              {
                ty: "st",
                c: { a: 0, k: [1, 0.5, 0.2, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                w: { a: 0, k: 8, ix: 6 }
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 }
              }
            ]
          }
        ]
      }
    ]
  };

  // Alternative: Use a Lottie URL from LottieFiles
  const LOTTIE_URL = "https://assets1.lottiefiles.com/packages/lf20_ubngqe2x.json";

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          {/* Lottie Animation */}
          <div className="w-64 h-64 mx-auto mb-8">
            <Lottie
              animationData={sand}
              // Alternatively, use this for URL:
              // src={LOTTIE_URL}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice'
              }}
            />
          </div>
          
          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white"
          >
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              DigitalPro
            </h2>
            <p className="text-gray-400 text-lg">Get ready...</p>
            
            {/* Loading Dots Animation */}
            <div className="flex justify-center space-x-1 mt-4">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-2 h-2 bg-orange-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: dot * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl opacity-10"></div>
        </div>
      </div>
    );
  }

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/blog' element={<Blogs />} />
      <Route path='/seo' element={<Seo />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />

      <Route path="/services/strategy-consulting" element={<StrategyConsulting />} />
      <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
      <Route path='/services/graphics-designing' element={<GraphicsDesigning/>} />



      // In your App.js or routing setup
      <Route path="/apply/:id" element={<JobApplication />} />
    </Routes>
    </BrowserRouter>
    <Chatbot />
    </>
  );
};

export default App;