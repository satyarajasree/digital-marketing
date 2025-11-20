import React from "react";

import {
  FaBuilding,
  FaHome,
  FaCity,
  FaWarehouse,
  FaClipboardList,
  FaHandHoldingUsd,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaMobile,
  FaHandshake,
  FaHome,
  FaBuilding,
  FaMoneyBillWave,
  FaCogs,
  FaWarehouse,
  FaIndustry,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Realestate = () => {
  const services = [
    {
      icon: FaBuilding,
      title: "Commercial Real Estate",
      description:
        "Marketing and branding for commercial spaces, offices, and business properties",
      features: [
        "Lead Generation",
        "Corporate Outreach",
        "Brand Visibility",
        "Property Showcasing",
      ],
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-700",
    },
    {
      icon: FaHome,
      title: "Residential Properties",
      description:
        "Promotion for independent houses, villas, and gated communities",
      features: [
        "Buyer Targeting",
        "Property Listings",
        "Virtual Tours",
        "Local Awareness Campaigns",
      ],
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-600",
    },
    {
      icon: MdApartment,
      title: "Apartments & Flats",
      description:
        "Marketing services for apartment complexes, flats, and premium residences",
      features: [
        "Tenant Acquisition",
        "Brochure Design",
        "Digital Ads",
        "Reputation Building",
      ],
      color: "from-purple-500 to-fuchsia-500",
      iconColor: "text-purple-600",
    },
    {
      icon: FaCity,
      title: "Real Estate Developers",
      description:
        "Strategic marketing for builders, developers, and construction companies",
      features: [
        "Project Branding",
        "Market Positioning",
        "Investor Outreach",
        "Launch Campaigns",
      ],
      color: "from-orange-500 to-amber-500",
      iconColor: "text-orange-600",
    },
    {
      icon: FaWarehouse,
      title: "Industrial Properties",
      description:
        "Marketing for factories, warehouses, and industrial rental spaces",
      features: [
        "B2B Lead Generation",
        "Sector-specific Targeting",
        "Location Promotion",
        "Logistics-Friendly Highlighting",
      ],
      color: "from-red-500 to-rose-500",
      iconColor: "text-red-600",
    },
    {
      icon: FaHandHoldingUsd,
      title: "Real Estate Investment",
      description:
        "Promotion for real estate investment opportunities and financial growth plans",
      features: [
        "Investor Targeting",
        "Portfolio Marketing",
        "ROI Highlighting",
        "Market Research Reports",
      ],
      color: "from-teal-500 to-cyan-500",
      iconColor: "text-teal-600",
    },
  ];
  const results = [
    {
      metric: "67%",
      label: "Lead Conversion Boost",
      icon: FaHandshake,
      color: "from-green-500 to-emerald-500",
    },
    {
      metric: "3.8x",
      label: "Property Inquiry Growth",
      icon: FaHome,
      color: "from-blue-500 to-cyan-500",
    },
    {
      metric: "92%",
      label: "Brand Visibility Increase",
      icon: FaBuilding,
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      metric: "2.4x",
      label: "Sales Acceleration",
      icon: FaMoneyBillWave,
      color: "from-orange-500 to-amber-500",
    },
  ];
  const segments = [
  {
    category: "Residential Real Estate",
    items: [
      "Apartments",
      "Villas",
      "Gated Communities",
      "Independent Houses",
      "Premium Residences",
      "Townships",
      "Vacation Homes",
      "Senior Living Homes",
    ],
    icon: FaHome,
    iconColor: "text-blue-500",
  },
  {
    category: "Commercial & Industrial",
    items: [
      "Office Spaces",
      "Retail Stores",
      "Co-Working Spaces",
      "Warehouses",
      "Factories",
      "Industrial Parks",
      "Business Centers",
      "Commercial Complexes",
    ],
    icon: FaBuilding,
    iconColor: "text-purple-500",
  },
  {
    category: "Real Estate Services",
    items: [
      "Property Management",
      "Real Estate Consulting",
      "Project Marketing",
      "Brokerage Services",
      "Investor Relations",
      "Land Development",
      "Construction Services",
      "Architecture & Planning",
    ],
    icon: FaCogs,
    iconColor: "text-green-500",
  },
];
 return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="min-h-screen">

        {/* HERO SECTION */}
        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
                <FaHome className="text-5xl text-orange-400" />
              </div>
            </div>

            <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-6">
              Real Estate Marketing
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Accelerate real estate growth with data-driven marketing strategies. Attract qualified buyers, boost property visibility, and build powerful real estate brands.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-xl font-semibold hover:scale-105 transition flex items-center gap-2">
                Get Education Audit
                <FaArrowRight />
              </button>

              <button className="bg-white/10 text-white px-10 py-4 rounded-xl font-semibold backdrop-blur border border-white/20 hover:bg-white/20 transition">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
        {/* UPDATED STATS SECTION */}
        <div className="py-16 bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center group">
                  
                  <div className={`bg-gradient-to-r ${result.color} p-4 rounded-2xl inline-flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition`}>
                    <result.icon className="text-3xl text-white" />
                  </div>

                  <div className="text-4xl font-bold text-white mb-2">
                    {result.metric}
                  </div>

                  <div className="text-lg text-white font-medium">
                    {result.label}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      {/* SERVICES SECTION */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Real Estate Marketing Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Specialized solutions for every segment of the real estate industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-orange-500/50 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl shadow-lg flex items-center justify-center">
                      <service.icon className={`text-2xl ${service.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                    {service.description}
                                  </p>
                
                                  <div className="space-y-3">
                                    {service.features.map((feature, i) => (
                                      <div key={i} className="flex items-center">
                                        <div className="bg-orange-500/20 p-1 rounded-lg mr-3">
                                          <FaCheck className="text-orange-400 text-sm" />
                                        </div>
                                        <span className="text-gray-300">{feature}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                
                          </div>
                        </div>
        {/* NEW 2×2 CHALLENGES GRID SECTION */}
                <div className="py-20 bg-white">
                  <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-bold text-gray-900 text-center mb-16">
                      Challenges Faced by the Realestate Industry
                    </h2>
        
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
                      {/* LEFT — 4 CARDS */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
                        {/* CARD 01 */}
                        <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition">
                          <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4">
                            01
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2">
                            Low Property Inquiries
                          </h3>
                          <p className="text-gray-600">
                           Use targeted ads, optimized listings, and high-intent lead campaigns.
                          </p>
                        </div>
        
                        {/* CARD 02 */}
                        <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition">
                          <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4">
                            02
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2">
                           Properties aren’t easily discoverable online.
                          </h3>
                          <p className="text-gray-600">
                            Improve SEO, strengthen brand presence, and showcase projects professionally.
                          </p>
                        </div>
        
                        {/* CARD 03 */}
                        <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition">
                          <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4">
                            03
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2">
                            Slow Sales Cycles
                          </h3>
                          <p className="text-gray-600">
                            Use automated follow-ups, personalized messaging, and virtual property tours.
                          </p>
                        </div>
        
                        {/* CARD 04 */}
                        <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition">
                          <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4">
                            04
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2">
                            Most inquiries are unqualified or uninterested.
                          </h3>
                          <p className="text-gray-600">
                           Run data-driven targeting, refine audience segments, and use stronger filtering.
                          </p>
                        </div>
        
                      </div>
        
                      {/* RIGHT SIDE IMAGE */}
                      <div className="flex justify-center">
                        <img
                          src={ChallengesImage}
                          alt="Challenges"
                          className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
                        />
                      </div>
        
                    </div>
                  </div>
                </div>
                {/* 🌟 NEW SECTION — How Amplinova turns that challenges into opportunity */}
                        <div className="py-24 bg-white">
                          <div className="container mx-auto px-6">
                
                            {/* Heading */}
                            <h2 className="text-5xl font-bold text-gray-900 text-center mb-16">
                              How <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent underline decoration-orange-400 decoration-4">Amplinova</span> turns that challenges into opportunity
                            </h2>
                
                            {/* 4 Items — Side by side */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                
                              {/* 01 */}
                              <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                                  <FaCheck className="text-white text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                  High-Intent Buyer Acquisition
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                  Low inquiries become a chance to refine targeting. By using data-driven ads, buyer profiling, and optimized listings, companies can attract more serious, high-quality leads.
                                </p>
                              </div>
                
                              {/* 02 */}
                              <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                                  <FaCheck className="text-white text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          
                                  Stronger Digital Dominance
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                  Weak online visibility opens the door to build a powerful digital brand. Improving SEO, running content marketing, and showcasing projects with professional visuals boosts discovery and trust.
                                </p>
                              </div>
                
                              {/* 03 */}
                              <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                                  <FaCheck className="text-white text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                  Faster & Smarter Sales Pipelines
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                  Slow sales cycles can evolve into efficient conversion systems through automated follow-ups, CRM integration, personalized messaging, and virtual site visits.
                                </p>
                              </div>
                
                              {/* 04 */}
                              <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                                  <FaCheck className="text-white text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                  Better Audience Targeting
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                  Poor lead quality becomes an opportunity to refine targeting strategies. Using demographic filters, buyer behavior insights, and channel optimization ensures more relevant and profitable leads.
                                </p>
                              </div>
                
                            </div>
                          </div>
                        </div>


                {/* SEGMENTS SECTION */}
                        <div className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 relative">
                          <div className="container mx-auto px-6 relative">
                            <div className="text-center mb-16">
                              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                                Realestate Segments We Serve
                              </h2>
                              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Comprehensive expertise across all realestate sectors
                              </p>
                            </div>
                
                            <div className="grid md:grid-cols-3 gap-8">
                              {segments.map((segment, index) => (
                                <div
                                  key={index}
                                  className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 group hover:border-orange-300"
                                >
                                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <segment.icon className={`text-2xl ${segment.iconColor}`} />
                                  </div>
                                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    {segment.category}
                                  </h3>
                                  <div className="space-y-3">
                                    {segment.items.map((item, itemIndex) => (
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
                
                        {/* CTA SECTION */}
                        <div className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
                          <div className="absolute inset-0 bg-black opacity-40"></div>
                
                          <div className="container mx-auto px-6 text-center relative z-10">
                            <h2 className="text-5xl font-bold text-white mb-8">
                              Ready to Transform Your Realestate Business?
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                              Transform real estate marketing with analytics-driven strategies. Generate high-intent leads, maximize property reach, and elevate your brand presence.
                            </p>
                
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-12 py-5 rounded-xl font-semibold hover:scale-105 transition flex items-center gap-3">
                                Get Free Education Audit
                                <FaArrowRight />
                              </button>
                
                              <button className="bg-white text-gray-900 px-12 py-5 rounded-xl font-semibold border-2 border-white hover:bg-gray-100 transition">
                                View Case Studies
                              </button>
                            </div>
                          </div>
                        </div>

                        </div>

      <Footer />
    </div>
  );
};
export default Realestate;
