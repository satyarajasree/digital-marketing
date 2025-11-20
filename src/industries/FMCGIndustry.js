import React from "react";
import {
  FaShoppingCart,
  FaBox,
  FaStore,
  FaUtensils,
  FaWineBottle,
  FaTruck,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fmcgBg from "../assets/fmcg.jpg"; 


const FMCGIndustry = () => {
  const services = [
    {
      icon: FaShoppingCart,
      title: "CPG Brand Marketing",
      description: "Comprehensive marketing for consumer packaged goods brands",
      features: ["Brand Positioning", "Product Launch", "Shelf Presence", "Consumer Insights"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaStore,
      title: "Retail Marketing",
      description: "Strategies for FMCG products in retail environments",
      features: ["In-store Promotion", "POS Marketing", "Retail Partnerships", "Merchandising"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaUtensils,
      title: "Food & Beverage",
      description: "Specialized marketing for food and beverage products",
      features: ["Recipe Marketing", "Nutrition Messaging", "Seasonal Campaigns", "Taste Testing"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaWineBottle,
      title: "Beverage Marketing",
      description: "Marketing solutions for beverage companies",
      features: ["Flavor Launches", "Packaging Design", "Distribution Growth", "Event Marketing"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaBox,
      title: "Packaging & Design",
      description: "Marketing-focused packaging and product design",
      features: ["Shelf Impact", "Brand Recognition", "Sustainability", "Consumer Appeal"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaTruck,
      title: "Distribution Marketing",
      description: "Marketing for FMCG distribution and supply chain",
      features: ["Channel Strategy", "Distributor Support", "Logistics Marketing", "Inventory Turnover"],
      color: "from-orange-500 to-amber-500"
    },
  ];

  const results = [
    { metric: "35%", label: "Sales Growth", icon: FaChartLine, color: "from-orange-500 to-amber-500" },
    { metric: "4.2x", label: "Brand Recall", icon: FaStar, color: "from-orange-500 to-amber-500" },
    { metric: "58%", label: "Shelf Presence", icon: FaStore, color: "from-orange-500 to-amber-500" },
    { metric: "72%", label: "Consumer Engagement", icon: FaUsers, color: "from-orange-500 to-amber-500" },
  ];

  const trustBadges = [
    {
      icon: FaShieldAlt,
      text: "FMCG Specialists",
      description: "Deep expertise in fast-moving consumer goods"
    },
    {
      icon: FaStar,
      text: "Retail Relationships",
      description: "Strong connections with major retail partners"
    },
    {
      icon: FaRocket,
      text: "Rapid Campaigns",
      description: "Quick-to-market strategies for fast results"
    }
  ];

  const categories = [
    {
      category: "Food Products",
      items: ["Snack Foods", "Bakery Items", "Dairy Products", "Frozen Foods", "Canned Goods", "Condiments", "Breakfast Cereals", "Confectionery"],
      icon: FaUtensils
    },
    {
      category: "Beverages",
      items: ["Soft Drinks", "Juices", "Bottled Water", "Energy Drinks", "Coffee", "Tea", "Alcoholic Beverages", "Health Drinks"],
      icon: FaWineBottle
    },
    {
      category: "Personal Care",
      items: ["Toiletries", "Cosmetics", "Skincare", "Hair Care", "Oral Care", "Fragrances", "Baby Care", "Health & Wellness"],
      icon: FaShoppingCart
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="min-h-screen">
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
<div
  className="relative bg-cover bg-center bg-no-repeat text-white py-24 overflow-hidden"
  style={{ backgroundImage: `url(${fmcgBg})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Background Glow Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10 text-center">

    {/* Icon */}
    <div className="flex justify-center mb-8">
      <div className="p-6 bg-white/20 rounded-3xl backdrop-blur-sm border border-white/30">
        <FaShoppingCart className="text-5xl text-orange-400" />
      </div>
    </div>

    {/* Title */}
    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent pb-3">
      FMCG Marketing
    </h1>

    {/* Subtitle */}
    <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
      Accelerate growth in the fast-moving consumer goods sector.
      Drive shelf presence, consumer loyalty, and rapid sales velocity 
      with specialized FMCG marketing strategies.
    </p>

  </div>
</div>

        {/* Trust Badges */}
        <div className="py-12 bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <badge.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{badge.text}</div>
                    <div className="text-sm text-gray-400">{badge.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Stats */}
        <div className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center group">
                  <div className={`bg-gradient-to-r ${result.color} p-4 rounded-2xl inline-flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <result.icon className="text-3xl text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{result.metric}</div>
                  <div className="text-lg text-gray-600 font-medium">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                FMCG Marketing Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Comprehensive marketing solutions for fast-moving consumer goods
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-orange-500/50 hover:transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl text-white text-2xl shadow-lg`}>
                      <service.icon />
                    </div>
                    <div className="text-2xl font-bold text-white">{service.title}</div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-300 group/item hover:text-orange-400 transition-colors duration-200"
                      >
                        <div className="bg-orange-500/20 p-1 rounded-lg mr-3 group-hover/item:bg-orange-500/30 transition-colors duration-200">
                          <FaCheck className="text-orange-400 text-sm" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-30"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                FMCG Categories We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expertise across all fast-moving consumer goods segments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-orange-200"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-2xl p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <category.icon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center text-gray-700 group/item hover:text-orange-600 transition-colors duration-200"
                      >
                        <div className="bg-green-100 p-1 rounded-lg mr-3 group-hover/item:bg-green-200 transition-colors duration-200">
                          <FaCheck className="text-green-600 text-sm" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
      <Footer />
    </div>
  );
};

export default FMCGIndustry;