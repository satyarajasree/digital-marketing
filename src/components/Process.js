import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaLightbulb,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaPalette,
  FaCloud,
} from "react-icons/fa";

const ProcessStepCircle = ({ step, title, icon, index, isActive, isVisible, onClick, theme }) => {
  const [isHovered, setIsHovered] = useState(false);

  const circleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      },
    },
  };

  const iconVariants = {
    normal: { rotate: 0, scale: 1 },
    hover: { rotate: 5, scale: 1.1 },
    active: { rotate: 0, scale: 1.15 },
  };

  const getThemeColors = () => {
    if (theme === "digital-marketing") {
      return {
        gradient: "from-orange-500 to-red-500",
        text: "text-orange-600",
        hover: "hover:text-orange-700",
        bg: "bg-orange-500/20",
        border: "border-orange-500/30"
      };
    } else {
      return {
        gradient: "from-blue-500 to-purple-600",
        text: "text-blue-600",
        hover: "hover:text-blue-700",
        bg: "bg-blue-500/20",
        border: "border-blue-500/30"
      };
    }
  };

  const colors = getThemeColors();

  return (
    <div className="flex flex-col items-center relative flex-1">
      {/* Connecting Line - Only between circles */}
      {index < 4 && (
        <div className="absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 -z-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isActive ? "100%" : "0%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-full bg-gradient-to-r ${colors.gradient}`}
          />
        </div>
      )}

      {/* Step Circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onClick}
        className={`
          relative w-24 h-24 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 z-10
          ${isActive 
            ? `bg-gradient-to-br ${colors.gradient} shadow-2xl scale-110` 
            : "bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl"
          }
        `}
      >
        {/* Active Ring */}
        {isActive && (
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 rounded-full border-4 ${colors.border}`}
          />
        )}

        {/* Step Number */}
        <motion.div
          animate={{
            color: isActive ? "#ffffff" : isHovered ? (theme === "digital-marketing" ? "#ea580c" : "#3b82f6") : "#64748b",
            scale: isActive ? 1.2 : 1,
          }}
          className="text-sm font-bold mb-1 transition-colors duration-300"
        >
          {step}
        </motion.div>

        {/* Icon */}
        <motion.div
          variants={iconVariants}
          animate={isActive ? "active" : isHovered ? "hover" : "normal"}
          className={isActive ? "text-white" : colors.text}
        >
          {icon}
        </motion.div>

        {/* Progress Dot */}
        <motion.div
          animate={{ scale: isActive ? 1.5 : 1 }}
          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
            isActive ? "bg-green-500" : "bg-gray-300"
          }`}
        />
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : 10,
          color: isActive ? "#1e293b" : "#64748b"
        }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        className="text-lg font-semibold mt-4 text-center max-w-32"
      >
        {title}
      </motion.h3>
    </div>
  );
};

const Process = ({ mode = "digital-marketing" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  // Auto-rotate steps every 10 seconds
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 10000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Process data for different themes
  const processData = {
    "digital-marketing": [
      {
        step: "01",
        title: "Discovery & Analysis",
        description: "We begin with an in-depth analysis of your business objectives, target audience, and competitive landscape. Our team conducts comprehensive research to understand your unique challenges and opportunities.",
        icon: <FaSearch />,
      },
      {
        step: "02",
        title: "Strategy & Planning",
        description: "Based on our discovery findings, we develop a customized digital marketing strategy with clear objectives, KPIs, and timelines. We create a detailed roadmap for your online success.",
        icon: <FaChartLine />,
      },
      {
        step: "03",
        title: "Content Creation",
        description: "Our creative team develops compelling content that resonates with your audience and drives meaningful engagement across all digital channels.",
        icon: <FaPalette />,
      },
      {
        step: "04",
        title: "Campaign Execution",
        description: "We launch multi-channel marketing campaigns with precision targeting and optimized delivery to maximize your reach and engagement.",
        icon: <FaRocket />,
      },
      {
        step: "05",
        title: "Analysis & Growth",
        description: "We continuously analyze campaign performance and optimize strategies based on data insights to drive sustainable growth and maximize ROI.",
        icon: <FaUsers />,
      }
    ],
    "it-services": [
      {
        step: "01",
        title: "Requirement Analysis",
        description: "We conduct comprehensive assessment of your technical needs, infrastructure, and business objectives to build a solid foundation for your project.",
        icon: <FaSearch />,
      },
      {
        step: "02",
        title: "Solution Design",
        description: "Our architects design robust technical solutions with scalable infrastructure and future-proof technologies tailored to your specific needs.",
        icon: <FaLightbulb />,
      },
      {
        step: "03",
        title: "Development & Integration",
        description: "Our expert development team implements the solution using agile methodology with continuous integration and rigorous quality assurance.",
        icon: <FaCode />,
      },
      {
        step: "04",
        title: "Testing & Quality Assurance",
        description: "We conduct comprehensive testing across all platforms and environments to ensure flawless performance and security.",
        icon: <FaShieldAlt />,
      },
      {
        step: "05",
        title: "Deployment & Support",
        description: "We ensure seamless deployment with minimal downtime and provide ongoing technical support and maintenance services.",
        icon: <FaCloud />,
      }
    ]
  };

  const currentProcessData = processData[mode] || processData["digital-marketing"];

  const getThemeConfig = () => {
    if (mode === "digital-marketing") {
      return {
        gradient: "from-orange-600 to-red-600",
        lightGradient: "from-orange-500 to-red-500",
        bgFrom: "from-orange-500/5",
        bgTo: "to-orange-500/5",
        orbColor: "orange-500/5"
      };
    } else {
      return {
        gradient: "from-blue-600 to-purple-600",
        lightGradient: "from-blue-500 to-purple-500",
        bgFrom: "from-blue-500/5",
        bgTo: "to-blue-500/5",
        orbColor: "blue-500/5"
      };
    }
  };

  const themeConfig = getThemeConfig();

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
      id="process"
      className="relative py-20 bg-gradient-to-br from-gray-50 to-white text-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
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
            Our{" "}
            <span className={`bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent`}>
              Process
            </span>
          </motion.h2>

          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-1 bg-gradient-to-r ${themeConfig.lightGradient} mx-auto mb-8 rounded-full`}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            A proven 5-step methodology that ensures{" "}
            <span className={`bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent font-semibold`}>
              exceptional results
            </span>{" "}
            for every project
          </motion.p>
        </motion.div>

        {/* Process Steps Container */}
        <div className="relative">
          {/* Process Steps Circles */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="flex justify-between items-start relative px-4"
          >
            {currentProcessData.map((step, index) => (
              <ProcessStepCircle
                key={step.step}
                {...step}
                index={index}
                isActive={index === activeStep}
                isVisible={isVisible}
                onClick={() => setActiveStep(index)}
                theme={mode}
              />
            ))}
          </motion.div>
        </div>

        {/* Step Navigation Dots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center items-center gap-4 mt-12"
        >
          {currentProcessData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveStep(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`
                w-4 h-4 rounded-full transition-all duration-300 cursor-pointer
                ${
                  index === activeStep
                    ? `bg-gradient-to-r ${themeConfig.lightGradient} scale-125`
                    : "bg-gray-300 hover:bg-gray-400"
                }
              `}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;