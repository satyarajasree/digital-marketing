import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaChartLine,
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaStar,
  FaRegCheckCircle,
  FaQuoteLeft,
  FaArrowRight,
} from "react-icons/fa";

const OurClients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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

  const clientStats = [
    { number: "50+", label: "Happy Clients", icon: FaUsers },
    { number: "3.5x", label: "Average ROI", icon: FaChartLine },
    { number: "98%", label: "Retention Rate", icon: FaShieldAlt },
    { number: "4.9/5", label: "Client Rating", icon: FaStar },
  ];

  // Dummy client logos and descriptions
  const clients = [
    {
      name: "TechNova Solutions",
      logo: "TN",
      industry: "SaaS Technology",
      description: "Increased lead generation by 200% through targeted PPC campaigns and SEO optimization.",
      results: "3.2x ROI in 6 months"
    },
    {
      name: "UrbanStyle Fashion",
      logo: "US",
      industry: "E-commerce Retail",
      description: "Transformed social media presence, achieving 150% growth in online sales and brand engagement.",
      results: "500% social media growth"
    },
    {
      name: "HealthPlus Wellness",
      logo: "HP",
      industry: "Healthcare Services",
      description: "Developed comprehensive content strategy that established them as industry thought leaders.",
      results: "80% brand awareness increase"
    },
    {
      name: "EduSmart Learning",
      logo: "ES",
      industry: "Education Technology",
      description: "Implemented data-driven marketing funnel that increased student enrollment by 300%.",
      results: "300% enrollment growth"
    },
    {
      name: "FinSecure Bank",
      logo: "FS",
      industry: "Financial Services",
      description: "Built trust and credibility through strategic content marketing and social proof campaigns.",
      results: "45% conversion rate improvement"
    },
    {
      name: "BuildRight Constructions",
      logo: "BR",
      industry: "Real Estate & Construction",
      description: "Created compelling visual storytelling that showcased projects and attracted premium clients.",
      results: "2.5x project inquiries"
    }
  ];

  return (
    <section
      id="our-clients"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden relative"
    >
      {/* Enhanced Dark Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Diagonal Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.02)_75%,transparent_75%)] bg-[size:40px_40px]" />
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-amber-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-500/5 to-transparent" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
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
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
            >
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-amber-300">
                Trusted by Industry Leaders
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Clients
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Powering growth for businesses across industries with Digital Pro solutions.
            </motion.p>
          </div>

          {/* Main Content Grid - Content on Left, Clients on Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Content - Mission & Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Mission Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <FaRocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Digital Pro Mission</h3>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  At Mage Marketer, we believe that every brand has a unique journey to growth, and our mission is to guide you through it with carefully designed strategies. We combine deep market research, innovative tools, and creative storytelling to craft campaigns that resonate with your audience and drive measurable impact.
                </p>

                <div className="flex items-center gap-2 text-amber-400 font-semibold cursor-pointer group">
                  <span>Learn about our approach</span>
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {clientStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-amber-400/30 transition-all"
                  >
                    <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Approach Highlights */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6">Our Digital Pro Approach</h4>
                
                <div className="space-y-4">
                  {[
                    "Deep market research & audience analysis",
                    "Innovative tools & technology integration",
                    "Creative storytelling & brand narrative",
                    "Multi-channel campaign orchestration"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <FaRegCheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Client Logos & Testimonials */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Our Valued Partners</h3>
                <p className="text-gray-400">Businesses we've helped achieve remarkable growth</p>
              </div>

              {/* Clients Grid */}
              <div className="grid gap-6">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      {/* Client Logo */}
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{client.logo}</span>
                      </div>
                      
                      {/* Client Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-white">{client.name}</h4>
                          <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full">
                            {client.industry}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">
                          {client.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-amber-400 text-sm font-semibold">
                            {client.results}
                          </span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="w-3 h-3 text-amber-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Client Success Quote */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-amber-400/20 mt-8"
              >
                <FaQuoteLeft className="w-8 h-8 text-amber-400/40 mb-4" />
                <p className="text-gray-300 text-lg leading-relaxed mb-4 italic">
                  "Digital Pro's approach transformed our digital presence. They don't just run campaigns—they build sustainable growth engines that continue to deliver results long after implementation."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CT</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Sarah Chen</div>
                    <div className="text-gray-400 text-sm">CEO, TechNova Solutions</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Value Proposition Section */}
          <motion.div
            variants={itemVariants}
            className="text-center relative overflow-hidden rounded-2xl mb-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Choose Digital Pro?
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-lg">
                Our approach is not just about running ads or creating content — it's about weaving together the right mix of SEO, social media, design, and analytics into a cohesive roadmap. This ensures that your brand not only captures attention but also builds trust, engagement, and long-lasting connections.
              </p>
              <p className="text-gray-300 font-semibold max-w-3xl mx-auto">
                With Mage Marketer as your partner, you gain more than a service provider — you gain a growth curator dedicated to unlocking your full potential.
              </p>
            </div>
          </motion.div>

         
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;