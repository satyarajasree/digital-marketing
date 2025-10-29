import React, { useState, useEffect } from 'react';
import { 
  FaBullhorn, FaChartLine, FaEnvelopeOpenText, FaPaintBrush, FaSearch, FaShoppingCart,
  FaCode, FaCloud, FaShieldAlt, FaMobile, FaServer, FaDatabase, FaLaptopCode
} from 'react-icons/fa';

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
  const [activeCategory, setActiveCategory] = useState('digital-marketing');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Services data organized by category
  const servicesData = {
    'digital-marketing': [
      {
        title: "Digital Strategy & Consulting",
        description: "Develop data-driven strategies that align your business goals with measurable results and sustainable growth.",
        icon: <FaChartLine className="text-3xl text-blue-500" />
      },
      {
        title: "Social Media Marketing",
        description: "Build engaging social media campaigns that increase brand awareness and drive meaningful customer interactions.",
        icon: <FaBullhorn className="text-3xl text-yellow-500" />
      },
      {
        title: "Search Engine Optimization",
        description: "Improve your online visibility and attract quality traffic with our advanced SEO optimization techniques.",
        icon: <FaSearch className="text-3xl text-purple-500" />
      },
      {
        title: "Content Marketing",
        description: "Create compelling content that resonates with your audience and drives engagement across all channels.",
        icon: <FaEnvelopeOpenText className="text-3xl text-red-500" />
      },
      {
        title: "Email Marketing",
        description: "Engage customers and boost conversions through personalized, data-backed email marketing campaigns.",
        icon: <FaEnvelopeOpenText className="text-3xl text-green-500" />
      },
      {
        title: "PPC Advertising",
        description: "Drive immediate results with targeted pay-per-click campaigns that maximize your advertising ROI.",
        icon: <FaShoppingCart className="text-3xl text-orange-500" />
      }
    ],
    'it-services': [
      {
        title: "Web Development",
        description: "Build fast, secure, and scalable websites and web applications with modern technologies and best practices.",
        icon: <FaCode className="text-3xl text-blue-500" />
      },
      {
        title: "Mobile App Development",
        description: "Create intuitive and powerful mobile applications for iOS and Android that enhance user experience.",
        icon: <FaMobile className="text-3xl text-green-500" />
      },
      {
        title: "Cloud Solutions",
        description: "Leverage cloud technology with scalable infrastructure, migration services, and cloud optimization.",
        icon: <FaCloud className="text-3xl text-purple-500" />
      },
      {
        title: "Cyber Security",
        description: "Protect your digital assets with comprehensive security solutions, threat detection, and risk assessment.",
        icon: <FaShieldAlt className="text-3xl text-red-500" />
      },
      {
        title: "IT Infrastructure",
        description: "Design and implement robust IT infrastructure solutions that support your business growth and operations.",
        icon: <FaServer className="text-3xl text-yellow-500" />
      },
      {
        title: "Database Management",
        description: "Optimize and manage your databases for performance, security, and seamless data operations.",
        icon: <FaDatabase className="text-3xl text-orange-500" />
      }
    ]
  };

  const categories = [
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      description: 'Grow your online presence and drive results',
      icon: <FaChartLine className="w-5 h-5" />
    },
    {
      id: 'it-services',
      name: 'IT Services',
      description: 'Technology solutions for modern businesses',
      icon: <FaLaptopCode className="w-5 h-5" />
    }
  ];

  const currentServices = servicesData[activeCategory];

  return (
    <section id="services" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Badge */}
          <div className={`inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <span className="text-orange-400 font-semibold text-sm">Our Expertise</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Services</span>
          </h2>
          
          {/* Animated underline */}
          <div className={`w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-8 rounded-full transition-all duration-1000 ${isVisible ? 'w-24' : 'w-0'}`} />

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Comprehensive solutions tailored to drive your business growth and  
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold"> maximize your potential</span>.
          </p>

          {/* Category Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900 bg-opacity-50 border border-gray-700 rounded-2xl p-2 backdrop-blur-sm">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-xl font-semibold text-lg transition-all duration-300
                      ${activeCategory === category.id 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }
                    `}
                  >
                    {category.icon}
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm">
              {categories.find(cat => cat.id === activeCategory)?.description}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
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
            Get {activeCategory === 'digital-marketing' ? 'Marketing' : 'IT'} Consultation
            <span className="ml-2 animate-bounce-horizontal">→</span>
          </button>
          
          <p className="text-gray-400 mt-4">
            Ready to transform your {activeCategory === 'digital-marketing' ? 'digital presence' : 'technology infrastructure'}?
          </p>
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