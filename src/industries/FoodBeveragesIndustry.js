import React from "react";   
import {
  FaArrowRight,
  FaCheck,
  FaUtensils,
  FaIndustry,
  FaChartLine,
  FaStore,
  FaTruck,
  FaHandshake,
  FaGlobe,
  FaCogs,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import foodBg from "../assets/food&beverages.jpg";
import ChallengesImage from "../assets/food.webp";

const FoodBeveragesIndustry = () => {

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="min-h-screen">


        <div
  className="relative bg-cover bg-center bg-no-repeat text-white py-28 overflow-hidden"
  style={{ backgroundImage: `url(${foodBg})` }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="container mx-auto px-6 relative z-10 text-center">
    <div className="flex justify-center mb-8">
      <div className="p-6 bg-white/20 rounded-3xl backdrop-blur-sm border border-white/30">
        <FaUtensils className="text-5xl text-white" />
      </div>
    </div>

    <h1 className="text-6xl font-bold text-white mb-6 pb-3">
      Food & Beverages
    </h1>

    <p className="text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed">
      Grow your food & beverage brand with powerful digital strategies
      tailored for restaurants, cloud kitchens, FMCG brands, manufacturers,
      and distributors.
    </p>
  </div>
</div>



        {/* 🔵 BUSINESS IMPACT STATS */}
        <div className="py-16 bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

              <div>
                <div className="bg-gradient-to-r from-blue-500 to-sky-500 p-4 rounded-2xl shadow-lg inline-flex mb-4">
                  <FaChartLine className="text-white text-3xl" />
                </div>
                <p className="text-4xl text-white font-bold">4.8x</p>
                <p className="text-blue-200">Sales Growth</p>
              </div>

              <div>
                <div className="bg-gradient-to-r from-blue-500 to-sky-500 p-4 rounded-2xl shadow-lg inline-flex mb-4">
                  <FaStore className="text-white text-3xl" />
                </div>
                <p className="text-4xl text-white font-bold">72%</p>
                <p className="text-blue-200">Brand Visibility</p>
              </div>

              <div>
                <div className="bg-gradient-to-r from-blue-500 to-sky-500 p-4 rounded-2xl shadow-lg inline-flex mb-4">
                  <FaGlobe className="text-white text-3xl" />
                </div>
                <p className="text-4xl text-white font-bold">3.2x</p>
                <p className="text-blue-200">Online Reach</p>
              </div>

              <div>
                <div className="bg-gradient-to-r from-blue-500 to-sky-500 p-4 rounded-2xl shadow-lg inline-flex mb-4">
                  <FaHandshake className="text-white text-3xl" />
                </div>
                <p className="text-4xl text-white font-bold">85%</p>
                <p className="text-blue-200">Customer Retention</p>
              </div>

            </div>
          </div>
        </div>


        {/* 🔵 SERVICES SECTION */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
          <div className="container mx-auto px-6">

            <h2 className="text-5xl font-bold text-center mb-16">
              Food & Beverage Marketing Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

              {[
                {
                  icon: FaStore,
                  title: "Restaurant Marketing",
                  desc: "Increase footfall, improve customer loyalty, and boost orders through targeted digital strategies."
                },
                {
                  icon: FaTruck,
                  title: "Cloud Kitchen Growth",
                  desc: "End-to-end marketing for cloud kitchens to scale orders across Zomato, Swiggy, Instagram & Google."
                },
                {
                  icon: FaIndustry,
                  title: "FMCG & Manufacturing",
                  desc: "Brand positioning, B2B lead gen, and distributor-level marketing for FMCG brands."
                },
                {
                  icon: FaGlobe,
                  title: "Brand Awareness",
                  desc: "Grow your brand presence across major digital platforms with high-engagement content."
                },
                {
                  icon: FaCogs,
                  title: "Marketing Automation",
                  desc: "WhatsApp automation, CRM, and retention strategies to increase repeat purchases."
                },
                {
                  icon: FaHandshake,
                  title: "Distributor & Dealer Marketing",
                  desc: "Strategies to expand your distribution network and improve channel partnerships."
                }
              ].map((srv, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl"
                >
                  <srv.icon className="text-4xl text-blue-400 mb-5" />
                  <h3 className="text-2xl font-bold mb-4">{srv.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{srv.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </div>


        {/* 🔵 CHALLENGES SECTION */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">

            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
              Challenges in the Food & Beverages Industry
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {[
                  "Low Repeat Customers",
                  "High Competition on Delivery Apps",
                  "Poor Online Branding",
                  "Difficulty Maintaining Consistent Orders"
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent mb-4">
                      {`0${i + 1}`}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item}</h3>
                    <p className="text-gray-600">
                      We help food businesses overcome this challenge through effective digital and operational solutions.
                    </p>
                  </div>
                ))}

              </div>

              <div className="flex justify-center">
                <img
                  src={ChallengesImage}
                  className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
                  alt="Challenges"
                />
              </div>

            </div>
          </div>
        </div>


        {/* 🔵 HOW WE HELP */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-6">

            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
              How <span className="text-blue-600 underline decoration-4">Amplinova</span> Helps You Grow
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

              {[
                "High-converting Social Media Campaigns",
                "SEO & Google Ranking for Food Businesses",
                "Automated Customer Retention Systems",
                "Influencer & Brand Collaboration Strategies"
              ].map((text, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-sky-400 rounded-xl flex justify-center items-center shadow-xl">
                    <FaCheck className="text-white text-3xl" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{text}</p>
                </div>
              ))}

            </div>
          </div>
        </div>


        {/* 🔵 CTA */}
        <div className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Grow Your Food & Beverage Business?
            </h2>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Let's build a digital strategy that increases orders, improves branding, and
              drives long-term growth.
            </p>

            <button 
              onClick={() => (window.location.href = "/contact-us")}
              className="bg-gradient-to-r from-blue-500 to-sky-400 text-white px-12 py-5 rounded-xl font-semibold hover:scale-105 transition flex items-center gap-3 mx-auto"
            >
              Get Free Strategy Call <FaArrowRight />
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default FoodBeveragesIndustry;
