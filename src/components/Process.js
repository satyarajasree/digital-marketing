import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ProcessStepCircle = ({ step, title, description, icon, index, isActive, isVisible, onClick, theme, isCompleted, isHovered }) => {
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

  const getThemeColors = () => {
    if (theme === "digital-marketing") {
      return {
        gradient: "from-orange-500 to-red-500",
        lightGradient: "from-orange-400 to-red-400",
        text: "text-orange-600",
        bg: "bg-orange-500/20",
        border: "border-orange-500/30",
        glow: "shadow-orange-500/25"
      };
    } else {
      return {
        gradient: "from-blue-500 to-purple-600",
        lightGradient: "from-blue-400 to-purple-500",
        text: "text-blue-600",
        bg: "bg-blue-500/20",
        border: "border-blue-500/30",
        glow: "shadow-blue-500/25"
      };
    }
  };

  const colors = getThemeColors();

  return (
    <div className="flex flex-col items-center relative flex-1 group">
      {/* Step Circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        onClick={onClick}
        className={`
          relative w-28 h-28 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-500 z-10
          ${isActive 
            ? `bg-gradient-to-br ${colors.gradient} shadow-2xl scale-110 ${colors.glow}` 
            : isCompleted
            ? `bg-gradient-to-br ${colors.gradient} shadow-xl scale-105 ${colors.glow}`
            : "bg-white border-2 border-gray-200 shadow-lg"
          }
          ${isHovered && !isActive && !isCompleted ? "scale-105 shadow-xl border-gray-300" : ""}
        `}
      >
        {/* Active Ring */}
        {isActive && (
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 rounded-full border-4 ${colors.border}`}
          />
        )}

        {/* Hover Ring */}
        {isHovered && !isActive && !isCompleted && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`absolute inset-0 rounded-full border-2 ${colors.border}`}
          />
        )}

        {/* Step Number */}
        <motion.span
          animate={{
            color: isActive || isCompleted ? "#ffffff" : isHovered ? (theme === "digital-marketing" ? "#ea580c" : "#3b82f6") : "#64748b",
            scale: isActive ? 1.3 : isCompleted ? 1.1 : isHovered ? 1.1 : 1,
          }}
          className="text-2xl font-bold transition-all duration-300"
        >
          {step}
        </motion.span>

        {/* Progress Dot */}
        <motion.div
          animate={{ scale: isActive ? 1.8 : isCompleted ? 1.4 : isHovered ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
            isActive ? "bg-green-500 shadow-lg" : 
            isCompleted ? "bg-green-400 shadow-md" : 
            isHovered ? "bg-gray-400" : "bg-gray-300"
          }`}
        />

        {/* Checkmark for completed steps */}
        {isCompleted && !isActive && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
        )}
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : 10,
          color: isActive ? "#1e293b" : isCompleted ? "#374151" : isHovered ? "#374151" : "#64748b",
          scale: isActive ? 1.05 : isCompleted ? 1.02 : isHovered ? 1.02 : 1
        }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="text-lg font-semibold mt-6 text-center max-w-32 leading-tight transition-colors duration-300"
      >
        {title}
      </motion.h3>
    </div>
  );
};

const Process = ({ mode = "digital-marketing" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

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

  // Auto-rotate steps every 8 seconds
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 8000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Handle mouse movement for hover effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const mouseX = e.clientX - containerRect.left;
      
      // Calculate which step is being hovered based on mouse position
      const stepWidth = containerWidth / 5;
      const hoveredIndex = Math.floor(mouseX / stepWidth);
      
      if (hoveredIndex >= 0 && hoveredIndex < 5) {
        setHoveredStep(hoveredIndex);
      } else {
        setHoveredStep(null);
      }
    };

    const handleMouseLeave = () => {
      setHoveredStep(null);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Process data with PNG image URLs
  const processData = {
    "digital-marketing": [
      {
        step: "01",
        title: "Discovery & Analysis",
        description: "We begin with an in-depth analysis of your business objectives, target audience, and competitive landscape. Our team conducts comprehensive research to understand your unique challenges and opportunities.",
        icon: "https://cdn-icons-png.flaticon.com/512/2910/2910765.png",
      },
      {
        step: "02",
        title: "Strategy & Planning",
        description: "Based on our discovery findings, we develop a customized digital marketing strategy with clear objectives, KPIs, and timelines. We create a detailed roadmap for your online success.",
        icon: "https://cdn-icons-png.flaticon.com/512/993/993796.png",
      },
      {
        step: "03",
        title: "Content Creation",
        description: "Our creative team develops compelling content that resonates with your audience and drives meaningful engagement across all digital channels.",
        icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      },
      {
        step: "04",
        title: "Campaign Execution",
        description: "We launch multi-channel marketing campaigns with precision targeting and optimized delivery to maximize your reach and engagement.",
        icon: "https://cdn-icons-png.flaticon.com/512/2692/2692887.png",
      },
      {
        step: "05",
        title: "Analysis & Growth",
        description: "We continuously analyze campaign performance and optimize strategies based on data insights to drive sustainable growth and maximize ROI.",
        icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
      }
    ],
    "it-services": [
      {
        step: "01",
        title: "Requirement Analysis",
        description: "We conduct comprehensive assessment of your technical needs, infrastructure, and business objectives to build a solid foundation for your project.",
        icon: "https://cdn-icons-png.flaticon.com/512/2910/2910765.png",
      },
      {
        step: "02",
        title: "Solution Design",
        description: "Our architects design robust technical solutions with scalable infrastructure and future-proof technologies tailored to your specific needs.",
        icon: "https://cdn-icons-png.flaticon.com/512/2010/2010995.png",
      },
      {
        step: "03",
        title: "Development & Integration",
        description: "Our expert development team implements the solution using agile methodology with continuous integration and rigorous quality assurance.",
        icon: "https://cdn-icons-png.flaticon.com/512/2920/2920241.png",
      },
      {
        step: "04",
        title: "Testing & Quality",
        description: "We conduct comprehensive testing across all platforms and environments to ensure flawless performance and security.",
        icon: "https://cdn-icons-png.flaticon.com/512/4264/4264909.png",
      },
      {
        step: "05",
        title: "Deployment & Support",
        description: "We ensure seamless deployment with minimal downtime and provide ongoing technical support and maintenance services.",
        icon: "https://cdn-icons-png.flaticon.com/512/1078/1078955.png",
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
        orbColor: "orange-500/5",
        hoverGradient: "from-orange-500 to-red-500"
      };
    } else {
      return {
        gradient: "from-blue-600 to-purple-600",
        lightGradient: "from-blue-500 to-purple-500",
        bgFrom: "from-blue-500/5",
        bgTo: "to-blue-500/5",
        orbColor: "blue-500/5",
        hoverGradient: "from-blue-500 to-purple-500"
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

  // Helper function to check if a step is completed
  const isStepCompleted = (index) => {
    return index < activeStep;
  };

  // Helper function to check if a step is hovered
  const isStepHovered = (index) => {
    return hoveredStep === index;
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
        <div className="relative" ref={containerRef}>
          {/* Connecting Lines Container */}
          <div className="absolute top-16 left-0 w-full h-0.5 -z-10">
            {/* Base Line */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200" />
            
            {/* Completed Steps Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(activeStep / 4) * 100}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-full bg-gradient-to-r ${themeConfig.gradient}`}
            />
            
            {/* Hover Line */}
            {hoveredStep !== null && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((hoveredStep + 1) / 5) * 100}%` }}
                transition={{ duration: 0.3 }}
                className={`h-full bg-gradient-to-r ${themeConfig.lightGradient} opacity-60`}
              />
            )}
          </div>

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
                isCompleted={isStepCompleted(index)}
                isHovered={isStepHovered(index)}
                isVisible={isVisible}
                onClick={() => setActiveStep(index)}
                theme={mode}
              />
            ))}
          </motion.div>
        </div>

        {/* Active Step Description */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
          >
            {currentProcessData[activeStep].description}
          </motion.p>
        </motion.div>  
      </div>
    </section>
  );
};

export default Process;