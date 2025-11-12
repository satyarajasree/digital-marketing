// src/pages/DigitalMarketingWork.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CollageGrid from "../components/CollageGrid";

const DigitalMarketingWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="digital-marketing-work"
      className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,107,53,0.1),transparent)]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
             Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Work
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Transforming businesses through data-driven digital marketing strategies 
              that deliver measurable results and sustainable growth across all channels.
            </motion.p>
          </div>

          {/* Collage Grid Section - Full Width */}
          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            <CollageGrid 
              mode="digital-marketing"
              title=""
              className="w-full"
              maxColumns={12}
            />
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { number: "250%", label: "Average Revenue Growth", color: "from-orange-400 to-red-400" },
              { number: "180%", label: "Organic Traffic Increase", color: "from-orange-400 to-yellow-400" },
              { number: "320%", label: "Social Engagement Boost", color: "from-red-400 to-pink-400" },
              { number: "320%", label: "Social Engagement Boost", color: "from-red-400 to-pink-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalMarketingWork;