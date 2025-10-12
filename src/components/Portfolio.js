import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Revolution",
      category: "seo",
      description: "Increased organic traffic by 300% for leading e-commerce brand",
      image: "🛒"
    },
    {
      id: 2,
      title: "Social Media Campaign",
      category: "social",
      description: "Viral campaign reaching 5M+ impressions across platforms",
      image: "📱"
    },
    {
      id: 3,
      title: "PPC Mastery",
      category: "ppc",
      description: "Reduced CPA by 60% while increasing conversions by 150%",
      image: "🎯"
    },
    {
      id: 4,
      title: "Content Strategy",
      category: "content",
      description: "Developed content framework driving 10K+ monthly leads",
      image: "✍️"
    },
    {
      id: 5,
      title: "Brand Transformation",
      category: "branding",
      description: "Complete digital rebrand increasing market share by 45%",
      image: "🎨"
    },
    {
      id: 6,
      title: "Web Development",
      category: "development",
      description: "High-performance website with 99.9% uptime and 3x faster load times",
      image: "💻"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'seo', label: 'SEO' },
    { key: 'social', label: 'Social Media' },
    { key: 'ppc', label: 'PPC' },
    { key: 'content', label: 'Content' },
    { key: 'development', label: 'Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve remarkable results through innovative digital strategies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;