import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaPalette,
  FaBrush,
  FaVectorSquare,
  FaEye,
  FaArrowRight,
  FaStar,
  FaCheck,
  FaCode,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GraphicsDesigning = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const features = [
    {
      icon: FaBrush,
      title: "Creative Design",
      description: "Unique and compelling visual concepts that tell your story",
    },
    {
      icon: FaVectorSquare,
      title: "Brand Identity",
      description: "Consistent branding across all visual elements",
    },
    {
      icon: FaPalette,
      title: "Visual Storytelling",
      description: "Designs that communicate and connect emotionally",
    },
    {
      icon: FaEye,
      title: "Pixel Perfect",
      description: "Attention to detail in every design element",
    },
  ];

  const services = [
    "Logo & Brand Identity",
    "Social Media Graphics", 
    "Marketing Materials",
    "UI/UX Design"
  ];

  return (
    <>
      <Navbar />
      <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full filter blur-3xl opacity-20"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full filter blur-3xl opacity-20"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-white/80 border border-amber-100 rounded-full px-6 py-3 mb-6 backdrop-blur-sm shadow-sm"
              >
                <FaCode className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-medium text-amber-700 uppercase tracking-wide">
                  Visual Excellence
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Graphics{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Designing
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              >
                Visual storytelling that captivates your audience and brings your brand to life through stunning designs.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg mb-4"
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Services & CTA */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              {/* Services */}
              <motion.div
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Design Services
                </h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-amber-50/50 hover:bg-amber-100/50 transition-colors duration-200"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium text-sm">
                        {service}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-white"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    >
                      <FaStar className="w-3 h-3" />
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                  Bring Your Vision to Life
                </h3>
                <p className="text-amber-100 text-sm mb-6 relative z-10">
                  Let's create stunning visuals that tell your story and captivate your audience.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-amber-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 relative z-10 text-sm"
                >
                  Start Design Project
                  <FaArrowRight className="w-3 h-3" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GraphicsDesigning;