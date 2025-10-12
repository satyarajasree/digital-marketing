import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceCard = ({ title, description, icon, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
    >
      <div className="text-orange-500 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Boost your search engine rankings with our comprehensive SEO strategies that drive organic traffic and increase visibility.",
      icon: "🚀"
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience across all social platforms with creative content and data-driven advertising campaigns.",
      icon: "📱"
    },
    {
      title: "PPC Advertising",
      description: "Maximize your ROI with targeted pay-per-click campaigns that convert visitors into loyal customers.",
      icon: "🎯"
    },
    {
      title: "Content Marketing",
      description: "Tell your brand's story with compelling content that resonates with your audience and builds trust.",
      icon: "✍️"
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns that drive engagement and sales.",
      icon: "📧"
    },
    {
      title: "Web Development",
      description: "Create stunning, responsive websites that provide exceptional user experiences and drive conversions.",
      icon: "💻"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to drive your business growth and maximize your online potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;