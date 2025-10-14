import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much do your digital marketing services cost?",
      answer: "We offer flexible, goal-based packages tailored to your specific needs. After understanding your business objectives, target audience, and budget, we'll suggest a customized package that delivers maximum ROI. Our pricing starts from competitive rates suitable for startups and scales for enterprise-level requirements."
    },
    {
      question: "When will I see results?",
      answer: "While some results like improved website traffic and social media engagement can be seen within 2-4 weeks, substantial growth typically occurs within 3-6 months. SEO results take 4-6 months to show significant impact, while PPC and social media campaigns can generate immediate leads. We provide monthly progress reports to track all key metrics."
    },
    {
      question: "Do you share updates and reports?",
      answer: "Absolutely! We believe in complete transparency. You'll receive comprehensive monthly reports detailing campaign performance, ROI metrics, and progress toward your goals. Plus, we schedule regular strategy calls to discuss results, insights, and optimization opportunities. Our dashboard gives you 24/7 access to real-time data."
    },
    {
      question: "Can you work with small budgets?",
      answer: "Yes! We work with businesses of all sizes and tailor our services to fit your budget. We'll help you prioritize the most impactful strategies that align with your financial constraints while ensuring every rupee spent delivers measurable value. Many of our most successful clients started with modest budgets."
    },
    {
      question: "What makes Mage Marketer different from other agencies?",
      answer: "We combine data-driven strategies with creative storytelling, ensuring your brand not only performs well in metrics but also connects emotionally with your audience. Our transparent approach, flexible packages, and focus on building long-term partnerships set us apart. We become an extension of your team, deeply invested in your success."
    },
    {
      question: "Do you work with specific industries?",
      answer: "We have experience across multiple industries including e-commerce, healthcare, education, real estate, technology, and hospitality. Our strategies are adaptable to any sector because we focus on understanding your unique audience and business goals rather than applying one-size-fits-all solutions."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We track both quantitative metrics (website traffic, conversion rates, ROI, lead generation) and qualitative indicators (brand sentiment, customer engagement, market positioning). Before starting, we establish clear KPIs aligned with your business objectives, and we continuously optimize based on performance data."
    },
    {
      question: "What's your onboarding process?",
      answer: "Our onboarding begins with a deep-dive discovery session to understand your business, followed by comprehensive competitor and market analysis. We then develop a customized strategy, present it for your feedback, and once approved, we implement while maintaining constant communication throughout the process."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8">
      {/* Same Background as Portfolio */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]" />
        
        {/* Static Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/80 border border-amber-100 rounded-full px-6 py-3 mb-6 backdrop-blur-sm shadow-sm"
            >
              <FaQuestionCircle className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">
                Common Questions
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
            >
              Let's Clear{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent relative inline-block">
                Things Up
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6"
            >
              Still Wondering If We're the Right Fit?
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              We know that finding the right digital marketing partner can feel like a big decision, and we're here to make it simpler. At Mage Marketer, we prioritize transparency, collaboration, and results-driven strategies.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Content - Introduction */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Approach to Partnership</h3>
                
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Whether you're a startup or an established brand, our approach is completely tailored to your unique needs. From flexible, goal-based packages to our deep understanding of your business goals, we ensure that every strategy we create is designed with you in mind.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    We work alongside you to craft solutions that maximize your brand's potential and fit your budget, without compromising on quality. Our focus is on creating long-lasting relationships built on trust, delivering results you can measure, and continuously optimizing our strategies to bring your business the attention it deserves.
                  </p>

                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Have more questions? Whether it's about timelines, budgets, or how we track progress, we're ready to answer all of them. Let's talk and find out how we can work together to help your business grow.
                  </p>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Flexible Packages", desc: "Tailored to your budget" },
                  { title: "Transparent Reporting", desc: "Clear progress tracking" },
                  { title: "Quick Onboarding", desc: "Start within 1 week" },
                  { title: "Dedicated Support", desc: "Single point of contact" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-amber-100"
                  >
                    <h4 className="font-bold text-gray-800 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - FAQ Items */}
            <motion.div variants={itemVariants} className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-amber-50/50 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center"
                    >
                      {openIndex === index ? (
                        <FaChevronUp className="w-3 h-3 text-amber-600" />
                      ) : (
                        <FaChevronDown className="w-3 h-3 text-amber-600" />
                      )}
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="w-12 h-0.5 bg-amber-200 mb-4"></div>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;