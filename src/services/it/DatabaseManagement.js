import React from "react";
import { 
  FaDatabase, 
  FaSync, 
  FaShieldAlt, 
  FaChartLine, 
  FaCogs, 
  FaBackward, 
  FaCheck, 
  FaArrowRight,
  FaServer,
  FaRocket,
  FaCloud,
  FaLock,
  FaTools,
  FaHistory
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DatabaseManagement = () => {
  const services = [
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "Optimal database architecture design for performance and scalability",
      image: "🏗️"
    },
    {
      icon: FaSync,
      title: "Migration Services",
      description: "Seamless database migration between platforms and versions",
      image: "🔄"
    },
    {
      icon: FaShieldAlt,
      title: "Security & Compliance",
      description: "Database security hardening and compliance implementation",
      image: "🔒"
    },
    {
      icon: FaChartLine,
      title: "Performance Tuning",
      description: "Query optimization and performance monitoring for maximum efficiency",
      image: "📊"
    },
    {
      icon: FaCogs,
      title: "Automated Maintenance",
      description: "Regular backups, indexing, and maintenance task automation",
      image: "⚙️"
    },
    {
      icon: FaBackward,
      title: "Disaster Recovery",
      description: "Comprehensive backup and recovery solutions for data protection",
      image: "🛡️"
    }
  ];

  const databases = {
    relational: ["MySQL", "PostgreSQL", "SQL Server", "Oracle", "MariaDB", "SQLite"],
    nosql: ["MongoDB", "Redis", "Cassandra", "Elasticsearch", "Couchbase", "Neo4j"],
    cloud: ["Amazon RDS", "Google Cloud SQL", "Azure SQL", "DynamoDB", "Cosmos DB", "Firestore"]
  };

  const features = [
    {
      title: "24/7 Database Monitoring",
      description: "Real-time monitoring and alerting for your database systems",
      icon: FaServer
    },
    {
      title: "Performance Optimization",
      description: "Continuous query optimization and index management",
      icon: FaRocket
    },
    {
      title: "Automated Backup Solutions",
      description: "Scheduled backups with point-in-time recovery capabilities",
      icon: FaHistory
    },
    {
      title: "Security Assessment",
      description: "Regular vulnerability scans and security audits",
      icon: FaLock
    },
    {
      title: "Capacity Planning",
      description: "Proactive scaling and resource allocation planning",
      icon: FaChartLine
    },
    {
      title: "Expert Support",
      description: "24/7 access to database administrators and experts",
      icon: FaTools
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
                  <FaDatabase className="text-5xl text-white" />
                </div>
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Database Management
              </h1>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
                Expert database management services to ensure your data is secure, performant, and always available. 
                We handle the complexity so you can focus on driving your business forward with reliable data infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Database Assessment
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white border-opacity-30 hover:border-opacity-50">
                  View Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section - Circular Design */}
        <div className="py-20 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Database Management Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive database solutions designed for optimal performance, security, and reliability
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-200 hover:transform hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 w-16 h-16 bg-blue-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="flex flex-col items-center text-center">
                    <div className="text-4xl bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-2xl text-white mb-6">
                      {service.image}
                    </div>
                    <div className="text-blue-600 mb-4">
                      <service.icon className="text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Databases Section - Card Design */}
        <div className="py-20 bg-gradient-to-br from-blue-50 to-gray-100 relative">
          <div className="absolute inset-0 bg-blue-900 opacity-5"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Database Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expertise across all major database platforms and technologies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(databases).map(([type, dbs]) => (
                <div
                  key={type}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <FaCloud className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 capitalize">
                      {type === 'relational' ? 'Relational Databases' : 
                       type === 'nosql' ? 'NoSQL Databases' : 'Cloud Databases'}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {dbs.map((db, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-700 text-lg group/item hover:text-blue-600 transition-colors duration-200"
                      >
                        <div className="bg-green-100 p-2 rounded-lg mr-4 group-hover/item:bg-green-200 transition-colors duration-200">
                          <FaCheck className="text-green-600 text-sm" />
                        </div>
                        {db}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section - Icon Grid */}
        <div className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Managed Database Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive database management with enterprise-grade features
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white rounded-2xl p-8 h-full border border-blue-100 group-hover:border-blue-200 transition-all duration-500">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-xl text-white mr-4">
                        <feature.icon className="text-xl" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
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
              Optimize Your Database Performance
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let our database experts ensure your data infrastructure is secure, fast, and reliable. 
              From design to maintenance, we provide end-to-end database management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
                Get Database Audit
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-white hover:border-gray-100 shadow-2xl">
                Download Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DatabaseManagement;