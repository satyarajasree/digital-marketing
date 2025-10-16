import React, { useState, useEffect } from 'react';
import { 
  FaUserTie, FaRocket, FaCode, FaVideo, FaChartLine, FaLaptopCode, 
  FaShoppingCart, FaSearch, FaRobot, FaEnvelope, FaListAlt, 
  FaDollarSign, FaUsers, FaPodcast 
} from 'react-icons/fa';

const ServiceCard = ({ name, description, icon: Icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`
        relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 
        transition-all duration-500 group overflow-hidden cursor-pointer
        transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}
        hover:-translate-y-2 hover:scale-105 hover:border-orange-500
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10">
        {/* Icon with enhanced animation */}
        <div className="text-orange-500 text-4xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 inline-block">
          <Icon />
        </div>

        {/* Title with gradient text on hover */}
        <h3 className="text-xl font-bold text-white mb-4 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent group-hover:translate-x-1">
          {name}
        </h3>

        {/* Description with enhanced readability and typing animation */}
        <p className="text-gray-300 leading-relaxed text-sm transition-all duration-500 group-hover:text-gray-100 group-hover:translate-x-0.5">
          <span className={`
            inline-block overflow-hidden
            ${isHovered ? 'animate-typewriter' : ''}
          `}>
            {description}
          </span>
        </p>

        {/* Learn more arrow */}
        <div className="flex items-center mt-6 text-orange-500 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2">
          Learn more
          <span className="ml-2 animate-bounce-horizontal">→</span>
        </div>
      </div>
    </div>
  );
};

const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {/* Horizontal Lines */}
      <div className="absolute inset-0 animate-grid-horizontal">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"
            style={{ top: `${(i * 100) / 19}%` }}
          />
        ))}
      </div>
      
      {/* Vertical Lines */}
      <div className="absolute inset-0 animate-grid-vertical">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent"
            style={{ left: `${(i * 100) / 19}%` }}
          />
        ))}
      </div>
      
      {/* Animated Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-orange-500/30 animate-pulse-slow" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-purple-500/30 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-orange-500/30 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-500/30 animate-pulse-slow" />
      
      {/* Moving Grid Highlights */}
      <div className="absolute inset-0">
        <div className="absolute w-1 h-1 bg-orange-500 rounded-full animate-grid-move-1" />
        <div className="absolute w-1 h-1 bg-purple-500 rounded-full animate-grid-move-2" />
        <div className="absolute w-1 h-1 bg-orange-500 rounded-full animate-grid-move-3" />
      </div>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const servicesItems = [
    {
      name: "Strategy & Consulting",
      icon: FaUserTie,
      href: "/services/strategy-consulting",
      description: "Data-driven strategies for business growth",
    },
    {
      name: "Social Media Marketing",
      icon: FaRocket,
      href: "/services/social-media-marketing",
      description: "Engage your audience across all platforms",
    },
    {
      name: "Graphics Designing",
      icon: FaCode,
      href: "/services/graphics-designing",
      description: "Visual storytelling that captivates your audience",
    },
    {
      name: "Video Production",
      icon: FaVideo,
      href: "/services/video-production",
      description: "Professional video content that tells your story",
    },
    {
      name: "Performance Marketing",
      icon: FaChartLine,
      href: "/services/performance-marketing",
      description: "Drive measurable results and ROI",
    },
    {
      name: "Website Development",
      icon: FaLaptopCode,
      href: "/services/website-development",
      description: "Build high-performance websites",
    },
    {
      name: "E Commerce Development",
      icon: FaShoppingCart,
      href: "/services/ecommerce-development",
      description: "Complete online store solutions",
    },
    {
      name: "Search Engine Optimization",
      icon: FaSearch,
      href: "/services/seo",
      description: "Boost your search rankings and organic traffic",
    },
    {
      name: "Answer Engine Optimization",
      icon: FaRobot,
      href: "/services/answer-engine-optimization",
      description: "Optimize for voice and AI-powered search",
    },
    {
      name: "Email Marketing",
      icon: FaEnvelope,
      href: "/services/email-marketing",
      description: "Nurture leads and build relationships",
    },
    {
      name: "Platform Listing & Optimization",
      icon: FaListAlt,
      href: "/services/platform-listing-optimization",
      description: "Maximize your presence across all platforms",
    },
    {
      name: "Media Buying & Planning",
      icon: FaDollarSign,
      href: "/services/media-buying-planning",
      description: "Strategic ad placement for maximum impact",
    },
    {
      name: "Influencer Marketing",
      icon: FaUsers,
      href: "/services/influencer-marketing",
      description: "Leverage influencer partnerships for brand growth",
    },
    {
      name: "Podcast Marketing",
      icon: FaPodcast,
      href: "/services/podcast-marketing",
      description: "Amplify your audio content and reach",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Grid */}
      <AnimatedGrid />
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Badge */}
          <div className={`inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <span className="text-orange-400 font-semibold text-sm">Our Expertise</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Services</span>
          </h2>
          
          {/* Animated underline */}
          <div className={`w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-8 rounded-full transition-all duration-1000 ${isVisible ? 'w-24' : 'w-0'}`} />

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions tailored to drive your business growth and 
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold"> maximize your online potential</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesItems.map((service, index) => (
            <ServiceCard key={service.name} {...service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="
            bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg 
            transition-all duration-300 hover:scale-105 hover:shadow-2xl
            transform hover:shadow-orange-500/25 active:scale-95
          ">
            Explore All Services
            <span className="ml-2 animate-bounce-horizontal">→</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1.5s infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-typewriter {
          display: inline-block;
          animation: typewriter 0.5s ease-in-out;
          white-space: nowrap;
          overflow: hidden;
        }
        @keyframes grid-horizontal {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
        @keyframes grid-vertical {
          0% { transform: translateX(0); }
          100% { transform: translateX(10px); }
        }
        @keyframes grid-move-1 {
          0%, 100% { 
            transform: translate(10%, 20%); 
            opacity: 0.5;
          }
          50% { 
            transform: translate(90%, 80%); 
            opacity: 1;
          }
        }
        @keyframes grid-move-2 {
          0%, 100% { 
            transform: translate(80%, 10%); 
            opacity: 0.5;
          }
          50% { 
            transform: translate(20%, 90%); 
            opacity: 1;
          }
        }
        @keyframes grid-move-3 {
          0%, 100% { 
            transform: translate(50%, 50%); 
            opacity: 0.3;
          }
          50% { 
            transform: translate(70%, 30%); 
            opacity: 0.8;
          }
        }
        .animate-grid-horizontal {
          animation: grid-horizontal 8s ease-in-out infinite alternate;
        }
        .animate-grid-vertical {
          animation: grid-vertical 6s ease-in-out infinite alternate;
        }
        .animate-grid-move-1 {
          animation: grid-move-1 15s linear infinite;
        }
        .animate-grid-move-2 {
          animation: grid-move-2 20s linear infinite;
        }
        .animate-grid-move-3 {
          animation: grid-move-3 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;