import React from "react";
import { 
  FaNetworkWired, 
  FaServer, 
  FaDesktop, 
  FaWifi, 
  FaCogs, 
  FaShieldAlt, 
  FaCheck, 
  FaArrowRight,
  FaSync,
  FaRocket,
  FaChartLine,
  FaCog,
  FaHeadset
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ITInfrastructure = () => {
  const services = [
    {
      icon: FaNetworkWired,
      title: "Network Design",
      description: "Scalable and secure network architecture for business growth",
      image: "🌐"
    },
    {
      icon: FaServer,
      title: "Server Management",
      description: "On-premise and cloud server setup, configuration, and maintenance",
      image: "🖥️"
    },
    {
      icon: FaDesktop,
      title: "Workstation Setup",
      description: "Employee workstation configuration and deployment",
      image: "💻"
    },
    {
      icon: FaWifi,
      title: "Wireless Solutions",
      description: "Enterprise-grade wireless network design and implementation",
      image: "📡"
    },
    {
      icon: FaCogs,
      title: "System Integration",
      description: "Seamless integration of various systems and applications",
      image: "⚙️"
    },
    {
      icon: FaShieldAlt,
      title: "Infrastructure Security",
      description: "Comprehensive security measures for your entire IT infrastructure",
      image: "🛡️"
    }
  ];

  const solutions = {
    networking: ["LAN/WAN Setup", "Switches & Routers", "Firewalls", "VPN Configuration", "Network Monitoring", "Performance Optimization"],
    servers: ["Virtualization", "Storage Solutions", "Backup Systems", "Disaster Recovery", "Cloud Migration", "Load Balancing"],
    support: ["24/7 Monitoring", "Help Desk Support", "Remote Support", "Proactive Maintenance", "Security Updates", "Performance Tuning"]
  };

  const benefits = [
    {
      title: "Improved System Reliability",
      description: "99.9% uptime guarantee with robust infrastructure",
      icon: FaRocket
    },
    {
      title: "Enhanced Security Posture",
      description: "Multi-layered security protecting your business data",
      icon: FaShieldAlt
    },
    {
      title: "Scalable Infrastructure",
      description: "Grow your IT resources as your business expands",
      icon: FaChartLine
    },
    {
      title: "Reduced Downtime",
      description: "Proactive monitoring and quick issue resolution",
      icon: FaSync
    },
    {
      title: "Better Performance",
      description: "Optimized systems for maximum efficiency",
      icon: FaCog
    },
    {
      title: "24/7 Expert Support",
      description: "Round-the-clock technical assistance",
      icon: FaHeadset
    }
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-500 to-transparent opacity-20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-400 to-transparent opacity-20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-white bg-opacity-20 rounded-3xl backdrop-blur-sm border border-white border-opacity-30">
                  <FaNetworkWired className="text-5xl text-white" />
                </div>
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                IT Infrastructure
              </h1>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
                Build a robust, scalable, and secure IT infrastructure that supports your business growth. 
                From network design to ongoing management, we provide comprehensive solutions for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Infrastructure Assessment
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white border-opacity-30 hover:border-opacity-50">
                  View Solutions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Infrastructure Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive IT infrastructure solutions designed for modern business challenges
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-200 hover:transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-2xl text-white">
                      {service.image}
                    </div>
                    <div className="text-blue-600">
                      <service.icon className="text-3xl opacity-80" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="py-20 bg-gradient-to-br from-blue-50 to-gray-100 relative">
          <div className="absolute inset-0 bg-blue-900 opacity-5"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our Infrastructure Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                End-to-end infrastructure management and enterprise-grade support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(solutions).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold py-3 px-6 rounded-xl mb-6 text-center capitalize transform -translate-y-2 group-hover:-translate-y-3 transition-transform duration-300">
                    {category === 'networking' ? 'Networking Solutions' : 
                     category === 'servers' ? 'Server Infrastructure' : 'Support Services'}
                  </div>
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-700 text-lg group/item hover:text-blue-600 transition-colors duration-200"
                      >
                        <div className="bg-green-100 p-2 rounded-lg mr-4 group-hover/item:bg-green-200 transition-colors duration-200">
                          <FaCheck className="text-green-600 text-sm" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Benefits of Professional IT Infrastructure
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Invest in infrastructure that drives business growth and operational excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-3xl font-bold text-blue-200 bg-blue-900 bg-opacity-30 px-4 py-2 rounded-xl">
                        0{index + 1}
                      </div>
                      <div className="text-blue-200">
                        <benefit.icon className="text-3xl" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-blue-100 leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-400 opacity-10 rounded-full -translate-y-1/4 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-300 opacity-10 rounded-full translate-y-1/4 -translate-x-1/4"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold text-white mb-8">
              Optimize Your IT Infrastructure
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let us design and manage an IT infrastructure that not only supports your current operations 
              but also scales with your future growth and technological advancements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
                Get Infrastructure Audit
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-white hover:border-gray-100 shadow-2xl">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ITInfrastructure;