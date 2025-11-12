// src/components/CollageGrid.js
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CollageGrid = ({ 
  images = [], 
  mode = "digital-marketing",
  className = "",
  title = "Our Work in Action",
  maxColumns = 8
}) => {
  const [activeFilter, setActiveFilter] = useState("allwork");
  
  // Default images for different modes
  const defaultImages = {
    "digital-marketing": [
      {
        url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop",
        type: "landscape",
        category: "social-media",
        title: "Social Media Campaign",
        filter: "design"
      },
      {
        url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=300&fit=crop",
        type: "portrait", 
        category: "mobile-reel",
        title: "Instagram Reel",
        filter: "reels"
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
        type: "landscape",
        category: "analytics",
        title: "Performance Analytics",
        filter: "seo"
      },
      {
        url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop",
        type: "portrait",
        category: "app-screens",
        title: "Mobile App",
        filter: "mobile"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        type: "landscape",
        category: "website",
        title: "Website Design",
        filter: "websites"
      },
      {
        url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=250&h=350&fit=crop",
        type: "portrait",
        category: "instagram-reel",
        title: "Video Content",
        filter: "reels"
      },
      {
        url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop",
        type: "landscape",
        category: "email-marketing",
        title: "Email Campaign",
        filter: "design"
      },
      {
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=400&fit=crop",
        type: "portrait",
        category: "social-story",
        title: "Social Story",
        filter: "design"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop",
        type: "landscape",
        category: "landing-page",
        title: "Landing Page",
        filter: "websites"
      },
      {
        url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=500&fit=crop",
        type: "portrait",
        category: "mobile-ad",
        title: "Mobile Ad",
        filter: "mobile"
      },
      {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        type: "landscape",
        category: "dashboard",
        title: "Marketing Dashboard",
        filter: "seo"
      },
      {
        url: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=300&h=400&fit=crop",
        type: "portrait",
        category: "social-post",
        title: "Social Media Post",
        filter: "design"
      }
    ],
    "it-services": [
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
        type: "landscape",
        category: "cloud-infrastructure",
        title: "Cloud Infrastructure",
        filter: "websites"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=400&fit=crop",
        type: "portrait",
        category: "web-app",
        title: "Web Application",
        filter: "websites"
      },
      {
        url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        type: "landscape",
        category: "mobile-app",
        title: "Mobile App",
        filter: "mobile"
      },
      {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=400&fit=crop",
        type: "portrait",
        category: "dashboard",
        title: "Admin Dashboard",
        filter: "design"
      },
      {
        url: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
        type: "landscape",
        category: "code",
        title: "Code Development",
        filter: "seo"
      },
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=400&fit=crop",
        type: "portrait",
        category: "programming",
        title: "Programming",
        filter: "design"
      }
    ]
  };

  const allImages = images.length > 0 ? images : defaultImages[mode] || defaultImages["digital-marketing"];

  // Filter images based on active filter
  const filteredImages = useMemo(() => {
    if (activeFilter === "allwork") {
      return allImages;
    }
    return allImages.filter(image => image.filter === activeFilter);
  }, [allImages, activeFilter]);

  // Filter categories
  const filterCategories = [
    { id: "allwork", label: "All Work", icon: "🔄" },
    { id: "websites", label: "Websites", icon: "🌐" },
    { id: "reels", label: "Reels", icon: "🎬" },
    { id: "mobile", label: "Mobile", icon: "📱" },
    { id: "seo", label: "SEO", icon: "📈" },
    { id: "design", label: "Design", icon: "🎨" }
  ];

  // Function to determine if an image should be "featured" (larger)
  const isFeaturedImage = (index, total) => {
    const featuredIndices = [0, 3, 7, 10];
    return featuredIndices.includes(index % 12) && total > 6;
  };

  const getImageSizeClass = (image, index, total) => {
    if (isFeaturedImage(index, total)) {
      return "featured";
    }
    return image.type === 'portrait' ? 'portrait' : 'landscape';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h3 className="text-3xl font-bold text-white text-center mb-8">
          {title}
        </h3>
      )}
      
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
        {filterCategories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(category.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeFilter === category.id
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="text-base">{category.icon}</span>
            {category.label}
          </motion.button>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="collage-grid mx-auto"
          style={{ '--max-columns': maxColumns }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${activeFilter}-${index}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`collage-item ${getImageSizeClass(image, index, filteredImages.length)} group`}
            >
              <img
                src={image.url}
                alt={image.title || `${mode} work ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay with title */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="text-sm font-semibold">{image.title}</p>
                  <p className="text-xs opacity-90 capitalize">{image.category?.replace('-', ' ')}</p>
                  <span className="inline-block mt-1 px-2 py-1 bg-orange-500/80 text-white text-xs rounded">
                    {filterCategories.find(cat => cat.id === image.filter)?.label}
                  </span>
                </div>
              </div>
              
              {/* Play button for reels/video content */}
              {(image.category?.includes('reel') || image.category?.includes('video')) && (
                <div className="absolute top-3 right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold ml-0.5">▶</span>
                </div>
              )}
              
              {/* Analytics badge for dashboard images */}
              {image.category?.includes('analytics') && (
                <div className="absolute top-3 left-3 bg-green-500/90 text-white text-xs px-2 py-1 rounded shadow-lg">
                  📊 Analytics
                </div>
              )}

              {/* Code badge for IT services */}
              {image.category?.includes('code') && (
                <div className="absolute top-3 left-3 bg-blue-500/90 text-white text-xs px-2 py-1 rounded shadow-lg">
                  💻 Code
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No results message */}
      {filteredImages.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <p className="text-gray-400 text-lg">No projects found for this category.</p>
          <p className="text-gray-500 text-sm mt-2">Try selecting a different filter.</p>
        </motion.div>
      )}

      <style jsx>{`
        .collage-grid {
          display: grid;
          gap: 12px;
          grid-auto-flow: row dense;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          max-width: 1200px;
          margin: 0 auto;
        }

        .collage-item {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.95;
          outline: 2px solid transparent;
          background: linear-gradient(145deg, #1f2937, #111827);
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.3);
        }

        .collage-item:hover {
          opacity: 1;
          outline: 2px solid rgba(255, 107, 53, 0.8);
          box-shadow: 0 20px 40px rgba(255, 107, 53, 0.25);
        }

        .collage-item.featured {
          grid-column: span 2;
          grid-row: span 2;
          aspect-ratio: 1;
        }

        .collage-item.portrait:not(.featured) {
          aspect-ratio: 2/3;
          grid-row: span 2;
        }

        .collage-item.landscape:not(.featured) {
          aspect-ratio: 4/3;
          grid-column: span 2;
        }

        /* Enhanced mobile responsiveness */
        @media (max-width: 1024px) {
          .collage-grid {
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
            gap: 10px;
          }
        }

        @media (max-width: 768px) {
          .collage-grid {
            grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
            gap: 8px;
          }
          
          .collage-item.featured {
            grid-column: span 2;
            grid-row: span 2;
          }

          /* Filter buttons mobile optimization */
          .flex-wrap {
            gap: 8px;
          }
          
          .flex-wrap button {
            padding: 8px 12px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .collage-grid {
            grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
            gap: 6px;
          }

          .flex-wrap button {
            padding: 6px 10px;
            font-size: 11px;
          }
        }

        @media (max-width: 360px) {
          .collage-grid {
            grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
            gap: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default CollageGrid;