import React from "react";
import {
  FaEnvelope,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaCog,
  FaSync,
  FaMagic,
  FaEye,
  FaHeart,
  FaClock,
  FaList,
  FaFilter,
  FaPalette,
  FaMobile,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import emailBg from "../../assets/email.jpg";


const EmailMarketingService = () => {
  const services = [
    {
      icon: FaList,
      title: "Email Strategy",
      description: "Develop comprehensive email marketing strategies that align with your business goals",
      features: ["Audience Segmentation", "Content Planning", "Send Time Optimization", "Goal Setting"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaPalette,
      title: "Template Design",
      description: "Create stunning, responsive email templates that convert across all devices",
      features: ["Mobile-Responsive", "Brand-Aligned", "A/B Testing", "Custom Coding"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaEnvelope,
      title: "Campaign Management",
      description: "End-to-end management of your email campaigns from setup to analysis",
      features: ["Automation Setup", "List Management", "Performance Tracking", "Spam Testing"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaUsers,
      title: "List Growth",
      description: "Strategies to grow your email list with qualified, engaged subscribers",
      features: ["Lead Magnets", "Opt-in Forms", "Landing Pages", "Social Integration"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaFilter,
      title: "Automation & Sequences",
      description: "Set up automated email sequences that nurture leads and drive conversions",
      features: ["Welcome Series", "Drip Campaigns", "Behavioral Triggers", "Cart Abandonment"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaChartLine,
      title: "Analytics & Optimization",
      description: "Comprehensive tracking and continuous improvement of email performance",
      features: ["Open Rate Tracking", "Click Monitoring", "Conversion Analysis", "ROI Measurement"],
      color: "from-orange-500 to-amber-500"
    },
  ];

  const process = [
    {
      step: "01",
      title: "Audit & Analysis",
      description: "Comprehensive review of your current email marketing performance",
      icon: FaChartLine
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create customized email marketing roadmap for your business",
      icon: FaCog
    },
    {
      step: "03",
      title: "List Building",
      description: "Implement strategies to grow your subscriber base with quality leads",
      icon: FaUsers
    },
    {
      step: "04",
      title: "Content Creation",
      description: "Develop engaging email content and design responsive templates",
      icon: FaPalette
    },
    {
      step: "05",
      title: "Automation Setup",
      description: "Configure automated sequences and behavioral triggers",
      icon: FaSync
    },
    {
      step: "06",
      title: "Launch & Optimize",
      description: "Execute campaigns and continuously improve based on data",
      icon: FaMagic
    },
  ];

  const results = [
    { metric: "42%", label: "Average Open Rate", icon: FaEye, color: "from-orange-500 to-amber-500" },
    { metric: "5.8%", label: "Click-Through Rate", icon: FaHeart, color: "from-orange-500 to-amber-500" },
    { metric: "18x", label: "Average ROI", icon: FaChartLine, color: "from-orange-500 to-amber-500" },
    { metric: "67%", label: "Faster Lead Nurturing", icon: FaClock, color: "from-orange-500 to-amber-500" },
  ];

  const emailTypes = [
    {
      category: "Promotional Emails",
      items: ["Newsletters", "Product Launches", "Special Offers", "Seasonal Campaigns", "Flash Sales", "Event Invitations"],
      icon: FaRocket
    },
    {
      category: "Automated Sequences",
      items: ["Welcome Series", "Onboarding Sequences", "Cart Abandonment", "Re-engagement Campaigns", "Post-Purchase Follow-ups", "Educational Drips"],
      icon: FaSync
    },
    {
      category: "Transactional Emails",
      items: ["Order Confirmations", "Shipping Notifications", "Account Updates", "Password Resets", "Payment Receipts", "Support Responses"],
      icon: FaEnvelope
    }
  ];

  const trustBadges = [
    {
      icon: FaShieldAlt,
      text: "GDPR Compliant",
      description: "Fully compliant with email marketing regulations and privacy laws"
    },
    {
      icon: FaStar,
      text: "98% Deliverability",
      description: "Expert strategies to ensure your emails reach the inbox"
    },
    {
      icon: FaRocket,
      text: "Rapid Results",
      description: "See measurable improvements in your email performance within weeks"
    }
  ];

  const features = [
    {
      title: "Advanced Segmentation",
      description: "Target subscribers based on behavior, demographics, and engagement levels",
      icon: FaFilter
    },
    {
      title: "A/B Testing",
      description: "Test subject lines, content, and send times to optimize performance",
      icon: FaChartLine
    },
    {
      title: "Mobile Optimization",
      description: "Perfect rendering across all devices and email clients",
      icon: FaMobile
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time tracking of opens, clicks, conversions, and revenue",
      icon: FaEye
    }
  ];

  const platforms = [
    {
      name: "Mailchimp",
      description: "User-friendly platform perfect for small to medium businesses",
      strength: "Easy automation and beautiful templates"
    },
    {
      name: "Klaviyo",
      description: "E-commerce focused with advanced segmentation and analytics",
      strength: "Powerful e-commerce integrations"
    },
    {
      name: "HubSpot",
      description: "All-in-one marketing platform with CRM integration",
      strength: "Seamless CRM integration"
    },
    {
      name: "ActiveCampaign",
      description: "Advanced automation and machine learning capabilities",
      strength: "Sophisticated automation features"
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
  style={{ backgroundImage: `url(${emailBg})` }}
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

      {/* Icon */}
      <div className="flex justify-center mb-8">
        <div className="p-6 bg-white bg-opacity-20 rounded-3xl backdrop-blur-sm border border-white/30">
          <FaEnvelope className="text-5xl text-orange-400" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent pb-3">
        Email Marketing
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
        Build lasting customer relationships and drive consistent revenue with 
        strategic email marketing campaigns that convert subscribers into loyal advocates.
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
                Email Marketing Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Comprehensive email solutions to nurture leads and drive consistent revenue
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

        {/* Email Types Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-30"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Types of Email Campaigns
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Diverse email strategies to engage your audience at every stage of their journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {emailTypes.map((type, index) => (
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

        {/* Key Features Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Advanced Email Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Leverage cutting-edge email marketing capabilities for maximum impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-orange-500/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xl p-3 rounded-xl shadow-lg">
                      <feature.icon />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Expertise */}
        <div className="py-20 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Platform Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're experts in all major email marketing platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-orange-200 text-center"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xl p-4 rounded-2xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FaEnvelope />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{platform.description}</p>
                  <div className="text-orange-600 text-sm font-semibold">
                    {platform.strength}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Our Email Marketing Process
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A systematic approach to building successful email marketing campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white rounded-2xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl font-bold text-orange-400 bg-orange-500/10 px-4 py-2 rounded-xl border border-orange-500/20">
                        {step.step}
                      </div>
                      <div className="text-orange-400">
                        <step.icon className="text-2xl" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's create email campaigns that build relationships, drive conversions, 
              and deliver exceptional ROI for your business.
            </p>
            <div className="flex justify-center items-center mt-6">
              <button 
              onClick={() => (window.location.href = "/contact-us")}
              className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center gap-3">
                Launch Your Campaign
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
              </button>
            </div>

           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmailMarketingService;