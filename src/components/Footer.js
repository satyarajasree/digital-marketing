import React, { useState, useEffect } from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaArrowRight,
  FaShieldAlt,
  FaStar,
  FaRocket,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const socialIcons = [
    { 
      icon: FaFacebookF, 
      label: 'Facebook', 
      url: '#',
      color: 'hover:bg-blue-600 hover:border-blue-600'
    },
    { 
      icon: FaInstagram, 
      label: 'Instagram', 
      url: 'https://www.instagram.com/amplinova_solutions?igsh=MWliem1pcnRsb2syNw==',
      color: 'hover:bg-pink-600 hover:border-pink-600'
    },
    { 
      icon: FaTwitter, 
      label: 'Twitter', 
      url: '#',
      color: 'hover:bg-cyan-500 hover:border-cyan-500'
    },
    { 
      icon: FaLinkedinIn, 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/109608290/admin/dashboard/',
      color: 'hover:bg-blue-500 hover:border-blue-500'
    }
  ];

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'IT Solutions', url: '/it' },
    { name: 'Digital Marketing', url: '/marketing' },
    { name: 'Blogs', url: '/blog' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact-us' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
    { name: 'Cookie Policy', url: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white border-t border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl opacity-5"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(121, 40, 40, 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info - Full width on mobile, 2 cols on desktop */}
          <div className="lg:col-span-2">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Logo and Tagline */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <img src="/amplinova.png" alt="Logo" className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="text-3xl font-bold">
                    <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                      Amplinova
                    </span>
                  </h3>
                </div>
                
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-6"></div>
                
                <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-6">
                  Transforming businesses through innovative digital marketing strategies. 
                  We drive growth, engagement, and measurable results for our clients worldwide.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-3 py-2 rounded-lg">
                    <FaShieldAlt className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">SSL Secured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-3 py-2 rounded-lg">
                    <FaStar className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-gray-300">Trusted Partner</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center cursor-pointer 
                      transition-all duration-300 hover:scale-110 hover:shadow-lg
                      border border-gray-700
                      transform ${isVisible ? 'scale-100' : 'scale-90'} ${social.color}
                      group
                    `}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h4 className="text-xl font-semibold mb-6 text-white relative">
              Quick Links
              <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-2"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.url}
                    className="
                      flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-all duration-300 
                      hover:translate-x-2 hover:font-medium py-2 group
                    "
                    style={{ transitionDelay: `${index * 50 + 300}ms` }}
                  >
                    <FaArrowRight className="w-3 h-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h4 className="text-xl font-semibold mb-6 text-white relative">
              Contact Us
              <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-2"></div>
            </h4>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    info@amplinova.com
                  </p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400">Business Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    +91 99760 89089
                  </p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400">Mon-Sat, 11AM-8PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    Uppal Bhagayath face 2 Nagole,near Shilparamam, Laxmi Narayan Nagar Colony <br />
                    Uppal, Hyderabad, Telangana 500039
                  </p>
                </div>
              </div>
            </div>
              
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-gray-800 mt-12 pt-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                © 2024 <span className="text-orange-400 font-semibold">Amplinova</span>. All rights reserved.
                <span className="text-gray-600">|</span>
                <span className="text-gray-500 flex items-center gap-1">
                  Made with <FaHeart className="w-3 h-3 text-red-400" /> by Amplinovians
                </span>
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Transforming digital experiences since 2020
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((item, index) => (
                <a 
                  key={item.name}
                  href={item.url} 
                  className="text-gray-400 hover:text-orange-400 text-sm transition-all duration-300 hover:translate-y-0.5 flex items-center gap-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;