import React from "react";
import {
  FaUsers,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaChartLine,
  FaMobile,
  FaGlobe,
  FaLightbulb,
  FaRegClock,
  FaUserGraduate,
  FaUniversity,
  FaSchool,
  FaLaptopCode,
  FaHandsHelping,
  FaGraduationCap,
  FaUserTie,
  FaCloud,
  FaCogs,
  FaArrowDown,
} from "react-icons/fa";
import { SiGoogleclassroom, SiCoursera } from "react-icons/si";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EducationIndustry = () => {
  const services = [
    {
      icon: FaUniversity,
      title: "Higher Education",
      description:
        "Comprehensive marketing for colleges, universities, and graduate programs",
      features: [
        "Student Recruitment",
        "Brand Positioning",
        "Alumni Engagement",
        "Program Promotion",
      ],
      color: "from-orange-500 to-amber-500",
      iconColor: "text-blue-500",
    },
    {
      icon: FaSchool,
      title: "K-12 Schools",
      description:
        "Targeted strategies for primary and secondary educational institutions",
      features: [
        "Parent Communication",
        "Enrollment Growth",
        "Community Outreach",
        "Event Promotion",
      ],
      color: "from-orange-500 to-amber-500",
      iconColor: "text-green-500",
    },
    {
      icon: FaLaptopCode,
      title: "EdTech Companies",
      description:
        "Digital marketing for educational technology and e-learning platforms",
      features: [
        "User Acquisition",
        "Product Launch",
        "Partnership Development",
        "Content Marketing",
      ],
      color: "from-orange-500 to-amber-500",
      iconColor: "text-purple-500",
    },
    {
      icon: SiCoursera,
      title: "Online Courses",
      description:
        "Marketing solutions for online course creators and educational content",
      features: [
        "Course Promotion",
        "Student Onboarding",
        "Retention Strategies",
        "Upsell Campaigns",
      ],
      color: "from-orange-500 to-amber-500",
      iconColor: "text-red-500",
    },
    {
      icon: FaUserTie,
      title: "Vocational Training",
      description:
        "Marketing for trade schools and professional certification programs",
      features: [
        "Career-focused Messaging",
        "Industry Partnerships",
        "Job Placement Promotion",
        "Skill Development",
      ],
      color: "from-orange-500 to-amber-500",
      iconColor: "text-indigo-500",
    },
    {
      icon: FaHandsHelping,
      title: "Educational Nonprofits",
      description:
        "Mission-driven marketing for educational organizations and foundations",
      features: [
        "Donor Acquisition",
        "Grant Writing Support",
        "Community Awareness",
        "Impact Storytelling",
      ],
      color: "from-orange-500 to-amber-500",
      iconColor: "text-teal-500",
    },
  ];

  const results = [
    {
      metric: "58%",
      label: "Enrollment Growth",
      icon: FaUsers,
      color: "from-orange-500 to-amber-500",
    },
    {
      metric: "4.3x",
      label: "Lead Generation",
      icon: FaChartLine,
      color: "from-orange-500 to-amber-500",
    },
    {
      metric: "72%",
      label: "Brand Awareness",
      icon: FaGlobe,
      color: "from-orange-500 to-amber-500",
    },
    {
      metric: "85%",
      label: "Student Engagement",
      icon: FaMobile,
      color: "from-orange-500 to-amber-500",
    },
  ];

  const trustBadges = [
    {
      icon: FaShieldAlt,
      text: "FERPA Compliant",
      description: "Compliant with educational privacy regulations",
    },
    {
      icon: FaStar,
      text: "Education Experts",
      description: "Team with background in educational institutions",
    },
    {
      icon: FaRocket,
      text: "Proven Results",
      description: "Track record of success in education marketing",
    },
  ];

  const segments = [
    {
      category: "Educational Institutions",
      items: [
        "Universities",
        "Colleges",
        "Community Colleges",
        "Vocational Schools",
        "K-12 Schools",
        "Preschools",
        "Language Schools",
        "Test Prep Centers",
      ],
      icon: FaUniversity,
      iconColor: "text-blue-500",
    },
    {
      category: "EdTech & Online Learning",
      items: [
        "Learning Management Systems",
        "Online Course Platforms",
        "Educational Apps",
        "Tutoring Services",
        "Educational Software",
        "Virtual Classrooms",
        "Assessment Tools",
        "Learning Analytics",
      ],
      icon: FaCloud,
      iconColor: "text-purple-500",
    },
    {
      category: "Educational Services",
      items: [
        "Student Recruitment",
        "Educational Consulting",
        "Curriculum Development",
        "Teacher Training",
        "Study Abroad Programs",
        "Educational Publishing",
        "Research Institutions",
        "Educational Nonprofits",
      ],
      icon: FaCogs,
      iconColor: "text-green-500",
    },
  ];

  const caseStudies = [
    {
      problem: "Declining Enrollment & Low Digital Presence",
      solution: "Comprehensive Digital Transformation",
      client: "Midwest University",
      challenge:
        "Facing 25% enrollment decline over 3 years with outdated marketing and poor online visibility",
      approach: [
        "Complete website redesign with student-focused content",
        "Social media strategy targeting Gen Z prospects",
        "Data-driven PPC campaigns for high-demand programs",
        "Virtual campus tour and interactive content",
      ],
      results: [
        { metric: "45%", label: "Increase in Applications" },
        { metric: "3.2x", label: "More Qualified Leads" },
        { metric: "68%", label: "Growth in Social Engagement" },
        { metric: "$2.3M", label: "Increased Enrollment Revenue" },
      ],
      timeline: "6 Months",
      icon: FaUserGraduate,
      iconColor: "text-red-500",
    },
    {
      problem: "Low Course Completion Rates",
      solution: "Engagement & Retention Strategy",
      client: "Online Learning Platform",
      challenge:
        "Only 35% course completion rate with high student dropout in first 30 days",
      approach: [
        "Personalized learning path recommendations",
        "Gamified progress tracking system",
        "Automated engagement campaigns",
        "Community building and peer support",
      ],
      results: [
        { metric: "82%", label: "Course Completion Rate" },
        { metric: "2.5x", label: "Student Retention" },
        { metric: "45%", label: "Increase in Upsells" },
        { metric: "4.8★", label: "Student Satisfaction" },
      ],
      timeline: "4 Months",
      icon: SiGoogleclassroom,
      iconColor: "text-red-500",
    },
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
                Transform educational institutions with data-driven marketing
                strategies. Attract students, engage communities, and build
                lasting educational brands.
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
                    <div className="text-sm text-gray-400">
                      {badge.description}
                    </div>
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
                  <div
                    className={`bg-gradient-to-r ${result.color} p-4 rounded-2xl inline-flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <result.icon className="text-3xl text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {result.metric}
                  </div>
                  <div className="text-lg text-gray-600 font-medium">
                    {result.label}
                  </div>
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
                Specialized solutions for every segment of the education
                industry
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-orange-500/50 hover:transform hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl shadow-lg flex items-center justify-center">
                      <service.icon
                        className={`text-2xl ${service.iconColor}`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
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

        {/* Problem-Solution Case Studies - Timeline */}
        <div className="py-20 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Education Challenges We Solve
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real problems, data-driven solutions, measurable results
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-500 to-green-500 h-full"></div>

              {caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Problem Card */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-l-4 border-red-500 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-red-500 p-2 rounded-xl">
                          <caseStudy.icon className="text-white text-lg" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                            Challenge
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {caseStudy.problem}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">
                        {caseStudy.challenge}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <FaUserGraduate />
                          <span>{caseStudy.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaRegClock />
                          <span>{caseStudy.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Solution Card */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-l-4 border-green-500 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-green-500 p-2 rounded-xl">
                          <FaLightbulb className="text-white text-lg" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                            Solution
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {caseStudy.solution}
                          </h3>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {caseStudy.approach
                          .slice(0, 2)
                          .map((step, stepIndex) => (
                            <div
                              key={stepIndex}
                              className="flex items-center gap-2"
                            >
                              <FaCheck className="text-green-500 text-sm" />
                              <span className="text-gray-700 text-sm">
                                {step}
                              </span>
                            </div>
                          ))}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {caseStudy.results.map((result, resultIndex) => (
                          <div
                            key={resultIndex}
                            className="text-center bg-white rounded-lg p-2 shadow-sm"
                          >
                            <div className="font-bold text-green-600 text-lg">
                              {result.metric}
                            </div>
                            <div className="text-xs text-gray-600">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Segments Section */}
        <div className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 relative">
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
                  className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 group hover:border-orange-300"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <segment.icon className={`text-2xl ${segment.iconColor}`} />
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

        {/* CTA Section */}
        <div className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-500 opacity-10 rounded-full -translate-y-1/4 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-amber-300 opacity-10 rounded-full translate-y-1/4 -translate-x-1/4"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Transform Your Education Institution?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's create a marketing strategy that attracts the right
              students, builds your brand, and drives measurable growth for your
              educational organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
                Get Free Education Audit
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-white hover:border-gray-100 shadow-2xl">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EducationIndustry;
