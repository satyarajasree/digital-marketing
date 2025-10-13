import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaUser,
  FaComment,
  FaStar,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

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

  // Falling animation for background elements
  const fallingVariants = {
    fall: {
      y: [-100, 1000],
      rotate: [0, 180],
      opacity: [0, 0.3, 0],
      transition: {
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        delay: Math.random() * 5,
        ease: "linear"
      }
    }
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: "hello@digitalpro.com",
      description: "We'll respond within 24 hours",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: "123 Business Ave, Suite 100",
      description: "San Francisco, CA 94107",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: "Monday - Friday",
      description: "8:00 AM - 6:00 PM PST",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "#", color: "hover:text-blue-600" },
    { icon: FaTwitter, url: "#", color: "hover:text-cyan-500" },
    { icon: FaFacebook, url: "#", color: "hover:text-blue-500" },
    { icon: FaInstagram, url: "#", color: "hover:text-pink-500" }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
    <Navbar />
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8">
      {/* Falling Animated Background */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {/* Gradient Orbs */}
        <motion.div
          variants={floatVariants}
          animate="float"
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full filter blur-3xl opacity-20"
        />
        <motion.div
          variants={floatVariants}
          animate="float"
          transition={{ delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full filter blur-3xl opacity-20"
        />
        <motion.div
          variants={floatVariants}
          animate="float"
          transition={{ delay: 4 }}
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full filter blur-3xl opacity-20"
        />

        {/* Falling Contact Icons */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            variants={fallingVariants}
            animate="fall"
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 12}px`,
            }}
          >
            {[FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaComment][i % 5]({
              className: `text-amber-${200 + Math.floor(Math.random() * 3) * 100} opacity-30`
            })}
          </motion.div>
        ))}

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]" />
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
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/80 border border-amber-100 rounded-full px-6 py-3 mb-6 backdrop-blur-sm shadow-sm"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-10 rounded-full"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              <FaPaperPlane className="w-5 h-5 text-amber-600 relative z-10" />
              <span className="text-sm font-medium text-amber-700 relative z-10 uppercase tracking-wide">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
            >
              Contact{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent relative inline-block">
                Us
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to take your digital presence to the next level? Let's start a conversation 
              about how we can help your business grow.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content - Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <div className="space-y-6 backdrop-blur-sm bg-white/70 rounded-2xl p-8 border border-amber-50 shadow-sm">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We're here to help you navigate the digital landscape. Whether you're looking 
                    for a comprehensive marketing strategy or have a specific project in mind, 
                    our team is ready to assist you.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Fill out the form or use any of the contact methods below. We typically 
                    respond within a few hours during business days.
                  </p>
                </div>
              </div>

              {/* Contact Methods */}
              <motion.div 
                variants={containerVariants}
                className="grid gap-6"
              >
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <method.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                        <p className="text-lg text-gray-800 font-semibold mb-1">{method.details}</p>
                        <p className="text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-100 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 text-gray-600" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/50 backdrop-blur-sm transition-all duration-200"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/50 backdrop-blur-sm transition-all duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/50 backdrop-blur-sm transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <FaComment className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/50 backdrop-blur-sm resize-none transition-all duration-200"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FaPaperPlane className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>

              {/* Additional Info */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-center text-white"
              >
                <h4 className="text-lg font-semibold mb-2">Emergency Support</h4>
                <p className="text-amber-100 mb-3">Need immediate assistance?</p>
                <p className="text-xl font-bold">+1 (555) 123-HELP</p>
                <p className="text-amber-100 text-sm mt-2">24/7 Technical Support</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ContactUs;