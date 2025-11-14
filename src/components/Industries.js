import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaUsers,
  FaRocket,
  FaCity,
  FaBuilding,
  FaHeartbeat,
  FaGraduationCap,
  FaChevronLeft,
  FaChevronRight,
  FaLaptopCode,
  FaMobileAlt
} from "react-icons/fa";

// Service Industries
const serviceIndustries = {
  name: "IT Industries",
  icon: FaBuilding,
  industries: [
    {
      name: "Food & Beverages",
      icon: FaShoppingCart,
      href: "/industries/service/food-beverages",
      color: "from-yellow-500 to-orange-500",
      iconColor: "text-yellow-500",
      description: "Custom software solutions for restaurant management, inventory tracking, and delivery systems."
    },
    {
      name: "Hospitality",
      icon: FaUsers,
      href: "/industries/service/hospitality",
      color: "from-green-500 to-teal-500",
      iconColor: "text-green-500",
      description: "Hotel management systems, booking platforms, and customer experience solutions."
    },
    {
      name: "Tours & Travels",
      icon: FaRocket,
      href: "/industries/service/tours-travels",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500",
      description: "Travel booking engines, itinerary planners, and tourism management software."
    },
    {
      name: "Real Estate",
      icon: FaCity,
      href: "/industries/service/real-estate",
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500",
      description: "Property management systems, virtual tours, and real estate CRM solutions."
    },
    {
      name: "Technology",
      icon: FaLaptopCode,
      href: "/industries/service/technology",
      color: "from-indigo-500 to-purple-500",
      iconColor: "text-indigo-500",
      description: "Custom software development, cloud solutions, and IT infrastructure services."
    },
  ],
};

// Product Industries
const productIndustries = {
  name: "Digital Marketing Industries",
  icon: FaShoppingCart,
  industries: [
    {
      name: "Health Care",
      icon: FaHeartbeat,
      href: "/industries/product/health-care",
      color: "from-red-500 to-pink-500",
      iconColor: "text-red-500",
      description: "Healthcare marketing strategies, patient acquisition, and medical brand building."
    },
    {
      name: "Education",
      icon: FaGraduationCap,
      href: "/industries/product/education",
      color: "from-indigo-500 to-purple-500",
      iconColor: "text-indigo-500",
      description: "Education marketing campaigns, student enrollment strategies, and institutional branding."
    },
    {
      name: "Manufacturing",
      icon: FaBuilding,
      href: "/industries/product/manufacturing",
      color: "from-gray-500 to-blue-500",
      iconColor: "text-gray-500",
      description: "Industrial marketing, B2B lead generation, and manufacturing brand development."
    },
    {
      name: "FMCG",
      icon: FaShoppingCart,
      href: "/industries/product/fmcg",
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-500",
      description: "Fast-moving consumer goods marketing, retail promotions, and brand awareness campaigns."
    },
    {
      name: "Mobile Apps",
      icon: FaMobileAlt,
      href: "/industries/product/mobile-apps",
      color: "from-teal-500 to-green-500",
      iconColor: "text-teal-500",
      description: "App store optimization, mobile user acquisition, and app marketing strategies."
    },
  ],
};

const IndustryCard = ({ industry, index, mode }) => {
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

 
  

 
  const IconComponent = industry.icon;

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
      className="relative group cursor-pointer flex-shrink-0"
      style={{ width: "320px" }}
    >
      {/* Background Glow Effect */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        className={`absolute inset-0 bg-gradient-to-br ${industry.color.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-xl blur-xl transition-opacity duration-500 -z-10`}
      />

      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 backdrop-blur-sm overflow-hidden h-full flex flex-col">
        {/* Animated Border */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className={`absolute inset-0 rounded-xl border-2 ${industry.color.replace('from-', 'border-').split(' ')[0]}/30 pointer-events-none`}
        />

        {/* Floating Icon with Industry-specific Color */}
        <motion.div
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} mb-6 relative overflow-hidden`}
        >
          {/* Icon Shine Effect */}
          <motion.div
            animate={{ x: isHovered ? ["0%", "200%"] : "0%" }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
          />
          <IconComponent className={`text-white text-2xl relative z-10`} />
        </motion.div>

        {/* Content */}
        <motion.h3
          animate={{ color: isHovered ? industry.iconColor : "#ffffff" }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold mb-4 transition-colors duration-300"
        >
          {industry.name}
        </motion.h3>

        <motion.p
          animate={{ color: isHovered ? "#d1d5db" : "#9ca3af" }}
          transition={{ duration: 0.3 }}
          className="text-gray-300 leading-relaxed text-lg mb-6 flex-grow"
        >
          {industry.description}
        </motion.p>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0.8, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="mt-auto"
        >
          <motion.a
            href={industry.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-semibold text-white 
              bg-gradient-to-r ${industry.color} transition-all duration-300 hover:shadow-2xl shadow-lg overflow-hidden group relative
            `}
          >
            {/* Button Shine Effect */}
            <motion.div
              animate={{ x: isHovered ? ["0%", "200%"] : "0%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
            />
            <span className="relative z-10 flex items-center">
              Explore Solutions
              <FaRocket className="ml-2 text-sm" />
            </span>
          </motion.a>
        </motion.div>

        {/* Hover Indicator */}
        <motion.div
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.4 }}
          className={`h-1 bg-gradient-to-r ${industry.color} mt-4 rounded-full`}
        />
      </div>
    </motion.div>
  );
};

const Industries = ({ mode = "digital-marketing" }) => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  // Get industries based on mode
  const getCurrentIndustries = () => {
    if (mode === "digital-marketing") {
      return productIndustries.industries;
    } else {
      return serviceIndustries.industries;
    }
  };

  const currentIndustries = getCurrentIndustries();

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

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 320 + 24; // card width + gap
      const newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(() => {
        updateScrollButtons();
      }, 300);
    }
  };

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    
    const handleResize = () => updateScrollButtons();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

        {/* Scrollable Container with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: canScrollLeft ? 1 : 0.5, x: 0 } : { opacity: 0, x: -20 }}
            whileHover={{ scale: canScrollLeft ? 1.1 : 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r ${themeConfig.gradient} shadow-2xl flex items-center justify-center transition-all duration-300 ${
              canScrollLeft ? 'cursor-pointer hover:shadow-xl' : 'cursor-not-allowed opacity-50'
            }`}
            style={{ left: '-20px' }}
          >
            <FaChevronLeft className="text-white text-lg" />
          </motion.button>

          {/* Scrollable Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2"
            onScroll={updateScrollButtons}
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {currentIndustries.map((industry, index) => (
              <IndustryCard 
                key={industry.name} 
                industry={industry} 
                index={index} 
                mode={mode}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: canScrollRight ? 1 : 0.5, x: 0 } : { opacity: 0, x: 20 }}
            whileHover={{ scale: canScrollRight ? 1.1 : 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r ${themeConfig.gradient} shadow-2xl flex items-center justify-center transition-all duration-300 ${
              canScrollRight ? 'cursor-pointer hover:shadow-xl' : 'cursor-not-allowed opacity-50'
            }`}
            style={{ right: '-20px' }}
          >
            <FaChevronRight className="text-white text-lg" />
          </motion.button>
        </div>

        {/* Scroll Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center items-center space-x-2 mt-6"
        >
          <div className={`w-2 h-2 rounded-full ${canScrollLeft ? 'bg-white' : 'bg-gray-600'}`} />
          <div className={`w-2 h-2 rounded-full ${canScrollRight ? 'bg-white' : 'bg-gray-600'}`} />
        </motion.div>

       
      </div>

      {/* Hide scrollbar for webkit browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Industries;