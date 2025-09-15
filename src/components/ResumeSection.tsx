import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, Globe, MapPin, Calendar, Award, BookOpen, Briefcase, Code, ExternalLink } from "lucide-react";

export const ResumeSection = () => {
  const workExperience = [
    {
      title: "Software Developer – Aditi Consulting (Client: PayPal)",
      period: "Nov 2024 – Present",
      location: "Bangalore",
      achievements: [
        "Modernized PayPal's Asset Management Tool using Next.js, Node.js",
        "Migrated legacy PHP systems into modular React.js and Node.js architecture",
        "Optimized performance with SSR in Next.js and RESTful API integration"
      ],
      tech: ["Next.js", "Node.js", "React.js", "REST APIs", "Git", "Linux"],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Senior Software Developer – Apollo 24/7",
      period: "Feb 2023 – Nov 2024",
      location: "Gurugram",
      achievements: [
        "Built full-stack healthcare apps using Next.js, Express.js, GraphQL",
        "Designed database schemas with SQL & MongoDB",
        "Implemented Google services integration (Auth, Sync)",
        "Focused on SEO optimization & SSR for high traffic apps"
      ],
      tech: ["Next.js", "GraphQL", "MongoDB", "Express.js", "AWS"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Full Stack Developer – Noormer Tech",
      period: "Feb 2023",
      location: "Gurugram",
      achievements: [
        "Built holidaysocho.com from scratch",
        "Integrated ChatGPT, Google Maps API, Weather & Image APIs",
        "Led a team of 6 developers, delivering frontend & backend successfully"
      ],
      tech: ["Next.js", "MongoDB", "Node.js", "REST APIs", "AWS"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Full Stack Developer – Tripzygo International",
      period: "Jun 2022",
      location: "Gurugram",
      achievements: [
        "Developed tripzygo.in – scalable travel platform",
        "Built secure user data flows & MongoDB backend",
        "Implemented advanced filtering & SEO"
      ],
      tech: ["Next.js", "Node.js", "MongoDB", "REST APIs"],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Data Science Manager (M1) – ICICI Bank",
      period: "Oct 2021",
      location: "Hyderabad",
      achievements: [
        "Developed ML solutions for EMI prediction & debit card renewal",
        "Handled large-scale datasets with millions of records",
        "Collaborated with leadership on AI-driven solutions"
      ],
      tech: ["Python", "MySQL", "Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Software Developer – NSL Hub",
      period: "Feb 2021",
      location: "Hyderabad",
      achievements: [
        "Built full-stack solutions using PHP, Python, JavaScript, React",
        "Worked on compiler-based systems & innovative tools"
      ],
      tech: ["PHP", "Python", "JavaScript", "React"],
      color: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "IIT Mandi",
      period: "2016–2020",
      grade: "68%",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      degree: "Class 12",
      institution: "NIOS",
      period: "2015",
      grade: "78%",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      degree: "Class 10",
      institution: "JNV Maharajganj",
      period: "2013",
      grade: "93%",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const projects = [
    { name: "AI with Voice Assistance", url: "https://ai-anubhav.netlify.app/ai", tech: ["AI", "Voice"] },
    { name: "Amazing Daily Planner", url: "https://amazing-daily-planner.netlify.app/", tech: ["React", "Planning"] },
    { name: "Bawal Code (Hindi Programming Language)", url: "https://bawal-code.vercel.app/", tech: ["Programming", "Language"] },
    { name: "Code Spark AI (Code Generator Chatbot)", url: "https://code-spark-ai.vercel.app/", tech: ["AI", "Chatbot"] },
    { name: "Sticker Magic (Custom Stickers App)", url: "https://sticker-magic.vercel.app/", tech: ["React", "Creative"] },
    { name: "Better Prompt Tool (AI Prompt Optimizer)", url: "https://better-prompt-alpha.vercel.app/", tech: ["AI", "Optimization"] },
    { name: "3D Shooting Game (Three.js)", url: "https://anubhav-3d-shooting-game.netlify.app/", tech: ["3D", "Game"] },
    { name: "AI Doctor 24/7", url: "https://doctor247.netlify.app/", tech: ["AI", "Healthcare"] },
    { name: "Text-to-Speech Converter", url: "https://anubhav-text-to-speech.netlify.app/", tech: ["Audio", "AI"] },
    { name: "QR Code Generator", url: "https://123anubhav.github.io/qr_link/", tech: ["QR", "Generator"] },
    { name: "GitHub User Search App", url: "https://anubhav-github-users-search.netlify.app/", tech: ["GitHub", "Search"] },
    { name: "AI Travel Assistant Chatbot", url: "https://anubhav-holiday-socho-ai.netlify.app/", tech: ["AI", "Travel"] },
    { name: "AI Powered Python Learning App", url: "https://next-gen-python-learn.vercel.app/", tech: ["AI", "Education"] },
    { name: "Portfolio Website", url: "https://anubhav-webpage.netlify.app/", tech: ["Portfolio", "React"] }
  ];

  const skills = {
    frontend: ["Next.js", "React.js", "JavaScript (ES6+)", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Angular", "Bootstrap"],
    backend: ["Node.js", "Express.js", "REST APIs", "GraphQL", "PHP"],
    databases: ["MongoDB", "MySQL", "SQL"],
    ai_ml: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "NLP", "Predictive Modeling"],
    cloud_devops: ["AWS", "Git", "Linux"],
    other: ["Compiler Design", "Android Game Development"]
  };

  const achievements = [
    "Inter IIT Tech Meet (IIT Bombay 2018, IIT Roorkee 2019)",
    "Competitive Programming: C++ 4★, Python 4★",
    "Multiple awards from GeeksforGeeks & LeetCode",
    "Built & published 3 Android Games on Google Play Store"
  ];

  const strengths = [
    "Quick Learner", "Problem Solver", "Leadership", "Exploring AI",
    "Building Scalable Systems", "SEO & Performance Optimization"
  ];

  return (
    <section id="resume" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-cyber-fade-up">
          <h2 className="font-orbitron font-bold mb-6 animate-cyber-glow">
            My <span className="gradient-text animate-neon-flicker">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            A comprehensive overview of my professional journey, skills, and achievements
            in software development and technology.
          </p>
        </div>

        <div className="space-y-12">
          {/* Contact Info & Summary */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Card */}
            <Card className="cyber-card hover-lift animate-cyber-fade-up lg:col-span-1">
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold mb-6 animate-cyber-glow">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-sm">anubhavchaudhary459@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-sm">+91 9736211316</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm">Bangalore, India</span>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" size="sm" className="hover-glow">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="hover-glow">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="hover-glow">
                      <Globe className="w-4 h-4 mr-2" />
                      Portfolio
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary Card */}
            <Card className="cyber-card hover-lift animate-cyber-fade-up lg:col-span-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold mb-6 animate-cyber-glow">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Innovative Full Stack Software Developer with 5+ years of experience in designing and developing
                  scalable, high-performance applications across fintech, healthcare, travel, and consulting domains.
                  A B.Tech (CSE) graduate from IIT Mandi, with expertise in Next.js, React.js, Node.js, JavaScript,
                  Python, MongoDB, SQL, and AI/ML. Skilled in team leadership, problem solving, and building
                  user-centric applications, with proven success at PayPal, Apollo 24/7, ICICI Bank, Tripzygo
                  International, Noormer Tech, and NSL Hub.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Work Experience */}
          <Card className="cyber-card animate-cyber-fade-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-orbitron font-bold mb-8 flex items-center animate-cyber-glow">
                <Briefcase className="w-6 h-6 mr-3 text-neon-cyan animate-cyber-pulse" />
                Work Experience
              </h3>
              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div key={index} className={`glass-card hover-lift bg-gradient-to-r ${job.color} animate-fade-up`} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold mb-2">{job.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            {job.period} • {job.location}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="glass-card animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-primary" />
                Education
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {education.map((edu, index) => (
                  <Card key={index} className={`glass-card hover-lift bg-gradient-to-br ${edu.color} animate-fade-up`} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <CardContent className="p-6 text-center">
                      <h4 className="font-bold mb-2">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                      <Badge variant="outline" className="text-xs">
                        Grade: {edu.grade}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="glass-card animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Code className="w-6 h-6 mr-3 text-primary" />
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <div key={category} className="animate-fade-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                    <h4 className="font-bold mb-3 capitalize text-primary">{category.replace('_', ' & ')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs hover-glow">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="glass-card animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-primary" />
                Featured Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="glass-card hover-lift animate-fade-up group" style={{ animationDelay: `${0.5 + index * 0.05}s` }}>
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3 group-hover:text-primary transition-colors">{project.name}</h4>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full hover-glow" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements & Strengths */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Achievements */}
            <Card className="glass-card animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-primary" />
                  Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Strengths */}
            <Card className="glass-card animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Key Strengths</h3>
                <div className="flex flex-wrap gap-3">
                  {strengths.map((strength, index) => (
                    <Badge key={index} variant="outline" className="px-4 py-2 hover-glow hover-lift">
                      {strength}
                    </Badge>
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
