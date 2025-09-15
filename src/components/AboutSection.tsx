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
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the story, passion, and dedication behind my journey as a
            content creator and full-stack developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="glass-card hover-lift animate-fade-up">
              <CardContent className="p-8 text-center">
                {/* Profile Image */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src="/profile-photo.jpg"
                    alt="Imtiyaz Nandasaniya"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Basic Info */}
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Imtiyaz Nandasaniya</h3>
                    <p className="text-muted-foreground">Content Creator & Full-Stack Developer</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I'm a passionate content creator and full-stack developer who loves
                    sharing knowledge with the developer community. Through my Instagram
                    @code.clash, I create daily content about programming, web development,
                    and tech insights.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow on Instagram
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 text-center border-t border-border pt-6">
                  <div>
                    <div className="flex items-center justify-center text-muted-foreground mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                    </div>
                    <div className="text-xs text-muted-foreground">Based in</div>
                    <div className="text-sm font-medium">Ahmedabad, IN</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center text-green-500 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    </div>
                    <div className="text-xs text-muted-foreground">Status</div>
                    <div className="text-sm font-medium">Available</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center text-muted-foreground mb-1">
                      <Award className="w-4 h-4 mr-1" />
                    </div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                    <div className="text-sm font-medium">3+ Years</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills Section */}
            <Card className="glass-card animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          animation: 'fade-in 0.8s ease-out forwards'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Journey Timeline */}
            <Card className="glass-card animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">My Journey</h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={item.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                          {item.year}
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-px h-12 bg-border mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="glass-card animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Fun Facts</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {funFacts.map((fact, index) => (
                    <div key={fact.label} className="text-center">
                      <div className="text-4xl mb-3">{fact.icon}</div>
                      <div className="text-sm text-muted-foreground mb-1">{fact.label}</div>
                      <div className="font-bold gradient-text text-xl">{fact.value}</div>
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
