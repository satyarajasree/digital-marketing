import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, FaMobile, FaLink, 
  FaFileAlt, FaArrowRight, FaCheck, FaPlay
} from 'react-icons/fa';

const SEOOptimization = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const seoServices = [
    {
      icon: <FaSearch className="text-3xl" />,
      title: "Keyword Research",
      description: "Comprehensive keyword analysis to target the right audience and drive qualified traffic to your website.",
      features: ["Long-tail keywords", "Competitor analysis", "Search volume data", "Intent-based targeting"]
    },
    {
      icon: <FaFileAlt className="text-3xl" />,
      title: "Content Optimization",
      description: "Optimize your content with strategic keyword placement and engaging meta descriptions.",
      features: ["On-page SEO", "Meta tags optimization", "Content structure", "Readability analysis"]
    },
    {
      icon: <FaLink className="text-3xl" />,
      title: "Link Building",
      description: "Build high-quality backlinks from authoritative websites to boost your domain authority.",
      features: ["Guest posting", "Broken link building", "Influencer outreach", "Local citations"]
    },
    {
      icon: <FaMobile className="text-3xl" />,
      title: "Technical SEO",
      description: "Improve website performance, speed, and technical structure for better search engine crawling.",
      features: ["Site speed optimization", "Mobile responsiveness", "XML sitemaps", "Structured data"]
    }
  ];

  const seoResults = [
    { metric: "Organic Traffic", value: "250%", change: "increase" },
    { metric: "Keyword Rankings", value: "500+", change: "keywords" },
    { metric: "Conversion Rate", value: "180%", change: "improvement" },
    { metric: "Page Speed", value: "2.1s", change: "load time" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "SEO Audit",
      description: "Comprehensive analysis of your current SEO performance and opportunities"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom SEO strategy tailored to your business goals and target audience"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execution of technical, on-page, and off-page SEO optimizations"
    },
    {
      step: "04",
      title: "Monitoring & Reporting",
      description: "Continuous tracking and monthly performance reports with insights"
    }
  ];

  return (
    <section id="seo-optimization" className="relative py-24 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <FaSearch className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold text-sm">SEO Optimization</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Dominate Search Engines with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Advanced SEO
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full" />

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Drive sustainable organic growth with our data-driven SEO strategies that put your website 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold"> on the first page of Google</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Main Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Comprehensive SEO Services for <span className="text-blue-400">Maximum Visibility</span>
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our holistic approach to SEO combines technical expertise, content excellence, and strategic 
              link building to deliver long-term, sustainable results that drive qualified traffic and increase conversions.
            </p>

            {/* Results Metrics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {seoResults.map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center backdrop-blur-sm"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">{result.value}</div>
                  <div className="text-white font-semibold mb-1">{result.metric}</div>
                  <div className="text-gray-400 text-sm">{result.change}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get Free SEO Audit
              <FaArrowRight className="inline ml-2 w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Right Content - Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {seoServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCheck className="w-3 h-3 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800/20 border border-gray-700 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-cyan-400">4-Step SEO</span> Process
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A systematic approach to SEO that delivers measurable results and sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-cyan-400">Skyrocket Your Rankings</span>?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to develop a custom SEO strategy that drives organic traffic and boosts your online visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start SEO Campaign
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              >
                <FaPlay className="inline mr-2 w-4 h-4" />
                Watch Case Study
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOOptimization;