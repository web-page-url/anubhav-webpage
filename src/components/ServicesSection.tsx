import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Code, Users } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      count: "450+",
      title: "Content Creation",
      description: "Educational programming content for social media platforms.",
      features: ["Instagram Content", "Tutorial Videos", "Code Explanations", "Tech Reviews"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <Code className="w-8 h-8" />,
      count: "50+",
      title: "Web Development",
      description: "Custom web applications and websites built with modern technologies.",
      features: ["React/Next.js", "Full-Stack Apps", "Responsive Design", "Performance Optimization"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Users className="w-8 h-8" />,
      count: "45+",
      title: "Content Collaboration",
      description: "Collaborative content creation and sharing for developers and creators.",
      features: ["Brand partnerships", "Sponsored content", "Community engagement", "Creator collaborations"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond content creation, I build engaging web applications and foster
            collaborations that empower developers and creators.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`glass-card hover-lift bg-gradient-to-br ${service.color} ${service.borderColor} animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Icon & Count */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-card/50">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">{service.count}</div>
                    <div className="text-sm text-muted-foreground">
                      {service.title.split(' ')[0]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button variant="outline" className="w-full mt-6 hover-glow">
                    Contact Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
