import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ProcessStepCircle = ({
  step,
  title,
  index,
  isVisible,
  isHovered,
  theme,
}) => {
  const circleVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
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
        border: "border-orange-500/30",
        glow: "shadow-orange-500/25",
      };
    } else {
      return {
        gradient: "from-blue-500 to-purple-600",
        border: "border-blue-500/30",
        glow: "shadow-blue-500/25",
      };
    }
  };

  const colors = getThemeColors();

  return (
    <div className="flex flex-col items-center relative flex-1 group">
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className={`
          relative w-28 h-28 rounded-full flex items-center justify-center cursor-pointer 
          transition-all duration-500 z-10
          ${
            isHovered
              ? `bg-gradient-to-br ${colors.gradient} shadow-xl scale-110 ${colors.glow}`
              : "bg-white border-2 border-gray-200 shadow-lg"
          }
        `}
      >
        {/* Glow Ring */}
        {isHovered && (
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 rounded-full border-4 ${colors.border}`}
          />
        )}

        {/* STEP NUMBER ONLY */}
        <motion.span
          animate={{
            color: isHovered ? "#ffffff" : "#64748b",
            scale: isHovered ? 1.3 : 1,
          }}
          className="text-2xl font-bold transition-all duration-300"
        >
          {step}
        </motion.span>
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 10,
          color: isHovered ? "#1e293b" : "#64748b",
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="text-lg font-semibold mt-6 text-center max-w-32 leading-tight"
      >
        {title}
      </motion.h3>
    </div>
  );
};

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);

  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Hover logic
  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const stepWidth = rect.width / 5;
      const index = Math.floor(mouseX / stepWidth);

      if (index >= 0 && index < 5) setHoveredStep(index);
      else setHoveredStep(null);
    };

    const container = containerRef.current;

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", () => setHoveredStep(null));

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", () => setHoveredStep(null));
    };
  }, []);

  const steps = [
    { step: "01", title: "Requirement Analysis" },
    { step: "02", title: "Solution Design" },
    { step: "03", title: "Development & Integration" },
    { step: "04", title: "Testing & Quality" },
    { step: "05", title: "Deployment & Support" },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-20 bg-gradient-to-br from-gray-50 to-white text-gray-900"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* ✔ HEADER SECTION RESTORED */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl md:text-6xl font-bold mb-6"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Process
          </span>
        </motion.h2>

        {/* ✔ UNDERLINE RESTORED */}
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: 96 } : {}}
          transition={{ duration: 1 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"
        />

        {/* ✔ SUBTEXT RESTORED */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16"
        >
          A proven 5-step methodology that ensures{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
            exceptional results
          </span>{" "}
          for every project.
        </motion.p>

        {/* PROCESS FLOW */}
        <div className="relative" ref={containerRef}>
          {/* Line Background */}
          <div className="absolute top-16 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

          {/* Hover Line */}
          {hoveredStep !== null && (
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${((hoveredStep + 1) / 5) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 -z-10"
            />
          )}

          <div className="flex justify-between items-start px-4">
            {steps.map((s, i) => (
              <ProcessStepCircle
                key={i}
                {...s}
                index={i}
                isVisible={isVisible}
                isHovered={hoveredStep !== null && i <= hoveredStep}
                theme="it-services"
              />
            ))}
          </div>
        </div>

        {/* ✔ DESCRIPTION TEXT UNDER THE CIRCLES RESTORED */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center text-xl text-gray-600 max-w-4xl mx-auto"
        >
          We conduct comprehensive assessment of your technical needs, 
          infrastructure, and business objectives to build a solid foundation 
          for your project.
        </motion.p>

      </div>
    </section>
  );
};

export default Process;
