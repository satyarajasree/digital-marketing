import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  FaShoppingCart,
  FaUsers,
  FaHeartbeat,
  FaCloud,
  FaSearch,
  
} from "react-icons/fa";

// Service Case Study Component
const ServiceCaseStudy = ({ client, challenge, solution, results, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-orange-500 rounded-xl mr-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{client}</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-orange-400 font-semibold mb-2">The Challenge</h4>
          <p className="text-gray-300 text-sm">{challenge}</p>
        </div>
        
        <div>
          <h4 className="text-orange-400 font-semibold mb-2">Our Solution</h4>
          <p className="text-gray-300 text-sm">{solution}</p>
        </div>
        
        <div>
          <h4 className="text-orange-400 font-semibold mb-2">Results Achieved</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            {results.map((result, index) => (
              <li key={index}>• {result}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

// Services Page Component
const ServicesPage = () => {
  const { category, service } = useParams();
  
  // IT Services Case Studies
  const itServicesData = {
    "web-development": [
      {
        client: "E-Commerce Retailer",
        challenge: "Slow website loading times leading to 40% cart abandonment rate",
        solution: "Developed a custom React-based PWA with optimized images and CDN integration",
        results: [
          "Page load time reduced from 8s to 1.2s",
          "Cart abandonment decreased by 65%",
          "Mobile conversions increased by 300%"
        ],
        icon: FaShoppingCart
      },
      {
        client: "SaaS Platform",
        challenge: "Complex user interface causing low user engagement",
        solution: "Redesigned UX/UI with intuitive navigation and interactive elements",
        results: [
          "User engagement increased by 45%",
          "Customer satisfaction score improved to 4.8/5",
          "Reduced support tickets by 60%"
        ],
        icon: FaUsers
      }
    ],
    "mobile-app-development": [
      {
        client: "Fitness Startup",
        challenge: "Need for cross-platform app with native performance",
        solution: "Built using React Native with custom native modules for optimal performance",
        results: [
          "95% code sharing between iOS and Android",
          "App store rating: 4.9 stars",
          "100K+ downloads in first month"
        ],
        icon: FaHeartbeat
      }
    ],
    "cloud-solutions": [
      {
        client: "Financial Institution",
        challenge: "High infrastructure costs and scalability issues",
        solution: "Migrated to AWS with auto-scaling and serverless architecture",
        results: [
          "Infrastructure costs reduced by 40%",
          "99.9% uptime achieved",
          "Scaled to handle 10x traffic during peak periods"
        ],
        icon: FaCloud
      }
    ]
  };

  // Digital Marketing Case Studies
  const digitalMarketingData = {
    "seo": [
      {
        client: "Local Service Business",
        challenge: "Not ranking for key local search terms",
        solution: "Comprehensive local SEO strategy with GMB optimization and content creation",
        results: [
          "First page rankings for 15+ key terms",
          "Organic traffic increased by 250%",
          "Lead generation up by 180%"
        ],
        icon: FaSearch
      }
    ],
    "social-media": [
      {
        client: "Fashion Brand",
        challenge: "Low engagement and brand awareness on social media",
        solution: "Strategic content calendar with influencer partnerships and UGC campaigns",
        results: [
          "Engagement rate increased from 1.2% to 4.8%",
          "Follower growth: 50K in 3 months",
          "ROI: 5x on ad spend"
        ],
        icon: FaUsers
      }
    ]
  };

  const getServiceData = () => {
    if (category === "it") {
      return itServicesData[service] || [];
    } else if (category === "digital-marketing") {
      return digitalMarketingData[service] || [];
    }
    return [];
  };

  const serviceTitles = {
    "web-development": "Web Development",
    "mobile-app-development": "Mobile App Development",
    "cloud-solutions": "Cloud Solutions",
    "seo": "SEO Services",
    "social-media": "Social Media Marketing"
  };

  const serviceData = getServiceData();

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {serviceTitles[service] || "Our Services"}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped companies like yours achieve their goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((caseStudy, index) => (
            <ServiceCaseStudy
              key={index}
              {...caseStudy}
            />
          ))}
        </div>

        {serviceData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 text-lg">
              Case studies coming soon for this service...
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;