import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaRocket,
  FaUsers,
  FaAward,
  FaLightbulb,
  FaChartLine,
  FaHandshake,
  FaStar,
  FaGlobe,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
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

  const stats = [
    { number: "8+", label: "Years Experience", icon: FaAward },
    { number: "500+", label: "Projects Completed", icon: FaCheckCircle },
    { number: "50+", label: "Team Experts", icon: FaUsers },
    { number: "99%", label: "Client Retention", icon: FaShieldAlt },
  ];

  const values = [
    {
      icon: FaRocket,
      title: "Innovation Driven",
      description:
        "Pioneering cutting-edge digital strategies that keep you ahead of the competition.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: FaChartLine,
      title: "Results Focused",
      description:
        "Data-driven approaches that deliver measurable ROI and business growth.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaHandshake,
      title: "Partnership Approach",
      description:
        "Building long-term relationships based on trust and mutual success.",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description:
        "Seasoned professionals with deep industry expertise and proven track records.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const services = [
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click Advertising",
    "Social Media Marketing",
    "Content Marketing",
    "Email Marketing",
    "Conversion Rate Optimization",
    "Marketing Analytics",
    "Brand Strategy",
  ];

  return (
    <>
      <Navbar />
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8"
      >
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
              {[FaStar, FaRocket, FaChartLine, FaUsers, FaAward][i % 5]({
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
                <FaAward className="w-5 h-5 text-amber-600 relative z-10" />
                <span className="text-sm font-medium text-amber-700 relative z-10 uppercase tracking-wide">
                  Industry Leaders Since 2016
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
              >
                About{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent relative inline-block">
                  Us
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
                We are a premier digital marketing agency dedicated to driving
                exceptional results through innovative strategies, data-driven
                insights, and unparalleled expertise.
              </motion.p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              {/* Left Content - Our Story */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-6 backdrop-blur-sm bg-white/70 rounded-2xl p-8 border border-amber-50 shadow-sm">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Founded in 2016,{" "}
                      <strong className="text-amber-600">DigitalPro</strong>{" "}
                      emerged from a simple observation: businesses were
                      struggling to navigate the rapidly evolving digital
                      landscape. We set out to bridge that gap by providing
                      expert guidance and results-driven solutions.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Today, we're a team of{" "}
                      <strong className="text-amber-600">
                        50+ dedicated professionals
                      </strong>
                      with diverse expertise across all digital marketing
                      disciplines. Our collaborative approach combines creative
                      thinking with analytical rigor to deliver campaigns that
                      drive real business impact.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      What sets us apart is our commitment to being{" "}
                      <strong className="text-amber-600">true partners</strong>
                      in our clients' success. We don't just execute campaigns;
                      we build strategies that align with your business
                      objectives and drive sustainable growth.
                    </p>
                  </div>
                </div>

                {/* Services Expertise */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-sm"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Expertise
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                          {service}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content - Stats & Values */}
              <div className="space-y-12">
                {/* Statistics */}
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 gap-6"
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

                {/* Values */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Our Values
                  </h3>
                  <div className="space-y-6">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -2, scale: 1.01 }}
                        className="flex items-start gap-4 p-6 rounded-2xl border border-amber-100 bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                        >
                          <value.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {value.title}
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

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
                  To empower businesses with data-driven digital marketing
                  strategies that deliver measurable results, drive sustainable
                  growth, and create lasting competitive advantages in today's
                  dynamic digital landscape.
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
                  To be the most trusted digital marketing partner for
                  businesses worldwide, recognized for our innovation,
                  integrity, and unwavering commitment to client success.
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12 relative overflow-hidden"
            >
              {/* Background Pattern */}
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
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                Join hundreds of satisfied clients who have achieved remarkable
                growth with our expert digital marketing solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-amber-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 relative z-10"
              >
                Start Your Project
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

export default AboutUs;
