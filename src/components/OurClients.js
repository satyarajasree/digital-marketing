import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OurClients = ({ mode = "home" }) => {
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

  // Real company logos for different industries
  const digitalMarketingClients = [
    { name: "Nike", logo: "NIKE", color: "from-red-500 to-red-600" },
    { name: "Coca-Cola", logo: "COCA-COLA", color: "from-red-600 to-red-700" },
    { name: "Apple", logo: "APPLE", color: "from-gray-600 to-gray-700" },
    { name: "Amazon", logo: "AMAZON", color: "from-orange-500 to-orange-600" },
    { name: "Google", logo: "GOOGLE", color: "from-blue-500 to-green-500" },
    { name: "Microsoft", logo: "MICROSOFT", color: "from-blue-600 to-blue-700" },
    { name: "Meta", logo: "META", color: "from-blue-800 to-purple-600" },
    { name: "Netflix", logo: "NETFLIX", color: "from-red-700 to-red-800" },
    { name: "Spotify", logo: "SPOTIFY", color: "from-green-500 to-green-600" },
    { name: "Adobe", logo: "ADOBE", color: "from-red-500 to-purple-600" },
    { name: "Uber", logo: "UBER", color: "from-black to-gray-800" },
    { name: "Airbnb", logo: "AIRBNB", color: "from-red-500 to-pink-500" },
  ];

  const itServicesClients = [
    { name: "IBM", logo: "IBM", color: "from-blue-500 to-blue-600" },
    { name: "Intel", logo: "INTEL", color: "from-blue-600 to-blue-700" },
    { name: "Cisco", logo: "CISCO", color: "from-blue-700 to-blue-800" },
    { name: "Oracle", logo: "ORACLE", color: "from-red-600 to-red-700" },
    { name: "Dell", logo: "DELL", color: "from-blue-800 to-blue-900" },
    { name: "HP", logo: "HP", color: "from-blue-500 to-blue-600" },
    { name: "SAP", logo: "SAP", color: "from-blue-600 to-blue-700" },
    { name: "Salesforce", logo: "SALESFORCE", color: "from-blue-400 to-blue-500" },
    { name: "VMware", logo: "VMWARE", color: "from-blue-600 to-blue-700" },
    { name: "Accenture", logo: "ACCENTURE", color: "from-pink-600 to-purple-600" },
    { name: "Infosys", logo: "INFOSYS", color: "from-blue-700 to-blue-800" },
    { name: "TCS", logo: "TCS", color: "from-blue-800 to-blue-900" },
  ];

  // Get appropriate clients based on mode
  const getClients = () => {
    if (mode === "digital-marketing") {
      return digitalMarketingClients;
    } else if (mode === "it-services") {
      return itServicesClients;
    } else {
      return {
        digital: digitalMarketingClients,
        it: itServicesClients
      };
    }
  };

  const clients = getClients();

  // Duplicate arrays for seamless scrolling
  const getScrollingClients = (clientArray) => [...clientArray, ...clientArray];

  const getThemeConfig = () => {
    if (mode === "digital-marketing") {
      return {
        gradient: "from-orange-600 to-red-600",
        bg: "bg-gradient-to-br from-orange-50 via-white to-red-50",
        textColor: "text-gray-800",
        subtitleColor: "text-gray-600",
        cardBg: "bg-white/80",
        border: "border-orange-200",
        hoverBorder: "border-orange-400",
        overlayGradient: "from-orange-50 to-transparent"
      };
    } else if (mode === "it-services") {
      return {
        gradient: "from-blue-600 to-purple-600",
        bg: "bg-gradient-to-br from-blue-50 via-white to-purple-50",
        textColor: "text-gray-800",
        subtitleColor: "text-gray-600",
        cardBg: "bg-white/80",
        border: "border-blue-200",
        hoverBorder: "border-blue-400",
        overlayGradient: "from-blue-50 to-transparent"
      };
    } else {
      return {
        gradient: "from-amber-400 to-orange-400",
        bg: "bg-gray-900",
        textColor: "text-white",
        subtitleColor: "text-gray-300",
        cardBg: "bg-white/5",
        border: "border-white/10",
        hoverBorder: "border-amber-400/30",
        overlayGradient: "from-gray-900 to-transparent"
      };
    }
  };

  const themeConfig = getThemeConfig();

  return (
    <section
      id="our-clients"
      className={`py-20 ${themeConfig.bg} ${themeConfig.textColor} overflow-hidden relative rounded-3xl mx-4 my-8`}
    >
      {/* Background for home mode */}
      {mode === "home" && (
        <div className="absolute inset-0 bg-gray-900 rounded-3xl" />
      )}

      {/* Background pattern for marketing and IT modes */}
      {(mode === "digital-marketing" || mode === "it-services") && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]" />
          
          {/* Gradient Orbs */}
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${
            mode === "digital-marketing" ? "from-orange-100 to-red-100" : "from-blue-100 to-purple-100"
          } rounded-full filter blur-3xl opacity-30`} />
          <div className={`absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r ${
            mode === "digital-marketing" ? "from-orange-50 to-amber-100" : "from-blue-50 to-cyan-100"
          } rounded-full filter blur-3xl opacity-30`} />
        </div>
      )}

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
              <span className={`bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent`}>
                Clients
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className={`text-xl ${themeConfig.subtitleColor} max-w-2xl mx-auto`}
            >
              {mode === "home" 
                ? "Trusted by industry leaders and innovative companies worldwide"
                : mode === "digital-marketing"
                ? "Leading brands that trust our digital marketing expertise"
                : "Global enterprises that rely on our IT solutions"
              }
            </motion.p>
          </div>

          {/* Client Logos */}
          {mode === "home" ? (
            // Home Mode - Two scrolling rows
            <>
              {/* Digital Marketing Clients Row */}
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden mb-8"
              >
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
                    {getScrollingClients(clients.digital).map((client, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-center w-48 h-24 ${themeConfig.cardBg} backdrop-blur-sm rounded-xl border ${themeConfig.border} hover:border-orange-400/30 transition-all duration-300 hover:scale-105`}
                      >
                        <div className="text-center">
                          <div className="text-lg font-bold text-white mb-1">
                            {client.logo}
                          </div>
                          <div className="text-xs text-gray-400 font-medium">
                            {client.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
                <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${themeConfig.overlayGradient}`} />
                <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${themeConfig.overlayGradient}`} />
              </motion.div>

              {/* IT Services Clients Row */}
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden"
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
                    {getScrollingClients(clients.it).map((client, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-center w-48 h-24 ${themeConfig.cardBg} backdrop-blur-sm rounded-xl border ${themeConfig.border} hover:border-blue-400/30 transition-all duration-300 hover:scale-105`}
                      >
                        <div className="text-center">
                          <div className="text-lg font-bold text-white mb-1">
                            {client.logo}
                          </div>
                          <div className="text-xs text-gray-400 font-medium">
                            {client.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
                <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${themeConfig.overlayGradient}`} />
                <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${themeConfig.overlayGradient}`} />
              </motion.div>
            </>
          ) : (
            // Single Mode - One scrolling row for Digital Marketing or IT Services
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden"
            >
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
                  {getScrollingClients(clients).map((client, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center w-48 h-24 ${themeConfig.cardBg} backdrop-blur-sm rounded-xl border ${themeConfig.border} hover:${themeConfig.hoverBorder} transition-all duration-300 hover:scale-105 shadow-sm`}
                    >
                      <div className="text-center">
                        <div className={`text-lg font-bold ${
                          mode === "digital-marketing" ? "text-gray-800" : "text-gray-800"
                        } mb-1`}>
                          {client.logo}
                        </div>
                        <div className={`text-xs font-medium ${
                          mode === "digital-marketing" ? "text-gray-600" : "text-gray-600"
                        }`}>
                          {client.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${themeConfig.overlayGradient}`} />
              <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${themeConfig.overlayGradient}`} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;