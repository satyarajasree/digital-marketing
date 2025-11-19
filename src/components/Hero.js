import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight, FaChartLine, FaCode, FaMobile, FaCloud, FaShieldAlt, FaSearch, FaShoppingCart, FaServer, FaDatabase, FaLaptopCode } from 'react-icons/fa';
import Lottie from 'lottie-react';
import anime from '../anime/ass-marketing.json';

const Hero = ({ 
  mode = "combined", // "it", "marketing", or "combined"
  title = null,
  subtitle = null
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // IT Services
  const itServices = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Custom websites & web applications"
    },
    {
      icon: FaServer,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure"
    },
    {
      icon: FaShieldAlt,
      title: "Cyber Security",
      description: "Complete digital protection"
    },
    {
      icon: FaDatabase,
      title: "Data Solutions",
      description: "Database management & analytics"
    }
  ];

  // Digital Marketing Services
  const marketingServices = [
    {
      icon: FaSearch,
      title: "SEO Optimization",
      description: "Rank higher in search results"
    },
    {
      icon: FaCloud,
      title: "Social Media Marketing",
      description: "Engage your audience effectively"
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce Solutions",
      description: "Boost your online sales"
    },
    {
      icon: FaChartLine,
      title: "Analytics & ROI",
      description: "Data-driven marketing strategies"
    }
  ];

  // Combined services for home page
  const combinedServices = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Custom websites & web applications"
    },
    {
      icon: FaMobile,
      title: "Digital Marketing",
      description: "SEO, Social Media & PPC campaigns"
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure"
    },
    {
      icon: FaShieldAlt,
      title: "Cyber Security",
      description: "Complete digital protection"
    }
  ];

  const getServices = () => {
    switch (mode) {
      case "it":
        return itServices;
      case "marketing":
        return marketingServices;
      case "combined":
      default:
        return combinedServices;
    }
  };

  const getMainTitle = () => {
    if (title) return title;
    
    switch (mode) {
      case "it":
        return (
          <>
            Transform Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent block pb-3">
              Technology
            </span>
          </>
        );
      case "marketing":
        return (
          <>
            Amplify Your{' '}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent block pb-3">
              Digital Presence
            </span>
          </>
        );
      case "combined":
      default:
        return (
          <>
            Transform Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent block">
              Business
            </span>
          </>
        );
    }
  };

  const getSubtitle = () => {
    if (subtitle) return subtitle;
    
    switch (mode) {
      case "it":
        return (
          <>
            Complete <span className="text-blue-400 font-semibold">IT solutions</span> and cutting-edge{' '}
            <span className="text-cyan-400 font-semibold">technology services</span>
            that drive innovation and efficiency.
          </>
        );
      case "marketing":
        return (
          <>
            Powerful <span className="text-orange-400 font-semibold">digital marketing</span> strategies and data-driven{' '}
            <span className="text-pink-400 font-semibold">growth solutions</span>
            that maximize your online impact.
          </>
        );
      case "combined":
      default:
        return (
          <>
            Complete <span className="text-blue-400 font-semibold">IT solutions</span> and powerful{' '}
            <span className="text-orange-400 font-semibold">digital marketing</span> strategies
            that drive growth and innovation.
          </>
        );
    }
  };

  const getGradientColors = () => {
    switch (mode) {
      case "it":
        return "from-blue-500 to-cyan-600";
      case "marketing":
        return "from-orange-500 to-pink-600";
      case "combined":
      default:
        return "from-blue-500 to-purple-600";
    }
  };

  const getGlowColors = () => {
    switch (mode) {
      case "it":
        return {
          primary: "blue-500",
          secondary: "cyan-500"
        };
      case "marketing":
        return {
          primary: "orange-500",
          secondary: "pink-500"
        };
      case "combined":
      default:
        return {
          primary: "blue-500",
          secondary: "orange-500"
        };
    }
  };

  const getExpertiseTitle = () => {
    switch (mode) {
      case "it":
        return "Our IT Services:";
      case "marketing":
        return "Our Marketing Services:";
      case "combined":
      default:
        return "Our Expertise Includes:";
    }
  };

  const glowColors = getGlowColors();

  return (
    <section id="home" className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.03)_100%)] bg-[size:100px_100px]"
        />

        {/* Glow Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-${glowColors.primary} rounded-full filter blur-3xl`}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-${glowColors.secondary} rounded-full filter blur-3xl`}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-16">
            {/* Left Content - Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                {getMainTitle()}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {getSubtitle()}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`group bg-gradient-to-r ${getGradientColors()} text-white px-5 py-2 rounded-lg font-semibold text-base hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                >
                  <span className="relative z-10 flex items-center gap-2 justify-center">
                    Get Started
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 border-2 border-gray-600 text-gray-300 px-5 py-2 rounded-lg font-medium text-base hover:border-orange-500 hover:text-orange-400 transition-all duration-300 justify-center"
                >
                  <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <FaPlay className="w-3 h-3 ml-1" />
                  </div>
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Services Quick Overview */}
              <motion.div
                variants={itemVariants}
                className="mb-12"
              >
                <h3 className="text-lg font-semibold text-gray-300 mb-6 text-center lg:text-left">{getExpertiseTitle()}</h3>
                <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
                  {getServices().map((service, index) => (
                    <motion.div
                      key={service.title}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-gray-800 bg-opacity-50 px-4 py-3 rounded-xl border border-gray-700 backdrop-blur-sm hover:border-blue-500 transition-all duration-300"
                    >
                      <service.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-200">{service.title}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content - Animation Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative max-w-lg w-full"
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border border-gray-700 shadow-2xl backdrop-blur-sm"
                >
                  {/* Lottie Animation */}
                  <div className="relative z-0">
                    <Lottie
                      animationData={anime}
                      loop={true}
                      autoplay={true}
                      style={{
                        width: '100%',
                        height: 300,
                      }}
                      rendererSettings={{
                        preserveAspectRatio: 'xMidYMid slice'
                      }}
                    />
                  </div>

                  {/* Dual Focus Cards */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`${
                        mode === "it" ? "bg-cyan-900 bg-opacity-30 border-cyan-700" : 
                        mode === "marketing" ? "bg-orange-900 bg-opacity-30 border-orange-700" : 
                        "bg-orange-900 bg-opacity-30 border-orange-700"
                      } p-4 rounded-xl border backdrop-blur-sm`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${
                          mode === "it" ? "bg-cyan-500" : 
                          mode === "marketing" ? "bg-orange-500" : 
                          "bg-orange-500"
                        } rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <FaChartLine className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-white font-semibold text-sm truncate">
                            {mode === "it" ? "IT Solutions" : "Digital Marketing"}
                          </h4>
                          <p className={`${
                            mode === "it" ? "text-cyan-200" : 
                            mode === "marketing" ? "text-orange-200" : 
                            "text-orange-200"
                          } text-xs truncate`}>
                            {mode === "it" ? "Development & Security" : "Growth & Analytics"}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-900 bg-opacity-30 p-4 rounded-xl border border-blue-700 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaLaptopCode className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-white font-semibold text-sm truncate">
                            {mode === "marketing" ? "Marketing Analytics" : "Technology"}
                          </h4>
                          <p className="text-blue-200 text-xs truncate">
                            {mode === "marketing" ? "Data & Insights" : "Innovation & Solutions"}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`absolute -top-4 -right-4 w-16 h-16 bg-${glowColors.primary} bg-opacity-20 rounded-2xl border border-${glowColors.primary} backdrop-blur-sm flex items-center justify-center`}
                >
                  <FaCode className={`w-6 h-6 text-${glowColors.primary}`} />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className={`absolute -bottom-4 -left-4 w-14 h-14 bg-${glowColors.secondary} bg-opacity-20 rounded-2xl border border-${glowColors.secondary} backdrop-blur-sm flex items-center justify-center`}
                >
                  <FaChartLine className={`w-5 h-5 text-${glowColors.secondary}`} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
        >
          <span className="text-sm font-medium">Discover Our Solutions</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;