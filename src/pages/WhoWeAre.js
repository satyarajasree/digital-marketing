import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaRocket,
  FaUsers,
  FaAward,
  FaChartLine,
  FaStar,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";
import image from '../anime/team.jpg'

const WhoWeAre = () => {
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

  // Smoother floating animations
  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const gentlePulseVariants = {
    pulse: {
      scale: [1, 1.02, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const values = [
    
  ];

 

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8"
    >
      {/* Refined Background Elements */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]" />
        
        {/* Smoother Gradient Orbs */}
        <motion.div
          variants={floatVariants}
          animate="float"
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full filter blur-3xl opacity-30"
        />
        <motion.div
          variants={floatVariants}
          animate="float"
          transition={{ delay: 1.5 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full filter blur-3xl opacity-30"
        />
        <motion.div
          variants={floatVariants}
          animate="float"
          transition={{ delay: 3 }}
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full filter blur-3xl opacity-30"
        />

        {/* Optimized Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-20"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              x: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%'
              ],
              y: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%'
              ],
              scale: [0, 1, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Subtle Floating Icons */}
        {[FaRocket, FaChartLine, FaUsers, FaGlobe, FaAward, FaShieldAlt].map((Icon, index) => (
          <motion.div
            key={index}
            variants={floatVariants}
            animate="float"
            transition={{ delay: index * 0.8 }}
            className="absolute text-amber-200 opacity-20"
            style={{
              left: `${15 + (index * 14)}%`,
              top: `${25 + (index % 3) * 25}%`,
            }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        ))}

        {/* Gentle Pulse Rings */}
        <motion.div
          variants={gentlePulseVariants}
          animate="pulse"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-amber-200 rounded-full"
        />
        <motion.div
          variants={gentlePulseVariants}
          animate="pulse"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-blue-200 rounded-full"
        />

        {/* Professional Light Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full filter blur-3xl"
        />
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
            >
              Who{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent relative inline-block">
                We Are
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
              A passionate team of digital innovators dedicated to transforming your business through cutting-edge marketing solutions
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content - Introduction */}
            <motion.div variants={itemVariants} className="space-y-6 relative">
              {/* Subtle floating elements */}
              <motion.div
                variants={floatVariants}
                animate="float"
                className="absolute -top-4 -left-4 w-6 h-6 bg-amber-300 rounded-full opacity-20"
              />
              <motion.div
                variants={floatVariants}
                animate="float"
                transition={{ delay: 1.2 }}
                className="absolute -bottom-4 -right-4 w-5 h-5 bg-blue-300 rounded-full opacity-20"
              />

             

              <div className="space-y-4 backdrop-blur-sm bg-white/70 rounded-2xl p-8 border border-amber-50 shadow-sm">
                <p className="text-amber-600 text-lg leading-relaxed">
  Technology Meets Creativity. Growth Meets Intelligence.
</p>

<p className="text-gray-700 text-lg leading-relaxed">
  Amplinova blends IT development, digital marketing, branding, and AI automation
  to build businesses that scale without limits. We turn your vision into
  intelligent, high-performance digital experiences that drive real growth.
</p>

<p className="text-amber-600 text-lg leading-relaxed">
  Amplify your vision. Accelerate your success!
</p>


              <p className="text-gray-700 text-lg leading-relaxed">
  <span className="text-amber-600 font-semibold">Our mission</span> is simple — 
  to empower organizations with next-gen technology, impactful creativity, and
  AI-driven automation that unlock real, measurable growth.
</p>

<p className="text-gray-700 text-lg leading-relaxed">
  <span className="text-amber-600 font-semibold">Our vision</span> is bold — to
  become a global leader in digital transformation and AI-powered innovation,
  helping companies redefine how they operate, connect, and scale.
</p>


               <p className="text-amber-600 text-lg leading-relaxed">
  Everything we do is built on four pillars:
</p>

<p className="text-gray-700 text-lg leading-relaxed">
  <span className="text-amber-600 font-semibold">Integrity</span> — honesty, transparency, and long-term relationships.
</p>

<p className="text-gray-700 text-lg leading-relaxed">
  <span className="text-amber-600 font-semibold">Innovation</span> — embracing change and pushing boundaries.
</p>

<p className="text-gray-700 text-lg leading-relaxed">
  <span className="text-amber-600 font-semibold">Excellence</span> — delivering quality without compromise.
</p>

<p className="text-gray-700 text-lg leading-relaxed">
  <span className="text-amber-600 font-semibold">Client Success</span> — because our achievements begin with yours.
</p>


<p className="text-gray-700 text-lg leading-relaxed">
  <span className="text-amber-600">
    "More Than a Service Provider — Your Growth Partner"
  </span>
  <br /><br />
</p>

              </div>

             
            </motion.div>

            {/* Right Content - Team Photo */}
            <motion.div variants={itemVariants} className="relative">
              {/* Enhanced border animation */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 p-0.5 -z-10 opacity-80"
              >
                <div className="w-full h-full rounded-3xl bg-transparent" />
              </motion.div>

              {/* Main Team Photo Container */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl p-3 border border-amber-100 shadow-lg overflow-hidden backdrop-blur-sm"
              >
                {/* Team Photo */}
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <motion.img
                    src={image}
                    alt="DigitalPro Team - Professional Digital Marketing Experts"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />

                  {/* Refined stars overlay */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-amber-300"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.6, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                      }}
                    >
                      <FaStar className="w-1.5 h-1.5" />
                    </motion.div>
                  ))}
                </div>

                {/* Professional corner accents */}
                <motion.div
                  className="absolute top-3 right-3 w-3 h-3 border-t border-r border-amber-400"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-orange-400"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />
              </motion.div>

              {/* Background Glow */}
              <motion.div
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-amber-200 to-orange-200 rounded-3xl blur-2xl -z-20 opacity-30"
              />
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center shadow-lg mb-4`}
                >
                  <value.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;