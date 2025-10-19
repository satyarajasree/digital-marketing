import React, { useState, useEffect } from 'react';
import { FaBullhorn, FaChartLine, FaEnvelopeOpenText, FaPaintBrush, FaSearch, FaShoppingCart } from 'react-icons/fa';

const ServiceCard = ({ title, description, icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);

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
        transition-all duration-500 group overflow-hidden
        transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}
        hover:-translate-y-2 hover:scale-105 hover:border-orange-500
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
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
        <div className="text-orange-500 text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 inline-block">
          {icon}
        </div>

        {/* Title with gradient text on hover */}
        <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent group-hover:translate-x-1">
          {title}
        </h3>

        {/* Description with enhanced readability */}
        <p className="text-gray-300 leading-relaxed text-lg transition-colors duration-500 group-hover:text-gray-100 group-hover:translate-x-0.5">
          {description}
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

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
  {
    title: "Strategy & Consulting",
    description: "Develop data-driven strategies that align your business goals with measurable results and sustainable growth.",
    icon: <FaChartLine className="text-3xl text-blue-500" />
  },
  {
    title: "Design & Creative",
    description: "Craft visually stunning and user-centered designs that elevate your brand and captivate your audience.",
    icon: <FaPaintBrush className="text-3xl text-pink-500" />
  },
  {
    title: "Web & E-commerce Development",
    description: "Build fast, secure, and scalable web solutions and e-commerce platforms that drive conversions and engagement.",
    icon: <FaShoppingCart className="text-3xl text-green-500" />
  },
  {
    title: "Marketing & Advertising",
    description: "Amplify your brand reach with creative campaigns and multi-channel marketing strategies that deliver results.",
    icon: <FaBullhorn className="text-3xl text-yellow-500" />
  },
  {
    title: "Search Engine Optimization",
    description: "Improve your online visibility and attract quality traffic with our advanced SEO optimization techniques.",
    icon: <FaSearch className="text-3xl text-purple-500" />
  },
  {
    title: "Email & Direct Marketing",
    description: "Engage customers and boost conversions through personalized, data-backed email and direct marketing campaigns.",
    icon: <FaEnvelopeOpenText className="text-3xl text-red-500" />
  }
];

  return (
    <section id="services" className="relative py-24 bg-black text-white overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
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
      `}</style>
    </section>
  );
};

export default Services;