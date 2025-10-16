import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaAward,
  FaChartLine,
  FaHandshake,
  FaStar,
  FaGlobe,
  FaArrowRight,
  FaHeart,
  FaTimes,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Careers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [jobs, setJobs] = useState([]);
  const [showOpenApplication, setShowOpenApplication] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    desired_position: "",
    cover_letter: "",
    resume: null,
  });

  // ✅ Fetch jobs from Django API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://digitalmarketing.pythonanywhere.com/api/jobs/");
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const fallingVariants = {
    fall: {
      y: [-100, 1000],
      rotate: [0, 180],
      opacity: [0, 0.3, 0],
      transition: {
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        delay: Math.random() * 5,
        ease: "linear",
      },
    },
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const culture = [
    {
      icon: FaUsers,
      title: "Collaborative Spirit",
      description: "We believe in the power of teamwork and shared success",
    },
    {
      icon: FaRocket,
      title: "Growth Mindset",
      description: "Always learning, always improving, always innovating",
    },
    {
      icon: FaHandshake,
      title: "Transparent Communication",
      description: "Open dialogue and honest feedback at all levels",
    },
    {
      icon: FaHeart,
      title: "Work-Life Balance",
      description: "We value your well-being as much as your work",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.resume) {
      alert("Please upload your resume");
      return;
    }

    setSubmitting(true);

    const submitData = new FormData();
    submitData.append("full_name", formData.full_name);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("desired_position", formData.desired_position);
    submitData.append("cover_letter", formData.cover_letter);
    submitData.append("resume", formData.resume);

    try {
      const response = await fetch("https://digitalmarketing.pythonanywhere.com/api/open-application/", {
        method: "POST",
        body: submitData,
      });

      if (!response.ok) throw new Error("Failed to submit application");
      
      setSubmitSuccess(true);
      setTimeout(() => {
        setShowOpenApplication(false);
        setSubmitSuccess(false);
        // Reset form
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          desired_position: "",
          cover_letter: "",
          resume: null,
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetModal = () => {
    setShowOpenApplication(false);
    setSubmitSuccess(false);
    setFormData({
      full_name: "",
      email: "",
      phone: "",
      desired_position: "",
      cover_letter: "",
      resume: null,
    });
  };

  return (
    <>
      <Navbar />
      <section
        id="careers"
        className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8"
      >
        {/* Falling Animated Background */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
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

          {/* Falling Elements */}
          {[...Array(25)].map((_, i) => (
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
              {[FaStar, FaRocket, FaChartLine, FaUsers, FaAward][i % 5]({
                className: `text-amber-${200 + Math.floor(Math.random() * 3) * 100
                  } opacity-40`,
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
                <FaRocket className="w-5 h-5 text-amber-600 relative z-10" />
                <span className="text-sm font-medium text-amber-700 uppercase tracking-wide relative z-10">
                  We're Hiring Amazing Talent
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Join Our{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Team
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              >
                Help us shape the future of digital marketing while growing your
                career in a supportive, innovative, and remote-first environment.
              </motion.p>
            </div>

            {/* Culture Section */}
            <motion.div variants={itemVariants} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Culture
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We've built a workplace where creativity thrives, collaboration
                  is celebrated, and every team member can make an impact.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {culture.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Open Positions - 3 Column Layout */}
            <motion.div variants={itemVariants} className="space-y-8 mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.length === 0 ? (
                  <div className="col-span-3">
                    <p className="text-gray-600 text-center py-8">
                      No open positions available at the moment.
                    </p>
                  </div>
                ) : (
                  jobs.map((job) => (
                    <motion.div
                      key={job.id}
                      whileHover={{ y: -2 }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col h-full"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                          {job.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 text-sm font-medium px-3 py-1 rounded-full">
                          Full-time
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                          <FaGlobe className="w-3 h-3" />
                          {job.location || "Remote"}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                          <FaChartLine className="w-3 h-3" />
                          {job.experience || "Not specified"}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                          <FaUsers className="w-3 h-3" />
                          {job.department || "General"}
                        </span>
                      </div>

                      <div className="flex-grow mb-4">
                        <p
                          className="text-gray-700 leading-relaxed text-sm line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: job.description }}
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => (window.location.href = `/apply/${job.id}`)}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 mt-auto"
                      >
                        Apply Now
                        <FaArrowRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-white"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  >
                    <FaStar className="w-4 h-4" />
                  </motion.div>
                ))}
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
                Don't See the Perfect Role?
              </h3>
              <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                We're always looking for talented people. Send us your resume and
                tell us how you can contribute to our team.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowOpenApplication(true)}
                className="inline-flex items-center gap-3 bg-white text-amber-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 relative z-10"
              >
                Send Open Application
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />

      {/* Open Application Modal */}
      {showOpenApplication && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={resetModal}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                Open Application
              </h2>
              <button
                onClick={resetModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <FaCheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in joining our team. We'll review your application and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        required
                        value={formData.full_name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Desired Position */}
                    <div>
                      <label htmlFor="desired_position" className="block text-sm font-medium text-gray-700 mb-2">
                        Desired Position
                      </label>
                      <input
                        type="text"
                        id="desired_position"
                        name="desired_position"
                        value={formData.desired_position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="e.g., Marketing Manager, Developer"
                      />
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label htmlFor="cover_letter" className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      id="cover_letter"
                      name="cover_letter"
                      rows={6}
                      value={formData.cover_letter}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-vertical"
                      placeholder="Tell us about yourself, your skills, and why you'd like to join our team..."
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                      Resume *
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="resume"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <FaPaperPlane className="w-8 h-8 mb-3 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF, DOC, DOCX (MAX. 10MB)
                          </p>
                        </div>
                        <input
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          required
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {formData.resume && (
                      <p className="mt-2 text-sm text-green-600">
                        ✓ {formData.resume.name}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: submitting ? 1 : 1.02 }}
                    whileTap={{ scale: submitting ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-5 h-5" />
                        Submit Open Application
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this application, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Careers;