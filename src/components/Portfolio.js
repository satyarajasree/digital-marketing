import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Fashion E-commerce Website",
      category: "websites",
      type: "iframe",
      url: "https://fashion-store.demo",
      thumbnail: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=400&h=300&fit=crop",
      views: "50K+",
      likes: "2.4K"
    },
    {
      id: 2,
      title: "Viral Food Reel",
      category: "reels",
      type: "reel",
      url: "https://instagram.com/reel/foodviral",
      thumbnail: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
      views: "2.5M",
      likes: "150K"
    },
    {
      id: 3,
      title: "Brand Logo Design",
      category: "design",
      type: "image",
      url: "https://images.unsplash.com/photo-1564865878688-9a244444042a?w=400&h=300&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1564865878688-9a244444042a?w=400&h=300&fit=crop",
      views: "25K",
      likes: "1.2K"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "mobile",
      type: "image",
      url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      views: "35K",
      likes: "1.8K"
    },
    {
      id: 5,
      title: "SEO Dashboard",
      category: "seo",
      type: "iframe",
      url: "https://seo-dashboard.demo",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      views: "18K",
      likes: "890"
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "websites",
      type: "iframe",
      url: "https://corporate-site.demo",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      views: "42K",
      likes: "2.1K"
    },
    {
      id: 7,
      title: "Fashion Reel",
      category: "reels",
      type: "reel",
      url: "https://instagram.com/reel/fashiontrend",
      thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      views: "3.2M",
      likes: "210K"
    },
    {
      id: 8,
      title: "Packaging Design",
      category: "design",
      type: "image",
      url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      views: "28K",
      likes: "1.5K"
    },
    {
      id: 9,
      title: "Fitness App UI",
      category: "mobile",
      type: "image",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      views: "31K",
      likes: "1.6K"
    },
    {
      id: 10,
      title: "Analytics Dashboard",
      category: "seo",
      type: "iframe",
      url: "https://analytics-dashboard.demo",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      views: "22K",
      likes: "1.1K"
    },
    {
      id: 11,
      title: "Travel Reel",
      category: "reels",
      type: "reel",
      url: "https://instagram.com/reel/travelvibes",
      thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      views: "4.1M",
      likes: "280K"
    },
    {
      id: 12,
      title: "Brand Identity",
      category: "design",
      type: "image",
      url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      views: "33K",
      likes: "1.7K"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Work' },
    { key: 'websites', label: 'Websites' },
    { key: 'reels', label: 'Reels' },
    { key: 'design', label: 'Design' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'seo', label: 'SEO' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'websites': return '💻';
      case 'reels': return '🎬';
      case 'design': return '🎨';
      case 'mobile': return '📱';
      case 'seo': return '🔍';
      default: return '⭐';
    }
  };

  const MediaItem = ({ item }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="relative group cursor-pointer"
      >
        {/* Main Media Container */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-amber-300 transition-all duration-300">
          {/* Thumbnail */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <span>{getCategoryIcon(item.category)}</span>
              <span className="capitalize">{item.category}</span>
            </div>
            
            {/* Play Button for Reels */}
            {item.type === 'reel' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">▶</span>
                </div>
              </div>
            )}
            
            {/* View/Likes Counter */}
            <div className="absolute bottom-3 left-3 right-3 flex justify-between text-white text-xs">
              <div className="bg-black bg-opacity-60 px-2 py-1 rounded-full">
                👁️ {item.views}
              </div>
              <div className="bg-black bg-opacity-60 px-2 py-1 rounded-full">
                ❤️ {item.likes}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
              {item.title}
            </h3>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="portfolio" className="py-16 bg-gradient-to-br from-gray-50 to-white text-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-amber-600">Work</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our collection of successful projects across different platforms and services
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-300 hover:text-amber-600 shadow-sm'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <MediaItem key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No projects found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-2">25M+</div>
              <div className="text-gray-600">Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-2">45+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;