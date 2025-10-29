import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding, 
  FaGlobe,
  FaCode,
  FaChartLine,
  FaMobile,
  FaCloud,
  FaShieldAlt,
  FaSearch,
  FaShoppingCart
} from 'react-icons/fa';

const Contact = ({ 
  mode = "combined", // "it", "marketing", or "combined"
  title = null,
  subtitle = null
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      message: ''
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Project types based on mode
  const getProjectTypes = () => {
    switch (mode) {
      case "it":
        return [
          "Web Development",
          "Mobile App Development",
          "Cloud Solutions",
          "Cyber Security",
          "IT Consulting",
          "System Integration"
        ];
      case "marketing":
        return [
          "SEO Optimization",
          "Social Media Marketing",
          "PPC Campaigns",
          "Content Marketing",
          "Email Marketing",
          "E-commerce Solutions"
        ];
      case "combined":
      default:
        return [
          "Web Development",
          "Digital Marketing",
          "Full Business Solution",
          "IT Infrastructure",
          "Brand Strategy",
          "Custom Software"
        ];
    }
  };

  const getMainTitle = () => {
    if (title) return title;
    
    switch (mode) {
      case "it":
        return "Let's Build Your Next Tech Solution";
      case "marketing":
        return "Let's Amplify Your Digital Presence";
      case "combined":
      default:
        return "Let's Talk About Your Project";
    }
  };

  const getSubtitle = () => {
    if (subtitle) return subtitle;
    
    switch (mode) {
      case "it":
        return "Ready to transform your business with cutting-edge technology? Share your project details and our IT experts will help you build the perfect solution.";
      case "marketing":
        return "Ready to boost your online presence and drive growth? Tell us about your marketing goals and we'll create a strategy that delivers results.";
      case "combined":
      default:
        return "Have a project in mind? Whether it's IT solutions or digital marketing, we're here to help bring your vision to life. Let's discuss how we can work together.";
    }
  };

  const getFeatures = () => {
    switch (mode) {
      case "it":
        return [
          {
            icon: FaCode,
            title: "Custom Development",
            description: "Tailored software solutions"
          },
          {
            icon: FaCloud,
            title: "Cloud Solutions",
            description: "Scalable infrastructure"
          },
          {
            icon: FaShieldAlt,
            title: "Security First",
            description: "Enterprise-grade protection"
          },
          {
            icon: FaMobile,
            title: "Mobile Apps",
            description: "iOS & Android development"
          }
        ];
      case "marketing":
        return [
          {
            icon: FaSearch,
            title: "SEO Optimization",
            description: "Higher search rankings"
          },
          {
            icon: FaChartLine,
            title: "Data Analytics",
            description: "Performance insights"
          },
          {
            icon: FaShoppingCart,
            title: "E-commerce",
            description: "Sales growth strategies"
          },
          {
            icon: FaGlobe,
            title: "Digital Presence",
            description: "Brand visibility"
          }
        ];
      case "combined":
      default:
        return [
          {
            icon: FaCode,
            title: "IT Solutions",
            description: "Custom development"
          },
          {
            icon: FaChartLine,
            title: "Digital Marketing",
            description: "Growth strategies"
          },
          {
            icon: FaCloud,
            title: "Cloud Services",
            description: "Scalable infrastructure"
          },
          {
            icon: FaShieldAlt,
            title: "Security",
            description: "Complete protection"
          }
        ];
    }
  };

  const getGradientColors = () => {
    switch (mode) {
      case "it":
        return "from-blue-500 to-cyan-600";
      case "marketing":
        return "from-orange-500 to-pink-600";
      case "combined":
      default:
        return "from-blue-500 to-purple-600";
    }
  };

  return (
    <section id="contact" className="relative bg-white text-gray-800 py-20 lg:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Accent Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50 rounded-full filter blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left Content - Description */}
            <div className="w-full lg:w-2/5">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                  {getMainTitle()}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {getSubtitle()}
                </p>
              </motion.div>

              {/* Features List */}
              <motion.div variants={itemVariants} className="space-y-4 mb-8">
                {getFeatures().map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${getGradientColors()} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              
            </div>

            {/* Right Content - Form */}
            <div className="w-full lg:w-3/5">
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-10 shadow-xl"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <FaUser className="w-4 h-4 text-blue-500" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <FaEnvelope className="w-4 h-4 text-orange-500" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <FaPhone className="w-4 h-4 text-green-500" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Company Field */}
                    <div className="space-y-2">
                      <label htmlFor="company" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <FaBuilding className="w-4 h-4 text-purple-500" />
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <FaCode className="w-4 h-4 text-cyan-500" />
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      {getProjectTypes().map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <FaPaperPlane className="w-4 h-4 text-blue-500" />
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements, goals, and timeline..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${getGradientColors()} text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Privacy Note */}
                  <p className="text-center text-gray-500 text-sm">
                    We'll get back to you within 24 hours. Your information is secure and never shared.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;