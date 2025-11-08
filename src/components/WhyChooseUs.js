import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhyChooseUs = ({ mode = "digital-marketing" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const getThemeConfig = () => {
    if (mode === "digital-marketing") {
      return {
        gradient: "from-orange-600 to-red-600",
        lightGradient: "from-orange-500 to-red-500",
        bgFrom: "from-orange-50",
        bgVia: "via-white",
        bgTo: "to-red-50",
        orb1: "from-orange-100 to-red-100",
        orb2: "from-orange-50 to-amber-100",
        border: "border-orange-100",
        badgeText: "text-orange-700",
        badgeBorder: "border-orange-100",
        iconColor: "text-orange-600",
        buttonBg: "bg-orange-100",
        lineColor: "bg-orange-200",
        cardHover: "hover:border-orange-300",
        textGradient: "from-orange-600 to-red-600"
      };
    } else {
      return {
        gradient: "from-blue-600 to-purple-600",
        lightGradient: "from-blue-500 to-purple-500",
        bgFrom: "from-blue-50",
        bgVia: "via-white",
        bgTo: "to-purple-50",
        orb1: "from-blue-100 to-purple-100",
        orb2: "from-blue-50 to-cyan-100",
        border: "border-blue-100",
        badgeText: "text-blue-700",
        badgeBorder: "border-blue-100",
        iconColor: "text-blue-600",
        buttonBg: "bg-blue-100",
        lineColor: "bg-blue-200",
        cardHover: "hover:border-blue-300",
        textGradient: "from-blue-600 to-purple-600"
      };
    }
  };

  const themeConfig = getThemeConfig();

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

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  // Stats data based on mode
  const getStatsData = () => {
    if (mode === "digital-marketing") {
      return {
        projectsCompleted: "850+",
        clientsServed: "320+",
        projectsDescription: "Successful Campaigns",
        clientsDescription: "Satisfied Clients",
        additionalStats: [
          { value: "240%", label: "Average ROI Increase" },
          { value: "98%", label: "Client Retention Rate" }
        ]
      };
    } else {
      return {
        projectsCompleted: "1200+",
        clientsServed: "450+",
        projectsDescription: "IT Projects Delivered",
        clientsDescription: "Business Partners",
        additionalStats: [
          { value: "99.9%", label: "Uptime Guarantee" },
          { value: "24/7", label: "Support Available" }
        ]
      };
    }
  };

  // Image URLs based on mode
  const imageUrls = {
    "digital-marketing": "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "it-services": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  };

  const statsData = getStatsData();

  return (
    <section
      id="why-choose-us"
      className={`py-20 bg-gradient-to-br ${themeConfig.bgFrom} ${themeConfig.bgVia} ${themeConfig.bgTo} text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8`}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]" />
        
        {/* Gradient Orbs */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${themeConfig.orb1} rounded-full filter blur-3xl opacity-30`} />
        <div className={`absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r ${themeConfig.orb2} rounded-full filter blur-3xl opacity-30`} />
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
              Why Choose{" "}
              <span className={`bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent relative inline-block`}>
                {mode === "digital-marketing" ? "Our Marketing" : "Our IT"}
                <motion.div
                  className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r ${themeConfig.lightGradient} rounded-full`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
              <br />
              Services?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {mode === "digital-marketing" 
                ? "We combine data-driven strategies with creative excellence to deliver measurable results that drive your business growth and market presence."
                : "We deliver robust, scalable technology solutions with a focus on security, performance, and long-term value for your business."
              }
            </motion.p>
          </div>

          {/* Main Content - Image on Left, Text on Right */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            {/* Image Section */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <div className={`absolute -inset-4 bg-gradient-to-r ${themeConfig.gradient} rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-300`} />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={imageUrls[mode]} 
                    alt={mode === "digital-marketing" ? "Digital Marketing Team" : "IT Services Team"}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300`} />
                </div>
              </div>
            </motion.div>

            {/* Text Content Section */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/2"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {mode === "digital-marketing" 
                      ? "Transform Your Digital Presence" 
                      : "Build Future-Ready Technology Solutions"
                    }
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {mode === "digital-marketing"
                      ? "Our comprehensive digital marketing services are designed to elevate your brand, engage your audience, and drive sustainable growth through innovative strategies and data-driven insights."
                      : "From concept to deployment, we create technology solutions that not only solve today's challenges but also scale for tomorrow's opportunities with security and reliability at the core."
                    }
                  </p>
                </div>

                {/* Stats Section - Integrated into content flow */}
                <motion.div
                  variants={statsVariants}
                  className="grid grid-cols-2 gap-6 py-6 border-y border-gray-200"
                >
                  {/* Main Stats */}
                  <div className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent mb-2`}>
                      {statsData.projectsCompleted}
                    </div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                      {statsData.projectsDescription}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent mb-2`}>
                      {statsData.clientsServed}
                    </div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                      {statsData.clientsDescription}
                    </div>
                  </div>
                </motion.div>

                {/* Additional Stats */}
                <motion.div
                  variants={statsVariants}
                  className="grid grid-cols-2 gap-4"
                >
                  {statsData.additionalStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold ${themeConfig.badgeText} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-8 py-4 bg-gradient-to-r ${themeConfig.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition duration-300 mt-6`}
                >
                  Get Started Today
                </motion.button>
              </div>
            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;