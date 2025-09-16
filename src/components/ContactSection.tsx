import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Linkedin, Github, Twitter } from "lucide-react";

export const ContactSection = () => {
  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      platform: "Instagram",
      handle: "@anubhav.codes",
      color: "from-pink-500 to-purple-500",
      href: "https://instagram.com/code.clash"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      platform: "LinkedIn",
      handle: "imtiyaz-nandasaniya",
      color: "from-blue-600 to-blue-400",
      href: "https://linkedin.com/in/imtiyaz-nandasaniya"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      platform: "Twitter",
      handle: "@anubhav.codes",
      color: "from-blue-400 to-cyan-400",
      href: "https://twitter.com/codeclashIg"
    },
    {
      icon: <Github className="w-6 h-6" />,
      platform: "GitHub",
      handle: "imtiyazCode",
      color: "from-gray-600 to-gray-800",
      href: "https://github.com/imtiyazCode"
    }
  ];

  const services = [
    {
      title: "Content Collaboration",
      description: "Brand partnerships and sponsored content",
      features: ["Social media content", "Tutorial creation", "Brand storytelling", "Community engagement"]
    },
    {
      title: "Development Projects",
      description: "Web apps, websites, and technical consulting",
      features: ["Full-stack development", "UI/UX design", "Performance optimization", "Technical mentoring"]
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Let's Connect
            </h2>
            <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you want to collaborate on content, need development work,
            or just want to say hi - I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-card animate-fade-up">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  {/* Instagram */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Instagram</div>
                      <div className="text-muted-foreground">@anubhav.codes</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">codeclashofficial@gmail.com</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Social Presence</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className={`glass-card hover-lift group cursor-pointer bg-gradient-to-br ${social.color}/10 border-${social.color.split(' ')[1].split('-')[1]}-500/30`}>
                        <CardContent className="p-4 text-center">
                          <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            {social.icon}
                          </div>
                          <div className="text-sm font-medium mb-1">{social.platform}</div>
                          <div className="text-xs text-muted-foreground">{social.handle}</div>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6">What I Can Help With</h3>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <Card key={service.title} className="glass-card hover-lift">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                      <p className="text-muted-foreground mb-4">{service.description}</p>

                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 hover-glow"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
