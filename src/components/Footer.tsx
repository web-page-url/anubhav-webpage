"use client"

import { Instagram, Twitter, Linkedin, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/anubhav___13", label: "Instagram" },
    { icon: Twitter, href: "https://instagram.com/anubhav___13", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/anubhav-chaudhary", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/13anubhav", label: "GitHub" },
  ];

  return (
    <footer className="bg-card/30 border-t border-border py-12 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="text-3xl font-bold gradient-text">Anubhav.Codes</div>
            <p className="text-muted-foreground max-w-md mx-auto">
              Making coding accessible to everyone through daily content creation and development.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card/50 hover:bg-primary/20 transition-all hover-lift hover-glow"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              © 2025 Anubhav.Codes. Built with React & Tailwind CSS. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-24 left-8 bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-cyan/80 hover:to-neon-purple/80 border border-neon-cyan/50 hover:border-neon-cyan animate-cyber-pulse shadow-lg hover:shadow-neon-cyan/50"
      >
        <ArrowUp className="w-5 h-5 text-cyber-dark" />
        <span className="sr-only">Back to top</span>
      </Button>
    </footer>
  );
};
