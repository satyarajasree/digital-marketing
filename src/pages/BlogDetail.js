import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaEye,
  FaArrowLeft,
  FaBookOpen,
  FaTag,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLink,
  FaStar,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "https://digitalmarketing.pythonanywhere.com/api/blog";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const fallingVariants = {
    fall: {
      y: [-100, 1000],
      rotate: [0, 180],
      opacity: [0, 0.3, 0],
      transition: {
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        delay: Math.random() * 5,
        ease: "linear",
      },
    },
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Fetch blog post
  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/posts/${slug}/`);
      if (response.ok) {
        const data = await response.json();
        setBlog(data);

        if (data.category?.id) {
          fetchRelatedPosts(data.category.id);
        } else {
          setRelatedPosts([]);
        }
      } else if (response.status === 404) {
        setError("Blog post not found");
        setBlog(null);
      } else {
        throw new Error("Failed to fetch blog post");
      }
    } catch (err) {
      console.error("Error fetching blog post:", err);
      setError("Failed to load blog post. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch related posts
  const fetchRelatedPosts = async (categoryId) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/posts/?category=${categoryId}&page_size=3`
      );
      if (response.ok) {
        const data = await response.json();
        setRelatedPosts(data.results || data);
      }
    } catch (err) {
      console.error("Error fetching related posts:", err);
    }
  };

  // Share handlers
  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog?.title || "";

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        break;
      default:
        break;
    }
  };

  // Fetch data when slug changes
  useEffect(() => {
    if (slug) fetchBlogPost();
  }, [slug]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ------------------- UI ----------------------

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBookOpen className="w-8 h-8 text-white animate-pulse" />
            </div>
            <p className="text-gray-600 text-lg">Loading article...</p>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Navbar />
        <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 min-h-screen">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-amber-100 shadow-sm"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaBookOpen className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {error || "Article Not Found"}
                </h1>
                <p className="text-gray-600 mb-8">
                  {error || "The article you are looking for does not exist."}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/blogs")}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  <FaArrowLeft className="w-4 h-4" />
                  Back to Blogs
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative min-h-screen">
        {/* Floating background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div variants={floatVariants} animate="float"
                      className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full filter blur-3xl opacity-20" />
          <motion.div variants={floatVariants} animate="float" transition={{ delay: 2 }}
                      className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full filter blur-3xl opacity-20" />
          <motion.div variants={floatVariants} animate="float" transition={{ delay: 4 }}
                      className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full filter blur-3xl opacity-20" />

          {[...Array(15)].map((_, i) => {
            const Icon = [FaStar, FaRocket, FaChartLine, FaUsers, FaAward][i % 5];
            return (
              <motion.div key={i} variants={fallingVariants} animate="fall" className="absolute"
                          style={{
                            left: `${Math.random() * 100}%`,
                            fontSize: `${8 + Math.random() * 12}px`,
                          }}>
                <Icon className="text-amber-300 opacity-30" />
              </motion.div>
            );
          })}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">

            {/* Back button */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.button
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/blog")}
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-amber-100 rounded-xl px-6 py-3 text-amber-600 font-semibold hover:shadow-md transition-all duration-200"
              >
                <FaArrowLeft className="w-4 h-4" />
                Back to Blogs
              </motion.button>
            </motion.div>

            {/* Blog content */}
            <motion.article variants={containerVariants}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-100 shadow-sm overflow-hidden mb-12">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={blog.featured_image || blog.image_url}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      blog.image_url ||
                      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                    {blog.category?.name || "Uncategorized"}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                {/* Meta Info */}
                <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2"><FaUser /> {blog.author_name || "Admin"}</div>
                  <div className="flex items-center gap-2"><FaCalendarAlt /> {formatDate(blog.published_at)}</div>
                  <div className="flex items-center gap-2"><FaClock /> {blog.read_time || 5} min read</div>
                  <div className="flex items-center gap-2"><FaEye /> {blog.views || 0} views</div>
                </motion.div>

                {/* Title */}
                <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {blog.title}
                </motion.h1>

                {/* Excerpt */}
                <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8">{blog.excerpt}</motion.p>

                {/* Tags */}
                {blog.tags?.length > 0 && (
                  <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
                    {blog.tags.map((tag) => (
                      <span key={tag.id} className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 text-sm font-medium px-3 py-1 rounded-full">
                        <FaTag className="w-3 h-3" /> {tag.name}
                      </span>
                    ))}
                  </motion.div>
                )}

                {/* Share buttons */}
                <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8 p-4 bg-amber-50 rounded-xl">
                  <span className="text-sm font-semibold text-gray-700">Share this article:</span>
                  <div className="flex gap-2">
                    <motion.button whileHover={{ scale: 1.1 }} onClick={() => handleShare("facebook")}
                                   className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center"><FaFacebook /></motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} onClick={() => handleShare("twitter")}
                                   className="w-10 h-10 bg-cyan-500 text-white rounded-lg flex items-center justify-center"><FaTwitter /></motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} onClick={() => handleShare("linkedin")}
                                   className="w-10 h-10 bg-blue-800 text-white rounded-lg flex items-center justify-center"><FaLinkedin /></motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} onClick={() => handleShare("copy")}
                                   className="w-10 h-10 bg-gray-600 text-white rounded-lg flex items-center justify-center"><FaLink /></motion.button>
                  </div>
                </motion.div>

                {/* Blog HTML content */}
                <motion.div variants={itemVariants} className="prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>
            </motion.article>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <motion.section variants={containerVariants} className="mb-12">
                <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-8">
                  Related Articles
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((post) => (
                    <motion.article key={post.id} variants={itemVariants} whileHover={{ y: -5 }}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                    onClick={() => navigate(`/blog/${post.slug}`)}>
                      <div className="relative overflow-hidden">
                        <img src={post.featured_image || post.image_url} alt={post.title}
                             className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 left-3">
                          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            {post.category?.name || "Uncategorized"}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-amber-100">
                          <div className="flex items-center gap-3 text-xs text-gray-600">
                            <FaClock className="w-3 h-3" /> {post.read_time || 5} min read
                          </div>
                          <div className="flex items-center gap-1 text-amber-600 font-semibold text-xs">
                            Read More <FaArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            )}

          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetail;
