import React from "react";
import {
  FaGraduationCap,
  FaBook,
  FaChalkboardTeacher,
  FaUniversity,
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaChartLine,
  FaMobile,
  FaGlobe,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const EducationIndustry = () => {
  const services = [
    {
      icon: FaUniversity,
      title: "Higher Education",
      description: "Comprehensive marketing for colleges, universities, and graduate programs",
      features: ["Student Recruitment", "Brand Positioning", "Alumni Engagement", "Program Promotion"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaChalkboardTeacher,
      title: "K-12 Schools",
      description: "Targeted strategies for primary and secondary educational institutions",
      features: ["Parent Communication", "Enrollment Growth", "Community Outreach", "Event Promotion"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaLaptopCode,
      title: "EdTech Companies",
      description: "Digital marketing for educational technology and e-learning platforms",
      features: ["User Acquisition", "Product Launch", "Partnership Development", "Content Marketing"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaBook,
      title: "Online Courses",
      description: "Marketing solutions for online course creators and educational content",
      features: ["Course Promotion", "Student Onboarding", "Retention Strategies", "Upsell Campaigns"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaGraduationCap,
      title: "Vocational Training",
      description: "Marketing for trade schools and professional certification programs",
      features: ["Career-focused Messaging", "Industry Partnerships", "Job Placement Promotion", "Skill Development"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaUsers,
      title: "Educational Nonprofits",
      description: "Mission-driven marketing for educational organizations and foundations",
      features: ["Donor Acquisition", "Grant Writing Support", "Community Awareness", "Impact Storytelling"],
      color: "from-orange-500 to-amber-500"
    },
  ];

  const results = [
    { metric: "58%", label: "Enrollment Growth", icon: FaUsers, color: "from-orange-500 to-amber-500" },
    { metric: "4.3x", label: "Lead Generation", icon: FaChartLine, color: "from-orange-500 to-amber-500" },
    { metric: "72%", label: "Brand Awareness", icon: FaGlobe, color: "from-orange-500 to-amber-500" },
    { metric: "85%", label: "Student Engagement", icon: FaMobile, color: "from-orange-500 to-amber-500" },
  ];

  const trustBadges = [
    {
      icon: FaShieldAlt,
      text: "FERPA Compliant",
      description: "Compliant with educational privacy regulations"
    },
    {
      icon: FaStar,
      text: "Education Experts",
      description: "Team with background in educational institutions"
    },
    {
      icon: FaRocket,
      text: "Proven Results",
      description: "Track record of success in education marketing"
    }
  ];

  const segments = [
    {
      category: "Educational Institutions",
      items: ["Universities", "Colleges", "Community Colleges", "Vocational Schools", "K-12 Schools", "Preschools", "Language Schools", "Test Prep Centers"],
      icon: FaUniversity
    },
    {
      category: "EdTech & Online Learning",
      items: ["Learning Management Systems", "Online Course Platforms", "Educational Apps", "Tutoring Services", "Educational Software", "Virtual Classrooms", "Assessment Tools", "Learning Analytics"],
      icon: FaLaptopCode
    },
    {
      category: "Educational Services",
      items: ["Student Recruitment", "Educational Consulting", "Curriculum Development", "Teacher Training", "Study Abroad Programs", "Educational Publishing", "Research Institutions", "Educational Nonprofits"],
      icon: FaBook
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-white bg-opacity-10 rounded-3xl backdrop-blur-sm border border-white border-opacity-20">
                  <FaGraduationCap className="text-5xl text-orange-400" />
                </div>
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Education Marketing
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Transform educational institutions with data-driven marketing strategies. 
                Attract students, engage communities, and build lasting educational brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
                  Get Education Audit
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                  View Success Stories
                </button>
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
                Education Marketing Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Specialized solutions for every segment of the education industry
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

        {/* Segments Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-30"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Education Segments We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive expertise across all education sectors
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {segments.map((segment, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-orange-200"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-2xl p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <segment.icon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {segment.category}
                  </h3>
                  <div className="space-y-3">
                    {segment.items.map((item, itemIndex) => (
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

        
      </div>
      <Footer />
    </div>
  );
};

export default EducationIndustry;