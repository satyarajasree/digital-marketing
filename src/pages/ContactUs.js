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
  FaMobile,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  // Validators
  const validateIndianMobile = (mobile) => {
    const indianMobileRegex = /^[6-9]\d{9}$/;
    return indianMobileRegex.test(mobile.replace(/\D/g, ''));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!validateIndianMobile(formData.mobile)) {
      newErrors.mobile = "Please enter a valid Indian mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Call Us",
      details: "+91 98765 43210",
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
      description: "Mumbai, Maharashtra 400001",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: "Monday - Friday",
      description: "9:00 AM - 6:00 PM IST",
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
    const { name, value } = e.target;
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://digitalmarketing.pythonanywhere.com/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCSRFToken(), // You'll need to implement this
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullname: "",
          mobile: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        console.error('Submission error:', errorData);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to get CSRF token (you might need to adjust this based on your Django setup)
  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return cookieValue || '';
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
                
                {/* Submission Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700"
                  >
                    Thank you for your message! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
                  >
                    There was an error sending your message. Please try again or contact us directly.
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          id="fullname"
                          name="fullname"
                          required
                          value={formData.fullname}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/50 backdrop-blur-sm transition-all duration-200 ${
                            errors.fullname ? 'border-red-300' : 'border-amber-200'
                          }`}
                          placeholder="Your full name"
                        />
                      </div>
                      {errors.fullname && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullname}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <FaMobile className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          required
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/50 backdrop-blur-sm transition-all duration-200 ${
                            errors.mobile ? 'border-red-300' : 'border-amber-200'
                          }`}
                          placeholder="9876543210"
                          pattern="[6-9]{1}[0-9]{9}"
                          title="Please enter a valid Indian mobile number"
                        />
                      </div>
                      {errors.mobile && (
                        <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                      )}
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
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/50 backdrop-blur-sm transition-all duration-200 ${
                          errors.email ? 'border-red-300' : 'border-amber-200'
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
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
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/50 backdrop-blur-sm transition-all duration-200 ${
                        errors.subject ? 'border-red-300' : 'border-amber-200'
                      }`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                    )}
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
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/50 backdrop-blur-sm resize-none transition-all duration-200 ${
                          errors.message ? 'border-red-300' : 'border-amber-200'
                        }`}
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <FaPaperPlane className="w-5 h-5" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-5 h-5" />
                        Send Message
                      </>
                    )}
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
                <p className="text-xl font-bold">+91 98765 43210</p>
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