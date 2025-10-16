import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaAward,
  FaChartLine,
  FaHandshake,
  FaStar,
  FaGlobe,
  FaArrowLeft,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JobApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    cover_letter: "",
    resume: null,
  });

  // Fetch job details
  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8000/api/jobs/${id}/`);
        if (!response.ok) throw new Error("Failed to fetch job details");
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

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
    submitData.append("job", id);
    submitData.append("full_name", formData.full_name);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("cover_letter", formData.cover_letter);
    submitData.append("resume", formData.resume);

    try {
      const response = await fetch("http://localhost:8000/api/apply/", {
        method: "POST",
        body: submitData,
      });

      if (!response.ok) throw new Error("Failed to submit application");
      
      setSubmitSuccess(true);
      setTimeout(() => {
        navigate("/careers");
      }, 3000);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading job details...</p>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Not Found</h2>
            <button
              onClick={() => navigate("/careers")}
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-xl hover:bg-amber-600 transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Careers
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (submitSuccess) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white rounded-2xl p-12 shadow-lg max-w-md mx-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <FaCheckCircle className="w-10 h-10 text-green-500" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Application Submitted!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying to {job.title}. We'll review your application and get back to you soon.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/careers")}
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-xl hover:bg-amber-600 transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Careers
            </motion.button>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative py-8">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
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
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/careers")}
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Careers
          </motion.button>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8"
          >
            {/* Job Details Column */}
            <div className="space-y-6">
              {/* Job Header */}
              <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 text-sm font-medium px-3 py-1 rounded-full">
                    Full-time
                  </span>
                  {job.department && (
                    <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                      <FaBriefcase className="w-3 h-3" />
                      {job.department}
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {job.title}
                </h1>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  {job.location && (
                    <span className="inline-flex items-center gap-1">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      {job.location}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1">
                    <FaChartLine className="w-4 h-4" />
                    {job.experience}+ years experience
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <FaCalendarAlt className="w-4 h-4" />
                    Posted {new Date(job.posted_on).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>

              {/* Job Description */}
              <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Job Description</h2>
                <div 
                  className="prose prose-amber max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </motion.div>

              {/* Requirements */}
              <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
                <div 
                  className="prose prose-amber max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: job.requirements }}
                />
              </motion.div>

              {/* What We Offer */}
              <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: FaRocket, text: "Career growth opportunities" },
                    { icon: FaUsers, text: "Collaborative team environment" },
                    { icon: FaAward, text: "Competitive compensation" },
                    { icon: FaChartLine, text: "Professional development" },
                    { icon: FaHandshake, text: "Flexible work arrangements" },
                    { icon: FaGlobe, text: "Remote-first culture" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Application Form Column */}
            <motion.div variants={itemVariants} className="lg:sticky lg:top-8 h-fit">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply for this Position</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below to submit your application for {job.title}.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
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
                        Submit Application
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this application, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JobApplication;