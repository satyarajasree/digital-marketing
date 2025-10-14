import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  FaUserTie,
  FaQuestionCircle,
  FaBlog,
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaBriefcase,
  FaGraduationCap,
  FaHome,
  FaBuilding,
  FaLaptopCode,
  FaShoppingCart,
  FaHeartbeat,
  FaCode,
  FaDollarSign,
  FaCity,
  FaAddressCard
} from 'react-icons/fa';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const servicesItems = [
    { 
      name: "SEO Optimization", 
      icon: FaChartLine, 
      href: "/services/seo-optimization",
      description: "Boost your search rankings and organic traffic"
    },
    { 
      name: "Social Media Marketing", 
      icon: FaRocket, 
      href: "/services/social-media-marketing",
      description: "Engage your audience across all platforms"
    },
    { 
      name: "PPC Advertising", 
      icon: FaDollarSign, 
      href: "/services/ppc-advertising",
      description: "Drive instant results with targeted ads"
    },
    { 
      name: "Content Marketing", 
      icon: FaBlog, 
      href: "/services/content-marketing",
      description: "Tell your brand story effectively"
    },
    { 
      name: "Email Marketing", 
      icon: FaEnvelope, 
      href: "/services/email-marketing",
      description: "Nurture leads and build relationships"
    },
    { 
      name: "Web Development", 
      icon: FaLaptopCode, 
      href: "/services/web-development",
      description: "Build high-performance websites"
    }
  ];

  const industryItems = [
    { 
      name: "E-commerce & Retail", 
      icon: FaShoppingCart, 
      href: "/industries/ecommerce-retail",
      description: "Drive online sales and customer loyalty"
    },
    { 
      name: "Healthcare & Wellness", 
      icon: FaHeartbeat, 
      href: "/industries/healthcare-wellness",
      description: "Build trust in health services"
    },
    { 
      name: "Technology & SaaS", 
      icon: FaCode, 
      href: "/industries/technology-saas",
      description: "Scale your tech business globally"
    },
    { 
      name: "Finance & Banking", 
      icon: FaDollarSign, 
      href: "/industries/finance-banking",
      description: "Secure and grow financial services"
    },
    { 
      name: "Real Estate", 
      icon: FaCity, 
      href: "/industries/real-estate",
      description: "Showcase properties effectively"
    },
    { 
      name: "Education & E-learning", 
      icon: FaGraduationCap, 
      href: "/industries/education-elearning",
      description: "Transform educational experiences"
    }
  ];

  const moreItems = [
    { 
      name: "Careers", 
      icon: FaBriefcase, 
      href: "/careers",
      description: "Join our growing team"
    },
    { 
      name: "Blog", 
      icon: FaBlog, 
      href: "/blog",
      description: "Latest insights and updates"
    },
    { 
      name: "FAQ", 
      icon: FaQuestionCircle, 
      href: "/faq",
      description: "Find answers to common questions"
    },
    { 
      name: "Case Studies", 
      icon: FaChartLine, 
      href: "/case-studies",
      description: "Explore our success stories"
    }
  ];

  const socialMediaLinks = [
    { icon: FaFacebookF, name: "Facebook", url: "https://facebook.com/digitalpro", color: "hover:text-blue-400" },
    { icon: FaInstagram, name: "Instagram", url: "https://instagram.com/digitalpro", color: "hover:text-pink-400" },
    { icon: FaTwitter, name: "Twitter", url: "https://twitter.com/digitalpro", color: "hover:text-blue-300" },
    { icon: FaLinkedinIn, name: "LinkedIn", url: "https://linkedin.com/company/digitalpro", color: "hover:text-blue-500" }
  ];

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm">
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
                <a href="mailto:hello@digitalpro.com" className="hover:text-black transition-colors duration-300 font-medium">
                  hello@digitalpro.com
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
                <a href="tel:+15551234567" className="hover:text-black transition-colors duration-300 font-medium">
                  +1 (555) 123-4567
                </a>
              </motion.div>
            </div>

            {/* Social Media Links - Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <span className="hidden sm:inline text-xs text-orange-100 font-medium">Follow us:</span>
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
                DigitalPro
              </motion.a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <motion.a 
                href="/" 
                className="hover:text-orange-400 transition-colors duration-300 font-semibold relative group flex items-center"
                whileHover={{ y: -2 }}
              >
                <FaHome className="w-4 h-4 mr-2" />
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <motion.button 
                  className="hover:text-orange-400 transition-colors duration-300 flex items-center font-semibold relative group"
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute top-full left-0 mt-3 w-96 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl backdrop-blur-lg z-50"
                    >
                      {servicesItems.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          className="flex items-start px-6 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 border-b border-gray-800 last:border-b-0 group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <item.icon className="w-5 h-5 text-orange-400 mr-3 mt-1 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-sm text-gray-400 group-hover:text-orange-100 mt-1">{item.description}</div>
                          </div>
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industry Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsIndustryOpen(true)}
                onMouseLeave={() => setIsIndustryOpen(false)}
              >
                <motion.button 
                  className="hover:text-orange-400 transition-colors duration-300 flex items-center font-semibold relative group"
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
                
                <AnimatePresence>
                  {isIndustryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute top-full left-0 mt-3 w-96 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl backdrop-blur-lg z-50"
                    >
                      {industryItems.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          className="flex items-start px-6 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 border-b border-gray-800 last:border-b-0 group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <item.icon className="w-5 h-5 text-orange-400 mr-3 mt-1 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-sm text-gray-400 group-hover:text-orange-100 mt-1">{item.description}</div>
                          </div>
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About */}
              <motion.a 
                href="/about" 
                className="hover:text-orange-400 transition-colors duration-300 font-semibold relative group flex items-center"
                whileHover={{ y: -2 }}
              >
                <FaUsers className="w-4 h-4 mr-2" />
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>

              {/* Contact Us */}
              <motion.a 
                href="/contact" 
                className="hover:text-orange-400 transition-colors duration-300 font-semibold relative group flex items-center"
                whileHover={{ y: -2 }}
              >
                <FaAddressCard className="w-4 h-4 mr-2" />
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>

              {/* More Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                <motion.button 
                  className="hover:text-orange-400 transition-colors duration-300 flex items-center font-semibold relative group"
                  whileHover={{ y: -2 }}
                >
                  More
                  <motion.div
                    animate={{ rotate: isMoreOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-3 h-3 ml-2" />
                  </motion.div>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
                
                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute top-full left-0 mt-3 w-80 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl backdrop-blur-lg z-50"
                    >
                      {moreItems.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          className="flex items-start px-6 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 border-b border-gray-800 last:border-b-0 group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <item.icon className="w-5 h-5 text-orange-400 mr-3 mt-1 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-sm text-gray-400 group-hover:text-orange-100 mt-1">{item.description}</div>
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
                  boxShadow: "0 10px 30px -5px rgba(255, 107, 53, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
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
                <div className="max-h-[80vh] overflow-y-auto">
                  <div className="py-4 space-y-1">
                    {/* Home */}
                    <motion.a
                      href="/"
                      className="flex items-center px-6 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 mx-2 rounded-lg font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      <FaHome className="w-4 h-4 mr-3" />
                      Home
                    </motion.a>

                    {/* Services Dropdown Mobile */}
                    <div className="px-2">
                      <motion.button
                        onClick={() => toggleMobileDropdown('services')}
                        className="flex items-center justify-between w-full px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-lg font-semibold"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center">
                          <FaRocket className="w-4 h-4 mr-3" />
                          Services
                        </div>
                        <motion.div
                          animate={{ rotate: mobileDropdown === 'services' ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="w-3 h-3" />
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {mobileDropdown === 'services' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2 border-l-2 border-orange-500 pl-4"
                          >
                            {servicesItems.map((item) => (
                              <motion.a
                                key={item.name}
                                href={item.href}
                                className="flex items-center py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all duration-300 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                                whileHover={{ x: 5 }}
                              >
                                <item.icon className="w-4 h-4 mr-3 text-orange-400" />
                                <div>
                                  <div>{item.name}</div>
                                  <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                </div>
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Industry Dropdown Mobile */}
                    <div className="px-2">
                      <motion.button
                        onClick={() => toggleMobileDropdown('industry')}
                        className="flex items-center justify-between w-full px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-lg font-semibold"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center">
                          <FaBuilding className="w-4 h-4 mr-3" />
                          Industry
                        </div>
                        <motion.div
                          animate={{ rotate: mobileDropdown === 'industry' ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="w-3 h-3" />
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {mobileDropdown === 'industry' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2 border-l-2 border-orange-500 pl-4"
                          >
                            {industryItems.map((item) => (
                              <motion.a
                                key={item.name}
                                href={item.href}
                                className="flex items-center py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all duration-300 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                                whileHover={{ x: 5 }}
                              >
                                <item.icon className="w-4 h-4 mr-3 text-orange-400" />
                                <div>
                                  <div>{item.name}</div>
                                  <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                </div>
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* About */}
                    <motion.a
                      href="/about"
                      className="flex items-center px-6 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 mx-2 rounded-lg font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      <FaUsers className="w-4 h-4 mr-3" />
                      About
                    </motion.a>

                    {/* Contact Us */}
                    <motion.a
                      href="/contact"
                      className="flex items-center px-6 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 mx-2 rounded-lg font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      <FaAddressCard className="w-4 h-4 mr-3" />
                      Contact Us
                    </motion.a>

                    {/* More Dropdown Mobile */}
                    <div className="px-2">
                      <motion.button
                        onClick={() => toggleMobileDropdown('more')}
                        className="flex items-center justify-between w-full px-4 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-lg font-semibold"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center">
                          More
                        </div>
                        <motion.div
                          animate={{ rotate: mobileDropdown === 'more' ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="w-3 h-3" />
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {mobileDropdown === 'more' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2 border-l-2 border-orange-500 pl-4"
                          >
                            {moreItems.map((item) => (
                              <motion.a
                                key={item.name}
                                href={item.href}
                                className="flex items-center py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all duration-300 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                                whileHover={{ x: 5 }}
                              >
                                <item.icon className="w-4 h-4 mr-3 text-orange-400" />
                                <div>
                                  <div>{item.name}</div>
                                  <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                </div>
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="px-6 py-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Get Started
                      </motion.button>
                    </div>

                    {/* Social Media in Mobile Menu */}
                    <div className="px-6 py-4 border-t border-gray-800">
                      <div className="text-orange-400 text-sm font-bold mb-4 uppercase tracking-wider">Follow Us</div>
                      <div className="flex space-x-4 justify-center">
                        {socialMediaLinks.map((social) => (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            whileHover={{ scale: 1.2, y: -2 }}
                            className={`w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full ${social.color} hover:bg-gray-700 transition-all duration-300`}
                            aria-label={social.name}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <social.icon className="w-5 h-5" />
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
    </>
  );
};

export default Navbar;