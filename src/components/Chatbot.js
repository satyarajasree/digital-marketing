// components/Chatbot.js
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaPaperPlane, 
  FaUser, 
  FaHeadset,
  FaRegSmile,
  FaArrowRight,
  FaShieldAlt,
  FaLightbulb,
  FaChartLine,
  FaRocket
} from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  const OPENROUTER_API_KEY = "";
  const SITE_URL = process.env.REACT_APP_SITE_URL || 'https://digitalpro.com';
  const SITE_NAME = process.env.REACT_APP_SITE_NAME || 'DigitalPro';

  // Marketing-focused system prompt
  const systemPrompt = `You are DigitalPro AI Assistant, a professional digital marketing expert. Your role is to:

1. Provide expert advice on digital marketing strategies
2. Explain DigitalPro's services: SEO, Social Media Marketing, PPC, Content Marketing, Email Marketing, Web Development
3. Discuss marketing ROI, strategies, and best practices
4. Help with marketing challenges and campaign planning
5. Provide industry-specific marketing insights

IMPORTANT RULES:
- ONLY discuss digital marketing topics
- Redirect non-marketing questions to marketing context
- Be professional, data-driven, and results-oriented
- Provide actionable advice and strategies
- Mention how DigitalPro can help when relevant
- Keep responses concise and valuable

If users ask about non-marketing topics, politely redirect to marketing discussions.`;

 

  const marketingQuickReplies = [
    "SEO strategy for my business",
    "Social media marketing tips",
    "PPC campaign optimization",
    "Content marketing plan",
    "Email marketing best practices",
    "Website conversion optimization"
  ];

  // Marketing responses for fallback when API is not available
  const marketingResponses = {
    "seo": "For SEO strategy, we focus on:\n\n• Comprehensive keyword research\n• On-page optimization\n• Technical SEO audits\n• Content strategy development\n• Local SEO optimization\n• Regular performance tracking\n\nOur typical SEO clients see 200-400% organic traffic growth within 6-9 months.",
    "social media": "Social media marketing success requires:\n\n• Platform-specific strategy\n• Consistent brand voice\n• Engaging content calendar\n• Community management\n• Paid social amplification\n• Performance analytics\n\nWe've helped brands achieve 5M+ impressions and 300% engagement growth.",
    "ppc": "PPC campaign optimization includes:\n\n• Strategic keyword bidding\n• Ad copy A/B testing\n• Landing page optimization\n• Conversion rate optimization\n• ROI tracking and reporting\n• Budget allocation strategies\n\nOur PPC clients typically achieve 3-5x ROI with proper optimization.",
    "content": "Content marketing plan framework:\n\n• Audience persona development\n• Content pillar strategy\n• SEO-optimized content creation\n• Distribution channel planning\n• Performance measurement\n• Content refresh cycle\n\nEffective content marketing can generate 3x more leads than traditional marketing.",
    "email": "Email marketing best practices:\n\n• Segmentation and personalization\n• Automated nurture sequences\n• Mobile-optimized design\n• A/B testing subject lines\n• Clear CTAs and value propositions\n• Compliance with regulations\n\nWe've seen email campaigns achieve 40%+ open rates and 5%+ CTR.",
    "website": "Website conversion optimization:\n\n• UX/UI improvements\n• Loading speed optimization\n• Clear value proposition\n• Trust signals and social proof\n• Simplified navigation\n• Strategic CTAs placement\n\nTypical results include 25-50% conversion rate improvement.",
    "default": "As your digital marketing expert, I recommend starting with a comprehensive audit of your current marketing efforts. We typically analyze:\n\n• Current traffic and conversion metrics\n• Competitive landscape\n• Target audience insights\n• Channel performance\n• ROI analysis\n\nWould you like me to help with a specific marketing channel or strategy?"
  };

  useEffect(() => {
  const initialGreeting = {
    id: 1,
    text: "Hello! I'm your DigitalPro Marketing Assistant. I specialize in digital marketing strategies, ROI optimization, and campaign planning. How can I help grow your business today?",
    sender: 'bot',
    timestamp: new Date()
  };

  if (messages.length === 0) {
    setMessages([initialGreeting]);
  }
}, [messages.length]);


  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getMarketingResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('seo') || lowerMessage.includes('search')) {
      return marketingResponses.seo;
    } else if (lowerMessage.includes('social') || lowerMessage.includes('facebook') || lowerMessage.includes('instagram')) {
      return marketingResponses.social;
    } else if (lowerMessage.includes('ppc') || lowerMessage.includes('paid') || lowerMessage.includes('ad')) {
      return marketingResponses.ppc;
    } else if (lowerMessage.includes('content')) {
      return marketingResponses.content;
    } else if (lowerMessage.includes('email')) {
      return marketingResponses.email;
    } else if (lowerMessage.includes('website') || lowerMessage.includes('conversion')) {
      return marketingResponses.website;
    } else {
      return marketingResponses.default;
    }
  };

  const callMarketingAI = async (userMessage) => {
    // If no API key, use fallback responses
    if (!OPENROUTER_API_KEY) {
      return getMarketingResponse(userMessage);
    }

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": SITE_URL,
          "X-Title": SITE_NAME,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-chat", // Fixed model name
          "messages": [
            {
              "role": "system",
              "content": systemPrompt
            },
            {
              "role": "user",
              "content": userMessage
            }
          ],
          "max_tokens": 500,
          "temperature": 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || getMarketingResponse(userMessage);
    } catch (error) {
      console.error('AI API Error:', error);
      // Use fallback response when API fails
      return getMarketingResponse(userMessage);
    }
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setError('');

    try {
      const botResponse = await callMarketingAI(inputMessage);
      
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      setError('Connection issue. Using expert marketing knowledge...');
      
      // Fallback to predefined responses
      const fallbackResponse = getMarketingResponse(inputMessage);
      const errorMessage = {
        id: Date.now() + 1,
        text: fallbackResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const MarketingTips = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-xl p-4 my-4"
    >
      <div className="flex items-center space-x-2 mb-2">
        <FaLightbulb className="w-4 h-4 text-orange-500" />
        <span className="text-sm font-semibold text-gray-700">Marketing Insights</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
        <div className="flex items-center space-x-1">
          <FaChartLine className="w-3 h-3 text-green-500" />
          <span>ROI-focused strategies</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaRocket className="w-3 h-3 text-blue-500" />
          <span>Data-driven campaigns</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaShieldAlt className="w-3 h-3 text-purple-500" />
          <span>Proven methodologies</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-orange-500/30 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 2
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 5
          }}
        >
          <FaHeadset className="w-6 h-6" />
        </motion.div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
      </motion.button>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 h-[600px] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <FaChartLine className="w-6 h-6" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Marketing Expert</h3>
                      <p className="text-orange-100 text-sm flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        Online • Digital Marketing Specialist
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <FaTimes className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50" style={{ scrollBehavior: 'smooth' }}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' 
                            ? 'bg-orange-500 text-white' 
                            : 'bg-blue-500 text-white'
                        }`}>
                          {message.sender === 'user' ? <FaUser className="w-4 h-4" /> : <FaChartLine className="w-4 h-4" />}
                        </div>
                        <div className={`rounded-2xl px-4 py-3 ${
                          message.sender === 'user'
                            ? 'bg-orange-500 text-white rounded-br-none'
                            : 'bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-200'
                        }`}>
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-orange-200' : 'text-gray-500'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-end space-x-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <FaChartLine className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-200">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">Analyzing marketing data</span>
                            <div className="flex space-x-1">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                                className="w-2 h-2 bg-blue-500 rounded-full"
                              />
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                className="w-2 h-2 bg-blue-500 rounded-full"
                              />
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                className="w-2 h-2 bg-blue-500 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Marketing Quick Replies */}
                  {messages.length === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-3"
                    >
                      <MarketingTips />
                      <p className="text-xs text-gray-500 text-center">Common marketing questions:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {marketingQuickReplies.map((reply, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleQuickReply(reply)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white border border-blue-200 text-blue-600 text-xs px-3 py-2 rounded-full hover:bg-blue-50 transition-all duration-200 flex items-center space-x-1"
                          >
                            <span>{reply}</span>
                            <FaArrowRight className="w-3 h-3" />
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-yellow-50 border border-yellow-200 rounded-lg p-3"
                    >
                      <p className="text-yellow-700 text-sm">{error}</p>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Chat Input */}
              <div className="border-t border-gray-200 p-4 bg-white">
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about digital marketing strategies..."
                      className="w-full bg-gray-100 border border-gray-300 rounded-full px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors">
                      <FaRegSmile className="w-5 h-5" />
                    </button>
                  </div>
                  <motion.button
                    onClick={handleSendMessage}
                    disabled={inputMessage.trim() === '' || isTyping}
                    whileHover={{ scale: inputMessage.trim() !== '' && !isTyping ? 1.05 : 1 }}
                    whileTap={{ scale: inputMessage.trim() !== '' && !isTyping ? 0.95 : 1 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                      inputMessage.trim() !== '' && !isTyping
                        ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <FaPaperPlane className="w-4 h-4" />
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2 flex items-center justify-center space-x-1">
                  <FaShieldAlt className="w-3 h-3" />
                  <span>Marketing Expert • ROI-Focused Strategies</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;