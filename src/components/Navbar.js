import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaQuestionCircle,
  FaBlog,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaBriefcase,
  FaGraduationCap,
  FaHome,
  FaBuilding,
  FaShoppingCart,
  FaHeartbeat,
  FaCode,
  FaCity,
  FaAddressCard,
  FaLaptopCode,
  FaMobileAlt,
  FaSearch,
  FaShieldAlt,
  FaCloud,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [nestedDropdown, setNestedDropdown] = useState(null);
  const [nestedIndustryDropdown, setNestedIndustryDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("/");

  // Update active tab when location changes
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  // Check if a tab is active
  const isActive = (path) => {
    if (path === "/") {
      return activeTab === "/";
    }
    return activeTab.startsWith(path);
  };

  // Check if services dropdown should be considered active
  const isServicesActive = () => {
    return (
      servicesCategories.some((category) =>
        category.services.some((service) => activeTab.startsWith(service.href))
      ) || activeTab.startsWith("/services")
    );
  };

  // Check if industry dropdown should be considered active
  const isIndustryActive = () => {
    return (
      industryCategories.some((category) =>
        category.industries.some((industry) =>
          activeTab.startsWith(industry.href)
        )
      ) || activeTab.startsWith("/industries")
    );
  };

  // Check if more dropdown should be considered active
  const isMoreActive = () => {
    return moreItems.some((item) => activeTab.startsWith(item.href));
  };

  // IT Services
  const itServices = {
    name: "IT Services",
    icon: FaLaptopCode,
    services: [
      {
        name: "Web Development",
        icon: FaCode,
        href: "/services/it/web-development",
      },
      {
        name: "Mobile App Development",
        icon: FaMobileAlt,
        href: "/services/it/mobile-app-development",
      },
      {
        name: "Cloud Solutions",
        icon: FaCloud,
        href: "/services/it/cloud-solutions",
      },
      {
        name: "Cybersecurity",
        icon: FaShieldAlt,
        href: "/services/it/cybersecurity",
      },
      {
        name: "IT Infrastructure",
        icon: FaNetworkWired,
        href: "/services/it/infrastructure",
      },
      {
        name: "Database Management",
        icon: FaDatabase,
        href: "/services/it/database",
      },
    ],
  };

  // Digital Marketing Services
  const digitalMarketingServices = {
    name: "Digital Marketing",
    icon: FaRocket,
    services: [
      {
        name: "SEO Services",
        icon: FaSearch,
        href: "/services/digital-marketing/seo",
      },
      {
        name: "Social Media Marketing",
        icon: FaUsers,
        href: "/services/digital-marketing/social-media",
      },
      {
        name: "Content Marketing",
        icon: FaBlog,
        href: "/services/digital-marketing/content",
      },
      {
        name: "PPC Advertising",
        icon: FaChartLine,
        href: "/services/digital-marketing/ppc",
      },
      {
        name: "Email Marketing",
        icon: FaEnvelope,
        href: "/services/digital-marketing/email",
      },

      {
        name: "Analytics & Reporting",
        icon: FaChartLine,
        href: "/services/digital-marketing/analytics",
      },
    ],
  };

  const servicesCategories = [itServices, digitalMarketingServices];

  // Service Industries
  const serviceIndustries = {
    name: "IT Industries",
    icon: FaBuilding,
    industries: [
      {
        name: "Food & Beverages",
        icon: FaShoppingCart,
        href: "/industries/service/food-beverages",
      },
      {
        name: "Hospitality",
        icon: FaUsers,
        href: "/industries/service/hospitality",
      },
      {
        name: "Tours & Travels",
        icon: FaRocket,
        href: "/industries/service/tours-travels",
      },
      {
        name: "Real Estate",
        icon: FaCity,
        href: "/industries/service/real-estate",
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
      },
      {
        name: "Education",
        icon: FaGraduationCap,
        href: "/industries/product/education",
      },
      {
        name: "Manufacturing",
        icon: FaBuilding,
        href: "/industries/product/manufacturing",
      },
      {
        name: "FMCG",
        icon: FaShoppingCart,
        href: "/industries/product/fmcg",
      },
    ],
  };

  const industryCategories = [serviceIndustries, productIndustries];

  const moreItems = [
    {
      name: "About",
      icon: FaBriefcase,
      href: "/about",
    },
    {
      name: "Careers",
      icon: FaBriefcase,
      href: "/careers",
    },
    {
      name: "Blog",
      icon: FaBlog,
      href: "/blog",
    },
    {
      name: "FAQ",
      icon: FaQuestionCircle,
      href: "/faq",
    },
  ];

  const socialMediaLinks = [
    {
      icon: FaFacebookF,
      name: "Facebook",
      url: "https://facebook.com/digitalpro",
      color: "hover:text-blue-400",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      url: "https://www.instagram.com/amplinova_solutions?igsh=MWliem1pcnRsb2syNw==",
      color: "hover:text-pink-400",
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://twitter.com/digitalpro",
      color: "hover:text-blue-300",
    },
    {
      icon: FaLinkedinIn,
      name: "LinkedIn",
      url: "https://linkedin.com/company/digitalpro",
      color: "hover:text-blue-500",
    },
  ];

  const marqueeMessages = [
    "🚀 Special Offer: Get 20% off on all digital marketing services this month!",
    "⭐ Awarded 'Best Digital Agency 2024' by Industry Leaders",
    "📞 Book a free consultation today and transform your digital presence!",
    "🎯 Over 500+ satisfied clients worldwide trust our expertise",
  ];

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  const toggleNestedDropdown = (category) => {
    setNestedDropdown(nestedDropdown === category ? null : category);
  };

  const toggleNestedIndustryDropdown = (category) => {
    setNestedIndustryDropdown(
      nestedIndustryDropdown === category ? null : category
    );
  };

  // Active tab styles
  const activeStyles = "text-orange-400";
  const activeBorderStyles = "w-full h-0.5 bg-orange-500";

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm">
        <div className="container mx-auto px-6 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Contact Info - Left */}
            <div className="flex flex-wrap justify-center md:justify-start items-center space-x-6 mb-2 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-1 bg-white bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300"
                >
                  <FaEnvelope className="w-3 h-3" />
                </motion.div>
                <a
                  href="mailto:info@amplinova.com"
                  className="hover:text-yellow-300 transition-colors duration-300 font-medium"
                >
                  info@amplinova.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-2 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-1 bg-white bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300"
                >
                  <FaPhone className="w-3 h-3" />
                </motion.div>
                <a
                  href="tel:+91 99760 89089"
                  className="hover:text-yellow-300 transition-colors duration-300 font-medium"
                >
                  +91 99760 89089
                 </a>
              </motion.div>
            </div>

            {/* Marquee Text - Center */}
            <div className="hidden lg:block flex-1 mx-6 overflow-hidden">
              <motion.div
                className="whitespace-nowrap"
                animate={{
                  x: [0, -1200],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {marqueeMessages.map((message, index) => (
                  <span
                    key={index}
                    className="inline-block mx-8 text-yellow-300 font-semibold"
                  >
                    {message}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Mobile Marquee - Only show on mobile */}
            <div className="lg:hidden w-full my-2 overflow-hidden">
              <motion.div
                className="whitespace-nowrap"
                animate={{
                  x: [0, -400],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }}
              >
                <span className="inline-block mx-4 text-yellow-300 font-semibold text-xs">
                  {marqueeMessages[0]}
                </span>
              </motion.div>
            </div>

            {/* Social Media Links - Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <span className="hidden sm:inline text-xs text-blue-200 font-medium">
                Follow us:
              </span>
              <div className="flex space-x-3">
                {socialMediaLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.3, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full ${social.color} hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-3 h-3" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold"
            >
              <motion.a
                href="/"
                className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent cursor-pointer"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ duration: 0.5 }}
              >
                Amplinova
              </motion.a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <motion.a
                href="/"
                className={`transition-colors duration-300 font-semibold relative group flex items-center ${
                  isActive("/") ? activeStyles : "hover:text-orange-400"
                }`}
                whileHover={{ y: -2 }}
              >
                <FaHome className="w-4 h-4 mr-2" />
                Home
                <span
                  className={`absolute bottom-0 left-0 transition-all duration-300 ${
                    isActive("/")
                      ? activeBorderStyles
                      : "w-0 h-0.5 bg-orange-500 group-hover:w-full"
                  }`}
                ></span>
              </motion.a>

              <motion.a
                href="/it"
                className={`transition-colors duration-300 font-semibold relative group flex items-center ${
                  isActive("/it") ? activeStyles : "hover:text-orange-400"
                }`}
                whileHover={{ y: -2 }}
              >
                <FaCode className="w-4 h-4 mr-2" />
                IT Solutions
                <span
                  className={`absolute bottom-0 left-0 transition-all duration-300 ${
                    isActive("/it")
                      ? activeBorderStyles
                      : "w-0 h-0.5 bg-orange-500 group-hover:w-full"
                  }`}
                ></span>
              </motion.a>

              <motion.a
                href="/marketing"
                className={`transition-colors duration-300 font-semibold relative group flex items-center ${
                  isActive("/marketing")
                    ? activeStyles
                    : "hover:text-orange-400"
                }`}
                whileHover={{ y: -2 }}
              >
                <FaRocket className="w-4 h-4 mr-2" />
                Digital Marketing
                <span
                  className={`absolute bottom-0 left-0 transition-all duration-300 ${
                    isActive("/marketing")
                      ? activeBorderStyles
                      : "w-0 h-0.5 bg-orange-500 group-hover:w-full"
                  }`}
                ></span>
              </motion.a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => {
                  setIsServicesOpen(false);
                  setNestedDropdown(null);
                }}
              >
                <motion.button
                  className={`transition-colors duration-300 flex items-center font-semibold relative group ${
                    isServicesActive() ? activeStyles : "hover:text-orange-400"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <FaRocket className="w-4 h-4 mr-2" />
                  Services
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-3 h-3 ml-2" />
                  </motion.div>
                  <span
                    className={`absolute bottom-0 left-0 transition-all duration-300 ${
                      isServicesActive()
                        ? activeBorderStyles
                        : "w-0 h-0.5 bg-orange-500 group-hover:w-full"
                    }`}
                  ></span>
                </motion.button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <>
                      {/* --- FIRST DROPDOWN: Categories --- */}
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        className="absolute top-full left-0 mt-3 w-[260px] bg-gray-900 border border-gray-700 rounded-l-xl rounded-r-none shadow-2xl backdrop-blur-lg z-50"
                      >
                        {servicesCategories.map((category, index) => (
                          <motion.div
                            key={category.name}
                            className={`p-3 border-b border-gray-800 cursor-pointer transition-all duration-300 ${
                              nestedDropdown === category.name
                                ? "bg-orange-500 text-white"
                                : "hover:bg-gray-800"
                            } ${
                              category.services.some((s) => isActive(s.href))
                                ? "border-l-4 border-l-orange-500 bg-gray-800"
                                : ""
                            }`}
                            onMouseEnter={() =>
                              setNestedDropdown(category.name)
                            }
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <div className="flex items-center">
                              <category.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                              <div className="font-semibold text-sm">
                                {category.name}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* --- SECOND DROPDOWN: Nested Services --- */}
                      <AnimatePresence>
                        {nestedDropdown && (
                          <motion.div
                            key={nestedDropdown}
                            initial={{ opacity: 0, y: 10, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.97 }}
                            // ✅ No margin and no border radius on touching side
                            className="absolute top-full left-[260px] mt-3 w-[260px] bg-gray-900 border border-l-0 border-gray-700 rounded-r-xl rounded-l-none shadow-2xl backdrop-blur-lg z-50"
                          >
                            {servicesCategories
                              .find((cat) => cat.name === nestedDropdown)
                              ?.services.map((service, index) => (
                                <motion.a
                                  key={service.name}
                                  href={service.href}
                                  className={`flex items-center px-4 py-3 transition-all duration-300 border-b border-gray-800 last:border-b-0 group ${
                                    isActive(service.href)
                                      ? "bg-orange-500 text-white"
                                      : "hover:bg-orange-500 hover:text-white"
                                  }`}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                  whileHover={{ x: 5 }}
                                >
                                  <service.icon
                                    className={`w-4 h-4 mr-3 transition-colors duration-300 flex-shrink-0 ${
                                      isActive(service.href)
                                        ? "text-white"
                                        : "text-orange-400 group-hover:text-white"
                                    }`}
                                  />
                                  <div className="font-semibold text-sm">
                                    {service.name}
                                  </div>
                                </motion.a>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Industry Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsIndustryOpen(true)}
                onMouseLeave={() => {
                  setIsIndustryOpen(false);
                  setNestedIndustryDropdown(null);
                }}
              >
                <motion.button
                  className={`transition-colors duration-300 flex items-center font-semibold relative group ${
                    isIndustryActive() ? activeStyles : "hover:text-orange-400"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <FaBuilding className="w-4 h-4 mr-2" />
                  Industry
                  <motion.div
                    animate={{ rotate: isIndustryOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-3 h-3 ml-2" />
                  </motion.div>
                  <span
                    className={`absolute bottom-0 left-0 transition-all duration-300 ${
                      isIndustryActive()
                        ? activeBorderStyles
                        : "w-0 h-0.5 bg-orange-500 group-hover:w-full"
                    }`}
                  ></span>
                </motion.button>

                <AnimatePresence>
                  {isIndustryOpen && (
                    <>
                      {/* --- FIRST DROPDOWN: Categories --- */}
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        className="absolute top-full left-0 mt-3 w-[260px] bg-gray-900 border border-gray-700 rounded-l-xl rounded-r-none shadow-2xl backdrop-blur-lg z-50"
                      >
                        {industryCategories.map((category, index) => (
                          <motion.div
                            key={category.name}
                            className={`p-3 border-b border-gray-800 cursor-pointer transition-all duration-300 ${
                              nestedIndustryDropdown === category.name
                                ? "bg-orange-500 text-white"
                                : "hover:bg-gray-800"
                            } ${
                              category.industries.some((ind) =>
                                isActive(ind.href)
                              )
                                ? "border-l-4 border-l-orange-500 bg-gray-800"
                                : ""
                            }`}
                            onMouseEnter={() =>
                              setNestedIndustryDropdown(category.name)
                            }
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <div className="flex items-center">
                              <category.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                              <div className="font-semibold text-sm">
                                {category.name}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* --- SECOND DROPDOWN: Nested Industries --- */}
                      <AnimatePresence>
                        {nestedIndustryDropdown && (
                          <motion.div
                            key={nestedIndustryDropdown}
                            initial={{ opacity: 0, y: 10, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.97 }}
                            className="absolute top-full left-[260px] mt-3 w-[260px] bg-gray-900 border border-l-0 border-gray-700 rounded-r-xl rounded-l-none shadow-2xl backdrop-blur-lg z-50"
                          >
                            {industryCategories
                              .find(
                                (cat) => cat.name === nestedIndustryDropdown
                              )
                              ?.industries.map((industry, index) => (
                                <motion.a
                                  key={industry.name}
                                  href={industry.href}
                                  className={`flex items-center px-4 py-3 transition-all duration-300 border-b border-gray-800 last:border-b-0 group ${
                                    isActive(industry.href)
                                      ? "bg-orange-500 text-white"
                                      : "hover:bg-orange-500 hover:text-white"
                                  }`}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                  whileHover={{ x: 5 }}
                                >
                                  <industry.icon
                                    className={`w-4 h-4 mr-3 transition-colors duration-300 flex-shrink-0 ${
                                      isActive(industry.href)
                                        ? "text-white"
                                        : "text-orange-400 group-hover:text-white"
                                    }`}
                                  />
                                  <div className="font-semibold text-sm">
                                    {industry.name}
                                  </div>
                                </motion.a>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Us */}
              <motion.a
                href="/contact-us"
                className={`transition-colors duration-300 font-semibold relative group flex items-center ${
                  isActive("/contact-us") ? activeStyles : "hover:text-orange-400"
                }`}
                whileHover={{ y: -2 }}
              >
                <FaAddressCard className="w-4 h-4 mr-2" />
                Contact Us
                <span
                  className={`absolute bottom-0 left-0 transition-all duration-300 ${
                    isActive("/contact")
                      ? activeBorderStyles
                      : "w-0 h-0.5 bg-orange-500 group-hover:w-full"
                  }`}
                ></span>
              </motion.a>

              {/* More Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                <motion.button
                  className={`transition-colors duration-300 flex items-center font-semibold relative group ${
                    isMoreActive() ? activeStyles : "hover:text-orange-400"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  More
                  <motion.div
                    animate={{ rotate: isMoreOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-3 h-3 ml-2" />
                  </motion.div>
                  <span
                    className={`absolute bottom-0 left-0 transition-all duration-300 ${
                      isMoreActive()
                        ? activeBorderStyles
                        : "w-0 h-0.5 bg-orange-500 group-hover:w-full"
                    }`}
                  ></span>
                </motion.button>

                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute top-full left-0 mt-3 w-56 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl backdrop-blur-lg z-50"
                    >
                      {moreItems.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          className={`flex items-center px-4 py-3 transition-all duration-300 border-b border-gray-800 last:border-b-0 group ${
                            isActive(item.href)
                              ? "bg-orange-500 text-white"
                              : "hover:bg-orange-500 hover:text-white"
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <item.icon
                            className={`w-4 h-4 mr-3 transition-colors duration-300 flex-shrink-0 ${
                              isActive(item.href)
                                ? "text-white"
                                : "text-orange-400 group-hover:text-white"
                            }`}
                          />
                          <div className="font-semibold text-sm">
                            {item.name}
                          </div>
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -5px rgba(255, 107, 53, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 text-sm">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-white p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <FaTimes className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <FaBars className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl"
              >
                <div className="max-h-[70vh] overflow-y-auto scrollbar-hide">
                  <div className="py-4 space-y-1">
                    {/* Home */}
                    <motion.a
                      href="/"
                      className={`flex items-center px-4 py-3 transition-all duration-300 mx-2 rounded-lg font-semibold ${
                        isActive("/")
                          ? "bg-orange-500 text-white"
                          : "hover:bg-orange-500 hover:text-white"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 5 }}
                    >
                      <FaHome className="w-4 h-4 mr-3" />
                      <span className="text-sm">Home</span>
                    </motion.a>

                    {/* Services Dropdown Mobile */}
                    <div className="px-2">
                      <motion.button
                        onClick={() => toggleMobileDropdown("services")}
                        className={`flex items-center justify-between w-full px-4 py-3 transition-all duration-300 rounded-lg font-semibold ${
                          isServicesActive()
                            ? "bg-orange-500 text-white"
                            : "hover:bg-orange-500 hover:text-white"
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center">
                          <FaRocket className="w-4 h-4 mr-3" />
                          <span className="text-sm">Services</span>
                        </div>
                        <motion.div
                          animate={{
                            rotate: mobileDropdown === "services" ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="w-3 h-3" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {mobileDropdown === "services" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-3 mt-1 space-y-1 border-l-2 border-orange-500 pl-3"
                          >
                            {servicesCategories.map((category) => (
                              <div key={category.name} className="mb-1">
                                <motion.button
                                  onClick={() =>
                                    toggleNestedDropdown(category.name)
                                  }
                                  className={`flex items-center justify-between w-full py-2 px-3 transition-all duration-300 rounded-lg font-medium ${
                                    category.services.some((service) =>
                                      isActive(service.href)
                                    )
                                      ? "bg-orange-500 text-white"
                                      : "text-gray-300 hover:text-white hover:bg-orange-500"
                                  }`}
                                  whileHover={{ x: 3 }}
                                >
                                  <div className="flex items-center">
                                    <category.icon className="w-3 h-3 mr-2" />
                                    <span className="text-sm">
                                      {category.name}
                                    </span>
                                  </div>
                                  <motion.div
                                    animate={{
                                      rotate:
                                        nestedDropdown === category.name
                                          ? 180
                                          : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <FaChevronDown className="w-2 h-2" />
                                  </motion.div>
                                </motion.button>

                                <AnimatePresence>
                                  {nestedDropdown === category.name && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="ml-3 mt-1 space-y-1 border-l-2 border-orange-300 pl-3"
                                    >
                                      {category.services.map((service) => (
                                        <motion.a
                                          key={service.name}
                                          href={service.href}
                                          className={`flex items-center py-2 px-3 transition-all duration-300 rounded-lg text-xs mb-1 last:mb-0 ${
                                            isActive(service.href)
                                              ? "bg-orange-400 text-white"
                                              : "text-gray-400 hover:text-white hover:bg-orange-400"
                                          }`}
                                          onClick={() =>
                                            setIsMobileMenuOpen(false)
                                          }
                                          whileHover={{ x: 3 }}
                                        >
                                          <service.icon className="w-3 h-3 mr-2" />
                                          <div className="text-xs">
                                            {service.name}
                                          </div>
                                        </motion.a>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Industry Dropdown Mobile */}
                    <div className="px-2">
                      <motion.button
                        onClick={() => toggleMobileDropdown("industry")}
                        className={`flex items-center justify-between w-full px-4 py-3 transition-all duration-300 rounded-lg font-semibold ${
                          isIndustryActive()
                            ? "bg-orange-500 text-white"
                            : "hover:bg-orange-500 hover:text-white"
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center">
                          <FaBuilding className="w-4 h-4 mr-3" />
                          <span className="text-sm">Industry</span>
                        </div>
                        <motion.div
                          animate={{
                            rotate: mobileDropdown === "industry" ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="w-3 h-3" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {mobileDropdown === "industry" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-3 mt-1 space-y-1 border-l-2 border-orange-500 pl-3"
                          >
                            {industryCategories.map((category) => (
                              <div key={category.name} className="mb-1">
                                <motion.button
                                  onClick={() =>
                                    toggleNestedIndustryDropdown(category.name)
                                  }
                                  className={`flex items-center justify-between w-full py-2 px-3 transition-all duration-300 rounded-lg font-medium ${
                                    category.industries.some((industry) =>
                                      isActive(industry.href)
                                    )
                                      ? "bg-orange-500 text-white"
                                      : "text-gray-300 hover:text-white hover:bg-orange-500"
                                  }`}
                                  whileHover={{ x: 3 }}
                                >
                                  <div className="flex items-center">
                                    <category.icon className="w-3 h-3 mr-2" />
                                    <span className="text-sm">
                                      {category.name}
                                    </span>
                                  </div>
                                  <motion.div
                                    animate={{
                                      rotate:
                                        nestedIndustryDropdown === category.name
                                          ? 180
                                          : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <FaChevronDown className="w-2 h-2" />
                                  </motion.div>
                                </motion.button>

                                <AnimatePresence>
                                  {nestedIndustryDropdown === category.name && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="ml-3 mt-1 space-y-1 border-l-2 border-orange-300 pl-3"
                                    >
                                      {category.industries.map((industry) => (
                                        <motion.a
                                          key={industry.name}
                                          href={industry.href}
                                          className={`flex items-center py-2 px-3 transition-all duration-300 rounded-lg text-xs mb-1 last:mb-0 ${
                                            isActive(industry.href)
                                              ? "bg-orange-400 text-white"
                                              : "text-gray-400 hover:text-white hover:bg-orange-400"
                                          }`}
                                          onClick={() =>
                                            setIsMobileMenuOpen(false)
                                          }
                                          whileHover={{ x: 3 }}
                                        >
                                          <industry.icon className="w-3 h-3 mr-2" />
                                          <div className="text-xs">
                                            {industry.name}
                                          </div>
                                        </motion.a>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Contact Us */}
                    <motion.a
                      href="/contact"
                      className={`flex items-center px-4 py-3 transition-all duration-300 mx-2 rounded-lg font-semibold ${
                        isActive("/contact")
                          ? "bg-orange-500 text-white"
                          : "hover:bg-orange-500 hover:text-white"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 5 }}
                    >
                      <FaAddressCard className="w-4 h-4 mr-3" />
                      <span className="text-sm">Contact Us</span>
                    </motion.a>

                    {/* More Dropdown Mobile */}
                    <div className="px-2">
                      <motion.button
                        onClick={() => toggleMobileDropdown("more")}
                        className={`flex items-center justify-between w-full px-4 py-3 transition-all duration-300 rounded-lg font-semibold ${
                          isMoreActive()
                            ? "bg-orange-500 text-white"
                            : "hover:bg-orange-500 hover:text-white"
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center">
                          <span className="text-sm">More</span>
                        </div>
                        <motion.div
                          animate={{
                            rotate: mobileDropdown === "more" ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="w-3 h-3" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {mobileDropdown === "more" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-3 mt-1 space-y-1 border-l-2 border-orange-500 pl-3"
                          >
                            {moreItems.map((item) => (
                              <motion.a
                                key={item.name}
                                href={item.href}
                                className={`flex items-center py-2 px-3 transition-all duration-300 font-medium rounded-lg text-sm ${
                                  isActive(item.href)
                                    ? "bg-orange-500 text-white"
                                    : "text-gray-300 hover:text-white hover:bg-orange-500"
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                whileHover={{ x: 3 }}
                              >
                                <item.icon
                                  className={`w-3 h-3 mr-2 ${
                                    isActive(item.href)
                                      ? "text-white"
                                      : "text-orange-400"
                                  }`}
                                />
                                <div className="text-sm">{item.name}</div>
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="px-4 py-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Get Started
                      </motion.button>
                    </div>

                    {/* Social Media in Mobile Menu */}
                    <div className="px-4 py-3 border-t border-gray-800">
                      <div className="text-orange-400 text-xs font-bold mb-3 uppercase tracking-wider">
                        Follow Us
                      </div>
                      <div className="flex space-x-3 justify-center">
                        {socialMediaLinks.map((social) => (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            whileHover={{ scale: 1.2, y: -2 }}
                            className={`w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full ${social.color} hover:bg-gray-700 transition-all duration-300`}
                            aria-label={social.name}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <social.icon className="w-4 h-4" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </>
  );
};

export default Navbar;
