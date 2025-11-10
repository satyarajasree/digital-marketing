import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  FaShoppingCart,
  FaUsers,
  FaHeartbeat,
  FaCity,
  FaGraduationCap,
  FaBuilding,
  
} from "react-icons/fa";

// Industry Case Study Component
const IndustryCaseStudy = ({ company, industry, challenge, approach, outcomes, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-500 rounded-xl mr-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{company}</h3>
          <p className="text-blue-400 text-sm">{industry}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-blue-400 font-semibold mb-2">Business Challenge</h4>
          <p className="text-gray-300 text-sm">{challenge}</p>
        </div>
        
        <div>
          <h4 className="text-blue-400 font-semibold mb-2">Our Approach</h4>
          <p className="text-gray-300 text-sm">{approach}</p>
        </div>
        
        <div>
          <h4 className="text-blue-400 font-semibold mb-2">Business Outcomes</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            {outcomes.map((outcome, index) => (
              <li key={index}>• {outcome}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

// Industries Page Component
const IndustriesPage = () => {
  const { category, industry } = useParams();
  
  // Service Industries Case Studies
  const serviceIndustriesData = {
    "food-beverages": [
      {
        company: "FreshBite Restaurant Chain",
        industry: "Food & Beverage",
        challenge: "Inefficient online ordering system and poor digital presence",
        approach: "Developed integrated ordering platform with real-time inventory and marketing automation",
        outcomes: [
          "Online orders increased by 200%",
          "Average order value up by 35%",
          "Customer retention improved by 50%"
        ],
        icon: FaShoppingCart
      }
    ],
    "hospitality": [
      {
        company: "Luxury Hotel Group",
        industry: "Hospitality",
        challenge: "Low direct bookings and high OTA commission costs",
        approach: "Created direct booking engine with loyalty program and personalized marketing",
        outcomes: [
          "Direct bookings increased by 150%",
          "Reduced OTA commissions by 40%",
          "Guest satisfaction score: 4.7/5"
        ],
        icon: FaUsers
      }
    ],
    "real-estate": [
      {
        company: "Metro Properties",
        industry: "Real Estate",
        challenge: "Slow property sales and limited digital reach",
        approach: "Virtual tour platform with AI-powered property matching and digital campaigns",
        outcomes: [
          "Property views increased by 300%",
          "Sales cycle reduced by 45%",
          "Lead conversion rate: 12%"
        ],
        icon: FaCity
      }
    ]
  };

  // Product Industries Case Studies
  const productIndustriesData = {
    "health-care": [
      {
        company: "MediCare Solutions",
        industry: "Healthcare",
        challenge: "Patient engagement and appointment management inefficiencies",
        approach: "Telemedicine platform with automated reminders and patient portal",
        outcomes: [
          "No-show rates reduced by 70%",
          "Patient satisfaction: 95%",
          "Staff efficiency improved by 40%"
        ],
        icon: FaHeartbeat
      }
    ],
    "education": [
      {
        company: "EduTech Academy",
        industry: "Education",
        challenge: "Low student engagement in online learning platform",
        approach: "Gamified learning experience with progress tracking and interactive content",
        outcomes: [
          "Student completion rates: 85%",
          "Engagement time increased by 3x",
          "Course ratings: 4.8/5"
        ],
        icon: FaGraduationCap
      }
    ],
    "manufacturing": [
      {
        company: "Precision Manufacturing Co.",
        industry: "Manufacturing",
        challenge: "Supply chain visibility and production tracking issues",
        approach: "IoT-enabled tracking system with real-time analytics and predictive maintenance",
        outcomes: [
          "Production efficiency up by 25%",
          "Downtime reduced by 60%",
          "Supply chain costs down by 30%"
        ],
        icon: FaBuilding
      }
    ]
  };

  const getIndustryData = () => {
    if (category === "service") {
      return serviceIndustriesData[industry] || [];
    } else if (category === "product") {
      return productIndustriesData[industry] || [];
    }
    return [];
  };

  const industryTitles = {
    "food-beverages": "Food & Beverages",
    "hospitality": "Hospitality",
    "real-estate": "Real Estate",
    "health-care": "Healthcare",
    "education": "Education",
    "manufacturing": "Manufacturing"
  };

  const industryData = getIndustryData();

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {industryTitles[industry] || "Industry Solutions"}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-specific solutions driving real business transformation and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryData.map((caseStudy, index) => (
            <IndustryCaseStudy
              key={index}
              {...caseStudy}
            />
          ))}
        </div>

        {industryData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 text-lg">
              Case studies coming soon for this industry...
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default IndustriesPage;