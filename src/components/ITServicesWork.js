// src/pages/ITServicesWork.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaServer,
  FaMobileAlt,
  FaCloud
} from "react-icons/fa";

const ITServicesWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // IT Services Portfolio Data
  const portfolioData = [
    {
      title: "Enterprise Cloud Migration",
      client: "Global Finance Corp",
      description: "Large-scale migration of legacy financial systems to secure cloud infrastructure, ensuring compliance, scalability, and enhanced performance for critical financial operations.",
      category: "Cloud Infrastructure",
      results: [
        { metric: "Infrastructure Cost", value: "40%", change: "-", icon: FaChartLine },
        { metric: "System Performance", value: "300%", change: "+", icon: FaRocket },
        { metric: "Uptime SLA", value: "99.9%", change: "+", icon: FaUsers }
      ],
      timeline: "8 Months",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Security"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      liveUrl: "https://example.com",
      icon: FaCloud
    },
    {
      title: "Custom CRM Development",
      client: "SalesForce Pro",
      description: "Enterprise-grade CRM solution with advanced analytics, automation workflows, and seamless integration with existing sales tools and communication platforms.",
      category: "Web Application",
      results: [
        { metric: "Sales Efficiency", value: "60%", change: "+", icon: FaRocket },
        { metric: "Data Accuracy", value: "95%", change: "+", icon: FaChartLine },
        { metric: "Reporting Time", value: "80%", change: "-", icon: FaUsers }
      ],
      timeline: "5 Months",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "API Integration"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      liveUrl: "https://example.com",
      icon: FaServer
    },
    {
      title: "Mobile Banking Application",
      client: "SecureBank Financial",
      description: "Secure mobile banking platform with biometric authentication, real-time transactions, and advanced fraud detection for modern digital banking experience.",
      category: "Mobile Development",
      results: [
        { metric: "User Adoption", value: "85%", change: "+", icon: FaUsers },
        { metric: "Security Score", value: "9.8/10", change: "+", icon: FaChartLine },
        { metric: "Customer Rating", value: "4.9★", change: "+", icon: FaRocket }
      ],
      timeline: "6 Months",
      technologies: ["React Native", "Firebase", "Biometric Auth", "REST APIs", "Security"],
      status: "Live",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      liveUrl: "https://example.com",
      icon: FaMobileAlt
    }
  ];

  return (
    <section
      id="it-services-work"
      className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(120,119,198,0.1),transparent)]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              IT Services{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Building robust technology solutions that solve complex business challenges 
              and drive digital transformation across industries.
            </motion.p>
          </div>

          {/* Case Studies Section - Only Cards, No CollageGrid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          >
            {portfolioData.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 overflow-hidden hover:border-blue-500/50 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      project.status === 'Completed' || project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-500/30">
                      <project.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  {/* Live Preview Button */}
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 text-white" />
                  </motion.a>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Client & Title */}
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-1">{project.client}</p>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <result.icon className="w-4 h-4 mx-auto mb-1 text-blue-400" />
                        <div className="text-lg font-bold text-blue-400">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full border border-blue-500/20 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <span className="text-sm text-gray-400">
                      {project.timeline}
                    </span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-sm text-blue-400 font-medium group/btn"
                    >
                      View Details
                      <FaArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
          >
            {[
              { number: "99.9%", label: "System Uptime", color: "from-blue-400 to-cyan-400" },
              { number: "40%", label: "Cost Reduction", color: "from-blue-400 to-indigo-400" },
              { number: "300%", label: "Performance Improvement", color: "from-purple-400 to-pink-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Project</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ITServicesWork;