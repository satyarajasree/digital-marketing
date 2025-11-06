import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaHeart,
  FaGraduationCap,
  FaChartLine,
  FaServer,
  FaStethoscope,
  FaRocket,
  FaCog
} from "react-icons/fa";

const IndustryCard = ({ title, description, icon, index, mode }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getThemeColors = () => {
    if (mode === "digital-marketing") {
      return {
        gradient: "from-orange-500 to-red-500",
        hoverGradient: "from-orange-600 to-red-600",
        text: "text-orange-500",
        border: "border-orange-500/30",
        glow: "from-orange-500/20 to-red-500/20"
      };
    } else {
      return {
        gradient: "from-blue-500 to-purple-600",
        hoverGradient: "from-blue-600 to-purple-700",
        text: "text-blue-500",
        border: "border-blue-500/30",
        glow: "from-blue-500/20 to-purple-500/20"
      };
    }
  };

  const colors = getThemeColors();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        y: -8
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Background Glow Effect */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        className={`absolute inset-0 bg-gradient-to-br ${colors.glow} rounded-xl blur-xl transition-opacity duration-500 -z-10`}
      />

      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 backdrop-blur-sm overflow-hidden">
        {/* Animated Border */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className={`absolute inset-0 rounded-xl border-2 ${colors.border} pointer-events-none`}
        />

        {/* Floating Icon */}
        <motion.div
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} mb-6 relative overflow-hidden`}
        >
          {/* Icon Shine Effect */}
          <motion.div
            animate={{ x: isHovered ? ["0%", "200%"] : "0%" }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
          />
          <div className="text-white text-2xl relative z-10">{icon}</div>
        </motion.div>

        {/* Content */}
        <motion.h3
          animate={{ color: isHovered ? colors.text.replace('text-', '#') : "#ffffff" }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300"
        >
          {title}
        </motion.h3>

        <motion.p
          animate={{ color: isHovered ? "#d1d5db" : "#9ca3af" }}
          transition={{ duration: 0.3 }}
          className="text-gray-300 leading-relaxed text-lg"
        >
          {description}
        </motion.p>

        {/* Hover Indicator */}
        <motion.div
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.4 }}
          className={`h-1 bg-gradient-to-r ${colors.gradient} mt-4 rounded-full`}
        />
      </div>
    </motion.div>
  );
};

const Industries = ({ mode = "digital-marketing" }) => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Industries data for both modes
  const industriesData = {
    "digital-marketing": [
      {
        title: "E-commerce & Retail",
        description: "Drive online sales and customer engagement with targeted digital marketing strategies tailored for retail businesses.",
        icon: <FaShoppingCart />
      },
      {
        title: "Healthcare & Wellness",
        description: "Build trust and reach patients with compliant digital marketing solutions for healthcare providers and wellness brands.",
        icon: <FaHeart />
      },
      {
        title: "Technology & SaaS",
        description: "Showcase innovation and drive B2B growth with specialized digital marketing for tech companies and SaaS platforms.",
        icon: <FaRocket />
      },
      {
        title: "Finance & Banking",
        description: "Establish credibility and attract clients with secure, results-driven digital marketing for financial institutions.",
        icon: <FaChartLine />
      },
      {
        title: "Education & E-Learning",
        description: "Reach students and promote courses with effective digital marketing strategies for educational institutions.",
        icon: <FaGraduationCap />
      }
    ],
    "it-services": [
      {
        title: "FinTech & Banking",
        description: "Develop secure financial technology solutions with banking integrations, compliance features, and advanced security.",
        icon: <FaServer />
      },
      {
        title: "Healthcare IT",
        description: "Build compliant healthcare software with EHR integration, telemedicine capabilities, and patient management systems.",
        icon: <FaStethoscope />
      },
      {
        title: "E-commerce Platforms",
        description: "Create scalable e-commerce solutions with advanced features, payment integrations, and inventory management.",
        icon: <FaShoppingCart />
      },
      {
        title: "EdTech & E-Learning",
        description: "Develop innovative education technology platforms with LMS integration and interactive learning experiences.",
        icon: <FaGraduationCap />
      },
      {
        title: "Enterprise Solutions",
        description: "Build robust enterprise software with CRM integration, workflow automation, and advanced analytics.",
        icon: <FaCog />
      }
    ]
  };

  const currentIndustries = industriesData[mode] || industriesData["digital-marketing"];

  const getThemeConfig = () => {
    if (mode === "digital-marketing") {
      return {
        gradient: "from-orange-600 to-red-600",
        lightGradient: "from-orange-500 to-red-500",
        bgFrom: "from-orange-500/10",
        bgTo: "to-red-500/10",
        orbColor: "orange-500/5"
      };
    } else {
      return {
        gradient: "from-blue-600 to-purple-600",
        lightGradient: "from-blue-500 to-purple-500",
        bgFrom: "from-blue-500/10",
        bgTo: "to-purple-500/10",
        orbColor: "blue-500/5"
      };
    }
  };

  const themeConfig = getThemeConfig();

  return (
    <section 
      ref={sectionRef}
      id="industries" 
      className="relative py-20 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${themeConfig.bgFrom} to-transparent`} />
        <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t ${themeConfig.bgTo} to-transparent`} />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-${themeConfig.orbColor} rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-${themeConfig.orbColor} rounded-full blur-3xl`}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Industry{" "}
            <span className={`bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent`}>
              Expertise
            </span>
          </motion.h2>

          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 120 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-1 bg-gradient-to-r ${themeConfig.lightGradient} mx-auto mb-8 rounded-full`}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Specialized {mode === "digital-marketing" ? "digital marketing" : "IT"} solutions for{" "}
            <span className={`bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent font-semibold`}>
              diverse industries
            </span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {currentIndustries.map((industry, index) => (
            <IndustryCard 
              key={industry.title} 
              {...industry} 
              index={index} 
              mode={mode}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative bg-gradient-to-r ${themeConfig.lightGradient} text-white px-8 py-4 rounded-xl font-semibold text-lg 
              transition-all duration-300 hover:shadow-2xl shadow-lg overflow-hidden group
            `}
          >
            {/* Button Shine Effect */}
            <motion.div
              animate={{ x: ["0%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
            />
            <span className="relative z-10">
              Explore {mode === "digital-marketing" ? "Marketing" : "IT"} Solutions
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;