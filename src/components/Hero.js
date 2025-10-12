import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight, FaChartLine, FaUsers, FaHeadset } from 'react-icons/fa';
import Lottie from 'lottie-react';
import anime from '../anime/hero-anime1.json'

// You'll need to import your Lottie JSON file - you can get one from LottieFiles.com
// For now, I'll create a placeholder. Replace this with your actual Lottie JSON
const analyticsAnimation = {
  // This is a simplified representation - replace with actual Lottie JSON
  v: "5.5.2",
  fr: 60,
  ip: 0,
  op: 180,
  w: 500,
  h: 500,
  nm: "Analytics Animation",
  ddd: 0,
  assets: [],
  layers: []
};

// Alternative: You can use a Lottie URL from LottieFiles
const LOTTIE_URL = "https://assets1.lottiefiles.com/packages/lf20_ukwyvzqf.json";

const Hero = () => {
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

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const stats = [
   
  ];

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* White Grid Pattern - More Visible */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Subtle Animated Grid Lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.03)_100%)] bg-[size:100px_100px]"
        />
        
        {/* Animated Grid Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"
        />

        {/* Subtle Glow Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300">Trusted by 250+ Companies Worldwide</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Transform Your{' '}
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent relative">
                  Digital Presence
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                  />
                </span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
              >
                Drive <span className="text-orange-400 font-semibold">measurable growth</span> with cutting-edge digital marketing strategies that deliver exceptional ROI and sustainable business success.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(255, 107, 53, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Journey
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <FaPlay className="w-4 h-4 ml-1" />
                  </div>
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.text}
                    variants={floatVariants}
                    animate="float"
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="text-center p-6 bg-gray-800 bg-opacity-50 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-orange-500 transition-all duration-300 group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm font-medium">{stat.text}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative flex items-center justify-center"
            >
              {/* Lottie Animation Container */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border border-gray-700 shadow-2xl backdrop-blur-sm"
              >
               

              

                {/* Lottie Animation */}
                <div className="relative z-0">
                  <Lottie
                    animationData={anime}
                    // Alternatively, use this for URL:
                    // src={LOTTIE_URL}
                    loop={true}
                    autoplay={true}
                    style={{ 
                      width: '100%', 
                      height: 400,
                      maxWidth: '500px'
                    }}
                    rendererSettings={{
                      preserveAspectRatio: 'xMidYMid slice'
                    }}
                  />
                  
                  
                </div>

                {/* Animation Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="text-center mt-6 pt-6 border-t border-gray-700"
                >
                  <h3 className="text-white font-bold text-lg mb-2">Real-time Performance Tracking</h3>
                  <p className="text-gray-400 text-sm">
                    Watch your business metrics grow with our advanced analytics and data-driven strategies
                  </p>
                </motion.div>
              </motion.div>

              {/* Background Glow Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute inset-0 bg-white rounded-3xl blur-3xl -z-10"
              />

              {/* Animated Particles */}
              <div className="absolute inset-0 -z-10">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                    initial={{
                      x: Math.random() * 400 - 200,
                      y: Math.random() * 400 - 200,
                      scale: 0
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
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
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-1 bg-gray-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;