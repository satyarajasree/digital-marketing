import React, { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import sand from "./anime/sandy.json";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Chatbot from "./components/Chatbot";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import JobApplication from "./pages/JobApplication";
import Seo from "./pages/Seo";
import ITHomePage from "./pages/ITHomePage";
import DigitalMarketing from "./pages/DigitalMarketing";
import WebDevelopment from "./services/it/WebDevelopment";
import MobileAppDevelopment from "./services/it/MobileAppDevelopment";
import CloudSolutions from "./services/it/CloudSolutions";
import Cybersecurity from "./services/it/Cybersecurity";
import ITInfrastructure from "./services/it/ITInfrastructure";
import DatabaseManagement from "./services/it/DatabaseManagement";
import SEOServices from "./services/digitalMarketing/SEOServices";
import SocialMediaMarketingService from "./services/digitalMarketing/SocialMediaMarketingService";
import ContentCreationService from "./services/digitalMarketing/ContentCreationService";
import PPCAdvertisingService from "./services/digitalMarketing/PPCAdvertisingService";
import AnalyticsReportingService from "./services/digitalMarketing/AnalyticsReportingService";
import EmailMarketingService from "./services/digitalMarketing/EmailMarketingService";
import HealthcareIndustry from "./industries/HealthcareIndustry";
import EducationIndustry from "./industries/EducationIndustry";
import ManufacturingIndustry from "./industries/ManufacturingIndustry";
import FMCGIndustry from "./industries/FMCGIndustry";
import FoodBeveragesIndustry from "./industries/FoodBeveragesIndustry";
import HospitalityIndustry from "./industries/HospitalityIndustry";

const ScrollToTopWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};


const App = () => {
  const [loading, setLoading] = useState(true);

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
              style={{ width: "100%", height: "100%" }}
              rendererSettings={{
                preserveAspectRatio: "xMidYMid slice",
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
              Amplinova
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
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: dot * 0.2,
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
      <ScrollToTopWrapper>
        <Routes>
          <Route path="/*" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          <Route path="/apply/:id" element={<JobApplication />} />

          <Route path="/it" element={<ITHomePage />} />
          <Route path="/marketing" element={<DigitalMarketing />} />

          <Route
            path="/services/digital-marketing/social-media"
            element={<SocialMediaMarketingService />}
          />

          <Route
            path="/services/digital-marketing/content"
            element={<ContentCreationService />}
          />

          <Route
            path="/services/digital-marketing/ppc"
            element={<PPCAdvertisingService />}
          />
          <Route
            path="/services/digital-marketing/email"
            element={<EmailMarketingService />}
          />

          <Route
            path="/services/digital-marketing/analytics"
            element={<AnalyticsReportingService />}
          />

          <Route
            path="/services/it/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/services/it/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route
            path="/services/it/cloud-solutions"
            element={<CloudSolutions />}
          />
          <Route
            path="/services/it/cybersecurity"
            element={<Cybersecurity />}
          />
          <Route
            path="/services/it/infrastructure"
            element={<ITInfrastructure />}
          />
          <Route
            path="/services/it/database"
            element={<DatabaseManagement />}
          />

          <Route
            path="/services/digital-marketing/seo"
            element={<SEOServices />}
          />

          {/* Alternative Routes for Industries */}
          
          <Route
            path="industries/service/food-beverages"
            element={<FoodBeveragesIndustry />}
          />
          <Route
            path="industries/service/hospitality"
            element={<HospitalityIndustry />}
          />
          <Route
            path="industries/service/tours-travels"
            element={<ToursTravelsIndustry />}
          />
          <Route
            path="industries/service/real-estate"
            element={<RealEstateIndustry />}
          />



          <Route
            path="/industries/product/health-care"
            element={<HealthcareIndustry />}
          />
          <Route
            path="/industries/product/education"
            element={<EducationIndustry />}
          />
          <Route
            path="/industries/product/manufacturing"
            element={<ManufacturingIndustry />}
          />
          <Route path="/industries/product/fmcg" element={<FMCGIndustry />} />
        </Routes>
        </ScrollToTopWrapper>
      </BrowserRouter>
      <Chatbot />
    </>
  );
};

export default App;
