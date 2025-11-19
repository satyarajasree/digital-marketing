import React from "react";
import { 
  FaCloud, 
  FaServer, 
  FaDatabase, 
  FaShieldAlt, 
  FaSync, 
  FaChartLine, 
  FaCheck, 
  FaCogs,
  FaArrowRight,
  FaRocket,
  FaDollarSign,
  FaGlobe,
  FaCog,
  FaUsers
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import cloudBg from "../../assets/cloud-computing.jpg";

const CloudSolutions = () => {
  const services = [
    {
      icon: FaServer,
      title: "Cloud Migration",
      description: "Seamless migration of your infrastructure to cloud platforms",
      image: "🚀"
    },
    {
      icon: FaDatabase,
      title: "Cloud Architecture",
      description: "Design and implementation of scalable cloud infrastructure",
      image: "🏗️"
    },
    {
      icon: FaShieldAlt,
      title: "Cloud Security",
      description: "Comprehensive security measures for your cloud environment",
      image: "🛡️"
    },
    {
      icon: FaSync,
      title: "DevOps & Automation",
      description: "CI/CD pipelines and infrastructure as code implementation",
      image: "⚙️"
    },
    {
      icon: FaChartLine,
      title: "Cloud Optimization",
      description: "Cost optimization and performance tuning for cloud resources",
      image: "📊"
    },
    {
      icon: FaCogs,
      title: "Managed Services",
      description: "24/7 monitoring, support, and maintenance of cloud infrastructure",
      image: "🔧"
    }
  ];

  const platforms = {
    aws: ["EC2 & Lambda", "S3 & RDS", "CloudFront", "VPC & Security", "IAM & Cognito", "CloudWatch"],
    azure: ["Virtual Machines", "Blob Storage", "SQL Database", "Active Directory", "Azure Functions", "Monitor"],
    google: ["Compute Engine", "Cloud Storage", "BigQuery", "Kubernetes Engine", "Cloud Functions", "Operations"]
  };

  const benefits = [
    {
      title: "Scalability on Demand",
      description: "Instantly scale resources up or down based on your needs",
      icon: FaRocket
    },
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs with pay-as-you-go pricing",
      icon: FaDollarSign
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade security with built-in compliance",
      icon: FaShieldAlt
    },
    {
      title: "Global Availability",
      description: "Deploy applications closer to your users worldwide",
      icon: FaGlobe
    },
    {
      title: "Automated Maintenance",
      description: "Automatic updates, backups, and disaster recovery",
      icon: FaCog
    },
    {
      title: "Expert Support",
      description: "24/7 access to cloud architects and engineers",
      icon: FaUsers
    }
  ];

  const stats = [
    { number: "50%", label: "Cost Reduction" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Monitoring" },
    { number: "100+", label: "Cloud Projects" }
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
<div
  className="relative bg-cover bg-center bg-no-repeat text-white py-24 overflow-hidden"
  style={{ backgroundImage: `url(${cloudBg})` }}
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
          <FaCloud className="text-5xl text-white" />
        </div>
      </div>

      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent pb-3">
        Cloud Solutions
      </h1>

      <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
        Leverage the power of cloud computing to scale your business, reduce costs, 
        and enhance operational efficiency with our expert cloud services and strategic guidance.
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
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive cloud solutions tailored to your unique business requirements and growth objectives
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

        {/* Platforms Section */}
        <div className="py-20 bg-gradient-to-br from-blue-50 to-gray-100 relative">
          <div className="absolute inset-0 bg-blue-900 opacity-5"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Cloud Platforms We Work With
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expertise across all major cloud providers and their service ecosystems
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(platforms).map(([platform, services]) => (
                <div
                  key={platform}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold py-3 px-6 rounded-xl mb-6 text-center capitalize transform -translate-y-2 group-hover:-translate-y-3 transition-transform duration-300">
                    {platform.toUpperCase()}
                  </div>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-700 text-lg group/item hover:text-blue-600 transition-colors duration-200"
                      >
                        <div className="bg-green-100 p-2 rounded-lg mr-4 group-hover/item:bg-green-200 transition-colors duration-200">
                          <FaCheck className="text-green-600 text-sm" />
                        </div>
                        {service}
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
                Benefits of Cloud Computing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transform your business with the power and flexibility of cloud technology
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
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let us help you harness the full power of cloud computing for your business growth. 
              From strategy to implementation, we'll guide you through every step of your cloud journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
                Schedule Consultation
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-white hover:border-gray-100 shadow-2xl">
                Download Cloud Guide
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CloudSolutions;