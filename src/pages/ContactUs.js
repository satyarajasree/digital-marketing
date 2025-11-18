import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [formType, setFormType] = useState("it");

  const [itData, setItData] = useState({
    fullname: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: "",
    deadline: "",
    file: null,
  });

  const [dmData, setDmData] = useState({
    fullname: "",
    brand: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    goals: [],
    description: "",
    file: null,
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      transition: { duration: 0.6 },
    },
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const handleITChange = (e) => {
    const { name, value, files } = e.target;
    setItData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleDMChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (type === "checkbox") {
      setDmData((prev) => {
        const newGoals = checked
          ? [...prev.goals, value]
          : prev.goals.filter((g) => g !== value);
        return { ...prev, goals: newGoals };
      });
      return;
    }

    setDmData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleITSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      formType: "IT",
      ...itData,
    };

    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://digitalmarketing.pythonanywhere.com/api/contact/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setItData({
          fullname: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          description: "",
          deadline: "",
          file: null,
        });
      } else setSubmitStatus("error");
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDMSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      formType: "Digital Marketing",
      ...dmData,
    };

    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://digitalmarketing.pythonanywhere.com/api/contact/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setDmData({
          fullname: "",
          brand: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          goals: [],
          description: "",
          file: null,
        });
      } else setSubmitStatus("error");
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Call Us",
      details: "+91 9976089089",
      description: "Mon–Sat, 11AM – 8PM",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: "info@amplinova.com",
      description: "We reply within 24 hours",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: "Hyderabad, Telangana",
      description: "India",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: "Mon – Fri",
      description: "11:00 AM – 8:00 PM IST",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "#", color: "hover:text-blue-600" },
    { icon: FaTwitter, url: "#", color: "hover:text-cyan-500" },
    { icon: FaFacebook, url: "#", color: "hover:text-blue-500" },
    { icon: FaInstagram, url: "#", color: "hover:text-pink-500" },
  ];

  return (
    <>
      <Navbar />

      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8">
        <div className="absolute inset-0 overflow-hidden rounded-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            {/* HEADER */}
            <div className="text-center mb-16">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-white/80 border border-amber-100 rounded-full px-6 py-3 mb-6 shadow-sm"
              >
                <FaPaperPlane className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-medium text-amber-700 uppercase">
                  Get In Touch
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl font-bold mb-6"
              >
                Contact{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Us
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Choose your service type and fill the related form.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* LEFT SECTION */}
              <motion.div variants={itemVariants} className="space-y-8">
                {contactMethods.map((method, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-white/80 p-6 rounded-2xl border border-amber-100 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <method.icon className="w-6 h-6 text-white" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">{method.title}</h3>
                        <p className="text-lg font-semibold">{method.details}</p>
                        <p className="text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Social */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>

                  <div className="flex gap-4">
                    {socialLinks.map((s, i) => (
                      <a
                        key={i}
                        href={s.url}
                        className={`w-12 h-12 bg-white/80 rounded-xl border border-amber-100 flex items-center justify-center shadow-sm ${s.color}`}
                      >
                        <s.icon className="w-5 h-5 text-gray-600" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* RIGHT SECTION — FORM */}
              <motion.div variants={itemVariants}>
                <div className="bg-white/80 p-8 rounded-2xl border border-amber-100 shadow-sm">
                  {/* Tabs */}
                  <div className="flex w-full mb-8">
                    <button
                      onClick={() => setFormType("it")}
                      className={`w-1/2 py-3 font-semibold rounded-l-xl border transition ${
                        formType === "it"
                          ? "bg-amber-500 text-white border-amber-600"
                          : "bg-white text-gray-600 border-gray-300"
                      }`}
                    >
                      IT Services
                    </button>

                    <button
                      onClick={() => setFormType("dm")}
                      className={`w-1/2 py-3 font-semibold rounded-r-xl border transition ${
                        formType === "dm"
                          ? "bg-amber-500 text-white border-amber-600"
                          : "bg-white text-gray-600 border-gray-300"
                      }`}
                    >
                      Digital Marketing
                    </button>
                  </div>

                  {/* SUCCESS / ERROR */}
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                      Your message has been sent!
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                      Something went wrong. Try again.
                    </div>
                  )}

                  {/* IT FORM */}
                  {formType === "it" && (
                    <form onSubmit={handleITSubmit} className="space-y-6">
                      <h3 className="text-2xl font-bold mb-4">
                        IT Development & Tech Solutions
                      </h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label>Full Name *</label>
                          <input
                            type="text"
                            name="fullname"
                            value={itData.fullname}
                            onChange={handleITChange}
                            className="w-full px-4 py-3 border rounded-xl"
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
                            className="w-full px-4 py-3 border rounded-xl"
                          />
                        </div>
                      </div>

                      <div>
                        <label>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={itData.email}
                          onChange={handleITChange}
                          className="w-full px-4 py-3 border rounded-xl"
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
                          className="w-full px-4 py-3 border rounded-xl"
                        />
                      </div>

                      <div>
                        <label>Service Required *</label>
                        <select
                          name="service"
                          value={itData.service}
                          onChange={handleITChange}
                          className="w-full px-4 py-3 border rounded-xl"
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
                          className="w-full px-4 py-3 border rounded-xl"
                          required
                        >
                          <option value="">Select Budget</option>
                          <option>₹25,000 – ₹50,000</option>
                          <option>₹50,000 – ₹1,00,000</option>
                          <option>₹1,00,000 – ₹5,00,000</option>
                          <option>₹5,00,000+</option>
                        </select>
                      </div>

                      <div>
                        <label>Project Description *</label>
                        <textarea
                          name="description"
                          rows="5"
                          value={itData.description}
                          onChange={handleITChange}
                          className="w-full px-4 py-3 border rounded-xl"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-amber-600 text-white rounded-xl font-semibold"
                      >
                        {isSubmitting ? "Sending..." : "Request Proposal"}
                      </button>
                    </form>
                  )}

                  {/* DM FORM */}
                  {formType === "dm" && (
                    <form onSubmit={handleDMSubmit} className="space-y-6">
                      <h3 className="text-2xl font-bold mb-4">
                        Digital Marketing, Branding & Growth Solutions
                      </h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label>Full Name *</label>
                          <input
                            type="text"
                            name="fullname"
                            value={dmData.fullname}
                            onChange={handleDMChange}
                            className="w-full px-4 py-3 border rounded-xl"
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
                            className="w-full px-4 py-3 border rounded-xl"
                          />
                        </div>
                      </div>

                      <div>
                        <label>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={dmData.email}
                          onChange={handleDMChange}
                          className="w-full px-4 py-3 border rounded-xl"
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
                          className="w-full px-4 py-3 border rounded-xl"
                        />
                      </div>

                      <div>
                        <label>Service Interested In *</label>
                        <select
                          name="service"
                          value={dmData.service}
                          onChange={handleDMChange}
                          className="w-full px-4 py-3 border rounded-xl"
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

                      <div>
                        <label>Monthly Marketing Budget *</label>
                        <select
                          name="budget"
                          value={dmData.budget}
                          onChange={handleDMChange}
                          className="w-full px-4 py-3 border rounded-xl"
                          required
                        >
                          <option value="">Select Budget</option>
                          <option>₹20,000 – ₹50,000</option>
                          <option>₹50,000 – ₹1,00,000</option>
                          <option>₹1,00,000 – ₹5,00,000</option>
                          <option>₹5,00,000+</option>
                        </select>
                      </div>

                      <div>
                        <label>Business Goals *</label>
                        <div className="grid grid-cols-2 gap-3 mt-2">
                          {[
                            "Increase Leads",
                            "Improve Brand Awareness",
                            "Grow Social Media",
                            "Increase Website Traffic",
                            "Scale Sales",
                          ].map((goal) => (
                            <label
                              key={goal}
                              className="flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                value={goal}
                                checked={dmData.goals.includes(goal)}
                                onChange={handleDMChange}
                              />
                              {goal}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label>Describe Your Marketing Needs *</label>
                        <textarea
                          name="description"
                          rows="5"
                          value={dmData.description}
                          onChange={handleDMChange}
                          className="w-full px-4 py-3 border rounded-xl"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-amber-600 text-white rounded-xl font-semibold"
                      >
                        {isSubmitting
                          ? "Sending..."
                          : "Get Marketing Strategy"}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>

            {/* EMERGENCY */}
            <motion.div
              variants={itemVariants}
              className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-10 text-center text-white shadow-lg"
            >
              <h4 className="text-2xl font-bold">Emergency Support</h4>
              <p className="text-amber-100 mb-4 text-lg">
                Need immediate assistance? Our team is available any time.
              </p>
              <p className="text-3xl font-extrabold">+91 9976089089</p>
              <p className="text-amber-100 text-sm mt-2 uppercase tracking-widest">
                24/7 Technical Support
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;