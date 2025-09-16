import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Instagram, Briefcase } from "lucide-react";
import { CodeEditor } from "./CodeEditor";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-cyber-fade-up">
            {/* Status Badge */}
            <Badge className="px-4 py-2 text-sm bg-neon-magenta/20 text-neon-magenta border-neon-magenta/50 animate-cyber-pulse font-rajdhani">
              ⚡ Creating content daily
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-orbitron font-bold leading-tight animate-cyber-glow">
                I <span className="gradient-text animate-neon-flicker">Create</span>
              </h1>
              <h2 className="font-orbitron font-bold text-muted-foreground animate-cyber-glow" style={{ animationDelay: '0.2s' }}>
                For Developers & Tech Enthusiasts
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed font-rajdhani">
                I'm Anubhav Chaudhary — a Senior Software Engineer passionate about building scalable solutions and sharing knowledge.
                I create daily programming tips, tutorials, and behind-the-scenes development content on Instagram to help fellow developers grow.
              </p>

              {/* Availability Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-orbitron font-bold text-neon-cyan animate-cyber-glow">💼 Available for:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-magenta rounded-full animate-cyber-pulse"></div>
                    <span className="text-sm text-muted-foreground font-rajdhani">Freelance projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full animate-cyber-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <span className="text-sm text-muted-foreground font-rajdhani">Mentorship & career guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-purple rounded-full animate-cyber-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-sm text-muted-foreground font-rajdhani">Technical content collaborations</span>
                  </div>
                </div>
                <p className="text-sm text-neon-cyan font-rajdhani italic animate-cyber-glow" style={{ animationDelay: '0.3s' }}>
                  Let's build something impactful together.
                </p>
              </div>
            </div>

            {/* Role Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="px-4 py-2 bg-neon-purple/20 text-neon-purple border-neon-purple/50 hover:bg-neon-purple/30 transition-all duration-300 animate-cyber-pulse font-rajdhani">
                👨‍💻 Senior Software Engineer
              </Badge>
              <Badge className="px-4 py-2 bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50 hover:bg-neon-cyan/30 transition-all duration-300 animate-cyber-pulse font-rajdhani">
                🎨 Content Creator
              </Badge>
              <Badge className="px-4 py-2 bg-neon-blue/20 text-neon-blue border-neon-blue/50 hover:bg-neon-blue/30 transition-all duration-300 animate-cyber-pulse font-rajdhani">
                🧠 Tech Mentor
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="cyber-btn font-orbitron font-semibold">
                <Instagram className="w-5 h-5 mr-2" />
                Follow @anubhav.codes
              </Button>
              <Button variant="outline" size="lg" className="cyber-btn-outline font-orbitron font-semibold">
                <Briefcase className="w-5 h-5 mr-2" />
                Hire Me
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neon-cyan/30">
              <div className="text-center animate-cyber-pulse">
                <div className="text-3xl font-orbitron font-bold gradient-text animate-cyber-glow">132K+</div>
                <div className="text-sm text-muted-foreground font-rajdhani">Instagram Followers</div>
              </div>
              <div className="text-center animate-cyber-pulse" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-orbitron font-bold gradient-text animate-cyber-glow">441+</div>
                <div className="text-sm text-muted-foreground font-rajdhani">Posts Created</div>
              </div>
              <div className="text-center animate-cyber-pulse" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-orbitron font-bold gradient-text animate-cyber-glow">49+</div>
                <div className="text-sm text-muted-foreground font-rajdhani">Projects Built</div>
              </div>
            </div>
          </div>

          {/* Right Content - Code Editor */}
          <div className="lg:pl-8 animate-cyber-fade-up" style={{ animationDelay: '0.2s' }}>
            <CodeEditor />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16 animate-cyber-fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground mb-4 font-rajdhani animate-cyber-glow">Making coding accessible to everyone</p>
          <div className="inline-block animate-cyber-float">
            <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full relative hover:border-neon-cyan transition-colors duration-300">
              <div className="w-1 h-3 bg-neon-cyan rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-cyber-pulse"></div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2 font-rajdhani animate-cyber-glow" style={{ animationDelay: '0.1s' }}>Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};
