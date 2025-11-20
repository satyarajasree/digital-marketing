import React from "react";
import {
  FaArrowRight,
  FaCheck,
  FaHotel,
  FaConciergeBell,
  FaGlobeAmericas,
  FaChartLine,
  FaUsers,
  FaUtensils,
  FaUmbrellaBeach,
  FaMapMarkedAlt,
  FaStar,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Background Image
import hospitalityBg from "../assets/Hospitalitydev.avif";

const HospitalityIndustry = () => {
  // Stats Section
  const stats = [
    {
      metric: "68%",
      label: "Increase in Bookings",
      icon: FaHotel,
    },
    {
      metric: "4.7x",
      label: "Brand Visibility Boost",
      icon: FaGlobeAmericas,
    },
    {
      metric: "52%",
      label: "Higher Guest Retention",
      icon: FaUsers,
    },
    {
      metric: "3.9x",
      label: "Revenue Growth",
      icon: FaChartLine,
    },
  ];

  // Services for Hospitality
  const services = [
    {
      icon: FaHotel,
      title: "Hotel & Resort Marketing",
      description:
        "Drive more direct bookings with targeted marketing strategies designed for hotels, resorts, and luxury stays.",
      features: [
        "Direct Booking Optimization",
        "OTA Management",
        "Guest Review Strategy",
        "Loyalty Program Setup",
      ],
    },
    {
      icon: FaConciergeBell,
      title: "Restaurant & Café Growth",
      description:
        "Transform your dining brand with strategic digital marketing that increases footfall and repeat customers.",
      features: [
        "Menu Engineering",
        "Social Media Promotion",
        "Food Photography",
        "Influencer Partnerships",
      ],
    },
    {
      icon: FaUmbrellaBeach,
      title: "Travel & Tourism Marketing",
      description:
        "Boost your travel business with data-driven marketing built for tour operators & travel companies.",
      features: [
        "Destination Campaigns",
        "Lead Generation",
        "Travel Package Promotion",
        "Retargeting Campaigns",
      ],
    },
    {
      icon: FaMapMarkedAlt,
      title: "Experience & Event Marketing",
      description:
        "Sell more events, experiences, retreats, and holiday packages with targeted campaigns.",
      features: [
        "Experience Branding",
        "Ticketing Funnels",
        "Festive Campaigns",
        "Influencer Collaborations",
      ],
    },
    {
      icon: FaStar,
      title: "Luxury Hospitality Branding",
      description:
        "Strategic branding for luxury hotels, resorts, villas, and boutique properties.",
      features: [
        "Luxury Brand Positioning",
        "Elegant Web Experience",
        "Premium Content Creation",
        "High-Intent Ads",
      ],
    },
    {
      icon: FaUtensils,
      title: "Cloud Kitchen Marketing",
      description:
        "Grow your cloud kitchen with performance-driven marketing strategies.",
      features: [
        "Zomato/Swiggy Growth",
        "Brand Identity Setup",
        "Food Content Shoots",
        "Delivery Optimization",
      ],
    },
  ];

  // Challenges Section
  const challenges = [
    {
      number: "01",
      title: "Low Direct Bookings",
      desc: "Hotels rely too heavily on OTAs, reducing profits due to high commission deductions.",
    },
    {
      number: "02",
      title: "Weak Online Presence",
      desc: "Many hospitality brands struggle with visibility in an extremely competitive digital landscape.",
    },
    {
      number: "03",
      title: "Poor Customer Engagement",
      desc: "Lack of consistent communication leads to low repeat visits and guest retention.",
    },
    {
      number: "04",
      title: "Slow Response & Lead Loss",
      desc: "Delayed responses to inquiries cause lost bookings, especially for travel and events.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      {/* HERO SECTION */}
<div
  className="relative bg-cover bg-center bg-no-repeat text-white py-32 overflow-hidden"
  style={{ backgroundImage: `url(${hospitalityBg})` }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="container mx-auto px-6 relative z-10 text-center">

    {/* Icon */}
    <div className="flex justify-center mb-8">
      <div className="p-6 bg-white/20 rounded-3xl backdrop-blur-md border border-white/30">
        <FaHotel className="text-5xl text-white" />
      </div>
    </div>

    {/* Title */}
    <h1 className="text-6xl font-bold text-white mb-6 pb-3">
      Hospitality Marketing
    </h1>

    {/* Subtitle */}
    <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
      Empowering hotels, restaurants, travel brands & luxury stays with
      high-impact digital marketing strategies that boost visibility,
      increase bookings, and create memorable guest experiences.
    </p>
  </div>
</div>


      {/* STATS */}
      <div className="py-20 bg-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-5 rounded-2xl inline-flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition">
                <item.icon className="text-3xl text-white" />
              </div>
              <div className="text-4xl font-bold text-white">{item.metric}</div>
              <div className="text-lg text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12">
            Hospitality Marketing Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-xl shadow-md">
                    <s.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{s.title}</h3>
                </div>

                <p className="text-gray-300 mb-6">{s.description}</p>

                <div className="space-y-3">
                  {s.features.map((f, i) => (
                    <div key={i} className="flex items-center">
                      <div className="p-1 bg-blue-500/20 rounded-md mr-3">
                        <FaCheck className="text-blue-400 text-sm" />
                      </div>
                      <span className="text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CHALLENGES */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Challenges in the Hospitality Industry
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {challenges.map((c, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  {c.number}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {c.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Hospitality Brand?
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Let’s build a powerful marketing strategy that increases bookings,
            enhances your online presence, and delivers unforgettable guest
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
            onClick={() => (window.location.href = "/contact-us")}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-12 py-4 rounded-xl text-lg font-semibold flex items-center gap-3 hover:scale-105 transition shadow-xl">
              Get Free Hospitality Audit <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HospitalityIndustry;
