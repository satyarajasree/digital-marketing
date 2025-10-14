import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Creative Design",
      category: "design",
      description: "Innovative visual designs that capture brand essence and drive engagement",
      image: "🎨",
      results: "45% increase in brand recognition"
    },
    {
      id: 2,
      title: "Website Development",
      category: "website",
      description: "High-performance websites with seamless user experience and conversion optimization",
      image: "💻",
      results: "3x faster load times"
    },
    {
      id: 3,
      title: "Social Media Reels",
      category: "reels",
      description: "Engaging short-form video content that drives virality and brand awareness",
      image: "📱",
      results: "5M+ impressions"
    },
    {
      id: 4,
      title: "SEO Optimization",
      category: "seo",
      description: "Comprehensive SEO strategies that dominate search rankings and drive organic growth",
      image: "🔍",
      results: "300% organic traffic growth"
    },
    {
      id: 5,
      title: "Performance Marketing",
      category: "performance",
      description: "Data-driven campaigns that maximize ROI through precise targeting and optimization",
      image: "🎯",
      results: "60% lower CPA"
    },
    {
      id: 6,
      title: "Brand Strategy",
      category: "strategy",
      description: "Holistic brand development that positions businesses as industry leaders",
      image: "🚀",
      results: "45% market share increase"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'design', label: 'Creative Design' },
    { key: 'website', label: 'Website' },
    { key: 'reels', label: 'Reels' },
    { key: 'seo', label: 'SEO' },
    { key: 'performance', label: 'Performance Marketing' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8">
      {/* Same Background as Content Creation */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]" />
        
        {/* Static Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 border border-amber-100 rounded-full px-6 py-3 mb-6 backdrop-blur-sm shadow-sm"
          >
            <span className="text-sm font-medium text-amber-700">
              Our Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent relative inline-block">
              Work
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6"
          >
            Our Portfolio of Impactful Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            At MageMarketer, we believe great marketing is about driving measurable results while building lasting connections. Our portfolio showcases the diverse projects we've delivered across industries from business development strategies and social media campaigns to digital marketing solutions and creative designs. Each project reflects our commitment to innovation, creativity, and ROI-driven execution.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4 font-semibold"
          >
            Explore some of our recent work to see how we've helped brands grow, engage their audience, and strengthen their digital presence.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border backdrop-blur-sm ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-transparent shadow-lg shadow-amber-500/25'
                  : 'bg-white/80 text-gray-600 border-amber-100 hover:border-amber-300 hover:text-amber-600 shadow-sm'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Curved Border Container */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 p-0.5 -z-10 opacity-80">
                  <div className="w-full h-full rounded-3xl bg-transparent" />
                </div>

                {/* Main Project Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-3 border border-amber-100 shadow-lg overflow-hidden backdrop-blur-sm h-full">
                  <div className="p-6 h-full flex flex-col">
                    <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-amber-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-center leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="text-center mt-auto">
                      <span className="inline-block bg-amber-50 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full border border-amber-200 backdrop-blur-sm">
                        {project.results}
                      </span>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-orange-200 rounded-3xl blur-xl -z-20 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No projects found</h3>
            <p className="text-gray-600">Try selecting a different filter to see more projects.</p>
          </motion.div>
        )}

       
      </div>
    </section>
  );
};

export default Portfolio;