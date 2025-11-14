import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaGoogle,
  FaHashtag,
  FaAd,
} from "react-icons/fa";

// Custom Icon Component for PNG images
const PngIcon = ({ src, alt, className = "w-8 h-8" }) => (
  <img src={src} alt={alt} className={className} />
);

const DigitalMarketingServiceCard = ({ title, description, icon, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Orange color scheme for digital marketing
  const colors = {
    gradient: "from-orange-500 to-orange-600",
    hoverGradient: "from-orange-500 to-red-500",
    light: "from-orange-500/20 to-red-500/20",
    text: "text-orange-500",
    border: "border-orange-500/50",
    iconBg: "bg-orange-500/10"
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const iconVariants = {
    normal: { rotate: 0, scale: 1 },
    hover: { rotate: 5, scale: 1.1 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Background Glow Effect */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        className={`absolute inset-0 bg-gradient-to-br ${colors.light} rounded-2xl blur-xl transition-opacity duration-500`}
      />

      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 overflow-hidden backdrop-blur-sm">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16" />
        </div>

        {/* Floating Particles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
          className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full"
        />

        <div className="relative z-10">
          {/* Icon Container */}
          <motion.div
            variants={iconVariants}
            animate={isHovered ? "hover" : "normal"}
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.iconBg} border ${colors.border} mb-6 relative overflow-hidden group/icon`}
          >
            {/* Icon Background Shine */}
            <motion.div
              animate={{ x: isHovered ? ["0%", "200%"] : "0%" }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
            />
            <motion.div
              className="text-2xl relative z-10"
              animate={{ 
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl font-bold text-white mb-4"
            animate={{ color: isHovered ? colors.text : "#ffffff" }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-300 leading-relaxed text-lg mb-6"
            animate={{ color: isHovered ? "#d1d5db" : "#9ca3af" }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0.7,
              x: isHovered ? 5 : 0,
            }}
            className={`flex items-center ${colors.text} font-semibold`}
          >
            Learn more
            <motion.div
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <FaArrowRight className="ml-2 w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>

        {/* Border Glow */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className={`absolute inset-0 rounded-2xl border-2 ${colors.border} pointer-events-none`}
        />
      </div>
    </motion.div>
  );
};

export const DigitalMarketingServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const servicesData = [
    {
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic with our comprehensive SEO strategies and technical optimization.",
      icon: <FaGoogle className="text-green-400" />,
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and build brand loyalty through strategic social media campaigns across all major platforms.",
      icon: <FaHashtag className="text-pink-400" />,
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that drives engagement, builds authority, and converts visitors into customers.",
      icon: <PngIcon src="https://cdn-icons-png.flaticon.com/512/3281/3281340.png" alt="Content Writing" className="w-7 h-7" />,
    },
    {
      title: "PPC Advertising",
      description: "Drive immediate results with targeted pay-per-click campaigns that maximize your advertising ROI and conversion rates.",
      icon: <FaAd className="text-yellow-400" />,
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns that drive engagement and sales.",
      icon: <PngIcon src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email Marketing" className="w-7 h-7" />,
    },
    {
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and performance reports that track your marketing success.",
      icon: <PngIcon src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Analytics" className="w-7 h-7" />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="digital-marketing-services"
      className="relative py-20 bg-black text-white overflow-hidden"
    >
      {/* Orange Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-500/5 to-transparent" />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Digital{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Marketing
            </span>
          </motion.h2>

          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-6xl mx-auto leading-relaxed"
          >
            Transform your digital presence with data-driven marketing strategies that{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold">
              drive measurable growth and ROI
            </span>
            .
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {servicesData.map((service, index) => (
              <DigitalMarketingServiceCard
                key={service.title}
                {...service}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl overflow-hidden group"
          >
            {/* Button Shine Effect */}
            <motion.div
              animate={{ x: ["0%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
            />
            <span className="relative z-10 flex items-center gap-2">
              Get Marketing Consultation
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight className="w-4 h-4" />
              </motion.div>
            </span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-gray-400 mt-4"
          >
            Ready to transform your digital presence? Let's discuss your project.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalMarketingServices;