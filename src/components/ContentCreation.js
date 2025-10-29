import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaVideo,
  FaCamera,
  FaEdit,
  FaMicrophone,
  FaLightbulb,
  FaPlayCircle,
} from "react-icons/fa";
import studioImage from '../anime/team.jpg';

const ContentCreation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const services = [
    {
      icon: FaVideo,
      title: "Video Production",
      description: "Cinematic brand videos, social media content, and commercials that drive engagement.",
      features: ["4K Quality", "Multi-platform", "Story-driven"],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: FaCamera,
      title: "Brand Photography",
      description: "Professional product and lifestyle photography that tells your brand story.",
      features: ["Studio & Outdoor", "Product Shots", "Brand Storytelling"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaEdit,
      title: "Post Production",
      description: "Expert editing, motion graphics, and visual effects for maximum impact.",
      features: ["Color Grading", "Motion Graphics", "Quick Turnaround"],
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: FaMicrophone,
      title: "Audio Production",
      description: "Crystal clear podcast recording and audio enhancement for videos.",
      features: ["Studio Quality", "Audio Mixing", "Noise Reduction"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  
  return (
    <section
      id="content-creation"
      className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8"
    >
      {/* Same Background as Who We Are */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]" />
        
        {/* Static Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full filter blur-3xl opacity-30" />
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
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/80 border border-amber-100 rounded-full px-6 py-3 mb-6 backdrop-blur-sm shadow-sm"
            >
              <FaVideo className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">
                In-House Studio Excellence
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
            >
              Content{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent relative inline-block">
                Creation
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              An agency with an In-house Studio Setup
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold mt-4"
            >
              At Mage Marketer, we bring creativity and strategy together with our in-house studio setup. 
              Let us transform your vision into reality where innovation meets expertise!
            </motion.p>
          </div>

          {/* Main Content Grid - Reversed Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content - Process & Features */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Value Proposition */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-amber-50 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <FaLightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Studio Capabilities</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our in-house studio is equipped with{" "}
                    <span className="text-amber-600 font-semibold">
                      professional-grade equipment and cutting-edge technology
                    </span>{" "}
                    to bring your creative vision to life.
                  </p>

                
                </div>
              </div>

              
            </motion.div>

            {/* Right Content - Studio Showcase */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-amber-100 bg-white shadow-lg">
                  <motion.img
                    src={studioImage}
                    alt="Mage Marketer Content Creation Studio"
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                  
                  {/* Play Button */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-6 shadow-2xl cursor-pointer group hover:shadow-amber-500/30 transition-shadow">
                      <FaPlayCircle className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.div>

                  {/* Studio Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-200 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-amber-700">LIVE STUDIO</span>
                    </div>
                  </div>
                </div>
              </div>

              
            </motion.div>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:shadow-xl transition-shadow`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 p-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Content That Converts?
            </h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our studio can bring your brand story to life and drive real marketing results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Book Studio Session
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentCreation;