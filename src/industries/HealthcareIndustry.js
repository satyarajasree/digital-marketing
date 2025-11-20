import React from "react";
import {
  FaHeartbeat,
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaAmbulance,
  FaClinicMedical,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaMobile,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import healthcareBg from "../assets/Health.jpg"; 


const HealthcareIndustry = () => {
  const services = [
    {
      icon: FaHospital,
      title: "Hospital Marketing",
      description: "Comprehensive digital strategies for hospitals and healthcare systems",
      features: ["Patient Acquisition", "Brand Awareness", "Service Line Promotion", "Reputation Management"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaUserMd,
      title: "Physician Marketing",
      description: "Targeted marketing for individual practitioners and medical groups",
      features: ["Practice Growth", "Patient Education", "Online Scheduling", "Testimonial Collection"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaClinicMedical,
      title: "Clinic Marketing",
      description: "Specialized strategies for specialty clinics and outpatient centers",
      features: ["Local SEO", "Service Promotion", "Patient Communication", "Appointment Booking"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaAmbulance,
      title: "Urgent Care Marketing",
      description: "Rapid-response marketing for urgent care and emergency services",
      features: ["Geo-targeting", "Wait Time Updates", "Emergency SEO", "Mobile Optimization"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaHeartbeat,
      title: "Medical Device Marketing",
      description: "B2B marketing for medical equipment and device manufacturers",
      features: ["Professional Outreach", "Product Education", "Trade Show Support", "Clinical Evidence"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaStethoscope,
      title: "Telemedicine Solutions",
      description: "Digital marketing for virtual care and telehealth services",
      features: ["Platform Promotion", "Patient Onboarding", "Mobile App Marketing", "Virtual Care Education"],
      color: "from-orange-500 to-amber-500"
    },
  ];

  const results = [
    { metric: "45%", label: "Patient Acquisition", icon: FaUsers, color: "from-orange-500 to-amber-500" },
    { metric: "3.2x", label: "Online Appointments", icon: FaMobile, color: "from-orange-500 to-amber-500" },
    { metric: "68%", label: "Brand Visibility", icon: FaChartLine, color: "from-orange-500 to-amber-500" },
    { metric: "24/7", label: "Patient Support", icon: FaHeartbeat, color: "from-orange-500 to-amber-500" },
  ];

  const trustBadges = [
    {
      icon: FaShieldAlt,
      text: "HIPAA Compliant",
      description: "Fully compliant with healthcare privacy regulations"
    },
    {
      icon: FaStar,
      text: "Medical Expertise",
      description: "Team with healthcare industry experience"
    },
    {
      icon: FaRocket,
      text: "Rapid Implementation",
      description: "Quick setup without compromising compliance"
    }
  ];

  const specialties = [
    {
      category: "Medical Specialties",
      items: ["Cardiology", "Orthopedics", "Dermatology", "Pediatrics", "Oncology", "Neurology", "Dentistry", "Mental Health"],
      icon: FaUserMd
    },
    {
      category: "Healthcare Facilities",
      items: ["Hospitals", "Surgery Centers", "Urgent Care", "Rehabilitation", "Diagnostic Centers", "Nursing Homes", "Pharmacies", "Labs"],
      icon: FaHospital
    },
    {
      category: "Health Services",
      items: ["Preventive Care", "Emergency Services", "Chronic Disease", "Wellness Programs", "Senior Care", "Women's Health", "Sports Medicine", "Telehealth"],
      icon: FaHeartbeat
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="min-h-screen">
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
<div
  className="relative bg-cover bg-center bg-no-repeat text-white py-24 overflow-hidden"
  style={{ backgroundImage: `url(${healthcareBg})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Glowing Orbs */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">

      {/* Icon */}
      <div className="flex justify-center mb-8">
        <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
          <FaHeartbeat className="text-5xl text-orange-400" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent pb-3">
        Healthcare Marketing
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
        Specialized digital marketing solutions for healthcare providers.
        Build trust, attract patients, and grow your practice with compliant,
        results-driven strategies.
      </p>

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
                Healthcare Marketing Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Tailored solutions for every type of healthcare provider and organization
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

        {/* Specialties Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-30"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Healthcare Specialties We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expertise across the entire healthcare spectrum
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-orange-200"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-2xl p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <specialty.icon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {specialty.category}
                  </h3>
                  <div className="space-y-3">
                    {specialty.items.map((item, itemIndex) => (
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

export default HealthcareIndustry;