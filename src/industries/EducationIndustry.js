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
  FaUserGraduate,
  FaUniversity,
  FaSchool,
  FaLaptopCode,
  FaHandsHelping,
  FaGraduationCap,
  FaUserTie,
  FaCloud,
  FaCogs,
} from "react-icons/fa";
import { SiGoogleclassroom, SiCoursera } from "react-icons/si";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChallengesImage from "../assets/Untitled-design-69.png";

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

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="min-h-screen">

        {/* HERO SECTION */}
        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
                <FaGraduationCap className="text-5xl text-orange-400" />
              </div>
            </div>

            <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-6">
              Education Marketing
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Transform educational institutions with data-driven marketing
              strategies. Attract students, engage communities, and build
              lasting educational brands.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-xl font-semibold hover:scale-105 transition flex items-center gap-2">
                Get Education Audit
                <FaArrowRight />
              </button>

              <button className="bg-white/10 text-white px-10 py-4 rounded-xl font-semibold backdrop-blur border border-white/20 hover:bg-white/20 transition">
                View Success Stories
              </button>
            </div>
          </div>
        </div>

        {/* UPDATED STATS SECTION */}
        <div className="py-16 bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center group">
                  
                  <div className={`bg-gradient-to-r ${result.color} p-4 rounded-2xl inline-flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition`}>
                    <result.icon className="text-3xl text-white" />
                  </div>

                  <div className="text-4xl font-bold text-white mb-2">
                    {result.metric}
                  </div>

                  <div className="text-lg text-white font-medium">
                    {result.label}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
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
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-orange-500/50 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl shadow-lg flex items-center justify-center">
                      <service.icon className={`text-2xl ${service.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className="bg-orange-500/20 p-1 rounded-lg mr-3">
                          <FaCheck className="text-orange-400 text-sm" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* NEW 2×2 CHALLENGES GRID SECTION */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-gray-900 text-center mb-16">
              Challenges Faced by the Education Industry
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* LEFT — 4 CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* CARD 01 */}
                <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4">
                    01
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Student Enrollment Drop
                  </h3>
                  <p className="text-gray-600">
                    Many institutions struggle to meet their admission targets due to 
                    increasing competition, lack of brand visibility, and limited digital outreach.
                  </p>
                </div>

                {/* CARD 02 */}
                <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4">
                    02
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Low Engagement in Digital
                  </h3>
                  <p className="text-gray-600">
                    Educational brands often fail to maintain consistent interaction across 
                    social platforms, causing missed opportunities for engagement & brand recall.
                  </p>
                </div>

                {/* CARD 03 */}
                <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4">
                    03
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Poor Lead Follow-Up & Conversion
                  </h3>
                  <p className="text-gray-600">
                    Manual processes and unorganized systems lead to slow or missed follow-ups, 
                    reducing conversions and lowering ROI on marketing efforts.
                  </p>
                </div>

                {/* CARD 04 */}
                <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4">
                    04
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Difficulty in Showing Value Proposition
                  </h3>
                  <p className="text-gray-600">
                    Institutions often struggle to showcase their strengths, faculty quality, 
                    and outcomes effectively in a competitive digital space.
                  </p>
                </div>

              </div>

              {/* RIGHT SIDE IMAGE */}
              <div className="flex justify-center">
                <img
                  src={ChallengesImage}
                  alt="Challenges"
                  className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
                />
              </div>

            </div>
          </div>
        </div>
        {/* 🌟 NEW SECTION — How Amplinova turns that challenges into opportunity */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-6">

            {/* Heading */}
            <h2 className="text-5xl font-bold text-gray-900 text-center mb-16">
              How <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent underline decoration-orange-400 decoration-4">Amplinova</span> turns that challenges into opportunity
            </h2>

            {/* 4 Items — Side by side */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

              {/* 01 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <FaCheck className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Performance-Wise Lead Generation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We run strategic ad campaigns across platforms like Meta,
                  Google, and LinkedIn, generating high-quality leads for 
                  courses, webinars, and admissions—customized to your 
                  target audience.
                </p>
              </div>

              {/* 02 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <FaCheck className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Automated Follow-Up Systems
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With WhatsApp API, email automation, and CRM integrations, 
                  we ensure no lead goes unattended—maximizing conversions 
                  with timely communication.
                </p>
              </div>

              {/* 03 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <FaCheck className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Value-Driven Content
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We create compelling content including student 
                  testimonials, alumni success stories, and virtual campus 
                  tours to highlight your institution’s strengths and build trust.
                </p>
              </div>

              {/* 04 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <FaCheck className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Student-Centric Campaigns
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From quizzes, webinars, and guidance sessions to trending
                  social media challenges, we help you engage prospective 
                  students where they spend most of their time—online.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* SEGMENTS SECTION */}
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

        {/* CTA SECTION */}
        <div className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Transform Your Education Institution?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let's create a marketing strategy that attracts the right
              students, builds your brand, and drives measurable growth for your
              educational organization.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-12 py-5 rounded-xl font-semibold hover:scale-105 transition flex items-center gap-3">
                Get Free Education Audit
                <FaArrowRight />
              </button>

              <button className="bg-white text-gray-900 px-12 py-5 rounded-xl font-semibold border-2 border-white hover:bg-gray-100 transition">
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
