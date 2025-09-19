"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar, Building } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
  verificationUrl: string;
  description?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "JavaScript And Data Structure",
    organization: "FreeCodeCamp",
    date: "2024",
    image: "/Certi-1.png",
    verificationUrl: "https://www.freecodecamp.org/certification/fcc79f9d0e0-815d-4548-b228-7d14453ab5e5/javascript-algorithms-and-data-structures",
    // description: "Complete web development certification covering frontend and backend technologies"
    description: "JavaScript and Data Structure Certification"
  },
  {
    id: 2,
    title: "Mern Stack developer",
    organization: "Hash Jobs",
    date: "2024",
    image: "/Certi-2.png",
    verificationUrl: "https://drive.google.com/file/d/1VLmJ2bDUxXD4KqfZ40Zujz7Y_3-tiiFW/view?usp=share_link",
    description: "Advanced Mern Stack developer certification"
  },
  {
    id: 3,
    title: "Front End Development Libraries",
    organization: "FreeCodeCamp",
    date: "2023",
    image: "/Certi-3.png",
    verificationUrl: "https://www.freecodecamp.org/certification/fcc79f9d0e0-815d-4548-b228-7d14453ab5e5/front-end-development-libraries",
    description: "Front End Development Libraries Certification"
  },
  {
    id: 4,
    title: "JavaScript Certificate",
    organization: "SoloLearn",
    date: "2023",
    image: "/Certi-4.png",
    verificationUrl: "https://www.sololearn.com/certificates/CC-B0FYPCIV",
    description: "JavaScript Certificate"
  },
  {
    id: 5,
    title: "HTML5",
    organization: "SoloLearn",
    date: "2023",
    image: "/Certi-5.png",
    verificationUrl: "https://www.sololearn.com/certificates/CT-2OHHGZ85",
    description: "HTML5 Certification"
  },
  {
    id: 6,
    title: "Node.js",
    organization: "Simplilearn",
    date: "2023",
    image: "/Certi-6.png",
    verificationUrl: "https://certificates.simplicdn.net/share/4695024_1701782948.pdf",
    description: "Node.js Certification"
  },
  {
    id: 7,
    title: "Ambient Agents with LangGraph",
    organization: "LangChain Academy",
    date: "2023",
    image: "/Certi-7.png",
    verificationUrl: "https://academy.langchain.com/certificates/mmcr2fzyub",
    description: "Ambient Agents with LangGraph Certification"
  },
  {
    id: 8,
    title: "React + Redux",
    organization: "SoloLearn",
    date: "2022",
    image: "/Certi-8.png",
    verificationUrl: "https://www.sololearn.com/certificates/CC-GTBBPUBY",
    description: "React + Redux Certification"
  },
  {
    id: 9,
    title: "Web Development",
    organization: "SoloLearn",
    date: "2022",
    image: "/Certi-9.png",
    verificationUrl: "https://www.sololearn.com/en/certificates/CC-C7LFSS0I",
    description: "Web Development Certification"
  },
  {
    id: 10,
    title: "Coding Foundations",
    organization: "SoloLearn",
    date: "2022",
    image: "/Certi-10.png",
    verificationUrl: "https://www.sololearn.com/en/certificates/CC-QPSZU21N",
    description: "Coding Foundations Certification"
  },
  {
    id: 11,
    title: "Introduction To LLM",
    organization: "SoloLearn",
    date: "2022",
    image: "/Certi-11.png",
    verificationUrl: "https://pmi.org/certificate/BCD890",
    description: "Introduction To LLM Certification"
  },
  {
    id: 12,
    title: "AI For Everyone",
    organization: "Coursera",
    date: "2022",
    image: "/Certi-12.png",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/HGSX3VFLEZP1",
    description: "AI For Everyone Certification"
  }
];

export const CertificatesSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden" id="certificates">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-dark/95 to-cyber-dark"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-cyber-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-cyber-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto max-w-7xl w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="px-4 py-2 text-sm bg-neon-magenta/20 text-neon-magenta border-neon-magenta/50 animate-cyber-pulse font-rajdhani mb-4">
            🏆 Professional Certifications
          </Badge>

          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            <span className="gradient-text animate-neon-flicker">Certificates</span>{" "}
            <span className="text-muted-foreground">Collection</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-rajdhani">
            Showcasing my journey of continuous learning and professional development through recognized certifications
            in technology, design, and project management.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className="cyber-card group hover-lift animate-cyber-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} - ${certificate.organization}`}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />

                {/* Overlay with Award Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Award className="w-12 h-12 text-neon-cyan animate-cyber-pulse" />
                </div>
              </div>

              {/* Certificate Details */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-orbitron font-bold text-lg sm:text-xl text-foreground mb-1 group-hover:text-neon-cyan transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Building className="w-4 h-4 text-neon-purple" />
                    <span className="font-rajdhani">{certificate.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-neon-cyan" />
                    <span className="font-rajdhani">{certificate.date}</span>
                  </div>
                </div>

                {/* Description */}
                {certificate.description && (
                  <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                    {certificate.description}
                  </p>
                )}

                {/* Verification Link */}
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-cyber-dark font-orbitron font-semibold text-sm rounded-lg hover:from-neon-cyan/80 hover:to-neon-purple/80 transition-all duration-300 animate-cyber-pulse shadow-lg hover:shadow-neon-cyan/50 group/link"
                >
                  <span>Verify Certificate</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-block p-6 cyber-card hover-lift">
            <h3 className="font-orbitron font-bold text-xl sm:text-2xl mb-4 gradient-text">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground font-rajdhani mb-6 max-w-2xl">
              These certifications represent my commitment to staying current with industry trends and technologies.
              Each credential reflects hours of dedicated study and practical application.
            </p>
            <Badge className="px-6 py-3 text-base bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50 hover:bg-neon-cyan/30 transition-all duration-300 animate-cyber-pulse font-rajdhani">
              🚀 Always Learning, Always Growing
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
