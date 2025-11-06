import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

const Contact = ({ 
  mode = "combined", // "it", "marketing", or "combined"
  title = null,
  subtitle = null
}) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
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
      mobile: '',
      email: ''
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const getMainTitle = () => {
    if (title) return title;
    
    switch (mode) {
      case "it":
        return "Let's Build Your Tech Solution";
      case "marketing":
        return "Boost Your Digital Growth";
      case "combined":
      default:
        return "Start Your Project Today";
    }
  };

  const getSubtitle = () => {
    if (subtitle) return subtitle;
    
    switch (mode) {
      case "it":
        return "Get expert IT solutions tailored to your business needs. Our team is ready to bring your ideas to life.";
      case "marketing":
        return "Drive results with data-driven marketing strategies. Let's grow your business together.";
      case "combined":
      default:
        return "Transform your vision into reality. Share your details and we'll get back to you with the perfect solution.";
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

  const getBenefits = () => {
    switch (mode) {
      case "it":
        return [
         
        ];
      case "marketing":
        return [
        
        ];
      case "combined":
      default:
        return [
         
        ];
    }
  };

  return (
    <section id="contact" className="relative bg-white text-gray-800 py-16 lg:py-15">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className={`absolute top-0 left-0 w-80 h-80 bg-gradient-to-r ${getGradientColors()} rounded-full filter blur-3xl opacity-5`} />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-50 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
            {/* Left Content - Text & Benefits */}
            <div className="w-full lg:w-2/5">
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                  {getMainTitle()}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {getSubtitle()}
                </p>
              </motion.div>

              {/* Benefits List */}
              <motion.div variants={itemVariants} className="space-y-6">
                {getBenefits().map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${getGradientColors()} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>

            {/* Right Content - Form */}
            <div className="w-full lg:w-3/5">
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-xl"
              >
               

                <form onSubmit={handleSubmit} className="space-y-6">
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

                  {/* Mobile Field */}
                  <div className="space-y-2">
                    <label htmlFor="mobile" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <FaPhone className="w-4 h-4 text-green-500" />
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your mobile number"
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
                      placeholder="Enter your email address"
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
                        Contact Me Now
                      </>
                    )}
                  </motion.button>

                  
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