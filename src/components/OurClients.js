import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OurClients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Client logos array
  const clientLogos = [
    { name: "TechNova", logo: "TN" },
    { name: "UrbanStyle", logo: "US" },
    { name: "HealthPlus", logo: "HP" },
    { name: "EduSmart", logo: "ES" },
    { name: "FinSecure", logo: "FS" },
    { name: "BuildRight", logo: "BR" },
    { name: "CloudSync", logo: "CS" },
    { name: "DataFlow", logo: "DF" },
    { name: "MetaCore", logo: "MC" },
    { name: "SwiftPay", logo: "SP" },
    { name: "NexGen", logo: "NG" },
    { name: "AlphaTech", logo: "AT" },
  ];

  // Duplicate the array for seamless scrolling
  const scrollingLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      id="our-clients"
      className="py-20 bg-gray-900 text-white overflow-hidden relative"
    >
      {/* Simple Dark Background */}
      <div className="absolute inset-0 bg-gray-900" />

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
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Clients
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Trusted by industry leaders and innovative companies worldwide
            </motion.p>
          </div>

          {/* Scrolling Logos Container */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden"
          >
            {/* Scrolling Logos */}
            <div className="flex space-x-8 py-8">
              <motion.div
                className="flex space-x-8 flex-none"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {scrollingLogos.map((client, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-48 h-24 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {client.logo}
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        {client.name}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient Overlays for Smooth Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent" />
          </motion.div>

          {/* Second Row - Reverse Scroll */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden mt-8"
          >
            <div className="flex space-x-8 py-8">
              <motion.div
                className="flex space-x-8 flex-none"
                animate={{
                  x: [-1920, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 35,
                    ease: "linear",
                  },
                }}
              >
                {scrollingLogos.reverse().map((client, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-48 h-24 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {client.logo}
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        {client.name}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient Overlays for Smooth Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;