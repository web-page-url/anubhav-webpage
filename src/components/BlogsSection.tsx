import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const BlogsSection = () => {
  const blogs = [
    {
      title: "ReactJS Cheatsheet",
      description: "This comprehensive ReactJS Cheatsheet covers everything you need to build modern React applications. It includes JSX, components, hooks, state management, as well as advanced features like React 18 concurrent rendering, portals, error boundaries, and server components.",
      category: "React",
      tag: "Cheatsheet",
      date: "August 2, 2025",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "JavaScript Cheatsheet",
      description: "A complete JavaScript Cheatsheet that helps you quickly brush up on core concepts, ES6 features, data types, functions, event loop, DOM manipulation, and more.",
      category: "Javascript",
      tag: "Cheatsheet",
      date: "July 22, 2025",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "CSS Cheatsheet",
      description: "A comprehensive CSS guide covering selectors, units, typography, transitions, animations, transforms (2D & 3D), variables, filters, clip-paths, and modern layouts.",
      category: "Css",
      tag: "Cheatsheet",
      date: "July 20, 2025",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "HTML Cheatsheet",
      description: "A beginner-friendly guide to the most commonly used HTML elements and concepts.",
      category: "Html",
      tag: "Cheatsheet",
      date: "July 19, 2025",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="blogs" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Blogs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into our Featured Blog for the latest trends, inspiring stories,
            and creative ideas to fuel your passion and curiosity.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogs.map((blog, index) => (
            <Card
              key={blog.title}
              className="glass-card hover-lift group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Blog Image Placeholder */}
                <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${blog.gradient} mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <div className="text-6xl font-bold text-white/20">
                    {blog.category.charAt(0)}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {blog.tag}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {blog.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-bold text-lg leading-tight group-hover:gradient-text transition-all">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Date */}
                  <div className="flex items-center text-xs text-muted-foreground pt-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {blog.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="outline" size="lg" className="hover-glow">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};
