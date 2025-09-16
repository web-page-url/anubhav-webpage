'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, User, Loader2, Minimize2, Code2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! 👋 I\'m Anubhav\'s AI Assistant. I\'m here to help you learn about software engineering, web development, and answer any questions about Anubhav\'s work and experience.',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const callGeminiAPI = async (prompt: string): Promise<string> => {
    // Use the GEMINI_API_KEY from environment variables
    const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
      return 'Hi! I\'m Anubhav\'s AI assistant. I can help you learn about software engineering, web development, and Anubhav\'s experience. Feel free to ask me anything about coding, technology, or his work!';
    }

    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const systemPrompt = `You are Anubhav's AI assistant for his portfolio website. You are helpful, professional, and knowledgeable about:

- Software Engineering and Full-Stack Development
- React, Next.js, Node.js, TypeScript, JavaScript
- System Architecture and Cloud Technologies
- Content Creation and Technical Education
- Anubhav's experience and projects

Guidelines:
- Be friendly, professional, and encouraging
- Keep responses concise but informative (2-4 sentences)
- Focus on technical topics, coding, and Anubhav's expertise
- Only return the response text without any explanations or formatting
- Maintain a supportive tone suitable for developers and potential clients
- If asked about Anubhav, highlight his skills as a Senior Software Engineer and Content Creator

User query: ${prompt}`;

      const result = await model.generateContent(systemPrompt);
      const response = result.response;
      const botResponse = response.text();

      return botResponse.trim();
    } catch (error) {
      console.error('Gemini API error:', error);
      return 'I\'m here to help you learn about software engineering and Anubhav\'s expertise! Feel free to ask me about coding, web development, or any technical topics.';
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const botResponse = await callGeminiAPI(inputMessage);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I\'m here to help you learn about software engineering! Feel free to ask me about coding, web development, or technical topics.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        {/* Close Arrow */}
        <motion.button
          className="w-8 h-8 rounded-full shadow-lg bg-cyber-dark/90 backdrop-blur-xl border border-neon-cyan/50 text-neon-cyan hover:bg-cyber-darker transition-all duration-300"
          onClick={() => setIsOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
          aria-label="Close chat"
        >
          <X className="w-4 h-4 mx-auto" aria-hidden="true" />
        </motion.button>

        {/* Main Chat Button */}
        <motion.button
          className="w-16 h-16 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full shadow-2xl border-2 border-cyber-dark/50 relative overflow-hidden group animate-cyber-pulse"
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          aria-label="Open AI Assistant"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 20px 40px rgba(0, 255, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta opacity-20 group-hover:opacity-40 rounded-full blur-md transition-opacity duration-300"></div>

        {/* Pulsing ring */}
        <motion.div
          className="absolute inset-0 border-2 border-neon-cyan rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

          <Code2 className="w-8 h-8 text-cyber-dark mx-auto relative z-10" />

          {/* Notification dot */}
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-neon-magenta rounded-full border-2 border-cyber-dark animate-cyber-pulse"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 bg-neon-purple rounded-full mx-auto mt-0.5"></div>
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed bottom-16 sm:bottom-20 right-4 sm:right-6 z-50 bg-cyber-dark/95 backdrop-blur-xl shadow-2xl border border-neon-cyan/30 overflow-hidden ${
              isMinimized ? 'w-[calc(100vw-2rem)] sm:w-80 h-12 sm:h-16 rounded-xl sm:rounded-2xl' : 'w-[calc(100vw-2rem)] sm:w-80 h-[calc(100vh-8rem)] sm:h-96 flex flex-col rounded-t-xl sm:rounded-t-2xl'
            }`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              height: isMinimized ? '3rem' : 'calc(100vh - 8rem)'
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta p-3 sm:p-4 flex items-center justify-between relative overflow-hidden flex-shrink-0">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-16 h-16 bg-cyber-light rounded-full -translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-cyber-light rounded-full translate-x-6 translate-y-6"></div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-cyber-dark/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-neon-cyan/50"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-neon-cyan" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-cyber-dark font-bold text-sm sm:text-base flex items-center gap-1 sm:gap-2 font-orbitron truncate">
                    <span className="truncate">AI Assistant</span>
                    <motion.span
                      className="w-2 h-2 bg-neon-green rounded-full animate-cyber-pulse flex-shrink-0"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </h3>
                  <p className="text-cyber-dark/80 text-xs font-rajdhani truncate">Your Tech Guide</p>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 relative z-10">
                {/* Minimize Button */}
                <motion.button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-cyber-dark/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyber-darker transition-all duration-200 border border-neon-cyan/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ rotate: isMinimized ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Minimize2 className="w-3 h-3 sm:w-4 sm:h-4 text-neon-cyan" />
                </motion.button>

                {/* Close Button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-cyber-dark/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyber-darker transition-all duration-200 border border-neon-cyan/30"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-3 h-3 sm:w-4 sm:h-4 text-neon-cyan" />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <motion.div
              className={`overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-cyber-dark/30 ${
                isMinimized ? 'h-0 opacity-0' : 'flex-1 opacity-100'
              }`}
              animate={{
                opacity: isMinimized ? 0 : 1,
                height: isMinimized ? 0 : 'auto'
              }}
              transition={{ duration: 0.3 }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-xs px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-xs sm:text-sm shadow-lg border ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-cyber-dark border-neon-cyan/50 font-orbitron'
                        : 'bg-cyber-light/10 text-neon-cyan border-neon-cyan/30 backdrop-blur-sm font-rajdhani'
                    }`}
                  >
                    <div className={`flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2 ${
                      message.sender === 'user' ? 'text-cyber-dark/80' : 'text-neon-cyan/80'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      ) : (
                        <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                      <span className="text-xs font-medium">
                        {message.sender === 'user' ? 'You' : 'AI'}
                      </span>
                    </div>
                    <p className={`leading-relaxed ${
                      message.sender === 'user' ? 'text-cyber-dark' : 'text-neon-cyan'
                    }`}>{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-cyber-light/10 border border-neon-cyan/30 px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-neon-cyan" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-neon-magenta rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </motion.div>

            {/* Input */}
            <div
              className={`p-3 sm:p-4 border-t border-neon-cyan/30 bg-cyber-dark/50 flex-shrink-0 ${
                isMinimized ? 'hidden' : 'block'
              }`}
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about coding, tech..."
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-cyber-light/10 border border-neon-cyan/30 rounded-full focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan text-neon-cyan placeholder-neon-cyan/50 text-xs sm:text-sm shadow-sm backdrop-blur-sm font-rajdhani"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 border border-cyber-dark/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isTyping ? (
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-dark animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-dark" />
                  )}
                </motion.button>
              </div>
              <p className="text-xs text-neon-cyan/70 mt-3 text-center font-rajdhani">
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-neon-green rounded-full animate-cyber-pulse"></span>
                  Powered by Anubhav • Ask about software engineering & tech
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
