import React from "react";
import {
  FaMobile,
  FaApple,
  FaAndroid,
  FaReact,
  FaFlask,
  FaShieldAlt,
  FaCheck,
  FaUsers,
  FaArrowRight,
  FaRocket,
  FaPaintBrush,
  FaCode,
  FaDeploydog,
  FaHeadset,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import mobileBg from "../../assets/devmob.jpg";

const MobileAppDevelopment = () => {
  const services = [
    {
      icon: FaApple,
      title: "iOS App Development",
      description:
        "Native iOS applications built with Swift and Objective-C for optimal performance",
      image: "📱",
    },
    {
      icon: FaAndroid,
      title: "Android App Development",
      description:
        "Native Android apps using Kotlin and Java for seamless user experience",
      image: "🤖",
    },
    {
      icon: FaReact,
      title: "React Native Apps",
      description: "Cross-platform solutions that work on both iOS and Android",
      image: "⚛️",
    },
    {
      icon: FaFlask,
      title: "Flutter Development",
      description:
        "Beautiful, natively compiled applications from a single codebase",
      image: "🎯",
    },
    {
      icon: FaShieldAlt,
      title: "App Security",
      description:
        "Comprehensive security measures to protect user data and privacy",
      image: "🛡️",
    },
    {
      icon: FaUsers,
      title: "App Maintenance",
      description: "Ongoing support, updates, and feature enhancements",
      image: "🔧",
    },
  ];

  const platforms = {
    native: [
      "iOS (Swift)",
      "Android (Kotlin)",
      "Platform-specific Features",
      "Maximum Performance",
    ],
    cross: ["React Native", "Flutter", "Single Codebase", "Faster Development"],
    hybrid: ["Ionic", "PhoneGap", "Web Technologies", "Cost-Effective"],
  };

  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description:
        "Define app objectives, target audience, and feature requirements",
      icon: FaRocket,
    },
    {
      step: "02",
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging user interfaces and experiences",
      icon: FaPaintBrush,
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular updates and testing",
      icon: FaCode,
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Comprehensive testing on multiple devices and platforms",
      icon: FaFlask,
    },
    {
      step: "05",
      title: "App Store Deployment",
      description: "Submission and approval process for app stores",
      icon: FaDeploydog,
    },
    {
      step: "06",
      title: "Post-Launch Support",
      description: "Monitoring, updates, and feature enhancements",
      icon: FaHeadset,
    },
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="min-h-screen">
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
        <div
          className="relative bg-cover bg-center bg-no-repeat text-white py-24 overflow-hidden"
          style={{ backgroundImage: `url(${mobileBg})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Blue glow shapes (unchanged) */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-500 to-transparent opacity-20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-400 to-transparent opacity-20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-white bg-opacity-20 rounded-3xl backdrop-blur-sm border border-white border-opacity-30">
                  <FaMobile className="text-5xl text-white" />
                </div>
              </div>

              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent pb-3">
                Mobile App Development
              </h1>

              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
                Transform your ideas into powerful mobile applications. We
                create engaging, high-performance apps that users love and
                businesses rely on across all platforms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-white relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive web development services tailored to your needs.
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

        {/* Image Row */}

        <div className="container mx-auto px-6 pt-24">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900">
              Mobile App UI Templates
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Explore our custom-designed mobile UI mockups across various
              industries
            </p>
          </div>

          {/* Templates */}
          <div className="mt-16 mb-16 flex flex-wrap justify-center gap-12">
           <div class="flex gap-4"> 
            {/* Aduri Group */}
            <div className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-3">
              <img
                src="/aduri3.png"
                alt="Real Estate Template"
                className="w-80 h-80 object-contain bg-black rounded-xl shadow-xl 
                   group-hover:shadow-2xl group-hover:shadow-blue-200 
                   transition-all duration-500"
              />
              <p
                className="mt-4 text-lg font-semibold text-gray-700 
                    group-hover:text-blue-600 transition-colors"
              >
                Real Estate – Aduri Group
              </p>
            </div>

            {/* ArrowAI */}
            <div className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-3">
              <img
                src="/arrowai.png"
                alt="Tours Template"
                className="w-80 h-80 object-contain bg-black rounded-xl shadow-xl
                   group-hover:shadow-2xl group-hover:shadow-blue-200
                   transition-all duration-500"
              />
              <p
                className="mt-4 text-lg font-semibold text-gray-700
                    group-hover:text-blue-600 transition-colors"
              >
                Tours & Travels – ArrowAI
              </p>
            </div>

            {/* Salford & Co */}
            <div className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-3">
              <img
                src="/salford.png"
                alt="Fashion Template"
                className="w-80 h-80 object-contain bg-black rounded-xl shadow-xl
                   group-hover:shadow-2xl group-hover:shadow-blue-200
                   transition-all duration-500"
              />
              <p
                className="mt-4 text-lg font-semibold text-gray-700
                    group-hover:text-blue-600 transition-colors"
              >
                Fashion Brand – Salford & Co
              </p>
            </div>
          </div>
            {/* Chiropractic */}
          <div class="flex gap-4"> 
            <div className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-3">
              <img
                src="/chiropractic2.png"
                alt="Chiropractic Template"
                className="w-80 h-80 object-contain bg-black rounded-xl shadow-xl
                   group-hover:shadow-2xl group-hover:shadow-blue-200
                   transition-all duration-500"
              />
              <p
                className="mt-4 text-lg font-semibold text-gray-700
                    group-hover:text-blue-600 transition-colors"
              >
                Chiropractic Health Care
              </p>
            </div>

            {/* Organic */}
            <div className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-3">
              <img
                src="/organic1.png"
                alt="Organic Template"
                className="w-80 h-80 object-contain bg-black rounded-xl shadow-xl
                   group-hover:shadow-2xl group-hover:shadow-blue-200
                   transition-all duration-500"
              />
              <p
                className="mt-4 text-lg font-semibold text-gray-700
                    group-hover:text-blue-600 transition-colors"
              >
                Organic Fresh and Natural
              </p>
            </div>

            {/* Larana */}
            <div className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-3">
              <img
                src="/larana1.png"
                alt="Learning Platform Template"
                className="w-80 h-80 object-contain bg-black rounded-xl shadow-xl
                   group-hover:shadow-2xl group-hover:shadow-blue-200
                   transition-all duration-500"
              />
              <p
                className="mt-4 text-lg font-semibold text-gray-700
                    group-hover:text-blue-600 transition-colors"
              >
                Larana Learning School
              </p>
            </div>
          </div>
          </div>
        </div>
        {/* Platforms Section */}
        <div className="py-20 bg-gradient-to-br from-blue-50 to-gray-100 relative">
          <div className="absolute inset-0 bg-blue-900 opacity-5"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Development Platforms
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the right technology for your project needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(platforms).map(([type, features]) => (
                <div
                  key={type}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold py-3 px-6 rounded-xl mb-6 text-center capitalize transform -translate-y-2 group-hover:-translate-y-3 transition-transform duration-300">
                    {type === "native"
                      ? "Native Development"
                      : type === "cross"
                      ? "Cross-Platform"
                      : "Hybrid Apps"}
                  </div>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-700 text-lg group/item hover:text-blue-600 transition-colors duration-200"
                      >
                        <div className="bg-green-100 p-2 rounded-lg mr-4 group-hover/item:bg-green-200 transition-colors duration-200">
                          <FaCheck className="text-green-600 text-sm" />
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

        {/* Process Section */}
        <div className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full translate-y-48 -translate-x-48"></div>

          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our App Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven methodology for successful app launches and user
                satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-3xl font-bold text-blue-200 bg-blue-900 bg-opacity-30 px-4 py-2 rounded-xl">
                        {step.step}
                      </div>
                      <div className="text-blue-200">
                        <step.icon className="text-3xl" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-blue-100 leading-relaxed text-lg">
                      {step.description}
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's turn your app idea into reality with our expert mobile
              development team. From concept to launch, we'll guide you through
              every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
                Start Your App Project
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-white hover:border-gray-100 shadow-2xl">
                See Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;
