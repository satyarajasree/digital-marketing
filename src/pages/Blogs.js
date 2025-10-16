import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  FaBookOpen,
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaEye,
  FaComment,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE = "https://digitalmarketing.pythonanywhere.com/api/blog"; // replace with your backend

const Blogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const navigate = useNavigate();

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.8 } },
  };
  const itemVariants = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } };

  // States
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch Featured Posts
  useEffect(() => {
    setLoadingFeatured(true);
    axios.get(`${API_BASE}/featured-posts/`)
      .then(res => setFeaturedPosts(res.data))
      .finally(() => setLoadingFeatured(false));
  }, []);

  // Fetch Blog Posts
  useEffect(() => {
    setLoadingPosts(true);
    axios.get(`${API_BASE}/posts/`, { params: { search: searchQuery } })
      .then(res => setBlogPosts(res.data.results))
      .finally(() => setLoadingPosts(false));
  }, []);

  // Fetch Categories
  useEffect(() => {
    axios.get(`${API_BASE}/categories-with-counts/`)
      .then(res => setCategories(res.data));
  }, []);

  // Handle Read More click
  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <Navbar />
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="max-w-7xl mx-auto">
            
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Digital Marketing <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Insights</span></h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">Expert analysis, industry trends, and actionable strategies from our team of digital marketing professionals.</p>
            </motion.div>

            {/* Featured Posts */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
              {loadingFeatured ? (
                <p className="text-gray-500">Loading featured posts...</p>
              ) : (
                <div className="grid lg:grid-cols-2 gap-8">
                  {featuredPosts.map(post => (
                    <motion.article key={post.slug} whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => handleReadMore(post.slug)}>
                      <div className="relative overflow-hidden">
                        
                        <img src={ post.image_url} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full">{post.category.name}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1"><FaUser className="w-3 h-3" />{post.author_email}</span>
                          <span className="flex items-center gap-1"><FaCalendarAlt className="w-3 h-3" />{new Date(post.published_at).toLocaleDateString()}</span>
                          <span className="flex items-center gap-1"><FaClock className="w-3 h-3" />{post.read_time} min read</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-amber-100">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1"><FaEye className="w-4 h-4" />{post.views}</span>
                            <span className="flex items-center gap-1"><FaComment className="w-4 h-4" />0</span>
                          </div>
                          <motion.button whileHover={{ x: 5 }} className="flex items-center gap-2 text-amber-600 font-semibold text-sm">
                            Read More <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
                {/* Search */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Search Articles</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search insights..."
                      className="w-full px-4 py-3 pl-10 bg-amber-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="w-4 h-4 text-amber-600 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((cat, index) => (
                      <button key={index} className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-amber-50 transition-colors duration-200" onClick={() => setSearchQuery(cat.name)}>
                        <span className="text-gray-700 font-medium">{cat.name}</span>
                        <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full">{cat.post_count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Blog Posts */}
              <motion.div variants={containerVariants} className="lg:col-span-3">
                {loadingPosts ? (
                  <p className="text-gray-500">Loading posts...</p>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {blogPosts.map(post => (
                      <motion.article key={post.slug} variants={itemVariants} whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-100 cursor-pointer" onClick={() => handleReadMore(post.slug)}>
                        <div className="relative overflow-hidden">
                          <img src={post.featured_image || post.image_url} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-3 left-3">
                            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">{post.category.name}</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                            <span className="flex items-center gap-1"><FaUser className="w-3 h-3" />{post.author_email}</span>
                            <span className="flex items-center gap-1"><FaCalendarAlt className="w-3 h-3" />{new Date(post.published_at).toLocaleDateString()}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                          <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between pt-3 border-t border-amber-100">
                            <div className="flex items-center gap-3 text-xs text-gray-600">
                              <span className="flex items-center gap-1"><FaClock className="w-3 h-3" />{post.read_time} min</span>
                              <span className="flex items-center gap-1"><FaComment className="w-3 h-3" />0</span>
                            </div>
                            <motion.button whileHover={{ x: 3 }} className="flex items-center gap-1 text-amber-600 font-semibold text-xs">Read More <FaArrowRight className="w-3 h-3" /></motion.button>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blogs;
