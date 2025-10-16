import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaStar,
  FaArrowRight,
  FaUserTie,
  FaChess,
  FaBrain,
  FaCog,
  FaArrowDown,
  FaCheck,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaAward,
  FaLightbulb,
  FaGlobe,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StrategyConsulting = () => {
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

  // Falling animation for background elements
  const fallingVariants = {
    fall: {
      y: [-100, 1000],
      rotate: [0, 180],
      opacity: [0, 0.3, 0],
      transition: {
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        delay: Math.random() * 5,
        ease: "linear",
      },
    },
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    {
      icon: FaArrowDown,
      title: "Market Analysis",
      description: "Deep dive into market trends and competitive landscape",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: FaChess,
      title: "Strategic Planning",
      description: "Comprehensive roadmaps for sustainable business growth",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaBrain,
      title: "Data-Driven Insights",
      description: "Leverage analytics for informed decision making",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: FaCog,
      title: "Process Optimization",
      description: "Streamline operations for maximum efficiency",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Comprehensive assessment of your business landscape"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Customized roadmap aligned with your objectives"
    },
    {
      step: "03",
      title: "Implementation Plan",
      description: "Actionable steps with clear milestones"
    },
    {
      step: "04",
      title: "Performance Tracking",
      description: "Continuous monitoring and optimization"
    },
  ];

  const benefits = [
    "Strengthen brand identity",
    "Engage target audiences",
    "Deliver cross-platform consistency",
    "Support business growth",
    "Convert attention into action"
  ];

  const services = [
    {
      title: "Market Analysis",
      description: "Deep dive into market trends, competitor analysis, and customer insights to identify opportunities and threats.",
      icon: FaChartLine
    },
    {
      title: "Brand Strategy",
      description: "Develop compelling brand positioning and messaging that resonates with your target audience.",
      icon: FaUsers
    },
    {
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital roadmap covering all channels from SEO and social media to email and content marketing.",
      icon: FaRocket
    },
    {
      title: "Business Growth Strategy",
      description: "Scalable growth frameworks designed to expand your market share and revenue streams.",
      icon: FaAward
    },
    {
      title: "Operational Consulting",
      description: "Optimize business processes and workflows for improved efficiency and productivity.",
      icon: FaCog
    }
  ];

  const stats = [
    { number: "500+", label: "Strategies Developed", icon: FaAward },
    { number: "98%", label: "Client Satisfaction", icon: FaCheckCircle },
    { number: "45%", label: "Average Growth", icon: FaChartLine },
    { number: "8+", label: "Years Expertise", icon: FaShieldAlt },
  ];

  return (
    <>
      <Navbar />
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8">
        {/* Falling Animated Background */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {/* Gradient Orbs */}
          <motion.div
            variants={floatVariants}
            animate="float"
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full filter blur-3xl opacity-20"
          />
          <motion.div
            variants={floatVariants}
            animate="float"
            transition={{ delay: 2 }}
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full filter blur-3xl opacity-20"
          />
          <motion.div
            variants={floatVariants}
            animate="float"
            transition={{ delay: 4 }}
            className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full filter blur-3xl opacity-20"
          />

          {/* Falling Elements */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              variants={fallingVariants}
              animate="fall"
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${8 + Math.random() * 12}px`,
              }}
            >
              {[FaStar, FaChess, FaArrowRight, FaBrain, FaUserTie][i % 5]({
                className: `text-amber-${
                  200 + Math.floor(Math.random() * 3) * 100
                } opacity-40`,
              })}
            </motion.div>
          ))}

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]" />
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-10 rounded-full"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <FaUserTie className="w-5 h-5 text-amber-600 relative z-10" />
                <span className="text-sm font-medium text-amber-700 relative z-10 uppercase tracking-wide">
                  Strategic Excellence
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
              >
                Strategy &{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent relative inline-block">
                  Consulting
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              >
                Data-driven strategies and expert consulting to transform your 
                business vision into measurable results and sustainable growth.
              </motion.p>
            </div>

            {/* Hero Content Section */}
            <motion.div
              variants={containerVariants}
              className="grid lg:grid-cols-2 gap-12 mb-20 items-center"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Strategy & Consulting Services by{" "}
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Mage Marketer
                  </span>
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Empower with Data-Driven Strategy
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  At Mage Marketer, we combine in-depth industry knowledge with a strategic 
                  approach to help businesses achieve sustainable growth and overcome challenges. 
                  Our Strategy and Consulting services are designed to provide you with clear 
                  direction, actionable insights, and a roadmap to success.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  We work closely with you to craft strategies that align with your goals and 
                  deliver measurable results.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  Get Started Today
                  <FaArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-amber-50/50 hover:bg-amber-100/50 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Statistics Section */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* ROI Section */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12 text-center mb-20 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-white"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  >
                    <FaStar className="w-6 h-6" />
                  </motion.div>
                ))}
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6 relative z-10">
                ROI-Driven Strategy & Consulting
              </h2>
              <p className="text-amber-100 text-xl leading-relaxed max-w-4xl mx-auto relative z-10">
                At Mage Marketer, we believe in combining creativity with data-driven insights 
                to design strategies that work for your specific needs. Our consulting services 
                are structured to provide you with a holistic view of your business and a 
                step-by-step plan to move forward.
              </p>
            </motion.div>

            {/* Services Section */}
            <motion.div variants={itemVariants} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What You Get
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  How Our Strategy & Consulting Services Help You Grow
                </p>
                <p className="text-gray-700 mt-4 max-w-4xl mx-auto">
                  Our approach combines deep insights with strategy to ensure your plans don't 
                  just look good on paper but also deliver real results.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mb-6"
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Process Section */}
            <motion.div variants={itemVariants} className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our Strategic Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                  >
                    <div className="text-4xl font-bold text-amber-600 mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8 mb-16"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <FaLightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower businesses with data-driven strategies that deliver 
                  measurable results, drive sustainable growth, and create lasting 
                  competitive advantages through expert consulting and strategic planning.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl flex items-center justify-center mb-6">
                  <FaGlobe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the most trusted strategy and consulting partner for 
                  businesses worldwide, recognized for our innovative approaches, 
                  data-driven insights, and unwavering commitment to client success.
                </p>
              </motion.div>
            </motion.div>

            {/* Final CTA Section */}
            <motion.div
              variants={itemVariants}
              className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-white"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  >
                    <FaStar className="w-4 h-4" />
                  </motion.div>
                ))}
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
                Ready to Transform Your Business Strategy?
              </h3>
              <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                Let's develop a winning strategy that drives sustainable growth 
                and competitive advantage for your business.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-amber-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 relative z-10"
              >
                Start Strategic Consultation
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default StrategyConsulting;