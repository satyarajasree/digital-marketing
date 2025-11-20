import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaStar, FaQuoteLeft, FaMapMarkerAlt } from 'react-icons/fa';

const TestimonialsModern = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const testimonials = [
    {
      id: 1,
      name: "V.S.V.Lakshmi Narayana",
      company: "Rajasree Townships",
      position: "Managing Director – Rajasree Townships",
      location: "Nagole, Hyderabad",
      content: "Amplinova completely transformed our online presence. Our property inquiries have gone up by nearly 60% after they redesigned our website and took over our digital marketing. Their automation tools have made lead follow-ups effortless and fast. Truly a partner who understands modern real estate marketing.",
      rating: 5,
      image: "LN",
    },
    {
      id: 2,
      name: "Dr. Kavya Menon",
      company: "MedNova Health Systems",
      position: "Managing Director - MedNova Health Systems",
      location: "Banjara Hills, Hyderabad",
      content: "Amplinova has been instrumental in strengthening our digital presence. Their team developed a secure, user-friendly website and implemented an efficient appointment automation system. Their SEO strategy increased our visibility among local and international patients. We appreciate their timely delivery and attention to detail.",
      rating: 5,
      image: "KM",
      
    },
    {
      id: 3,
      name: "Arjun Rao",
      company: "SpiceVilla Restaurant",
      position: "Owner - SpiceVilla Restaurant",
      location: "Vijayawada, Andhra Pradesh",
      content: "From branding to a complete reservation-friendly website, Amplinova helped modernize our digital presence beautifully. Their social media strategy boosted our footfall and online reviews. They understood our brand better than we did.",
      rating: 4,
      image: "AR",
      
    },
    {
      id: 4,
      name: "Vishal Deshpande",
      company: "LearnMax Academy",
      position: "CEO - LearnMax Academy",
      location: "HITEC City, Hyderabad",
      content: "Amplinova provided us with a comprehensive digital transformation solution that included LMS development, a modern website, and performance-driven marketing. Their structured approach and technical expertise resulted in increased student engagement and higher enrollment rates. They have proven to be a reliable and skilled technology partner.",
      rating: 5,
      image: "VD",
      
    },
    {
      id: 5,
      name: "Rohan S",
      company: "TravelOrbit Pvt. Ltd.",
      position: "Director - TravelOrbit Pvt. Ltd.",
      location: "Madhapur, Hyderabad",
      content: "Amplinova developed a fully automated booking platform for our travel agency, which significantly enhanced our customer experience and operational efficiency. Their UI/UX design is clean, fast, and user-friendly. The team communicates clearly and delivers on time — a highly reliable partner for travel businesses.",
      rating: 5,
      image: "RS",
     
    },
    {
      id: 6,
      name: "Sudarshan Rao",
      company: "Apex Metal Industries",
      position: "Operations Head - Apex Metal Industries",
      location: "Secunderabad, Hyderabad",
      content: "Amplinova helped modernize our manufacturing operations by implementing a customized ERP module and automation workflows. Their solution improved production tracking, reduced manual errors, and enhanced overall operational efficiency. Their technical expertise and disciplined project management make them an excellent long-term technology partner.",
      rating: 4,
      image: "SR",
      
    },
    {
      id: 7,
      name: "Manish Verma",
      company: "SpiceCraft Foods Pvt. Ltd.",
      position: "Founder - SpiceCraft Foods Pvt. Ltd.",
      location: "Khammam, Telangana",
      content: "Amplinova helped us rebuild our digital identity from the ground up. Their work on our branding and website created a premium and modern look that perfectly matches our F&B brand. The user experience is seamless, and customer engagement has improved significantly. Their professionalism and creativity make them an exceptional partner.",
      rating: 5,
      image: "MV",
      
    },
    {
      id: 8,
      name: "Rohit Khanna",
      company: "NutriGood Snacks",
      position: "Founder - NutriGood Snacks",
      location: "Mahabubnagar, Telangana",
      content: "We always believed in the quality of our product, but our old packaging didn’t reflect it. Amplinova redesigned everything — from colors to typography to messaging. When we saw the new packaging, we knew our product finally had the identity it deserved.",
      rating: 5,
      image: "RK",
      
    }
  ];

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
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 text-white overflow-hidden relative"
    >
      {/* New Background Elements - More Organic */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div 
          variants={floatVariants}
          animate="float"
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/15 to-orange-600/10 rounded-full filter blur-3xl"
        />
        <motion.div 
          variants={floatVariants}
          animate="float"
          transition={{ delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-cyan-500/5 rounded-full filter blur-3xl"
        />
        <motion.div 
          variants={floatVariants}
          animate="float"
          transition={{ delay: 1 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full filter blur-3xl"
        />
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20400%20400%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.8%22%20numOctaves%3D%221%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noise%29%22%20opacity%3D%220.03%22/%3E%3C/svg%3E')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section - Redesigned */}
          <div className="text-center mb-20">           
            
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              Voices of{" "}
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Success
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Real results from Hyderabad's leading businesses who trusted us with their digital growth journey.
            </motion.p>
          </div>

          {/* Testimonials Grid - New Design */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-amber-400/20 transition-all duration-500 overflow-hidden">
                  
                  

                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center">
                    <FaQuoteLeft className="w-6 h-6 text-amber-400/60" />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <p className="text-gray-200 text-lg leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm">
                          {testimonial.image}
                        </span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900"></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-white font-bold text-lg">
                          {testimonial.name}
                        </h4>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="w-3 h-3 text-amber-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-amber-300 font-semibold text-sm mb-1">
                        {testimonial.position}
                      </p>
                      
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>


          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">
              Ready to write your success story?
            </p>
            <button 
            onClick={() => (window.location.href = "/contact-us")}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsModern;