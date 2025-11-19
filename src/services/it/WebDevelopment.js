import React from "react"; 
import {
  FaCode,
  FaMobile,
  FaDesktop,
  FaShoppingCart,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaArrowRight,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaJava,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiRubyonrails,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiMagento,
} from "react-icons/si";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import webDevBg from "../../assets/Web-development.jpeg";

const WebDevelopment = () => {
  const features = [
    {
      icon: FaDesktop,
      title: "Responsive Design",
      description:
        "Websites that look perfect on all devices - desktop, tablet, and mobile",
      image: "🖥️",
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Complete online store development with secure payment integration",
      image: "🛒",
    },
    {
      icon: FaDatabase,
      title: "CMS Development",
      description: "Custom content management systems for easy content updates",
      image: "📊",
    },
    {
      icon: FaShieldAlt,
      title: "Security First",
      description:
        "Built-in security measures to protect against vulnerabilities",
      image: "🛡️",
    },
    {
      icon: FaRocket,
      title: "Performance Optimized",
      description:
        "Lightning-fast loading times for better user experience and SEO",
      image: "🚀",
    },
    {
      icon: FaMobile,
      title: "Progressive Web Apps",
      description: "Web applications that feel like native mobile apps",
      image: "📱",
    },
  ];

  const technologies = {
    frontend: [
      { name: "React", icon: FaReact, color: "text-blue-500" },
      { name: "Vue.js", icon: FaVuejs, color: "text-green-500" },
      { name: "Angular", icon: FaAngular, color: "text-red-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
      { name: "SASS", icon: SiSass, color: "text-pink-500" },
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
      { name: "Python", icon: FaPython, color: "text-blue-400" },
      { name: "PHP", icon: FaPhp, color: "text-purple-500" },
      { name: "Java", icon: FaJava, color: "text-red-400" },
      { name: "Ruby on Rails", icon: SiRubyonrails, color: "text-red-600" },
      { name: ".NET", icon: SiDotnet, color: "text-purple-600" },
    ],
    database: [
      { name: "MySQL", icon: SiMysql, color: "text-orange-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
    ],
    cms: [
      { name: "WordPress", icon: FaWordpress, color: "text-blue-800" },
      { name: "Shopify", icon: FaShopify, color: "text-green-600" },
      { name: "Magento", icon: SiMagento, color: "text-orange-600" },
      { name: "Custom CMS", icon: FaCode, color: "text-gray-600" },
    ],
  };

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Understanding your requirements and creating a detailed project plan",
      image: "🎯",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description:
        "Creating wireframes and designs for optimal user experience",
      image: "🎨",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your website with clean, maintainable code",
      image: "💻",
    },
    {
      step: "04",
      title: "Testing & Quality",
      description: "Rigorous testing across all devices and browsers",
      image: "🧪",
    },
    {
      step: "05",
      title: "Deployment",
      description:
        "Launching your website and ensuring everything works perfectly",
      image: "🚀",
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description:
        "Ongoing support and updates to keep your site running smoothly",
      image: "🔧",
    },
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="min-h-screen">

        {/* HERO SECTION (UNCHANGED) */}
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
<div
  className="relative bg-cover bg-center bg-no-repeat text-white py-24 overflow-hidden"
  style={{ backgroundImage: `url(${webDevBg})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex justify-center mb-8">
        <div className="p-6 bg-white bg-opacity-20 rounded-3xl backdrop-blur-sm border border-white border-opacity-30">
          <FaCode className="text-5xl text-white" />
        </div>
      </div>
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent pb-3">
        Web Development
      </h1>
      <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
        Custom, responsive, and high-performance websites that drive results.
      </p>
    </div>
  </div>
</div>


        {/* --- WHAT WE OFFER --- */}
        <div className="py-20 bg-white relative">
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive web development services tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-200 hover:transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-2xl text-white">
                      {feature.image}
                    </div>
                    <div className="text-blue-600">
                      <feature.icon className="text-3xl opacity-80" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- NEW PORTFOLIO WEBSITES SECTION --- */}
        <div className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-10">
              Portfolio Websites
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Explore fully working, live demo websites embedded directly for preview.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
      

              
              
<div className="bg-white rounded-3xl border shadow-lg p-4">
  <iframe
    src="https://rajasreetownships.in/"
    className="w-full h-96 rounded-2xl"
    loading="lazy"
  ></iframe>
  <h3 className="text-xl font-semibold mt-4">Rajasree Townships</h3>
</div>            

<div className="bg-white rounded-3xl border shadow-lg p-4">
  <iframe
    src="https://adurigroup.com/"
    className="w-full h-96 rounded-2xl"
    loading="lazy"
  ></iframe>
  <h3 className="text-xl font-semibold mt-4">Aduri Group</h3>
</div>

            <div className="bg-white rounded-3xl border shadow-lg p-4">
                <iframe
                  src="https://spineresetchiropractic.com/"
                  className="w-full h-96 rounded-2xl"
                  loading="lazy"
                ></iframe>
                <h3 className="text-xl font-semibold mt-4">Spine Reset Chiropractic</h3>
              </div>

              <div className="bg-white rounded-3xl border shadow-lg p-4">
  <iframe
    src="https://vivinfra.com/"
    className="w-full h-96 rounded-2xl"
    loading="lazy"
  ></iframe>
  <h3 className="text-xl font-semibold mt-4">Viv Infra</h3>
</div>

<div className="bg-white rounded-3xl border shadow-lg p-4">
                <iframe
                  src="https://arrowai.com/"
                  className="w-full h-96 rounded-2xl"
                  loading="lazy"
                ></iframe>
                <h3 className="text-xl font-semibold mt-4">Arrow AI</h3>
              </div>

              <div className="bg-white rounded-3xl border shadow-lg p-4">
                <iframe
                  src="https://abhyahastainfradevlopers.com/"
                  className="w-full h-96 rounded-2xl"
                  loading="lazy"
                ></iframe>
                <h3 className="text-xl font-semibold mt-4">Abhyahasta Infra Developers</h3>
              </div>



              

             
            </div>
          </div>
        </div>
                {/* --- TECHNOLOGIES SECTION (UNCHANGED) --- */}
        <div className="py-20 bg-gradient-to-br from-blue-50 to-gray-100 relative">
          <div className="absolute inset-0 bg-blue-900 opacity-5"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Modern tech stack for robust, scalable, and future-proof solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(technologies).map(([category, items]) => (
                <div key={category} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 text-center capitalize border-b-2 border-blue-200 pb-3">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {items.map((tech, index) => (
                      <div
                        key={index}
                        className="group bg-white rounded-xl p-4 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 flex flex-col items-center text-center hover:bg-blue-50"
                      >
                        <tech.icon
                          className={`text-2xl ${tech.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- DEVELOPMENT PROCESS SECTION (UNCHANGED) --- */}
        <div className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full translate-y-48 -translate-x-48"></div>

          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A structured, transparent approach to ensure your project's success.
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
                      <div className="text-4xl opacity-80">{step.image}</div>
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

        {/* --- CTA SECTION (UNCHANGED) --- */}
        <div className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and build a high-performing website for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
                Get Free Consultation
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
              </button>

              <button className="bg-white hover:bg-gray-100 text-blue-600 px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-white hover:border-gray-100 shadow-2xl">
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

export default WebDevelopment;

