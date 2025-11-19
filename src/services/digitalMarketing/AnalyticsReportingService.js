import React from "react";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaDatabase,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaCog,
  FaSync,
  FaEye,
  FaHeart,
  FaClock,
  FaAward,
  FaFilter,
  FaDownload,
  FaCogs,
  FaGlobe,
  FaSearch,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import analyticsBg from "../../assets/analytical.jpg";

const AnalyticsReportingService = () => {
  const services = [
    {
      icon: FaChartLine,
      title: "Performance Analytics",
      description: "Comprehensive tracking and analysis of your key business metrics",
      features: ["KPI Tracking", "Conversion Analysis", "Trend Identification", "Performance Benchmarks"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaDatabase,
      title: "Data Integration",
      description: "Seamlessly connect and unify data from all your marketing platforms",
      features: ["API Integrations", "Data Warehousing", "Cross-Platform Tracking", "Real-time Sync"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaChartBar,
      title: "Custom Dashboards",
      description: "Tailored reporting dashboards that provide actionable insights",
      features: ["Real-time Dashboards", "Custom Metrics", "Interactive Visualizations", "Role-based Access"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaFilter,
      title: "Advanced Segmentation",
      description: "Deep dive into specific audience segments and behaviors",
      features: ["Audience Segmentation", "Behavioral Analysis", "Cohort Analysis", "Funnel Visualization"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaChartPie,
      title: "ROI Attribution",
      description: "Accurate measurement of marketing ROI across all channels",
      features: ["Multi-touch Attribution", "Channel Performance", "LTV Calculation", "Campaign ROI"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaCogs,
      title: "Automated Reporting",
      description: "Scheduled, automated reports delivered to your team",
      features: ["Custom Reports", "Scheduled Delivery", "PDF Exports", "Stakeholder Updates"],
      color: "from-orange-500 to-amber-500"
    },
  ];

  const process = [
    {
      step: "01",
      title: "Data Audit",
      description: "Comprehensive review of your current data sources and tracking",
      icon: FaDatabase
    },
    {
      step: "02",
      title: "Goal Setting",
      description: "Define key metrics and business objectives for measurement",
      icon: FaChartLine
    },
    {
      step: "03",
      title: "Implementation",
      description: "Set up tracking, integrations, and data collection systems",
      icon: FaCog
    },
    {
      step: "04",
      title: "Dashboard Development",
      description: "Create custom dashboards and visualization frameworks",
      icon: FaChartBar
    },
    {
      step: "05",
      title: "Analysis & Insights",
      description: "Deep dive into data to uncover actionable insights",
      icon: FaSearch
    },
    {
      step: "06",
      title: "Ongoing Optimization",
      description: "Continuous monitoring and improvement of reporting systems",
      icon: FaSync
    },
  ];

  const results = [
    { metric: "85%", label: "Faster Decision Making", icon: FaClock, color: "from-orange-500 to-amber-500" },
    { metric: "3.2x", label: "ROI Improvement", icon: FaChartLine, color: "from-orange-500 to-amber-500" },
    { metric: "360°", label: "Data Visibility", icon: FaEye, color: "from-orange-500 to-amber-500" },
    { metric: "24/7", label: "Real-time Monitoring", icon: FaGlobe, color: "from-orange-500 to-amber-500" },
  ];

  const reportTypes = [
    {
      category: "Marketing Analytics",
      items: ["Campaign Performance", "Channel Attribution", "Customer Acquisition", "Conversion Funnels", "ROI Analysis", "Budget Optimization"],
      icon: FaChartLine
    },
    {
      category: "Website Analytics",
      items: ["Traffic Analysis", "User Behavior", "Page Performance", "Conversion Tracking", "Technical Metrics", "SEO Performance"],
      icon: FaGlobe
    },
    {
      category: "Business Intelligence",
      items: ["Sales Performance", "Customer Insights", "Operational Metrics", "Financial Reporting", "Market Trends", "Competitive Analysis"],
      icon: FaChartBar
    }
  ];

  const trustBadges = [
    {
      icon: FaShieldAlt,
      text: "Data Security Certified",
      description: "Enterprise-grade security for all your data and reporting"
    },
    {
      icon: FaStar,
      text: "Real-time Accuracy",
      description: "99.9% data accuracy with real-time synchronization"
    },
    {
      icon: FaRocket,
      text: "Actionable Insights",
      description: "Turn data into actionable business intelligence"
    }
  ];

  const tools = [
    {
      name: "Google Analytics",
      description: "Comprehensive web and app analytics platform",
      features: ["Event Tracking", "E-commerce Analytics", "User Flow Analysis", "Custom Dimensions"],
      icon: FaChartLine
    },
    {
      name: "Google Data Studio",
      description: "Interactive dashboard and reporting platform",
      features: ["Custom Visualizations", "Data Blending", "Automated Reports", "Team Collaboration"],
      icon: FaChartBar
    },
    {
      name: "Custom Solutions",
      description: "Tailored analytics platforms for unique business needs",
      features: ["API Integrations", "Custom Metrics", "White-label Reports", "Advanced Segmentation"],
      icon: FaCogs
    }
  ];

  const features = [
    {
      title: "Real-time Dashboards",
      description: "Live data visualization with interactive charts and metrics",
      icon: FaEye
    },
    {
      title: "Custom Metrics",
      description: "Track business-specific KPIs that matter to your organization",
      icon: FaChartLine
    },
    {
      title: "Automated Alerts",
      description: "Get notified of significant changes and performance anomalies",
      icon: FaHeart
    },
    {
      title: "Multi-channel Attribution",
      description: "Understand how different channels contribute to conversions",
      icon: FaFilter
    },
    {
      title: "Competitive Benchmarking",
      description: "Compare your performance against industry standards",
      icon: FaAward
    },
    {
      title: "Export & Share",
      description: "Easy export capabilities and collaborative sharing features",
      icon: FaDownload
    }
  ];

  const metrics = [
    {
      category: "Marketing Metrics",
      items: ["CTR (Click-Through Rate)", "CPC (Cost Per Click)", "ROAS (Return on Ad Spend)", "LTV (Lifetime Value)", "CAC (Customer Acquisition Cost)", "Conversion Rate"]
    },
    {
      category: "Website Metrics",
      items: ["Bounce Rate", "Session Duration", "Pages per Session", "Traffic Sources", "Device Breakdown", "Geography Analysis"]
    },
    {
      category: "Business Metrics",
      items: ["Revenue Growth", "Customer Retention", "Churn Rate", "Average Order Value", "Sales Velocity", "Profit Margins"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
<div
  className="relative bg-cover bg-center bg-no-repeat text-white py-24 overflow-hidden"
  style={{ backgroundImage: `url(${analyticsBg})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Background Glow Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-20"></div>
    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl opacity-20"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">

      {/* Icon Box */}
      <div className="flex justify-center mb-8">
        <div className="p-6 bg-white bg-opacity-20 rounded-3xl backdrop-blur-sm border border-white/30">
          <FaChartBar className="text-5xl text-orange-400" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent pb-3">
        Analytics & Reporting
      </h1>

      {/* Description */}
      <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
        Transform raw data into actionable insights. Make informed decisions with
        comprehensive analytics and real-time reporting that drives business growth.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        
      </div>

    </div>
  </div>
</div>

        

        {/* Trust Badges */}
        <div className="py-12 bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <badge.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{badge.text}</div>
                    <div className="text-sm text-gray-400">{badge.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Stats */}
        <div className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center group">
                  <div className={`bg-gradient-to-r ${result.color} p-4 rounded-2xl inline-flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <result.icon className="text-3xl text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{result.metric}</div>
                  <div className="text-lg text-gray-600 font-medium">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Analytics Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Comprehensive data solutions to measure, analyze, and optimize your business performance
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-orange-500/50 hover:transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl text-white text-2xl shadow-lg`}>
                      <service.icon />
                    </div>
                    <div className="text-2xl font-bold text-white">{service.title}</div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-300 group/item hover:text-orange-400 transition-colors duration-200"
                      >
                        <div className="bg-orange-500/20 p-1 rounded-lg mr-3 group-hover/item:bg-orange-500/30 transition-colors duration-200">
                          <FaCheck className="text-orange-400 text-sm" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Report Types Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-30"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Reporting
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Detailed analytics across all aspects of your business operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reportTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-orange-200"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-2xl p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <type.icon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {type.category}
                  </h3>
                  <div className="space-y-3">
                    {type.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center text-gray-700 group/item hover:text-orange-600 transition-colors duration-200"
                      >
                        <div className="bg-green-100 p-1 rounded-lg mr-3 group-hover/item:bg-green-200 transition-colors duration-200">
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

        {/* Tools & Platforms */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Analytics Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Expertise in leading analytics tools and custom solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-orange-500/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-2xl p-4 rounded-2xl shadow-lg">
                      <tool.icon />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="space-y-3">
                    {tool.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-300 group/item hover:text-orange-400 transition-colors duration-200"
                      >
                        <div className="bg-orange-500/20 p-1 rounded-lg mr-3">
                          <FaCheck className="text-orange-400 text-sm" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="py-20 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Advanced Analytics Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful capabilities to transform your data into business intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-orange-200 text-center"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xl p-4 rounded-2xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics We Track */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Key Metrics We Track
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive measurement across all business functions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {metrics.map((metricCategory, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-orange-500/50"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    {metricCategory.category}
                  </h3>
                  <div className="space-y-3">
                    {metricCategory.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center text-gray-300 group/item hover:text-orange-400 transition-colors duration-200"
                      >
                        <div className="bg-orange-500/20 p-1 rounded-lg mr-3">
                          <FaChartLine className="text-orange-400 text-sm" />
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

        {/* Process Section */}
        <div className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our Analytics Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A systematic approach to implementing powerful analytics solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 text-gray-900 rounded-2xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl font-bold text-orange-400 bg-orange-500/10 px-4 py-2 rounded-xl border border-orange-500/20">
                        {step.step}
                      </div>
                      <div className="text-orange-400">
                        <step.icon className="text-2xl" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
      <Footer />
    </div>
  );
};

export default AnalyticsReportingService;