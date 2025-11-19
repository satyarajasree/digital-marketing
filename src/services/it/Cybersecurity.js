import React from "react";
import { 
  FaShieldAlt, 
  FaUserShield, 
  FaLock, 
  FaEye, 
  FaBug, 
  FaNetworkWired, 
  FaCheck, 
  FaExclamationTriangle,
  FaArrowRight,
  FaGlobe,
  FaMobile,
  FaCloud,
  FaServer,
  FaCode,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import cyberBg from "../../assets/Cybersecurity.jpeg";

const Cybersecurity = () => {
  const services = [
    {
      icon: FaUserShield,
      title: "Security Assessment",
      description: "Comprehensive vulnerability assessment and penetration testing",
      image: "🔍"
    },
    {
      icon: FaLock,
      title: "Data Protection",
      description: "Encryption and data loss prevention strategies",
      image: "🔒"
    },
    {
      icon: FaEye,
      title: "Network Security",
      description: "Firewall configuration and intrusion detection systems",
      image: "🌐"
    },
    {
      icon: FaBug,
      title: "Application Security",
      description: "Secure code review and application vulnerability testing",
      image: "🐛"
    },
    {
      icon: FaNetworkWired,
      title: "Cloud Security",
      description: "Security configuration for cloud infrastructure and services",
      image: "☁️"
    },
    {
      icon: FaShieldAlt,
      title: "Compliance",
      description: "GDPR, HIPAA, PCI DSS compliance implementation and auditing",
      image: "📋"
    }
  ];

  const threats = [
    {
      name: "Phishing Attacks",
      description: "Deceptive emails and messages targeting employees",
      severity: "High",
      icon: FaGlobe
    },
    {
      name: "Malware & Ransomware",
      description: "Malicious software and encryption-based extortion",
      severity: "Critical",
      icon: FaBug
    },
    {
      name: "DDoS Attacks",
      description: "Distributed denial-of-service overwhelming systems",
      severity: "High",
      icon: FaServer
    },
    {
      name: "Data Breaches",
      description: "Unauthorized access to sensitive information",
      severity: "Critical",
      icon: FaShieldAlt
    },
    {
      name: "Insider Threats",
      description: "Security risks from within the organization",
      severity: "Medium",
      icon: FaUserShield
    },
    {
      name: "Zero-day Vulnerabilities",
      description: "Unknown security flaws in software",
      severity: "High",
      icon: FaExclamationTriangle
    }
  ];

  const solutions = [
    {
      area: "Network Security",
      measures: ["Next-gen Firewalls", "VPN & Zero Trust", "IDS/IPS Systems", "Network Segmentation", "Traffic Monitoring", "Threat Intelligence"],
      icon: FaNetworkWired
    },
    {
      area: "Endpoint Security",
      measures: ["Advanced Antivirus", "EDR Solutions", "Device Encryption", "Access Controls", "Mobile Security", "Patch Management"],
      icon: FaMobile
    },
    {
      area: "Application Security",
      measures: ["Web Application Firewall", "SAST/DAST Testing", "Secure Code Review", "Security Headers", "API Security", "Container Security"],
      icon: FaCode
    },
    {
      area: "Cloud Security",
      measures: ["Cloud WAF", "CSPM Tools", "Identity Management", "Data Encryption", "Compliance Monitoring", "Backup Security"],
      icon: FaCloud
    }
  ];

  const stats = [
    { number: "24/7", label: "Security Monitoring" },
    { number: "99.9%", label: "Threat Detection Rate" },
    { number: "<30min", label: "Incident Response Time" },
    { number: "1000+", label: "Protected Systems" }
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div
  className="relative bg-cover bg-center bg-no-repeat text-white py-24 overflow-hidden"
  style={{ backgroundImage: `url(${cyberBg})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Blue Glow Shapes */}
  <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-500 to-transparent opacity-20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
  <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-400 to-transparent opacity-20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">

      <div className="flex justify-center mb-8">
        <div className="p-6 bg-white bg-opacity-20 rounded-3xl backdrop-blur-sm border border-white border-opacity-30">
          <FaShieldAlt className="text-5xl text-white" />
        </div>
      </div>

      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent pb-3">
        Cybersecurity
      </h1>

      <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
        Protect your digital assets with comprehensive cybersecurity solutions. 
        We safeguard your business from evolving threats and ensure regulatory compliance 
        with enterprise-grade security measures.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        
      </div>

    </div>
  </div>
</div>

        {/* Stats Section */}
        <div className="py-16 bg-white border-b border-blue-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                End-to-end security solutions to protect your business from evolving cyber threats
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

        {/* Threats Section */}
        <div className="py-20 bg-gradient-to-br from-blue-50 to-gray-100 relative">
          <div className="absolute inset-0 bg-blue-900 opacity-5"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Common Cyber Threats
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay protected against evolving security risks and attack vectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {threats.map((threat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl mr-4 ${
                      threat.severity === 'Critical' ? 'bg-red-100 text-red-600' :
                      threat.severity === 'High' ? 'bg-orange-100 text-orange-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      <threat.icon className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{threat.name}</h3>
                      <span className={`text-sm font-semibold ${
                        threat.severity === 'Critical' ? 'text-red-600' :
                        threat.severity === 'High' ? 'text-orange-600' :
                        'text-yellow-600'
                      }`}>
                        {threat.severity} Risk
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {threat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Security Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive protection across all attack vectors and infrastructure layers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                    <div className="flex items-center mb-6">
                      <div className="bg-white bg-opacity-20 p-3 rounded-xl mr-4">
                        <solution.icon className="text-2xl" />
                      </div>
                      <h3 className="text-2xl font-bold">{solution.area}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {solution.measures.map((measure, idx) => (
                        <div key={idx} className="flex items-center text-blue-100">
                          <FaCheck className="text-green-300 mr-2 text-sm" />
                          <span className="text-sm">{measure}</span>
                        </div>
                      ))}
                    </div>
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
              Secure Your Business Today
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Don't wait for a security breach. Protect your digital assets with our expert cybersecurity services 
              and sleep better knowing your business is protected against evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
                Get Security Audit
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-white hover:border-gray-100 shadow-2xl">
                Download Security Guide
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cybersecurity;