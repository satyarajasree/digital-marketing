import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const IndustryCard = ({ title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
    >
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Industries = () => {
  const industries = [
    {
      title: "E-commerce",
      description: "Drive online sales with targeted digital marketing strategies designed for e-commerce success."
    },
    {
      title: "Healthcare",
      description: "Build trust and reach patients with compliant, effective digital marketing solutions."
    },
    {
      title: "Technology",
      description: "Showcase innovation and connect with tech-savvy audiences through cutting-edge marketing."
    },
    {
      title: "Finance",
      description: "Establish credibility and attract clients with secure, results-driven marketing campaigns."
    },
    {
      title: "Real Estate",
      description: "Generate leads and close deals with property-focused digital marketing strategies."
    },
    {
      title: "Education",
      description: "Reach students and educators with impactful marketing that drives enrollment and engagement."
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We specialize in delivering tailored digital marketing solutions across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.title} {...industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;