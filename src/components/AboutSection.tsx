import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Instagram, MessageCircle, MapPin, Clock, Award } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "Node.js/Express", level: 85 },
    { name: "Content Creation", level: 98 },
    { name: "UI/UX Design", level: 80 },
  ];

  const timeline = [
    { year: "2021", title: "Started Coding", description: "Began my programming journey" },
    { year: "2022", title: "First Project", description: "Built my first web application" },
    { year: "2023", title: "Content Creation", description: "Started @code.clash on Instagram" },
    { year: "2024", title: "134.565k+ Followers", description: "Growing developer community" },
  ];

  const funFacts = [
    { icon: "☕", label: "Coffee consumed", value: "500+" },
    { icon: "🌙", label: "Late night coding", value: "1000+" },
    { icon: "💡", label: "Ideas generated", value: "200+" },
    { icon: "🎯", label: "Projects completed", value: "50+" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-cyber-fade-up">
          <h2 className="font-orbitron font-bold mb-6 animate-cyber-glow">
            About <span className="gradient-text animate-neon-flicker">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Discover the story, passion, and dedication behind my journey as a
            content creator and full-stack developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="cyber-card hover-lift animate-cyber-fade-up">
              <CardContent className="p-8 text-center">
                {/* Profile Image */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neon-cyan/50 animate-cyber-pulse">
                  <img
                    src="/profile-photo.jpg"
                    alt="Anubhav Chaudhary"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Basic Info */}
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-orbitron font-bold mb-2 animate-cyber-glow">Anubhav Chaudhary</h3>
                    <p className="text-muted-foreground font-rajdhani">Content Creator & Full-Stack Developer</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed font-rajdhani">
                    I'm a passionate content creator and full-stack developer who loves
                    sharing knowledge with the developer community. Through my Instagram
                    @code.clash, I create daily content about programming, web development,
                    and tech insights.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  <Button className="w-full cyber-btn font-orbitron font-semibold">
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow on Instagram
                  </Button>
                  <Button variant="outline" className="w-full cyber-btn-outline font-orbitron font-semibold">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 text-center border-t border-neon-cyan/30 pt-6">
                  <div className="animate-cyber-pulse">
                    <div className="flex items-center justify-center text-neon-cyan mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                    </div>
                    <div className="text-xs text-muted-foreground font-rajdhani">Based in</div>
                    <div className="text-sm font-orbitron font-medium">Bangalore, IN</div>
                  </div>
                  <div className="animate-cyber-pulse" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center justify-center text-neon-green mb-1">
                      <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-cyber-pulse"></div>
                    </div>
                    <div className="text-xs text-muted-foreground font-rajdhani">Status</div>
                    <div className="text-sm font-orbitron font-medium text-neon-green">Available</div>
                  </div>
                  <div className="animate-cyber-pulse" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center justify-center text-neon-magenta mb-1">
                      <Award className="w-4 h-4 mr-1" />
                    </div>
                    <div className="text-xs text-muted-foreground font-rajdhani">Experience</div>
                    <div className="text-sm font-orbitron font-medium">5+ Years</div>
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
