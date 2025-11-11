"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;

    switch (e.key) {
      case 'Escape':
        setSelectedImage(null);
        break;
      case 'ArrowLeft':
        if (selectedImage > 0) setSelectedImage(selectedImage - 1);
        break;
      case 'ArrowRight':
        if (selectedImage < images.length - 1) setSelectedImage(selectedImage + 1);
        break;
    }
  };

  // Add keyboard event listener when modal is open
  React.useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const images = [
    {
      id: 1,
      src: "/img-1.png",
      alt: "AI with Voice Assistance",
      title: "AI with Voice Assistance",
      description: "Advanced AI assistant with voice interaction capabilities, featuring natural language processing and real-time responses",
      category: "AI/ML",
      tech: ["AI", "Voice", "NLP", "React"],
      color: "from-neon-cyan to-neon-blue",
      url: "https://anubhav-ai.vercel.app/"
    },
    {
      id: 2,
      src: "/img-2.png",
      alt: "Amazing Daily Planner",
      title: "Amazing Daily Planner",
      description: "Comprehensive task management and productivity application with smart scheduling and progress tracking",
      category: "Productivity",
      tech: ["React", "Planning", "Productivity"],
      color: "from-neon-magenta to-neon-purple",
      url: "https://amazing-daily-planner.netlify.app/"
    },
    {
      id: 3,
      src: "/img-3.png",
      alt: "Bawal Code - Hindi Programming Language",
      title: "Bawal Code (Hindi PL)",
      description: "Revolutionary programming language that allows coding in Hindi, making programming accessible to non-English speakers",
      category: "Programming",
      tech: ["Programming", "Language", "Compiler"],
      color: "from-neon-purple to-neon-cyan",
      url: "https://bawal-code.vercel.app/"
    },
    {
      id: 4,
      src: "/img-4.png",
      alt: "Code Spark AI - Code Generator",
      title: "Code Spark AI",
      description: "Intelligent code generation chatbot powered by AI, helping developers write code faster and more efficiently",
      category: "AI/ML",
      tech: ["AI", "Chatbot", "Code Generation"],
      color: "from-neon-blue to-neon-magenta",
      url: "https://code-spark-ai.vercel.app/"
    },
    {
      id: 5,
      src: "/img-5.png",
      alt: "Sticker Magic - Custom Stickers App",
      title: "Sticker Magic",
      description: "Creative platform for designing and generating custom stickers with advanced design tools and effects",
      category: "Creative",
      tech: ["React", "Creative", "Design Tools"],
      color: "from-neon-magenta to-neon-purple",
      url: "https://sticker-magic.vercel.app/"
    },
    {
      id: 6,
      src: "/img-6.png",
      alt: "Better Prompt Tool - AI Prompt Optimizer",
      title: "Better Prompt Tool",
      description: "AI-powered prompt optimization tool that helps users create better prompts for enhanced AI interactions and responses",
      category: "AI/ML",
      tech: ["AI", "Optimization", "Prompt Engineering"],
      color: "from-neon-cyan to-neon-purple",
      url: "https://better-prompt-alpha.vercel.app/"
    },
    {
      id: 7,
      src: "/img-7.png",
      alt: "3D Shooting Game - Three.js",
      title: "3D Shooting Game",
      description: "Immersive 3D shooting game built with Three.js featuring advanced graphics, physics, and interactive gameplay",
      category: "Gaming",
      tech: ["3D", "Game", "Three.js", "WebGL"],
      color: "from-neon-purple to-neon-magenta",
      url: "https://anubhav-3d-shooting-game.netlify.app/"
    },
    {
      id: 8,
      src: "/img-8.png",
      alt: "AI Doctor 24/7 - Healthcare Assistant",
      title: "AI Doctor 24/7",
      description: "AI-powered healthcare assistant providing 24/7 medical guidance, symptom analysis, and health information",
      category: "Healthcare",
      tech: ["AI", "Healthcare", "Medical"],
      color: "from-neon-blue to-neon-cyan",
      url: "https://doctor247.netlify.app/"
    },
    {
      id: 9,
      src: "/img-9.png",
      alt: "Text-to-Speech Converter",
      title: "Text-to-Speech Converter",
      description: "Advanced text-to-speech conversion tool with multiple voice options, languages, and customization features",
      category: "Tools",
      tech: ["Audio", "AI", "Speech Synthesis"],
      color: "from-neon-magenta to-neon-blue",
      url: "https://anubhav-text-to-speech.netlify.app/"
    },
    {
      id: 10,
      src: "/img-10.png",
      alt: "QR Code Generator",
      title: "QR Code Generator",
      description: "Custom QR code generator with advanced styling options, colors, and design customization features",
      category: "Tools",
      tech: ["QR", "Generator", "Design"],
      color: "from-neon-purple to-neon-blue",
      url: "https://123anubhav.github.io/qr_link/"
    },
    {
      id: 11,
      src: "/img-11.png",
      alt: "GitHub User Search App",
      title: "GitHub User Search",
      description: "Advanced GitHub user search and profile analyzer with detailed statistics and repository insights",
      category: "Development",
      tech: ["GitHub", "Search", "Analytics"],
      color: "from-neon-cyan to-neon-magenta",
      url: "https://anubhav-github-users-search.netlify.app/"
    },
    {
      id: 12,
      src: "/img-12.png",
      alt: "AI Travel Assistant Chatbot",
      title: "AI Travel Assistant",
      description: "Smart travel planning chatbot with AI recommendations for destinations, bookings, and travel tips",
      category: "AI/ML",
      tech: ["AI", "Travel", "Chatbot"],
      color: "from-neon-blue to-neon-purple",
      url: "https://anubhav-holiday-socho-ai.netlify.app/"
    },
    {
      id: 13,
      src: "/img-13.png",
      alt: "AI Powered Python Learning App",
      title: "Python Learning App",
      description: "AI-powered Python learning platform with interactive lessons, code challenges, and personalized learning paths",
      category: "Education",
      tech: ["AI", "Education", "Python"],
      color: "from-neon-magenta to-neon-cyan",
      url: "https://next-gen-python-learn.vercel.app/"
    },
    {
      id: 14,
      src: "/img-14.png",
      alt: "Portfolio Website",
      title: "Portfolio Website",
      description: "Professional portfolio website showcasing projects, skills, and experience with modern design and animations",
      category: "Portfolio",
      tech: ["Portfolio", "React", "Next.js"],
      color: "from-neon-cyan to-neon-magenta",
      url: "https://anubhav-webpage.netlify.app/"
    },
    {
      id: 15,
      src: "/img-15.png",
      alt: "Interactive Data Visualization",
      title: "Data Visualization Dashboard",
      description: "Interactive data visualization dashboard with real-time charts, graphs, and analytics capabilities",
      category: "Data Science",
      tech: ["Data Science", "Visualization", "Analytics"],
      color: "from-neon-purple to-neon-blue",
      url: "https://github.com/13anubhav"
    },
    {
      id: 16,
      src: "/img-16.png",
      alt: "Mobile App Development Showcase",
      title: "Mobile App Collection",
      description: "Collection of mobile applications built for Android with modern UI/UX and advanced features",
      category: "Mobile",
      tech: ["Mobile", "Android", "React Native"],
      color: "from-neon-blue to-neon-purple",
      url: "https://github.com/13anubhav"
    },
    {
      id: 17,
      src: "/img-17.png",
      alt: "Learn Explore Grow - Learning Platform",
      title: "Learn Explore Grow",
      description: "Interactive learning platform designed to help users discover new skills and expand their knowledge through engaging content and personalized learning paths",
      category: "Education",
      tech: ["Education", "Learning", "Interactive"],
      color: "from-neon-cyan to-neon-magenta",
      url: "https://learn-explore-grow.vercel.app/"
    },
    {
      id: 18,
      src: "/img-18.png",
      alt: "PRD to Prototype - Product Development Tool",
      title: "PRD to Prototype",
      description: "Streamlined tool that transforms Product Requirements Documents into interactive prototypes, bridging the gap between planning and development",
      category: "Product",
      tech: ["Product", "Design", "Prototyping"],
      color: "from-neon-purple to-neon-cyan",
      url: "https://prd-to-prototype.vercel.app/"
    },
    {
      id: 19,
      src: "/img-19.png",
      alt: "Self Help Hub - Personal Development Platform",
      title: "Self Help Hub",
      description: "Comprehensive personal development platform offering resources, tools, and guidance for self-improvement, goal setting, and personal growth",
      category: "Self-Help",
      tech: ["Self-Help", "Productivity", "Personal Development"],
      color: "from-neon-magenta to-neon-blue",
      url: "https://self-help-hub.vercel.app/"
    },
    {
      id: 20,
      src: "/img-20.png",
      alt: "GitHub Commit Tool - Development Utility",
      title: "GitHub Commit Tool",
      description: "Powerful utility tool for GitHub users to manage commits, track changes, and streamline development workflows with advanced features",
      category: "Development",
      tech: ["GitHub", "Tool", "Development"],
      color: "from-neon-blue to-neon-magenta",
      url: "https://github-commit.vercel.app/"
    },
    {
      id: 21,
      src: "/img-21.png",
      alt: "Tra Verse AI - Travel AI Assistant",
      title: "Tra Verse AI",
      description: "Intelligent AI-powered travel assistant that provides personalized recommendations, itinerary planning, and real-time travel insights",
      category: "AI/ML",
      tech: ["AI", "Travel", "Assistant"],
      color: "from-neon-cyan to-neon-purple",
      url: "https://tra-verse-ai.vercel.app/"
    },
    {
      id: 22,
      src: "/img-22.png",
      alt: "Rise On - Personal Growth Platform",
      title: "Rise On",
      description: "Motivational platform focused on personal development, goal achievement, and building positive habits for long-term success",
      category: "Self-Help",
      tech: ["Motivation", "Goals", "Personal Growth"],
      color: "from-neon-magenta to-neon-cyan",
      url: "https://rise-on.vercel.app/"
    },
    {
      id: 23,
      src: "/img-23.png",
      alt: "Wedding Vibes - Wedding Planning Platform",
      title: "Wedding Vibes",
      description: "Comprehensive wedding planning platform offering tools for venue selection, vendor management, and wedding day coordination",
      category: "Lifestyle",
      tech: ["Wedding", "Planning", "Events"],
      color: "from-neon-purple to-neon-magenta",
      url: "https://wedding-vibes.vercel.app/"
    },
    {
      id: 24,
      src: "/img-24.png",
      alt: "3D Simulation - Interactive 3D Environment",
      title: "3D Simulation",
      description: "Immersive 3D simulation environment featuring interactive graphics, physics-based interactions, and advanced visualization capabilities",
      category: "Gaming",
      tech: ["3D", "Simulation", "Interactive"],
      color: "from-neon-cyan to-neon-blue",
      url: "https://3d-simulation.vercel.app/"
    }
  ];

  // Additional projects for specialized showcases
  const allProjects = [
    {
      name: "Advanced ML Models",
      description: "Machine learning models for predictive analytics and data insights",
      tech: ["Python", "TensorFlow", "Scikit-learn"],
      url: "https://github.com/13anubhav",
      category: "Data Science"
    },
    {
      name: "Blockchain DApp",
      description: "Decentralized application with smart contract integration",
      tech: ["Blockchain", "Web3", "Smart Contracts"],
      url: "https://github.com/13anubhav",
      category: "Blockchain"
    },
    {
      name: "IoT Dashboard",
      description: "Internet of Things monitoring and control dashboard",
      tech: ["IoT", "Sensors", "Real-time"],
      url: "https://github.com/13anubhav",
      category: "IoT"
    },
    {
      name: "E-commerce Platform",
      description: "Full-featured online marketplace with payment integration",
      tech: ["E-commerce", "Payments", "Commerce"],
      url: "https://github.com/13anubhav",
      category: "E-commerce"
    },
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud architecture and deployment solutions",
      tech: ["AWS", "Cloud", "Infrastructure"],
      url: "https://github.com/13anubhav",
      category: "DevOps"
    },
    {
      name: "AR/VR Experience",
      description: "Augmented and Virtual Reality interactive experiences",
      tech: ["AR", "VR", "3D", "Interactive"],
      url: "https://github.com/13anubhav",
      category: "AR/VR"
    },
    {
      name: "API Gateway",
      description: "Comprehensive API management and documentation platform",
      tech: ["API", "Microservices", "Documentation"],
      url: "https://github.com/13anubhav",
      category: "Backend"
    },
    {
      name: "Security Suite",
      description: "Advanced cybersecurity tools and monitoring systems",
      tech: ["Security", "Monitoring", "Cybersecurity"],
      url: "https://github.com/13anubhav",
      category: "Security"
    }
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-cyber-fade-up">
          <h2 className="font-orbitron font-bold mb-4 sm:mb-6 animate-cyber-glow text-2xl sm:text-3xl lg:text-4xl">
            Featured <span className="gradient-text animate-neon-flicker">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani px-4">
            A comprehensive showcase of 24 innovative projects spanning AI/ML, web development, gaming, healthcare,
            education, lifestyle, and creative solutions. Click on any project to explore the live demos and see my work in action.
          </p>
        </div>

        {/* Image Grid - Hidden on mobile, only desktop/tablet */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gallery-grid">
          {images.map((image, index) => (
            <Card
              key={image.id}
              className="cyber-card hover-lift group overflow-hidden animate-cyber-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage(image.id - 1)}>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Floating Tech Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {image.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          className="text-xs bg-cyber-dark/80 text-neon-cyan border-neon-cyan/50 animate-cyber-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`text-xs bg-gradient-to-r ${image.color} text-cyber-dark font-orbitron font-bold animate-cyber-pulse`}
                      >
                        {image.category}
                      </Badge>
                    </div>

                    {/* Hover Overlay Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-xl font-orbitron font-bold text-white mb-2 animate-cyber-glow">
                        {image.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-rajdhani mb-4">
                        {image.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors duration-300 font-rajdhani text-sm">
                          <ImageIcon className="w-4 h-4" />
                          View Details
                        </button>
                        <a
                          href={image.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neon-magenta hover:text-white transition-colors duration-300 font-rajdhani text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6">
                  <h4 className="font-orbitron font-bold text-lg mb-2 text-neon-cyan group-hover:text-neon-magenta transition-colors duration-300">
                    {image.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-rajdhani mb-4">
                    {image.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {image.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 animate-cyber-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Link */}
                  <Button variant="outline" size="sm" className="w-full hover-glow cyber-btn-outline" asChild>
                    <a href={image.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Optimized Grid Alternative */}
        <div className="md:hidden mt-12 sm:mt-16">
          <div className="space-y-6 sm:space-y-8">
            {images.map((image, index) => (
              <Card
                key={`mobile-${image.id}`}
                className="cyber-card hover-lift animate-cyber-fade-up min-h-[280px] sm:min-h-[320px]"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <CardContent className="p-5 sm:p-7 text-left">
                  <div className="flex flex-col gap-5">
                     {/* Mobile Image - Much Bigger */}
                     <div className="flex justify-center">
                       <div className="w-40 h-40 sm:w-48 sm:h-48 relative rounded-lg overflow-hidden border-2 border-neon-cyan/30 shadow-lg">
                         <Image
                           src={image.src}
                           alt={image.alt}
                           fill
                           className="object-cover"
                           sizes="(max-width: 640px) 160px, 192px"
                         />
                       </div>
                     </div>

                    {/* Mobile Content */}
                    <div className="text-center">
                      <h4 className="font-orbitron font-bold text-lg sm:text-xl mb-3 text-neon-cyan animate-cyber-glow">
                        {image.title}
                      </h4>
                      <p className="text-sm sm:text-base text-muted-foreground font-rajdhani mb-4 line-clamp-3 leading-relaxed px-2">
                        {image.description}
                      </p>

                      {/* Mobile Tech Stack */}
                      <div className="flex flex-wrap justify-center gap-1 mb-4">
                        {image.tech.slice(0, 3).map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs border-neon-cyan/30 text-neon-cyan px-2 py-1 animate-cyber-pulse"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Mobile Category & Link - More Prominent */}
                      <div className="space-y-3">
                        <div className="flex justify-center">
                          <Badge className={`text-xs bg-gradient-to-r ${image.color} text-cyber-dark font-orbitron font-bold px-3 py-1`}>
                            {image.category}
                          </Badge>
                        </div>

                        {/* Live URL Display */}
                        <div className="bg-cyber-dark/50 rounded-lg p-3 border border-neon-cyan/20">
                          <p className="text-xs text-neon-cyan font-rajdhani mb-2">🔗 Live Demo:</p>
                          <p className="text-xs text-muted-foreground font-mono break-all mb-2">
                            {image.url.length > 40 ? `${image.url.substring(0, 37)}...` : image.url}
                          </p>
                          <Button variant="outline" size="sm" className="w-full hover-glow cyber-btn-outline bg-neon-cyan/10 hover:bg-neon-cyan/20 border-neon-cyan/50" asChild>
                            <a href={image.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              <span className="font-orbitron font-bold">View Live Demo</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

          </div>
        </div>

       

        {/* Call to Action */}
        <div className="text-center mt-20 animate-cyber-fade-up" style={{ animationDelay: '1.2s' }}>
          <div className="cyber-card inline-block hover-lift animate-cyber-pulse">
            <CardContent className="p-8">
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-neon-cyan animate-cyber-glow">
                Ready to Collaborate?
              </h3>
              <p className="text-muted-foreground font-rajdhani mb-6">
                Explore my portfolio and let's discuss how we can bring your ideas to life with cutting-edge technology
              </p>
              <a href="#contact" className="cyber-btn font-orbitron font-semibold px-8 py-3 inline-block">
                Get In Touch
              </a>
            </CardContent>
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-cyber-dark/95 backdrop-blur-sm flex items-center justify-center lightbox-modal animate-cyber-fade-in">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-60 p-2 rounded-full bg-neon-cyan/20 hover:bg-neon-cyan/40 transition-colors duration-300 touch-btn"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-neon-cyan" />
          </button>

          {/* Previous Button */}
          {selectedImage > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neon-cyan/20 hover:bg-neon-cyan/40 transition-colors duration-300 animate-cyber-pulse touch-btn lightbox-controls"
              onClick={() => setSelectedImage(selectedImage - 1)}
            >
              <ChevronLeft className="w-6 h-6 text-neon-cyan" />
            </button>
          )}

          {/* Next Button */}
          {selectedImage < images.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neon-cyan/20 hover:bg-neon-cyan/40 transition-colors duration-300 animate-cyber-pulse touch-btn lightbox-controls"
              onClick={() => setSelectedImage(selectedImage + 1)}
            >
              <ChevronRight className="w-6 h-6 text-neon-cyan" />
            </button>
          )}

          {/* Main Image */}
          <div className="max-w-4xl max-h-[80vh] relative">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={800}
              height={600}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl border border-neon-cyan/30 lightbox-image"
            />

            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-cyber-dark/80 backdrop-blur-sm p-4 rounded-b-lg border-t border-neon-cyan/30">
              <h3 className="font-orbitron font-bold text-xl text-neon-cyan mb-2">
                {images[selectedImage].title}
              </h3>
              <p className="text-muted-foreground font-rajdhani mb-3">
                {images[selectedImage].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {images[selectedImage].tech.map((tech, i) => (
                  <Badge
                    key={i}
                    className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50 animate-cyber-pulse"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
