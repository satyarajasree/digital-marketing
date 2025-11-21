import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheck,
  FaLightbulb
} from 'react-icons/fa';

const Contact = ({ 
  mode = "combined",
  title = null,
  subtitle = null
}) => {

  const [formType, setFormType] = useState("it");
  const [submitStatus, setSubmitStatus] = useState(null);

  const [itData, setItData] = useState({
    fullname: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: ""
  });

  const [dmData, setDmData] = useState({
    fullname: "",
    brand: "",
    email: "",
    phone: "",
    service: "",
    goals: [],
    description: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleITChange = (e) => {
    setItData({
      ...itData,
      [e.target.name]: e.target.value
    });
  };

  const handleITSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(res => setTimeout(res, 1500));
    setSubmitStatus("success");
    setItData({
      fullname: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      description: ""
    });
    setIsSubmitting(false);
  };

  // MULTI CHECKBOX HANDLER
  const handleDMChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedGoals = [...dmData.goals];
      if (checked) updatedGoals.push(value);
      else updatedGoals = updatedGoals.filter(g => g !== value);

      setDmData({ ...dmData, goals: updatedGoals });
      return;
    }
    setDmData({ ...dmData, [name]: value });
  };

  const handleDMSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(res => setTimeout(res, 1500));
    setSubmitStatus("success");

    setDmData({
      fullname: "",
      brand: "",
      email: "",
      phone: "",
      service: "",
      goals: [],
      description: ""
    });

    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const getMainTitle = () => {
  if (title) return title;
  switch (mode) {
    case "it": return "Let's Build Your Tech Solution";
    case "marketing": return "Boost Your Digital Growth";
    default: return "Start Your Project Today";
  }
};

const getSubtitle = () => {
  if (subtitle) return subtitle;
  switch (mode) {
    case "it": return "Get expert IT solutions tailored to your business needs.";
    case "marketing": return "Drive results with data-driven marketing strategies.";
    default:
      return "Transform your vision into reality. Share your details and we'll get back to you within 24 hours.";
  }
};

/* ✅ ADD THIS FUNCTION HERE */
const getBenefits = () => {
  switch (mode) {
    case "it":
      return [
        "Expert technical consultation",
        "Custom software development",
        "24/7 support & maintenance",
        "Scalable cloud solutions",
      ];
    case "marketing":
      return [
        "Data-driven strategy session",
        "Competitor analysis report",
        "Custom marketing plan",
        "ROI-focused campaigns",
      ];
    default:
      return [
        "Free project consultation",
        "Detailed proposal within 24h",
        "Dedicated project manager",
        "Flexible engagement models",
      ];
  }
};


  return (
    <section id="contact" className="relative bg-white text-gray-800 py-12 lg:py-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-5" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-orange-50 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >

          {/* 25% LEFT | 75% RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] gap-8 items-start">

            {/* LEFT PANEL — SHIFTED DOWN 100px ON ALL SCREENS */}
            <motion.div 
              variants={itemVariants} 
              className="space-y-6 mt-[100px]"
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  {getMainTitle()}
                </h2>
                <p className="text-lg text-gray-600">
                  {getSubtitle()}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FaLightbulb className="text-yellow-500" /> What you'll get:
                </h3>

                <ul className="space-y-3">
                  {getBenefits().map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Join 500+ satisfied clients</p>
                    <p className="text-xs text-gray-600">Trusted by businesses worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>
                        {/* RIGHT PANEL (FORM CONTAINER) */}
            <motion.div variants={itemVariants} className="pt-0 mt-0">
              <div className="bg-white p-8 rounded-md border border-gray-300 shadow-md w-full">

                {/* TAB SWITCHER */}
                <div className="flex w-full mb-8">
                  <button
                    onClick={() => setFormType("it")}
                    className={`w-1/2 py-3 font-semibold rounded-l-md border ${
                      formType === "it"
                        ? "bg-amber-500 text-white border-amber-600"
                        : "bg-white text-gray-600 border-gray-300"
                    }`}
                  >
                    IT Services
                  </button>

                  <button
                    onClick={() => setFormType("dm")}
                    className={`w-1/2 py-3 font-semibold rounded-r-md border ${
                      formType === "dm"
                        ? "bg-amber-500 text-white border-amber-600"
                        : "bg-white text-gray-600 border-gray-300"
                    }`}
                  >
                    Digital Marketing
                  </button>
                </div>

                {/* SUCCESS MESSAGE */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
                    Your message has been sent!
                  </div>
                )}

                {/* ERROR MESSAGE */}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                    Something went wrong. Try again.
                  </div>
                )}

                {/* IT FORM */}
                {formType === "it" && (
                  <form onSubmit={handleITSubmit} className="space-y-6">

                    <h3 className="text-2xl font-bold mb-4">
                      IT Development & Tech Solutions
                    </h3>

                    {/* Full Name + Company */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label>Full Name *</label>
                        <input
                          type="text"
                          name="fullname"
                          value={itData.fullname}
                          onChange={handleITChange}
                          className="w-full px-4 py-3 border border-gray-400 rounded-md text-gray-900 focus:outline-none focus:border-black hover:border-black"
                          style={{ caretColor: 'black' }}
                          required
                        />
                      </div>

                      <div>
                        <label>Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={itData.company}
                          onChange={handleITChange}
                          className="w-full px-4 py-3 border border-gray-400 rounded-md caret-black selection:bg-black selection:text-white text-gray-900 focus:outline-none focus:border-black hover:border-black"
                        />
                      </div>
                    </div>

                    {/* Email + Phone SIDE BY SIDE */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={itData.email}
                          onChange={handleITChange}
                          className="w-full px-4 py-3 border border-gray-400 rounded-md caret-black text-gray-900 focus:outline-none focus:border-gray-700"
                          required
                        />
                      </div>

                      <div>
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={itData.phone}
                          onChange={handleITChange}
                          className="w-full px-4 py-3 border border-gray-400 rounded-md caret-black text-gray-900 focus:outline-none focus:border-gray-700"
                        />
                      </div>
                    </div>

                    {/* Service Required + Budget SIDE BY SIDE */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label>Service Required *</label>
                        <select
                          name="service"
                          value={itData.service}
                          onChange={handleITChange}
                          className="w-full px-4 py-3 border border-gray-400 rounded-md caret-black text-gray-900 focus:outline-none focus:border-gray-700"
                          required
                        >
                          <option value="">Select Service</option>
                          <option>Web Development</option>
                          <option>App Development</option>
                          <option>Software Development</option>
                          <option>Cloud Solutions</option>
                          <option>IT Consulting</option>
                          <option>Automation/AI Integration</option>
                          <option>Cybersecurity</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label>Project Budget *</label>
                        <select
                          name="budget"
                          value={itData.budget}
                          onChange={handleITChange}
                          className="w-full px-4 py-3 border border-gray-400 rounded-md caret-black text-gray-900 focus:outline-none focus:border-gray-700"
                          required
                        >
                          <option value="">Select Budget</option>
                          <option>₹25,000 – ₹50,000</option>
                          <option>₹50,000 – ₹1,00,000</option>
                          <option>₹1,00,000 – ₹5,00,000</option>
                          <option>₹5,00,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Smaller textarea */}
                    <div>
                      <label>Project Description *</label>
                      <textarea
                        name="description"
                        rows="3"
                        value={itData.description}
                        onChange={handleITChange}
                        className="w-full px-4 py-3 border border-gray-400 rounded-md caret-black text-gray-900 focus:outline-none focus:border-gray-700"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-amber-600 text-white rounded-md font-semibold"
                    >
                      {isSubmitting ? "Sending..." : "Request Proposal"}
                    </button>
                  </form>
                )}

                {/* DIGITAL MARKETING FORM */}
                {formType === "dm" && (
                  <form onSubmit={handleDMSubmit} className="space-y-6">

                    <h3 className="text-2xl font-bold mb-4">
                      Digital Marketing, Branding & Growth Solutions
                    </h3>

                    {/* Name + Brand */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label>Full Name *</label>
                        <input
                          type="text"
                          name="fullname"
                          value={dmData.fullname}
                          onChange={handleDMChange}
                          className="w-full px-4 py-3 border border-gray-400 rounded-md caret-black text-gray-900 focus:outline-none focus:border-gray-700"
                          required
                        />
                      </div>

                      <div>
                        <label>Business / Brand Name</label>
                        <input
                          type="text"
                          name="brand"
                          value={dmData.brand}
                          onChange={handleDMChange}
                          className="w-full px-4 py-3 border border-gray-400 rounded-md caret-black text-gray-900 focus:outline-none focus:border-gray-700"
                        />
                      </div>
                    </div>

                    {/* Email + Phone SIDE BY SIDE */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={dmData.email}
                          onChange={handleDMChange}
                          className="w-full px-4 py-3 border border-gray-400 rounded-md caret-black text-gray-900 focus:outline-none focus:border-black-700"
                          required
                        />
                      </div>

                      <div>
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={dmData.phone}
                          onChange={handleDMChange}
                          className="w-full px-4 py-3 border border-gray-400 rounded-md caret-black text-gray-900 focus:outline-none focus:border-gray-700"
                        />
                      </div>
                    </div>

                    {/* SERVICE + BUSINESS GOALS SIDE BY SIDE */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Service Interested In */}
                      <div>
                        <label>Service Interested In *</label>
                        <select
                          name="service"
                          value={dmData.service}
                          onChange={handleDMChange}
                          className="w-full px-4 py-3 border border-gray-400 rounded-md caret-black text-gray-900 focus:outline-none focus:border-gray-700"
                          required
                        >
                          <option value="">Select Service</option>
                          <option>Social Media Marketing</option>
                          <option>Performance Marketing (Ads)</option>
                          <option>SEO</option>
                          <option>Branding & Creative Design</option>
                          <option>Content Marketing</option>
                          <option>Lead Generation</option>
                          <option>Website Marketing</option>
                          <option>Marketing Automation</option>
                          <option>All-in-One Digital Marketing</option>
                        </select>
                      </div>

                      {/* BUSINESS GOALS — 2 COLUMN CHECKBOXES */}
                      <div>
                        <label>Business Goals *</label>
                        <div className="grid grid-cols-2 gap-2 mt-2">

                          {[
                            "Increase Leads",
                            "Improve Brand Awareness",
                            "Grow Social Media",
                            "Increase Website Traffic",
                            "Scale Sales"
                          ].map(goal => (
                            <label key={goal} className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                value={goal}
                                checked={dmData.goals.includes(goal)}
                                onChange={handleDMChange}
                                className="cursor-pointer"
                              />
                              {goal}
                            </label>
                          ))}

                        </div>
                      </div>
                    </div>

                    {/* Smaller textarea */}
                    <div>
                      <label>Describe Your Marketing Needs *</label>
                      <textarea
                        name="description"
                        rows="3"
                        value={dmData.description}
                        onChange={handleDMChange}
                        className="w-full px-4 py-3 border border-gray-400 rounded-md caret-black text-gray-900 focus:outline-none focus:border-gray-700"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-amber-600 text-white rounded-md font-semibold"
                    >
                      {isSubmitting ? "Sending..." : "Get Marketing Strategy"}
                    </button>
                  </form>
                )}

              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;


