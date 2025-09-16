import { Card, CardContent } from "@/components/ui/card";

export const TechStackSection = () => {
  const technologies = [
    { name: "HTML", color: "from-orange-500 to-red-500" },
    { name: "CSS", color: "from-blue-500 to-cyan-500" },
    { name: "Javascript", color: "from-yellow-500 to-orange-500" },
    { name: "Typescript", color: "from-blue-600 to-blue-400" },
    { name: "ReactJS", color: "from-cyan-500 to-blue-500" },
    { name: "NodeJS", color: "from-green-600 to-green-400" },
    { name: "ExpressJS", color: "from-gray-600 to-gray-400" },
    { name: "NextJS", color: "from-gray-900 to-gray-700" },
    { name: "MongoDB", color: "from-green-500 to-emerald-500" },
    { name: "GraphQL", color: "from-pink-500 to-purple-500" },
    { name: "Postman", color: "from-orange-500 to-red-500" },
    { name: "Redux", color: "from-purple-500 to-indigo-500" },
    { name: "GitHub", color: "from-gray-800 to-black" },
    { name: "Docker", color: "from-blue-600 to-cyan-500" },
    { name: "Cypress", color: "from-gray-700 to-gray-500" }
  ];

  return (
    <section id="tech-stack" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 font-orbitron">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 font-rajdhani">
            Explore the tools and technologies I rely on to design, develop,
            and deploy impactful digital experiences.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className="glass-card hover-lift group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Tech Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-2xl font-bold text-white">
                    {tech.name.charAt(0)}
                  </span>
                </div>

                {/* Tech Name */}
                <div className="text-sm font-medium group-hover:gradient-text transition-all">
                  {tech.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
