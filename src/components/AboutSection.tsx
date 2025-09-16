import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Instagram, MessageCircle, MapPin, Clock, Award } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 98 },
    { name: "React/Next.js", level: 95 },
    { name: "Node.js/Express", level: 92 },
    { name: "System Architecture", level: 90 },
    { name: "Cloud & DevOps", level: 88 },
    { name: "Content Creation", level: 95 },
  ];

  const timeline = [
    { year: "20", title: "Started Coding", description: "Began my programming journey" },
    { year: "2021", title: "First Professional Role", description: "Joined first software development position" },
    { year: "2023", title: "Senior Engineer", description: "Promoted to Senior Software Engineer role" },
    { year: "2025", title: "Senior Softwrae Engineer", description: "WoSenior Software Engineer" }
  ];

  const funFacts = [
    { icon: "☕", label: "Coffee consumed", value: "500+" },
    { icon: "🌙", label: "Late night coding", value: "1000+" },
    { icon: "💡", label: "Ideas generated", value: "200+" },
    { icon: "🎯", label: "Projects completed", value: "50+" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-cyber-fade-up">
          <h2 className="font-orbitron font-bold mb-4 sm:mb-6 animate-cyber-glow text-2xl sm:text-3xl lg:text-4xl">
            About <span className="gradient-text animate-neon-flicker">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani px-4">
            Discover my journey as a Senior Software Engineer passionate about
            building scalable solutions and empowering developers through content creation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="cyber-card hover-lift animate-cyber-fade-up">
              <CardContent className="p-8 text-center">
                {/* Profile Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-3 sm:border-4 border-neon-cyan/50 animate-cyber-pulse">
                  <picture>
                    {/* AVIF format for modern browsers */}
                    <source srcSet="/Anubhav-img-avif.avif" type="image/avif" />
                    {/* WebP format for supported browsers */}
                    <source srcSet="/Anubhav-img-webp.webp" type="image/webp" />
                    {/* Optimized JPEG as fallback */}
                    <img
                      src="/Anubhav-img-optimized.jpg"
                      alt="Anubhav Chaudhary - Senior Software Engineer and Tech Educator, passionate about sharing programming knowledge and building scalable solutions"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                </div>

                {/* Basic Info */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-1 sm:mb-2 animate-cyber-glow">Anubhav Chaudhary</h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-rajdhani">Senior Software Engineer & Content Creator</p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-rajdhani px-2 sm:px-0">
                    I'm Anubhav Chaudhary — a Senior Software Engineer passionate about building scalable solutions and sharing knowledge.
                    Through my Instagram @anubhav.codes, I create daily programming tips, tutorials, and behind-the-scenes development
                    content to help fellow developers grow.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 px-2 sm:px-0">
                  <Button className="w-full cyber-btn font-orbitron font-semibold text-sm sm:text-base">
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow on Instagram
                  </Button>
                  <Button variant="outline" className="w-full cyber-btn-outline font-orbitron font-semibold text-sm sm:text-base">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center border-t border-neon-cyan/30 pt-4 sm:pt-6 px-2 sm:px-0">
                  <div className="animate-cyber-pulse">
                    <div className="flex items-center justify-center text-neon-cyan mb-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    </div>
                    <div className="text-xs text-muted-foreground font-rajdhani">Based in</div>
                    <div className="text-xs sm:text-sm font-orbitron font-medium">Bangalore, IN</div>
                  </div>
                  <div className="animate-cyber-pulse" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center justify-center text-neon-green mb-1">
                      <div className="w-2 h-2 bg-neon-green rounded-full mr-1 sm:mr-2 animate-cyber-pulse"></div>
                    </div>
                    <div className="text-xs text-muted-foreground font-rajdhani">Status</div>
                    <div className="text-xs sm:text-sm font-orbitron font-medium text-neon-green">Available</div>
                  </div>
                  <div className="animate-cyber-pulse" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center justify-center text-neon-magenta mb-1">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    </div>
                    <div className="text-xs text-muted-foreground font-rajdhani">Experience</div>
                    <div className="text-xs sm:text-sm font-orbitron font-medium">5+ Years</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills Section */}
            <Card className="cyber-card animate-cyber-fade-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold mb-6 animate-cyber-glow">Skills & Technologies</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-rajdhani font-medium text-neon-cyan">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-orbitron">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-cyber-light rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-neon-cyan to-neon-magenta h-2 rounded-full animate-cyber-pulse"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`,
                            transition: 'width 0.8s ease-out'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Journey Timeline */}
            <Card className="cyber-card animate-cyber-fade-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold mb-6 animate-cyber-glow">My Journey</h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={item.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center text-cyber-dark font-orbitron font-bold text-sm animate-cyber-pulse">
                          {item.year}
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-px h-12 bg-neon-cyan/50 mt-2 animate-cyber-pulse"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <h4 className="font-orbitron font-bold text-lg mb-2 text-neon-cyan">{item.title}</h4>
                        <p className="text-muted-foreground font-rajdhani">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="cyber-card animate-cyber-fade-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold mb-6 animate-cyber-glow">Fun Facts</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {funFacts.map((fact, index) => (
                    <div key={fact.label} className="text-center animate-cyber-pulse" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                      <div className="text-4xl mb-3 animate-cyber-float">{fact.icon}</div>
                      <div className="text-sm text-muted-foreground mb-1 font-rajdhani">{fact.label}</div>
                      <div className="font-orbitron font-bold gradient-text text-xl animate-cyber-glow">{fact.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
