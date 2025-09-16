"use client"

import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export const Header = () => {
  const { setTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/90 backdrop-blur-xl border-b border-neon-cyan/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-orbitron font-bold gradient-text animate-cyber-glow">
            Anubhav.Codes
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-muted-foreground hover:text-neon-cyan transition-all duration-300 hover:animate-cyber-glow font-rajdhani font-medium"
            >
              About
            </a>
            <a
              href="#resume"
              className="text-muted-foreground hover:text-neon-cyan transition-all duration-300 hover:animate-cyber-glow font-rajdhani font-medium"
            >
              Resume
            </a>
            <a
              href="#gallery"
              className="text-muted-foreground hover:text-neon-cyan transition-all duration-300 hover:animate-cyber-glow font-rajdhani font-medium"
            >
              Projects
            </a>
            <a
              href="#tech-stack"
              className="text-muted-foreground hover:text-neon-cyan transition-all duration-300 hover:animate-cyber-glow font-rajdhani font-medium"
            >
              Tech-Stack
            </a>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              className="border-neon-cyan/50 hover:border-neon-cyan bg-transparent hover:bg-neon-cyan/10 transition-all duration-300 animate-cyber-pulse"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-neon-cyan dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-neon-magenta dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-neon-cyan/50 hover:border-neon-cyan bg-transparent hover:bg-neon-cyan/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-[1.2rem] w-[1.2rem] text-neon-cyan" />
              ) : (
                <Menu className="h-[1.2rem] w-[1.2rem] text-neon-cyan" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-neon-cyan/20 animate-cyber-fade-up">
            <nav className="flex flex-col space-y-4">
              <a
                href="#blogs"
                className="text-muted-foreground hover:text-neon-cyan transition-all duration-300 hover:animate-cyber-glow font-rajdhani font-medium py-2 px-3 rounded-lg hover:bg-neon-cyan/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </a>
              <a
                href="#resume"
                className="text-muted-foreground hover:text-neon-cyan transition-all duration-300 hover:animate-cyber-glow font-rajdhani font-medium py-2 px-3 rounded-lg hover:bg-neon-cyan/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
              <a
                href="#gallery"
                className="text-muted-foreground hover:text-neon-cyan transition-all duration-300 hover:animate-cyber-glow font-rajdhani font-medium py-2 px-3 rounded-lg hover:bg-neon-cyan/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#links"
                className="text-muted-foreground hover:text-neon-cyan transition-all duration-300 hover:animate-cyber-glow font-rajdhani font-medium py-2 px-3 rounded-lg hover:bg-neon-cyan/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Links
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
