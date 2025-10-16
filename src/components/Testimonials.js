import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaStar, FaQuoteLeft, FaMapMarkerAlt } from 'react-icons/fa';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Tech Solutions Hyderabad",
      position: "CEO",
      location: "Gachibowli, Hyderabad",
      content: "MageMarketer transformed our digital presence completely. Our website traffic increased by 300% and lead generation went up by 150% within just 3 months. Their team is incredibly professional.",
      rating: 5,
      image: "RK"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Fashion Trends India",
      position: "Marketing Director",
      location: "Banjara Hills, Hyderabad",
      content: "The social media campaigns created by MageMarketer helped us reach 2 million impressions. Our brand awareness in Hyderabad market has never been better. Highly recommended!",
      rating: 5,
      image: "PS"
    },
    {
      id: 3,
      name: "Arun Reddy",
      company: "Reddy Constructions",
      position: "Managing Director",
      location: "Jubilee Hills, Hyderabad",
      content: "As a traditional construction business, we needed digital transformation. MageMarketer built us a stunning website and SEO strategy that brought us premium clients.",
      rating: 5,
      image: "AR"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      company: "HealthPlus Clinics",
      position: "Operations Head",
      location: "HITEC City, Hyderabad",
      content: "Their performance marketing strategies reduced our customer acquisition cost by 60% while increasing quality leads. The ROI has been phenomenal for our healthcare chain.",
      rating: 5,
      image: "SG"
    },
    {
      id: 5,
      name: "Vikram Singh",
      company: "Foodie Delights",
      position: "Founder",
      location: "Madhapur, Hyderabad",
      content: "The creative reels and social media content helped us go viral multiple times. We've seen 400% growth in online orders since partnering with MageMarketer.",
      rating: 5,
      image: "VS"
    },
    {
      id: 6,
      name: "Ananya Patel",
      company: "EduSmart Academy",
      position: "Principal",
      location: "Secunderabad, Hyderabad",
      content: "Their digital marketing strategy helped us increase student enrollment by 200%. The content marketing and SEO work has positioned us as the top educational institute in Hyderabad.",
      rating: 5,
      image: "AP"
    },
    {
      id: 7,
      name: "Kiran Mehta",
      company: "AutoWorks Hyderabad",
      position: "Owner",
      location: "Kukatpally, Hyderabad",
      content: "From zero online presence to dominating local search results, MageMarketer worked wonders for our automotive business. The Google Business optimization alone brought 50+ calls monthly.",
      rating: 5,
      image: "KM"
    },
    {
      id: 8,
      name: "Divya Joshi",
      company: "Bling Jewelers",
      position: "Creative Director",
      location: "Abids, Hyderabad",
      content: "The brand strategy and visual design work elevated our jewelry brand to premium status. Sales increased by 180% during the festival season. Exceptional work!",
      rating: 5,
      image: "DJ"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden relative"
    >
      {/* Professional Dark Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/5 to-cyan-500/5 rounded-full filter blur-3xl" />
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
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
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
            >
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-amber-300">
                Client Success Stories
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              What Our{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Clients Say
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Hear from businesses across Hyderabad who have transformed their digital presence with our solutions.
            </motion.p>
          </div>

          {/* Main Testimonial Display */}
          <div className="relative max-w-6xl mx-auto mb-16">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 hover:border-amber-400/30 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Client Info */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4 shadow-lg">
                    <span className="text-white font-bold text-2xl">
                      {testimonials[currentIndex].image}
                    </span>
                  </div>
                  
                  <div className="flex justify-center lg:justify-start mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  
                  <p className="text-amber-300 font-semibold mb-1">
                    {testimonials[currentIndex].position}
                  </p>
                  
                  <p className="text-gray-400 text-sm mb-2">
                    {testimonials[currentIndex].company}
                  </p>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-1 text-gray-400 text-sm">
                    <FaMapMarkerAlt className="w-3 h-3" />
                    <span>{testimonials[currentIndex].location}</span>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <FaQuoteLeft className="w-8 h-8 text-amber-400/40 mb-4" />
                  
                  <p className="text-xl text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Progress Dots */}
                  <div className="flex justify-center lg:justify-start gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'bg-amber-400 w-8'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

         

          
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;