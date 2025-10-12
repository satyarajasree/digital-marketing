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
        staggerChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  // Floating animation for background elements
  const floatVariants = {
    float: {
      y: [-15, 15, -15],
      rotate: [0, 3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const values = [
    {
      icon: FaRocket,
      title: "Innovation First",
      description: "We stay ahead of digital trends to deliver cutting-edge solutions that keep you competitive.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: FaUsers,
      title: "Client-Centric",
      description: "Your success is our priority. We build partnerships, not just client relationships.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: FaChartLine,
      title: "Data-Driven",
      description: "Every decision is backed by analytics and measurable results for maximum ROI.",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: FaHandshake,
      title: "Transparency",
      description: "Clear communication and honest reporting build the trust our partnerships are built on.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const teamStats = [
    { number: "8+", label: "Years Experience", icon: FaAward },
    { number: "50+", label: "Experts Team", icon: FaUsers },
    { number: "15+", label: "Countries Served", icon: FaGlobe },
    { number: "99%", label: "Client Retention", icon: FaShieldAlt }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-amber-50 via-cream-100 to-orange-50 text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8"
    >
      {/* Enhanced Background Elements for Light Theme */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]" />
        
        {/* Moving Gradient Orbs - Light Colors */}
        <motion.div
          variants={floatVariants}
          animate="float"
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full filter blur-3xl opacity-40"
        />
        <motion.div
          variants={floatVariants}
          animate="float"
          transition={{ delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full filter blur-3xl opacity-40"
        />
        <motion.div
          variants={floatVariants}
          animate="float"
          transition={{ delay: 4 }}
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-40"
        />

        {/* Animated Particles - Dark for contrast */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-600 rounded-full opacity-20"
            initial={{
              x: Math.random() * 100 - 50 + '%',
              y: Math.random() * 100 - 50 + '%',
              scale: 0,
            }}
            animate={{
              x: [
                Math.random() * 100 - 50 + '%',
                Math.random() * 100 - 50 + '%',
                Math.random() * 100 - 50 + '%'
              ],
              y: [
                Math.random() * 100 - 50 + '%',
                Math.random() * 100 - 50 + '%',
                Math.random() * 100 - 50 + '%'
              ],
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating Icons - Subtle */}
        {[FaRocket, FaChartLine, FaUsers, FaGlobe, FaAward, FaShieldAlt].map((Icon, index) => (
          <motion.div
            key={index}
            variants={floatVariants}
            animate="float"
            transition={{ delay: index * 0.5 }}
            className="absolute text-amber-300 opacity-30"
            style={{
              left: `${20 + (index * 12)}%`,
              top: `${30 + (index % 3) * 20}%`,
            }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        ))}

        {/* Pulse Rings - Subtle */}
        <motion.div
          variants={pulseVariants}
          animate="pulse"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-amber-300 rounded-full"
        />
        <motion.div
          variants={pulseVariants}
          animate="pulse"
          transition={{ delay: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-300 rounded-full"
        />

        {/* Additional Light Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-10 right-10 w-48 h-48 bg-white rounded-full filter blur-2xl"
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
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white bg-opacity-70 border border-amber-200 rounded-full px-6 py-3 mb-6 backdrop-blur-sm relative overflow-hidden shadow-lg"
            >
              {/* Animated background for badge */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-20"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              <FaAward className="w-5 h-5 text-amber-600 relative z-10" />
              <span className="text-sm font-semibold text-amber-800 relative z-10">
                Trusted Digital Partner Since 2024
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
            >
              Who{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent relative">
                We Are
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </span>
            </motion.h2>

          
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content - Introduction */}
            <motion.div variants={itemVariants} className="space-y-6 relative">
              {/* Floating elements around content */}
              <motion.div
                variants={floatVariants}
                animate="float"
                className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400 rounded-full opacity-30"
              />
              <motion.div
                variants={floatVariants}
                animate="float"
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400 rounded-full opacity-30"
              />

              <div className="flex items-center gap-4 mb-6 relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25"
                >
                  <FaLightbulb className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800">Meet Our Team</h3>
              </div>

              <div className="space-y-4 backdrop-blur-sm bg-white bg-opacity-70 rounded-2xl p-6 border border-amber-100 shadow-lg">
                <p className="text-gray-700 text-lg leading-relaxed">
                  At DigitalPro, we're more than just marketers - we're a diverse
                  collective of
                  <span className="text-amber-600 font-semibold">
                    {" "}
                    creative thinkers, data scientists, and digital strategists{" "}
                  </span>{" "}
                  united by a common passion for driving business growth through
                  innovative digital solutions.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Our team brings together{" "}
                  <span className="text-amber-600 font-semibold">
                    8+ years of industry experience
                  </span>{" "}
                  across every digital discipline. From SEO specialists and
                  content creators to PPC experts and social media managers, we've
                  assembled the perfect blend of talent to tackle any digital
                  challenge.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  What sets us apart is our{" "}
                  <span className="text-amber-600 font-semibold">
                    collaborative approach
                  </span>{" "}
                  and commitment to continuous learning. We're constantly
                  evolving, testing new strategies, and pushing the boundaries of
                  what's possible in digital marketing.
                </p>
              </div>

             
            </motion.div>

            {/* Right Content - Team Photo */}
            <motion.div variants={itemVariants} className="relative">
              {/* Animated border around the photo container */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 p-1 -z-10"
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                <div className="w-full h-full rounded-3xl bg-transparent" />
              </motion.div>

              {/* Main Team Photo Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-white to-amber-50 rounded-3xl p-4 border border-amber-200 shadow-2xl overflow-hidden backdrop-blur-sm"
              >
                {/* Team Photo */}
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <motion.img
                    src={image}
                    alt="DigitalPro Team - Professional Digital Marketing Experts"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Light Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-50 via-transparent to-transparent opacity-30" />

                  {/* Floating stars overlay */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-amber-400"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    >
                      <FaStar className="w-2 h-2" />
                    </motion.div>
                  ))}
                </div>

                {/* Animated corner accents */}
                <motion.div
                  className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-orange-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.div>

              {/* Background Glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-300 rounded-3xl blur-3xl -z-20 opacity-40"
              />
            </motion.div>
          </div>

        
          

          
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;