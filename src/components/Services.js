import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBullhorn, FaChartLine, FaEnvelopeOpenText, FaSearch, FaShoppingCart,
  FaCode, FaCloud, FaShieldAlt, FaMobile, FaServer, FaDatabase, FaLaptopCode,
  FaArrowRight, FaStar, FaRocket, FaUsers, FaLightbulb, FaSync
} from 'react-icons/fa';

const ServiceCard = ({ title, description, icon, index, isVisible, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconVariants = {
    normal: { rotate: 0, scale: 1 },
    hover: { rotate: 5, scale: 1.1 }
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
        className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-2xl blur-xl transition-opacity duration-500"
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
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
          className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full"
        />
        
        <div className="relative z-10">
          {/* Icon Container */}
          <motion.div
            variants={iconVariants}
            animate={isHovered ? "hover" : "normal"}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 mb-6 relative overflow-hidden"
          >
            {/* Icon Background Shine */}
            <motion.div
              animate={{ x: isHovered ? ['0%', '200%'] : '0%' }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
            />
            <div className="text-white text-2xl relative z-10">
              {icon}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h3 
            className="text-2xl font-bold text-white mb-4"
            animate={{ color: isHovered ? '#f97316' : '#ffffff' }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-gray-300 leading-relaxed text-lg mb-6"
            animate={{ color: isHovered ? '#d1d5db' : '#9ca3af' }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>

        

          {/* CTA Button */}
          <motion.div
            animate={{ 
              opacity: isHovered ? 1 : 0.7,
              x: isHovered ? 5 : 0
            }}
            className="flex items-center text-orange-500 font-semibold"
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
          className="absolute inset-0 rounded-2xl border-2 border-orange-500/50 pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

const Services = ({ mode = "combined" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('digital-marketing');
  const [hoveredCategory, setHoveredCategory] = useState(null);
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

  // Enhanced services data with mode support
  const servicesData = {
    'digital-marketing': [
      {
        title: "Digital Strategy & Consulting",
        description: "Develop data-driven strategies that align your business goals with measurable results and sustainable growth.",
        icon: <FaChartLine />,
        
      },
      {
        title: "Social Media Marketing",
        description: "Build engaging social media campaigns that increase brand awareness and drive meaningful customer interactions.",
        icon: <FaBullhorn />,
       
      },
      {
        title: "Search Engine Optimization",
        description: "Improve your online visibility and attract quality traffic with our advanced SEO optimization techniques.",
        icon: <FaSearch />,
        
      },
      {
        title: "Content Marketing",
        description: "Create compelling content that resonates with your audience and drives engagement across all channels.",
        icon: <FaEnvelopeOpenText />,
       
      },
      {
        title: "Email Marketing",
        description: "Engage customers and boost conversions through personalized, data-backed email marketing campaigns.",
        icon: <FaUsers />,
        
      },
      {
        title: "PPC Advertising",
        description: "Drive immediate results with targeted pay-per-click campaigns that maximize your advertising ROI.",
        icon: <FaShoppingCart />,
        
      }
    ],
    'it-services': [
      {
        title: "Web Development",
        description: "Build fast, secure, and scalable websites and web applications with modern technologies and best practices.",
        icon: <FaCode />,
        
      },
      {
        title: "Mobile App Development",
        description: "Create intuitive and powerful mobile applications for iOS and Android that enhance user experience.",
        icon: <FaMobile />,
        
      },
      {
        title: "Cloud Solutions",
        description: "Leverage cloud technology with scalable infrastructure, migration services, and cloud optimization.",
        icon: <FaCloud />,
        
      },
      {
        title: "Cyber Security",
        description: "Protect your digital assets with comprehensive security solutions, threat detection, and risk assessment.",
        icon: <FaShieldAlt />,
       
      },
      {
        title: "IT Infrastructure",
        description: "Design and implement robust IT infrastructure solutions that support your business growth and operations.",
        icon: <FaServer />,
       
      },
      {
        title: "Database Management",
        description: "Optimize and manage your databases for performance, security, and seamless data operations.",
        icon: <FaDatabase />,
        
      }
    ]
  };

  // Filter categories based on mode
  const getCategories = () => {
    const allCategories = [
      {
        id: 'digital-marketing',
        name: 'Digital Marketing',
        description: 'Grow your online presence and drive measurable results',
        icon: <FaChartLine className="w-5 h-5" />,
        color: 'from-orange-500 to-red-500'
      },
      {
        id: 'it-services',
        name: 'IT Services',
        description: 'Technology solutions for modern business transformation',
        icon: <FaLaptopCode className="w-5 h-5" />,
        color: 'from-blue-500 to-cyan-500'
      }
    ];

    if (mode === "it") return allCategories.filter(cat => cat.id === 'it-services');
    if (mode === "marketing") return allCategories.filter(cat => cat.id === 'digital-marketing');
    return allCategories;
  };

  const categories = getCategories();
  const currentServices = servicesData[activeCategory] || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section ref={sectionRef} id="services" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Enhanced Background Elements */}
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
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6"
          >
            <FaRocket className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-semibold text-sm">Our Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Services</span>
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
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Comprehensive solutions tailored to drive your business growth and  
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold"> maximize your potential</span>.
          </motion.p>

          {/* Enhanced Category Selector */}
          {categories.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center mb-12"
            >
              <div className="bg-gray-900 bg-opacity-50 border border-gray-700 rounded-2xl p-2 backdrop-blur-sm">
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      onHoverStart={() => setHoveredCategory(category.id)}
                      onHoverEnd={() => setHoveredCategory(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        relative flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden
                        ${activeCategory === category.id 
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                        }
                      `}
                    >
                      {/* Button Background Shine */}
                      {activeCategory === category.id && (
                        <motion.div
                          animate={{ x: ['0%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                        />
                      )}
                      <span className="relative z-10">{category.icon}</span>
                      <span className="relative z-10">{category.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Category Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 text-lg"
              >
                {categories.find(cat => cat.id === activeCategory)?.description}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {currentServices.map((service, index) => (
              <ServiceCard
                key={`${activeCategory}-${service.title}`}
                {...service}
                index={index}
                isVisible={isVisible}
                category={activeCategory}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg 
              transition-all duration-300 hover:shadow-2xl overflow-hidden group
            "
          >
            {/* Button Shine Effect */}
            <motion.div
              animate={{ x: ['0%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
            />
            <span className="relative z-10 flex items-center gap-2">
              Get {activeCategory === 'digital-marketing' ? 'Marketing' : 'IT'} Consultation
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
            Ready to transform your {activeCategory === 'digital-marketing' ? 'digital presence' : 'technology infrastructure'}?
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;